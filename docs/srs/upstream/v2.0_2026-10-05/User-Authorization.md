# [User] - Authorization
Stories on this page:
- [User] - Authorization - sign up with email and password
- [User] - Authorization - confirm the email
- [User] - Authorization - sign up or sign in with Google
- [User] - Authorization - sign in with email and password
- [User] - Authorization - reset the password
- [User] - Authorization - sign out
Related pages: [User] - Onboarding and trial · [System] - Global rules (emails).
---
## [User] - Authorization - sign up with email and password
| User story | As a visitor I want to create an account with my email so that I can keep and manage my codes |
| Role | User |
| Platform | Web (desktop and mobile) |
| App map | Figma, Onboarding (Sign up) |
| UI | TBD |
Acceptance criteria
- When the visitor opens Sign up, then the screen shows:
  - Email (required, email format)
  - Password (required)
  - Confirm password (must match)
  - I agree to the Terms and Conditions checkbox (required; the link opens the terms in a new tab)
- Sign up stays disabled until the form is valid.
- When the email is already registered, then the visitor is told so and offered Log in and Forgot password, with nothing else revealed about that account.
- When the form is valid and the visitor presses Sign up, then the account is created and the confirmation step opens (next story).
- The screen also offers Sign up with Google and I have an account (to Log in).
Not decided yet
- Password rules (length, characters): Denys's call.
▸ Traceability
  F-30 · QR-U-03 · Figma 8055:3551 · SRS-Q-10 (password rules) · ✅ brief §4
---
## [User] - Authorization - confirm the email
| User story | As a new user I want to confirm my email so that my account can always be recovered |
| Role | User |
| Platform | Web (desktop and mobile) |
| App map | Figma, Onboarding (Email confirmation) |
| UI | TBD |
Overview
An email sign-up is complete only after the email is confirmed. This prevents accounts nobody can recover because of a typo. Google sign-up skips this step because Google has already verified the address.
Acceptance criteria
- When the account is created, then a Confirm your email screen shows the address, with Resend and Change email.
- A confirmation email is sent through Customer.io.
- Resend is available again after a short wait.
- Change email lets the user fix a typo and sends a new email.
- When the user opens a valid link, then the email is confirmed, the 14-day trial starts and the welcome window opens.
- When the link is expired or already used, then the user is offered a new one.
- The step cannot be skipped.
Not decided yet
- Whether confirmation is also a legal requirement: with Christian and Oleksandra.
▸ Traceability
  F-30 · QR-U-03 · DS-07 · BRL-40 · Figma 8055:3551 (post-sync canvas) · SRS-Q-28
---
## [User] - Authorization - sign up or sign in with Google
| User story | As a visitor I want to use my Google account so that I skip the password |
| Role | User |
| Platform | Web (desktop and mobile) |
| App map | Figma, Onboarding and Log in |
| UI | TBD |
Acceptance criteria
- When the user presses Sign up with Google (or Sign in with Google), then the Google window opens.
- When Google returns a verified account that is new to QR.CA, then the account is created, the trial starts and the welcome window opens. No confirmation email is sent.
- When the Google account already exists in QR.CA, then the user is signed in and lands on the dashboard.
▸ Traceability
  F-30 · QR-U-03, QR-U-04 · Figma 8040:1233
---
## [User] - Authorization - sign in with email and password
| User story | As a user I want to sign in so that I get to my codes |
| Role | User |
| Platform | Web (desktop and mobile) |
| App map | Figma, Log in |
| UI | TBD |
Acceptance criteria
- When the user opens Log in, then the screen shows:
  - Email
  - Password
  - Sign in, Forgot password, Sign in with Google, I don't have an account
- When the email and password are correct, then the user lands on the dashboard.
- When they are wrong, then one message says so without saying which field was wrong.
- When there are repeated failed attempts, then further attempts are slowed down.
Not decided yet
- The threshold for slowing down attempts and the session length: Denys's call.
▸ Traceability
  F-30 · QR-U-04 · Figma 8055:3363 · SRS-Q-16
---
## [User] - Authorization - reset the password
| User story | As a user I want to reset a forgotten password so that I can get back into my account |
| Role | User |
| Platform | Web (desktop and mobile) |
| App map | Figma, Password restoration |
| UI | TBD |
Overview
The reset uses a one-time code sent by email (not a link, not SMS).
Acceptance criteria
- When the user enters an email on Password restoration, then they always see the same Enter the code step, whether or not the email is registered.
- When the email is registered, then a one-time code is emailed (through Customer.io).
- Resend code becomes available after 60 seconds; a new code replaces the old one.
- When the code is correct, then the user sets a new password twice and presses Save; all other sessions are signed out and the user returns to Log in with a success message.
- When the code is wrong or expired, then the user is told so and can retry or resend; after too many attempts the flow starts again.
- Back to log in is available on every step.
Not decided yet
- How long the code is valid (proposed 10 minutes) and how many attempts (proposed 5): Denys's call.
Technical notes → Better Auth in NestJS; emails through Customer.io (Denys's technical document).
▸ Traceability
  F-30 · QR-U-05 · A-11 · Figma 8067:2887 · Slack 2026-10-05 (Denys: email only, Better Auth, Customer.io)
---
## [User] - Authorization - sign out
| User story | As a user I want to sign out so that nobody else uses my account on this device |
| Role | User |
| Platform | Web (desktop and mobile) |
| App map | Figma, Sidebar (account menu) |
| UI | TBD |
Acceptance criteria
- When the user chooses Log out in the account menu, then the session ends and the home page opens.
▸ Traceability
  F-30 · QR-U-04 · Figma 8045:3479
