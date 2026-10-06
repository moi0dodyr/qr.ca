# [User] - Dashboard
Stories on this page:
- [User] - Dashboard - see the list of codes
- [User] - Dashboard - search, filter and sort the codes
Related pages: [User] - Code management (the row actions) · [User] - Code creation.
---
## [User] - Dashboard - see the list of codes
| User story | As a user I want to see all my codes in one list so that I can manage them |
| Role | User |
| Platform | Web (desktop and mobile) |
| App map | Figma, Dashboard |
| UI | TBD |
Acceptance criteria
- The header has Create QR code and Bulk creation.
- Each code in the list shows:
  - Name
  - Type (and whether it is dynamic or static)
  - Status: Active or Paused
  - Scans (for dynamic codes)
  - a not healthy label when the code failed the scan check
  - row actions: Edit, Analytics, Download, Move to folder, Move to Archive, Duplicate, Pause or Activate, Delete (described in [User] - Code management)
- Codes in Archive are not in this list.
- When the user has no codes, then an empty state leads to Create QR code.
- When the user has no active plan, then all codes show as Paused; Create, Bulk creation, Edit and Activate open the upgrade window; Analytics, Download, Move, Duplicate and Delete still work.
▸ Traceability
  F-13 · QR-U-22 · DS-02 (two statuses), DS-05 (not healthy) · Figma 8045:3708 (two branches: with and without a plan)
---
## [User] - Dashboard - search, filter and sort the codes
| User story | As a user I want to find a code quickly so that I do not scroll through all of them |
| Role | User |
| Platform | Web (desktop and mobile) |
| App map | Figma, Dashboard (filters and sorting) |
| UI | TBD |
Acceptance criteria
- Search by name; the list updates as the user types.
- Filters: type, status, folder, tag.
- Sort: newest, name, most scanned.
- Clear resets search and filters.
▸ Traceability
  F-13 · QR-U-22 · Figma 8045:3708 (Filters & Sorting, post-sync)
