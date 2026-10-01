<!--
  UPSTREAM COPY. DO NOT EDIT.
  Source of truth: Christian Kapuzo's KB, SRS v1.0 subpage "Part 2a" (Notion).
  Received 2026-10-01 (pasted by Oleg S). Internal: not for the client.
-->

# Part 2a — User epics E0–E4 (owner web app, first code, access, creation, management)

## 10. Product Requirements — User Epics

### E0 · The owner web app

#### QR-U-42 Owner — Owner web app (code workspace)

**What it is.** The logged-in QR.CA application where an owner works with their codes, on phone or desktop: the dashboard with search, filters and sort; creation and editing (type, content, page, style, settings); folders and the Archive folder; pause / activate, duplicate, delete; bulk creation; analytics per code and across the account; plans and billing; account settings; and the *APIs* screen where API keys are managed.

**Which request it answers.** The core of the client's brief: *"Creation: Customization • logo • colors • styles/error correction • naming • organization. Management: Dashboard • edit destination/content • activate/deactivate • duplicate/delete • folders/tags • search/filter/sort"* (brief §2 ✅).

**Which problem it solves.** It is where the main promise is kept: change what a printed code opens without reprinting, organise many codes, and see whether they work.

**How it is specified.** This story names the application and its navigation. The behaviour is in QR-U-03 to QR-U-37. **"Admin" in this SRS means only the internal QR.CA console** (§11); the customer's workspace is always the *owner web app*.

| User Story | As an Owner I want one workspace for all my codes so that I can create, change and track them in one place |
| --- | --- |
| Role | Owner |
| Platform | Web (responsive) |
| Priority | Must Have |
| Trace | brief §2 ✅ · Figma `8045:3479` *Sidebar*, `8045:3708` *Dashboard* · design sync 00:00–00:40 |

Acceptance criteria:

- Given a signed-in owner, when the app loads, then the sidebar gives: All QR codes, Folders, Archive, Analytics, Advanced (API, and tag settings), and the account menu (Settings, Plans & Billing, Upgrade, Log out).
- Given the account state (trial, subscribed, no active subscription), when the app loads, then the sidebar shows the matching banner (trial countdown QR-U-30, or *codes paused*) and the actions each state allows (Figma *Sidebar* variants).
- Given a phone-width screen, when the owner uses any part of the app, then every action is available without horizontal scrolling.

### E1 · First code from the home page

#### QR-U-01 Visitor — Create a code on the home page

| User Story | As a Visitor I want to make a QR code on the home page without signing up so that I can see the product work before I commit |
| --- | --- |
| Role | Visitor |
| Platform | Web (responsive) |
| Priority | Must Have |
| Trace | `GEN-01`, `GEN-02`, `GEN-03`, `PLT-06` · Figma `8045:3711` · ✅ brief §6 PLG loop · ⚪ flow |

Acceptance criteria:

- Given a visitor on the home page, when they choose a type, enter content and pick a design, then a live preview of the code updates with each change.
- Given no content has been entered, when the visitor looks at the Download button, then it is disabled ("Gets activated after Content was provided", Figma).
- Given the visitor has entered content, when they press Download, then the download gate in QR-U-02 applies.
- Given the visitor made changes on the home page, when they sign up (and confirm their email) in the same browser session, then the code and its design are carried into their new account and not lost.
- The home-page generator offers the MVP types (QR-U-07). The visitor never has to give an email to see the preview; the download needs sign-up (QR-U-02).

#### QR-U-02 Visitor — Sign up to download a home-page code

| User Story | As a Visitor I want to get the code I just made so that I can use it, after a quick sign-up |
| --- | --- |
| Role | Visitor → Owner |
| Platform | Web (responsive) |
| Priority | Must Have |
| Trace | `ACC-02`, `EXP-02` · Figma `8045:3711` (*Code Generated · Sign up to download*) · **DS-08** (design sync 2026-09-30) 🟡 |

Acceptance criteria:

