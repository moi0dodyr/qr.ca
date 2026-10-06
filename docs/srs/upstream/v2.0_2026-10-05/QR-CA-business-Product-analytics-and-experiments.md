# [QR.CA business] - Product analytics and experiments
Stories on this page:
- [QR.CA business] - Product analytics and experiments - track the funnel in Amplitude
- [QR.CA business] - Product analytics and experiments - change key steps with feature flags
Not in V1: the A/B testing framework itself.
> This is the client's own analytics about how people use QR.CA, not the owner's statistics about their codes (see [User] - Statistics). Mixing the two is what made the old documents confusing.
---
## [QR.CA business] - Product analytics and experiments - track the funnel in Amplitude
| User story | As the founder I want to see where visitors drop off on the way to paying so that I can improve the product |
| Role | QR.CA business (the client) |
| Platform | Web, back end |
| App map | — |
| UI | — |
Overview
The client asked for Amplitude by name; the aim is to run A/B tests on the funnel.
Acceptance criteria
- These events are sent to Amplitude, from the front end and the back end: first visit, first code made on the home page, sign-up, email confirmed, first download, first scan, paywall shown, upgrade, cancellation.
- No scanner is identified in these events.
Technical notes → event names are in the event taxonomy (KB event-taxonomy.md).
▸ Traceability
  F-45 · QR-A-05 · ✅ brief §3, C-2 · Slack 2026-10-05 (Denys: Amplitude, the client wants A/B tests)
---
## [QR.CA business] - Product analytics and experiments - change key steps with feature flags
| User story | As the founder I want to change onboarding and paywall steps without a release so that I can test what converts |
| Role | QR.CA business (the client) |
| Platform | Web |
| App map | — |
| UI | — |
Acceptance criteria
- Onboarding, type selection, creation steps, templates, the paywall and upgrade prompts can be switched or changed with feature flags, without a back-end release.
- The A/B testing framework itself comes after launch, once there is traffic.
▸ Traceability
  F-58 · ✅ brief §6
