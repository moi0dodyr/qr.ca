# [System] - Subscriptions engine (Recurly + Stripe)
Stories on this page:
- [System] - Subscriptions engine - keep plans, trials and invoices in Recurly
- [System] - Subscriptions engine - update accounts and codes from billing events
- [System] - Subscriptions engine - send usage and segments to Recurly and Customer.io
Related pages: [User] - Plans and billing · [Admin] - Subscriptions.
---
## [System] - Subscriptions engine - keep plans, trials and invoices in Recurly
| User story | As QR.CA we want subscriptions handled by a billing system so that nobody manages them by hand |
| Role | System |
| Platform | Back end |
| App map | — |
| UI | — |
Acceptance criteria
- Recurly holds plans, trials, invoices and the retries of failed payments; Stripe is the payment gateway.
- Prices are in Canadian dollars, monthly and yearly, with tax by province.
- Card data never touches QR.CA systems.
Technical notes → Denys's technical document, billing.
▸ Traceability
  F-43 · ✅ brief §4, C-2, C-5 (client's choice) · SRS §12.1
---
## [System] - Subscriptions engine - update accounts and codes from billing events
| User story | As QR.CA we want accounts to follow payments automatically so that codes pause and resume at the right time |
| Role | System |
| Platform | Back end |
| App map | — |
| UI | — |
Acceptance criteria
- Recurly sends events (payment failed, renewed, canceled, expired, new invoice); QR.CA updates the account and its codes.
- Receiving the same event twice changes nothing the second time.
- A lapse pauses all the account's dynamic codes; a renewal makes them active again. Codes paused or archived by the owner stay as they were.
▸ Traceability
  F-43 · F-33 · QR-U-35 · SRS §12.2, §12.4
---
## [System] - Subscriptions engine - send usage and segments to Recurly and Customer.io
| User story | As QR.CA we want billing and emails to react to what customers do |
| Role | System |
| Platform | Back end |
| App map | — |
| UI | — |
Acceptance criteria
- QR.CA sends: account created, trial started / ending / ended, subscription changed, code created, first scan, scan thresholds crossed.
- Usage goes to Recurly (for usage-based billing), segments go to Customer.io (for emails).
- Sending runs in the background, retries on failure and never slows the redirect.
- These are not webhooks for customers (those are after launch).
▸ Traceability
  F-47 · ✅ C-5 ("we absolutely need webhooks", for Recurly and Customer.io) · SRS §12.4
