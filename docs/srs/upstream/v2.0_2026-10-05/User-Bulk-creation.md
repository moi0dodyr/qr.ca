# [User] - Bulk creation
Stories on this page:
- [User] - Bulk creation - upload a spreadsheet of codes
- [User] - Bulk creation - check the rows before anything is created
- [User] - Bulk creation - style the batch and download all codes
---
## [User] - Bulk creation - upload a spreadsheet of codes
| User story | As a user I want to create many codes from one spreadsheet so that I do not make them one by one |
| Role | User |
| Platform | Web (desktop first; works on phone) |
| App map | Figma, Bulk creation |
| UI | TBD |
Overview
One design and one set of settings, applied to a table of different contents: each row becomes one code. For example, a code per product or per shop, each with its own link. The client asked for this for the largest customers.
Acceptance criteria
- When the user opens Bulk creation, then step 1 asks for the code type. Available types: Website, App store link and the static types (email, SMS, phone call, plain text). Page types (multi-link, vCard) are not available in bulk.
- When the user picks a type, then they can Download template (a CSV with the columns for that type).
- When the user uploads the filled CSV, then step 3 opens (next story).
Not decided yet
- Which bulk use cases V1 supports beyond the basic one: Christian.
▸ Traceability
  F-11 · QR-U-17 · DS-10 · ✅ C-2 #1 · Figma 8045:2390 · SRS-Q-29
---
## [User] - Bulk creation - check the rows before anything is created
| User story | As a user I want to see which rows are wrong before codes are created so that I fix the file first |
| Role | User |
| Platform | Web |
| App map | Figma, Bulk creation (Check what data will be loaded) |
| UI | TBD |
Acceptance criteria
- The check screen shows the number of valid rows and each invalid row with its reason.
- It also shows how many rows fit the per-upload limit and the plan's limit on codes, before anything is created.
- The user can Confirm (create the valid rows) or Upload new CSV.
- Every link in the file goes through the safety check.
Not decided yet
- The per-upload limit and the plan limits (numbers): with the client.
▸ Traceability
  F-11 · F-46 · QR-U-17 · DS-09 · SRS-Q-13, Q-08
---
## [User] - Bulk creation - style the batch and download all codes
| User story | As a user I want one design for the whole batch and all files in one download so that bulk is as easy as one code |
| Role | User |
| Platform | Web |
| App map | Figma, Bulk creation (steps 4–5) |
| UI | TBD |
Acceptance criteria
- Step 4 is the code style step from [User] - Code creation (colours, logo, shapes, frame, template, scan check), applied to every code in the batch.
- Step 5 sets the folder, tags and description for the whole batch.
- When the user presses Save, then the codes are created in the background with progress, and a message states how many were created.
- Download gives all codes in one archive.
- When the batch would pass the plan's limit, then the upgrade window opens.
▸ Traceability
  F-11 · QR-U-17 · Figma 8045:2390
