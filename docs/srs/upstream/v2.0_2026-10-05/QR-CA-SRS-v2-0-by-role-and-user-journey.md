# QR.CA — SRS v2.0 (by role and user journey)
[callout]
  Internal · 2026-10-05 · draft for review. Same scope and decisions as SRS v1.0, reorganised by role and user journey. Acceptance criteria live on the pages of the Product Backlog (v2). Nothing goes to the client without Christian's sign-off.
Version 2.0 · 2026-10-05 · internal draft for review
Same scope and the same decisions as version 1.0 (the estimation baseline of 2026-09-30). What changed is the shape: requirements are grouped by role and listed in the order a person meets the product, the text is plainer, and reference codes have moved to one table at the end (Appendix A). Acceptance criteria live on the feature pages of the Product Backlog in Notion, which this document links to, so there is one place to keep them current.
Nothing in this document goes to the client without Christian's sign-off. Hours are not in this document; they are in the estimate workbook, in the same order. Architecture is Denys Melnyk's: section 11 lists the constraints the system has to meet, not how it meets them.
Product Backlog: [QR.CA — Product Backlog (v2, by role and user journey)]
---
# PART 1 — BUSINESS CONTEXT
## 1. Version control
| Contributor | Date | Version | Description |
| Christian Kapuzo (BA) | 2026-09-25 | 0.1 | First basic SRS from the client brief, the client's comments, the discovery pages and the Figma wireflows |
| Christian Kapuzo (BA) | 2026-09-30 | 0.2 | Decisions from the BA and design sync |
| Christian Kapuzo (BA) | 2026-09-30 | 1.0 | Baseline for estimation: reconciled with the team's feature list and Oleg's flows |
| Christian Kapuzo (BA) | 2026-10-05 | 2.0 | Reorganised by role and user journey; plainer text; codes moved to Appendix A; acceptance criteria kept on the Notion feature pages. Adds the admin side of subscriptions and accessibility, both without hours yet. The person scanning a code is part of [User]; global rules are a [System] page. Scope otherwise unchanged |
## 2. Introduction
This document describes what the first version of QR.CA must do. QR.CA is a self-serve web product: a Canadian small business creates a QR code, prints it, and can change what the code opens later without reprinting. The document covers the public site, sign-up, creating and managing codes, the pages behind codes, scan statistics, the trial and paid plans, account settings, what a person sees after scanning, and the internal tools the QR.CA team needs. It does not cover visual design, architecture or hours.
## 3. About the project
| Location | Canada. English-speaking Canada first; Quebec later |
| Company | Founder-led start-up, pre-launch. The qr.ca domain is the main asset |
| Platform | Web: marketing site and web app, on phone and desktop. No native apps |
| Product | Dynamic QR codes and the small web pages behind them, sold as a self-serve subscription |
| Compliance | Canadian privacy law (PIPEDA), anti-spam law (CASL), sales taxes (GST / HST / QST). Quebec privacy and language law deferred with the Quebec market |
## 4. Business problem
| Problem | Impact |
| A printed QR code cannot be changed | When a menu, price or address changes, the business reprints |
| Many small businesses have no web page worth pointing a code at | The code has nothing useful to open, so nobody pays for it |
| Existing tools are either basic or expensive and confusing, with unclear trial terms | Customers overpay, or leave angry when a printed code stops working |
| A business cannot tell whether anyone scans its codes | Print budgets are spent blind |
| A trusted redirect service attracts scammers | One misused code can damage the qr.ca name |
## 5. Goals and success criteria
| Goal | Success criteria |
| A new visitor gets a working, printable code quickly | First visit to downloaded code in under 10 minutes |
| Visitors become paying customers without talking to sales | Trial-to-paid conversion is measured from launch |
| A printed code keeps working | A code never shows a browser error; every state shows a deliberate page |
| The business sees whether its codes work | Every dynamic code shows scans, time, device and city within minutes |
| Misuse is stopped before it harms the brand | Every link is checked; the QR.CA team can switch off any code, and each switch-off is logged |
## 6. Stakeholders
| Name | Side | Role |
| Founder (al@qr.ca) | Client | Product direction, scope, pricing, sign-off |
| Christian Kapuzo | Phenomenon | Business analyst, workshop lead |
| Oleksandra Tucha | Phenomenon | Product strategy |
| Denys Melnyk | Phenomenon | Solution architect: architecture, stack, data model, estimate |
| Oleg Stepanchykov | Phenomenon | Design: wireflows |
| Ruslan Vashchenko | Phenomenon | Delivery |
| Anatolii Sakhno | Phenomenon | Delivery lead: estimate review, team |
| Anastasia Danylenko | Phenomenon | Account: all client communication |
## 7. Users and roles
User. Anyone who comes to qr.ca. Before signing up they are a visitor who can make and style a code on the home page. After signing up the same person owns codes and is on the trial, on a paid plan, or without a plan. A person who scans a printed code is also a user who is not signed in: they see the code's destination or a hosted page and never the app. Signing in and the subscription change what a user can do, not who they are. One person per account in V1.
Support admin and Super admin. The QR.CA team in the internal console. Support admins help customers and moderate codes; super admins can also manage admins, plans and limits, and see platform statistics.
QR.CA business. The client, as the reader of product analytics and the one running experiments.
System. Background behaviour with no screen: billing events, the rules that decide what a code does, and the global rules for the whole product.
| Area | User (not signed in) | User (signed in) | Support admin | Super admin |
| Home-page generator | Use | Use | — | — |
| Published pages behind codes (after a scan) | View | View | View | View |
| Own codes and pages behind them | — | Full | View | View |
| Own statistics | — | View | View | View |
| Plan and billing | — | Full | Support actions | Support actions |
| API keys and integrations | — | Full | View | View |
| Disable a code, review flagged links | — | — | Full | Full |
| Plans and limits, platform statistics, admin users | — | — | — | Full |
## 8. Scope
- A visitor makes and styles a code on the home page; downloading it needs a quick sign-up.
- Dynamic codes: website, PDF or file (also a restaurant menu as a PDF), a links page, a business card, an app-store link, a review code and a time-based redirect. They can be changed at any time without reprinting.
- Static codes: website, contact, email, SMS, call, text, Wi-Fi. They work without QR.CA but cannot be changed or tracked.
- QR.CA hosts simple phone-first pages for the links page and the business card, in English and French.
- Codes can be styled (colours, logo, shapes, frame), checked for scannability and downloaded as PNG, JPG, SVG, EPS or print-ready PDF, with no watermark.
- Codes can be created in bulk from a spreadsheet, organised in folders, paused, duplicated, archived and deleted.
- Every scan is counted without identifying the scanner.
- 14-day trial without a card, then monthly or yearly plans in Canadian dollars with sales tax.
- An API for customers' own systems; Google Tag Manager, GA4 and Meta Pixel on hosted pages.
- Links are checked for scams; the QR.CA team can support customers and switch off misused codes.
- Not in V1: teams, custom domains, payments on hosted pages, native apps, printing.
## 9. Phases
V1. A Canadian small business can use QR.CA end to end on its own: find it, make a code, sign up, trial, create and style codes, build the page behind a code, print, change it later, see scans, and pay. Around that: English and French, basic SEO, emails at the right moments, bulk creation, an API, and the internal tools.
Later. Canadian data hosting and Quebec consent tooling (client's decision); routing by location or scan count; password-protected codes; more dynamic types; scan-summary emails and export; customer webhooks; the A/B testing framework; teams, agencies, custom domains; native apps.
---
# PART 2 — REQUIREMENTS
The pages below hold Part 2.
[subpage] 10. Functional requirements, by role and user journey
[subpage] 11–16. System requirements, scope, risks, open questions, glossary
[subpage] Appendix A. Traceability
