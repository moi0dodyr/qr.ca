<!--
  UPSTREAM COPY. DO NOT EDIT.
  Source of truth: Christian Kapuzo's KB, SRS v1.0 subpage "Part 2b" (Notion).
  Received 2026-10-01 (pasted by Oleg S). Internal: not for the client.
-->

# Part 2b — User epics E5–E9 + Admin epics

### E5 · Scan statistics

#### QR-U-28 Owner — Statistics for one code

| User Story | As an Owner I want to see how one code is scanned so that I know whether it works |
| --- | --- |
| Role | Owner |
| Platform | Web (responsive) |
| Priority | Must Have |
| Trace | `ANL-01`…`ANL-05` · Figma `8045:2575` · ✅ brief §3 |

Acceptance criteria:

- Given *Particular QR Analytics*, when it loads, then it shows the code's details and actions, Total Scans, Unique Scans, scans over time, Scans by Device (device / OS / browser), Scans by Time of Day and Scans by Location (country and city only, BRL-26).
- Given the owner sets Period, Date Range, Time Range or Location filters, when applied, then every widget updates.
- Given a code with fewer scans than a meaningful chart needs, when the page loads, then an empty state explains what will appear and how to get scans, rather than a blank chart (R-13).
- Given a scan, when it happens, then it appears in statistics within [TBD] minutes (proposed 5).
- Unique scan: one visitor fingerprint per code per calendar day (BRL-22). Scanners are never identified.
- Given a request from a known link-preview bot (Slack, iMessage, WhatsApp, social crawlers), when it hits a code, then it is redirected normally but **not counted** as a scan (decision A-3 (Christian, 2026-09-30)).
- Given a scan that carries a referrer, when it is recorded, then the referrer is **stored**; V1 shows no referrer widget (decision A-5 (Christian, 2026-09-30)).
- *Comparison Period* and *Export* are drawn but are **not MVP** (`ANL-14` candidate, `ANL-13` post-MVP).

#### QR-U-29 Owner — Statistics across all codes

| User Story | As an Owner I want totals across all my codes so that I see the whole picture |
| --- | --- |
| Role | Owner |
| Platform | Web (responsive) |
| Priority | Must Have |
| Trace | candidate `ANL-14` · Figma `8045:3155` |

Acceptance criteria:

- Given *Analytics* in the sidebar, when it loads, then it shows Total Scans, Unique Scans, Top Performing QR, Most popular time, Most popular day of the week, Scans by Device, Time of Day and Location, across all codes.
- Given Folder, QR code, Period, Date Range, Time Range or Location filters, when applied, then every widget updates.
- Comparison Period and Export: not MVP (as QR-U-28).

### E6 · Trial, plans and billing

#### QR-U-30 Owner — Trial countdown ⚠️

| User Story | As a trial Owner I want to always see how long my trial has left so that nothing surprises me |
| --- | --- |
| Role | Owner (trial) |
| Platform | Web (responsive) |
| Priority | Must Have |
| Trace | `BIL-04`, `EXP-04` · Figma `8045:3479` *Trial Banner* · ✅ C-1.3 (*"I basically expect the 'your QR codes will expire in….' message in the bottom left (for transparency)"*) |

Acceptance criteria:

