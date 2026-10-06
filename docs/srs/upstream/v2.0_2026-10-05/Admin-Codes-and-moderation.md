# [Admin] - Codes and moderation
Stories on this page:
- [Admin] - Codes and moderation - disable a harmful code
- [Admin] - Codes and moderation - review flagged links
---
## [Admin] - Codes and moderation - disable a harmful code
| User story | As a support admin I want to switch off a harmful code at once so that people who scan it are protected |
| Role | Support admin, Super admin |
| Platform | Web (internal) |
| App map | Not drawn in Figma |
| UI | TBD |
Acceptance criteria
- Disable on any code asks for a reason.
- The next scan shows a safety warning page (within about a minute) and the owner is emailed.
- Only an admin can re-enable the code, also with a reason; the owner cannot.
- Every disable and re-enable is logged.
▸ Traceability
  F-50 · QR-A-02 · BRL-32 · ✅ brief §5
---
## [Admin] - Codes and moderation - review flagged links
| User story | As a support admin I want doubtful links queued for a person to check so that scams are caught without slowing honest users |
| Role | Support admin, Super admin |
| Platform | Web (internal) |
| App map | Not drawn in Figma |
| UI | TBD |
Overview
Every link and file is checked against a link-reputation service when it is saved, and again on a schedule. Known-bad links are refused at once (the user is told). Doubtful ones keep working and land in this queue.
Acceptance criteria
- The queue lists each flagged link with the code, the account, the reason and the date.
- The admin can Approve (the link stays) or Disable (as in the previous story).
- Every decision is logged.
Not decided yet
- How often live links are re-checked: Denys's call.
▸ Traceability
  F-52 · F-46 · QR-A-04 · BRL-31, BRL-33 · ✅ C-2 #2
