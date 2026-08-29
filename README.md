# ActionClip Actions: Quick Actions for Selected Text on Mac

<p align="center">
  <img src="assets/actionclip-logo.svg" width="96" height="96" alt="ActionClip app icon">
</p>

<p align="center">
  <strong>Browse 80+ ready-made actions for writing, formatting, searching, coding, clipboard work, and Mac app integrations.</strong>
</p>

Looking for a **PopClip alternative for Mac** or a faster way to work with selected text? [ActionClip](https://actionclip.app/) is a native macOS utility that places useful actions beside your selection. Highlight text in almost any Mac app, choose an action, and continue working without switching tools or digging through menus.

This repository is the official library behind the ActionClip Marketplace. It lets you explore each action, understand what it does, check whether it works locally or uses another service, and view the action itself before adding it to your Mac.

<p align="center">
  <a href="https://actionclip.app/download"><strong>Download ActionClip</strong></a>
  ·
  <a href="https://actionclip.app/marketplace"><strong>Explore the Marketplace</strong></a>
  ·
  <a href="ACTIONS.md"><strong>Browse every action</strong></a>
</p>

## What can you do with selected text on a Mac?

ActionClip turns small, repeated text tasks into one-click actions. You can:

- clean extra spaces and empty lines;
- convert text to Markdown, camelCase, snake_case, or a URL slug;
- extract links, email addresses, and other useful information;
- format, validate, encode, or decode developer text;
- append text to the clipboard or swap it with the current selection;
- search Google Scholar, Wikipedia, YouTube, GitHub, MDN, or Stack Overflow;
- draft replies, shorten writing, and turn notes into emails;
- send selected text to apps such as DEVONthink, Tot, Scrivener, UpNote, Fluent, and Safari.

The goal is simple: select something, act on it, and stay in the app where you are already working.

## A PopClip alternative for Mac text actions

PopClip popularized the idea of showing useful commands beside selected text. ActionClip follows the same selected-text workflow while offering its own approach to action suggestions, result previews, marketplace actions, and custom action creation.

ActionClip may be a good PopClip alternative if you want:

- a compact action menu attached to the text you selected;
- contextual suggestions that bring relevant actions forward;
- a preview before accepting many generated or transformed results;
- ready-made actions plus a builder for your own repeated workflows;
- clear control over local actions, online actions, and Mac app integrations;
- a native macOS menu-bar utility rather than a general app launcher.

ActionClip and PopClip are independent products. ActionClip actions use their own format and are not PopClip extensions.

## Browse the ActionClip action library

| Category | Useful for | Examples |
| --- | --- | --- |
| [Text tools](ACTIONS.md#text-tools) | Cleaning, formatting, wrapping, extracting, and reshaping text | Clean Lines, Slugify, Extract URLs |
| [Clipboard tools](ACTIONS.md#clipboard-tools) | Combining selected text with clipboard content | Append to Clipboard, Swap with Clipboard |
| [Developer tools](ACTIONS.md#developer-tools) | JSON, URLs, HTML, Base64, Unicode, and naming conventions | Pretty JSON, URL Decode, camelCase |
| [Productivity](ACTIONS.md#productivity) | Research, writing, calculations, and quick utilities | Search Wikipedia, Meeting Follow-up, Large Type |
| [App integrations](ACTIONS.md#app-integrations) | Sending selected text into the Mac apps you already use | DEVONthink, Tot, Scrivener, UpNote |

[See the complete action directory →](ACTIONS.md)

## Five useful actions to try first

If you are new to selected-text utilities, start with a small set and add more when you need them:

1. **[Clean Lines](actions/text-tools/clean-lines.actionclip.json)** trims every line and removes empty ones.
2. **[Append to Clipboard](actions/clipboard-tools/append-to-clipboard.actionclip.json)** adds the selection to what you already copied.
3. **[Slugify](actions/text-tools/slugify.actionclip.json)** turns a title or phrase into a readable URL slug.
4. **[Pretty JSON](actions/developer-tools/pretty-json.actionclip.json)** formats selected JSON for easier reading.
5. **[Search Wikipedia](actions/productivity/search-wikipedia.actionclip.json)** searches for the selection without retyping it.

## How to add and use marketplace actions

1. [Download ActionClip for Mac](https://actionclip.app/download) and complete the short setup.
2. Open **Actions Marketplace** inside ActionClip.
3. Browse or search for an action that fits your workflow.
4. Review its description, example, requirements, and privacy information.
5. Choose **Add Action**.
6. Select text in a Mac app and choose the new action from the floating ActionClip menu.

The in-app marketplace is the easiest installation path. This GitHub library is useful when you want to browse the complete collection or inspect exactly how an action works.

## What happens to your selected text?

Every marketplace action explains where it runs before you add it:

- **On your Mac:** Text is processed locally by ActionClip.
- **Online:** The action opens or deliberately uses an online service. Online actions remain under your control.
- **In another Mac app:** ActionClip passes the selection to the named app you chose to use.

Selected text is not uploaded simply because the ActionClip menu appears. Read the [ActionClip Privacy Policy](https://actionclip.app/privacy) for the complete explanation.

## See what an action does before adding it

Each action in this repository includes:

- a plain-language explanation;
- example input and output;
- any app, permission, or setup requirement;
- a clear privacy description;
- the action instructions or code that ActionClip runs.

For example, [Extract Email Addresses](actions/text-tools/extract-email-addresses.actionclip.json) shows the exact local transformation used to find and deduplicate email addresses. [Append to Clipboard](actions/clipboard-tools/append-to-clipboard.actionclip.json) explains how it combines selected text with the existing Mac clipboard.

## Frequently asked questions

### Is ActionClip a PopClip alternative?

Yes. Both products help you act on selected text from a compact menu near the selection. ActionClip adds its own contextual suggestions, result previews, Action Marketplace, and custom action builder. The best choice depends on which interaction and action ecosystem fits your workflow.

### Are these PopClip extensions?

No. These are ActionClip marketplace actions. They solve many of the same quick Mac text tasks, but they are designed for ActionClip and are not directly installable in PopClip.

### Do I need AI or an API key?

No. Many actions—including text cleanup, Markdown formatting, JSON tools, clipboard actions, calculations, and conversions—work without AI. Actions that use an online AI provider say so before installation.

### Do actions work in every Mac app?

ActionClip works in most apps that expose selected text through macOS Accessibility. Custom editors, remote desktops, and unusual interfaces may behave differently.

### Does ActionClip require an account?

No ActionClip account is required. Download the app, grant the macOS permission needed to read selected text, and start with the included actions.

### Can I make my own actions?

Yes. ActionClip can create custom text transformations, prompts, links, AppleScript workflows, and other actions for repeated text work. Your saved actions appear beside selected text just like built-in and marketplace actions.

### Which macOS version does ActionClip require?

ActionClip requires macOS 15.0 or later. Some optional features, including Apple Intelligence, also depend on compatible Mac hardware and system availability.

## More ActionClip resources

- [Download ActionClip for Mac](https://actionclip.app/download)
- [Explore the web Action Marketplace](https://actionclip.app/marketplace)
- [See ActionClip’s built-in actions](https://actionclip.app/actions)
- [Learn how ActionClip handles privacy](https://actionclip.app/privacy)
- [Visit the ActionClip website](https://actionclip.app/)

## Trademarks and app icons

Third-party product names and app icons identify compatible integrations. They remain the property of their respective owners and do not imply sponsorship or endorsement. PopClip is a product of Pilotmoon Software; ActionClip is not affiliated with or endorsed by Pilotmoon Software.

## License

Copyright © 2026 ActionClip. All rights reserved. See [LICENSE](LICENSE).
