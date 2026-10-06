# [User] - Plans and billing
Stories on this page:
- [User] - Plans and billing - see the plans and prices
- [User] - Plans and billing - upgrade and pay
- [User] - Plans and billing - work without an active plan
- [User] - Plans and billing - manage the plan, card and invoices
- [User] - Plans and billing - cancel the plan
- [User] - Plans and billing - fix a failed payment
Related pages: [User] - Onboarding and trial · [Admin] - Subscriptions · [System] - Subscriptions engine · [System] - Global rules (emails).
How billing works, end to end. The client chose Recurly for subscriptions (plans, trials, invoices, retries of failed payments) and Stripe as the payment gateway. A new user gets a 14-day trial without a card. They can pay at any time from the upgrade window. When the trial ends without payment, or a plan lapses, the account moves to "no active plan": the user still sees everything but cannot create or edit, and their codes are paused (exact behaviour for scanners still with the client). Plans, limits and which features each plan unlocks are configuration, not code, so they can change without a release. A limit change never switches off live codes; it only blocks creating new ones over the limit.
---
## [User] - Plans and billing - see the plans and prices
| User story | As a user I want to compare plans so that I choose the right one |
| Role | User |
| Platform | Web (desktop and mobile) |
| App map | Figma, Plans and billing (available plans) |
| UI | TBD |
Acceptance criteria
- Plans are shown monthly and yearly, in Canadian dollars, with what each includes (number of codes, bulk, API, …).
- Tax (GST, HST or QST) is applied by province at checkout.
- The same plans appear on the public pricing page.
Not decided yet
- Plans, prices and limits: with the client (the client's proposal: $120 a year or $20 a month, about $180 a year, $50 a month).
- Showing prices in the visitor's local currency: proposed; the estimate assumes display only, charging stays in CAD.
▸ Traceability
  F-35 · F-62 · QR-U-33 · ✅ C-1.2 · BRL-35, BRL-36 · Figma 8045:3051 · SRS-Q-08, SRS-Q-24 · B-2, B-4
---
## [User] - Plans and billing - upgrade and pay
| User story | As a user I want to upgrade wherever I hit a limit so that I keep working |
| Role | User |
| Platform | Web (desktop and mobile) |
| App map | Figma, Upgrade pop-up |
| UI | TBD |
Acceptance criteria
- The upgrade window opens from: the trial banner, the account menu, a locked action, or the plan limit when creating a code.
- For a trial user, the window shows what is unlocked, for how many more days, what stops without a plan, and when they would be charged; Keep free trial closes it.
- For a user without a plan, it shows what works and what does not; Not now closes it.
- The user picks a plan and enters the card in the payment provider's secure form. QR.CA never stores card numbers.
- When payment succeeds, then a success window leads back to the codes and the plan applies at once.
- When it fails, then an error window offers Try again or Close.
Not decided yet
- Checkout as a Recurly-hosted page or our own form: Denys's call (it changes the size of this work).
Technical notes → Recurly + Stripe integration (Denys's technical document).
▸ Traceability
  F-34 · F-43 · QR-U-32 · A-14 ("Not now" instead of "Stay free") · Figma 8053:2117 · C-1
---
## [User] - Plans and billing - work without an active plan
| User story | As a user without a plan I want to know what still works so that I am never stuck |
| Role | User |
| Platform | Web (desktop and mobile) |
| App map | Figma, Dashboard (no subscription branch) |
| UI | TBD |
Acceptance criteria
- When the trial ends without payment or the plan lapses, then the user can still sign in and see all codes and statistics.
- Creating, editing, bulk creation and activating codes open the upgrade window.
- All dynamic codes show as Paused.
- The user can still download a paused code, with a note that it shows the "not available" page until a plan is active.
- When the user pays, then the codes are active again with no reprint.
Not decided yet
- What scanners see after the trial ends (a paused page naming the business, or "expired"): with the client. The estimate assumes the paused page.
- Whether there is a free "basic" level where static codes keep working: with the client; built as a switchable setting.
▸ Traceability
  F-33 · F-31 · QR-U-31 · A-13, A-14 · BRL-03, BRL-04 · SRS-Q-01, Q-07 · B-1 · W-1, W-3
---
## [User] - Plans and billing - manage the plan, card and invoices
| User story | As a user I want one place for my plan and invoices so that billing is never a mystery |
| Role | User |
| Platform | Web (desktop and mobile) |
| App map | Figma, Plans and billing (active subscription) |
| UI | TBD |
Acceptance criteria
- Plans and billing shows: current plan, auto-renewal, valid until, next invoice.
- Upgrade / Downgrade: pick another plan and pay or get credited. A smaller plan never switches off live codes.
- Manage billing: update the card and the billing address.
- Orders history with invoice PDFs to download.
Not decided yet
- Proration rules when changing plans: with the client.
▸ Traceability
  F-35 · QR-U-33 · BRL-12 · Figma 8045:3051
---
## [User] - Plans and billing - cancel the plan
| User story | As a user I want to cancel in the app so that I stay in control of what I pay |
| Role | User |
| Platform | Web (desktop and mobile) |
| App map | Figma, Plans and billing (cancel plan) |
| UI | TBD |
Acceptance criteria
- When the user chooses Cancel plan, then a window asks for a reason (optional), with Cancel and Keep plan.
- At most one optional retention offer is shown (for example a discount), with Activate discount and Cancel anyway.
- When the user cancels, then the plan shows Canceled with its end date; no further charge is made; after the end date the account works as described in "work without an active plan".
- No contact with support is needed.
▸ Traceability
  F-36 · QR-U-34 · A-12 · BRL-15 · Figma 8045:3051 (Discount suggestion, Activate discount)
---
## [User] - Plans and billing - fix a failed payment
| User story | As a user I want to know when a payment fails so that my codes do not stop without warning |
| Role | User |
| Platform | Web + email |
| App map | Not drawn in Figma |
| UI | TBD |
Acceptance criteria
- When a renewal payment fails, then the user gets an email and sees a banner in the app with a link to update the card.
- Payment is retried automatically during the retry period.
- When the user fixes the card in time, then nothing else changes.
- When the retry period ends unpaid, then the account works as described in "work without an active plan".
Not decided yet
- Length of the retry period: Recurly settings, with the client.
▸ Traceability
  F-37 · QR-U-35 · ✅ brief §4 · not drawn (C-4)
