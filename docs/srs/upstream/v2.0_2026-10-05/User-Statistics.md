# [User] - Statistics
Stories on this page:
- [User] - Statistics - see the statistics of one code
- [User] - Statistics - see the statistics across all codes
- [User] - Statistics - see guidance while a code has few scans
- [User] - Statistics - see a live map of scans (to confirm)
Not in V1: scan-summary emails; export and comparison with the previous period.
> This page is the user's own statistics about their codes. QR.CA's product analytics (Amplitude) is a different thing: see [QR.CA business] - Product analytics and experiments. The user's own GA4 / Meta Pixel: see [User] - Integrations.
---
## [User] - Statistics - see the statistics of one code
| User story | As a user I want to see how one code is scanned so that I know whether it works |
| Role | User |
| Platform | Web (desktop and mobile) |
| App map | Figma, Particular QR analytics |
| UI | TBD |
Overview
Real scan statistics are the one thing the client asked for beyond what the competitors offer. Scanners are never identified: unique visitors are counted with a daily anonymous fingerprint, and location stops at the city.
Acceptance criteria
- The page shows the code's details and actions at the top, then:
  - Total scans
  - Unique scans (one visitor per code per day)
  - Scans over time
  - Scans by time of day
  - Scans by device (device, operating system, browser)
  - Scans by country and city
- Filters: Period, Date range, Time range, Location. Every widget follows the filters.
- A scan shows up within a few minutes (proposed: 5).
- Link-preview bots (Slack, iMessage, WhatsApp) are not counted.
- The referrer is stored when present; there is no referrer widget in V1.
- Static codes have no statistics.
Technical notes → scans are recorded without slowing the redirect; event pipeline and geo database (Denys's technical document).
▸ Traceability
  F-25 · F-28 (later) · F-29 (later) · QR-U-28 · A-3, A-5 · BRL-22, BRL-26 · Figma 8045:2575 · ✅ brief §3 · Slack 2026-10-05 (Pavlyna: real statistics is the client's extra)
---
## [User] - Statistics - see the statistics across all codes
| User story | As a user I want totals across all my codes so that I see the whole picture |
| Role | User |
| Platform | Web (desktop and mobile) |
| App map | Figma, Analytics |
| UI | TBD |
Acceptance criteria
- Analytics in the sidebar opens the same widgets for all codes together, plus:
  - Top performing code
  - Most popular time
  - Most popular day of the week
- Filters: Folder, Code, Period, Date range, Time range, Location.
▸ Traceability
  F-26 · QR-U-29 · Figma 8045:3155
---
## [User] - Statistics - see guidance while a code has few scans
| User story | As a new user I want to be told what will appear here so that analytics never look broken |
| Role | User |
| Platform | Web (desktop and mobile) |
| App map | Not drawn in Figma |
| UI | TBD |
Acceptance criteria
- When a code has too few scans for a meaningful chart, then the page explains what will appear and how to get the first scans, instead of empty charts.
▸ Traceability
  F-27 · QR-U-28 · R-13 (a third of dynamic codes are never scanned)
---
## [User] - Statistics - see a live map of scans (to confirm)
| User story | As a user I want a map of where my codes are scanned so that I see activity as it comes in |
| Role | User |
| Platform | Web |
| App map | Not drawn in Figma |
| UI | TBD |
Acceptance criteria
- A map shows scans by city, refreshed every 15–30 seconds.
Not decided yet
- Whether the map is in the MVP at all: Christian and Denys (it is in Denys's estimate, not in the scope documents).
▸ Traceability
  Denys's estimate (live scan map, 18 h) · Slack 2026-10-05 (Denys: "if it goes into the MVP") · no SRS story
