<!--
  UPSTREAM COPY. DO NOT EDIT.
  Source of truth: Christian Kapuzo's KB, Features and User Flows v1.0, subpage 5 (Notion).
  Received 2026-10-01 (pasted by Oleg S). Internal: not for the client.
-->

# 5 — User flows FL-01…FL-13

## 5 · User flows

Written from Oleg's flows (30.09 plus his post-sync changes) and the SRS. FL-12 and FL-13 are **not drawn** in Figma.

### FL-01

**First visit to first code** · Visitor, Owner (customer)

- **Trigger:** A visitor lands on the QR.CA home page.
- **Before:** None.

**Steps**

1. The visitor chooses a code type, enters content and picks colours and a style. The preview updates with every change.
2. The Download button activates once content is entered.
3. The visitor presses Download → *Code Generated (Sign up to download)*: sign-up with email or Google. There is no anonymous download (DS-08).
4. Email sign-up: the visitor confirms their email (resend / change email available). Google sign-up needs no confirmation (DS-07).
5. After sign-up, the code and its design are already in the new account.
6. A welcome window offers *Download your QR code*, explains the trial (length, what is included, end date, what happens to codes afterwards), and offers optional payment details.

**Alternatives and edge cases**

- A visitor who signs up without making a code sees *Create your first QR code* instead.
- Payment details during the trial are optional; the trial never requires a card.
- **End:** The visitor is an Owner on the trial, with a first code.
- **Features:** F-01, F-02, F-07, F-08, F-10, F-30, F-31
- **SRS:** QR-U-01, QR-U-02, QR-U-03, QR-U-06
- **Figma:** `8045:3711` · `8055:3551`
- **Open questions:** SRS-Q-01 ⚠️ — What does a scanner see when the trial ends or a subscription lapses? Expire (wireflows), the client's *"your codes will expire in…"*, or a branded paused page with the same ID that resumes on payment (recommended) *(Open)*; SRS-Q-28 — Email confirmation: legal / compliance requirement? Why does Uniqode accept only corporate emails? *(Open)*

### FL-02

**Sign up, log in, recover a password** · Visitor, Owner (customer)

- **Trigger:** Sign up / Log in on the site, or Forgot password.
- **Before:** None.

**Steps**

1. **Sign up:** email and password with Terms accepted, or Google. Email sign-up → required *Confirm your email* step (resend, change email) → the trial starts. Google sign-up skips the confirmation.
2. **Log in:** email and password, or Google, then to the dashboard. A wrong password gives one generic message; repeated attempts are slowed.
3. **Forgot password:** enter email → *OTP Confirmation* (a one-time code by email if the account exists; resend after 60 s) → enter the code → new password twice → other sessions signed out → log in.

**Alternatives and edge cases**

- Email already registered at sign-up → offered Log in and password recovery.
- Wrong or expired code → retry or resend; attempts are limited.
- **End:** The owner is signed in.
- **Features:** F-30
- **SRS:** QR-U-03, QR-U-04, QR-U-05
- **Figma:** `8055:3551` · `8055:3363` · `8067:2887`
- **Open questions:** SRS-Q-28 — Email confirmation: legal / compliance requirement? Why does Uniqode accept only corporate emails? *(Open)*

### FL-03

**Create a code** · Owner (customer)

- **Trigger:** *Create QR code* on the dashboard.
- **Before:** Owner signed in; trial or subscription active.

**Steps**

1. **Choose a type:** dynamic (five core types, PDF menu, review / feedback) or static (website, contact, email, SMS, call, text, Wi-Fi).
2. **Add the content.** Invalid fields are named; every link is safety-checked in the background.
3. **Build the page**, only for Multi-Link and vCard: colours, logo, button, template, phone preview; optional *Save as Template*. PDF and menu show the file itself.
4. **Style the code:** colours, logo, shapes, frame; the scannability check runs live and offers fixes; optional *Save as Template*.
5. **Schedule (optional, dynamic codes):** add time windows with their own destinations and a default destination (F-60).
6. **Name and file it:** name, folder, tags, description (all optional).
7. **Save**, or **Save and download** (PNG, JPG, SVG, EPS, print-ready PDF; no watermark).

