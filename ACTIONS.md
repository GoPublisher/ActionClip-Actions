# Action directory

Catalog revision `2026-08-21.1` · 82 actions

This file is generated from `catalog/catalog-v1.json`. Run `npm run sync` after changing the catalog.

## Text tools

| Action | What it does | Runtime | Privacy |
| --- | --- | --- | --- |
| [Clean Lines](actions/text-tools/clean-lines.actionclip.json) | Trim lines and remove empty ones from selected text. | `javascript` | `onDevice` |
| [Comma List Toggle](actions/text-tools/comma-list-toggle.actionclip.json) | Switch between comma-separated values and separate lines. | `javascript` | `onDevice` |
| [Copy as Markdown](actions/text-tools/copy-as-markdown.actionclip.json) | Copy the selected rich text as Markdown. | `built_in` | `onDevice` |
| [Extract Email Addresses](actions/text-tools/extract-email-addresses.actionclip.json) | Extract unique email addresses from selected text. | `javascript` | `onDevice` |
| [Extract URLs](actions/text-tools/extract-urls.actionclip.json) | Extract unique web URLs from selected text. | `javascript` | `onDevice` |
| [Join Lines](actions/text-tools/join-lines.actionclip.json) | Join non-empty selected lines with spaces. | `javascript` | `onDevice` |
| [Markdown Blockquote](actions/text-tools/markdown-blockquote.actionclip.json) | Add one Markdown quote level to selected lines. | `javascript` | `onDevice` |
| [Markdown Bullet List](actions/text-tools/markdown-bullet-list.actionclip.json) | Turn selected lines into a Markdown bullet list. | `javascript` | `onDevice` |
| [Markdown Checklist](actions/text-tools/markdown-checklist.actionclip.json) | Turn selected lines into unchecked Markdown tasks. | `javascript` | `onDevice` |
| [Markdown Code](actions/text-tools/markdown-code.actionclip.json) | Toggle Markdown code markup around selected text. | `javascript` | `onDevice` |
| [Markdown Numbered List](actions/text-tools/markdown-numbered-list.actionclip.json) | Turn selected lines into a numbered Markdown list. | `javascript` | `onDevice` |
| [Reverse Lines](actions/text-tools/reverse-lines.actionclip.json) | Reverse the order of selected lines. | `javascript` | `onDevice` |
| [Slugify](actions/text-tools/slugify.actionclip.json) | Turn selected text into a readable URL slug. | `javascript` | `onDevice` |
| [Sort Unique Lines](actions/text-tools/sort-unique-lines.actionclip.json) | Remove duplicate lines and sort the remaining text. | `javascript` | `onDevice` |
| [Straighten Quotes](actions/text-tools/straighten-quotes.actionclip.json) | Convert typographic quotes to straight ASCII quotes. | `javascript` | `onDevice` |
| [Wrap in Parentheses](actions/text-tools/wrap-in-parentheses.actionclip.json) | Toggle parentheses around selected text. | `javascript` | `onDevice` |
| [Wrap in Quotes](actions/text-tools/wrap-in-quotes.actionclip.json) | Toggle straight double quotes around selected text. | `javascript` | `onDevice` |

## Clipboard tools

| Action | What it does | Runtime | Privacy |
| --- | --- | --- | --- |
| [Append to Clipboard](actions/clipboard-tools/append-to-clipboard.actionclip.json) | Combine selected text with the existing clipboard text. | `built_in` | `onDevice` |
| [Swap with Clipboard](actions/clipboard-tools/swap-with-clipboard.actionclip.json) | Swap selected text with the clipboard text. | `built_in` | `onDevice` |

## Developer tools

