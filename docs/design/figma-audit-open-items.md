# Figma Wireflows: what's left to fix

**Short version of** the [final audit of 2026-10-06](figma-audit-2026-10-06-final.md) (#123–#189), after Oleg's review the same day. Older history (#1–#122, FD-01…FD-09, DR-01…DR-06) is in [`figma-audit-2026-10-01.md`](figma-audit-2026-10-01.md). It lists only what still needs a change in Figma; fixed, accepted and parked items are left out. Full wording, quotes and requirement references for each row are in the final audit.

**File:** QR.ca – Wireflows `heli5YKyvwao7H6XFJQNiY`, page **↳ Wireflows (WIP)** `8134:9062`, sections **Wireflows** `8193:22054` and **Scanners Flow** `8309:24256`. Every node ID here is on that page.

When you fix something, tell Claude: it checks Figma, removes the row here and marks it fixed in the final audit.

**Status:** 0 High · 0 Med · **40 Low** open.

## 1. Links

✅ **Done (2026-10-06).** Claude added the missing links and fixed the broken one through the Figma connector: *Paused Page* `8309:24145` → its section (#127); *Upgrade on higher level pop-up* in Bulk `8256:8849` and Dashboard `8256:8809` → Upgrade pop-up (#144, #163); *QR codes (Dashboard)* in Upgrade `8193:22840` and Plans & Billing `8256:11402`, `8256:11413` → Dashboard (#179, #182); *Plans & Billing (Free Trial)* `8256:11367` and *(active subscription)* `8256:11385` → Plans & Billing.

A scan of all 127 link boxes on the page found no broken link and no link to another page. The 29 boxes without a link are steps drawn inside their own flow (confirmation pop-ups, *Download pop-up*, *Edit folder pop-up*, *Terms and Conditions Page* and similar), so they don't need one.

## 2. Open items (all Low)

**Text Claude can't edit:** wireframe text set in *Inter Tight* can't be changed through the Figma connector (the font isn't available there). These renames need a manual edit: #130 (`8193:15709` Price → *Pricing*, `8315:32710` Text → *Plain text*, `8315:32718` App Store → *App store link*), #131 casing (`8193:15413` *Plain text*, `8193:15421` *App store link*), #135 / #169 Sort by: Date → *Newest* (`8193:16464`, `8193:21303`, `8193:20070`, `8193:20741`, `8193:17329`), #151 (`8193:18017` Next → *Save*), #155 (`8193:17509`, `8193:17687` → *App store link*).

| # | Where | Fix |
| --- | --- | --- |
| **Scanners** | | |
| 126 | Entry Point `8309:23951` | PDF / File and Restaurant menu need their own branch: the file opens on the phone (QR-U-09, QR-U-20) |
| 128 | *Switch to French* `8309:24127`, `8309:24163` | Show the default: page opens in the phone's language; one-language pages show that language (QR-U-18) |
| 129 | Micro-landing wireframe `8309:24045` | Remove the free-text line "Wholesale orders…": vCard has no notes field |
| **Landing · Log in · Sign up · Welcome · Password** | | |
| 130 | Log in background `8193:15700` | Tabs "Text", "App Store" → *Plain text*, *App store link*; header "Price" → *Pricing* (rest of #111) |
| 131 | Landing tabs `8193:15352` | Add *PDF / File*; v2 casing *Plain text*, *App store link* |
| 132 | *Go to my codes* `8322:33069` | Arrow or link to the Dashboard |
| 133 | *Sign up with Google* `8193:24429` | Connect to the Sign up / Welcome flow |
| 134 | Welcome wireframes `8193:16167`, `8193:21006` | Account menu shows the email, not "Jayson" (0007 §3) |
| 135 | Welcome wireframes (Dashboard behind) | Filters as on the new Dashboard `8349:33812` (*Folder*, *Sort by: Newest*) |
| 137 | Password restoration, new-password steps | *Back to Log in* on every step (QR-U-05) |
| 139 | *Sign in* `8193:24266` vs wireframe "Log in" | Pick one label (and "I don't have an account" vs "Get started") |
| 140 | Footer in most wireframes | Remove "Trusted by 100+ businesses across Canada" (client: no "Canadian" copy); it's clipped anyway |
| **Creation · Bulk · Edit** | | |
| 143 | Edit decision `8256:11714` | Add the *No* branch |
| 145 | Bulk *Download QRs* `8193:22079` | Download after saving, from *Save and download*, not off Step 5 |
| 146 | Bulk *Upload new CSV* `8193:22075` | Route through the plan-limit check `8256:8834` |
| 147 | Bulk Step 5 note `8193:22129` | Drop "Name QR": a batch sets folder, tags and description only |
| 148 | Bulk Step 4, Edit scan check | Add the fail → "continue anyway?" confirmation, as in Creation |
| 149 | *Fix scannability* notes | Name the problem (contrast, quiet zone, data density, logo size), not just colours |
| 150 | Edit download note `8256:11667` | Add *Min print size* |
| 151 | Edit wireframe `8193:17991` | "Next" → *Save* (Edit isn't a stepper) |
| 152 | Edit wireframe, note `8193:23323` | French texts only for page types (vCard, Multi-link), not Website URL |
| 153 | Step 1 wireframe `8193:17468` | One explaining line for the Dynamic group too |
| 154 | Step 1 wireframe `8193:17468` | Show *Cancel* in the footer |
| 155 | Step 1 `8193:17509`, Bulk `8193:17687` wireframes | "App Store Link" → *App store link* (notes already fixed) |
| **Dashboard · Sidebar · Archive · Analytics** | | |
| 158 | Particular QR Analytics `22293` | Add the paused state with *Activate* (rest of #57) |
| 159 | Its Download `22355` | Add the paused-code note, as on the Dashboard |
| 160 | Its actions | Add *Move to Archive* |
| 161 | Its flow | No-plan branch: Edit and Activate open the Upgrade pop-up |
| 162 | Archive no-plan Delete *Close* `23074` | Back to Archive, not the Dashboard (rest of #81) |
| 164 | Banner note `8256:11546` | Canceled and payment-failed banners also on the "has a plan" branch |
| 165 | Sidebar *QR code C* `24149` | Arrow to Particular QR Analytics, like A and B |
| 166 | Sidebar wireframe `27984` | Add the *Advanced* heading over API and Integrations |
| 168 | Both analytics wireframes | Add *Time range* and *Location* to the filter bar |
| 169 | Archive wireframe `17176` | "Sort by: Date" → *Newest* |
| 171 | Archive rows `22978`, `22979` | Mark them *Dynamic*, or hide Edit / Duplicate for static codes (0007 §6) |
| **Plans & Billing · Upgrade · Account · APIs · Integrations** | | |
| 176 | Higher-plan *Success* → *To QR codes* `8256:8713` | Lead to the Dashboard, not Plans & Billing |
| 177 | Higher-plan *Error* → *Close* | Back to where the user was |
| 178 | Connectors `8193:22860`/`22861`, `8256:8735`/`8736` | Delete the duplicate arrows |
| 180 | Default Upgrade wireframe `8193:19773` | "Trial Ended" doesn't fit lapsed paid users; "are paused" vs "will pause" |
| 181 | *Canceled State* `8193:22478` | Arrow back to Plans & Billing |

## 3. Typos

None left (fixed 2026-10-06: #141, #170, #183–#185).

## 4. Parked: nothing to do in Figma for now

These aren't open issues. Each one waits for someone else, or comes back at the design stage.

| Item | Waiting for |
| --- | --- |
| #2, #61 Plans, prices and tiers | The client (SRS-Q-08) |
| #18 Codes pause after the trial | The client (SRS-Q-01) |
| #75 API screen for a plan without API access | The client: which plans include the API (SRS-Q-08). The "usage limit reached" state is gone: the key has no limit of its own ([0007](../decisions/0007-call-2026-10-06-scope-cuts.md)) |
| Pages v2 marks "not drawn": scanner pages, hosted pages, live map, template gallery, phone layouts | Design stage. Still required for the build (v2 *Scan a code*, *Code not available* without an owner's message, *Hosted pages*, Global rules). The review page and feedback are out with the Review type ([0007](../decisions/0007-call-2026-10-06-scope-cuts.md)) |
| #52, #55, #82, #86 Empty states for analytics, Archive and the Dashboard | Design stage (Oleg). The Dashboard one leads to *Create QR code* (QR-U-22 AC5) |
| #106 *Email already registered*: offer *Log in* and *Forgot password* (QR-U-03) | Design stage (Oleg, 2026-10-06) |
| #9 Wrong / expired OTP states | Design stage (Oleg) |
| #59 Plans & Billing when canceled (until period end) and when a payment failed | Design stage (Oleg). Still required for the build (QR-U-34 AC3, QR-U-35); the Dashboard banners are in note `8256:11547`. The retry length is TBD |
| #51 *Replace file* for PDF / File and Restaurant Menu codes in Edit | Design stage (Oleg). Still required for the build (QR-U-09, QR-U-20 AC2); the size limit waits on SRS-Q-11 |
| **DR-01** (#24 trial banner) · **DR-05**, #28 part only (no Upgrade for subscribed owners; the banner part was agreed on the call) · **DR-06** (#114 Welcome window: no trial notice, buttons as drawn; covers both windows `8193:21006` and `8193:16167`). DR-02 and DR-04 are withdrawn ([0005](../decisions/0005-adopt-srs-v2.md)) | The SRS owner: change requests to send, text in the [original](figma-audit-2026-10-01.md#requests-to-change-the-docs) |
| *Delete account* asks the user to type their full name (QR-U-37), but the name is now optional | The BA: what the confirmation asks for instead, e.g. the email ([0007](../decisions/0007-call-2026-10-06-scope-cuts.md)) |
| #124, #125 Scanner pages for deleted / disabled / not-found codes; App store link routing by phone (QR-U-39, QR-U-19) | Design stage (Oleg, 2026-10-06) |
| **DR-07** (#156 no *All QR codes* sidebar item; the Folder filter covers it) · **DR-08** (#172, #173 no key name, no Account ID) · **DR-09** (#142 one *Save* that opens the download dialog) | The SRS owner: change requests to send, text in the [final audit](figma-audit-2026-10-06-final.md#requests-to-change-the-docs) |
