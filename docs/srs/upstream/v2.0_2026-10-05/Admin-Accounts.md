# [Admin] - Accounts
Stories on this page:
- [Admin] - Accounts - find an account
- [Admin] - Accounts - see an account
- [Admin] - Accounts - suspend or reactivate an account
---
## [Admin] - Accounts - find an account
| User story | As a support admin I want to look up any customer so that I can answer their question |
| Role | Support admin, Super admin |
| Platform | Web (internal) |
| App map | Not drawn in Figma |
| UI | TBD |
Acceptance criteria
- Search by email, name or code.
- Results show: name, email, plan state (trial, subscribed, no plan, suspended), number of codes, sign-up date.
▸ Traceability
  F-49 · QR-A-01 · ✅ brief §5
---
## [Admin] - Accounts - see an account
| User story | As a support admin I want to see what the customer sees so that I can help them |
| Role | Support admin, Super admin |
| Platform | Web (internal) |
| App map | — |
| UI | TBD |
Acceptance criteria
- The account page shows: profile, plan and billing history (read-only), the list of codes with their status, and recent account events (sign-up, payments, plan changes, admin actions).
- Admins never see passwords or card numbers.
- From here the admin opens the subscription actions ([Admin] - Subscriptions) and code actions ([Admin] - Codes and moderation).
▸ Traceability
  F-49 · QR-A-01
---
## [Admin] - Accounts - suspend or reactivate an account
| User story | As a support admin I want to suspend an abusive account so that it stops causing harm |
| Role | Support admin, Super admin |
| Platform | Web (internal) |
| App map | — |
| UI | TBD |
Acceptance criteria
- Suspend and Reactivate each ask for a reason.
- Every change is logged with who, when and why.
▸ Traceability
  F-49 · QR-A-01 · BRL-32