- Given an owner on the trial, when any application page loads, then a banner in the bottom-left of the sidebar shows the days left and an *Upgrade* button.
- Given the banner, when the owner presses Upgrade, then the Upgrade pop-up opens (QR-U-32).
- Given the trial will end in [TBD] days (proposed 3 and 1), when that point is reached, then an email is sent saying when it ends and what happens to the codes.
- The banner wording depends on SRS-Q-01: *"your codes will expire in N days"* (client's words) or *"your codes will pause in N days"* (recommended). Either way it states a date, not only a count.

#### QR-U-31 Owner — Trial start and end ⚠️

| User Story | As an Owner I want a free trial with no card so that I can try the full product without risk |
| --- | --- |
| Role | Owner |
| Platform | Web |
| Priority | Must Have |
| Trace | `BIL-01`, `BIL-04`, `DYN-05`, `TRS-03` · Figma `8055:3551` notes · ✅ C-6 · contradictions **W-1**, **W-2**, **W-3** · SRS-Q-01 |

Acceptance criteria:

- Given a new account, when it is created, then a 14-day trial starts with no card asked for (✅ C-6).
- Given the trial, when the owner uses the product, then trial entitlements apply ([TBD]; proposed: the entry paid plan's features).
- Given the trial ends with no subscription, when a scanner scans any of the owner's dynamic codes, then **the recommended behaviour** is: the code shows a branded "this code is paused" page naming the business, keeps its identifier, and resumes its destination the moment the owner subscribes (`DYN-05`, BRL-03, BRL-04). It never shows an error. ⚠️ The wireflows say codes *expire* (W-1) and the client expects expiry messaging (C-1.3); the final behaviour is SRS-Q-01.
- Given the trial ends with no subscription, when the owner logs in, then they can see all their codes and statistics, cannot create new dynamic codes, and are offered a plan.
- **Entitlements are configurable** (decision A-14 (Christian, 2026-09-30)): by default *trial → paid*; an optional *Basic* set (static codes stay live and can still be created) can be switched on without a release. Plans, limits and gates come from configuration / Recurly, not from code. The wireflows' *Stay Free* button reads **"Not now"**. The final model is the client's (SRS-Q-07; §16a).
- Given an owner without an active subscription, when they download a paused code, then the download is **allowed**, with a note that the code shows the "not available" page until the plan is active (decision A-13 (Christian, 2026-09-30)).

#### QR-U-32 Owner — Upgrade pop-up

| User Story | As an Owner I want to upgrade from wherever I hit a limit so that I keep working without hunting for billing |
| --- | --- |
| Role | Owner |
| Platform | Web (responsive) |
| Priority | Must Have |
| Trace | `BIL-01`, `BIL-02`, `BIL-03` · Figma `8053:2117` |

Acceptance criteria:

- Given the owner presses Upgrade in the trial banner, the account menu, a locked feature, or the Dashboard when without a subscription, when the pop-up opens, then it shows the version for their state.
- Given a trial owner, then the pop-up shows *Trial Details*: what is unlocked, for how many more days, what stops working without a subscription, and when they would be charged. *Keep Free Trial* closes it and returns them where they were.
- Given an owner without a subscription, then the pop-up shows what works and what does not; closing it returns them where they were.
- Given the owner enters card details and presses *Unlock Premium*, when payment succeeds, then a success pop-up leads to the codes and the new plan applies at once. When it fails, an error pop-up offers *Try again* or *Close*.
- Card details are entered in the payment provider's secure form; QR.CA never receives or stores card numbers.

#### QR-U-33 Owner — Plans & Billing

| User Story | As an Owner I want one place to see and change my plan and invoices so that billing is never a mystery |
| --- | --- |
| Role | Owner |
| Platform | Web (responsive) |
| Priority | Must Have |
| Trace | `BIL-01`…`BIL-07` · Figma `8045:3051` · ✅ brief §4 · ✅ C-1.2 pricing ladder |

Acceptance criteria:

- Given an owner with no subscription, when Plans & Billing opens, then it shows Available Plans with prices in CAD, monthly and yearly, what each includes, and Orders History.
- Given a subscribed owner, then it shows Active Plan Details (plan, auto-renewal, valid until, next invoice), Upgrade, Orders History, Cancel Plan and Manage Billing.
- Given the owner selects a plan, when payment succeeds, then the plan changes at once; proration rules are [TBD].
- Given the owner chooses Manage Billing, then they can update the card and billing address.
- Given Orders History, when the owner selects an order, then they can download its invoice as PDF (gap: not drawn).
- Given a Canadian billing address, when a charge is made, then GST, HST or QST is applied by province (BRL-35).
- Downgrade to a cheaper plan is not drawn (gap); it must exist and must not disable codes already published (BRL-12).
- Plans, prices and limits are [TBD] (SRS-Q-08). The client's proposed ladder is $120/yr or $20/mo, ~$180/yr, $50/mo (✅ C-1.2).

#### QR-U-34 Owner — Cancel a plan

| User Story | As an Owner I want to cancel in the product so that I stay in control of what I pay |
| --- | --- |
| Role | Owner |
| Platform | Web (responsive) |
| Priority | Must Have |
| Trace | `BIL-04`, candidate `BIL-08` · Figma `8045:3051` |

Acceptance criteria:

- Given a subscribed owner, when they choose Cancel Plan, then a pop-up asks for a reason (optional to answer), with *Cancel* and *Keep Plan*.
- Given the owner continues, when the cancellation is not yet confirmed, then **at most one optional retention offer** (for example a discount, Figma *Discount Suggestion*) is shown, with a clear *Cancel anyway* (decision A-12 (Christian, 2026-09-30)).
- Given they confirm, when cancellation completes, then the plan shows a *Canceled* state with the date it ends, and no further charge is made.
- Given the paid period ends, when the owner's codes are scanned, then they behave as in QR-U-31 (trial ended).
- Cancellation needs no contact with support and no more than one optional offer (BRL-15, relaxed by A-12).

#### QR-U-35 Owner — Failed payment

| User Story | As an Owner I want to know when a payment fails so that my codes do not stop without warning |
| --- | --- |
| Role | Owner |
| Platform | Web, email |
| Priority | Must Have |
| Trace | `BIL-04`, `EXP-04` · Figma: not drawn (gap, Q-W12) · ✅ brief §4 (*"payment failures"*) |

Acceptance criteria:

- Given a renewal payment fails, when the subscription system reports it, then the owner is emailed and sees a banner in the application with a link to update the card.
- Given the owner updates the card within the retry period ([TBD] days), when payment succeeds, then nothing else changes.
- Given the retry period ends unpaid, when the subscription lapses, then codes behave as in QR-U-31.

### E7 · Account settings

#### QR-U-36 Owner — Profile, email and password

| User Story | As an Owner I want to keep my details current so that I can always get into my account |
| --- | --- |
| Role | Owner |
| Platform | Web (responsive) |
| Priority | Must Have |
| Trace | `ACC-02` · Figma `8045:3122` |

Acceptance criteria:

- Given User Profile, when the owner edits first and last name and presses Save Changes, then they are saved with a toast.
- Given Edit Email, when the owner enters their current password and a new email and saves, then a confirmation is sent to the new address and a banner says it is waiting; the email changes only once confirmed.
- Given Edit Password, when the owner enters the current password and the new one twice and saves, then it changes, a toast shows and other sessions are signed out.
- Given an owner who signed up with Google, when they open Edit Password, then they can set a password or are told that sign-in is through Google ([TBD]).
- Personal data only; no PHI.

#### QR-U-37 Owner — Delete account

| User Story | As an Owner I want to delete my account and my data so that I can leave completely |
| --- | --- |
| Role | Owner |
| Platform | Web (responsive) |
| Priority | Must Have |
| Trace | candidate `ACC-08` · Figma `8045:3122` *Manage Account* · PIPEDA |

Acceptance criteria:

- Given Manage Account, when the owner chooses Delete account, then a pop-up explains that data cannot be restored and what happens to their printed codes.
- Given the owner types their full name and confirms, when deletion runs, then any subscription is cancelled, personal data is deleted, and *Your account deleted* page offers *Go to Landing* and *Contact Support*.
- Given a deleted account's codes, when they are scanned, then they show the "no longer available" page and their identifiers are never reused (BRL-01).
- Email scan-activity updates (Figma: Daily / Weekly / Monthly) are not MVP (`ANL-12`).

### E8 · The scanner's side (not drawn in the wireflows)

#### QR-U-38 Scanner — Scan a live code

| User Story | As a Scanner I want the code to open the right thing instantly so that I get what the sign promised |
| --- | --- |
| Role | Scanner |
| Platform | Phone browser |
| Priority | Must Have |
| Trace | `DYN-01`, `DYN-12`, `PLT-01`, `ANL-01` · Figma: not drawn (Q-W10) · ✅ brief §5 · ✅ C-2 #4 |

Acceptance criteria:

- Given a live Website URL or App Store code, when it is scanned, then the scanner is redirected to the destination.
- Given a live page code (Multi-Link, vCard, PDF / File, Menu), when it is scanned, then the hosted page renders.
- Given any scan, when it happens, then a scan event is recorded without delaying the redirect or the page.
- Codes are served from a dedicated redirect domain that is not `qr.ca` (✅ C-2 #4; the domain itself is [TBD]).
- No advertising, interstitial or third-party content is shown to the scanner (BRL-34).

#### QR-U-39 Scanner — Scan a code that is not live

| User Story | As a Scanner I want a clear message when a code is not working so that I know it is not broken or a scam |
| --- | --- |
| Role | Scanner |
| Platform | Phone browser |
| Priority | Must Have |
| Trace | `DYN-05`, `TRS-03`, BRL-02 · Figma: not drawn · SRS-Q-01 · **DS-11** (design sync 2026-09-30) |

Acceptance criteria:

- Given a paused code (paused by the owner, or in the Archive folder), when it is scanned, then a **friendly, QR.CA-branded page** says so, for example *"Sorry — the code you're scanning is not available right now"*, and shows the owner's message if they wrote one. It must never look like a broken link (DS-11).
- Given a code whose owner has no active subscription, when it is scanned, then the page shown follows SRS-Q-01 (recommended: the same page, naming the business).
- Given a deleted code or a deleted account, when scanned, then a page says the code is no longer available.
- Given a code disabled by an admin for misuse, when scanned, then a warning page says it was disabled for safety and does not show the destination.
- Given an identifier that never existed, when requested, then a generic not-found page is shown.
- Every page above is in English and French, and none returns a bare browser error.

### E9 · Developer and marketing integrations for owners

#### QR-U-40 Owner — Owner API

**What it is.** A public REST API that lets an owner's own systems create and manage QR.CA codes directly: an e-commerce store, a CRM, an internal tool or a print workflow. It does not replace the owner web app (QR-U-42); it is the same capability for machines instead of people. The owner creates an API key on the *APIs* screen of the web app and gives it to their developer or platform.

**Which request it answers.** The client asked for it in writing: *"API and 'bulk upload' (like csv) support … Likely used by the 'top spenders'"* (Notion C-2 #1 ✅).

**Which problem it solves.** Customers who manage many codes, or create them as part of another process, cannot do it by hand in a browser. Examples: a code on every product label created when the product enters the catalogue, a code per event ticket, an agency running campaigns for many clients. These are the customers who pay most, and the API is paid-advanced across the field (QRCG holds it to Enterprise).

**What it is not.** Not the owner web app (QR-U-42). Not the internal admin console (QR-A-01…06). Not webhooks for customers (post-MVP). Not the platform events QR.CA sends to Recurly and Customer.io (§12.4).

| User Story | As an Owner with my own systems I want an API so that I can create and manage codes automatically |
| --- | --- |
| Role | Owner |
| Platform | API |
| Priority | Must Have |
| Trace | `PLT-07` · Figma `8045:3377` *APIs* · ✅ C-2 #1 |

Acceptance criteria:

- Given an owner on the APIs screen, when they create an API key, then it is shown once, can be named, and can be revoked. The screen shows the **Account ID** (there are no organisations in V1) and the usage limit of the plan.
- Given a valid key, when the API is called, then it can create, read, update, pause and delete the owner's codes and read their scan totals, and nothing belonging to another account.
- Given the plan limit on number of codes is reached, when the API creates a code, then the call is refused with the same rule as the web app (DS-09).
- Given a revoked or invalid key, when it is used, then the call is refused.
- Given calls above the rate limit, when made, then they are refused with a retry-after signal.
- Which plans include the API is [TBD] (SRS-Q-08). Endpoint design and the docs tool are Denys Melnyk's.

#### QR-U-41 Owner — Tags on hosted pages: Google Tag Manager, GA4, Meta Pixel

| User Story | As an Owner running marketing I want my own tags on my hosted pages so that scans reach my analytics and ads |
| --- | --- |
| Role | Owner |
| Platform | Web |
| Priority | Must Have |
| Trace | `ANL-11` · Figma `8045:3399` *GTM* (post-sync canvas is GTM-only; GA4 and Meta Pixel fields to be added to the same screen) · ✅ C-2 #2 (GTM) · decision A-9 (Christian, 2026-09-30), A-16, post-sync decision (Christian, 2026-09-30) |

Acceptance criteria:

- Given the owner's integration settings, when they enter a **GTM container ID**, a **GA4 Measurement ID** or a **Meta Pixel ID** and save, then the tag loads on their hosted pages and a success toast confirms it. One integrations screen, with a docs link.
- Given a hosted page with tags, when a scanner opens it, then the tags fire on the page; **nothing loads on the redirect itself**, so redirect speed is unaffected.
- Given an invalid ID format, when saved, then it is refused with the expected format.
- Consent for these tags for Quebec visitors (Law 25) is [TBD] (SRS-Q-18; R-09).

#### QR-U-43 Owner — Time-based redirects

| User Story | As a restaurant Owner I want one code to open different destinations by time of day so that I print one code for breakfast, lunch and dinner |
| --- | --- |
| Role | Owner · Scanner |
| Platform | Web (responsive) · redirect |
| Priority | Must Have |
| Trace | `DYN-08` · Figma: not drawn · 🟡 Denys Melnyk's proposal · decision A-10 (Christian, 2026-09-30) |

Acceptance criteria:

- Given a dynamic code (Website URL, App Store or a hosted page), when the owner opens *Schedule* in creation or edit, then they can add time windows (days of the week + start / end time) each with its own destination, plus a **default destination** used outside every window. The time zone is the account's (editable).
- Given overlapping windows, when saved, then the product refuses and names the overlap.
- Given a scan, when it happens, then the redirect picks the window that matches the current time in the code's time zone, or the default (BRL-07). **The rule is evaluated in the redirect without noticeable added latency** (§12.6).
- Given a paused or archived code, when scanned, then pause wins over any schedule (BRL-06).
- Given the owner edits a window, when saved, then the next scan uses the new schedule.

#### QR-U-44 Owner — Review / feedback funnel code

| User Story | As a café Owner I want a code that brings customers to my Google reviews so that I collect more reviews |
| --- | --- |
| Role | Owner · Scanner |
| Platform | Web (responsive) |
| Priority | Must Have |
| Trace | `DST-11` · Figma: not drawn · ⚪ · decision A-10 (Christian, 2026-09-30) |

Acceptance criteria:

- Given the Review type, when the owner creates it, then they enter the Google review link (or Place ID) and choose: **direct** (scan → Google review page) or **with a rating step** (scan → a short 1–5 rating page → Google, plus a private feedback form).
- Given the rating step, when a scanner rates, then the page offers the Google review link **to everyone**, and adds a short private feedback form; feedback reaches the owner by email and in the app. *(Sending only happy customers to Google is discouraged by Google's review policies, so the page never hides the Google link.)*
- Given the rating page, when it renders, then it is phone-first, in English and French, QR.CA-branded like other hosted pages, with no ads (BRL-34).
- Given scans and ratings, when the owner opens the code's analytics, then they see scans and the rating distribution.

## 11. Product Requirements — Admin Epics

Not drawn in the wireflows. Built from the brief (✅ §5 *"Admin: users, QR codes, accounts/subscriptions, abuse/moderation and support"*) and the client's comments.

#### QR-A-01 Support admin — Find and manage an account

| User Story | As a Support admin I want to look up any owner so that I can answer their question |
| --- | --- |
| Role | Support admin |
| Platform | Web (internal) |
| Priority | Must Have |
| Trace | `ADM-01` · ✅ brief §5 |

Acceptance criteria:

- Given the admin console, when an admin searches by email, name or code identifier, then matching accounts show with trial / subscription state, code count and sign-up date.
- Given an account, when opened, then the admin sees its codes, plan and billing history (read-only), and recent account events.
- Given an account, when the admin suspends or reactivates it with a reason, then the change is recorded with who and when.
- Admins cannot see passwords or card numbers. Personal data only; no PHI.

#### QR-A-02 Support admin — Disable a code for misuse

| User Story | As a Support admin I want to switch off a harmful code immediately so that scanners are protected |
| --- | --- |
| Role | Support admin |
| Platform | Web (internal) |
| Priority | Must Have |
| Trace | `ADM-02`, `TRS-02` · ✅ brief §5 |

Acceptance criteria:

- Given any code on the platform, when an admin disables it with a reason, then the next scan shows the safety warning page (QR-U-39) within [TBD] (proposed 1 minute), and the owner is emailed.
- Given a disabled code, when an admin re-enables it with a reason, then it resumes.
- Every disable and re-enable is logged with admin, time and reason (BRL-32). The owner cannot re-enable it.

#### QR-A-03 Support admin — Subscription support actions

| User Story | As a Support admin I want to fix billing situations so that a customer with a problem is looked after |
| --- | --- |
| Role | Support admin |
| Platform | Web (internal) |
| Priority | Must Have |
| Trace | `ADM-03` · ✅ brief §5 · ✅ C-1.1 (*"giving '1 free' dynamic QR code away IF a customer comes with a problem"*) |

Acceptance criteria:

- Given an account, when an admin extends a trial by N days with a reason, then the new end date applies and the owner sees it in the banner.
- Given an account without a subscription, when an admin grants one goodwill dynamic code, then that code stays live with no subscription, and it is marked as granted by support.
- Given a refund or credit is needed, when the admin acts, then it is done through the subscription system and recorded ([TBD] whether from the console or Recurly directly).

#### QR-A-04 Support admin — Review flagged destinations

| User Story | As a Support admin I want flagged destinations queued for review so that scams are caught without slowing honest users |
| --- | --- |
| Role | Support admin |
| Platform | Web (internal) |
| Priority | Must Have |
| Trace | `TRS-01` · ✅ C-2 #2 (*"Google Safe Browsing… pro-active against potential bad actors"*) · ✅ brief §5 |

Acceptance criteria:

- Given a destination URL or file, when a code is saved, then it is checked against a link-reputation service.
- Given a known-malicious match, when checked, then the code cannot be saved and the owner is told why.
- Given a suspicious but unconfirmed result, when checked, then the code works normally and joins the review queue (BRL-33).
- Given live codes, when the re-check schedule runs ([TBD] frequency), then each destination is re-checked (BRL-31).
- Given an item in the queue, when an admin approves or disables it, then the decision is logged.

#### QR-A-05 Super admin — Platform statistics

| User Story | As a Super admin I want platform-wide numbers so that I understand what customers make and who they are |
| --- | --- |
| Role | Super admin |
| Platform | Web (internal) |
| Priority | Must Have |
| Trace | `ADM-04`, `ANL-07` · ✅ C-2 #3 (*"top QR code types… industry breakdown… I would expect to use LLMs"*) |

Acceptance criteria:

- Given the statistics view, when it loads, then it shows sign-ups, trials, conversions, cancellations, codes created by type, and scans, over a chosen period.
- Given URL codes, when the industry breakdown runs, then destinations are classified into industries (LLM-assisted) and shown as shares.
- Product-funnel events are also sent to Amplitude (§12.1); this view does not replace it.
- Uses aggregate data only; no scanner is identified.

#### QR-A-06 Super admin — Manage admin access

| User Story | As a Super admin I want to control who has admin access so that internal tools stay safe |
| --- | --- |
| Role | Super admin |
| Platform | Web (internal) |
| Priority | Must Have |
| Trace | canonical role schema |

Acceptance criteria:

- Given the admin list, when a super admin invites a person as Support admin or Super admin, then they get access only after accepting and setting up two-factor sign-in.
- Given an admin, when a super admin removes them, then their access ends at once.
- Every admin action across the console is logged with who, what and when.
