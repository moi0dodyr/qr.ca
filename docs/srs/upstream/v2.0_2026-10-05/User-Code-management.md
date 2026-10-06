# [User] - Code management
Stories on this page:
- [User] - Code management - edit a code without reprinting
- [User] - Code management - pause and reactivate a code
- [User] - Code management - duplicate a code
- [User] - Code management - delete a code
- [User] - Code management - move a code to Archive and restore it
- [User] - Code management - organise codes in folders
Related pages: [User] - Dashboard · [User] - Code creation · [User] - Code not available.
---
## [User] - Code management - edit a code without reprinting
| User story | As a user I want to change what my code opens so that printed material stays up to date |
| Role | User |
| Platform | Web (desktop and mobile) |
| App map | Figma, Edit QR code |
| UI | TBD |
Overview
This is why dynamic codes exist. The printed code stays the same; only what it opens changes. Static codes cannot be edited after printing (their content is in the pattern), so for them Edit only changes the name, folder and tags.
Acceptance criteria
- When the user opens Edit, then they can change four blocks in any order: Content, Code style, Page (for multi-link and vCard) and Settings. Each block has the same fields as in [User] - Code creation.
- When the user saves a change of content, then the next scan opens the new destination; the code and its printed pattern do not change; a message says no reprint is needed.
- When the user changed the code's look, then the new file is offered for download, with a note that codes already printed keep working.
- Edits are unlimited on every plan, trial included.
- When the user presses Cancel with unsaved changes, then a confirmation offers Discard changes or Close.
Technical notes → a saved change must reach the redirect within seconds (cache invalidation; Denys's technical document).
▸ Traceability
  F-14 · QR-U-23 · BRL-01, BRL-10 · Figma 8045:2391 · ✅ brief §2
---
## [User] - Code management - pause and reactivate a code
| User story | As a user I want to switch a code off and on so that I control when it works |
| Role | User |
| Platform | Web (desktop and mobile) |
| App map | Figma, Dashboard (Pause / Activate) |
| UI | TBD |
Acceptance criteria
- A code is either Active or Paused.
- When the user chooses Pause and confirms, then the code stops opening its destination and a success message shows. Anyone who scans it sees a friendly "not available right now" page (see [User] - Code not available).
- When the user chooses Activate and confirms, then the code opens its last destination again.
- Pause applies to dynamic codes only.
Not decided yet
- Whether the user can write the message shown on the paused page: proposed, nice to have.
▸ Traceability
  F-15 · QR-U-24 · DS-02 · BRL-05 · Figma 8045:3708
---
## [User] - Code management - duplicate a code
| User story | As a user I want to copy a code's set-up so that I do not rebuild similar codes from scratch |
| Role | User |
| Platform | Web (desktop and mobile) |
| App map | Figma, Dashboard (Duplicate) |
| UI | TBD |
Acceptance criteria
- When the user chooses Duplicate, then a full copy is created (content, style, page, settings) named "Copy of …".
- The copy has its own code and its own short link, so it prints as a different code; it opens the same destination until the user changes it.
- The copy starts with zero scans; changes to the copy never affect the original.
Not decided yet
- Whether two identical, unchanged copies need a safeguard, and how statistics and the safety check treat them: Denys's call.
▸ Traceability
  F-16 · QR-U-25 · DS-01 · SRS-Q-27
---
## [User] - Code management - delete a code
| User story | As a user I want to remove codes I no longer need so that my list stays tidy |
| Role | User |
| Platform | Web (desktop and mobile) |
| App map | Figma, Dashboard (Delete) |
| UI | TBD |
Acceptance criteria
- When the user chooses Delete and confirms, then a message with Undo shows for a few seconds; Undo restores the code as it was.
- After that, anyone who scans the code sees a "no longer available" page.
- A deleted code's short link is never given to another code.
Not decided yet
- Whether the scans of a deleted code stay in the account totals: Denys's call.
▸ Traceability
  F-16 · QR-U-25 · BRL-01 · SRS-Q-14
---
## [User] - Code management - move a code to Archive and restore it
| User story | As a user I want to put codes I no longer use into an Archive so that my working list stays short |
| Role | User |
| Platform | Web (desktop and mobile) |
| App map | Figma, Archive and Dashboard (Move to Archive) |
| UI | TBD |
Overview
Archive is a folder that is always in the sidebar, not a third status. Moving a dynamic code there pauses it.
Acceptance criteria
- When the user chooses Move to Archive, then a confirmation says clearly that the code will be paused and scanners will see the "not available" page. On confirm, the code is paused and moved.
- The Archive folder lists archived codes with Edit, Analytics, Download, Duplicate, Activate, Delete. Their scan history stays available.
- When the user chooses Activate, then they pick the folder the code returns to (default: All QR codes) and the code becomes Active again.
- When the user has no active plan, then Edit, Download, Duplicate and Activate open the upgrade window; Analytics and Delete still work.
Not decided yet
- What a static code does in Archive (it cannot be paused): with the client.
- Whether a final "archived" status is needed later: decided from usage.
▸ Traceability
  F-18 · QR-U-27 · DS-02 · BRL-38 · Figma 8053:2392, 8070:2711, 8139:14187 · SRS-Q-07, SRS-Q-26
---
## [User] - Code management - organise codes in folders
| User story | As a user I want folders and tags so that I group codes by location, campaign or client |
| Role | User |
| Platform | Web (desktop and mobile) |
| App map | Figma, Sidebar (Add folder) |
| UI | TBD |
Acceptance criteria
- When the user chooses Add folder, enters a name, optionally picks codes and presses Create, then the folder appears in the sidebar with those codes.
- When the user chooses Move to folder on a code, picks a folder and saves, then the code moves.
- When the user opens a folder, then only its codes are listed, with the same actions as the dashboard.
- Tags are set on the code (creation step 6 or Edit) and used in the dashboard filters.
- When a folder is deleted, then its codes go back to All QR codes; they are never deleted with it.
Not decided yet
- Renaming and deleting folders are not drawn yet: design.
▸ Traceability
  F-17 · QR-U-13, QR-U-26 · Figma 8045:3479
