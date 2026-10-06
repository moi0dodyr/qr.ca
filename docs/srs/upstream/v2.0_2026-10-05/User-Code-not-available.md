# [User] - Code not available
Stories on this page:
- [User] - Code not available - see a clear page when a code does not open
---
## [User] - Code not available - see a clear page when a code does not open
| User story | As someone scanning the code I want a clear message when a code is not working so that I know it is not broken or a scam |
| Role | User (not signed in, scanning a code) |
| Platform | Phone browser |
| App map | Not drawn in Figma |
| UI | TBD |
Overview
A printed code cannot be recalled, so whatever it shows is the business's face. A paused or deleted code still reaches the QR.CA redirect, which shows one of these pages instead of an error.
Acceptance criteria
- Every page is QR.CA-branded, in English and French, and never a browser error.
- When the code is paused by the owner or archived, then: "Sorry — the code you're scanning is not available right now", plus the owner's message if they wrote one.
- When the owner has no active plan, then the page follows the client's decision on the end of the trial (the estimate assumes the same paused page, naming the business).
- When the code or the account was deleted, then: the code is no longer available.
- When the QR.CA team disabled the code for safety, then a warning page; the destination is not shown.
- When the code never existed, then a generic "not found" page.
Not decided yet
- What scanners see after the owner's trial ends: with the client.
▸ Traceability
  F-23 · F-33 · QR-U-39 · DS-11 · BRL-02, BRL-03, BRL-04 · Slack 2026-10-05 (Denys: redirect, then placeholder) · SRS-Q-01 · not drawn (C-4)
