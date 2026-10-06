# [User] - Scan a code
Stories on this page:
- [User] - Scan a code - land on the destination
- [User] - Scan a code - go to the right app store
- [User] - Scan a code - land on the link for the current time
Who this is. The user who is not signed in and points a phone camera at a printed code: usually a member of the public, the customer of the business that made the code. They never sign in and never see the app. Static codes do not involve QR.CA at all: the phone reads the content directly. Everything below is about dynamic codes, which go through the QR.CA redirect.
---
## [User] - Scan a code - land on the destination
| User story | As someone scanning the code I want the code to open the right thing instantly so that I get what the sign promised |
| Role | User (not signed in, scanning a code) |
| Platform | Phone browser |
| App map | Not drawn in Figma |
| UI | — |
Acceptance criteria
- When a live website code is scanned, then the scanner is sent to the destination at once.
- When a live page code is scanned (multi-link, vCard, PDF, menu, review), then the hosted page opens (see [User] - Hosted pages and [User] - Review page).
- When the scan URL carries UTM parameters, then they are passed on to the destination.
- Codes are served from a dedicated QR.CA redirect domain, not from qr.ca.
- The redirect keeps working while the main app is down or being updated.
- Every scan is counted without slowing the redirect and without identifying the scanner.
- When the code is not live, then [User] - Code not available applies.
Not decided yet
- The name of the redirect domain: with the client.
- Speed target (proposed: under 150 ms for 95% of scans in Canada): Denys's call.
Technical notes → a thin redirect service, separate from the app, with the destinations cached (Denys's technical document).
▸ Traceability
  F-19 · F-20 · QR-U-38 · A-6 · ✅ C-2 #4 (separate domain) · ✅ brief §5 · SRS-Q-15, Q-16 · not drawn (C-4)
---
## [User] - Scan a code - go to the right app store
| User story | As someone scanning the code I want an app code to open the right store for my phone so that I install the app in one step |
| Role | User (not signed in, scanning a code) |
| Platform | Phone browser |
| App map | — |
| UI | — |
Acceptance criteria
- When an iPhone scans an app-store code, then it opens the App Store link.
- When an Android phone scans it, then it opens the Google Play link.
- When any other device scans it, or the phone's store link is missing, then it opens the fallback link (never the wrong store).
▸ Traceability
  F-21 · QR-U-19 · ✅ brief §1
---
## [User] - Scan a code - land on the link for the current time
| User story | As someone scanning the code I want a time-based code to open what is valid right now |
| Role | User (not signed in, scanning a code) |
| Platform | Phone browser |
| App map | — |
| UI | — |
Acceptance criteria
- When a time-based redirect code is scanned, then the scanner lands on the link of the period that matches the current time in the code's time zone, or on the default link outside every period.
- A paused or archived code shows the "not available" page, whatever the periods say.
▸ Traceability
  F-60 · QR-U-43 · BRL-06, BRL-07
