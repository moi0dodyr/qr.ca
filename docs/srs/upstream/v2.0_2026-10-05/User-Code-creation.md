# [User] - Code creation
Stories on this page:
- [User] - Code creation - step 1: choose the code type
- [User] - Code creation - step 2: enter the content
- [User] - Code creation - step 2: set up a time-based redirect
- [User] - Code creation - step 2: get told when a link is unsafe
- [User] - Code creation - step 3: build the page behind the code
- [User] - Code creation - step 4: style the code
- [User] - Code creation - step 5: check that the code will scan
- [User] - Code creation - step 6: name and file the code
- [User] - Code creation - step 7: save and download
- [User] - Code creation - cancel creation
Related pages: [User] - Home-page generator (uses the same steps before sign-up) · [User] - Code management (editing a saved code) · [User] - Bulk creation · [User] - Hosted pages · [System] - Global rules (English and Canadian French).
---
## [User] - Code creation - step 1: choose the code type
| User story | As a user I want to choose what my code does, and whether it is dynamic or static, so that I get the right form |
| Role | User |
| Platform | Web (desktop and mobile) |
| App map | Figma, QR code creation |
| UI | TBD |
Overview
The user presses Create QR code on the dashboard and lands on the first step. Types are shown in two groups. A dynamic code points to a QR.CA short link, so its destination can be changed later and its scans are counted. A static code carries its content inside the pattern: it works without QR.CA, but it cannot be changed or tracked after printing. The choice decides which steps follow.
Acceptance criteria
- When the user presses Create QR code and has reached the plan's limit on codes, then the upgrade window opens instead of the creation screen.
- When the user has no active plan, then Create QR code opens the upgrade window.
- When the user opens step 1, then the types are shown in two groups with one line explaining each group:
  - Dynamic (editable, tracked): Website, PDF / File, Restaurant menu (PDF), Multi-link page, vCard, App store link, Review, Time-based redirect
  - Static (fixed, not tracked): Website, Contact (vCard), Email, SMS, Phone call, Plain text, Wi-Fi
- When the user picks a type, then step 2 opens with that type's form.
- What changes after the choice:
  - static codes skip step 3 (no page) and have no statistics;
  - dynamic Multi-link and vCard go through step 3 (page builder);
  - all other dynamic types skip step 3.
- A Cancel button is available on every step (see the last story on this page).
Not decided yet
- More dynamic types drawn in Figma (map location, social page, image, coupon, dynamic email / SMS / call): not in V1 unless the client asks. With the client.
- Whether static codes stay free after the trial: with the client.
▸ Traceability
  F-02 · F-65 · F-05 · QR-U-07 · DS-03 · A-15 (SRS list is the reference, not the Figma canvas) · Figma 8045:2816 (step 1), 8045:3708 (limit check) · SRS-Q-03, Q-07 · ✅🟡
