# Figma Wireflows vs SRS — audit 2026-10-01

**File:** QR.ca – Wireflows `heli5YKyvwao7H6XFJQNiY`, User Flow canvas `8013:3323`
**Checked against:** everything in `docs/srs/upstream/` (SRS v1.0, Features & Flows v1.0) and `docs/srs/domain-model.md`
**Status:** ✅ **Complete** as of 2026-10-02. The 2026-10-01 pass stopped at the Figma rate limit; the rest was checked on 2026-10-02 (#68–89, plus corrections to #21 and #49–51). See [Coverage](#coverage).
**Round 3 (2026-10-05):** re-checked on the new **Wireflows (WIP)** page, which has wireframes. See [Round 3](#round-3-wireflows-page-with-wireframes-2026-10-05). It is the current state; the sections below it are history.
**Only what's left to fix:** [`figma-audit-open-items.md`](figma-audit-open-items.md).

Severity: **High** = contradicts a requirement or a required flow is missing · **Med** = a required state or detail is missing · **Low** = copy, naming or a dead-end arrow.

The SRS wins over Figma (A-15). Known findings FD-01…FD-09 live in [`README.md`](README.md#figma-vs-srs). Their status is re-checked here; they are not listed again as new. Arrows were traced from connector coordinates in the metadata.

## Round 3: Wireflows page with wireframes (2026-10-05)

**What changed in the file.** The flows now live on the page **↳ Wireflows (WIP)** `8134:9062`, in the section **Wireflows** `8193:22054`. This is a copy of the old User Flow `8013:3323` (page *Meta Flow (WIP)*) with a wireframe next to each section. Every node got a new ID. Node IDs in this round are **new-page IDs**; IDs in the older sections below point to the old User Flow.

Read through the Figma MCP (`use_figma`, read-only): every flow box, arrow, note, link and wireframe text.

### Links that still lead to the old User Flow

**All 91 links** on the new page still open the old User Flow instead of the matching section on the Wireflows page. This was known. Here is the full list to fix, grouped by target.

| Now opens (User Flow) | Should open (Wireflows) | Link boxes to change |
| --- | --- | --- |
| Dashboard `8045:3708` | Dashboard `8193:23387` | Dashboard `8193:23407`, `23417`, `23427`, `23437`, `23447`, `23457`, `23467`, `23821`, `23946` · Log in `24303`, `24313` · Onboarding `24503`, `24514` · Archive `22937`, `22947` · Creation `23164`, `23194`, `23204` · Bulk `22150` · Edit `22175`, `22185` · Particular Analytics `22327`, `22337` · Upgrade `22849`, `22859` (25) |
| Upgrade pop-up `8053:2117` | Upgrade pop-up `8193:22757` | Dashboard `23537`, `23740`, `23888`, `23898`, `23961` · Sidebar `23973`, `23983`, `23993`, `24003` · Onboarding `24526`, `24536` · Archive `23095` · Bulk `22162` · Upgrade `22777` · Plans & Billing `22612`, `22624` (16) |
| Plans & Billing `8045:3051` | Plans & Billing `8193:22413` | Sidebar `24093`, `24103`, `24113` · Plans & Billing `22433`, `22443`, `22453`, `22566`, `22576`, `22586` (9) |
| Particular QR Analytics `8045:2575` | `8193:22282` | Sidebar `24226`, `24236` · Archive `22957`, `22967` · Dashboard `23487`, `23497`, `23507` (7) |
| Edit QR code `8045:2391` | `8193:22165` | Dashboard `23517`, `23527` · Archive `22977` · Edit `22205` · Particular Analytics `22347` (5) |
| Account Settings `8045:3122` | `8193:22628` | Sidebar `24063`, `24073`, `24083` · Account Settings `22648` (4) |
| Log in `8055:3363` | `8193:24247` | Landing `24415` · Onboarding `24593` · Password Restoration `24350` · Dashboard `23927` (4) |
| QR code creation `8045:2816` | `8193:23154` | Onboarding `24447` · Dashboard `23547` · Creation `23224` (3) |
| Sidebar `8045:3479` | `8193:23963` | Dashboard `23929`, `23930`, `23931` (3) |
| Sign up `8045:3710` | `8193:24539` | Landing `24426` · Log in `24281` (2) |
| Sidebar "Navigation" box `8079:3457` | `8193:24132` | Sidebar `24130`, `24131` (2) |
| "Stripe Payment" `8055:3190` | `8193:22539` | Plans & Billing `22540`, `22626` (2) |
| Archive `8053:2392` | `8193:22914` | Sidebar `24013` |
| Analytics `8045:3155` | `8193:22869` | Sidebar `24033` |
| APIs `8045:3377` | `8193:23101` | Sidebar `24043` |
| GTM `8045:3399` | `8193:23131` | Sidebar `24053` |
| Bulk Creation `8045:2390` | `8193:22055` | Dashboard `23477` |
| Welcome pop-up `8045:3709` | `8193:24437` | Dashboard `23916` |
| Password Restoration `8067:2887` | `8193:24321` | Log in `24291` |
| Landing `8045:3711` | `8193:24372` | Account Settings `22753` |
| "Checking inbox" `8139:14140` | `8193:24579` | Onboarding `24580` |

All link box IDs start with `8193:`. Two link windows have no link at all: *Unlock Tracking pop-up* `8241:8127` (Landing) and *Create Folder pop-up* `8193:24014` (Sidebar).

### Requests to change the docs

These are places where Figma does better than the SRS. Upstream files are read-only, so each one goes to the SRS owner as a request. Until it's answered, the SRS still wins (A-15).

| # | Story | Now in the SRS | Proposed change | Why | From | Status |
| --- | --- | --- | --- | --- | --- | --- |
| DR-01 | QR-U-30 (F-32) | The trial banner shows days left and an *Upgrade* button. It "states a date, not only a count" | The banner shows a **live countdown in days and hours** ("Codes will be paused in: 13d 20h"), **dynamic codes used vs the limit** ("1/250") and ***Add payment***, which opens the Upgrade pop-up (QR-U-32). The end date is shown on the Welcome pop-up (QR-U-06) and in the Upgrade pop-up, not in the banner | A countdown is clearer at a glance than a date; the end date already appears where the owner decides. The usage count shows how close they are to the plan limit (DS-09). "Add payment" matches the optional card in the trial | Audit #24, Sidebar wireframe `8193:27984` | To send |
| DR-02 | QR-U-31 | Without a subscription the owner "can see all their codes and statistics, cannot create new dynamic codes". Nothing about editing | Without an active subscription, **Edit is locked** (it opens the Upgrade pop-up). Codes and statistics stay visible | Editing a paused code has no effect for scanners until the plan is active, and the lock is a clear reason to upgrade | Audit #79, Archive `8193:23098`, Dashboard no-subscription branch | To send |
| DR-04 | QR-U-07 (SRS-Q-03, Q-W6) | Static list: Website URL, vCard, Email, SMS, Phone call, Plain text, Wi-Fi. vCard vs Contact "to confirm with Oleg" | Add **Contact** as its own static type: a basic card with name, phone and email. vCard stays the full card (occupation, company, several numbers, website, address, photo), static and dynamic | Oleg confirmed both are needed ([0003](../decisions/0003-static-contact-and-vcard-both-kept.md)). A short card keeps a static code less dense | Audit #35, type note `8193:23287`, Landing `8193:15352` | To send |
| DR-03 | A-13, QR-U-31 | Download of paused codes is allowed, with a note | — | — | Audit #79 | Withdrawn: Figma now follows A-13 |

### Still fixed

#3, #4, #5, #6, #8, #12, #13, #17, #30, #53, #54 and #90 stay fixed on the new page. #5 is now also in the Welcome wireframes `8193:16167` and `8193:21006`, with 14 days, the end date, what's included and what happens to codes.

### Status of every open item

✅ fixed · ⚠️ partly · ❌ still open · ⏸ deferred: waiting for the client's answer, so not an open issue for Figma. Items you accepted or deferred earlier (#1, 2, 7, 9, 10, 11, 14, 15, 16, 52, 55) are left out.

**FD items**

| FD | Status | Now |
| --- | --- | --- |
| FD-01 | ⚠️ | The Step 1 wireframe `8193:17468` dropped Map Location, Coupon, Facebook and Image. It still offers dynamic Wi-Fi, Plain text, Email, SMS and Phone call under *More Types*. The type note `8193:23287` still has the old list |
| FD-02 | ⚠️ | *Google Reviews* is in the wireframe under *More Types*. The type note doesn't have it |
| FD-03 | ⚠️ | The wireframe says *App Store Link*. The notes `8193:23287` and `8193:22086` (Bulk) still say "Mobile App" |
| FD-05 | ✅ | Found in the second pass: `8079:3007` is the *Basic Assumptions* frame (User Types, QR Types, Static and Dynamic QR Statuses) on the old page *Meta Flow (WIP)*. It was never deleted |
| FD-06 | ❌ | Only *Schedule publication* (notes `8193:23348`, `23361`, Bulk `22129`, Edit `22234`). What to draw is in #33 |
| FD-07 | ❌ | The GTM wireframe `8193:21625` has GTM only, with no GA4 or Meta Pixel |
| FD-08 | ✅ | The Webhooks item is gone from the Sidebar |
| FD-09 | ❌ | Note `8193:23323`: "French support / Smart Rules / Geolocation URL" |

**Sign up · Landing · Upgrade**

| # | Status | Now |
| --- | --- | --- |
| 3 | ✅ | Still fixed, but the wireframe `8193:19773` has a typo, "Now now" |
| 18 | ⏸ Deferred: waiting for the client (SRS-Q-01) | "All QRs become paused after trial" in note `8193:23875`; rows say "Will be paused in 13 d"; Welcome says "Then your codes pause". This matches the assumption in B-1, but SRS-Q-01 is still open with the client |

**Sidebar · Dashboard**

| # | Status | Now |
| --- | --- | --- |
| 19 | ✅ Fixed (2026-10-05) | Limit hit `8193:23902` → *User has Free Trial?* → Yes: *Upgrade pop-up from trial*; No: *Upgrade on higher level pop-up*. Owners without a subscription are caught earlier by the Default Upgrade pop-up |
| 20 | ✅ Fixed (2026-10-05) | The Dashboard still opens Bulk directly, but Bulk now checks the limit right after *Upload CSV*, before anything is created (`8256:8834`, see #46). That's the right place, because the number of codes is only known from the CSV. Not shown: the per-upload cap (DS-09). Fine for the happy path |
| 22 | ✅ | The Webhooks item is gone |
| 23 | ✅ | The Sidebar now has *Google Tag Manager* and *API* under *Advanced* `8193:24134`. The missing GA4 / Meta Pixel on the GTM screen is FD-07 |
| 24 | ↪ Figma kept, SRS change requested ([DR-01](#requests-to-change-the-docs)) | Oleg (2026-10-05): the banner in the Sidebar wireframe `8193:27984` works better than QR-U-30. It shows a live countdown ("Codes will be paused in: 13d 20h"), how many dynamic codes are used ("1/250") and *Add payment*. The end date is already on Welcome and in the Upgrade pop-up. The flow boxes now match the wireframe: *Codes used* `8193:24124` and *Add payment* `8193:24178` (fixed 2026-10-05) |
| 25 | ❌ | The Sidebar has three variants: trial, subscribed and no subscription (`8193:24241`, `8193:24243`). §12.2 has four more account states. Each needs its own banner, and maybe a locked menu:<br>1. **Waiting for email confirmation** (after *Edit Email*, QR-U-36 AC2): banner "Confirm your new email: [address]" with *Resend*. The old email stays in use until confirmed. (At sign-up this state never reaches the Sidebar: the *Confirm your email* step blocks entry, DS-07.)<br>2. **Canceled, until period end** (QR-U-34 AC3): codes keep working; banner "Your plan ends on [date]. No further charge." with *Choose a plan*. Account menu as for subscribed.<br>3. **Payment failed, retrying** (QR-U-35): codes keep working; banner "Payment failed. Update your card by [date] or your codes pause." with *Update card* → *Manage Billing*. Success → back to subscribed; retry period ends → no active subscription.<br>4. **Suspended by an admin** (§12.2, QR-A): codes are disabled; banner "Your account is suspended" with *Contact support*. The SRS doesn't say what else stays open; a sensible minimum is read-only codes and stats, Log out and Contact support |
| 26 | ⚠️ | *Navigation* `8193:24132` now spells out All QR codes, folders, Archive, Analytics and Advanced. What's locked in each account state still isn't shown |
| 27 | ⚠️ | Creating a folder is drawn (`8193:24146` → name → pick codes → Create). Opening, renaming and deleting aren't. The *Create Folder pop-up* window `8193:24014` has no link |
| 28 | ❌ | The subscribed account menu (`8193:24139`) has no Upgrade item |
| 84 | ⚠️ | The row in the wireframe `8193:16712` shows status, name, short link, type, tag, date and scans. Still missing: **static or dynamic** and the *not healthy* label |
| 85 | ✅ | The wireframe has Type, Status, Tag and Sort by. Folders are in the Sidebar. Small gap: the sort options (newest, name, most scanned) aren't shown |
| 86 | ❌ | No empty state |
| 87 | ❌ | Pause and Activate are offered for every code; no static branch |

**QR code creation**

| # | Status | Now |
| --- | --- | --- |
| 29 | ⚠️ | The wireframe `8193:17468` is close to the V1 list. Target list (QR-U-07):<br>**Dynamic:** Website URL, PDF / File, Links Page, vCard, App Store Link, Restaurant Menu (PDF), Google Reviews.<br>**Static:** Website URL, vCard, Email, SMS, Phone call, Plain text, Wi-Fi.<br>Changes to the wireframe: take **Wi-Fi, Plain text, Email, SMS and Phone call out of dynamic *More Types*** (in V1 they're static only; dynamic versions are "not V1 until decided"). **Add Phone call to Static.** Rename "Linkpage" to "Links Page". *More Types* then holds only Google Reviews, so it can go into the main grid. Then copy the same list into the type note `8193:23287`, which still has "Mobile App", "Contact" and the old columns (FD-01, FD-03). Q-W6 (vCard vs Contact): the wireframe already uses vCard only, so Q-W6 can close as "vCard only" |
| 31 | ✅ | Note `8193:23354` lists all five formats once: PNG, SVG, PDF, JPG, EPS |
| 32 | ⏸ Deferred (Oleg, 2026-10-05) | Creation, Edit and Bulk all have *Scannability detector* → *Fix scannability* → *Good scannability status* now (`8256:8899`, `8256:8921`, `8256:8877`, `8241:8171`). The *not healthy* label on the Dashboard isn't needed in Figma for now. It's still required for the build (QR-U-12, DS-05: a code saved or downloaded after a failed check carries the label), so it comes back when the Dashboard row is designed |
| 33 | ❌ | Nothing is drawn for **time-based redirects** (QR-U-43, V1). *Schedule publication* (a start date) is not MVP. What to draw instead:<br>• In Publication Settings (Creation Step 4 `8193:23229`/`23230` and Edit `8193:22207`), a **Schedule** item for dynamic Website URL, App Store Link and hosted-page codes only.<br>• Schedule = a list of **time windows**. Each window has days of the week, a start and end time, and its own destination. *Add window* / remove.<br>• A **default destination** used outside every window, plus the time zone (the account's by default, editable).<br>• Error on save when windows overlap, naming which ones.<br>• A note that a paused or archived code ignores the schedule. Example: a restaurant with one code that opens the breakfast, lunch and dinner menus |
| 34 | ⚠️ | Gone from Creation and Bulk. Still in the Edit note `8193:22234` ("Set up Password") |
| 35 | ⚠️ | The static list in the wireframe has vCard only and no Links Page ✓. The note still has static Contact. The Landing tabs `8193:15352` offer both *vCard* and *Contact* (Q-W6) |
| 36 | ✅ | The wireframe explains static codes: "works without QR.CA, can't be edited after printing, no scan statistics" |
| 37 | ❌ | Step 2 is still one *Enter content* box `8193:23252`, with no wireframe |
| 38 | ❌ | Same as FD-09 |
| 39 | ✅ | The Dashboard checks the limit before Creation `8193:23902`, and owners without a subscription get the Default Upgrade pop-up |
| 40 | ✅ | Save → toast → Dashboard (`8193:23374`, `23377`) |
| 41 | ❌ | No preview, loading or save-error state in Creation |
| 42 | ✅ Fixed (2026-10-05) | Numbered by branch: without a micro-landing, Step 3 QR Customization → Step 4 Publication `8193:23229`; with a micro-landing, Step 3 Micro-Landing → Step 4 QR Customization → **Step 5** Publication `8193:23230` |
| 43 | ❌ | Cancel `8193:23238` is still only offered from the entry window |
| 44 | ❌ | No error-correction level and no default name |

**Bulk · Edit**

| # | Status | Now |
| --- | --- | --- |
| 45 | ❌ | Step 3 `8193:22070` is still only Confirm / Upload new CSV |
| 46 | ✅ Fixed (2026-10-05) | *Upload CSV* → *Did user hit limit of number of QRs?* `8256:8834` → No: Step 3; Yes: *User has Free Trial?* → trial / higher-tier Upgrade pop-up. The old check at the end was removed; *Success Toast* now goes straight to the Dashboard |
| 47 | ❌ | Note `8193:22086` and wireframe `8193:17655`: dynamic Email, SMS and Phone call; no Wi-Fi or vCard; static list without vCard and Wi-Fi |
| 48 | ❌ | No cancel, CSV error or progress |
| 88 | ✅ Fixed (2026-10-05) | Bulk *Scannability detector* `8256:8877` → *Fix scannability* `8256:8879` → *Good scannability status* `8256:8878`, with notes. Small gap: the design is shared, but content length differs per row (data density), so a long URL can fail on one row only. A per-row result on Step 3 would cover it. Not needed for the happy path |
| 89 | ❌ | The download still reads as one code |
| 49 | ❌ | Save `8193:22214` → generic *Success State* `8193:22208` → Dashboard. QR-U-23 needs **two outcomes**, so replace *Success State* with a decision "Did the look change?":<br>• **No (content or settings only):** a pop-up "Saved. No need to re-download: your printed code already opens the new content." → Dashboard.<br>• **Yes (QR Customization changed):** *Download QR pop-up* with the new file and a warning: "Codes you've already printed keep the old look, but they still work." → Download / Later → Dashboard |
| 50 | ❌ | *Micro-Landing Customization* `8193:22209` is still shown for every type |
| 51 | ⚠️ | Scannability is fixed: *Fix scannability* `8241:8171` → *Good scannability status* `8241:8178`, note `8241:8185`, and the wireframe shows Good / Warning / Poor. **Still missing: file replace** for PDF / File and Restaurant Menu codes (QR-U-09, QR-U-20 AC2). Add *Replace file* next to *Edit content* `8193:22215` → upload a new PDF → states for uploading, wrong type and too large → Save. Scanners get the new file on the next scan, and the printed code doesn't change. The file size limit is still open (SRS-Q-11) |
| 83 | ❌ | One Edit flow for every code, with no static branch |

**Analytics · Plans & Billing**

| # | Status | Now |
| --- | --- | --- |
| 56 | ❌ | Filters → *System updates data* only (`8193:22908`, `22316`) |
| 57 | ❌ | Only Pause, no Activate; Close `8193:22405`/`22407` → Dashboard; no download format |
| 58 | ❌ | Note `8193:22880` still says "Org Analytics" |
| 59 | ❌ | Two Plans & Billing states are missing:<br>• **Canceled, until period end** (QR-U-34 AC3): instead of *Active Plan Details*, "Canceled. Your plan ends on [date]. No further charge." Codes work until that date. Buttons: *Choose a plan* and *Orders History*. After the date it becomes the no-subscription branch `8193:22444`.<br>• **Payment failed, retrying** (QR-U-35): a red banner "Your payment on [date] failed. We'll retry until [date]." with *Update card* → *Manage Billing* → success (back to normal) or error. If the retry period ends unpaid → no subscription. The owner also gets an email and the Sidebar banner (#25). The retry length is TBD |
| 60 | ❌ | Trial note `8193:22505` still lists Auto renewal and Next Invoice |
| 61 | ⏸ Deferred: waiting for the client's plans and prices (SRS-Q-08), like #2 | *Available Plans* (`8193:22466`, `22467`, `22468`) is still a single box. What it should show (QR-U-33 AC1): **three paid tiers** side by side (B-2), each with a name, a **price in CAD**, a monthly / yearly switch, what's included (code limit, API yes/no, etc.) and "+ GST / HST / QST by province". The client's proposed ladder (C-1.2): $20 / month or $120 / year · about $180 / year · $50 / month. Names and limits are still open (SRS-Q-08), so placeholders are fine, as in #2. See #93 for the yearly-discount conflict |
| 62 | ❌ | Downgrade still uses the same card path, with no message |
| 63 | ⚠️ | Fixed: *Download all receipts* `8241:8459` and *Download receipt* `8241:8466` → toast, and the billing address in the wireframe `8196:32753`. **Still missing:** *Manage Billing* (`8193:22502`, `8193:22501`) goes to the Stripe ellipse and never comes back. QR-U-33 AC4: the owner updates the **card and billing address** → success toast ("Payment details updated") or error ("Card declined, try another card") → back to Plans & Billing |
| 64 | ✅ | Trial *Select Plan* → *Stripe Payment* `8193:22626` now links to the shared payment flow with success and error (once the link is retargeted) |
| 65 | ❌ | *Select Reason* `8193:22488` still comes before Cancel; *Canceled State* `8193:22478` has no end date. The wireframe copy "Your QR codes will lose support" doesn't say the end date or "no further charge" (QR-U-34 AC3) |
| 66 | ❌ | Note `8193:22509` "discounts or anything"; the skip button is "Cancel" `8193:22494`; *Keep Plan* `8193:22490` dead-ends |
| 67 | ❌ | Stripe everywhere, now also in the wireframes ("Secure Payment from Stripe"). *To QR codes* → *Plans & Billing* windows (`8193:22587`–`22590`) |

**Account Settings · APIs · GTM · Archive**

| # | Status | Now |
| --- | --- | --- |
| 68 | ❌ | The API wireframe `8193:21761` shows one masked key with Copy, a rate limit and monthly usage. QR-U-40 AC1 needs **key management**:<br>• *Create API key* → name it (e.g. "Shopify store") → the full key is shown **once**, with Copy and "You won't see this key again".<br>• A list of keys: name, masked key, created, last used, *Revoke* → confirmation → toast.<br>• **Account ID** instead of Organization ID (#69).<br>• The plan's usage limit (already there) |
| 69 | ✅ Fixed (2026-10-05) | "Account ID" in both the wireframe `8193:21761` and the box `8193:23114` |
| 70 | ❌ | No error branches. Add an "Is the data correct?" decision after Save, as in Log in (#8):<br>• **Edit Email** (`8193:22688`): wrong current password · invalid email · "This email is already in use".<br>• **Edit Password** (`8193:22696`): wrong current password · new password breaks the rules · the two new passwords don't match.<br>The password rules themselves are still open (SRS-Q-10), so a placeholder like "At least 8 characters" is fine |
| 71 | ❌ | Password Save `8193:22695` → toast only. QR-U-36 needs:<br>• **AC3:** after saving, other sessions are signed out. Say so in the toast: "Password changed. You've been signed out on other devices."<br>• **AC4:** owners who signed up with Google have no password. Add a decision "Signed up with Google?" before *Edit Password* `8193:22696` → Yes: either "You sign in with Google" (nothing to change) or *Set a password*. Which of the two is TBD in the SRS |
| 72 | ✅ Fixed (2026-10-05) | Note `8256:8666` on the delete pop-up, and the wireframe `8193:19112` now reads: "Deleting your account removes all your QR codes and data. This can't be undone. Printed codes will show a 'no longer available' page, and your subscription will be cancelled." (QR-U-37 AC1–2). The typo "wil" is gone with the old copy |
| 73 | ⚠️ | The wireframe `8193:21625` shows the expected format (GTM-XXXXXXX) ✓. There's still no invalid-ID error |
| 74 | ✅ Fixed (2026-10-05) | Account ID *Copy* `8193:23120` → toast (`8256:8662`) |
| 75 | ⚠️ Split: first state ⏸ deferred (SRS-Q-08), second ❌ open | The APIs screen needs two more states (QR-U-40):<br>• ⏸ **Plan without API access:** the screen is locked, with "The API is included in [plan]" and *Upgrade*. Which plans include the API is still open (SRS-Q-08), so use a placeholder.<br>• ❌ **Usage limit reached:** the monthly usage bar is full, with "Limit reached. Resets on [date]." and *Upgrade*. API calls are refused until then.<br>Not UI, for reference: the API also refuses new codes over the plan's code limit, the same as the app (DS-09) |
| 76 | ✅ Fixed (2026-10-05) | The toast is now "Success Toast asks to confirm email" `8193:22720`, next to the confirmation banner, so it no longer says the email has changed |
| 77 | ✅ Closed (Oleg, 2026-10-05) | Added *Filters & Sorting* `8256:8529` and *Search* `8256:8532` → *Listing is updated* → *Clear* to Archive, so owners can filter by type (static / dynamic). Note `8193:22925` now says archived codes become paused "except static codes" |
| 78 | ✔️ Accepted (Oleg, 2026-10-05) | The flow shows the happy path; edge cases are left out to keep it readable. **Keep for the build:** duplicating from Archive is subject to the same code limit as everywhere (DS-09); where the copy lands is still unspecified (QR-U-25) |
| 79 | ✅ Closed (2026-10-05) | **Edit locked without a subscription:** ✔️ accepted (Oleg). The SRS doesn't specify it, so it's sent as [DR-02](#requests-to-change-the-docs). **Download:** ✅ fixed per A-13. No subscription: *Download* `8193:22994` → *QR is being downloaded* `8256:8594` → note `8256:8626` "Scanners see a 'not available' page until your plan is active." With a subscription: `8193:23081` → note `8256:8632` "…until you activate it" |
| 80 | ✅ Fixed (Oleg, 2026-10-05) | The flow is now *Activate* → confirmation → *Select Folder* `8193:23055` → *Activate* `8193:23054` → toast. The plan check comes from *User has subscription or Free Trial?* `8193:23083`. The default folder (All QR codes) isn't visible in the flow boxes; it should be pre-selected in the pop-up design |
| 81 | ✅ Fixed | Close now returns to *Archive* (windows `8256:8493`, `8256:8507`) |
| 82 | ⏸ Deferred (Oleg, 2026-10-05) | Empty states aren't drawn in the user flow; they're handled at the design stage, like #52 and #55 |

### New findings

| # | Where (node) | Figma shows | Docs say | Sev |
| --- | --- | --- | --- | --- |
| 91 ✅ | Sign up wireframe `8193:16116` vs flow `8193:24567` | The wireframe has "By continuing you agree to our Terms…", with **no checkbox**. The flow has a required checkbox | Sign-up is refused while it's unticked (QR-U-03 AC5, #7) | Med |
| 92 | Creation micro-landing branch | ✅ **Fixed 2026-10-05.** *Next Step* `8193:23246` → *Did QR pass scannability check?* `8256:8962` → Yes: Step 5 `8193:23230`; No: *Modal: do you want to continue?* → *Continue anyway* → Step 5, or *Cancel* → Step 4 QR Customization. Both branches now behave the same | Every design is checked (QR-U-12) | Med |
| 93 | Upgrade wireframes `8193:20444`, `8193:19773` vs Plans & Billing `8196:32753` | Yearly is "Save 50%, $120 / year" in the pop-ups but "Switch to yearly −20%" in Plans & Billing | Prices are still open (SRS-Q-08), but one product should show one number | Med |
| 94 | Welcome `8193:16167`, Upgrade `8193:20444`, Sidebar `8193:27984`, rows | The trial ends "October 15" on Welcome and "October 14" in the Upgrade pop-up; the Sidebar says 13d 20h and the pop-up says 12 days left | One mock date across screens | Low |
| 95 | Welcome sticky `8193:24448` | "The user must provide their payment info… He will be charged in 14 days" | The wireframe next to it says "Optional. Your trial doesn't need a card." Update the sticky to match (QR-U-06) | Low |
| 96 | Landing *Track your scans toggle* `8241:8124`, wireframe `8193:15352` | The toggle is labelled **Premium** and opens *Unlock Tracking pop-up* `8241:8127`, which isn't drawn and has no link. The download note says "SVG, PNG, JPG" | Tracking is part of the free trial, not a paid tier (QR-U-06, SRS-Q-07). Formats are PNG, JPG, SVG, EPS and PDF (A-4) | Low |
| 97 | Step 1 `8193:17468`, Bulk `8193:17655` | *Phone call*: "Shows a short message" (copied from Plain text) | It should say something like "Calls a phone number" | Low |
| 98 | Plans & Billing wireframe `8196:32753` | The frame is named "Account Settings" | Rename it "Plans & Billing" | Low |
| 99 | Account Settings wireframe `8193:19112` | "Second Name" | "Last Name", as in note `8193:22706` | Low |

### New typos

"Trail Ended" and "Now now" (`8193:19773`) · "Conirm New Password" (`8193:22693`) · "wil" (`8193:19112`) · "untill" (`8196:32753`) · "Chose a Type" and "IOS" (`8193:17468`, `8193:17655`) · "wesbite" in the URL placeholder (`8193:15352`, `8193:15700`, `8193:17991`). The cosmetic duplicate line in the Upgrade note `8193:22804` ("Unlocked for 14 days" twice) is still there.

**Second pass:** all fixed except "Chose a Type" (`8193:17468`) and "IOS" (`8193:17468`, `8193:17655`).

### Second pass (2026-10-05, later the same day)

Re-checked after the designer's edits, read-only through `use_figma`: every hyperlink in the section, the text of every node named in the open items, every wireframe named there, and every node added since round 3 (IDs `8241:`, `8256:`).

**Links.** 85 links still open the old User Flow (was 91). Fixed: Bulk `8193:22150`, Archive `8193:22947`, `22957`, `22967`, `22977`, `23095`. These now open the matching **wireframe** (e.g. Dashboard `8193:16712`) rather than the flow section. That works too. Deleted: Archive `8193:22937`, Bulk `8193:22162`. New links that still open the old flow: Bulk `8256:8846` (Upgrade pop-up) and Upgrade `8256:8734` (Plans & Billing). The two new Archive windows `8256:8493` and `8256:8507` link correctly.

**Fixed:** #91 (the Sign up wireframe now has a checkbox, `8256:9088`) · FD-05 (found, see the table above) · typos "Trail Ended", "Now now", "Conirm", "untill", "wesbite" (all three), "Chose a Type" in Bulk `8193:17655`, and the duplicate "Unlocked for 14 days" line in `8193:22804`.

**Partly:** FD-06: the type note `8193:23287` now has a "Time-based redirects" label. Nothing is drawn yet, and *Schedule publication* is still in all four notes.

**Still open, unchanged:** every other open item. The Sidebar, Account Settings, APIs, GTM and both Analytics sections have no new nodes apart from one note and one connector, and the texts and arrows named in the open items are the same.

**New work, no issues found:**
- **Scannability check** in Creation (`8256:8962` → *Modal: do you want to continue?* `8256:8950` → *Continue anyway* / *Cancel*), Edit (`8241:8171`, `8241:8178`) and Bulk (`8256:8877`–`8879`), with *Fix scannability*. The Edit wireframe shows Good / Poor / Warning. This matches QR-U-12 (pass, warning or fail, a one-click fix, never block the download; DS-05).
- Bulk: a plan-limit check, "Did user hit limit of number of QRs?" `8256:8834` → trial or higher-plan Upgrade pop-up.
- Upgrade pop-up: a "Does user have a subscription?" branch `8256:8699` → *Available Plans* → *Select Plan* → payment → success or error pop-up.
- Plans & Billing: *Download receipt*, *Download all receipts* and a success toast (`8241:8459`–`8473`).
- Archive: filters, sorting, search, clear and download (`8256:8529`–`8594`), plus notes on what scanners see.
- Account Settings: a delete-account note `8256:8666`.

**New findings**

| # | Where | Problem | Fix | Sev |
| --- | --- | --- | --- | --- |
| 100 | Log in wireframe `8193:15700`, new `8256:9094` | Log in now has the "I agree with Terms and Privacy Policy" checkbox, probably copied from Sign up | Terms are accepted once, at sign-up (QR-U-03 AC5). Remove it from Log in | Low |
| 101 | Upgrade pop-up, new *Stripe Payment* box `8256:8718` | Another payment step labelled Stripe | Billing runs on Recurly (F-43, C-1). Add to #67 | Low |

### Designer's answers (2026-10-05)

- **#34 ✅** "Set up Password" is gone from the Edit note `8193:22234`.
- **#37 accepted:** the flow doesn't need every per-type field and corner case. Those come at the design stage.
- **#41 ✅** Live preview added (`8256:11300`, `11307`, `11314`).
- **#43 accepted:** Cancel is an action that's always available, so it's drawn once, from the decision after Step 1.
- **#44 ✅** Default name added to all four notes ("Name QR (or leave default)"). The error-correction level is covered by the scannability detector, which already checks effective error correction (QR-U-12). No separate control is needed, as A-7 rules out a manual selector. At the design stage, the detector's details should name the level so the owner can see it (A-7).
- **#41** accepted: like #37, loading and save-error states come at the design stage.
- **#35** changed: Oleg keeps both vCard and Contact ([0003](../decisions/0003-static-contact-and-vcard-both-kept.md), DR-04). Left to do: add static Contact to the Step 1 wireframe `8193:17468`.

### Designer's answers, round 2 (2026-10-05)

Checked in Figma after each answer.

- **#45 ✅** A note on Bulk Step 3 `8256:11337` lists the valid count, invalid rows with reasons, the per-upload cap and the plan limit.
- **#48** accepted: Bulk corner cases come at the design stage.
- **#89 ✅** "Archive with QRs is being downloaded" `8193:22115`.
- **#56 ✅** "System updates data on the page" (`8193:22908`, `22316`). The other states are accepted for the design stage.
- **#57 ✅** Close returns to Particular QR Analytics (`8256:11350`), and there's a *Select Format* step `8256:11356`.
- **#58 ✅** "Account Analytics" `8193:22880`.
- **#60 ✅** The trial note `8193:22505` now says days left and end date.
- **#63 ✅** Manage Billing → Recurly → back to *Plans & Billing (Free Trial)* (`8256:11375`, `8256:11393`).
- **#65 ✅** "Select Reason (optional)" `8193:22488`. The wireframe says "…on Oct 14 2026. No further charges."
- **#67 ✅** and **#101 ✅** Every Stripe label is now Recurly, including the wireframes `8193:20347` and `8193:20820`. *To QR codes* now leads to the Dashboard (`8256:11410`, `8256:11421`).
- **#47 ⚠️** The Bulk note `8193:22086` was updated but is still wrong: dynamic Email, Call, SMS, vCard and Wi-fi, and "Mobile App". The wireframe `8193:17655` hasn't changed.
- **#66 ⚠️** The note is fixed. The skip button still says "Cancel", and *Keep Plan* `8193:22490` still has no arrow out.
- **#66 ✅** (later the same day) *Cancel anyway* `8193:22494`; *Keep Plan* → *Plans & Billing (active subscription)* `8256:11439`.
- **#47 ⚠️** (later the same day) The note `8193:22086` is right: static Website, vCard, Contact, Email, SMS, Plain Text, Wi-fi, Phone Call; dynamic Website, App Store Link. The wireframe `8193:17655` dynamic list is right, but its static list has no vCard or Wi-Fi.
- **#47 ✅** The Bulk wireframe `8193:17655` static list now also has Website URL, vCard and Wi-Fi.
- **#70, #73** accepted: the error branches come at the design stage.
- **#75** parked as a whole. The SRS asks the APIs screen to show "the usage limit of the plan" and refuses calls above the rate limit (QR-U-40), but it doesn't define a monthly quota, and the numbers wait on SRS-Q-08. The wireframe `8193:21761` already shows *Rate limit: X requests/second* and *Monthly usage limit: YYYY requests*, which is enough for now. The "limit reached" state comes back when the limits are known.
- **#93 ✅** "Save 20%" in both Upgrade pop-ups and "−20%" in Plans & Billing. The mock arithmetic still doesn't add up ($20/month with 20% off is $192/year, but $120 is shown). That's fine while prices are open (SRS-Q-08).
- **#94 ✅** October 14 everywhere. The countdown still differs ("12 days left" in the pop-up vs "13d 20h" in the Sidebar); that's cosmetic.
- **#95** accepted: it's a designer's note, not product copy.
- **#96 ⚠️** "Premium" accepted: the free trial is a trial of the paid plan. The Landing download note still says "SVG, PNG, JPG" (A-4: PNG, JPG, SVG, EPS, PDF).
- **#97 ✅** "Calls a phone number" in Step 1 and Bulk. **#98 ✅** frame renamed "Plans & Billing". **#99 ✅** "Last Name". **#100 ✅** the Terms checkbox is gone from Log in.
- **Typos:** "Chose a Type" ✅. "IOS" is still in `8193:17468` and `8193:17655`.
- **#96 ⚠️** The Landing `8193:15696` now says "SVG, PNG, JPG, EPS, PDF". The copy of the Landing behind Log in `8193:16044` still says "SVG, PNG, JPG".
- **Typos:** "IOS" ✅. No typos left.
- **#96 ✅** Log in `8193:16044` now also says "SVG, PNG, JPG, EPS, PDF". All round-3 findings (#91–101) are closed.
- **New:** four link windows without a link: `8256:11367`, `8256:11385`, `8256:11402`, `8256:11413`.

### Links fixed (2026-10-05)

At Oleg's request, Claude wrote to Figma through the MCP (`use_figma`). It changed only the link targets, no text or layout. 84 link boxes now open their flow section on the Wireflows page instead of the old User Flow, or instead of a wireframe for the 6 Oleg had already fixed and the 2 new Archive windows. Afterwards, every link in the section points inside Wireflows. The undo point is the file's version history from before 2026-10-05.

Then 7 boxes whose links had been removed after the first check were relinked to their sections: `8193:24303`, `24313` → Dashboard, `24281`, `24426` → Sign up, `24291` → Password Restoration, `24415` → Log in, `22443` → Plans & Billing. Still without a link: `8241:8127`, `8193:24014`, `8256:11367`, `11385`, `11402` and `11413`. `8193:22540` is now a *Recurly* flow step, not a link box. `8193:22327` and `22576` were deleted.

### Coverage

Wireframes exist for: Landing, Sign up, Log in, Password recovery (first screen only), Welcome (both branches), Sidebar, Dashboard, Archive, Creation Step 1, Bulk Step 1, Edit (Content tab), both Analytics screens, both Upgrade pop-ups, Plans & Billing (active subscription), Account Settings, APIs and GTM. Every other step is still flow boxes only. Wireframes were read as text, not checked visually.

## Status of known FD items

| FD | Status |
| --- | --- |
| FD-01 Type list wider than V1 | Still present |
| FD-02 Review type missing | Still present |
| FD-03 "Mobile App" naming | Still present (also in the Bulk type note `8029:7424`) |
| FD-04 "Conatct" typo | ✅ Fixed 2026-10-02 (`8013:2892` reads "Contact") |
| FD-05 `8079:3007` missing | ✅ Resolved 2026-10-05: it's the *Basic Assumptions* frame on page *Meta Flow (WIP)* |
| FD-06 Only *Schedule publication* | Still present (Creation, Bulk and Edit) |
| FD-07 GTM screen lacks GA4 / Meta Pixel | Still present. Confirmed on the screen on 2026-10-02: `8045:3399` has GTM only. The Sidebar has separate GA4 and Meta Pixel items and no GTM item (#23) |
| FD-08 Webhooks screen gone | **Partly fixed:** the screen is gone, but the sidebar item `8079:3490` and its link `8079:3399` remain (#22) |
| FD-09 Smart Rules / Geolocation note | Still present |

## Re-check of #1–16 after the designer's fixes (2026-10-02)

Checked in Figma after the fixes, then reviewed with Oleg (designer) the same day.

| # | Status | Now / decision |
|---|---|---|
| 1 | ✔️ Accepted | **Oleg:** the card is optional, but codes stop working after the trial without a payment method. `8027:7124` says this. End-of-trial behaviour is still open with the client (SRS-Q-01) |
| 2 | ⏸ Deferred | **Oleg:** there's no plan information yet, so Figma shows a single "Premium" until it arrives (SRS-Q-08) |
| 3 | ✅ Fixed | "Not now" / "Keep Free Trial" |
| 4 | ✅ Fixed | *Add Payment details* `8189:3731` in the No branch |
| 5 | ✅ Fixed | The No-branch note now covers the end date and what happens to codes |
| 6 | ✅ Fixed | Added an "email is new?" check with an already-registered error, a "link expired?" check, and *Resend link* (60s) |
| 7 | ✔️ Accepted | **Oleg:** the checkbox is a step in the sequence, so it must be ticked before *Sign up* |
| 8 | ✅ Fixed | Added "Is provided data correct?" → Error State |
| 9 | ⏸ Deferred | **Oleg:** too detailed for this stage. Back to Log in, Resend OTP and the success step were added |
| 10 | ✔️ Accepted | **Oleg:** implied by the sequence of steps |
| 11 | ✔️ Accepted | **Oleg:** "14 days" in `8053:2194` is a placeholder for a counter that goes down each day, so it shows the days left (QR-U-32 AC2). Cosmetic: the note now has the line twice and runs past its frame |
| 12 | ✅ Fixed | Welcome Success state → QR codes (Dashboard). Log in with Google → Dashboard |
| 13 | ✅ Fixed | "Enter App" → the decision |
| 14 | ✔️ Accepted | **Oleg:** the confirm-password step stays |
| 15 | ✔️ Accepted | **Oleg:** marketing copy. Whether there's a free plan is still open (SRS-Q-07) |
| 16 | ✔️ Closed | Could Have, not required |

New finding from the re-check:
- **#90 (Low):** the Welcome "Yes" branch offered two payment routes. ✅ **Fixed:** *Provide payment details* → Plans & Billing has been removed.

Typos still present: "Goolge" (`8055:3390`), "Confirmation Succes" (`8139:14143`). New: "Avaliable in 60s" (`8189:3779`).

## Review round 2 with Oleg (2026-10-02)

| # | Status | Now / decision |
|---|---|---|
| 17 | ✅ Fixed | Note `8070:2861`: "There are two statuses of QR codes: Active … Paused …" |
| 29 | ⚠️ | The target V1 list and the exact wireframe changes are in Round 3, #29 |
| 30 | ✅ Fixed | Micro-landing note `8014:3615`: vCard and Links Page only |
| 31 | ✅ Fixed | `8134:8958`: PNG, SVG, PDF, JPG, EPS. Cosmetic: PDF is listed twice |
| 32 | ⚠️ Mostly | Added "Did QR pass scannability check?" `8189:3882` → "do you want to continue?" → *Continue anyway* / *Cancel*. Still missing: the warn level, the one-click fix and the *not healthy* label. Typo: "sacannability" |
| 33 | ❌ | What to draw for time-based redirects is in Round 3, #33 |
| 34 | ⚠️ Partly | Removed from Creation and Bulk. Still in the Edit note `8045:2184` ("Set up Password") |
| 49, 51 | ❌ | The two save outcomes and file replace are in Round 3, #49 and #51 |
| 52, 55 | ⏸ Deferred | **Oleg:** handled at the design stage (Mockups) |
| 53 | ✅ Fixed | Comparison Period removed from both analytics sections |
| 54 | ✅ Fixed | Export flow removed from both analytics sections |
| 59, 61, 63 | ❌ | The missing billing states, plan cards and Manage Billing results are in Round 3, #59, #61 and #63 |
| 68, 70, 71, 75 | ❌ | Key management, error branches, sign-out and API states are in Round 3, #68, #70, #71 and #75 |

## Landing · Sign up · Welcome · Log in · Password restoration · Upgrade pop-up

| # | Where (node) | Figma shows | Docs say | Sev |
|---|---|---|---|---|
| 1 | Welcome sticky `8027:7124` | "To prevent forced pausing the user must provide payment info. He will be charged in N days." | The card is optional. There's no automatic charge without a card (QR-U-06, QR-U-31, F-31, C-6, FL-01 step 6) | High |
| 2 | Upgrade pop-up `8053:2117` | Card details → *Unlock Premium* → payment. There's no plan choice and only one "Premium" tier is implied | Choose a plan → card → confirm. There are three paid tiers (FL-09 step 4, F-35, SRS-Q-08) | High |
| 3 | Upgrade pop-up `8053:2284` | "Stay Free" button | "Not now". There is no free plan; it's trial → paid (QR-U-31, A-14, SRS-Q-07) | Med |
| 4 | Welcome, "No" branch `8027:7202` | No *Provide payment details* option | Both pop-ups offer optional payment details (FL-01 step 6, QR-U-06) | Med |
| 5 | Welcome `8027:7141`, `8027:7142` | "You have N days trial" only | Must state 14 days, the end date, what's included and what happens to codes afterwards (QR-U-06 AC3) | Med |
| 6 | Sign up `8139:14102` | The only resend path is via *Change email*. No expired or used link state, and no "email already registered" state | Resend with a cooldown, *Change email*, a new link when expired, and the already-registered case (QR-U-03 AC2/3/6, DS-07) | Med |
| 7 | Sign up `8013:2173` | The Terms checkbox only links to the Terms page. It isn't required and has no error | Sign-up is refused while it's unticked (QR-U-03 AC5) | Med |
| 8 | Log in `8055:3363` | Happy path only | A generic error, throttling or lock-out, and an "email not confirmed" branch (QR-U-04 AC2–3, §12.2, §12.3) | Med |
| 9 | Password restoration `8067:2887` | No wrong or expired code state and no attempt limit. *Back to Log in* is missing after the code step, and there's no success message | QR-U-05 AC2, AC4, AC5, AC6 (proposed 10 min validity, 5 attempts) | Med |
| 10 | Landing `8079:4781` | No disabled Download state | Download is disabled until content is entered (QR-U-01 AC2) | Med |
| 11 | Upgrade note `8053:2194` | "Unlocked for 14 days" (fixed number) | Show the days left (QR-U-32 AC2) | Low |
| 12 | Welcome `8042:1313`; Log in Google `8055:3395` | Dead ends with no route to the dashboard | FL-01 end, FL-02 step 2 | Low |
| 13 | Sign up `8139:14174` | "Create your QR code" appears before the "made a code on landing?" decision | Users who already made a code get *Download your QR* (QR-U-06 AC1–2) | Low |
| 14 | Sign up `8139:14088` | Confirm-password field | Not specified; password rules are still open (QR-U-03, SRS-Q-10) | Low |
| 15 | Landing hero `8027:7136` | "Create your QR Code **for Free**" | No free plan is confirmed (SRS-Q-07) | Low |
| 16 | Welcome | No optional industry question | Could Have (QR-U-06) | Low |

## Sidebar · Dashboard

| # | Where (node) | Figma shows | Docs say | Sev |
|---|---|---|---|---|
| 17 | Dashboard note `8070:2860` | "Three statuses: Active, Paused, Archived" | **Two** statuses, Active and Paused. Archive is a folder (QR-U-27, DS-02, §12.2) | High |
| 18 | Dashboard `8070:2860`, Welcome `8027:7124`, Sidebar `8079:4500` | "All QRs become paused after the trial" is stated as if it were decided | End-of-trial behaviour is still open (SRS-Q-01). Static codes keep working regardless (§12.2) | Med |
| 19 | Dashboard `8085:6711` | Hitting the limit opens "Upgrade pop-up from trial", even for subscribed owners | The pop-up version depends on the account state (QR-U-32) | Med |
| 20 | Dashboard `8013:3334` → Bulk | Bulk creation skips the limit check | The same limit applies everywhere, plus a per-upload cap (DS-09, FL-04 step 3) | Med |
| ~~21~~ | Dashboard `8013:3369`, `8045:1918`, `8079:4932` | **Withdrawn 2026-10-02.** These are the "Scans number" labels on a row, not actions. Every row action has an outcome | — | — |
| 22 | Sidebar `8079:3490` → `8079:3399` | The Webhooks item is still in the sidebar | Post-MVP (F-48). FD-08 is only partly fixed | Med |
| 23 | Sidebar `8079:3491`, `8079:3492` | Separate GA4 and Meta Pixel screens, and no GTM entry | GTM, GA4 and Meta Pixel on one screen (QR-U-41, A-9). Adds to FD-07 | Med |
| 24 | Sidebar trial banner `8013:2242` | Shows QR code limits and Upgrade | Days left, end date, what happens to codes, Upgrade (QR-U-30, F-32) | Med |
| 25 | Sidebar `8079:3317`, `8079:3320` | Only trial, subscribed and no-subscription states | Also email not confirmed, canceled (until period end) and suspended (§12.2, DS-07) | Med |
| 26 | Sidebar `8013:2245`, `8079:4503` | Navigation is only a link stub, with nothing on what's locked in that state | Show the actions each state allows (QR-U-42, QR-U-31) | Med |
| 27 | Sidebar folder `8079:3452` | Opening, renaming and deleting a folder aren't drawn | QR-U-26, FL-07 (deleting a folder never deletes its codes) | Med |
| 28 | Sidebar `8079:3462` | The subscribed account menu has no Upgrade item | Settings, Plans & Billing, Upgrade, Log out (QR-U-42) | Low |
| 84 | Dashboard row `8013:3369`, `8045:1918`, `8079:4932` | The row shows only the scan count | Name, type (static / dynamic), status, scan count and a *not healthy* label (QR-U-22 AC1, QR-U-12) | Med |
| 85 | Filters & Sorting `8013:2224` → Clear `8067:2201` / Listing updated `8067:2188` | One box with nothing behind it | Filters by type, status, folder and tag, and sorting by newest, name and most scanned (QR-U-22 AC3–4) | Med |
| 86 | Dashboard `8045:3708` | No empty state. *(Yesterday's "Not checked" list was wrong: `8085:6755` and `8085:6762` are Sidebar links)* | An empty state that leads to *Create QR code* (QR-U-22 AC5) | Med |
| 87 | Pause `8045:1844`, decision "Is the QR code Paused" `8013:2669` | Pause and Activate are offered for every code | Pause applies only to dynamic codes (QR-U-24). Same as #83 | Med |

## QR code creation

| # | Where (node) | Figma shows | Docs say | Sev |
|---|---|---|---|---|
| 29 | Type note `8013:2866` | FD-01…04 still present. New: a dynamic "Contact" type next to vCard | V1 list (QR-U-07, A-15) | High |
| 30 | Micro-landing note `8014:3615` | Restaurant Menu, Coupon Code and Email get a micro-landing. The menu is also labelled "PDF only" in one place and "Display only" in another | Only Multi-Link and vCard have a page (QR-U-10, A-1, DS-06) | High |
| 31 | Download note `8134:8958` | PNG, SVG, PDF | PNG, **JPG**, SVG, **EPS**, PDF (A-4, QR-U-14). The other branch `8014:3453` has no format note at all | High |
| 32 | Scannability `8013:2928`, `8040:1567` | A definition note only, which leaves out logo coverage | Pass / warn / fail, a one-click fix, explicit confirmation on fail, and a "not healthy" label (QR-U-12, DS-05, F-08) | High |
| 33 | Notes `8040:1500`, `8040:1609` | FD-06 still present (only *Schedule publication*, no time windows) | QR-U-43, F-60 | High |
| 34 | Note `8040:1614` (also in Bulk `8045:2322` and Edit `8045:2184`) | "Set up Password" | Password protection is post-MVP (QR-U-13, §13 TRS-09) | Med |
| 35 | Static column `8013:2866` | Static vCard **and** static Contact, plus a static Links Page | One contact type; Links Page is still open (QR-U-07, Q-W6, F-65) | Med |
| 36 | Step 1 | Nothing explains what static means | Say it when the owner chooses: no edits, no stats (QR-U-07/08/21, F-65) | Med |
| 37 | Step 2 `8013:2853` | One generic "Enter content" box. No per-type fields, validation, malicious-link block or upload states | QR-U-08, 09, 19, 20, 21, F-46 | Med |
| 38 | Note `8040:1619` | "French support" toggle. FD-09 still present (Smart Rules, Geolocation URL) | EN and FR values in one record (QR-U-18, F-12, Q-W8) | Med |
| 39 | Creation entry | No trial, subscription or limit gate | FL-03 "Before", DS-09, BRL-13 | Med |
| 40 | Download `8045:2354`, `8045:2345` | Dead end with no save, toast or return to the dashboard | QR-U-13 | Med |
| 41 | Whole section | No live preview, loading or save-error state | QR-U-10, QR-U-11 | Med |
| 42 | `8014:3433`, `8014:3432` | Two boxes both labelled "Step 4" | Q-W11 | Low |
| 43 | Cancel `8013:2836` | Cancel only from the entry window, and Close goes back to a generic window | Cancel from any step, and Close returns to that step (QR-U-15) | Low |
| 44 | Customization / settings | No error-correction level shown and no default name | A-7, QR-U-13 | Low |

## Bulk creation · Edit QR code

| # | Where (node) | Figma shows | Docs say | Sev |
|---|---|---|---|---|
| 45 | Bulk step 3 `8102:4020` | Only Confirm or Upload new CSV | Valid count, invalid rows with reasons, how many fit the per-upload cap and plan limit, "continue with valid rows" (QR-U-17, FL-04, DS-09) | High |
| 46 | Bulk `8085:6779` | Limit check at the **end**, after creation, and a "from trial" pop-up only | Checked before anything is created, for every plan (FL-04 step 3, BRL-12) | High |
| 47 | Bulk type note `8029:7424` | Dynamic Email, Call and SMS; no Wi-Fi; "Mobile App" | QR-U-07, QR-U-17 | Med |
| 48 | Bulk | No cancel, no bad-CSV error, no background progress. The template isn't tied to the chosen type | F-11, QR-U-17 | Med |
| 88 | Bulk Scannability detector `8029:7505` | A box only, with no result for each row | Pass / warn / fail for each code (QR-U-12, F-08). Adds to #32 | Med |
| 89 | Bulk Download QR `8029:7524` → `8045:2336` "QR is being downloaded"; toast `8045:2382` | Reads as a single code. The toast doesn't give a count | All codes as one archive, and the toast states the count (QR-U-17) | Low |
| 49 | Edit Save `8013:3116` → Success State `8045:2285` → Dashboard `8052:1343` *(corrected 2026-10-02; the old row cited `8045:2223`, which isn't in the file)* | Every save ends in a generic success state. A changed look never offers the new file, and a content-only change never says "no re-download needed" | QR-U-23 AC4–5, FL-05 | Med |
| 50 | Edit `8014:3788` *(verified 2026-10-02)* | The Micro-Landing Customization block is shown for every type | Only types that have a page (A-1, QR-U-23 AC1) | Med |
| 51 | Edit `8013:3109` → `8013:3118`; `8013:3112` *(verified 2026-10-02)* | Content offers only "Edit content", with no file replace. Scannability is the definition note `8045:2292` only (same as #32). EN/FR is present as *Multi-language support* `8013:3151` | QR-U-09/20, F-08 | Med |
| 83 | Edit QR code `8013:3267` | One Edit flow for every code, with no static branch | Static codes can't be edited, since their content is in the pattern. Edit should be hidden, or limited to name and folder (QR-U-07, QR-U-21, F-65) | Med |

## Analytics · Plans & Billing

| # | Where (node) | Figma shows | Docs say | Sev |
|---|---|---|---|---|
| 52 | Per-code analytics `8045:2575` | No empty or "few scans" state | Required (QR-U-28 AC3, F-27) | High |
| 53 | Both analytics sections `8052:1367`, `8052:1455` | Comparison Period filter | Not MVP (ANL-14, F-29) | Med |
| 54 | Both analytics sections `8053:1647`, `8052:1546` | Full Export flow | Not MVP (ANL-13, F-29) | Med |
| 55 | Analytics (all codes) `8045:3155` | No empty state | FL-08 alternatives, F-27 | Med |
| 56 | `8052:1398`, `8052:1457` | No loading, no-results or error state after filtering | FL-08, QR-U-28 | Med |
| 57 | Per-code analytics | No OS widget; only Pause, no Activate; Close on a confirmation goes to the dashboard; download has no format choice or paused note | F-25, DS-02, A-13 | Low |
| 58 | Note `8052:1428` | "**Org** Analytics" | V1 has no organisations (QR-U-40) | Low |
| 59 | Plans & Billing `8086:7099`, `8053:3032` | No canceled-until-period-end or failed-payment states (already listed as not drawn) | §12.2, QR-U-35, F-37 | High |
| 60 | Trial branch `8086:7131` | Auto renewal and Next Invoice | No card means no renewal. Show days left and the end date instead (C-6, QR-U-31/32) | Med |
| 61 | Available Plans `8134:9036` | No plan names, prices, CAD, monthly / yearly or taxes | QR-U-33 AC1, F-35 | Med |
| 62 | Upgrade / Downgrade `8055:3092` | Downgrade uses the same card-payment path. No "live codes stay on" message and no confirmation step | QR-U-33, BRL-12. The README's "downgrade not drawn" note is now out of date | Med |
| 63 | Orders `8086:7133`; Manage Billing `8086:7147` | No invoice PDF, no billing address, and no success or error after payment | QR-U-33 AC4–5 | Med |
| 64 | Trial Select Plan `8134:9054` | The payment node is a dead end | Success → codes; error → *Try again* (QR-U-32 AC4) | Med |
| 65 | Cancel `8055:3142`; Canceled state `8086:7083` | The cancel reason is required, and the canceled state has no end date | The reason is optional; show the end date and "no further charge" (QR-U-34 AC1, AC3) | Med |
| 66 | Retention offer `8055:3169`; Keep Plan `8055:3147` | The offer is open-ended ("discounts or anything"), the skip button says "Cancel", and Keep Plan dead-ends | One offer with *Cancel anyway* (A-12, QR-U-34 AC2) | Low |
| 67 | All "Stripe Payment" nodes; `8055:3185` | Labelled Stripe. "To QR codes" leads to Plans & Billing | Recurly runs billing (F-43, C-1). Success should lead to the codes (QR-U-32) | Low |

## Account Settings · APIs · GTM *(checked 2026-10-02)*

| # | Where (node) | Figma shows | Docs say | Sev |
|---|---|---|---|---|
| 68 | APIs `8093:3161` → `8093:3207` | The key is only displayed with *Copy*. It can't be created, named or revoked, and nothing says it's shown once | QR-U-40 AC1 | High |
| 69 | APIs `8093:3214` | "Org ID" | Account ID. V1 has no organisations (QR-U-40 AC1). Same issue as #58 | Med |
| 70 | Edit Email `8053:2785`, Edit Password `8053:2828` | No wrong-current-password error, no "email already in use" error, and no password-rule errors | QR-U-36, QR-U-03 (password rules: SRS-Q-10) | Med |
| 71 | Edit Password `8053:2830` → `8053:2833` | Save → toast only. Nothing about signing out other sessions, and no branch for Google sign-up accounts | QR-U-36 AC3–4 | Med |
| 72 | Delete account pop-up `8053:2974` | Only says the data can't be restored | Must also say what happens to printed codes ("no longer available" page), and that the subscription is cancelled (QR-U-37 AC1–2) | Med |
| 73 | GTM `8093:3468` → `8093:3469` | Save → toast. No invalid-ID error | Refused, with the expected format shown (QR-U-41 AC3) | Med |
| 74 | APIs `8093:3218` | The Org ID *Copy* has no arrow to its toast `8093:3217` | Every action needs a result | Low |
| 75 | APIs `8045:3377` | No state for a plan without API access, or for when the usage limit is reached | Which plans include the API is still open (QR-U-40, SRS-Q-08) | Low |
| 76 | Edit Email `8053:2814`, `8053:2821` | A success toast and the confirmation banner both show | The email changes only after it's confirmed, so the toast shouldn't say it has changed (QR-U-36 AC2) | Low |

## Archive *(checked 2026-10-02)*

The row actions (Edit, Analytics, Download, Duplicate, Activate, Delete), Activate → confirm → pick a folder, and Delete → confirm → toast with *Undo* all match QR-U-27 and QR-U-25.

| # | Where (node) | Figma shows | Docs say | Sev |
|---|---|---|---|---|
| 77 | Archive note `8053:2403` | "Every QR code that being archived becomes paused." Nothing in Archive tells static and dynamic codes apart | Only dynamic codes are paused. Static codes keep working; this is still open (QR-U-27, SRS-Q-07, domain model) | Med |
| 78 | Duplicate `8053:2459` → toast `8053:2442` | Duplicating an archived code has no limit check, and it isn't shown where the copy goes | The same limit applies everywhere (DS-09). Where the copy lands isn't specified (QR-U-25) | Med |
| 79 | No-subscription branch: `8085:6873`, `8085:6877`, `8085:6881`, `8085:6882` → `8085:6816` | Edit, Download, Duplicate and Activate all open the Default Upgrade pop-up. Only Analytics and Delete work | Without a subscription the owner can still see codes and stats; only new dynamic codes are blocked. Locking Edit and Download isn't specified, so this needs a decision (QR-U-31, QR-U-32 AC3) | Low |
| 80 | Activate `8053:2460` → Select Folder `8139:14187` | No default folder, and no plan or limit check | Default: All QR codes, and the return is subject to the plan (QR-U-27 AC3) | Low |
| 81 | Close `8053:2503`; Close `8053:2501` → `8053:2408` | Closing the Activate pop-up dead-ends; closing the Delete pop-up goes to the Dashboard | Close should return to Archive (same pattern as #43, #57) | Low |
| 82 | Archive `8053:2393` | No empty state | Like the other lists (FL-07) | Low |

## Typos

**Re-checked 2026-10-02 from screenshots:** fixed: "Goolge", "Confirmation Succes", "Avaliable" (both), "Se all Plans", "tree statuses", "YourQR", "Conatct" (FD-04), "User have subscription".

Also fixed in the second pass: "sacannability" (`8189:3882`), "it's own" (`8052:1428`), "date of it's end" (`8027:7125`). **No typos left.**

## Coverage

**2026-10-01:** everything except the items below. Then the Figma desktop MCP returned "Rate limit exceeded".

**2026-10-02:** the rest, box by box from screenshots (the MCP doesn't return the text of flow boxes):
- Account Settings `8045:3122`, APIs `8045:3377`, GTM `8045:3399` and Archive `8053:2392`, in full.
- Edit `8045:2391`, in full. This corrected #49–51, which had been read from structure only.
- Dashboard: the row-action labels, filters, sort and search. #21 withdrawn.
- The remaining Bulk labels.
- Plans & Billing no-subscription labels `8055:3261` (Close) and `8055:3260` (Try again). No new findings.
- Red highlight rectangles `8055:3352` (Upgrade / Downgrade → Available Plans → Select Plan) and `8055:3351` (Discount Suggestion). They mark what #62 and #66 already cover. No new findings.
- Arrows between sections: there aren't any. Sections link through boxes named after the target screen, e.g. "QR codes (Dashboard)".

**Still a limit:** on the Dashboard, the no-subscription branch (x ≥ 4058) was compared by layout against the main branch, and only a sample of its labels was read.