| Action | What it does | Runtime | Privacy |
| --- | --- | --- | --- |
| [Base64 Decode](actions/developer-tools/base64-decode.actionclip.json) | Decode Base64 into validated UTF-8 text. | `javascript` | `onDevice` |
| [Base64 Encode](actions/developer-tools/base64-encode.actionclip.json) | Encode selected Unicode text as Base64 UTF-8. | `javascript` | `onDevice` |
| [Convert to camelCase](actions/developer-tools/convert-to-camelcase.actionclip.json) | Convert selected words or identifiers to camelCase. | `javascript` | `onDevice` |
| [Convert to CONSTANT_CASE](actions/developer-tools/convert-to-constant-case.actionclip.json) | Convert selected words or identifiers to CONSTANT_CASE. | `javascript` | `onDevice` |
| [Convert to kebab-case](actions/developer-tools/convert-to-kebab-case.actionclip.json) | Convert selected words or identifiers to kebab-case. | `javascript` | `onDevice` |
| [Convert to PascalCase](actions/developer-tools/convert-to-pascalcase.actionclip.json) | Convert selected words or identifiers to PascalCase. | `javascript` | `onDevice` |
| [Convert to snake_case](actions/developer-tools/convert-to-snake-case.actionclip.json) | Convert selected words or identifiers to snake_case. | `javascript` | `onDevice` |
| [HTML Escape](actions/developer-tools/html-escape.actionclip.json) | Escape HTML special characters in selected text. | `javascript` | `onDevice` |
| [HTML Unescape](actions/developer-tools/html-unescape.actionclip.json) | Decode common named and numeric HTML entities. | `javascript` | `onDevice` |
| [Minify JSON](actions/developer-tools/minify-json.actionclip.json) | Validate JSON and remove insignificant whitespace. | `javascript` | `onDevice` |
| [Pretty JSON](actions/developer-tools/pretty-json.actionclip.json) | Format selected JSON with readable indentation. | `javascript` | `onDevice` |
| [Search GitHub](actions/developer-tools/search-github.actionclip.json) | Search GitHub code for the selected text. | `url` | `online` |
| [Unicode Inspector](actions/developer-tools/unicode-inspector.actionclip.json) | Show every selected Unicode code point. | `javascript` | `onDevice` |
| [Unix Timestamp to Date](actions/developer-tools/unix-timestamp-to-date.actionclip.json) | Convert Unix seconds or milliseconds to a UTC date. | `javascript` | `onDevice` |
| [URL Decode](actions/developer-tools/url-decode.actionclip.json) | Decode percent-encoded selected text. | `javascript` | `onDevice` |
| [URL Encode](actions/developer-tools/url-encode.actionclip.json) | Percent-encode selected text as a URL component. | `javascript` | `onDevice` |
| [Validate JSON](actions/developer-tools/validate-json.actionclip.json) | Check whether selected text is valid JSON. | `javascript` | `onDevice` |

## Productivity

| Action | What it does | Runtime | Privacy |
| --- | --- | --- | --- |
| [Calculate](actions/productivity/calculate.actionclip.json) | Evaluate a selected mathematical expression locally. | `javascript` | `onDevice` |
| [ChatGPT Website](actions/productivity/chatgpt-website.actionclip.json) | Start a new ChatGPT conversation with the selected text. | `url` | `online` |
| [Claude Website](actions/productivity/claude-website.actionclip.json) | Start a new Claude conversation with the selected text. | `url` | `online` |
| [Clean Tracking Link](actions/productivity/clean-tracking-link.actionclip.json) | Remove common marketing trackers from a selected URL. | `javascript` | `onDevice` |
| [Customer Reply](actions/productivity/customer-reply.actionclip.json) | Draft a helpful reply to a selected customer message. | `ai_prompt` | `online` |
| [Extract Action Items](actions/productivity/extract-action-items.actionclip.json) | Turn selected notes into a concise task list. | `ai_prompt` | `online` |
| [Generate Email Subject](actions/productivity/generate-email-subject.actionclip.json) | Create one concise subject line from selected text. | `ai_prompt` | `online` |
| [Large Type](actions/productivity/large-type.actionclip.json) | Display the selected text in a large, readable result card. | `built_in` | `onDevice` |
| [Meeting Follow-up](actions/productivity/meeting-follow-up.actionclip.json) | Draft a short follow-up from selected meeting notes. | `ai_prompt` | `online` |
| [Open in Wayback Machine](actions/productivity/open-in-wayback-machine.actionclip.json) | Find archived captures of a selected web URL. | `url` | `online` |
| [Say](actions/productivity/say.actionclip.json) | Speak the selected text with the macOS system voice. | `built_in` | `onDevice` |
| [Search Google Scholar](actions/productivity/search-google-scholar.actionclip.json) | Search scholarly literature for the selected text. | `url` | `online` |
| [Search MDN](actions/productivity/search-mdn.actionclip.json) | Search MDN Web Docs for the selected text. | `url` | `online` |
| [Search Stack Overflow](actions/productivity/search-stack-overflow.actionclip.json) | Search Stack Overflow for the selected text. | `url` | `online` |
| [Search Wikipedia](actions/productivity/search-wikipedia.actionclip.json) | Search English Wikipedia for the selected text. | `url` | `online` |
| [Search Wolfram Alpha](actions/productivity/search-wolfram-alpha.actionclip.json) | Ask Wolfram Alpha about the selected expression or topic. | `url` | `online` |
| [Search YouTube](actions/productivity/search-youtube.actionclip.json) | Search YouTube for the selected text. | `url` | `online` |
| [Shorten Text](actions/productivity/shorten-text.actionclip.json) | Make selected text shorter without losing its meaning. | `ai_prompt` | `online` |
| [Turn Notes into Email](actions/productivity/turn-notes-into-email.actionclip.json) | Turn selected notes into a professional email. | `ai_prompt` | `online` |

## App integrations

