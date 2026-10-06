# [Admin] - Authorization
Stories on this page:
- [Admin] - Authorization - sign in with two-factor
- [Admin] - Authorization - sign out
Who this is. The QR.CA team, in the internal admin console (not the customer's app). Two roles: support admin (helps customers, moderates codes) and super admin (everything a support admin does, plus admin users and platform statistics).
---
## [Admin] - Authorization - sign in with two-factor
| User story | As a QR.CA admin I want a secure sign-in so that the console stays safe |
| Role | Support admin, Super admin |
| Platform | Web (internal) |
| App map | Not drawn in Figma |
| UI | TBD |
Acceptance criteria
- The console has its own sign-in: Email, Password, then a two-factor code.
- Only invited admins can sign in (see [Admin] - Admin users).
- An admin session lasts 8 hours (proposed).
▸ Traceability
  F-54 · QR-A-06 · not drawn (C-4)
---
## [Admin] - Authorization - sign out
| User story | As a QR.CA admin I want to sign out so that nobody uses my session |
| Role | Support admin, Super admin |
| Platform | Web (internal) |
| App map | — |
| UI | TBD |
Acceptance criteria
- Sign out ends the session and returns to the console sign-in.
▸ Traceability
  F-54 · QR-A-06
