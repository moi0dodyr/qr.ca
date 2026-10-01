# Prototype gaps vs SRS v1.0

These are places where the current prototype (`master` @ `4023e45`) contradicts SRS v1.0 or is missing something. Audited 2026-10-01 against Parts 2a–2c. Each gap is closed by a task brief, or accepted with a decision record.

| # | Gap | Prototype today | SRS v1.0 says | Ref | Resolution |
| --- | --- | --- | --- | --- | --- |
| G-01 | Restaurant menu is a URL | The `menu` tab takes a URL (`menu.qr.ca/…`) | The menu is a **PDF upload**, opened directly with a QR.CA footer | QR-U-20, DS-04 | Open |
| G-02 | The Download button is never disabled | Empty fields fall back to demo payloads (`acme.com`, `+1 (800) 555-QRCA`), so there is always "content" | Download stays disabled until content is provided | QR-U-01 | Open |
| G-03 | The type list doesn't match the reference list | Tabs: Website, vCard, Links Page, Text, Contact, Restaurant menu, More | Dynamic: Website, PDF/File, Multi-Link, vCard, App Store, Menu (PDF), Review. Static: Website, vCard/Contact, Email, SMS, Phone, Text, Wi-Fi | QR-U-07, A-15 | Open: which subset the **home page** shows is not stated |
| G-04 | No static / dynamic distinction | Never mentioned | Shown when the type is chosen; static codes say they can't be edited or tracked | QR-U-07, QR-U-08, DS-03 | Open |
| G-05 | The "Contact" tab is a phone number | Encodes `tel:` | "Phone call" is a separate static type; "vCard / Contact" is a contact card | QR-U-07, Q-W6 | Open: naming to confirm with Oleg |
| G-06 | vCard on the home page is static | The full vCard is encoded in the code | Dynamic vCard = a hosted page (QR-U-10); static vCard also exists | QR-U-07, QR-U-10, A-1 | Open: which one the home page shows |
| G-07 | Download formats in the copy | The modal mentions "SVG, PNG, JPG" | PNG, JPG, SVG, EPS, PDF; no watermark | QR-U-14, A-4, A-2 | Open: copy fix |
| G-08 | Plan name "Premium" | The track-scans modal says "Sign up for QR.ca Premium" | A 14-day free trial with no card; plan names are TBD. Upstream itself uses *Unlock Premium* on the upgrade button (QR-U-32) | QR-U-06, QR-U-31, SRS-Q-08 | Open: the home page should lead with the free trial |
| G-09 | Links Page payload domain | `https://qr.ca/<slug>` | Codes use a separate redirect domain whose name is TBD | F-20, SRS-Q-15 | Accepted as a placeholder |
| G-10 | No scannability check | — | Pass / warning / fail, a one-click fix, download never blocked | QR-U-12, DS-05 | Open |
| G-11 | Logo, Frame and Colours tabs are static | Not clickable (archived TASK-07) | Fully part of code styling | QR-U-11 | Accepted for now (prototype decision in archived TASK-07) |
| G-12 | The sign-up modal stops at the button | Google calls `alert()`; there's no confirmation step and the code isn't carried over | Email + Google sign-up → confirm email → code carried into the account → welcome pop-up | QR-U-02, QR-U-03, QR-U-06, DS-07 | Open: part of E2 |
| G-13 | Draft isn't kept | Nothing is persisted | An unsaved design may be restored from the browser | QR-U-02 | Open |
| G-14 | English only, with hard-coded strings | All copy is inline in components | EN + fr-CA everywhere; no hard-coded text; strings in a localisation platform | F-55, §12.8 | Open: an EN/FR strings module would be enough for the prototype |
| G-15 | Track-scans toggle | Opens the sign-up modal | Scan statistics are a dynamic-code feature in the trial; static codes have none | QR-U-07, QR-U-28 | Open: decide what the toggle means for static types |

Gaps that depend on the Features subpages (4a–5) or on the wireflows will be added once those arrive.