- Given a visitor has entered content, when they press Download, then they see *Code Generated (Sign up to download)* with email sign-up and Google sign-up. **There is no anonymous download.**
- Given the visitor completes sign-up (including email confirmation, QR-U-03), when they arrive in the product, then the code and its design are already in their account and the download is offered (QR-U-06).
- Given the visitor leaves without signing up, when they come back in the same browser, then the unsaved design may be restored from the browser, but nothing is stored on the server for an account that does not exist.
- Why (DS-08): signing up collects the email the business needs, and it avoids linking unclaimed anonymous codes to an account later, including the risk of claiming someone else's code. Recorded as the team's decision; one-line confirmation with the client.
- Pending the client's reaction, not built unless approved: Oleg's concept of a small *"download PNG preview"* link without sign-up (design sync 27:08).

### E2 · Account access and onboarding

#### QR-U-03 Owner — Sign up with email confirmation

| User Story | As a Visitor I want to create an account with my email or Google so that I can keep and manage my codes |
| --- | --- |
| Role | Visitor → Owner |
| Platform | Web (responsive) |
| Priority | Must Have |
| Trace | `ACC-02`, `EXP-04` · Figma `8055:3551` (Sign up) · ✅ brief §4 · **DS-07** (design sync 2026-09-30) |

Acceptance criteria:

- Given a visitor on Sign up, when they enter an email and a password, accept the Terms and Conditions and press Sign up, then the account is created and a **confirmation email** is sent (Customer.io).
- Given an email sign-up, when the account is created, then the visitor sees a *Confirm your email* step before entering the product. It shows the address, a *Resend* action (available again after a short wait) and *Change email* for a mistyped address. **Confirmation is required; the step cannot be skipped** (DS-07).
- Given the visitor opens the confirmation link, when it is valid, then the email is confirmed, the 14-day trial starts (QR-U-31) and they continue to the welcome pop-up (QR-U-06). An expired or used link offers a new one.
- Given a visitor chooses Sign up with Google, when Google returns a verified identity, then the account is created with no password step and **no confirmation email** (the address is already verified).
- Given the Terms and Conditions box is not ticked, when they press Sign up, then sign-up is refused and the box is highlighted.
- Given the email is already registered, when they submit, then they are told so and offered Log in and password recovery, without revealing anything else about that account.
- Why (DS-07): a mistyped address otherwise creates an account nobody can recover, and codes nobody can reach; that turns into support load. Open: legal / compliance check on confirmation, and why Uniqode accepts only corporate emails (SRS-Q-28). Password rules are [TBD] (SRS-Q-10).
- Personal data: email, name, password hash. No PHI.

#### QR-U-04 Owner — Log in and log out

| User Story | As an Owner I want to log in and out so that my account is mine alone |
| --- | --- |
| Role | Owner |
| Platform | Web (responsive) |
| Priority | Must Have |
| Trace | `ACC-02` · Figma `8055:3363`, `8045:3479` · ✅ brief §4 |

Acceptance criteria:

- Given a registered owner, when they enter a correct email and password and press Sign in, then they land on *QR codes (Dashboard)*.
- Given wrong credentials, when they press Sign in, then they see one generic error that does not say which field was wrong.
- Given repeated failed attempts from one source, when a threshold is reached, then further attempts are slowed or blocked (threshold [TBD] by Denys Melnyk).
- Given an owner on Log in, when they choose *Forgot password*, *Sign up with Google* or *I don't have an account*, then they go to Password Restoration, Google sign-in or Sign up.
- Given a logged-in owner, when they choose Log out in the account menu, then the session ends and they return to the home page.

#### QR-U-05 Owner — Recover a password (one-time code)

| User Story | As an Owner I want to reset a forgotten password so that I can get back into my account |
| --- | --- |
| Role | Owner |
| Platform | Web (responsive) |
| Priority | Must Have |
| Trace | `ACC-02` · Figma `8067:2887` (OTP flow, 2026-09-30) · ✅ brief §4 · decision A-11 (Christian, 2026-09-30) |

Acceptance criteria:

