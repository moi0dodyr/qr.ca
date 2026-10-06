# Figma Wireflows: what's left to fix

**Short version of** [`figma-audit-2026-10-01.md`](figma-audit-2026-10-01.md), as of **2026-10-06**: round 3 of answers, re-targeted to SRS v2.0 and a full v2 audit (#102–#118) ([0005](../decisions/0005-adopt-srs-v2.md)). It lists only what still needs a change in Figma. Fixed, accepted and closed items are left out; the full history, with every status and reason, stays in the original.

**File:** QR.ca – Wireflows `heli5YKyvwao7H6XFJQNiY`, page **↳ Wireflows (WIP)** `8134:9062`, section **Wireflows** `8193:22054`. Every node ID here is on that page.

When you fix something, tell Claude: it checks Figma, removes the row here and marks it fixed in the original.

## 1. Links

✅ **Done on 2026-10-05.** Claude re-pointed all 84 links, and relinked 7 boxes that had lost their link (Log in `8193:24303`, `24313`, `24281`, `24291`, Landing `24415`, `24426`, Plans & Billing `22443`) through the Figma MCP, at Oleg's request. Each one now opens its **flow section** on the Wireflows page, for example *QR codes (Dashboard)* → Dashboard `8193:23387`. Boxes for a single step open that box: *Navigation* `8193:24132`, *Recurly Payment* `8193:22539` and *Checking inbox* `8193:24579`. No link in the section points outside Wireflows anymore.

Still without a link (they never had one): *Unlock Tracking pop-up* `8241:8127`, *Create Folder pop-up* `8193:24014`, and the Plans & Billing windows `8256:11367`, `8256:11385`, `8256:11402`, `8256:11413`.

## 2. Open items

✅ fixed parts are left out; each row says only what's still missing.

**Type list and notes (FD items)**

| # | Still missing |
| --- | --- |
| FD-01, FD-02, FD-03, 29 | Align the Step 1 wireframe `8193:17468` to the v2 list (*[User] - Code creation - step 1*; QR-U-07; [0005](../decisions/0005-adopt-srs-v2.md)).<br>**Dynamic:** Website, PDF / File, Restaurant menu (PDF), Multi-link page, vCard, App store link, Review, Time-based redirect.<br>**Static:** Website, Contact (vCard), Email, SMS, Phone call, Plain text, Wi-Fi.<br>Changes: take **Wi-Fi, Plain text, Email, SMS and Phone call out of dynamic *More Types***. **Add Phone call to Static.** **Merge static *vCard* and *Contact* `8256:11645` into one *Contact (vCard)*** ([0006](../decisions/0006-static-contact-is-vcard.md)). **Remove the static *Linkpage* `8256:11635`** (v2 has no static Multi-link). Rename "Linkpage" to "Multi-link page" and "Google Reviews" to "Review". Add a *Time-based redirect* tile (see FD-06). Then copy the same list into the type note `8193:23287` (still has "Mobile App" and the old columns) and fix "Mobile App" in the Bulk note `8193:22086` |
| FD-06, 33 | ⏸ **On hold:** removing time-based redirect from V1 is under discussion (2026-10-06). If it stays, draw it as **its own dynamic type** (v2 *step 2: set up a time-based redirect*, QR-U-43; Oleg 2026-10-05), not a Schedule option on other types:<br>• A *Time-based redirect* tile in Step 1 `8193:17468`.<br>• Step 2: a list of **periods**, each with days of the week, start and end time and a URL. *Add period* / remove.<br>• A required **default URL** for any time outside the periods, and the **time zone** (the account's by default, editable on this step).<br>• An error on save when periods overlap, naming them.<br>• A note that a paused or archived code ignores the periods.<br>• Edit: the periods can be changed later.<br>Either way, *Schedule publication* (notes `8193:23348`, `23361`, Bulk `22129`, Edit `22234`) is not MVP and comes out |
| FD-07 | The GTM wireframe `8193:21625` has GTM only. Add GA4 and Meta Pixel fields to the same screen (QR-U-41, A-9) |
| FD-09, 38 | Note `8193:23323`: remove "Smart Rules" and "Geolocation URL" (post-MVP). Keep French support |

**Sidebar · Dashboard**

| # | Still missing |
| --- | --- |
| 27 | Folders: opening, renaming and deleting aren't drawn (deleting a folder never deletes its codes, FL-07). The *Create Folder pop-up* window `8193:24014` has no link |
| 84 | The Dashboard row `8193:16712` doesn't say whether a code is **static or dynamic** (QR-U-22 AC1) |
| 102 | **Archive without a plan:** *Download* `8193:22994` goes to *QR is being downloaded* `8256:8594`. Per v2 (*move a code to Archive*, [0005](../decisions/0005-adopt-srs-v2.md)) it should open the Upgrade pop-up, like Edit, Duplicate and Activate. Download from the Dashboard rows keeps the "not available" note (A-13) |

**Account Settings · APIs · GTM**

| # | Still missing |
| --- | --- |
| 68 | API key management (QR-U-40 AC1):<br>• *Create API key* → name it (e.g. "Shopify store") → the full key is shown **once**, with Copy and "You won't see this key again".<br>• A list of keys: name, masked key, created, last used, *Revoke* → confirmation → toast |
| 71 | Password Save `8193:22695` → toast only:<br>• Toast: "Password changed. You've been signed out on other devices." (QR-U-36 AC3)<br>• A decision "Signed up with Google?" before *Edit Password* → Yes: "You sign in with Google" or *Set a password* (AC4; which one is TBD) |

## 3. New findings (2026-10-06, SRS v2.0 audit)

From the [v2 audit](figma-audit-2026-10-01.md#srs-v20-audit-2026-10-06) of the whole Wireflows section. Each row says what to change and which v2 story asks for it.

**Creation · Bulk · types**

| # | Still missing |
| --- | --- |
| 115 | **vCard fields: one phone.** v2: First name (required), Last name, Company, Job title, **Phone (one)**, Email, Website, Address, Photo / logo. Static *Contact (vCard)* uses the same fields. No vCard form is drawn yet (Step 2 is one *Enter content* box, #37), so apply this when you draw it. Also merge the Mockups *Concept* `6062:3722` tabs *vCard* `6062:4161` and *Contact* `6062:4188` ([0006](../decisions/0006-static-contact-is-vcard.md)) |
| 103 | Bulk Step 1 `8193:17655` and the Bulk note `8193:22086`: types are **Website, App store link, Email, SMS, Phone call, Plain text** only. Remove static *Contact* `8256:11468`, *vCard* `8256:11505` and *Wi-Fi* (*[User] - Bulk creation*, QR-U-17) |
| 116 | Creation *Download QR* `8193:23265`, `8193:23266`: make it **Save and download**: the code is saved, then the download dialog with PNG, JPG, SVG, EPS, PDF and the minimum print size, then the Dashboard (QR-U-13, QR-U-14) |
| 117 | Bulk *Save* `8193:22077` → toast `8193:22138`: show progress while codes are created, and the toast states how many were created (QR-U-17) |

**Onboarding · Log in · Landing**

| # | Still missing |
| --- | --- |
| 105 | ⏸ **On hold:** to discuss with the BA (Oleg, 2026-10-06). v2 sign-up drops **Name** (Email, Password, Confirm password, Terms; QR-U-03), but nothing else in v2 collects it: it's only editable later in Account Settings (QR-U-36), and *Delete account* asks the user to type their full name (QR-U-37). Question for the BA: where does the name come from if sign-up doesn't ask for it? Until then, keep the **Name** field and the *Enter Name* box `8193:24560` in Sign up `8193:16116` |
| 106 | *Error: email already registered* `8193:24596`: offer *Log in* and *Forgot password* (QR-U-03) |
| 107 | Google, both buttons: an existing account → Dashboard; a new account → trial + Welcome. Today Sign up `8193:24578` only goes to Welcome and Log in `8193:24268` only to the Dashboard (QR-U-03, QR-U-04) |
| 114 | Welcome (made a code) `8193:21006`: v2 wants *Download QR code*, the trial notice and Close, not *Download SVG* / *Customize*. ⚠️ v2 also wants the trial notice and *Add payment details* in this window, but the client asked for one CTA and the trial info only in the sidebar. Needs a call with the client and the BA before you change it |
| 111 | Landing `8193:15352`: tab names as in creation (Multi-link page, Plain text, App store link); a signed-in header with *Go to my codes*; add **Pricing** to the structure note `8256:10778` (QR-U-01) |
| 118 | *User Log out* `8193:24114`–`24116`: lead to the **home page** (QR-U-04) |

**Sidebar · Dashboard · Analytics**

| # | Still missing |
| --- | --- |
| 104 | Dashboard no-plan branch: *Duplicate* `8193:23650` should **work** (v2 *Dashboard*, QR-U-22). Today it opens the Upgrade pop-up `8193:23739`. In the Archive it stays locked (#102) |
| 110 | Dashboard filters `8193:16712`: add **Folder**; sort by newest, name, most scanned (QR-U-22) |
| 108 | Analytics filters: per code `8193:22313` add **Time range** and **Location**; all codes `8193:22902` add **Time range**. *Scans by device* shows device, operating system and browser (QR-U-28, QR-U-29) |
| 109 | Rename *GTM* / *Google Tag Manager* (`8193:24171`, `8193:21625`) to **Integrations**, together with FD-07 (QR-U-41) |

**Plans & Billing · Upgrade**

| # | Still missing |
| --- | --- |
| 112 | *Manage Billing* for an active subscription `8193:22501` → *Recurly* `8193:22540` returns to *Plans & Billing (Free Trial)* `8256:11393`. It should return to the active-subscription screen, with a success or error message (QR-U-33) |
| 113 | Upgrade pop-ups `8193:19773`, `8193:20444`: "No new dynamic codes" undersells it. Without a plan, creating, editing, bulk creation and activating are blocked (QR-U-31) |

## 4. Typos

None left.

## 5. Parked: nothing to do in Figma for now

These aren't open issues. Each one waits for someone else, or comes back at the design stage.

| Item | Waiting for |
| --- | --- |
| #2, #61 Plans, prices and tiers | The client (SRS-Q-08) |
| #18 Codes pause after the trial | The client (SRS-Q-01) |
| #75 API screen for a plan without API access, and for "usage limit reached" | The client: which plans include the API, and what the usage limit is (SRS-Q-08). The wireframe `8193:21761` already shows *Rate limit* and *Monthly usage limit* as placeholders |
| #32 *Not healthy* label on the Dashboard | Design stage (Oleg). Still required for the build (QR-U-12, DS-05) |
| Pages v2 marks "not drawn": scanner pages, hosted pages, review page and feedback, live map, template gallery, phone layouts | Design stage. Still required for the build (v2 *Scan a code*, *Code not available*, *Hosted pages*, *Review page*, *Review feedback*, Global rules) |
| #52, #55, #82, #86 Empty states for analytics, Archive and the Dashboard | Design stage (Oleg). The Dashboard one leads to *Create QR code* (QR-U-22 AC5) |
| #9 Wrong / expired OTP states | Design stage (Oleg) |
| #59 Plans & Billing when canceled (until period end) and when a payment failed | Design stage (Oleg). Still required for the build (QR-U-34 AC3, QR-U-35); the Dashboard banners are in note `8256:11547`. The retry length is TBD |
| #83 Editing a static code: hide Edit, or limit it to name and folder | Design stage (Oleg). The wireframes draw only dynamic codes. Still required for the build (QR-U-07, QR-U-21, F-65) |
| #51 *Replace file* for PDF / File and Restaurant Menu codes in Edit | Design stage (Oleg). Still required for the build (QR-U-09, QR-U-20 AC2); the size limit waits on SRS-Q-11 |
| **DR-01** (#24 trial banner) · **DR-05** (#25 account-state banners on the Dashboard, #28 no Upgrade for subscribed owners). DR-02 and DR-04 are withdrawn ([0005](../decisions/0005-adopt-srs-v2.md)) | The SRS owner: change requests to send, text in the [original](figma-audit-2026-10-01.md#requests-to-change-the-docs) |