**Alternatives and edge cases**

- Cancel at any step → confirmation → discard or return with input intact.
- Known-malicious link → cannot be saved, with the reason.
- Scannability fail → warning; the owner can download anyway after confirming; the code gets a "not healthy" label (DS-05).
- **End:** The new code is live on the dashboard.
- **Features:** F-02, F-03, F-04, F-65, F-61, F-60, F-06, F-07, F-08, F-09, F-10, F-12, F-17, F-21, F-46
- **SRS:** QR-U-07, QR-U-08, QR-U-09, QR-U-10, QR-U-11, QR-U-12, QR-U-13, QR-U-14, QR-U-15, QR-U-16, QR-U-18, QR-U-19, QR-U-20, QR-U-21, QR-U-43, QR-U-44
- **Figma:** `8045:2816`
- **Open questions:** SRS-Q-03 — Which types ship in V1? *(◐ Partly: five dynamic + PDF menu + static incl. Wi-Fi (DS-03). Open: extra dynamic types)*; SRS-Q-11 — PDF / File: allowed types, max size, storage per plan *(Open)*; SRS-Q-07 — Any free plan, or only trial → paid? Are static codes free after the trial, and what does a static code in Archive do? *(Open)*

### FL-04

**Create many codes at once** · Owner (customer)

- **Trigger:** *Bulk creation* on the dashboard.
- **Before:** Owner signed in; plan allows bulk.

**Steps**

1. Choose a type and download its CSV template.
2. Fill it in and upload it.
3. Every row is validated (*Check what data will be loaded*): valid count, the reason for each invalid row, and how many rows fit the per-upload cap and the plan limit, before anything is created.
4. Apply one style and one set of settings to the batch.
5. **Save**, or **Save and download** all codes as one archive.

**Alternatives and edge cases**

- Fix and re-upload, or continue with valid rows only.
- **End:** One code per valid row on the dashboard.
- **Features:** F-11, F-07, F-08, F-10, F-17
- **SRS:** QR-U-17
- **Figma:** `8045:2390`
- **Open questions:** SRS-Q-13 — Bulk creation limits *(◐ Partly: per-upload cap + plan limit (DS-09); numbers open)*; SRS-Q-29 — Bulk use cases: which ones V1 supports (basic), which wait *(Open)*

### FL-05

**Change a printed code** · Owner (customer)

- **Trigger:** *Edit* on a code.
- **Before:** The code exists.

**Steps**

1. Change any block in any order: content, page, code style, settings.
2. **Save.** Content or page only → nothing to reprint; the next scan opens the new version. Code look changed → the new file is offered, with a note that printed codes keep working.

**Alternatives and edge cases**

- Cancel with unsaved changes → *Discard Changes* confirmation.
- **End:** The code is updated; the identifier and printed pattern are unchanged. Edits are unlimited on every plan.
- **Features:** F-14, F-06, F-07, F-08, F-10, F-12
- **SRS:** QR-U-23
- **Figma:** `8045:2391`

### FL-06

**Pause, reactivate, copy or delete a code** · Owner (customer), Scanner

- **Trigger:** A row action on the dashboard.
- **Before:** The code exists.

**Steps**

1. **Pause** → confirm → the code stops opening its destination; scanners see the paused page.
2. **Activate** → confirm → the code opens its last destination again.
3. **Duplicate** → a full copy with a new ID and a new short link, same destination until changed.
4. **Move to Archive** → warning that the code will be paused → confirm → the code is paused and moved to the Archive folder.
5. **Delete** → confirm → a toast with **Undo**; afterwards scanners see "no longer available".

**Alternatives and edge cases**

- From the Archive folder: Activate → confirm → pick a folder (default: All QR codes) → the code returns there as Active.
- **End:** The code is in the chosen state.
- **Features:** F-15, F-16, F-18, F-23
- **SRS:** QR-U-24, QR-U-25, QR-U-27
- **Figma:** `8045:3708` · `8053:2392`
- **Open questions:** SRS-Q-26 — Terminal 'archived' status needed, or is the Archive folder enough? Check competitors; decide from archive analytics *(Open)*; SRS-Q-27 — Duplicates: safeguard for unchanged duplicates? How do analytics and safety treat two identical codes? *(Open)*; SRS-Q-14 — Scan history of deleted codes: kept or removed? *(Open)*

