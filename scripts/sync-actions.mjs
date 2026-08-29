import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const catalogPath = path.join(root, "catalog", "catalog-v1.json");
const actionsRoot = path.join(root, "actions");
const checkOnly = process.argv.includes("--check");

const categories = {
  textTools: { directory: "text-tools", title: "Text tools" },
  clipboardTools: { directory: "clipboard-tools", title: "Clipboard tools" },
  developerTools: { directory: "developer-tools", title: "Developer tools" },
  productivity: { directory: "productivity", title: "Productivity" },
  appIntegrations: { directory: "app-integrations", title: "App integrations" }
};

const privacyLabels = {
  onDevice: "On your Mac",
  online: "Uses an online service",
  externalApp: "Uses another Mac app"
};

const catalog = JSON.parse(await fs.readFile(catalogPath, "utf8"));

function slugify(value) {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[’']/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function actionFile(action) {
  const category = categories[action.category];
  if (!category) throw new Error(`Unsupported category: ${action.category}`);
  return path.join("actions", category.directory, `${slugify(action.name)}.actionclip.json`);
}

function renderAction(action) {
  return `${JSON.stringify({
    schemaVersion: catalog.schemaVersion,
    documentType: "actionclip.marketplace.action-definition",
    catalogRevision: catalog.revision,
    publishedAt: catalog.publishedAt,
    action
  }, null, 2)}\n`;
}

function renderIndex() {
  const lines = [
    "# ActionClip action directory",
    "",
    `Browse ${catalog.actions.length} ready-made actions for selected text on your Mac.`,
    "",
    "Looking for a PopClip alternative, quick Mac text actions, or a faster way to handle small tasks without switching apps? Choose a category below, open any action to see what it does, then add it from the [ActionClip Marketplace](https://actionclip.app/marketplace).",
    "",
    "[Download ActionClip](https://actionclip.app/download) · [Marketplace](https://actionclip.app/marketplace) · [Back to overview](README.md)",
    ""
  ];

  for (const [key, category] of Object.entries(categories)) {
    const actions = catalog.actions
      .filter((action) => action.category === key)
      .sort((a, b) => a.name.localeCompare(b.name));
    lines.push(`## ${category.title}`, "", "| Action | What it does | Where it works |", "| --- | --- | --- |");
    for (const action of actions) {
      const relative = actionFile(action).replaceAll(path.sep, "/");
      const name = action.name.replaceAll("|", "\\|");
      const summary = action.summary.replaceAll("|", "\\|");
      const privacy = privacyLabels[action.privacyKind] ?? "See action details";
      lines.push(`| [${name}](${relative}) | ${summary} | ${privacy} |`);
    }
    lines.push("");
  }
  return `${lines.join("\n")}\n`;
}

const expected = new Map();
for (const action of catalog.actions) {
  const relative = actionFile(action);
  if (expected.has(relative)) throw new Error(`Generated filename collision: ${relative}`);
  expected.set(relative, renderAction(action));
}
expected.set("ACTIONS.md", renderIndex());

let mismatches = 0;
for (const [relative, contents] of expected) {
  const destination = path.join(root, relative);
  if (checkOnly) {
    const actual = await fs.readFile(destination, "utf8").catch(() => null);
    if (actual !== contents) {
      console.error(`Out of date: ${relative}`);
      mismatches += 1;
    }
  } else {
    await fs.mkdir(path.dirname(destination), { recursive: true });
    await fs.writeFile(destination, contents);
  }
}

async function generatedFiles(directory) {
  const files = [];
  for (const entry of await fs.readdir(directory, { withFileTypes: true }).catch(() => [])) {
    const absolute = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await generatedFiles(absolute));
    else if (entry.name.endsWith(".actionclip.json")) files.push(path.relative(root, absolute));
  }
  return files;
}

for (const relative of await generatedFiles(actionsRoot)) {
  if (!expected.has(relative)) {
    if (checkOnly) {
      console.error(`Unexpected generated file: ${relative}`);
      mismatches += 1;
    } else {
      await fs.unlink(path.join(root, relative));
    }
  }
}

if (mismatches > 0) process.exitCode = 1;
else console.log(`${checkOnly ? "Checked" : "Generated"} ${catalog.actions.length} action definitions from catalog ${catalog.revision}.`);
