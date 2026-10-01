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

## M3, M4, M5 (billing), M6, M7, M8

To be filled in when SRS Part 2b (QR-U-28…44, QR-A-01…06) arrives.
