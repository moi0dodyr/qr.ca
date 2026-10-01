<!--
  UPSTREAM COPY. DO NOT EDIT.
  Source of truth: Christian Kapuzo's KB, SRS v1.0 subpage "Part 2c" (Notion).
  Received 2026-10-01 (pasted by Oleg S). Internal: not for the client.
  Relative paths such as ../07_architecture/… refer to the KB, not to this repo.
-->

# Part 2c — System requirements, scope, integrations, risks, open questions, glossary

## 12. System Requirements

Constraints the system must meet. How it meets them is Denys Melnyk's design (`../07_architecture/architecture-starting-point.md`); where his posted design already answers a constraint, it is cited.

### 12.1 Data integrations

| System | Direction | What flows | Not stored by QR.CA |
| --- | --- | --- | --- |
| Stripe | out / in | Card payments as gateway (✅ brief §4) | Card numbers (tokenised by Stripe) |
| Recurly | out / in | Subscriptions, plans, trials, invoices, dunning, usage for usage-based billing (✅ brief §4, C-2, C-5; decisions §2 #1) | Card numbers |
| Customer.io | out | Lifecycle and transactional email, segmentation by scan volume (✅ C-2, C-5) | — |
| Amplitude | out | Product-funnel events (✅ brief §3, C-2). Event names: `event-taxonomy.md` | No scanner identity |
| Google Safe Browsing (or equivalent) | out / in | Destination URLs for reputation checks (✅ C-2) | — |
| Google sign-in | in | Verified email and name at sign-up | Google password |
| Localisation platform (Crowdin or similar) | out / in | UI strings for en / fr-CA (✅ brief §5) | — |
| Google Tag Manager | on hosted pages and marketing site | Owner's and QR.CA's own tags (✅ C-2) | — |

### 12.2 Business rules

- **Code identity.** An identifier is never reassigned or reused, including after deletion (BRL-01).
- **Unlimited edits.** Destination edits are never limited on any plan (BRL-10).
- **No scan caps.** No plan limits scans (BRL-09). Scan-volume tiering, which the client raised (C-5), is at most one rule inside Recurly, never the plan ladder (decisions §2 #8).
- **Limits block creation, never disable.** Exceeding a plan limit blocks new items only (BRL-12).
- **Account states.** `trial` → `subscribed` → `canceled (until period end)` → `no active subscription`; `trial` → `no active subscription`; `payment failed (retry)` → `subscribed` or `no active subscription`. Plus `suspended` (admin).
- **Code statuses shown to the owner:** `Active` · `Paused` (DS-02). **Archive is a folder**, not a status; a code in Archive is always `Paused`. System states behind them: `paused (owner)` · `paused (archived)` · `unpaid (account has no active subscription)` · `disabled (admin)` · `deleted`. What each serves to a scanner is QR-U-38 / QR-U-39.
- **Static codes** have no server state that can stop them: the content is in the code. They can be filed in Archive for tidiness but keep working (to confirm, SRS-Q-07).
- **Precedence.** `disabled (admin)` > `deleted` > `paused (owner or archived)` > `unpaid` > `active`.
- **Duplicate.** A duplicate gets a new code ID and a new short redirect link; it never shares analytics with the original (DS-01).
- **Account states** add `email not confirmed`: sign-up is complete only once the email is confirmed (DS-07).
- **Limits.** A plan limit on the number of codes applies to all creation (app, bulk, API); bulk also has a per-upload cap (DS-09).
- **Entitlements are configuration, not code** (A-14): plans, limits and feature gates (API, bulk, tags, templates) are read from configuration / Recurly so the model can change without a release.
- **Schedules** (QR-U-43): pause / archive > schedule window > default destination (BRL-06, BRL-07).
- **Bot filtering** (A-3): known preview bots are redirected but not counted.
- **Trial.** 14 days, no card (✅ C-6). End-of-trial behaviour per SRS-Q-01. Recommended: codes move to `unpaid`, serve the paused page, and return to `active` on payment with no reprint (BRL-03, BRL-04).
- **Unique scan.** One visitor fingerprint per code per UTC day; fingerprint is a salted hash, salt rotated daily and never stored with the hash (BRL-22; event taxonomy `visitor_hash`).
- **Currency and tax.** CAD; GST / HST / QST by province (BRL-35). Monthly available on every paid plan (BRL-36).
- **No anonymous codes.** Download needs sign-up (DS-08); BRL-08 (30-day retention of anonymous codes) is retired.

### 12.3 Security and privacy (HIPAA not applicable)

- **No PHI** anywhere in the system. HIPAA does not apply. Personal information is governed by **PIPEDA**; commercial email by **CASL** (consent and unsubscribe in every marketing email).
- Encryption in transit everywhere (TLS). Encryption at rest for databases, file storage and backups.
- Passwords stored only as strong salted hashes. Card data never touches QR.CA systems.
- Admin console behind two-factor sign-in, role-based access, and an action log (QR-A-06).
- Rate limiting on sign-in, sign-up, creation, API and redirect traffic (`PLT-04`).
- Uploaded files are malware-scanned and served from a domain that cannot read application cookies.
- Scan data is aggregate and non-identifying; geography capped at city (BRL-23, BRL-26).
- **Quebec.** Canadian data residency (`TRS-04`) and the Law 25 consent layer (`TRS-05`) are post-MVP by the client's decision (✅ C-4). The architecture must allow both later without re-platforming. Law 25 still applies to Quebec residents' data from day one; the MVP's exposure is limited by keeping redirect-side measurement non-identifying and by the consent decision on owner tags (QR-U-41).

### 12.4 External API and platform webhooks

- **Owner API** (QR-U-40): authenticated by per-account API key; JSON; scoped to the key's account; rate-limited; versioned; subject to the same plan limits as the web app. No personal data about scanners is exposed.
- **UTM passthrough** (A-6): UTM parameters on the scan URL are passed to the destination.
- **Platform webhooks** (`PLT-09`, ✅ C-5): outbound events from QR.CA to Recurly (usage for usage-based billing) and Customer.io (scan-volume segmentation). Minimum events: account created, trial started / ending / ended, subscription changed, code created, code first scanned, scan-volume thresholds crossed. Delivery must retry on failure and never block the redirect. Owner-facing webhooks are post-MVP (post-sync decision, Christian, 2026-09-30). Inbound **Recurly webhooks** (payment failed, renewed, canceled, expired, new invoice) drive account and code states.

### 12.5 Notifications

Email through Customer.io, English and French, per the owner's language.

| Trigger | To | Must Have |
| --- | --- | --- |
| Sign-up verification; email change confirmation | Owner | ✅ |
| Password reset | Owner | ✅ |
| Welcome / first-code nudge | Owner | ✅ |
| Trial ending (proposed 3 days and 1 day before) and trial ended | Owner | ✅ |
| Payment succeeded (receipt), payment failed, subscription canceled | Owner | ✅ |
| Approaching a plan limit (before, not at, the limit — BRL-13) | Owner | ✅ |
| Code disabled by an admin | Owner | ✅ |
| Account deleted | Owner | ✅ |
| Scan-activity digests (Daily / Weekly / Monthly) | Owner | ✗ post-MVP (`ANL-12`) |

In-app: success and error toasts (per the wireflows), the trial banner, the failed-payment banner, the email-confirmation banner.

### 12.6 Performance and availability

Targets proposed in requirements v1.0 (⚪); Denys Melnyk to confirm or replace.

- Redirect: under 150 ms at the 95th percentile from within Canada, **including** app-store routing and time-based schedule evaluation.
- The redirect keeps working when the main application is down or deploying (Denys Melnyk's two-service split: thin redirect service, destination map in Redis).
- Scan events are fire-and-forget: analytics never delays a redirect or a page.
- Hosted pages show meaningful content within 2 seconds on a mid-range Android phone over 4G.
- Scan statistics update within [TBD] minutes of a scan (proposed 5).
- Bulk creation of [TBD] rows completes without blocking the owner's session (runs in the background with progress).

### 12.7 Session and authentication

- Email + password and Google sign-in (✅ brief §4; Figma). Apple sign-in not in MVP.
- Session idle timeout [TBD] (proposed 30 days with "remember me", 24 hours without). Admin sessions: 8 hours, two-factor.
- Password change and reset sign out other sessions.
- No external core platform to inherit from; QR.CA owns its own authentication.

### 12.8 Localisation, responsiveness, SEO, experimentation

- **Localisation** (`LOC-01`, ✅ brief §5): marketing site, onboarding, application, emails and hosted pages in English and fr-CA at launch. Strings managed in a localisation platform. No hard-coded text.
- **Responsive** (`PLT-05`, ✅ brief §2): every surface usable on phone and desktop, including creation, customization, dashboard and billing (✅ C-3).
- **SEO / LLM discoverability** (`PLT-06`, `DST-07`, ✅ brief §5): indexable marketing pages, clean information architecture, structured data. Owner pages are indexable by default, with an owner switch to hide them ([TBD]).
- **Experimentation** (`EXP-01`, `EXP-02`, ✅ brief §6): feature flags for onboarding, type selection, creation, templates, paywall and upgrade prompts; front-end changes to these steps need no back-end release. The A/B framework itself is post-MVP (`EXP-03`).

## 13. Out of Scope

| Excluded | Reason |
| --- | --- |
| Canadian data residency guarantee (`TRS-04`) | Client deferred it post-launch ✅ C-4. Architecture keeps the door open |
| Law 25 consent layer and preference centre (`TRS-05`) | Follows `TRS-04` ✅ C-4. Exposure noted in §12.3 |
| French-prominence compliance check (`LOC-03`) | Pending SRS-Q-05 |
| Geolocation / scan-count routing (`DYN-09`) | Post-MVP. Time-based routing is in V1 (QR-U-43) |
| General-purpose landing page editor (`DST-06`) | A-1: V1 page builder covers Multi-Link and vCard only |
| Scheduled publication (`DYN-15` candidate) | Drawn in the wireflows, not in any client source |
| Password-protected codes (`TRS-09`) | Post-MVP |
| Extra dynamic types: coupon, event, image, map, Facebook page, dynamic email / SMS / call (`GEN-13`, `DST-12`, `DST-13`) | The brief limits the dynamic catalogue to five ✅; static codes are in (DS-03); the rest waits for demand |
| Structured restaurant menu builder (sections, items, prices, allergens) (`DST-04`) | DS-04: "scope almost for a separate product". V1 menu is a PDF; revisit on usage |
| Anonymous download from the home page (`ACC-01`) | DS-08: sign-up is required to download |
| Scan-activity email digests (`ANL-12`) and CSV data export (`ANL-13`) | Post-MVP. UTM passthrough is in V1 |
| Comparison period in analytics | Real extra work; not in any client source |
| Owner-facing webhooks (`PLT-10`), Zapier / Make | Post-MVP (post-sync decision, Christian, 2026-09-30). Oleg removed the Webhooks screen after the sync; the client's webhook need is platform-side (§12.4) |
| Teams, roles, agency sub-accounts (`ACC-05`, `ACC-06`) | Brief's V2 list ✅ |
| Custom domains per customer, white-label (`DYN-11`) | Brief's V2 list ✅; it would hide the `qr.ca` asset |
| Ordering and payments on hosted pages (`DST-10`) | Not building: PCI scope, a different product |
| AI-generated art codes (`GEN-09`) | Not building: known to break scannability |
| Native mobile apps (`PLT-08`) | Brief's V2 list ✅ |
| SOC 2 (`TRS-08`) | Brief's V2 list ✅ |
| Advanced bot filtering (`ANL-10`) | Post-MVP. The V1 preview-bot denylist covers the basic case |
| Visual design, architecture, estimate | Separate Discovery outputs owned by Ruslan / Oleg, Denys Melnyk, Anatolii |

## 14. External Integrations

QR.CA handles no PHI, so no BAA is needed with any provider. The column records the privacy agreement that does matter here: a DPA under PIPEDA, and whether a Canadian region exists (relevant when `TRS-04` returns).

| Service | Purpose | BAA Status | DPA / Canadian region |
| --- | --- | --- | --- |
| Stripe | Payment gateway | ❌ Not required | 🟡 DPA to confirm · region to confirm (Q-14) |
| Recurly | Subscription management, invoices, dunning, usage billing | ❌ Not required | 🟡 to confirm (Q-14) |
| Customer.io | Lifecycle and transactional email | ❌ Not required | 🟡 to confirm (Q-14) |
| Amplitude | Product analytics | ❌ Not required | 🟡 to confirm (Q-14) |
| Google Safe Browsing (or similar) | Destination reputation checks | ❌ Not required | 🟡 terms to confirm (commercial use) |
| Google sign-in | Authentication | ❌ Not required | 🟡 to confirm |
| Google Tag Manager | Tags on marketing site and owner pages | ❌ Not required | 🟡 consent implications (R-09) |
| Crowdin (or similar) | Translation management | ❌ Not required | holds UI strings only |
| Cloud hosting, file storage, Redis | Platform | ❌ Not required | 🟡 Denys Melnyk's choice; Canadian region available on major clouds |
| `qr-code-styling` (open source) | Code rendering (Denys Melnyk's pick) | ❌ Not required | runs in our stack |

## 15. Risk Register

SRS-level risks. The KB's full register is `../09_risks/risk-register.md`.

| # | Risk | Type | Likelihood | Impact | Mitigation |
| --- | --- | --- | --- | --- | --- |
| SR-01 | **Trial-end behaviour is undecided** and the wireflows, the client's words and our recommendation point three ways (expire / expire-message / pause page). Design and build on the wrong one means rework of onboarding, banners, billing and the scanner pages | Dependency | High | High | SRS-Q-01 first. The code-state model in §12.2 supports either answer, so architecture can proceed |
| SR-02 | **Wireflows are WIP and wider than the MVP**: 23 types and six post-MVP features in the flows. An estimate built on them will be too high, or the design will promise what the build does not ship | Dependency | High | High | Mark every wireflow item V1 / later (Q-W7) before design or estimation uses them. This SRS is the V1 line |
| SR-03 | **The scanner's side is not designed** (live pages, paused / unavailable / safety pages). It is where the most people see the product | Technical / UX | High | High | QR-U-38, QR-U-39 define it. Add to the wireflows (Q-W10) |
| SR-04 | **Redirect availability**: a printed code cannot be recalled; an outage breaks every customer's print at once | Technical / architecture | Low | Critical | Separate redirect service, independent deploy, cached destination map, targets in §12.6 (Denys Melnyk) |
| SR-05 | **Abuse on a trusted national domain**: phishing codes damage `qr.ca` and the redirect domain | Compliance / security | Medium | High | Screening at save and on schedule, admin disable, separate redirect domain (✅ C-2 #4), rate limits |
| SR-06 | **Privacy exposure in Quebec before Law 25 tooling exists**: owner tags (GTM, pixels) on hosted pages fire on Quebec residents without consent tooling | Compliance | Medium | High | Keep redirect measurement non-identifying; tags (GTM, GA4, Meta Pixel) are in V1 (A-9), so decide owner-tag consent early (SRS-Q-18, R-09); tags load only on hosted pages |
| SR-07 | **Two billing systems before pricing exists** (Stripe + Recurly) adds integration cost and timeline | Technical / dependency | Medium | Medium | Client's explicit choice ✅; keep. Plans configured in Recurly so pricing can change without code (R-16) |
| SR-08 | **Scope drift through "table stakes"**: API, CSV, webhooks, executive analytics were added by the client; nothing was removed except residency and Law 25 | Delivery | High | Medium | Hold the MVP line in §9 and §13; route each new ask through SRS-Q review |

## 16. Open Questions

⚠️ = blocks design or estimate. Owner is who answers. Client questions go through Anastasia, only with Christian's sign-off per item.

| # | Question | Status | Owner |
| --- | --- | --- | --- |
| SRS-Q-01 ⚠️ | **What does a scanner see when the trial ends or a subscription lapses?** The code expires (wireflows W-1), the client's *"your codes will expire in…"* (C-1.3), or a branded paused page with the same ID that resumes on payment (recommended, `DYN-05`). Also fixes the banner wording in QR-U-30 | Open | Client (via Anastasia), Oleg for the flow · Q-W1 |
| SRS-Q-02 | Is the **Restaurant Menu** type in V1? | ✅ Closed: yes, **as a PDF**; structured builder out (DS-04) | Design sync 2026-09-30 |
| SRS-Q-03 | **Which types ship in V1?** | ◐ Partly closed: the brief's five dynamic + PDF menu + **static codes incl. Wi-Fi** (DS-03, Christian). Open: extra dynamic types; static Links Page and vCard vs Contact (Q-W6) | Christian, Oleg |
| SRS-Q-04 | **Home-page download**: sign-up or anonymous? | ✅ Closed: **sign-up required** (DS-08). One-line confirmation with the client; Oleg's PNG-preview concept waits for his reaction | Design sync 2026-09-30 |
| SRS-Q-05 ⚠️ | **Bilingual pages**: bilingual fields on every page (brief §5), and is missing French a warning or a block? Is the prominence check in? | Open | Client · decisions §5 🔴 · Q-W8 |
| SRS-Q-06 | Archive vs Pause | ✅ Closed: **two statuses (Active, Paused); Archive is a folder; archiving pauses** (DS-02). Follow-up: SRS-Q-26 | Design sync 2026-09-30 |
| SRS-Q-07 | Is there any free plan, or only trial → paid? The brief says *"free + paid"*; the client's comment says 14-day trial. Now also: **are static codes free after the trial** (Oleg's *Basic* user type), and what does a static code in Archive do? | Open | Client · W-3 · Q-W3 |
| SRS-Q-08 ⚠️ | Plans, prices, limits and entitlements (codes, pages, storage, API, bulk, templates), trial entitlements, proration | Open | Client; recommendation in decisions §3 |
| SRS-Q-09 | Time-based redirects and the review funnel | ✅ Closed: **both in V1** (A-10) | Christian, 2026-09-30 |
| SRS-Q-10 | Email verification at sign-up | ✅ Closed: **required confirmation at sign-up** (DS-07); Google sign-up exempt. Still open: password rules; legal check SRS-Q-28 | Design sync 2026-09-30 |
| SRS-Q-11 | PDF / File: allowed types, max size, storage per plan | Open | Denys Melnyk, client · brief §1 |
| SRS-Q-12 | Scannability fail: block or override? | ✅ Closed: **override after confirmation + "not healthy" label** (DS-05) | Design sync 2026-09-30 |
| SRS-Q-13 | Bulk creation limits | ◐ Partly closed: **per-upload cap + plan limit on codes** (DS-09). Open: the numbers | Client, Denys Melnyk |
| SRS-Q-14 | Scan history of deleted codes: kept in totals or removed? | Open | Denys Melnyk |
| SRS-Q-15 | Name of the dedicated redirect domain (✅ C-2 #4 requires one) | Open | Client |
| SRS-Q-16 | Performance targets in §12.6, session timeouts in §12.7, statistics latency | Open | Denys Melnyk |
| SRS-Q-17 | Refunds: policy, and whether they are done in the admin console or in Recurly | Open | Client |
| SRS-Q-18 | Consent for owner tags (GTM / GA4 / Meta Pixel) on hosted pages before the Law 25 layer exists | Open | Denys Melnyk, legal (Q-17 in client-questions) |
| SRS-Q-19 | Client's full name and legal entity for the document | Open | Anastasia · Q-01 |
| SRS-Q-20 | Recurly stays alongside Stripe | ✅ Closed | Client, C-2 / C-5 · decisions §2 #1 |
| SRS-Q-21 | Quebec, residency and Law 25 at launch | ✅ Closed: deferred | Client, C-4 |
| SRS-Q-22 | Trial with or without card | ✅ Closed: no card | Client, C-6 |
| SRS-Q-23 | API and CSV bulk upload in V1 | ✅ Closed: in | Client, C-2 #1 |
| SRS-Q-24 | Currency: show prices in the visitor's local currency only, or also charge in it? Which currencies at launch? | Open | Christian, then client; Denys for Recurly |
| SRS-Q-25 | Templates: which 10 starter templates, by industry or by style, and in V1 or later? | Open | Christian, Oleg; client |
| SRS-Q-26 | Does the product need a **terminal "archived" status** (cannot be revived), or is the Archive folder enough? Check competitors with trial accounts; decide from archive analytics | Open | Christian (A-1) |
| SRS-Q-27 | **Duplicates:** does an unchanged duplicate need a safeguard? How do analytics and safety checks treat two identical codes? | Open | Denys (A-2) |
| SRS-Q-28 | **Email confirmation:** any legal / compliance requirement? Why does Uniqode accept only corporate emails? | Open | Christian / Oleksandra (A-3) |
| SRS-Q-29 | **Bulk use cases:** which ones V1 supports (basic), which wait | Open | Christian (A-4) |

### 16a · Assumptions for the estimate (open client questions)

Until the client answers, the estimate assumes the following. Each is built so that the other answer is a configuration change, not a rebuild.

| # | Open question | Assumption for the estimate |
| --- | --- | --- |
| B-1 | What happens after the trial; free plan (SRS-Q-01, Q-07) | Codes pause and show the friendly page; optional *Basic* entitlement set; entitlements configurable |
| B-2 | Plans, prices, limits (SRS-Q-08) | Three paid tiers; limits and gates in configuration / Recurly |
| B-3 | Bilingual rule (SRS-Q-05) | Warn when French is missing; blocking is a flag |
| B-4 | Currency (SRS-Q-24) | Display the visitor's local currency; charge in CAD only |
| B-5 | Templates (SRS-Q-25) | 10 style templates; design content from Oleg |
| B-6 | Redirect domain name, refunds, file limits (SRS-Q-15, Q-17, Q-11) | Placeholders; no size impact |

## 17. Glossary

| Term | Definition |
| --- | --- |
| QR code | A square barcode a phone camera reads to open something |
| Dynamic code | A code that points at a QR.CA address which redirects to a destination the owner can change at any time |
| Static code | A code whose content is encoded directly in the pattern; cannot be changed or tracked after printing |
| Destination | What a code opens: a website, an app store, or a page QR.CA hosts |
| Hosted page / micro-landing | A simple, phone-first page QR.CA hosts behind a code (links page, business card). PDFs and menus open as the file with a QR.CA footer |
| Redirect domain | The dedicated domain dynamic codes are served from, separate from `qr.ca` |
| Code identifier | The permanent ID inside a dynamic code's address; never changes, never reused |
| Scan | One read of a code by a phone. **Unique scan**: first scan per visitor fingerprint per code per day |
| Scannability check | Pre-download test that a styled code will still read (contrast, quiet zone, density, logo, error correction) |
| Quiet zone | The empty margin around a code that scanners need |
| Error correction | Redundancy in a code that lets it read when partly covered, e.g. by a logo |
| vCard / `.vcf` | Standard digital contact card format |
| Trial | 14-day free use of the product, no card required |
| Owner | A registered account holder (`user` role) |
| Owner web app | The logged-in QR.CA workspace where owners create, configure and manage their codes (QR-U-42) |
| Owner API | The programmatic interface for owners' own systems (QR-U-40) |
| Admin console | The **internal** QR.CA tool for support and super admins (§11). Never the customer's workspace |
| Archive | A folder, always present, for codes the owner no longer uses. Archived dynamic codes are paused |
| Scanner | A member of the public who scans a code; no account |
| Support admin | QR.CA team member with the `admin` role |
| Super admin | Platform owner with the `superadmin` role |
| PLG | Product-led growth: customers find, try and buy the product without sales |
| MVP | Minimum viable product: the first release |
| CSV | Comma-separated spreadsheet file used for bulk creation |
| Webhook | An automatic message QR.CA sends to another system when an event happens |
| GTM | Google Tag Manager |
| GA4 | Google Analytics 4 |
| Stripe | Payment gateway |
| Recurly | Subscription and billing management system |
| Customer.io | Email and messaging platform |
| Amplitude | Product analytics platform |
| Crowdin | Translation management platform |
| CAD | Canadian dollar |
| GST / HST / QST | Canadian federal, harmonised and Quebec sales taxes |
| PIPEDA | Canada's federal private-sector privacy law |
| CASL | Canada's anti-spam law for commercial email |
| Law 25 | Quebec privacy law; consent before tracking |
| Bill 96 | Quebec French-language law; French at least as prominent as other languages in commercial material |
| PHI / HIPAA / BAA | US health-data terms. **Not applicable**: QR.CA handles no health data |
| DPA | Data processing agreement with a provider that handles personal data |
| MoSCoW | Priority scale: Must, Should, Could, Won't have |
| BRL-NN | A business rule in `business-rules.md` |
| W-N / Q-W-N | Wireflow contradictions and questions in `wireflows-review_2026-09-25.md` |

---

## Next step

**Estimation (DS-12)** — this v1.0 is the baseline Denys estimates against; §16a lists the assumptions. Still open before design is final: SRS-Q-01 (trial end), SRS-Q-05 (bilingual rule), SRS-Q-07 (free / static after trial) and SRS-Q-08 (plans). Mark every wireflow item V1 / later with Oleg. Then run `review-validator` for completeness and traceability. `bpmn-generator` is worth it after that for three flows only: trial → end of trial → lapse → reactivation; the code-state model; and the scanner's resolution path.

###