- Given an owner on Password Restoration, when they enter an email and submit, then they always see the same *OTP Confirmation* step, whether or not the email is registered.
- Given the email is registered, when the request is made, then a one-time code is emailed, valid for a limited time ([TBD], proposed 10 minutes), with a limited number of attempts ([TBD], proposed 5).
- Given the OTP step, when 60 seconds have passed, then *Resend OTP* becomes available and sends a new code (the old one stops working).
- Given a correct code, when the owner creates a new password and confirms it and presses Save, then the password changes, other sessions are signed out, and they go to Log in with a success message.
- Given a wrong or expired code, when it is entered, then the owner is told so and can retry or resend; after too many attempts the flow restarts.
- *Back to Log in* is available on every step.

#### QR-U-06 Owner — Welcome pop-up and trial disclosure ⚠️

| User Story | As a new Owner I want to understand my trial and my next step straight away so that I can get value before it ends |
| --- | --- |
| Role | Owner (trial) |
| Platform | Web (responsive) |
| Priority | Must Have |
| Trace | `ACC-02`, `BIL-04` · Figma `8055:3551` (condition *Did user make customisations on the landing?*) · ✅ C-6, C-1.3 · contradictions **W-1**, **W-2** |

Acceptance criteria:

- Given a new owner who made a code on the home page, when sign-up and email confirmation complete, then *Welcome · Download your QR* opens with *Download QR code*, the trial notice and *Close* (to Dashboard).
- Given a new owner who did not, when sign-up and email confirmation complete, then *Welcome · Create first QR code* opens with *Create QR code*, the trial notice and *Close*.
- Given either pop-up, when it shows the trial notice, then it states the trial length in days, what is included, the date the trial ends, and what happens to the owner's codes after that date (wording depends on SRS-Q-01).
- Given the owner chooses *Provide payment details*, when they do, then they go to Plans & Billing. Adding a card during the trial is **optional** and never required to start or continue the trial (✅ C-6: *"14 day free trials (no CC)"*, against W-2).
- Could Have: one optional question in onboarding, *industry / type of business*, to feed platform statistics (QR-A-05) and template suggestions (Q-W9).

### E3 · Creating codes

#### QR-U-07 Owner — Choose a code type (static or dynamic)

| User Story | As an Owner I want to choose what my code does, and whether it is static or dynamic, so that I get the right content form |
| --- | --- |
| Role | Owner |
| Platform | Web (responsive) |
| Priority | Must Have |
| Trace | `GEN-02`, `GEN-12` · Figma `8045:2816` Step 1 · ✅ brief §1 · **DS-03** (design sync 2026-09-30; *static codes definitely in scope*, Christian) |

Acceptance criteria:

