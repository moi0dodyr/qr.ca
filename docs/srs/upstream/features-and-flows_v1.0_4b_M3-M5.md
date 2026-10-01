<!--
  UPSTREAM COPY. DO NOT EDIT.
  Source of truth: Christian Kapuzo's KB, Features and User Flows v1.0, subpage 4b (Notion).
  Received 2026-10-01 (pasted by Oleg S). Internal: not for the client.
-->

# 4b — Features: M3 Scanning · M4 Statistics · M5 Account, trial and billing

### M3 · What happens when someone scans

#### F-19

**Fast, reliable redirect** · V1 · Must · size **M** · ✅🟡

- **What:** A thin, separately deployed redirect service resolves each scan to the current destination at once, and keeps working while the main app is down or deploying. Scan events are recorded without delaying the redirect. **UTM parameters are passed through** to the destination (A-6). Time-based rules (F-60) are evaluated here.
- **Why:** The brief asks for stable redirect infrastructure with fast response and reliable availability (§5).
- **Solves:** Slow or failed scans, which the scanner blames on the business and the business blames on QR.CA.
- **Who:** Scanner · **Problems:** BP-01 A printed code cannot be changed · **Goals:** G-03
- **Depends on:** F-20 Separate code domain · **Needed by:** F-02, F-14, F-15, F-16, F-21, F-22, F-23, F-25, F-60
- **Scope map (size):** `DYN-01` M, `PLT-01` M, `ANL-01` M · **SRS:** QR-U-38
- **Figma:** not drawn
- **Flows:** FL-12
- **Notes and risks:** Architecture is Denys Melnyk's (two services, destination map in Redis, fire-and-forget events).
- **Complexity (market check):** Separate redirect service + cache (Denys's design). Short-ID scheme that is never reused (BRL-01). Separate redirect domain (C-2 #4) needs DNS + TLS + reputation setup.
- **Complexity (market check):** UTM passthrough is near-free in the redirect.
- **Complexity (market check):** Salt rotation and never storing raw IP with the hash — a design constraint for the event store.
- **Open questions:** SRS-Q-16 — Performance targets, session timeouts, statistics latency *(Open)*
- **Market:** *Dynamic QR code generation* (table stakes, varies); *CSV export + UTM handling + GA4* (competitive standard, paid — mid tier); *IP anonymisation / cookieless scan analytics* (emerging, varies)

#### F-20

**Separate code domain** · V1 (domain name to confirm) · Must · size **—** · ✅

- **What:** Dynamic codes are served from a dedicated domain owned by the platform, not from `qr.ca`.
- **Why:** The client asked for it by name, citing Uniqode's use of a separate link domain (C-2 #4).
- **Solves:** What customers link to damaging the reputation of `qr.ca`.
- **Who:** Scanner · **Problems:** BP-06 A trusted redirect domain attracts abuse · **Goals:** G-05
- **Depends on:** — · **Needed by:** F-19
- **Scope map (size):** `DYN-12` ? · **SRS:** QR-U-38
- **Figma:** not drawn
- **Flows:** FL-12
- **Complexity (market check):** Separate redirect service + cache (Denys's design). Short-ID scheme that is never reused (BRL-01). Separate redirect domain (C-2 #4) needs DNS + TLS + reputation setup.
- **Open questions:** SRS-Q-15 — Name of the dedicated redirect domain *(Open)*
- **Market:** *Dynamic QR code generation* (table stakes, varies); *Custom short domain / branded redirect URL* (competitive standard, paid — mid tier)

#### F-21

**Smart app-store link** · V1 · Must · size **S** · ✅

- **What:** One code sends iPhone users to the App Store, Android users to Google Play, and everyone else (or a platform without a link) to a fallback URL.
- **Why:** One of the brief's five types; fallback behaviour was left to Discovery.
- **Solves:** Printing two codes for two stores, or sending users to the wrong store.
- **Who:** Owner (customer), Scanner · **Problems:** BP-02 There is nothing worth pointing the code at · **Goals:** G-01
- **Depends on:** F-19 Fast, reliable redirect
- **Scope map (size):** `DYN-07` S · **SRS:** QR-U-19
- **Figma:** not drawn
- **Flows:** FL-03, FL-12
- **Complexity (market check):** User-agent detection in the redirect path; fallback URL. Keep it inside the fast path without extra lookups.
- **Market:** *App-store deep-link routing* (competitive standard, paid — mid tier)

#### F-22

**Hosted pages** · V1 · Must · size **L** · ✅

- **What:** The public pages behind page types: links pages and business cards with save-to-contacts. PDFs and menus open as the file itself with a small QR.CA-branded footer (DS-06). Phone-first and fast.
- **Why:** This is what most scanners actually see of QR.CA.
- **Solves:** A code with nothing useful behind it.
- **Who:** Scanner · **Problems:** BP-02 There is nothing worth pointing the code at · **Goals:** G-03, G-04
- **Depends on:** F-19 Fast, reliable redirect, F-12 English and French pages · **Needed by:** F-02, F-03, F-06, F-12, F-41, F-42, F-61
- **Scope map (size):** `DST-01` L, `DST-02` S, `DST-03` S, `DST-05` M · **SRS:** QR-U-38, QR-U-10
- **Figma:** not drawn · ⚠️ **scanner-side hosted pages not drawn** (C-4)
- **Flows:** FL-12
- **Notes and risks:** Target: meaningful content within 2 s on a mid-range Android phone over 4G (proposed).
- **Complexity (market check):** Biggest single build: page engine + templates + editor + public rendering + FR/EN fields + SEO. Scoped to two page types, not a general editor (A-1).
- **Complexity (market check):** On the page engine; per-link screening (Safe Browsing) on every URL.
- **Complexity (market check):** Object storage + CDN + malware scan on upload + size limits per plan (SRS-Q-11) + replace flow. Viewer with footer on mobile.
- **Market:** *Hosted landing page / microsite builder* (competitive standard, paid — mid tier); *Link-in-bio / multi-link page* (competitive standard, free with limits); *PDF / file hosting* (table stakes, free with limits)

#### F-23

**Clear "not live" pages** · V1 · Must · size **S** · ⚪

- **What:** Friendly, branded QR.CA pages in English and French for every state where a code does not open its destination: paused (by the owner or in Archive), no active plan (per SRS-Q-01), deleted, disabled for safety, never existed. The tone is friendly, e.g. "Sorry — the code you're scanning is not available right now" (DS-11). Never a browser error.
- **Why:** A printed code cannot be recalled; whatever it shows is the business's face.
- **Solves:** Codes that look broken or like a scam when they stop working.
- **Who:** Scanner · **Problems:** BP-04 Trials and cancellations that kill printed codes, BP-06 A trusted redirect domain attracts abuse · **Goals:** G-03
- **Depends on:** F-19 Fast, reliable redirect · **Needed by:** F-15, F-33, F-50
- **Scope map (size):** `DYN-05` ?, `TRS-03` S · **SRS:** QR-U-39
- **Figma:** not drawn · ⚠️ **scanner-side state pages not drawn** (C-4)
- **Business rules:** BRL-02, BRL-03, BRL-04
- **Flows:** FL-06, FL-12
- **Notes and risks:** Not drawn in the wireflows (Q-W10).
- **Complexity (market check):** State machine account → code: lapse/renewal events from Recurly webhooks drive mass status changes; must be idempotent and fast to reverse.
- **Open questions:** SRS-Q-01 ⚠️ — What does a scanner see when the trial ends or a subscription lapses? Expire (wireflows), the client's *"your codes will expire in…"*, or a branded paused page with the same ID that resumes on payment (recommended) *(Open)*
- **Market:** *Code deactivation on downgrade / cancel* (table stakes, varies)

#### F-24

**No ads for scanners** · V1 · Must · size **—** · ⚪

- **What:** No advertising, interstitials or third-party content on any hosted or fallback page.
- **Why:** The scan is the business's moment with its own customer.
- **Solves:** Scanners distrusting a code, and owners embarrassed by what their code shows.
- **Who:** Scanner · **Problems:** BP-06 A trusted redirect domain attracts abuse · **Goals:** G-03, G-05
- **Depends on:** —
- **Scope map (size):** — · **SRS:** QR-U-38
- **Figma:** not drawn
- **Business rules:** BRL-34
- **Flows:** FL-12
- **Notes and risks:** The client is interested in testing ad-supported codes for non-paying customers later (C-1.1 ✅). This rule holds for V1.

#### F-60

**Time-based redirects** · V1 · Must · size **M** · 🟡

- **What:** One dynamic code opens different destinations by schedule (days of week, time windows, in the business's time zone), with a default destination outside every window: breakfast menu in the morning, dinner menu in the evening (A-10).
- **Why:** Maps onto how a restaurant actually operates; proposed by Denys Melnyk.
- **Solves:** Restaurants printing several codes or editing the destination by hand every day.
- **Who:** Owner (customer), Scanner · **Problems:** BP-01 A printed code cannot be changed · **Goals:** G-04
- **Depends on:** F-19 Fast, reliable redirect
- **Scope map (size):** `DYN-08` M · **SRS:** QR-U-43
- **Figma:** not drawn · ⚠️ **schedule editor not drawn** (C-4)
- **Business rules:** BRL-06, BRL-07
- **Flows:** FL-03, FL-12
- **Notes and risks:** Evaluated in the redirect hot path; must add no noticeable latency. Not drawn in the wireflows yet. Pause and archive win over any schedule (BRL-06).
- **Complexity (market check):** Time windows are evaluated inside the redirect hot path (A-10); design the destination record so geo / device rules can be added later without a re-platform.
- **Market:** *Rule-based smart routing (geo / time / device / OS / language / scan count)* (competitive standard, paid — mid tier)

### M4 · Scan statistics

#### F-25

**Statistics for each code** · V1 · Must · size **M** · ✅

- **What:** Total and unique scans, scans over time, time of day, device / OS / browser, and country and city, with period, time and location filters. Unique = one visitor fingerprint per code per day; scanners are never identified. **Basic bot filtering**: known link-preview bots (Slack, iMessage, WhatsApp…) are not counted (A-3). **Referrer is stored when present**, without a widget in V1 (A-5).
- **Why:** Brief §3 lists these QR-level analytics.
- **Solves:** Owners not knowing whether a code works.
- **Who:** Owner (customer) · **Problems:** BP-05 The business cannot tell whether a code works · **Goals:** G-04
- **Depends on:** F-19 Fast, reliable redirect · **Needed by:** F-26, F-27, F-47
- **Scope map (size):** `ANL-01` M, `ANL-02` S, `ANL-03` S, `ANL-04` S, `ANL-05` S, `ANL-06` S, `ANL-10` M · **SRS:** QR-U-28
- **Figma:** `8045:2575`
- **Business rules:** BRL-22, BRL-26
- **Flows:** FL-08, FL-12
- **Complexity (market check):** Event pipeline off the redirect path (queue → store → aggregates). Daily unique = salted hash. Latency target ≤ 5 min (proposed).
- **Complexity (market check):** IP→geo database (licence, e.g. MaxMind) and UA parsing; city-level only (BRL-26).
- **Complexity (market check):** Link-preview bots (Slack, iMessage) inflate scans from day one — at least a UA denylist is cheap.
- **Complexity (market check):** Salt rotation and never storing raw IP with the hash — a design constraint for the event store.
- **Market:** *Scan analytics dashboard (total + unique scans)* (table stakes, free with limits); *Geolocation + device/OS + referrer breakdown* (table stakes, free with limits); *Bot-scan filtering* (competitive standard, paid — mid tier); *IP anonymisation / cookieless scan analytics* (emerging, varies)

#### F-26

**Statistics across all codes** · V1 · Must · size **—** · ⚪

- **What:** The same numbers across the account, plus top-performing code and busiest day and time, filterable by folder and code.
- **Why:** Owners with several codes want the total picture; drawn in the wireflows.
- **Solves:** Adding up per-code numbers by hand.
- **Who:** Owner (customer) · **Problems:** BP-05 The business cannot tell whether a code works · **Goals:** G-04
- **Depends on:** F-25 Statistics for each code
- **Scope map (size):** `ANL-14` ? · **SRS:** QR-U-29
- **Figma:** `8045:3155`
- **Flows:** FL-08
- **Notes and risks:** V1 Must (A-16).
- **Complexity (market check):** Event pipeline off the redirect path (queue → store → aggregates). Daily unique = salted hash. Latency target ≤ 5 min (proposed).
- **Market:** *Scan analytics dashboard (total + unique scans)* (table stakes, free with limits)

#### F-27

**Helpful empty state** · V1 · Must · size **S** · ⚪

- **What:** Codes with few scans show guidance on what will appear and how to get scans, instead of an empty chart.
- **Why:** Benchmark data: a third of dynamic codes are never scanned and the median gets two scans.
- **Solves:** Analytics that look broken for most users.
- **Who:** Owner (customer) · **Problems:** BP-05 The business cannot tell whether a code works · **Goals:** G-04
- **Depends on:** F-25 Statistics for each code
- **Scope map (size):** `ANL-03` S · **SRS:** QR-U-28
- **Figma:** not drawn
- **Flows:** FL-08
- **Complexity (market check):** Event pipeline off the redirect path (queue → store → aggregates). Daily unique = salted hash. Latency target ≤ 5 min (proposed).
- **Market:** *Scan analytics dashboard (total + unique scans)* (table stakes, free with limits)

#### F-28

**Scan-summary emails** · Later · Won't (V1) · size **S** · ⚪

- **What:** Daily, weekly or monthly scan summary by email.
- **Why:** A retention mechanic; the only analytics many owners will read.
- **Solves:** Owners forgetting the product between prints.
- **Who:** Owner (customer) · **Problems:** BP-05 The business cannot tell whether a code works · **Goals:** G-04
- **Depends on:** —
- **Scope map (size):** `ANL-12` S · **SRS:** — (system requirement / later)
- **Figma:** `8045:3122`
- **Notes and risks:** Drawn in Account Settings; hidden at launch.
- **Market:** *Email scan notifications* (competitive standard, paid — entry tier)

#### F-29

**Export and period comparison** · Later · Won't (V1) · size **S** · ⚪

- **What:** Export the current view or all data; compare a period with the previous one.
- **Why:** Marketers attribute in their own tools.
- **Solves:** Manual copying of numbers into reports.
- **Who:** Owner (customer) · **Problems:** BP-05 The business cannot tell whether a code works, BP-08 Heavy users need scale and automation · **Goals:** G-04
- **Depends on:** —
- **Scope map (size):** `ANL-13` S, `ANL-14` ? · **SRS:** — (system requirement / later)
- **Figma:** `8045:3155` · `8045:2575`
- **Complexity (market check):** UTM passthrough is near-free in the redirect.
- **Market:** *CSV export + UTM handling + GA4* (competitive standard, paid — mid tier)

### M5 · Account, trial and billing

#### F-30

**Sign-up, log-in and password recovery** · V1 · Must · size **M** · ✅🟡

- **What:** Email + password with Terms acceptance, or Google. **Email confirmation is required at sign-up** (resend, change email; Google exempt) (DS-07). Generic error on wrong credentials and slowing of repeated attempts. **Password reset by one-time code (OTP)**: enter email → code → new password; resend after 60 s (A-11). Signs out other sessions.
- **Why:** Accounts are in the brief (§4); Google sign-up shortens the first session.
- **Solves:** Friction at sign-up and locked-out owners.
- **Who:** Visitor, Owner (customer) · **Problems:** BP-03 Existing tools are confusing or poor to use, BP-09 A self-serve business needs to run without sales · **Goals:** G-01
- **Depends on:** F-44 Customer email (Customer.io) · **Needed by:** F-01, F-38, F-64
- **Scope map (size):** `ACC-02` M · **SRS:** QR-U-03, QR-U-04, QR-U-05
- **Figma:** `8055:3551` · `8055:3363` · `8067:2887`
- **Flows:** FL-01, FL-02
- **Notes and risks:** OTP reset as drawn by Oleg (Figma 30.09, `8067:2887`).
- **Complexity (market check):** Plus required email confirmation at sign-up (DS-07): Customer.io transactional email, resend, change-email.
- **Open questions:** SRS-Q-28 — Email confirmation: legal / compliance requirement? Why does Uniqode accept only corporate emails? *(Open)*
- **Market:** *Email-gated / download-gated free codes* (competitive standard, free with limits)

#### F-31

**Free trial and welcome** · V1 · Must · size **M** · ✅

- **What:** A 14-day trial with no card starts at sign-up. A welcome window either offers to download the home-page code or to create a first one, and explains the trial: length, what is included, end date, what happens to codes afterwards.
- **Why:** The client chose the 14-day no-card trial used by his two benchmarks (C-6).
- **Solves:** Visitors unwilling to pay before trying, and later surprise about what the trial meant.
- **Who:** Owner (customer) · **Problems:** BP-09 A self-serve business needs to run without sales, BP-04 Trials and cancellations that kill printed codes · **Goals:** G-02
- **Depends on:** F-43 Subscription management (Recurly + Stripe), F-44 Customer email (Customer.io) · **Needed by:** F-32
- **Scope map (size):** `BIL-01` M, `BIL-04` M · **SRS:** QR-U-06, QR-U-31
- **Figma:** `8055:3551`
- **Flows:** FL-01, FL-09
- **Notes and risks:** Adding a card during the trial is optional, never required (against the wireflows' W-2). **Entitlements are configurable** (A-14): trial → paid by default, an optional *Basic* set (static codes stay live) can be switched on; the button reads "Not now" rather than "Stay Free".
- **Complexity (market check):** ⚠️ **Plan model still open** (SRS-Q-07, Q-08): entitlements, limits and gates touch creation, API, bulk, analytics, sidebar variants. Estimate the entitlement engine as configurable.
- **Open questions:** SRS-Q-07 — Any free plan, or only trial → paid? Are static codes free after the trial, and what does a static code in Archive do? *(Open)*; SRS-Q-08 ⚠️ — Plans, prices, limits, entitlements, trial entitlements, proration *(Open)*
- **Market:** *Free tier with dynamic-code cap* (table stakes, free with limits)

#### F-32

**Trial countdown** · V1 (wording to confirm) · Must · size **M** · ✅

- **What:** A banner in the bottom-left of the sidebar with days left, the end date, what happens to codes, and Upgrade. Reminder emails before the end (proposed 3 days and 1 day).
- **Why:** The client expects exactly this message, in this place, for transparency (C-1.3).
- **Solves:** Customers unaware that their codes will change when the trial ends.
- **Who:** Owner (customer) · **Problems:** BP-04 Trials and cancellations that kill printed codes · **Goals:** G-02, G-03
- **Depends on:** F-31 Free trial and welcome
- **Scope map (size):** `BIL-04` M, `EXP-04` M · **SRS:** QR-U-30
- **Figma:** `8045:3479`
- **Flows:** FL-09
- **Open questions:** SRS-Q-01 ⚠️ — What does a scanner see when the trial ends or a subscription lapses? Expire (wireflows), the client's *"your codes will expire in…"*, or a branded paused page with the same ID that resumes on payment (recommended) *(Open)*

#### F-33

**End of trial and lapse behaviour** · To confirm · Must · size **S** · ✅⚪

- **What:** What happens when a trial ends or a plan lapses without payment. Owner side (decided): can log in and see everything, cannot create new dynamic codes, is offered a plan. Scanner side (open): codes expire, or show a branded paused page and resume on payment with no reprint (recommended).
- **Why:** It shapes onboarding, the banner, billing and every scanner-facing page.
- **Solves:** The category's worst moment: a printed code that goes dead.
- **Who:** Owner (customer), Scanner · **Problems:** BP-04 Trials and cancellations that kill printed codes · **Goals:** G-02, G-03
- **Depends on:** F-23 Clear "not live" pages, F-43 Subscription management (Recurly + Stripe)
- **Scope map (size):** `DYN-05` ?, `TRS-03` S · **SRS:** QR-U-31, QR-U-39
- **Figma:** not drawn
- **Business rules:** BRL-03, BRL-04
- **Flows:** FL-09
- **Notes and risks:** The wireflows say codes expire; the client expects expiry messaging (C-1.3); the KB recommends a paused page. Decision: SRS-Q-01.
- **Complexity (market check):** ⚠️ **Plan model still open** (SRS-Q-07, Q-08): entitlements, limits and gates touch creation, API, bulk, analytics, sidebar variants. Estimate the entitlement engine as configurable.
- **Complexity (market check):** State machine account → code: lapse/renewal events from Recurly webhooks drive mass status changes; must be idempotent and fast to reverse.
- **Open questions:** SRS-Q-01 ⚠️ — What does a scanner see when the trial ends or a subscription lapses? Expire (wireflows), the client's *"your codes will expire in…"*, or a branded paused page with the same ID that resumes on payment (recommended) *(Open)*; SRS-Q-07 — Any free plan, or only trial → paid? Are static codes free after the trial, and what does a static code in Archive do? *(Open)*
- **Market:** *Free tier with dynamic-code cap* (table stakes, free with limits); *Code deactivation on downgrade / cancel* (table stakes, varies)

#### F-34

**Upgrade from anywhere** · V1 · Must · size **M** · ✅⚪

- **What:** An upgrade window reachable from the banner, the account menu, a locked feature, or the dashboard without a plan. It shows what is included and when the charge happens, takes card details in the payment provider's secure form, and handles success and error.
- **Why:** Conversion happens at the moment of need.
- **Solves:** Owners who want to pay but cannot find where.
- **Who:** Owner (customer) · **Problems:** BP-09 A self-serve business needs to run without sales · **Goals:** G-02
- **Depends on:** F-43 Subscription management (Recurly + Stripe)
- **Scope map (size):** `BIL-01` M, `BIL-02` M, `BIL-03` M · **SRS:** QR-U-32
- **Figma:** `8053:2117`
- **Flows:** FL-09

#### F-35

**Plans and billing** · V1 (plans and prices to confirm) · Must · size **M** · ✅

- **What:** Plans in CAD, monthly and yearly, with GST / HST / QST by province. Active plan details, change plan (including downgrade that never disables live codes), update card, order history with invoice PDFs.
- **Why:** Billing is in the brief (§4); the client proposed a three-tier ladder (C-1.2).
- **Solves:** Opaque billing, and the need for support to change a plan.
- **Who:** Owner (customer) · **Problems:** BP-09 A self-serve business needs to run without sales · **Goals:** G-02, G-07
- **Depends on:** F-43 Subscription management (Recurly + Stripe) · **Needed by:** F-11, F-40, F-62
- **Scope map (size):** `BIL-01` M, `BIL-02` M, `BIL-03` M, `BIL-04` M, `BIL-05` M, `BIL-06` S, `BIL-07` S · **SRS:** QR-U-33
- **Figma:** `8045:3051`
- **Business rules:** BRL-09, BRL-12, BRL-35, BRL-36
- **Flows:** FL-09, FL-10
- **Notes and risks:** Client's ladder: $120/yr or $20/mo · ~$180/yr · $50/mo. Downgrade and invoice download are not drawn in the wireflows.
- **Open questions:** SRS-Q-08 ⚠️ — Plans, prices, limits, entitlements, trial entitlements, proration *(Open)*
- **Market:** *Canadian jurisdiction / Canadian-operated positioning* (emerging, varies)

#### F-36

**Cancel in the product** · V1 · Must · size **M** · ✅⚪

- **What:** Cancel Plan with an optional reason and **at most one optional retention offer** (e.g. a discount) that can be skipped (A-12); the plan stays active to the end of the paid period, is not renewed, and then behaves as a lapsed trial. No contact with support needed.
- **Why:** Trust: trial-trap billing is a known reputational liability the client agreed with (C-7).
- **Solves:** Customers who feel trapped, and chargebacks.
- **Who:** Owner (customer) · **Problems:** BP-04 Trials and cancellations that kill printed codes · **Goals:** G-02
- **Depends on:** F-43 Subscription management (Recurly + Stripe)
- **Scope map (size):** `BIL-04` M, `BIL-08` ? · **SRS:** QR-U-34
- **Figma:** `8045:3051`
- **Business rules:** BRL-15
- **Flows:** FL-10

#### F-37

**Failed payments** · V1 · Must · size **M** · ✅

- **What:** When a renewal fails, the owner gets an email and an in-app banner with a link to update the card; payment is retried automatically; only after the retry period does the account lapse.
- **Why:** Payment failures are in the brief (§4); involuntary churn is the cheapest churn to prevent.
- **Solves:** Codes changing without warning because a card expired.
- **Who:** Owner (customer) · **Problems:** BP-04 Trials and cancellations that kill printed codes, BP-09 A self-serve business needs to run without sales · **Goals:** G-03, G-07
- **Depends on:** F-43 Subscription management (Recurly + Stripe), F-44 Customer email (Customer.io), F-15 Pause and reactivate
- **Scope map (size):** `BIL-04` M · **SRS:** QR-U-35
- **Figma:** not drawn · ⚠️ **failed-payment banners and emails not drawn** (C-4)
- **Flows:** FL-10
- **Notes and risks:** Not drawn in the wireflows (Q-W12). Driven by Recurly webhooks (F-43).

#### F-38

**Account settings** · V1 · Must · size **M** · ✅

- **What:** Edit name; change email (current password, confirmation to the new address); change password (signs out other sessions).
- **Why:** Basic account management from the brief (§4).
- **Solves:** Support requests for simple account changes.
- **Who:** Owner (customer) · **Problems:** BP-10 A small team must support customers without engineering · **Goals:** G-07
- **Depends on:** F-30 Sign-up, log-in and password recovery
- **Scope map (size):** `ACC-02` M · **SRS:** QR-U-36
- **Figma:** `8045:3122`
- **Flows:** FL-11

#### F-39

**Delete account** · V1 · Must · size **—** · ⚪

- **What:** Permanent deletion, confirmed by typing the full name, after an explanation of what happens to printed codes. Cancels any plan, deletes personal data, shows a final page with links to the home page and support.
- **Why:** Customers must be able to leave and take their data with them.
- **Solves:** Privacy obligations and support requests to close accounts.
- **Who:** Owner (customer) · **Problems:** BP-12 Privacy and legal obligations from day one, BP-10 A small team must support customers without engineering · **Goals:** G-05
- **Depends on:** F-43 Subscription management (Recurly + Stripe)
- **Scope map (size):** `ACC-08` ? · **SRS:** QR-U-37
- **Figma:** `8045:3122`
- **Business rules:** BRL-01
- **Flows:** FL-11

#### F-62

**Automatic currency conversion** · To confirm · Should · size **M** · 🟡

- **What:** Prices on the pricing page, upgrade window and checkout are shown in the visitor's local currency, detected from location or browser, with a manual switch. Canadian visitors see CAD with GST / HST / QST.
- **Why:** Visitors from outside Canada (US first) compare prices in their own currency; a price they have to convert themselves is friction at the moment of paying.
- **Solves:** Non-Canadian visitors abandoning the upgrade because the price is in CAD only.
- **Who:** Visitor, Owner (customer) · **Problems:** BP-09 A self-serve business needs to run without sales, BP-03 Existing tools are confusing or poor to use · **Goals:** G-02
- **Depends on:** F-35 Plans and billing
- **Scope map (size):** `BIL-05` M, `BIL-09` ? · **SRS:** QR-U-33
- **Figma:** not drawn
- **Notes and risks:** Proposed by Christian, 2026-09-30. ⚠️ Two different things: **display** in local currency (charge still CAD) or **charging** in local currency (Recurly multi-currency price lists, FX risk, tax per country). Today BRL-35 says prices are set and charged in CAD. QR TIGER already auto-localises currency by visitor geo (scope-map BIL-05). Which one is SRS-Q-24; Denys to confirm what Recurly supports.
- **Open questions:** SRS-Q-24 — Currency: show prices in the visitor's local currency only, or also charge in it? Which currencies at launch? *(Open)*
