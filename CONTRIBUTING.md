# Contributing to ActionClip Actions

This repository is in private preview. Internal contributions are welcome now; public submissions will open after the marketplace release and moderation workflow are ready.

## Before proposing an action

An action should be small, understandable from its name, useful on selected text, and safe to run intentionally. Prefer one clear job over a configurable action that hides several unrelated behaviors.

Do not submit actions that:

- execute a hidden shell command or download executable code;
- transmit selected text without an explicit `online` privacy label;
- require embedded API keys, tokens, credentials, or personal endpoints;
- modify unrelated files, settings, clipboard data, or app state;
- imitate an app integration without verifying its documented interface;
- copy code or artwork without compatible permission and attribution.

## Add or update an action

1. Edit `catalog/catalog-v1.json`.
2. Use a new stable UUID for a new action. Never change the meaning of an existing ID.
3. Write plain-language `summary`, `details`, `requirements`, and `privacySummary` fields.
4. Include realistic example input and output without private or customer data.
5. Run:

   ```bash
   npm run sync
   npm test
   ```

6. Test the action in ActionClip on the oldest supported macOS version relevant to its runtime or integrated app.

Do not directly edit generated files under `actions/` or `ACTIONS.md`; the sync script owns them.

## Review checklist

- The action name is unique and user-friendly.
- The ID is unique and stable.
- The icon describes the action and exists in ActionClip's supported icon library.
- The category and output mode match the behavior.
- The template handles empty, Unicode, multiline, and unexpectedly large selections safely.
- Clipboard actions restore or preserve clipboard contents where the behavior promises it.
- URL templates percent-encode selected text correctly.
- AppleScript targets an exact bundle identifier and uses a documented or verified interface.
- Online actions explain the destination and remain under user control.
- External-app actions state the required app and version where known.
- Example output is deterministic, or clearly describes an external result.

## Pull requests after the public launch

Public pull requests will be reviewed but will not be published automatically. Maintainers may revise naming, copy, icons, implementation details, identifiers, or category placement to keep the marketplace consistent and safe.

By contributing, you confirm that you have the right to submit the work and grant ActionClip permission to distribute it through the app and marketplace. The final contribution license will be documented before public submissions open.

