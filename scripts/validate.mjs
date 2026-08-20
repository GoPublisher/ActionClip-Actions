import assert from "node:assert/strict";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const catalog = JSON.parse(await fs.readFile(path.join(root, "catalog", "catalog-v1.json"), "utf8"));

const allowed = {
  category: new Set(["textTools", "clipboardTools", "developerTools", "productivity", "appIntegrations"]),
  type: new Set(["built_in", "ai_prompt", "url", "apple_script", "javascript"]),
  outputMode: new Set(["text_replaceable", "copy_only", "opens_externally"]),
  privacyKind: new Set(["onDevice", "online", "externalApp"])
};
const requiredStrings = [
  "id", "name", "icon", "summary", "details", "template", "exampleInput",
  "exampleOutput", "requirements", "privacySummary", "category", "type",
  "outputMode", "privacyKind"
];
const uuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

assert.equal(catalog.schemaVersion, 1, "catalog schemaVersion must be 1");
assert.equal(typeof catalog.revision, "string", "catalog revision is required");
assert.ok(!Number.isNaN(Date.parse(catalog.publishedAt)), "publishedAt must be an ISO date");
assert.ok(Array.isArray(catalog.actions) && catalog.actions.length > 0, "catalog must contain actions");

const ids = new Set();
const names = new Set();
for (const action of catalog.actions) {
  for (const field of requiredStrings) {
    assert.equal(typeof action[field], "string", `${action.name ?? action.id ?? "action"}: ${field} must be a string`);
    assert.ok(action[field].trim().length > 0, `${action.name ?? action.id ?? "action"}: ${field} must not be empty`);
  }
  assert.match(action.id, uuid, `${action.name}: id must be a UUID`);
  assert.ok(!ids.has(action.id.toLowerCase()), `${action.name}: duplicate id`);
  assert.ok(!names.has(action.name.toLowerCase()), `${action.name}: duplicate name`);
  ids.add(action.id.toLowerCase());
  names.add(action.name.toLowerCase());

  assert.ok(allowed.category.has(action.category), `${action.name}: unsupported category`);
  assert.ok(allowed.type.has(action.type), `${action.name}: unsupported type`);
  assert.ok(allowed.outputMode.has(action.outputMode), `${action.name}: unsupported outputMode`);
  assert.ok(allowed.privacyKind.has(action.privacyKind), `${action.name}: unsupported privacyKind`);

  if (action.integration) {
    assert.equal(action.category, "appIntegrations", `${action.name}: integration requires appIntegrations category`);
    assert.match(action.integration.id, /^[a-z0-9-]{1,64}$/, `${action.name}: invalid integration id`);
    for (const field of ["name", "icon", "summary"]) {
      assert.ok(action.integration[field]?.trim(), `${action.name}: integration.${field} is required`);
    }
  }
}

async function collect(directory) {
  const files = [];
  for (const entry of await fs.readdir(directory, { withFileTypes: true })) {
    const absolute = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await collect(absolute));
    else if (entry.name.endsWith(".actionclip.json")) files.push(absolute);
  }
  return files;
}

const generatedFiles = await collect(path.join(root, "actions"));
assert.equal(generatedFiles.length, catalog.actions.length, "generated action count must match catalog");

const generatedById = new Map();
for (const file of generatedFiles) {
  const definition = JSON.parse(await fs.readFile(file, "utf8"));
  assert.equal(definition.schemaVersion, 1, `${file}: schemaVersion must be 1`);
  assert.equal(definition.documentType, "actionclip.marketplace.action-definition", `${file}: invalid documentType`);
  assert.equal(definition.catalogRevision, catalog.revision, `${file}: catalog revision mismatch`);
  assert.equal(definition.publishedAt, catalog.publishedAt, `${file}: publishedAt mismatch`);
  assert.ok(!generatedById.has(definition.action.id), `${file}: duplicate generated id`);
  generatedById.set(definition.action.id, definition.action);
}

for (const action of catalog.actions) {
  assert.deepEqual(generatedById.get(action.id), action, `${action.name}: generated definition differs from catalog`);
}

console.log(`Validated catalog ${catalog.revision}: ${catalog.actions.length} actions, unique IDs and names, and matching generated definitions.`);
