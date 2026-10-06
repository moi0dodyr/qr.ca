# [System] - Code states
Stories on this page:
- [System] - Code states - one state model for every code
---
## [System] - Code states - one state model for every code
| User story | As QR.CA we want one clear rule for what a code does in each situation so that a printed code never breaks |
| Role | System |
| Platform | Back end |
| App map | Figma, Basic assumptions |
| UI | — |
Overview
The user sees two statuses, Active and Paused. Behind them the system tracks why a code does not open its destination, because each reason shows a different page to scanners.
Acceptance criteria
- States behind the scenes: active · paused by the owner · paused because archived · paused because the account has no plan · disabled by the QR.CA team · deleted.
- When several apply, the strongest wins: disabled > deleted > paused (owner or archive) > no plan > active.
- A code's short link is never given to another code, even after deletion.
- Static codes have no state on the server: their content is in the pattern.
▸ Traceability
  F-15 · F-18 · F-23 · F-33 · F-50 · DS-02 · BRL-01, BRL-38 · SRS §12.2 · Figma 8079:3007