| Action | What it does | Runtime | Privacy |
| --- | --- | --- | --- |
| [DEVONthink — Clip Plain Note](actions/app-integrations/devonthink-clip-plain-note.actionclip.json) | Create a plain note in DEVONthink from the selection. | `built_in` | `externalApp` |
| [DEVONthink — Search](actions/app-integrations/devonthink-search.actionclip.json) | Search open DEVONthink databases for the selection. | `built_in` | `externalApp` |
| [Fluent](actions/app-integrations/fluent.actionclip.json) | Open Fluent's Smart Panel with the selected text as context. | `apple_script` | `externalApp` |
| [Fluent — Continue Writing](actions/app-integrations/fluent-continue-writing.actionclip.json) | Continue the selected passage using Fluent. | `apple_script` | `externalApp` |
| [Fluent — Explain Like I'm 5](actions/app-integrations/fluent-explain-like-im-5.actionclip.json) | Explain the selected text in simple terms using Fluent. | `apple_script` | `externalApp` |
| [Fluent — Fix Grammar](actions/app-integrations/fluent-fix-grammar.actionclip.json) | Correct grammar in the selected text using Fluent. | `apple_script` | `externalApp` |
| [Fluent — Magic Refine](actions/app-integrations/fluent-magic-refine.actionclip.json) | Polish the selected text using Fluent's Magic Refine action. | `apple_script` | `externalApp` |
| [Fluent — Make Concise](actions/app-integrations/fluent-make-concise.actionclip.json) | Shorten the selected text using Fluent's Make Concise action. | `apple_script` | `externalApp` |
| [Fluent — Paraphrase Text](actions/app-integrations/fluent-paraphrase-text.actionclip.json) | Paraphrase the selected text using Fluent. | `apple_script` | `externalApp` |
| [Fluent — Summarize](actions/app-integrations/fluent-summarize.actionclip.json) | Summarize the selected text using Fluent. | `apple_script` | `externalApp` |
| [Fluent — Translate](actions/app-integrations/fluent-translate.actionclip.json) | Translate the selected text using Fluent. | `apple_script` | `externalApp` |
| [Highlight](actions/app-integrations/highlight.actionclip.json) | Apply the active app's known highlight command. | `built_in` | `externalApp` |
| [Refine](actions/app-integrations/refine.actionclip.json) | Open selected text in Refine's floating editor. | `built_in` | `externalApp` |
| [RewriteBar](actions/app-integrations/rewritebar.actionclip.json) | Open RewriteBar's command menu for the selected text. | `built_in` | `externalApp` |
| [Safari Reading List](actions/app-integrations/safari-reading-list.actionclip.json) | Add the first selected web link to Safari Reading List. | `built_in` | `externalApp` |
| [Scrivener — Append to Notes](actions/app-integrations/scrivener-append-to-notes.actionclip.json) | Append the selection to the current Scrivener document notes. | `built_in` | `externalApp` |
| [Scrivener — Append to Text](actions/app-integrations/scrivener-append-to-text.actionclip.json) | Append the selection to the current Scrivener document text. | `built_in` | `externalApp` |
| [Scrivener — New Clipping](actions/app-integrations/scrivener-new-clipping.actionclip.json) | Create a new clipping in the open Scrivener project. | `built_in` | `externalApp` |
| [Tembo Search](actions/app-integrations/tembo-search.actionclip.json) | Search for the selected text in Tembo. | `built_in` | `externalApp` |
| [Tot — Dot 1](actions/app-integrations/tot-dot-1.actionclip.json) | Append the selected text to Tot Dot 1. | `built_in` | `externalApp` |
| [Tot — Dot 2](actions/app-integrations/tot-dot-2.actionclip.json) | Append the selected text to Tot Dot 2. | `built_in` | `externalApp` |
| [Tot — Dot 3](actions/app-integrations/tot-dot-3.actionclip.json) | Append the selected text to Tot Dot 3. | `built_in` | `externalApp` |
| [Tot — Dot 4](actions/app-integrations/tot-dot-4.actionclip.json) | Append the selected text to Tot Dot 4. | `built_in` | `externalApp` |
| [Tot — Dot 5](actions/app-integrations/tot-dot-5.actionclip.json) | Append the selected text to Tot Dot 5. | `built_in` | `externalApp` |
| [Tot — Dot 6](actions/app-integrations/tot-dot-6.actionclip.json) | Append the selected text to Tot Dot 6. | `built_in` | `externalApp` |
| [Tot — Dot 7](actions/app-integrations/tot-dot-7.actionclip.json) | Append the selected text to Tot Dot 7. | `built_in` | `externalApp` |
| [UpNote](actions/app-integrations/upnote.actionclip.json) | Create a new UpNote note from the selected text. | `built_in` | `externalApp` |

