# [User] - Integrations
Stories on this page:
- [User] - Integrations - add Google Tag Manager, GA4 and Meta Pixel to hosted pages
Not in V1: webhooks to the user's own systems.
---
## [User] - Integrations - add Google Tag Manager, GA4 and Meta Pixel to hosted pages
| User story | As a marketer I want my own tags on my hosted pages so that scans reach my own analytics and ads |
| Role | User |
| Platform | Web (desktop and mobile) |
| App map | Figma, GTM |
| UI | TBD |
Overview
This is optional and separate from QR.CA's own statistics. The tags load only on the user's hosted pages (links page, business card, review page), never on the redirect, so scanning speed is not affected.
Acceptance criteria
- One Integrations screen with three fields:
  - Google Tag Manager container ID
  - Google Analytics 4 measurement ID
  - Meta Pixel ID
- Each ID is checked for the right format; Save shows a success message.
- A link to the documentation explains where to find each ID.
- When a scanner opens one of the user's hosted pages, then the saved tags load on that page.
Not decided yet
- Consent for these tags for visitors from Quebec: Denys and legal.
- The Figma screen has only the GTM field; GA4 and Meta Pixel fields are to be added: design.
▸ Traceability
  F-41 · F-42 · F-48 (later) · QR-U-41 · A-9 + post-sync decision · Figma 8045:3399 · SRS-Q-18 · ✅ C-2 #2
