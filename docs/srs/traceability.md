# Traceability

Requirement → design → code. Update a row whenever a task touches it.

Status: ✅ built · ◐ partial · ⬜ not started · — out of the prototype. Figma nodes are from the **Wireflows** file unless marked *(M)* for **Mockups**. See [`../design/README.md`](../design/README.md).

## M1 · Making codes (home page and creation)

| Feature | Story | Figma | Prototype code | Status | Gaps |
| --- | --- | --- | --- | --- | --- |
| F-01 Home-page generator | QR-U-01 | `8045:3711` · *(M)* `6062:2295` | `src/App.tsx`, `ContentTypeNav`, `ContentForm`, `DownloadPanel`, `QrCodeView` | ◐ | G-02, G-03, G-04, G-13 |
| F-01 Sign-up to download | QR-U-02 | `8045:3711` | `SignUpModal` | ◐ | G-07, G-12 |
| F-02 Core dynamic types | QR-U-07, QR-U-08 | `8045:2816` | `utils/links.ts` (Multi-Link), `utils/vcard.ts` | ◐ | G-03, G-06 |
| F-03 Restaurant menu (PDF) | QR-U-20 | `8045:2816` | `ContentForm` (`menu` tab, URL) | ◐ | G-01 |
| F-04 Wi-Fi (static) | QR-U-21 | `8045:2816` | — | ⬜ | |
| F-06 Page builder | QR-U-10 | `8045:2816` | — | ⬜ | |
| F-07 Code styling | QR-U-11 | `8045:2816` · *(M)* `6062:2412` | `ShapeTiles`, `QrCodeView` (`qr-code-styling`) | ◐ | G-11 |
| F-08 Scannability check | QR-U-12 | `8045:2816` | — | ⬜ | G-10 |
| F-09 Templates | QR-U-16 | — | — | ⬜ | |
| F-10 Print-ready download | QR-U-14 | — (gap upstream) | — | ⬜ | G-07 |
| F-11 Bulk CSV | QR-U-17 | `8045:2390` | — | ⬜ | |
| F-12 EN / FR pages | QR-U-18 | — | — | ⬜ | |
| F-17 Publication settings | QR-U-13 | `8045:2816` | — | ⬜ | |
| F-65 Static codes | QR-U-07, QR-U-08, QR-U-21 | `8045:2816` | `text` and `contact` tabs | ◐ | G-04, G-05 |
| — Cancel creation | QR-U-15 | `8045:2816` | — | ⬜ | |

## M2 · Managing codes

| Feature | Story | Figma | Prototype code | Status |
| --- | --- | --- | --- | --- |
| F-64 Owner web app shell | QR-U-42 | `8045:3479`, `8045:3708` | — | ⬜ |
| F-13 Dashboard | QR-U-22 | `8045:3708`, `8045:3479` | — | ⬜ |
| F-14 Edit | QR-U-23 | `8045:2391` | — | ⬜ |
| F-15 Pause / activate | QR-U-24 | `8045:3708` | — | ⬜ |
| F-16 Duplicate / delete | QR-U-25 | `8045:3708` | — | ⬜ |
| F-17 Folders | QR-U-26 | `8045:3479` | — | ⬜ |
| F-18 Archive | QR-U-27 | `8053:2392`, `8070:2711`, `8139:14187` | — | ⬜ |

## M5 · Account (access part)

| Feature | Story | Figma | Prototype code | Status |
| --- | --- | --- | --- | --- |
| F-30 Sign-up + email confirmation | QR-U-03 | `8055:3551` | — | ⬜ |
| F-30 Log in / out | QR-U-04 | `8055:3363`, `8045:3479` | — | ⬜ |
| F-30 OTP password reset | QR-U-05 | `8067:2887` | — | ⬜ |
| F-31 Welcome pop-up | QR-U-06 | `8055:3551` | — | ⬜ |

## M3 · Scanning (scanner side; not drawn in Figma, C-4 / SR-03)

| Feature | Story | Figma | Prototype code | Status |
| --- | --- | --- | --- | --- |
| F-19, F-20, F-24 Redirect, code domain, no ads | QR-U-38 | — | — (backend) | — |
| F-21 App-store routing | QR-U-19 | — | — | ⬜ |
| F-22 Hosted pages (Multi-Link, vCard, PDF footer) | QR-U-38, QR-U-10 | — | — | ⬜ |
| F-23 "Not live" pages (paused, unpaid, deleted, disabled, not found) | QR-U-39 | — | — | ⬜ |
| F-60 Time-based redirects (schedule editor) | QR-U-43 | — | — | ⬜ |
| F-61 Review / feedback funnel | QR-U-44 | — | — | ⬜ |

## M4 · Scan statistics

| Feature | Story | Figma | Prototype code | Status |
| --- | --- | --- | --- | --- |
| F-25, F-27 Per-code statistics and empty state | QR-U-28 | `8045:2575` | — | ⬜ |
| F-26 Statistics across all codes | QR-U-29 | `8045:3155` | — | ⬜ |
| F-28, F-29 Digests, export, comparison | — | drawn, hidden at launch | — | — (later) |

## M5 · Trial and billing

| Feature | Story | Figma | Prototype code | Status |
| --- | --- | --- | --- | --- |
| F-32 Trial countdown banner | QR-U-30 | `8045:3479` | — | ⬜ |
| F-31, F-33 Trial start and end ⚠️ SRS-Q-01 | QR-U-31 | `8055:3551` | — | ⬜ |
| F-34 Upgrade pop-up | QR-U-32 | `8053:2117` | — | ⬜ |
| F-35 Plans & Billing | QR-U-33 | `8045:3051` | — | ⬜ |
| F-36 Cancel plan + one retention offer | QR-U-34 | `8045:3051` | — | ⬜ |
| F-37 Failed payment | QR-U-35 | — (not drawn) | — | ⬜ |
| F-38 Profile, email, password | QR-U-36 | `8045:3122` | — | ⬜ |
| F-39 Delete account | QR-U-37 | `8045:3122` | — | ⬜ |

## M6 · Integrations (owner-facing screens only)

| Feature | Story | Figma | Prototype code | Status |
| --- | --- | --- | --- | --- |
| F-40 Owner API keys screen | QR-U-40 | `8045:3377` | — | ⬜ |
| F-41, F-42 GTM / GA4 / Meta Pixel fields | QR-U-41 | `8045:3399` (GTM only so far) | — | ⬜ |
| F-43…F-47 Recurly, Customer.io, Amplitude, safety check, platform events | — | — | — (backend) | — |

## M7 · Admin console (not drawn)

| Feature | Story | Status |
| --- | --- | --- |
| F-49 Customer lookup | QR-A-01 | — |
| F-50 Disable a harmful code | QR-A-02 | — |
| F-51 Support actions | QR-A-03 | — |
| F-52 Review queue | QR-A-04 | — |
| F-53 Platform statistics | QR-A-05 | — |
| F-54 Admin access control | QR-A-06 | — |

## M8 · Cross-product (constraints on every prototype screen)

| Feature | Requirement | Prototype status |
| --- | --- | --- |
| F-55 EN + fr-CA | SRS §12.8: no hard-coded text | ◐ English only, strings hard-coded (G-14) |
| F-56 Phone and desktop | SRS §12.8, QR-U-42: no horizontal scroll | ◐ Home page responsive; check every new screen at 375 / 1440 px |
| F-57 SEO | SRS §12.8 | — |
| F-58 Feature flags | SRS §12.8 | — |