---
## [User] - Code creation - step 2: enter the content
| User story | As a user I want to fill in what my code opens so that the people who scan it reach the right thing |
| Role | User |
| Platform | Web (desktop and mobile) |
| App map | Figma, QR code creation |
| UI | TBD |
Overview
The form depends on the type. Invalid fields are named next to the field and Next step stays disabled until the form is valid. For dynamic codes, every link is checked for safety in the background (separate story below).
Acceptance criteria
- When the user is on step 2, then the form for the chosen type is shown with these fields:
| Type | Fields | Rules |
| Website (dynamic or static) | URL | required; must be a valid http(s) address |
| PDF / File | File | required; upload with progress, replace later; scanned for viruses; allowed types and size per plan (not decided) |
| Restaurant menu (PDF) | Menu PDF | same as PDF / File; display only, no ordering |
| Multi-link page | Links: each has Label and URL | at least one link; links can be reordered and removed; every URL is checked |
| vCard (dynamic) | First name, Last name, Company, Job title, Phone, Email, Website, Address, Photo / logo | first name required, the rest optional; the scanner can save it as a contact |
| App store link | App Store URL, Google Play URL, Fallback URL | at least one store link; fallback required |
| Review | Google review link (or Place ID), Mode: direct to Google or rating step first | link required |
| Time-based redirect | Time periods, each with its own URL, plus a Default URL | see the next story |
| Contact (static) | same fields as vCard | encoded in the pattern; long content makes the code denser |
| Email (static) | To, Subject, Message | To required |
| SMS (static) | Phone number, Message | phone required |
| Phone call (static) | Phone number | required |
| Plain text (static) | Text | required |
| Wi-Fi (static) | Network name, Password, Security (WPA / WEP / none), Hidden network | network name required |
- When a field is invalid and the user presses Next step, then the field is named with the reason and the step does not change.
- For static types, the form states that the content cannot be edited or tracked after printing.
- The page texts of Multi-link, vCard and Review are entered in English and French (see step 3 and [System] - Global rules).
Technical notes → uploads go to object storage and are scanned for viruses by AWS GuardDuty (Denys's technical document, DevOps).
Not decided yet
- Allowed file types, maximum size and storage per plan: with the client and Denys.
- Maximum number of links on a multi-link page: design.
- Review: whether the user pastes a link or picks the business by Google Place ID: Denys's call.
▸ Traceability
  F-02 · F-03 · F-04 · F-65 · F-61 · F-60 · QR-U-08, QR-U-09, QR-U-19, QR-U-20, QR-U-21, QR-U-44 · DS-04 (menu = PDF) · field lists per type: proposed ⚪ (from the SRS stories and the vCard / Wi-Fi standards), to confirm with design · SRS-Q-11
---
## [User] - Code creation - step 2: set up a time-based redirect
| User story | As a user I want one code to open different links at different times so that I print one code instead of several |
| Role | User |
| Platform | Web (desktop and mobile) |
| App map | Not drawn in Figma yet |
| UI | TBD |
Overview
Time-based redirect is its own dynamic code type. On the content step the user lists time periods and the link each one opens, plus a default link for any time outside the periods. Typical uses: a menu that changes between breakfast and dinner, opening hours, a weekend offer.
Acceptance criteria
- When the user chose Time-based redirect in step 1, then step 2 shows a list of periods. Each period has:
  - Days of the week
  - Start time, End time
  - URL (checked like any other link)
- Default URL is required; it opens outside every period.
- The time zone is the account's time zone and can be changed on this step.
- When two periods overlap, then saving is refused and the overlap is named.
- When the code is paused or archived, then the pause wins over the periods.
- The periods can be changed later in [User] - Code management; the next scan follows the new periods.
Technical notes → the period is picked inside the redirect without noticeable delay (Denys's technical document, redirect service).
▸ Traceability
  F-60 · QR-U-43 · A-10 · Oleg 2026-10-05 (separate type, not an option on other types) · BRL-06, BRL-07 · not drawn in Figma (C-4) · 🟡
---
## [User] - Code creation - step 2: get told when a link is unsafe
| User story | As a user I want to know at once if a link is unsafe so that I understand why my code cannot be saved |
| Role | User |
| Platform | Web (desktop and mobile) |
| App map | Not drawn in Figma |
| UI | TBD |
Overview
Every link and file is checked against a link-reputation service (Google Safe Browsing or similar) when the user continues. Known-malicious links are refused. Doubtful links are saved normally and go to the QR.CA team's review queue; the user is not told.
Acceptance criteria
- When a link is known to be malicious, then it is marked on the field with the reason and the code cannot be saved.
- When a link is doubtful, then the user continues normally (the team reviews it in [Admin] - Codes and moderation).
- The same check runs on every link of a multi-link page and on uploaded files.
▸ Traceability
  F-46 · QR-U-08 · QR-A-04 · BRL-31, BRL-33 · ✅ (client named Safe Browsing)
---
## [User] - Code creation - step 3: build the page behind the code
| User story | As a user I want to style the page my code opens so that it looks like my business |
| Role | User |
| Platform | Web (desktop and mobile) |
| App map | Figma, QR code creation (micro-landing branch) |
| UI | TBD |
Overview
Only for dynamic Multi-link and vCard codes. The user styles a simple, phone-first page with a phone-sized preview. PDF, menu and all other types skip this step: a PDF opens as the file itself with a small QR.CA footer.
Acceptance criteria
- When the user reaches step 3, then they can set:
  - Colours (background, buttons, text)
  - Logo
  - Call-to-action button (text)
  - Template (choose one; it can still be adjusted)
- Each text field has an English and a French value side by side. When French is missing, the user is warned.
- The preview updates on every change.
- When the user ticks Save as template, then the page style is saved to their templates.
- No advertising or third-party content is ever added to the page.
Not decided yet
- Warn or block publishing when French is missing: with the client (the estimate assumes warn, with block as a switch).
▸ Traceability
  F-06 · F-12 · F-22 · QR-U-10, QR-U-18 · A-1 (only these two page types; no general page editor) · DS-06 · BRL-16, BRL-34 · SRS-Q-05
---
## [User] - Code creation - step 4: style the code
| User story | As a user I want to style the code itself so that it matches my brand |
| Role | User |
| Platform | Web (desktop and mobile) |
| App map | Figma, QR code creation (QR customization) |
| UI | TBD |
Overview
The user changes how the code looks, with a live preview. This step has to work well on a phone: the client asked for it to be "a dream to use".
Acceptance criteria
- When the user is on step 4, then they can set:
  - Colours (foreground, background)
  - Logo (upload and position)
  - Dot shape, Corner shape
  - Frame with call-to-action text
  - Template: apply a starter template or one of their own
- When a logo is added, then the error-correction level rises automatically and the level is shown. There is no manual error-correction selector.
- When the user ticks Save as template, then the style is saved to their templates.
- Every control works one-handed on a phone, without horizontal scrolling.
Technical notes → codes are rendered with the open-source library qr-code-styling (Denys's technical document).
Not decided yet
- Which 10 starter templates, by industry or by style: with design and the client.
▸ Traceability
  F-07 · F-09 · QR-U-11, QR-U-16 · A-7 · ✅ C-3 · SRS-Q-25
---
## [User] - Code creation - step 5: check that the code will scan
| User story | As a user I want to be warned if my design may not scan so that I do not print a broken code |
| Role | User |
| Platform | Web (desktop and mobile) |
| App map | Figma, QR code creation (scannability detector) |
| UI | TBD |
Overview
A check runs next to the preview while the user styles the code. It never blocks the user and never changes the design by itself.
Acceptance criteria
- The check shows one of three states: pass, warning, fail.
- When the result is a warning or a fail, then the problem is named (contrast, quiet zone, data density, logo too big) and a one-click fix is offered.
- When the result is a fail and the user downloads anyway, then they confirm first; the code then carries a not healthy label on the dashboard.
Technical notes → a decode-based check across several decoders, Android first (Denys's technical document).
▸ Traceability
  F-08 · QR-U-12 · DS-05 · BRL-28 · 🟡
---
## [User] - Code creation - step 6: name and file the code
| User story | As a user I want to name and file a code as I create it so that I can find it later |
| Role | User |
| Platform | Web (desktop and mobile) |
| App map | Figma, QR code creation (publication settings) |
| UI | TBD |
Acceptance criteria
- When the user is on step 6, then they can set (all optional):
  - Name (a default name is used when empty)
  - Folder
  - Tags
  - Description
- Schedule publication and Password, drawn in Figma, are not in V1 and are hidden.
▸ Traceability
  F-17 · QR-U-13 · SCP-OUT-05
---
## [User] - Code creation - step 7: save and download
| User story | As a user I want to save my code and download it in the right format so that it prints sharply |
| Role | User |
| Platform | Web (desktop and mobile) |
| App map | Figma, QR code creation |
| UI | TBD |
Acceptance criteria
- When the user presses Save, then the code is created, a success message shows and the user returns to the dashboard with the new code in the list.
- When the user presses Save and download, then the code is created and the download dialog opens with the formats:
  - PNG, JPG, SVG, EPS, PDF (print-ready)
- The download states the minimum print size and includes the quiet zone.
- No file carries a watermark, on any plan, trial included.
- Downloading the same code again gives identical artwork.
Technical notes → render parameters are stored with the code so a later download is identical; EPS needs a vector converter (Denys's technical document).
▸ Traceability
  F-10 · QR-U-13, QR-U-14 · A-2, A-4 · BRL-29, BRL-30, BRL-42
---
## [User] - Code creation - cancel creation
| User story | As a user I want to leave creation without saving so that I do not create codes by accident |
| Role | User |
| Platform | Web (desktop and mobile) |
| App map | Figma, QR code creation (cancel) |
| UI | TBD |
Acceptance criteria
- When the user presses Cancel on any step, then a confirmation asks whether to discard the code.
- When the user confirms, then nothing is saved and they return to the dashboard.
- When the user closes the confirmation, then they return to the same step with everything they entered.
▸ Traceability
  F-02 · QR-U-15
