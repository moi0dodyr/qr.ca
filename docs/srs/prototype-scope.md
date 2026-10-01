# Prototype scope

**Status:** Draft. Waiting on the Figma wireflows link and the rest of the SRS (Parts 2b and 2c, Features 4a–5).

## What this repo is

A **front-end-only, clickable design prototype** of QR.CA (decision [0001](../decisions/0001-prototype-repo-and-upstream-docs.md)). It shows how screens and flows look and behave, using real QR rendering. It is **not** the production app: architecture, stack and data model belong to Denys Melnyk and are decided elsewhere.

That means:
- **No backend.** Accounts, the redirect service, billing (Recurly, Stripe), email (Customer.io), analytics (Amplitude), safety checks and the admin console are **faked or shown as static states**.
- **Real where it's cheap and matters to the design.** That covers QR encoding and styling, and payload formats (vCard, Wi-Fi, tel:, URL) that a phone can actually scan.
- **Fake data is labelled.** Anything that would come from a server lives in an obvious mock module, so nobody mistakes it for working logic.
- **SRS rules still apply to what's on screen.** Labels, states, limits and copy should match SRS v1.0, even when the behaviour behind them is faked.

## Coverage

Legend: ✅ built · ◐ partly built · ⬜ planned for the prototype · — out of the prototype

| Area | Stories | Prototype | Notes |
| --- | --- | --- | --- |
| E1 · Home-page generator | QR-U-01, QR-U-02 | ◐ | The current repo. Gaps are listed in [`prototype-gaps.md`](./prototype-gaps.md) |
| E2 · Sign-up, log-in, OTP reset, welcome | QR-U-03…06 | ⬜ | Screens and states only, with fake auth |
| E3 · Creation wizard (owner app) | QR-U-07…21 | ⬜ | Main candidate after E1 |
| E4 · Dashboard, edit, folders, Archive | QR-U-22…27 | ⬜ | Mock code list |
| E0 · Owner web app shell | QR-U-42 | ⬜ | Sidebar and its account-state variants |
| E5–E9 · Statistics, trial and billing, scanner pages, API | QR-U-28…44 | ⬜ / — | To be decided once Part 2b arrives |
| Admin console | QR-A-01…06 | — | Not drawn in Figma (C-4) |

This table is a proposal. Each row becomes in scope only when its task brief is confirmed.
