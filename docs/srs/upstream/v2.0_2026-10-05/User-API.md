# [User] - API
Stories on this page:
- [User] - API - create and revoke API keys
- [User] - API - let own systems manage codes through the API
What this is. QR.CA opens its own API so that a customer's systems (an online shop, a CRM, a print workflow) can create and manage their QR codes automatically, without anyone using the web app. Example: a shop with 500 products creates a code for each new product the moment it is added to the catalogue. The client asked for it for the largest customers. It is the same as the web app, for programs instead of people.
---
## [User] - API - create and revoke API keys
| User story | As a user with my own systems I want an API key so that my developer can connect them to QR.CA |
| Role | User |
| Platform | Web (desktop and mobile) |
| App map | Figma, APIs |
| UI | TBD |
Acceptance criteria
- The APIs screen shows:
  - the user's API keys, with Create key, Copy and Revoke
  - Account ID with Copy
  - Usage limit of the plan
  - a link to the API documentation
- A new key is shown once, can be named, and can be revoked at any time.
Not decided yet
- Which plans include the API: with the client.
▸ Traceability
  F-40 · QR-U-40 · Figma 8045:3377 (shows "Org ID"; it is "Account ID", there are no organisations in V1) · SRS-Q-08
---
## [User] - API - let own systems manage codes through the API
| User story | As a developer I want to create and manage codes by API so that our system does it automatically |
| Role | User (their developer) |
| Platform | API |
| App map | — |
| UI | — |
Acceptance criteria
- With a valid key, the system can create, read, update, pause and delete the account's codes, and read their scan totals.
- A key never reaches another account's data.
- The plan's limit on codes applies exactly as in the web app.
- A revoked or invalid key is refused.
- Calls above the rate limit are refused with a "retry after" signal.
Technical notes → endpoints, versioning and the documentation tool are Denys's (technical document).
▸ Traceability
  F-40 · QR-U-40 · DS-09 · ✅ C-2 #1
