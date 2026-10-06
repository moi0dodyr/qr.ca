# [User] - Navigation
Stories on this page:
- [User] - Navigation - see the sidebar and the account menu
---
## [User] - Navigation - see the sidebar and the account menu
| User story | As a user I want one workspace with a clear menu so that I find everything in one place |
| Role | User |
| Platform | Web (desktop and mobile) |
| App map | Figma, Sidebar |
| UI | TBD |
Overview
The signed-in app has one sidebar. Its banner and its actions depend on the account state.
Acceptance criteria
- The sidebar shows:
  - All QR codes (the dashboard)
  - Folders and Add folder
  - Archive
  - Analytics
  - Advanced: API, Integrations
  - the account menu: Settings, Plans and billing, Upgrade, Log out
- The banner at the bottom depends on the account state:
  - trial: days left and Upgrade;
  - no active plan: "Your QR codes are paused" and Upgrade;
  - subscribed: no banner.
- On a phone the sidebar collapses into a menu; every item stays available.
▸ Traceability
  F-64 · QR-U-42 · Figma 8045:3479 (three sidebar variants) · design sync 00:00–00:40
