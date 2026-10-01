<!--
  UPSTREAM COPY. DO NOT EDIT.
  Source of truth: Christian Kapuzo's KB, 05_product/srs_v1.0_2026-09-30.md (Notion).
  Received 2026-10-01 (pasted by Oleg S). Internal: not for the client.
  This file is Part 1 plus the Part 2 introduction. Part 2a is in srs_v1.0_part-2a_epics-E0-E4.md.
  Parts 2b and 2c were not included. See ./README.md.
-->

# QR.CA MVP — SRS v1.0 (baseline for estimation, 2026-09-30)

**Version 1.0 · 2026-09-30 · Baseline for estimation (Denys Melnyk)**

<aside>
⚠️

**Internal. SRS v1.0: baseline for Denys Melnyk's estimate (2026-09-30).** Source of truth: `05_product/srs_v1.0_2026-09-30.md` in the local KB. Nothing here goes to the client, into Slack, shared Notion or Figma unless Christian signs off on that specific item. **No hours in this document** (Anatolii, Ruslan). Architecture is Denys Melnyk's: section 12 lists constraints, not a design. The previous version (v0.1, with Oleg's comments) is kept as a backup: BACKUP SRS v0.1.

</aside>

**Built from**

| Source | What it contributed | Confidence |
| --- | --- | --- |
| Client brief, 2026-09-01 | Scope, the five types, integrations, bilingual, responsive, SEO, experimentation | ✅ |
| Client's Notion comments C-1…C-7, 2026-09-12 | Trial model, pricing ladder, the "expire in…" banner, webhooks, API + CSV, integration list, redirect domain, executive analytics, Quebec deferred | ✅ |
| Notion *Initial Discovery* | Table-stakes feature set, what is optional for an MVP | ⚪ our research, published to the client |
| Figma *QR.ca – Wireflows*, read 2026-09-25 | Every owner-side screen and flow. Figma node IDs are cited on each story | ⚪ team work (Oleg S), **WIP** |
| Wireflows review | Coverage gaps, the five contradictions W-1…W-5, questions Q-W1…Q-W12 | ⚪ |
| `scope-map.md` · `decisions_2026-09-17.md` · `business-rules.md` | Feature IDs, MVP / post-MVP phase, recommended positions | ⚪ / ✅ as marked there |
| BA & Design sync, 2026-09-30 → decisions DS-01…DS-12 | v0.2 changes: statuses and Archive, static codes, email confirmation, no anonymous download, PDF menu, scannability override, bulk limits, duplicate, paused page, API vs web app | 🟡 team decisions (Christian, Oleksandra, Oleg) |
| Figma, read 2026-09-30 | Second pull: Archive action, subscription-state branches, bulk data check, OTP reset | ⚪ team work, WIP |

**How conflicts are resolved in this draft.** The client's words (✅) win over the wireflows. The wireflows win over our earlier recommendations on *how a screen works*. Where the wireflows and a recommendation disagree on *what the product does* (W-1…W-5), the requirement below states the recommended position and flags it ⚠️ with an open question in section 16. Nothing is resolved silently.

**What this supersedes.** `requirements-v1_generated.md` (v1.0, client-facing) was written before the client's 2026-09-12 comments were folded in. It still carries Canadian data residency and the Law 25 consent layer as launch requirements, and a free plan. This SRS uses the post-09-17 position. The v1.0 register stays untouched until Christian decides whether this draft replaces it.

---

# PART 1 — BUSINESS CONTEXT

## 1. Version Control

| Contributor | Date | Version | Description |
| --- | --- | --- | --- |
| Christian Kapuzo (BA) | 2026-09-25 | 0.1 | First basic SRS. Built from the client brief, the client's Notion comments, the Notion discovery pages and the Figma wireflows (WIP). Internal draft |
| Christian Kapuzo (BA) | 2026-09-30 | 0.2 | BA & Design sync with Oleksandra Tucha and Oleg Stepanchykov (DS-01…DS-12): owner web app vs Owner API named apart; static codes in V1; email confirmation at sign-up; sign-up to download; two statuses + Archive folder; PDF-only menu; scannability override with a label; bulk limits; duplicate semantics; friendly paused page. Also: currency and template questions |
| Christian Kapuzo (BA) | 2026-09-30 | 1.0 | **Baseline for estimation.** Reconciled with Oleksandra's *QR Master Features* and Oleg's flows (decisions A-1…A-16): page builder = Multi-Link + vCard; no watermark; JPG + EPS; basic bot filtering; referrer stored; UTM passthrough; automatic error correction; **GTM + GA4 / Meta Pixel fields, time-based redirects and the review funnel in V1**; customer webhooks later (post-sync decision, after Oleg's revised canvas); OTP password reset; one optional retention offer; configurable entitlements; all V1 stories Must. Assumptions for open client questions in §16a |

## 2. Introduction

This document describes what the first version of QR.CA must do: a self-serve web product in which a Canadian small business creates a QR code, prints it, and can later change what the code opens without reprinting it. It covers the public website, account sign-up, code creation and customization, the pages a code can open, code management, scan statistics, the free trial and paid plans, account settings, the page a person sees after scanning, and the internal tools the QR.CA team needs to support customers and stop misuse. It does not cover visual design, technical architecture, pricing decisions, or a development estimate; those are separate outputs of Discovery. No other requirements documents exist for this product yet. An earlier, client-facing requirements summary (version 1.0) exists and is partly superseded by the client's own comments of 12 September.

## 3. About the Project

| **Location** | Canada. English-speaking Canada first; Quebec deliberately later |
| --- | --- |
| **Company type** | Founder-led start-up, pre-launch. The `qr.ca` domain is the main asset so far |
| **Platform** | Web: marketing site and web application, fully usable on phone and desktop. No native apps |
| **Domain** | Dynamic QR codes and the small web pages behind them |
| **Product type** | Self-serve subscription software (product-led growth: people sign up and pay without talking to sales) |
| **Compliance** | Canadian privacy law (PIPEDA). Canadian commercial email rules (CASL). Canadian sales taxes (GST / HST / QST). Quebec language and privacy law are recognised but deferred with the Quebec market |

## 4. Business Problem

| Problem | Impact |
| --- | --- |
| A printed QR code cannot be changed. When a menu, a price or a web address changes, the business has to reprint | Reprint cost and delay; printed material goes out of date and customers land on the wrong thing |
| Many businesses have no web page worth pointing a code at: a menu, a contact card, a list of links | Without a page to open, the code has nothing useful to show, and the business will not pay for it |
| The tools that exist are either free and basic, or powerful but expensive and confusing, with trial terms people do not understand | Customers pay for plans they do not need, or leave angry when a printed code stops working |
| A business cannot tell whether anyone scans its codes | Money is spent on print with no way to know whether it worked |
| A free, trusted redirect service attracts people who want to use it for scams | One misused code can damage the reputation of the `qr.ca` name, which is the whole asset |

## 5. Goals and Success Criteria

| Goal | Success Criteria |
| --- | --- |
| A new visitor gets a working, printable code quickly | A first-time visitor can create, customize and download a code in under 10 minutes, measured from the first visit |
| Visitors become paying customers through the product alone, without a sales conversation | Trial-to-paid conversion is tracked from launch. The client's working assumption is that 2–5% of dynamic codes lead to a paid customer; the real figure is measured, not assumed |
| A code on paper keeps working | A printed code is never replaced by an error page. Every state the code can be in (live, paused, trial ended, removed) shows something deliberate |
| The business can see whether its codes work | Every code shows total and unique scans, when, on what device and roughly where, within minutes of a scan |
| Misuse is stopped before it harms the brand | Every destination is checked for known scam and malware sites. The QR.CA team can switch off any code quickly, and every switch-off records who did it and why |

## 6. Stakeholders

**Client side**

| Name | Role | Responsibility |
| --- | --- | --- |
| Founder (`al@qr.ca`; full name [TBD]) | Founder, sole decision-maker | Product direction, scope approval, pricing, sign-off on this document |
| [TBD] | Anyone else on the client side | None has been mentioned in any source |

**Development side (Phenomenon)**

| Name | Role | Responsibility |
| --- | --- | --- |
| Christian Kapuzo | Business Analyst, workshop lead | This document, requirements, research, open questions |
| Oleksandra Tucha | Product Strategist | Segment, positioning and prioritisation |
| Denys Melnyk | Solution Architect | Architecture, technology choices, data model, technical validation of these requirements |
| Oleg S | Design (role to confirm) | Wireflows: the screens and flows this document follows |
| Ruslan Vashchenko | Delivery | Discovery shape, design staging, timeline |
| Anatolii Sakhno | Delivery / presale lead | Estimate, hours, team composition |
| Anastasia Danylenko | Sales / account | All communication with the client |

## 7. Users and Roles

**Visitor.** Anyone on the public QR.CA website who has not signed up. They can try the code generator on the home page: choose a type, add content, style the code and see a preview. Keeping and managing the code needs an account.

**Owner (account holder).** A small-business owner, freelancer or marketer with a QR.CA account. In the **owner web app** they create, style, download and manage codes and the pages behind them, read scan statistics, and manage their plan and billing. They can also connect their own systems through the **API**. Each account has exactly one person in it in the first version; there are no teams. An owner is always in one of three states: *on the free trial*, *subscribed*, or *without an active subscription* (the trial ended or the plan was cancelled).

**Scanner.** A member of the public who points a phone camera at a printed code. They never sign in and never see the application. They see either the owner's destination (a website, an app store, a page QR.CA hosts) or, if the code is not live, a clear QR.CA page explaining that.

**Support administrator.** A member of the QR.CA team. They look up customers and codes, help with billing problems, give a goodwill code to a customer who needs one, review flagged destinations, and switch off misused codes.

**Platform owner (super administrator).** The founder or the engineering lead. Everything a support administrator can do, plus managing who has admin access and reading platform-wide statistics.

**Permission matrix**

| Area | Visitor | Owner | Scanner | Support admin | Super admin |
| --- | --- | --- | --- | --- | --- |
| Home-page generator (create, style, preview) | Edit | Edit | — | — | — |
| Download a code created on the home page | — (sign-up required) | Full | — | — | — |
| Sign up, log in, password recovery | Edit | Edit | — | — | — |
| Own codes: create, edit, pause, duplicate, delete, folders | — | Full | — | View | View |
| Pages behind codes (build and publish) | — | Full | View (published only) | View | View |
| Own scan statistics | — | View | — | View | View |
| Plan, trial and billing | — | Full | — | Edit (support actions) | Edit (support actions) |
| Account settings, account deletion | — | Full | — | View | View |
| API keys (Owner API) | — | Full | — | View | View |
| Switch a code off for misuse | — | — | — | Full | Full |
| Review flagged destinations | — | — | — | Full | Full |
| Platform-wide statistics | — | — | — | View | Full |
| Manage admin users | — | — | — | — | Full |

"Admin" in this document means only the **internal QR.CA console** used by the support and super admins. The customer's workspace is the **owner web app**.

## 8. Project Scope

- QR.CA lets a visitor build a code on the home page; downloading it needs a quick sign-up.
- Owners work in the **owner web app**: the logged-in workspace where they create, configure, download and manage codes.
- The first version supports **dynamic** codes of five types (website link, PDF or file, a page of several links, a digital business card, and an app-store link that sends iPhone and Android users to the right store), a restaurant menu as a PDF, and **static** codes (website, contact card, email, SMS, phone call, text, Wi-Fi).
- Dynamic codes can be changed at any time, as often as the owner likes, without reprinting. Static codes carry their content in the code itself: they work without QR.CA but cannot be changed or tracked.
- For the links page and the business card, QR.CA hosts a simple, phone-first page the owner builds from a template. Files and menus open as the PDF itself, with a small QR.CA footer.
- Owners can style a code with colours, a logo, shapes and a frame, and QR.CA checks that the styled code will still scan before it is downloaded.
- Owners can create many codes at once from a spreadsheet file.
- Owners organise codes with folders and tags, search and filter them, pause and reactivate them, duplicate and delete them, and move codes they no longer need into an Archive folder (archived codes are paused).
- QR.CA counts every scan and shows owners total and unique scans, when they happened, on which kind of device and roughly where, for each code and across all codes.
- New owners get a 14-day free trial with no card required. After the trial, they pay for a monthly or yearly plan, in Canadian dollars with Canadian sales tax.
- The product, the website, the emails and the hosted pages are available in English and Canadian French.
- QR.CA sends account, trial, billing and usage emails.
- QR.CA offers an **API** for owners who want their own systems (a store, a CRM, a print workflow) to create and manage codes automatically. It is separate from the owner web app.
- A dynamic code can switch destinations **by time of day**, and a **review code** brings customers to the business's Google reviews.
- Owners can connect **Google Tag Manager, Google Analytics 4 and Meta Pixel** to their hosted pages.
- Downloads come in PNG, JPG, SVG, EPS and print-ready PDF, with **no watermark**.
- QR.CA checks destinations against known scam and malware lists, and gives its own team the tools to support customers and switch off misused codes.
- QR.CA reads nothing from the owner's own systems. Payment details are held by the payment provider and never by QR.CA. Scan statistics are counted without identifying the person who scanned.
- QR.CA does not take orders or payments on the pages it hosts, does not print anything, and does not offer teams, agencies or resellers in the first version.

## 9. Project Phases

**MVP — the first release**

A product a Canadian small business can use end to end on its own: find QR.CA, make a code on the home page, sign up, start a free trial, make and style dynamic and static codes, build the page behind a code, print it, change it later, see who scanned it, and pay when the trial ends. Around that: bilingual English and French, a site built to be found in search, email at every important moment, bulk creation from a spreadsheet, an API, and the internal tools that let the QR.CA team support customers and stop misuse.

**Post-MVP — deliberately later**

| Deferred | Why |
| --- | --- |
| Canadian data hosting as a guarantee, and Quebec privacy-consent tooling | The client chose to revisit these after launch, if Quebec customers ask for them. The system is built so this can be added without rebuilding it |
| A check that French is shown at least as prominently as English | Depends on whether Quebec is a launch market; pending the client's answer |
| Smart routing by location, language or scan count; password-protected codes; coupon codes | Useful to heavier users, not needed to launch. The wireflows show some of these; they are kept for the second release |
| Scheduled scan-activity emails and data export | Retention features that matter once owners have scan data worth reading |
| Teams, agencies, custom domains, white-label | Different customers from the first one; the client's brief places them later |
| Advanced automation, reseller features, SOC 2 | The client's own list of second-version candidates |
| Native phone apps | Scanning uses the phone's camera; nobody needs an app |

---

# PART 2 — TECHNICAL SPECIFICATION

**Conventions.** Story IDs `QR-U-NN` (users) and `QR-A-NN` (admin). Each story cites the KB feature ID(s) from `scope-map.md`, the Figma node ID where the flow is drawn, and a source tag: ✅ client-stated · 🟡 second-hand · ⚪ ours or team work. ⚠️ marks a story that depends on an open question in section 16.

**No PHI.** QR.CA processes no health information of any kind. No story in this document collects, stores or displays PHI, and HIPAA does not apply. Stories that touch personal information (account data, vCard contents, scan metadata) say so and are governed by PIPEDA.

**Role names in stories.** Visitor = unauthenticated site visitor. Owner = `user`. Scanner = public, no account. Support admin = `admin`. Super admin = `superadmin`.

Part 2 continues in three subpages:

Part 2a — User epics E0–E4 (owner web app, first code, access, creation, management)

Part 2b — User epics E5–E9 + Admin epics

Part 2c — System requirements, scope, integrations, risks, open questions, glossary
