# Figma Wireflows: what's left to fix

**Short version of** [`figma-audit-2026-10-01.md`](figma-audit-2026-10-01.md), as of **2026-10-05, second pass** (re-checked in Figma after the designer's edits). It lists only what still needs a change in Figma. Fixed, accepted and closed items are left out; the full history, with every status and reason, stays in the original.

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
| FD-01, FD-02, FD-03, 29 | Align the Step 1 wireframe `8193:17468` to the V1 list (QR-U-07).<br>**Dynamic:** Website URL, PDF / File, Links Page, vCard, App Store Link, Restaurant Menu (PDF), Google Reviews.<br>**Static:** Website URL, vCard, Contact, Email, SMS, Phone call, Plain text, Wi-Fi (Contact per [0003](../decisions/0003-static-contact-and-vcard-both-kept.md)).<br>Take **Wi-Fi, Plain text, Email, SMS and Phone call out of dynamic *More Types***. **Add Phone call to Static.** Rename "Linkpage" to "Links Page". *More Types* then holds only Google Reviews, so it can go into the main grid. Then copy the same list into the type note `8193:23287` (still has "Mobile App", "Contact" and the old columns; it now also has a "Time-based redirects" label) and fix "Mobile App" in the Bulk note `8193:22086`. Q-W6: vCard vs Contact is answered (both, [0003](../decisions/0003-static-contact-and-vcard-both-kept.md)); static Links Page is still open |
| FD-06, 33 | Nothing is drawn for **time-based redirects** (only a label in the type note `8193:23287`) (QR-U-43, V1); *Schedule publication* (notes `8193:23348`, `23361`, Bulk `22129`, Edit `22234`) is not MVP. Draw instead:<br>• In Publication Settings (Creation `8193:23229`/`23230`, Edit `8193:22207`), a **Schedule** item for dynamic Website URL, App Store Link and hosted-page codes only.<br>• A list of **time windows**: days of the week, start and end time, and a destination each. *Add window* / remove.<br>• A **default destination** used outside every window, plus the time zone (the account's by default, editable).<br>• An error on save when windows overlap, naming which ones.<br>• A note that a paused or archived code ignores the schedule. Example: one restaurant code for the breakfast, lunch and dinner menus |
| FD-07 | The GTM wireframe `8193:21625` has GTM only. Add GA4 and Meta Pixel fields to the same screen (QR-U-41, A-9) |
| FD-09, 38 | Note `8193:23323`: remove "Smart Rules" and "Geolocation URL" (post-MVP). Keep French support |

**Sidebar · Dashboard**

| # | Still missing |
| --- | --- |
| 25 | The Sidebar has trial, subscribed and no-subscription variants (`8193:24241`, `8193:24243`). Add four account states (§12.2), each with its own banner:<br>1. **Waiting for email confirmation** (after *Edit Email*, QR-U-36 AC2): "Confirm your new email: [address]" with *Resend*. The old email stays in use until confirmed.<br>2. **Canceled, until period end** (QR-U-34 AC3): codes keep working; "Your plan ends on [date]. No further charge." with *Choose a plan*.<br>3. **Payment failed, retrying** (QR-U-35): codes keep working; "Payment failed. Update your card by [date] or your codes pause." with *Update card* → *Manage Billing*.<br>4. **Suspended by an admin**: codes are disabled; "Your account is suspended" with *Contact support*. The SRS doesn't say what else stays open; a sensible minimum is read-only codes and stats, Log out and Contact support |
| 26 | *Navigation* `8193:24132`: show what's locked in each account state (QR-U-42, QR-U-31) |
| 27 | Folders: opening, renaming and deleting aren't drawn (deleting a folder never deletes its codes, FL-07). The *Create Folder pop-up* window `8193:24014` has no link |
| 28 | The subscribed account menu `8193:24139` has no Upgrade item (QR-U-42) |
| 84 | The Dashboard row `8193:16712` doesn't say whether a code is **static or dynamic** (QR-U-22 AC1) |
| 86 | No Dashboard empty state leading to *Create QR code* (QR-U-22 AC5) |
| 87 | Pause and Activate are offered for every code. Pause applies only to dynamic codes (QR-U-24) |

**QR code creation**

| # | Still missing |
| --- | --- |
| 35 | Keep both vCard and Contact ([0003](../decisions/0003-static-contact-and-vcard-both-kept.md)). The Step 1 wireframe `8193:17468` has static vCard only: **add static Contact** (name, phone, email). The note and the Landing tabs are fine |

**Bulk · Edit**

| # | Still missing |
| --- | --- |
| 49 | Edit Save `8193:22214` → generic *Success State* `8193:22208`. Replace it with a decision "Did the look change?":<br>• **No:** "Saved. No need to re-download: your printed code already opens the new content." → Dashboard.<br>• **Yes:** *Download QR pop-up* with the new file and "Codes you've already printed keep the old look, but they still work." → Download / Later → Dashboard (QR-U-23 AC4–5) |
| 50 | *Micro-Landing Customization* `8193:22209` is shown for every type. Only vCard and Links Page have a page (A-1, QR-U-23 AC1) |
| 51 | No **file replace** for PDF / File and Restaurant Menu codes. Add *Replace file* next to *Edit content* `8193:22215` → upload a new PDF → uploading, wrong type and too large states → Save. Scanners get the new file on the next scan (QR-U-09, QR-U-20 AC2). The file size limit is open (SRS-Q-11) |
| 83 | One Edit flow for every code. Static codes can't change content: hide Edit, or limit it to name and folder (QR-U-07, QR-U-21, F-65) |

**Analytics · Plans & Billing**

| # | Still missing |
| --- | --- |
| 59 | Two Plans & Billing states:<br>• **Canceled, until period end** (QR-U-34 AC3): "Canceled. Your plan ends on [date]. No further charge." Codes work until then. *Choose a plan* and *Orders History*. After the date it becomes the no-subscription branch `8193:22444`.<br>• **Payment failed, retrying** (QR-U-35): red banner "Your payment on [date] failed. We'll retry until [date]." with *Update card* → *Manage Billing* → success or error. Retry period ends unpaid → no subscription. The retry length is TBD |
| 62 | Downgrade uses the same card path. It needs a confirmation and the message "your live codes stay on" (QR-U-33, BRL-12) |

**Account Settings · APIs · GTM**

| # | Still missing |
| --- | --- |
| 68 | API key management (QR-U-40 AC1):<br>• *Create API key* → name it (e.g. "Shopify store") → the full key is shown **once**, with Copy and "You won't see this key again".<br>• A list of keys: name, masked key, created, last used, *Revoke* → confirmation → toast |
| 71 | Password Save `8193:22695` → toast only:<br>• Toast: "Password changed. You've been signed out on other devices." (QR-U-36 AC3)<br>• A decision "Signed up with Google?" before *Edit Password* → Yes: "You sign in with Google" or *Set a password* (AC4; which one is TBD) |

## 3. New findings (2026-10-05)

None left.

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
| #52, #55, #82 Empty states for analytics and Archive | Design stage (Oleg) |
| #9 Wrong / expired OTP states | Design stage (Oleg) |
| **DR-01** (#24 trial banner) · **DR-02** (#79 Edit locked without a subscription) · **DR-04** (static Contact as a type) | The SRS owner: change requests to send, text in the [original](figma-audit-2026-10-01.md#requests-to-change-the-docs) |