### FL-07

**Organise and find codes** · Owner (customer)

- **Trigger:** Sidebar or dashboard header.
- **Before:** Owner signed in.

**Steps**

1. **Folders:** *Add Folder* → name → optionally pick codes → Create. Or *Move to Folder* on a code.
2. **Find:** search by name; filter by type, status, folder, tag; sort by newest, name, most scanned.

**Alternatives and edge cases**

- Deleting a folder never deletes its codes; they return to All QR codes.
- **End:** The owner finds the code they want.
- **Features:** F-13, F-17
- **SRS:** QR-U-22, QR-U-26
- **Figma:** `8045:3708` · `8045:3479`

### FL-08

**Check how codes perform** · Owner (customer)

- **Trigger:** *Analytics* on a code, or *Analytics* in the sidebar.
- **Before:** Owner signed in.

**Steps**

1. **One code:** total and unique scans, scans over time, time of day, device, browser, country and city; filter by period, date range, time, location (comparison period is not V1). Known preview bots are not counted (A-3).
2. **All codes:** the same across the account, plus top code and busiest day and time; filter by folder or code.

**Alternatives and edge cases**

- Few scans → guidance instead of an empty chart.
- **End:** The owner knows whether the code works.
- **Features:** F-25, F-26, F-27
- **SRS:** QR-U-28, QR-U-29
- **Figma:** `8045:2575` · `8045:3155`

### FL-09

**From trial to paid** · Owner (customer)

- **Trigger:** Trial running; the owner presses Upgrade, or the trial nears its end.
- **Before:** Account in `trial`.

**Steps**

1. The sidebar banner shows days left, the end date and what happens to codes, with Upgrade.
2. Reminder emails before the end (proposed 3 days and 1 day).
3. Upgrade (banner, account menu or locked feature) → window with what is included, days left, what stops without a plan, when the charge happens.
4. Choose a plan → card in the secure form → confirm. Success → plan applies at once. Error → *Try again* / *Close*. *Keep Free Trial* → back to where they were.

**Alternatives and edge cases**

- Trial ends without payment → owner can log in and see everything, cannot create new codes, is offered a plan. Scanner side: SRS-Q-01.
- **End:** Account in `subscribed`, or in `no active subscription`.
- **Features:** F-31, F-32, F-33, F-34, F-35, F-43, F-44
- **SRS:** QR-U-30, QR-U-31, QR-U-32
- **Figma:** `8045:3479` · `8053:2117`
- **Open questions:** SRS-Q-01 ⚠️ — What does a scanner see when the trial ends or a subscription lapses? Expire (wireflows), the client's *"your codes will expire in…"*, or a branded paused page with the same ID that resumes on payment (recommended) *(Open)*; SRS-Q-07 — Any free plan, or only trial → paid? Are static codes free after the trial, and what does a static code in Archive do? *(Open)*; SRS-Q-08 ⚠️ — Plans, prices, limits, entitlements, trial entitlements, proration *(Open)*

### FL-10

**Manage a plan, cancel, handle a failed payment** · Owner (customer)

- **Trigger:** *Plans & Billing* in the account menu, or a failed renewal.
- **Before:** Account in `subscribed`.

**Steps**

1. **See the plan:** current plan, renewal, next invoice, order history with invoice PDFs.
2. **Change plan:** pick another plan; a smaller plan never switches off live codes.
3. **Manage billing:** update card and billing address.
4. **Cancel:** optional reason → at most one optional offer (e.g. a discount), skippable → confirm → active to period end, not renewed → then as a lapsed trial.
5. **Failed payment:** email and in-app banner with a card-update link; automatic retries; if unpaid after the retry period → as a lapsed trial.

**Alternatives and edge cases**

