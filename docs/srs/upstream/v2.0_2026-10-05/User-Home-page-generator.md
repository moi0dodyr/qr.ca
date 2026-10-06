# [User] - Home-page generator
Stories on this page:
- [User] - Home-page generator - see the landing page
- [User] - Home-page generator - create a QR code without an account
- [User] - Home-page generator - sign up to download the code
Related pages: [User] - Code creation (same steps, described in full there) · [User] - Authorization · [System] - Global rules (SEO).
---
## [User] - Home-page generator - see the landing page
| User story | As a visitor I want to understand what QR.CA does and start making a code straight away |
| Role | User (not signed in) |
| Platform | Web (desktop and mobile) |
| App map | Figma, Landing |
| UI | TBD |
Overview
The public home page. Its main part is the generator (next story). The rest of the page explains the product. The client has not specified the content beyond "like the competitors", and does not want to invest in SEO content before the MVP, so the sections below are a proposal.
Acceptance criteria
- The header has Log in and Sign up.
- The first screen is the generator (Create your QR code for free) with a live preview.
- Below it, proposed sections:
  - How it works
  - Features
  - QR types overview
  - Customizations overview
  - Pricing (plans in CAD)
  - FAQ
  - Footer (legal pages, contact)
- Every section is in English and French.
- When a signed-in user opens the home page, then the header shows Go to my codes instead of Log in.
Not decided yet
- Final list of landing sections and their content: with the client (the Figma landing page marks it "TBD").
- How much of the marketing site is in V1 now that the client postpones SEO content: with the client.
▸ Traceability
  F-01 · F-57 · F-62 (prices) · Figma 8045:3711 · Slack 2026-10-05 (Denys: generator + marketing pages; Oleksandra: proposed sections, no SEO content before MVP) · ⚪🟡
---
## [User] - Home-page generator - create a QR code without an account
| User story | As a visitor I want to make a QR code on the home page without signing up so that I see the product work before I commit |
| Role | User (not signed in) |
| Platform | Web (desktop and mobile) |
| App map | Figma, Landing (hero section) |
| UI | TBD |
Overview
A short version of code creation on the home page: type, content, design, with a live preview. It reuses the same components as the signed-in app, so the forms and rules are those of [User] - Code creation.
Acceptance criteria
- When the visitor chooses a type, enters content and picks a design, then the preview updates on every change.
- The visitor can use the same types and styling options as in [User] - Code creation.
- When no content has been entered, then Download is disabled.
- The visitor never has to give an email to see the preview.
- When the visitor leaves and comes back in the same browser, then the unsaved design may be restored from the browser.
▸ Traceability
  F-01 · F-07 · F-65 · QR-U-01 · Figma 8045:3711 · ✅ brief §6 (PLG loop)
---
## [User] - Home-page generator - sign up to download the code
| User story | As a visitor I want to get the code I just made, after a quick sign-up, so that I can use it |
| Role | User (not signed in) |
| Platform | Web (desktop and mobile) |
| App map | Figma, Landing (Code generated · Sign up to download) |
| UI | TBD |
Overview
There is no download without an account. The team chose this so every code belongs to an account from the start and nobody can claim someone else's code later.
Acceptance criteria
- When the visitor presses Download, then a window Code generated · Sign up to download opens with Sign up with email and Sign up with Google.
- When the visitor finishes sign-up (and confirms the email, for an email sign-up), then the code and its design are already in the new account and the welcome window offers the download (see [User] - Onboarding and trial).
- Nothing is stored on the server for an account that does not exist yet.
Not decided yet
- Oleg's idea of a small "download PNG preview" link without sign-up: waits for the client's reaction.
▸ Traceability
  F-01 · F-30 · QR-U-02 · DS-08 · Figma 8045:3711 · 🟡 team decision