- Given an owner starting creation, when Step 1 opens, then it offers **dynamic** and **static** types.
- **Dynamic (V1):** Website URL, PDF / File, Multi-Link / Links Page, vCard, App Store Link (the brief's five), plus Restaurant Menu as a PDF (QR-U-20) and **Review / feedback** (QR-U-44).
- **Static (V1):** Website URL, vCard / Contact, Email, SMS, Phone call, Plain text, Wi-Fi (QR-U-21). Content is encoded in the code itself: it works without QR.CA, cannot be edited after printing and has no scan statistics. The product says so at the moment of choosing.
- Given the type list, when the owner picks a type, then Step 2 (content) opens with that type's form.
- The type system is configuration-driven: adding a type later does not change the creation flow (✅ brief §2 *"modular… extensible"*).
- This list is the **reference V1 type list**; the Figma canvas is aligned to it (decision A-15 (Christian, 2026-09-30)).
- Not V1 until decided: the wireflows' extra dynamic types (Map Location, Facebook Page, Image, Coupon Code, dynamic Email / SMS / Call). *Links Page* as static and the difference between *vCard* and *Contact* are to confirm with Oleg (Q-W6). Whether static codes are free after the trial is SRS-Q-07.

#### QR-U-08 Owner — Enter content for each type

| User Story | As an Owner I want to fill in what my code opens so that scanners reach the right thing |
| --- | --- |
| Role | Owner |
| Platform | Web (responsive) |
| Priority | Must Have |
| Trace | `GEN-02`, `DST-02`, `DST-03`, `DYN-07` · Figma `8045:2816` Step 2 · ✅ brief §1 |

Acceptance criteria:

- Given the **Website URL** type, when the owner enters an address, then it is checked as a valid http(s) URL and screened (QR-A-04) before the code can be saved.
- Given the **Multi-Link** type, when the owner adds links, then each link has a label and a URL, can be reordered and removed, and each URL is screened.
- Given the **vCard** type, when the owner fills the contact fields, then name is required and the rest optional; the scanner can save the contact as a `.vcf` file. Personal data of the owner or their staff; no PHI.
- Given the **App Store** type, when the owner enters an iOS link, an Android link and a fallback URL, then at least one store link is required and the fallback is required (QR-U-19).
- Given the **PDF / File** or **Restaurant Menu** type, then QR-U-09 / QR-U-20 apply.
- Given a **static** type, when the owner enters the content, then it is encoded into the code itself; the form says that it cannot be edited or tracked after printing.
- Given invalid content, when the owner presses Next Step, then the invalid fields are named and the step does not advance.

#### QR-U-09 Owner — Host a PDF or file

| User Story | As an Owner I want to upload a file behind a code so that scanners can open it without me hosting it |
| --- | --- |
| Role | Owner |
| Platform | Web (responsive) |
| Priority | Must Have |
| Trace | `DST-05` · Figma `8045:2816` (*PDF* type) · ✅ brief §1 · **DS-06** (design sync 2026-09-30) |

Acceptance criteria:

- Given the PDF / File type, when the owner uploads a file within the allowed types and size, then it is stored and becomes the code's destination.
- Given a scanner opens the code, when the file loads, then it is shown **directly**, with a small **QR.CA-branded footer**. There is no page to customize (DS-06).
- Given a file over the size limit or of a disallowed type, when it is uploaded, then it is refused with the limit stated.
- Given a published file code, when the owner replaces the file, then the same code opens the new file from then on and the printed code does not change.
- Allowed file types, maximum size and per-plan storage are [TBD] (SRS-Q-11). Uploaded files are screened for malware.

#### QR-U-10 Owner — Build the page behind the code

| User Story | As an Owner I want to style the page my code opens so that it looks like my business |
| --- | --- |
| Role | Owner |
| Platform | Web (responsive) |
| Priority | Must Have |
| Trace | `DST-01`, `DST-02`, `DST-03`, `GEN-04` · Figma `8045:2816` (*Selected type includes micro landing?*) · ✅ brief §8 · **DS-06** |

Acceptance criteria:

- Given a type that includes a page — **Multi-Link and vCard** — when the owner passes Step 2, then **Micro-Landing Customization** opens before code customization.
- Given Micro-Landing Customization, when the owner changes colour, logo, call-to-action or template, then a phone-sized preview updates immediately.
- Given the owner ticks *Save as Template*, when they continue, then the page style is saved to their templates (QR-U-16).
- Given a type without a page (Website URL, App Store, **PDF / File, Restaurant Menu PDF**, all static types), when the owner passes Step 2, then page customization is skipped (DS-06).
- Every hosted page renders well on a phone first (NFR in §12). No advertising or third-party content is ever added to an owner's page (BRL-34).
- The wireflow numbers two steps "Step 4" in this branch (Q-W11); the order here is Content → Page → Code → Settings.

#### QR-U-11 Owner — Customize the code's appearance

| User Story | As an Owner I want to style the code itself so that it matches my brand |
| --- | --- |
| Role | Owner |
| Platform | Web (responsive) |
| Priority | Must Have |
| Trace | `GEN-03`, `GEN-04` · Figma `8045:2816` Step 3 *QR Customization* · ✅ brief §2, C-3 (*"must be a dream to use… should work on mobile"*) |

Acceptance criteria:

- Given QR Customization, when the owner changes colour, logo, dot / eye shape or frame (with call-to-action text), then the preview updates immediately.
- Given the owner applies a template, when they select it, then its full style is applied and can still be adjusted.
- Given the owner uploads a logo, when it is placed, then the error-correction level is raised automatically as needed to keep the code readable, and the owner can see it. **There is no manual error-correction selector in V1** (decision A-7 (Christian, 2026-09-30)).
- Given a phone-width screen, when the owner customizes, then every control is usable one-handed without horizontal scrolling.

#### QR-U-12 Owner — Scannability check before download

| User Story | As an Owner I want to be warned if my design may not scan so that I do not print a broken code |
| --- | --- |
| Role | Owner |
| Platform | Web (responsive) |
| Priority | Must Have |
| Trace | `GEN-06` · Figma `8045:2816` *Scannability detector* · 🟡 Denys Melnyk · **DS-05** (design sync 2026-09-30) |

Acceptance criteria:

- Given any design change, when the check runs, then it evaluates contrast, quiet zone, data density, logo coverage and effective error correction, and shows a pass, warning or fail state.
- Given a warning or fail, when it is shown, then it names the specific problem and offers a one-click fix.
- Given a **fail**, when the owner downloads anyway, then they confirm explicitly and the download proceeds. **The download is never blocked** (DS-05).
- Given a code was saved or downloaded with a failed check, when it appears in the dashboard, then it carries a **"not healthy" label** that explains the problem and links to the fix (DS-05).
- Every "download anyway" is recorded as an analytics event, so the detector can be tuned.
- The check never changes the design without the owner's action.

#### QR-U-13 Owner — Publication settings and save

| User Story | As an Owner I want to name and file a code as I create it so that I can find it later |
| --- | --- |
| Role | Owner |
| Platform | Web (responsive) |
| Priority | Must Have |
| Trace | `ACC-04` · Figma `8045:2816` Step 4 *Publication Settings* |

Acceptance criteria:

- Given Publication Settings, when the owner sets a name, a folder, tags and a description (all optional), then they are saved with the code. A code with no name gets a default name.
- Given the owner presses Save, when the code is valid, then it is created, a success toast shows, and the owner returns to the Dashboard with the new code visible.
- Given the owner presses Download QR instead, when the code is valid, then it is saved and downloaded (QR-U-14).
- *Schedule publication* and *Set up Password*, drawn in the wireflows, are **not MVP** (`DYN-15` candidate, `TRS-09` post-MVP). They are hidden in the first release.

#### QR-U-14 Owner — Download in print-ready formats

| User Story | As an Owner I want to download my code in the right format so that it prints sharply |
| --- | --- |
| Role | Owner |
| Platform | Web (responsive) |
| Priority | Must Have |
| Trace | `GEN-05` · Figma: *Download QR* everywhere, no format choice drawn (gap) · Notion §2.1 item 5 |

Acceptance criteria:

- Given a saved code, when the owner downloads it, then they can choose **PNG, JPG, SVG, EPS** or print-ready **PDF** (decision A-4 (Christian, 2026-09-30)).
- Given any code (dynamic or static, on the trial or on a paid plan), when it is downloaded, then the file carries **no watermark or QR.CA branding** (decision A-2 (Christian, 2026-09-30)).
- Given PDF or PNG, when downloaded, then the file states a minimum print size and includes the quiet zone (BRL-29).
- Given a code downloaded before, when it is downloaded again, then the artwork is identical to the earlier file (BRL-30).
- EPS needs a vector converter; the output is checked in common print software.

#### QR-U-15 Owner — Cancel creation

| User Story | As an Owner I want to leave creation without saving so that I do not create codes by accident |
| --- | --- |
| Role | Owner |
| Platform | Web (responsive) |
| Priority | Must Have |
| Trace | Figma `8045:2816` (*Cancel → Confirmation pop-up*) |

Acceptance criteria:

- Given any creation step, when the owner presses Cancel, then a confirmation asks whether to discard.
- Given the confirmation, when the owner chooses *Cancel Creation*, then nothing is saved and they return to the Dashboard; when they choose *Close*, they return to the step they were on with their input intact.

#### QR-U-16 Owner — Use and save templates

| User Story | As an Owner I want ready-made designs and my own saved styles so that new codes are quick and consistent |
| --- | --- |
| Role | Owner |
| Platform | Web (responsive) |
| Priority | Must Have |
| Trace | `GEN-04`, candidate `GEN-14` · Figma: *Applying Template*, *Save as Template* · ✅ brief §7 (Uniqode's templates praised) |

Acceptance criteria:

- Given creation or edit, when the owner opens templates, then they see a small starter set by industry (size [TBD]) and any templates they saved.
- Given *Save as Template* is ticked, when the owner continues, then the current code style (and page style, where there is one) is saved under a name and appears in their templates.
- Given a saved template, when the owner deletes it, then codes already made with it do not change.

#### QR-U-17 Owner — Create codes in bulk from a CSV file

| User Story | As an Owner I want to create many codes from one spreadsheet so that I do not make them one by one |
| --- | --- |
| Role | Owner |
| Platform | Web (desktop first; must not break on phone) |
| Priority | Must Have |
| Trace | `GEN-07` · Figma `8045:2390` · ✅ C-2 #1 · **DS-09**, **DS-10** (design sync 2026-09-30) |

Acceptance criteria:

- **Concept:** one design and one set of settings, applied to a table of different contents. Each row becomes one code (for example, a code per product or per location, each with its own link).
- Given Bulk Creation, when the owner picks a type (Website URL and the other non-page types), then they can download a CSV template for that type.
- Given an uploaded CSV, when it is parsed, then every row is validated and the owner sees the valid rows and each invalid row with its reason (*Check what data will be loaded*), and can *Confirm* or *Upload new CSV*.
- Given the upload exceeds the **per-upload cap** or the **plan limit on number of codes**, when it is checked, then the owner is told how many rows fit, before anything is created. Both limits exist (DS-09); numbers are [TBD] (SRS-Q-13, SRS-Q-08).
- Given valid rows, when the owner applies one customization and one set of publication settings and presses Save, then one code per valid row is created and a success toast states the count. *Download QR* gives all codes as one archive.
- Scope stays basic (DS-10): no per-table ordering or POS scenarios; page types (vCard, Multi-Link) in bulk are not V1. Which use cases V1 supports is SRS-Q-29.

#### QR-U-18 Owner — Publish page content in English and French ⚠️

| User Story | As an Owner I want my hosted page in English and French so that every customer can read it |
| --- | --- |
| Role | Owner |
| Platform | Web (responsive) |
| Priority | Must Have (bilingual fields) · prominence check pending |
| Trace | `LOC-02` ⏸, `LOC-03` ⏸ · Figma: *French support* (create), *Multi-language support* (edit) · ✅ brief §5 (*"…relevant user-facing QR landing pages"* in en and fr-CA) · SRS-Q-05 |

Acceptance criteria:

- Given a hosted page, when the owner edits content, then every text field has an English and a French value in the same page record (BRL-16), not two separate pages.
- Given a scanner opens the page, when their device language is French, then French is served; otherwise English. A visible switch lets the scanner change language for the rest of the visit (BRL-21).
- Given the owner has filled only one language, when the page is published, then it shows that language to everyone. Whether publishing is **blocked** or only **warned** when French is missing, and whether French must be at least as prominent as English, depends on SRS-Q-05.
- The wireflows show French as an optional per-code toggle. This story treats both languages as a property of every page; the toggle is kept only if the client prefers it (Q-W8).

#### QR-U-19 Owner — App-store routing

| User Story | As an Owner I want one code that sends iPhone and Android users to the right store so that I print one code, not two |
| --- | --- |
| Role | Owner |
| Platform | Web |
| Priority | Must Have |
| Trace | `DYN-07` · Figma: *Mobile App* type, no routing drawn · ✅ brief §1 (*"fallback behavior defined in Discovery"*) |

Acceptance criteria:

- Given an App Store code, when an iOS device scans it, then it goes to the App Store link; when Android scans it, then to the Google Play link.
- Given any other device, or a platform with no link set, when it scans, then it goes to the fallback URL.
- Given only one store link, when the other platform scans, then it goes to the fallback URL, not to the wrong store.

#### QR-U-20 Owner — Restaurant menu as a PDF

| User Story | As a restaurant Owner I want a code that opens my menu so that I can update it without reprinting |
| --- | --- |
| Role | Owner |
| Platform | Web (responsive) |
| Priority | Must Have |
| Trace | `DST-05` (`DST-04` → later) · Figma: *Restaurant Menu (Display only)* · **DS-04** (design sync 2026-09-30) |

Acceptance criteria:

- Given the Restaurant Menu type, when the owner creates it, then they **upload the menu as a PDF**, as in the PDF / File type (QR-U-09). The scanner sees the PDF with the QR.CA-branded footer.
- Given a published menu, when the owner replaces the PDF, then scanners see the new menu on the next scan; the printed code does not change.
- Display only: no ordering, no payment (`DST-10` is not built).
- **The structured menu builder** (sections → items → prices → allergens) **is out of scope**: *"scope almost for a separate product"* (DS-04). Usage of the menu type is tracked; if owners ask for more, it is revisited.

#### QR-U-21 Owner — Wi-Fi code (static)

| User Story | As a café Owner I want a code that connects guests to my Wi-Fi so that they do not type the password |
| --- | --- |
| Role | Owner |
| Platform | Web |
| Priority | Must Have |
| Trace | `GEN-10`, `GEN-12` · Figma: *Wi-Fi* (static) · **DS-03** |

Acceptance criteria:

- Given the Wi-Fi type, when the owner enters network name, password and security type, then the code encodes the standard Wi-Fi payload and a scan offers to join the network.
- Given it is a static code, when the owner looks at it, then the product states that it cannot be edited after printing and has no scan statistics.

### E4 · Managing codes

#### QR-U-22 Owner — Dashboard: list, search, filter, sort

| User Story | As an Owner I want to see and find all my codes so that I can manage them |
| --- | --- |
| Role | Owner |
| Platform | Web (responsive) |
| Priority | Must Have |
| Trace | `ACC-04` · Figma `8045:3708`, `8045:3479` · ✅ brief §2 · **DS-02**, **DS-05** |

Acceptance criteria:

- Given an owner on the Dashboard, when it loads, then every code shows its name, type (static / dynamic), status (**Active / Paused**), scan count, a *not healthy* label where it applies (QR-U-12), and the row actions: Edit, Analytics, Download, Move to Folder, **Move to Archive**, Duplicate, Pause or Activate, Delete.
- Given the owner types in Search, when they type, then the list updates; Clear restores it.
- Given the owner applies Filters (type, status, folder, tag), when applied, then the list updates; Clear restores it.
- Given the owner chooses a sort (newest, name, most scanned), when chosen, then the list reorders.
- Given an owner with no codes, when the Dashboard loads, then an empty state leads to *Create QR code*.
- The Dashboard header offers *Create QR code* and *Bulk Creation*. Codes in the Archive folder are not in this list (QR-U-27).

#### QR-U-23 Owner — Edit a code without reprinting

| User Story | As an Owner I want to change what my code opens so that printed material stays up to date |
| --- | --- |
| Role | Owner |
| Platform | Web (responsive) |
| Priority | Must Have |
| Trace | `DYN-01`, `DYN-02`, `DYN-03` · Figma `8045:2391` · ✅ brief §2 |

Acceptance criteria:

- Given Edit QR code, when it opens, then the owner can change any of four blocks in any order: Content, QR Customization, Micro-Landing Customization (where there is a page), and Publication Settings.
- Given the owner saves a change of content, when a scanner next scans, then they reach the new destination, and the code's identifier and printed pattern are unchanged.
- Given any plan, including the trial, when the owner edits, then the number of edits is never limited (BRL-10).
- Given the owner changed only content, when they save, then no re-download is needed and the pop-up says so.
- Given the owner changed the code's appearance, when they save, then *Download QR pop-up* offers the new file and warns that already-printed codes keep the old look but still work.
- Given the owner presses Cancel with unsaved changes, when they confirm *Discard Changes*, then nothing is saved.

#### QR-U-24 Owner — Pause and activate a code

| User Story | As an Owner I want to switch a code off and on so that I control when it works |
| --- | --- |
| Role | Owner |
| Platform | Web (responsive) |
| Priority | Must Have |
| Trace | `DYN-04`, `DYN-05` · Figma `8045:3708` (*Is the QR code Paused*) · ✅ brief §2 |

Acceptance criteria:

- Given an active code, when the owner chooses Pause and confirms, then the code stops opening its destination and a success toast shows.
- Given a paused code, when it is scanned, then the scanner sees the friendly "not available" page (QR-U-39), never an error.
- Pause applies to dynamic codes. Moving a code to the Archive folder also pauses it (QR-U-27).
- Given a paused code, when the owner chooses Activate and confirms, then the code opens its last destination again.
- Could Have: the owner writes the message the paused page shows (BRL-05).

#### QR-U-25 Owner — Duplicate and delete, with undo

| User Story | As an Owner I want to copy or remove codes so that I can reuse set-ups and tidy my list |
| --- | --- |
| Role | Owner |
| Platform | Web (responsive) |
| Priority | Must Have |
| Trace | `DYN-06`, `DYN-02` · Figma `8045:3708` · **DS-01** (design sync 2026-09-30) |

Acceptance criteria:

- Given a code, when the owner chooses Duplicate, then a **full copy** is created: content, style, page and settings. It gets a **new code ID and a new short redirect link**, so it is printed as a different code. It opens the same destination until the owner changes it. It is named "Copy of …", has its own analytics from zero, and a toast confirms it.
- Given a duplicate, when the owner opens it, then they manage it as a separate code; nothing they change affects the original.
- Given a code, when the owner chooses Delete and confirms, then a toast with *Undo* shows; Undo restores the code as it was.
- Given the undo window passes, when the code is deleted, then scanning it shows the "no longer available" page (QR-U-39), and its identifier is never reused (BRL-01).
- Open: whether two identical, unchanged duplicates need a safeguard, and how analytics and safety treat them (SRS-Q-27, Denys). Scan history of a deleted code is [TBD] (SRS-Q-14).

#### QR-U-26 Owner — Organise codes in folders

| User Story | As an Owner I want folders so that I can group codes by location, campaign or client |
| --- | --- |
| Role | Owner |
| Platform | Web (responsive) |
| Priority | Must Have |
| Trace | `ACC-04` · Figma `8045:3479` (*Add Folder → Create Folder pop-up*) |

Acceptance criteria:

- Given the sidebar, when the owner chooses Add Folder, enters a name, optionally selects codes and presses Create, then the folder appears in the sidebar with those codes in it.
- Given a code, when the owner chooses Move to Folder, selects a folder and saves, then the code moves and a toast shows.
- Given a folder, when the owner opens it, then only its codes are listed, with the same actions as the Dashboard.
- Renaming and deleting folders are not drawn (gap). Deleting a folder never deletes its codes; they return to All QR codes.

#### QR-U-27 Owner — Archive folder

| User Story | As an Owner I want to put codes I no longer use into an Archive so that my working list stays short |
| --- | --- |
| Role | Owner |
| Platform | Web (responsive) |
| Priority | Must Have |
| Trace | `ACC-07` · Figma `8053:2392`, `8070:2711` · **DS-02** (design sync 2026-09-30) |

Acceptance criteria:

- **Archive is a folder, not a status.** It is always present in the sidebar. Codes have two statuses only: **Active** and **Paused** (DS-02).
- Given an active dynamic code, when the owner chooses *Move to Archive*, then a confirmation says clearly that **the code will be paused** and scanners will see the "not available" page. On confirm, the code is paused and moved.
- Given the Archive folder, when the owner opens it, then archived codes are listed with Edit, Analytics, Download, Duplicate, Activate and Delete. Their scan history stays available.
- Given an archived code, when the owner chooses *Activate* and confirms, then they pick a folder (default: All QR codes) and the code returns there as Active (subject to the plan and the subscription state). Figma `8139:14187`.
- Moving codes into and out of Archive is tracked in analytics, to decide later whether a terminal "archived" status is needed (SRS-Q-26).
- Open: what happens to a **static** code in Archive; it cannot be paused, because its content is in the code itself (SRS-Q-07).
