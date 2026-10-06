# [Admin] - Subscriptions
Stories on this page:
- [Admin] - Subscriptions - see a customer's subscription
- [Admin] - Subscriptions - extend a trial
- [Admin] - Subscriptions - grant a goodwill code
- [Admin] - Subscriptions - issue a refund or credit
- [Admin] - Subscriptions - see and adjust plans and limits (new)
> New. The team lead pointed out that the subscription side of the admin console was missing. The first four stories exist in our documents already; the plans-and-limits story is new and has no hours yet (Denys to estimate).
Related pages: [User] - Plans and billing · [System] - Subscriptions engine.
---
## [Admin] - Subscriptions - see a customer's subscription
| User story | As a support admin I want to see a customer's subscription so that I can explain their bill |
| Role | Support admin, Super admin |
| Platform | Web (internal) |
| App map | Not drawn in Figma |
| UI | TBD |
Acceptance criteria
- On the account page, a Subscription block shows: plan, state (trial with days left, active, canceled until a date, payment failed, no plan), next invoice, and the invoice list. Read-only; the data comes from Recurly.
- A link opens the same customer in Recurly for anything the console does not cover.
▸ Traceability
  F-49 · F-43 · QR-A-01 · new (Anatolii, 2026-10-05: subscription missing in admin)
---
## [Admin] - Subscriptions - extend a trial
| User story | As a support admin I want to give a customer more trial days so that a customer with a problem is looked after |
| Role | Support admin, Super admin |
| Platform | Web (internal) |
| App map | — |
| UI | TBD |
Acceptance criteria
- Extend trial asks for the number of days and a reason.
- The new end date applies at once; the customer sees it in their trial banner.
- The action is logged.
▸ Traceability
  F-51 · QR-A-03
---
## [Admin] - Subscriptions - grant a goodwill code
| User story | As a support admin I want to keep one code live for a customer without a plan so that I can help someone with a problem |
| Role | Support admin, Super admin |
| Platform | Web (internal) |
| App map | — |
| UI | TBD |
Acceptance criteria
- Grant goodwill code lets the admin pick one dynamic code of an account without a plan, with a reason.
- That code stays live without a subscription and is marked "granted by support" in the console.
- The action is logged.
▸ Traceability
  F-51 · QR-A-03 · ✅ C-1.1 ("giving 1 free dynamic QR code away if a customer comes with a problem")
---
## [Admin] - Subscriptions - issue a refund or credit
| User story | As a support admin I want to refund or credit a customer so that billing mistakes are fixed |
| Role | Support admin, Super admin |
| Platform | Web (internal) |
| App map | — |
| UI | TBD |
Acceptance criteria
- A refund or credit is issued through Recurly, with an amount and a reason, and logged.
Not decided yet
- The refund policy, and whether refunds are done from the console or directly in Recurly: with the client.
▸ Traceability
  F-51 · QR-A-03 · SRS-Q-17
---
## [Admin] - Subscriptions - see and adjust plans and limits (new)
| User story | As a super admin I want to see and adjust what each plan includes so that pricing can change without a release |
| Role | Super admin |
| Platform | Web (internal) |
| App map | Not drawn in Figma |
| UI | TBD |
Overview
Plans, limits and which features each plan unlocks are configuration, not code (already decided). This page gives the super admin a view of that configuration. Prices and billing periods stay in Recurly; the console holds the limits and feature gates.
Acceptance criteria
- The super admin sees each plan with its limits (Number of codes, Bulk upload limit, API calls, File storage) and its feature switches (Bulk creation, API, Integrations, Templates, Basic level after trial).
- When the super admin changes a limit, then it applies to every account on that plan. Live codes are never switched off: only creating new codes over the new limit is blocked.
- Every change is logged.
Not decided yet
- Whether this is a screen in the console or a configuration file managed by the team: Denys's call (no hours yet).
▸ Traceability
  new · A-14 (entitlements as configuration) · Slack 2026-10-05 (Denys: changing a limit never disables live codes) · BRL-12 · SRS-Q-08
