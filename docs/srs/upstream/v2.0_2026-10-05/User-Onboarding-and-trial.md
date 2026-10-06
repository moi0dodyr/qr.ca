# [User] - Onboarding and trial
Stories on this page:
- [User] - Onboarding and trial - see the welcome window
- [User] - Onboarding and trial - see how many trial days are left
Related pages: [User] - Plans and billing (paying, and what happens when the trial ends) · [System] - Global rules (emails).
---
## [User] - Onboarding and trial - see the welcome window
| User story | As a new user I want to understand my trial and my next step straight away so that I get value before it ends |
| Role | User (trial) |
| Platform | Web (desktop and mobile) |
| App map | Figma, Onboarding (welcome pop-ups) |
| UI | TBD |
Overview
After sign-up the 14-day trial starts without a card. A welcome window opens. Which one depends on whether the user made a code on the home page before signing up.
Acceptance criteria
- When the user made a code on the home page, then Welcome · Download your QR code opens with Download QR code, the trial notice and Close (to the dashboard).
- When the user did not, then Welcome · Create your first QR code opens with Create QR code, the trial notice and Close.
- The trial notice states: the trial length in days, what is included, the end date, and what happens to the codes after that date.
- The window offers Add payment details (to Plans and billing). Adding a card is optional; the trial never needs one.
Not decided yet
- The wording about what happens to codes after the trial: depends on the client's decision about the end of the trial (see [User] - Plans and billing).
- An optional "type of business" question in onboarding: proposed, not decided.
▸ Traceability
  F-31 · QR-U-06, QR-U-31 · ✅ C-6 (14 days, no card) · Figma 8055:3551 · W-1, W-2 · SRS-Q-01
---
## [User] - Onboarding and trial - see how many trial days are left
| User story | As a trial user I want to always see how long my trial has left so that nothing surprises me |
| Role | User (trial) |
| Platform | Web (desktop and mobile) |
| App map | Figma, Sidebar (trial banner) |
| UI | TBD |
Overview
The client asked for exactly this, at the bottom left, "for transparency".
Acceptance criteria
- When a trial user opens any page of the app, then a banner at the bottom of the sidebar shows the days left, the end date, what happens to the codes, and Upgrade.
- When the user presses Upgrade, then the upgrade window opens (see [User] - Plans and billing).
- Reminder emails go out before the trial ends (proposed: 3 days and 1 day before).
Not decided yet
- The banner wording ("your codes will expire" or "will pause"): with the client.
▸ Traceability
  F-32 · QR-U-30 · ✅ C-1.3 · Figma 8045:3479 · SRS-Q-01
