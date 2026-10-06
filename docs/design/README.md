# Design reference

## Figma files

| File | Key | Use | Link |
| --- | --- | --- | --- |
| **QR.ca – Wireflows** | `heli5YKyvwao7H6XFJQNiY` | Owner-side screens and flows (WIP). The SRS cites its node IDs | [User Flow canvas `8013:3323`](https://www.figma.com/design/heli5YKyvwao7H6XFJQNiY/QR.ca-%25E2%2580%2593-Wireflows?node-id=8013-3323) |
| **QR.ca – Mockups** | `5NuyPHjiXxrvLJGuJZItCf` | Visual design of the home page; the source for the current prototype | [Home `6062:2295`](https://www.figma.com/design/5NuyPHjiXxrvLJGuJZItCf/QR.ca-%25E2%2580%2593-Mockups?node-id=6062-2295) |

**Client feedback:** standing UI and copy principles from the client are in [client-feedback.md](./client-feedback.md). Check new work against them.

The Figma desktop MCP reads whichever file is open in Figma desktop. Open the right file before asking Claude to inspect a node.

## Wireflows node map

Checked against the live file on 2026-10-01. Every section below sits inside the **User Flow** canvas `8013:3323`.

| Node | Section | Stories | Flows |
| --- | --- | --- | --- |
| `8045:3711` | Landing (home page · *Sign up to download*) | QR-U-01, QR-U-02 | FL-01 |
| `8055:3551` | Onboarding: `8045:3710` Sign up · `8045:3709` Welcome pop-up | QR-U-03, QR-U-06, QR-U-31 | FL-01, FL-02 |
| `8055:3363` | Log in | QR-U-04 | FL-02 |
| `8067:2887` | Password Restoration (OTP) | QR-U-05 | FL-02 |
| `8045:3479` | Sidebar (account-state variants, trial banner, Add Folder) | QR-U-42, QR-U-26, QR-U-30 | FL-07, FL-09 |
| `8045:3708` | Dashboard | QR-U-22, QR-U-24, QR-U-25 | FL-06, FL-07 |
| `8045:2816` | QR code creation (type → content → micro-landing → QR customization → publication) | QR-U-07…16, QR-U-18…21 | FL-03 |
| `8045:2391` | Edit QR code | QR-U-23 | FL-05 |
| `8045:2390` | Bulk Creation | QR-U-17 | FL-04 |
| `8053:2392` | Archive (`8070:2711` move to Archive · `8139:14187` activate, choose folder) | QR-U-27 | FL-06 |
| `8045:2575` | Particular QR Analytics | QR-U-28 | FL-08 |
| `8045:3155` | Analytics (all codes) | QR-U-29 | FL-08 |
| `8053:2117` | Upgrade pop-up | QR-U-32 | FL-09 |
| `8045:3051` | Plans & Billing (`8134:8998` retention discount accepted) | QR-U-33, QR-U-34 | FL-10 |
| `8045:3122` | Account Settings | QR-U-36, QR-U-37 | FL-11 |
| `8045:3377` | APIs | QR-U-40 | — |
| `8045:3399` | GTM (to be renamed Integrations) | QR-U-41 | — |
| `8013:2866` | Note: type list (Static / Dynamic columns) inside QR code creation | QR-U-07 | FL-03 |

**Not drawn** (C-4 / SR-03): FL-12 (everything the scanner sees: hosted pages and "not live" pages), FL-13 (the admin console), failed-payment states (QR-U-35), download format choice (QR-U-14) and invoice / downgrade (QR-U-33).

## Figma vs SRS

These are places where the Wireflows don't match the SRS. The SRS wins (A-15); since 2026-10-06 that's SRS v2.0 ([0005](../decisions/0005-adopt-srs-v2.md)), and every FD item was re-checked in the [final audit of 2026-10-06](figma-audit-2026-10-06-final.md); what's still left to change in Figma is in [`figma-audit-open-items.md`](figma-audit-open-items.md). They're listed here for Oleg to update the canvas, not for the prototype to copy.

| # | Finding | Figma | SRS | Ref |
| --- | --- | --- | --- | --- |
| FD-01 | Type list is wider than V1 | Type note `8013:2866` also lists Map Location, Coupon Code, Facebook Page, Image, and dynamic Email / SMS / Call | Not V1 | QR-U-07, F-05, SR-02 · ✅ fixed 2026-10-06 |
| FD-02 | Review type is missing | Not in the type list | Dynamic V1 type | QR-U-44, F-61 · closed: Review is out of V1 ([0007](../decisions/0007-call-2026-10-06-scope-cuts.md)) |
| FD-03 | App Store type is named "Mobile App" | `8013:2880` | "App Store Link" | QR-U-07 · ✅ fixed 2026-10-06 |
| FD-04 | Typo in the type list | "Conatct" (`8013:2892`, `8014:3641`) | Contact | ✅ fixed 2026-10-02 |
| FD-05 | The node for static codes cited by F-65 doesn't exist | `8079:3007` is not in the file (deleted or moved?) | F-65 cites it | F-65 · ✅ resolved: it's the *Basic Assumptions* frame on *Meta Flow (WIP)* |
| FD-06 | Only *Schedule publication* is drawn, not time-based redirects | `8040:1504` and others | Schedule publication is not MVP; time windows are V1 | QR-U-13, QR-U-43 · closed: time-based redirect is out of V1 ([0007](../decisions/0007-call-2026-10-06-scope-cuts.md)) |
| FD-07 | The GTM screen has no GA4 or Meta Pixel fields | `8045:3399` GTM only | All three on one screen, named Integrations ([0007](../decisions/0007-call-2026-10-06-scope-cuts.md)) | QR-U-41, A-9 · ✅ fixed 2026-10-06 |
| FD-08 | The Webhooks screen is gone | `8045:3388` deleted | Later (post-sync decision) | F-48 · consistent, no action |
| FD-09 | Smart Rules / Geolocation URL notes in creation | Note `8040:1619` | Location routing is post-MVP | §13 `DYN-09` · ✅ fixed 2026-10-06 |

## Mockups node map (used by the archived tasks)

| Node | Element |
| --- | --- |
| `6062:2295` | Home page frame |
| `6062:2412` | Step 2 shape tiles (`6062:2414`, `2854`–`2861`) |
| `6062:2669` | "No credit card required" badge over the QR card |

## Tokens in code

The source is `src/index.css` (`@theme`) and `src/utils/theme.ts`.

| Token | Value | Use |
| --- | --- | --- |
| Font | Inter Tight 400–700 | Everything |
| `slate-dark` | `#2c2e30` | Main text and dark UI |
| `brand-blue` | `#00a7f5` | Primary accent, Website tab |
| `brand-coral` | `#ef6f68` | Accent |
| `premium-pink` | `#e96d98` | Premium / upsell accents |
| Tab accents | website `#00A7F5` · vcard `#C778D9` · links `#9F87F7` · text `#5F9BFE` · contact `#00BA7F` · menu `#D68A00` | `tabColors`; the Step 3 panel is tinted from the active tab with `getDownloadPanelTheme` |