- *Keep Plan* in the cancel window closes it with no change.
- Accepting the retention offer (*Activate Discount*) → success → back to the active plan with the discount applied (Figma `8134:8998`).
- **End:** Plan changed, canceled, or payment recovered.
- **Features:** F-35, F-36, F-37, F-43, F-44
- **SRS:** QR-U-33, QR-U-34, QR-U-35
- **Figma:** `8045:3051`
- **Open questions:** SRS-Q-08 ⚠️ — Plans, prices, limits, entitlements, trial entitlements, proration *(Open)*; SRS-Q-17 — Refund policy; console or Recurly *(Open)*

### FL-11

**Account settings and deleting the account** · Owner (customer)

- **Trigger:** *Settings* in the account menu.
- **Before:** Owner signed in.

**Steps**

1. **Name:** edit and save.
2. **Email:** current password + new email → confirmation to the new address → change applies once confirmed.
3. **Password:** current + new twice → other sessions signed out.
4. **Delete account:** explanation (data cannot be restored; what happens to printed codes) → type full name → plan canceled, personal data deleted → final page with Go to Landing / Contact Support.

**Alternatives and edge cases**

- Google sign-up owner opening Edit Password: set a password or be told sign-in is via Google ([TBD]).
- **End:** Details updated, or account deleted.
- **Features:** F-38, F-39
- **SRS:** QR-U-36, QR-U-37
- **Figma:** `8045:3122`

### FL-12

**What a scanner sees** · Scanner

- **Trigger:** A phone camera reads a printed code.
- **Before:** None.

**Steps**

1. The redirect resolves the code's current state.
2. **Live website / app link** → redirect (iPhone → App Store, Android → Google Play, others → fallback); UTM parameters passed through; a time-based schedule picks the destination for the current window.
3. **Review / feedback code** → optional rating step → the Google review link for everyone, plus an optional private feedback form.
4. **Live page type** → hosted page in the phone's language, with a language switch.
5. **Paused** (by the owner or in Archive) → friendly branded page, *"Sorry — the code you're scanning is not available right now"*, with the owner's message if written.
6. **Owner has no active plan** → per SRS-Q-01 (recommended: the same paused page, naming the business).
7. **Deleted** → "no longer available" page. **Disabled for safety** → warning page, destination not shown. **Never existed** → generic not-found page.

**Alternatives and edge cases**

- Every scan is counted without identifying the scanner. No ads anywhere.
- **End:** The scanner reaches the destination or a clear explanation. Never a browser error.
- **Features:** F-19, F-20, F-21, F-22, F-23, F-24, F-12, F-25, F-60, F-61
- **SRS:** QR-U-38, QR-U-39, QR-U-43, QR-U-44
- **Figma:** not drawn
- **Open questions:** SRS-Q-01 ⚠️ — What does a scanner see when the trial ends or a subscription lapses? Expire (wireflows), the client's *"your codes will expire in…"*, or a branded paused page with the same ID that resumes on payment (recommended) *(Open)*; SRS-Q-15 — Name of the dedicated redirect domain *(Open)*

### FL-13

**How the QR.CA team handles support and misuse** · Support admin, Super admin (platform owner)

- **Trigger:** A support request, a flagged link, or a report of a harmful code.
- **Before:** Admin signed in with two-step sign-in.

**Steps**

1. **Help a customer:** find by email, name or code → see codes, plan, history → extend trial, grant a goodwill code, or handle a refund; each action logged.
2. **Flagged link:** known-malicious cannot be saved; doubtful ones keep working and enter the review queue → approve or disable.
3. **Harmful code:** disable with a reason → next scan shows the safety warning → owner emailed.
4. **Platform picture:** sign-ups, trials, conversions, codes by type, industry breakdown.
5. **Access:** super admins invite and remove admins.
- **End:** The customer is helped or the threat is contained, with a record.
- **Features:** F-46, F-49, F-50, F-51, F-52, F-53, F-54
- **SRS:** QR-A-01, QR-A-02, QR-A-03, QR-A-04, QR-A-05, QR-A-06
- **Figma:** not drawn
- **Open questions:** SRS-Q-17 — Refund policy; console or Recurly *(Open)*
