# Design reference

## Figma files

| File | Use | Link |
| --- | --- | --- |
| **QR.ca – Mockups** | Visual design of the home page; the source for the current prototype | [file `5NuyPHjiXxrvLJGuJZItCf`](https://www.figma.com/design/5NuyPHjiXxrvLJGuJZItCf/QR.ca-%25E2%2580%2593-Mockups?node-id=6062-2295), home `6062:2295` |
| **QR.ca – Wireflows** | Owner-side screens and flows (WIP); the SRS cites its node IDs | ⏳ link pending |

## Node map — Wireflows (from SRS v1.0 Part 2a; not yet verified against the file)

| Node | Screen / flow | Stories |
| --- | --- | --- |
| `8045:3711` | Home page · *Code Generated (Sign up to download)* | QR-U-01, QR-U-02 |
| `8055:3551` | Sign up · welcome pop-ups | QR-U-03, QR-U-06 |
| `8055:3363` | Log in | QR-U-04 |
| `8067:2887` | Password restoration (OTP) | QR-U-05 |
| `8045:3479` | Sidebar (account-state variants) · Add Folder | QR-U-42, QR-U-04, QR-U-22, QR-U-26 |
| `8045:3708` | Dashboard · pause · duplicate / delete | QR-U-42, QR-U-22, QR-U-24, QR-U-25 |
| `8045:2816` | Creation wizard: Step 1 type → 2 content → micro-landing → 3 QR customization → 4 publication · scannability · cancel | QR-U-07…13, QR-U-15 |
| `8045:2391` | Edit QR code | QR-U-23 |
| `8045:2390` | Bulk creation | QR-U-17 |
| `8053:2392`, `8070:2711` | Move to Archive | QR-U-27 |
| `8139:14187` | Activate from Archive (choose folder) | QR-U-27 |

Not drawn upstream (C-4): scanner-side pages, the admin console, the schedule editor, the review page and failed-payment states.

## Node map — Mockups (used by the archived tasks)

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
