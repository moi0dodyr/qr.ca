<!--
  UPSTREAM COPY. DO NOT EDIT.
  Source of truth: Christian Kapuzo's KB, 05_product/final_features-and-flows_v1.0_2026-09-30.md (Notion).
  Received 2026-10-01 (pasted by Oleg S). Internal: not for the client.
  Sections 4a, 4b, 4c and 5 are subpages that were not included. See ./README.md.
-->

# QR.CA — Features and User Flows v1.0 (final for estimation, 2026-09-30)

<aside>
⚠️

**Internal. Features and user flows v1.0: final for estimation (2026-09-30).** For Denys Melnyk (estimate, complexity, risks). Source of truth: `05_product/final_features-and-flows_v1.0_2026-09-30.md`, generated from the KB data. Not for the client as it stands. Nothing goes further without Christian's sign-off. The previous client draft (v0.1, with Oleg's comments) is kept as a backup: BACKUP Features and User Flows v0.1.

</aside>

**Version 1.0 · 2026-09-30 · Internal · Prepared by Christian Kapuzo (BA)**

This is **one of two baseline documents**. Estimate against both:

| Document | What it holds |
| --- | --- |
| **This file** | Every feature: what it is, why it exists, what it depends on, its relative size, risks, open questions, the flows that use it, and how it compares with the market |
| **SRS v1.0** (Notion) | The same scope as user stories with Given / When / Then acceptance criteria, system requirements, the risk register and the estimate assumptions (§16a) |

**Sources reconciled here:**

- the client's brief and comments;
- Oleksandra's market database *QR Master Features* (74 rows): `market-vs-v1`;
- Oleg's Figma flows (30.09, plus his changes after the design sync): `POST-SYNC-DIFF`;
- the design-sync decisions DS-01…DS-12 and Christian's decisions A-1…A-16 plus the post-sync decision: `discrepancies`.

**Rules for reading it:**

- **Sizes are relative (S / M / L) from the scope map, not hours.** Hours are Denys's, Anatolii's and Ruslan's.
- **Dependencies are a functional reading ⚪, not an architecture.** Architecture, stack and data model are Denys's.
- Confidence: ✅ the client said it · 🟡 a team decision or second-hand · ⚪ our work.
- Every V1 feature is **Must** (A-16). There is one number for V1, not separately priced options.

---

## 1 · Scope at a glance

**65 features.** V1: **58** · to confirm: **4** · later: **3**. **13 user flows.** SRS v1.0: 44 user stories + 6 admin stories, all Must.

| ID | Feature | Module | Release | Size | SRS | Figma |
| --- | --- | --- | --- | --- | --- | --- |
| F-01 | Home-page generator | M1 Making codes | V1 | L | QR-U-01, QR-U-02 | ✓ |
| F-02 | Core dynamic types (five) | M1 Making codes | V1 | M | QR-U-07, QR-U-08, QR-U-09, QR-U-15 | ✓ |
| F-03 | Restaurant menu (PDF) | M1 Making codes | V1 | M | QR-U-20 | ✓ |
| F-04 | Wi-Fi code (static) | M1 Making codes | V1 | — | QR-U-21 | ✓ |
| F-05 | Extra dynamic types | M1 Making codes | To confirm | S | QR-U-07 | ✓ |
| F-06 | Page builder | M1 Making codes | V1 | L | QR-U-10 | ✓ |
| F-07 | Code styling | M1 Making codes | V1 | M | QR-U-11 | ✓ |
| F-08 | Scannability check | M1 Making codes | V1 | M | QR-U-12 | ✓ |
| F-09 | Templates | M1 Making codes | V1 | M | QR-U-16 | ✓ |
| F-10 | Print-ready download | M1 Making codes | V1 | S | QR-U-14 | — |
| F-11 | Bulk creation (CSV) | M1 Making codes | V1 | M | QR-U-17 | ✓ |
| F-12 | English and French pages | M1 Making codes | V1 (rules to confirm) | — | QR-U-18 | ✓ |
| F-61 | Review / feedback funnel | M1 Making codes | V1 | — | QR-U-44 | ✗ not drawn |
| F-65 | Static codes | M1 Making codes | V1 | — | QR-U-07, QR-U-08, QR-U-21 | ✓ |
| F-13 | Dashboard | M2 Managing codes | V1 | S | QR-U-22 | ✓ |
| F-14 | Edit at any time | M2 Managing codes | V1 | M | QR-U-23 | ✓ |
| F-15 | Pause and reactivate | M2 Managing codes | V1 | S | QR-U-24 | ✓ |
| F-16 | Duplicate and delete | M2 Managing codes | V1 | S | QR-U-25 | ✓ |
| F-17 | Folders, tags and publication settings | M2 Managing codes | V1 | S | QR-U-13, QR-U-26 | ✓ |
| F-18 | Archive folder | M2 Managing codes | V1 | — | QR-U-27 | ✓ |
| F-64 | Owner web app (code workspace) | M2 Managing codes | V1 | S | QR-U-42 | ✓ |
| F-19 | Fast, reliable redirect | M3 What happens when someone scans | V1 | M | QR-U-38 | — |
| F-20 | Separate code domain | M3 What happens when someone scans | V1 (domain name to confirm) | — | QR-U-38 | — |
| F-21 | Smart app-store link | M3 What happens when someone scans | V1 | S | QR-U-19 | — |
| F-22 | Hosted pages | M3 What happens when someone scans | V1 | L | QR-U-38, QR-U-10 | ✗ not drawn |
| F-23 | Clear "not live" pages | M3 What happens when someone scans | V1 | S | QR-U-39 | ✗ not drawn |
| F-24 | No ads for scanners | M3 What happens when someone scans | V1 | — | QR-U-38 | — |
| F-60 | Time-based redirects | M3 What happens when someone scans | V1 | M | QR-U-43 | ✗ not drawn |
| F-25 | Statistics for each code | M4 Scan statistics | V1 | M | QR-U-28 | ✓ |
| F-26 | Statistics across all codes | M4 Scan statistics | V1 | — | QR-U-29 | ✓ |
| F-27 | Helpful empty state | M4 Scan statistics | V1 | S | QR-U-28 | — |
| F-28 | Scan-summary emails | M4 Scan statistics | Later | S | — | ✓ |
| F-29 | Export and period comparison | M4 Scan statistics | Later | S | — | ✓ |
| F-30 | Sign-up, log-in and password recovery | M5 Account, trial and billing | V1 | M | QR-U-03, QR-U-04, QR-U-05 | ✓ |
| F-31 | Free trial and welcome | M5 Account, trial and billing | V1 | M | QR-U-06, QR-U-31 | ✓ |
| F-32 | Trial countdown | M5 Account, trial and billing | V1 (wording to confirm) | M | QR-U-30 | ✓ |
| F-33 | End of trial and lapse behaviour | M5 Account, trial and billing | To confirm | S | QR-U-31, QR-U-39 | — |
| F-34 | Upgrade from anywhere | M5 Account, trial and billing | V1 | M | QR-U-32 | ✓ |
| F-35 | Plans and billing | M5 Account, trial and billing | V1 (plans and prices to confirm) | M | QR-U-33 | ✓ |
| F-36 | Cancel in the product | M5 Account, trial and billing | V1 | M | QR-U-34 | ✓ |
| F-37 | Failed payments | M5 Account, trial and billing | V1 | M | QR-U-35 | ✗ not drawn |
| F-38 | Account settings | M5 Account, trial and billing | V1 | M | QR-U-36 | ✓ |
| F-39 | Delete account | M5 Account, trial and billing | V1 | — | QR-U-37 | ✓ |
| F-62 | Automatic currency conversion | M5 Account, trial and billing | To confirm | M | QR-U-33 | — |
| F-40 | Owner API | M6 Connections and integrations | V1 (plans that include it to confirm) | M | QR-U-40 | ✓ |
| F-41 | Google Tag Manager on pages | M6 Connections and integrations | V1 | — | QR-U-41 | ✓ |
| F-42 | Google Analytics 4 and Meta Pixel fields | M6 Connections and integrations | V1 | — | QR-U-41 | ✓ |
| F-43 | Subscription management (Recurly + Stripe) | M6 Connections and integrations | V1 | M | QR-U-32, QR-U-33, QR-U-34, QR-U-35 | — |
| F-44 | Customer email (Customer.io) | M6 Connections and integrations | V1 | M | QR-U-03, QR-U-05, QR-U-30, QR-U-35 | — |
| F-45 | Product analytics (Amplitude) | M6 Connections and integrations | V1 | M | QR-A-05 | — |
| F-46 | Link safety check | M6 Connections and integrations | V1 | M | QR-A-04, QR-U-08 | — |
| F-47 | Platform events to Recurly and Customer.io | M6 Connections and integrations | V1 | — | — | — |
| F-48 | Webhooks for customers | M6 Connections and integrations | Later | M | — | ⚠️ removed |
| F-49 | Customer lookup | M7 Tools for the QR.CA team | V1 | M | QR-A-01 | ✗ not drawn |
| F-50 | Disable a harmful code | M7 Tools for the QR.CA team | V1 | S | QR-A-02 | ✗ not drawn |
| F-51 | Support actions | M7 Tools for the QR.CA team | V1 | S | QR-A-03 | ✗ not drawn |
| F-52 | Review queue | M7 Tools for the QR.CA team | V1 | M | QR-A-04 | ✗ not drawn |
| F-53 | Platform statistics | M7 Tools for the QR.CA team | V1 | M | QR-A-05 | ✗ not drawn |
| F-54 | Admin access control | M7 Tools for the QR.CA team | V1 | — | QR-A-06 | ✗ not drawn |
| F-55 | English and Canadian French product | M8 Across the whole product | V1 | M | — | — |
| F-56 | Phone and desktop everywhere | M8 Across the whole product | V1 | M | QR-U-11 | — |
| F-57 | Built to be found (SEO and AI discoverability) | M8 Across the whole product | V1 | L | — | — |
| F-58 | Built for testing | M8 Across the whole product | V1 (flags) · Later (A/B tool) | M | QR-U-02 | — |
| F-59 | Platform operations | M8 Across the whole product | V1 | M | — | — |
| F-63 | Public template gallery | M8 Across the whole product | To confirm | L | — | — |

Sizes by release (features whose scope-map items carry a size):

|  | S | M | L | — |
| --- | --- | --- | --- | --- |
| V1 | 11 | 30 | 4 | 13 |
| Not V1 | 4 | 2 | 1 | 0 |

*—* = no single scope-map item; size it from the SRS stories (mostly platform, admin and cross-cutting work).

---

## 2 · Decisions already built in

The documents already reflect these. Do not re-open them in the estimate; flag if one is technically unwise.

| # | Decision | Effect on the build |
| --- | --- | --- |
| DS-02 | Two code statuses (Active, Paused). **Archive is a folder**; archiving pauses a dynamic code | One state machine; Archive is a folder with a side effect |
| DS-03 | **Static codes in V1** (website, contact, email, SMS, call, text, Wi-Fi) | Client-side encoding; no redirect, no stats |
| DS-04 | Restaurant menu = **PDF**; structured menu builder out | Reuses file hosting |
| DS-05 | Scannability check **warns**, owner can override; code labelled *not healthy* | Decode-based check; no hard block |
| DS-07 | **Email confirmation required** at email sign-up (Google exempt) | Confirmation step, resend, change email |
| DS-08 | **No anonymous download**: sign-up at download on the home page | The home-page code moves into the new account |
| DS-09 | Bulk: per-upload cap + plan limit on every creation path | Limits enforced in app, bulk and API alike |
| A-1 | Page builder = **Multi-Link + vCard only**; general landing page later | Largest build stays a two-type template renderer |
| A-2 | **No watermark** on any download | One export path |
| A-3 | **Basic bot filtering**: preview-bot user-agent denylist + daily dedup | Small list in the scan pipeline |
| A-4 | Downloads: **PNG, JPG, SVG, EPS, PDF** | EPS needs a vector converter (S) |
| A-5 | Referrer **stored if present**, no widget | One extra field |
| A-6 | **UTM passthrough** on the redirect | Near-free |
| A-7 | Error correction **automatic**, level shown | No selector UI |
| A-9 + post-sync | **GTM + GA4 + Meta Pixel** fields on **one** integrations screen | Tags on hosted pages only, never on the redirect |
| post-sync | **Customer webhooks later** (reverses A-8; Oleg removed the screen) | −M: no delivery queue, signing, logs or UI in V1 |
| A-10 | **Time-based redirects** and the **review / feedback funnel** in V1 | Rule evaluation in the redirect hot path (M); one new page type (S–M) |
| A-11 | Password reset by **one-time code** | OTP issue / verify / expire |
| A-12 | Cancel: **at most one optional retention offer** | One extra step; a Recurly coupon |
| A-13 | Download of paused codes allowed, with an explanation | Copy only |
| A-14 | **Entitlements are configuration**: trial → paid by default, optional *Basic* set | An entitlement layer instead of hard-coded plans |
| A-15 | SRS QR-U-07 is the reference V1 type list | Figma's two lists are not the source |
| A-16 | All V1 features Must; one number | No separately priced options |

---

## 3 · What the estimate has to assume

### 3.1 Open client questions: assume this

Each assumption is built so that the other answer is configuration, not a rebuild (SRS v1.0 §16a).

| # | Open question | Assume |
| --- | --- | --- |
| B-1 | After the trial; free plan (SRS-Q-01, Q-07) | Codes pause and show the friendly page; optional *Basic* set; entitlements configurable |
| B-2 | Plans, prices, limits (SRS-Q-08) | Three paid tiers; limits and gates in configuration / Recurly |
| B-3 | Bilingual rule (SRS-Q-05) | Warn when French is missing; blocking is a flag |
| B-4 | Currency (SRS-Q-24) | Display the visitor's local currency; charge in CAD only |
| B-5 | Templates (SRS-Q-25) | 10 style templates; design content from Oleg |
| B-6 | Redirect domain, refunds, file limits (SRS-Q-15, Q-17, Q-11) | Placeholders; no size impact |

### 3.2 Estimate risks for Denys to price

| # | Item | Why it is a risk |
| --- | --- | --- |
| C-1 | Billing UI: **Recurly hosted pages vs our own form**. Oleg's canvas still says *Stripe* | Hosted = S, own form = M; also PCI scope |
| C-2 | **Duplicate safeguard** (SRS-Q-27) | How analytics and safety treat identical codes |
| C-3 | **Performance targets, session timeouts** (SRS-Q-16). Draft: redirect under 150 ms p95 in Canada, incl. app-store and schedule rules | Drives the redirect architecture |
| C-4 | **Not drawn in Figma**: scanner-side pages, admin console, schedule editor, review page, failed-payment states | Estimate from the SRS; design is still to be done (Ruslan / Oleg) |
| C-6 | Legal check on email confirmation (SRS-Q-28) | Could relax DS-07; no size change |

### 3.3 Technical hot-spots

| Area | What makes it hard | Features |
| --- | --- | --- |
| Redirect path | Fast and independent of the app; app-store routing, language routing and time windows must not add slow lookups; cache invalidation on edit | F-19 · F-20 · F-21 · F-60 |
| Code-state machine | Account lapse and renewal (Recurly webhooks) flip many codes Paused ↔ Active; Archive pauses; admin disable wins; idempotent and reversible | F-15 · F-18 · F-23 · F-33 · F-37 · F-50 |
| Page engine | Largest UI build: two page types, templates, EN / FR fields, public rendering, SEO | F-06 · F-09 · F-12 · F-22 · F-61 |
| Scannability | Decode-based checks; false positives vs false negatives | F-07 · F-08 |
| Billing | Recurly + Stripe, CAD + provincial tax, dunning, inbound webhooks, entitlements as configuration | F-31…F-37 · F-43 |
| Abuse | Safety check on every URL at save and on schedule, including bulk and API | F-11 · F-40 · F-46 · F-52 |
| Privacy | Salted daily hash, city-level geo, no cookies on the redirect; owner tags vs Law 25 | F-25 · F-41 · F-42 |
| Files | Storage, CDN, malware scan, size limits per plan | F-02 · F-03 |

---

## 4 · Features

Each feature: what · why · problem it solves · who · depends on · size · SRS · Figma · rules · risks and notes · open questions · market. Split by module into three subpages; the user flows are a fourth.

⚠️ = blocks design or estimate. Everything else has an assumption in §3.

4a — Features: M1 Making codes · M2 Managing codes

| # | Question | Status | Owner |
| --- | --- | --- | --- |
| SRS-Q-01 ⚠️ | What does a scanner see when the trial ends or a subscription lapses? Expire (wireflows), the client's *"your codes will expire in…"*, or a branded paused page with the same ID that resumes on payment (recommended) | Open | Client via Anastasia; Oleg for the flow |
| SRS-Q-03 | Which types ship in V1? | ◐ Partly: five dynamic + PDF menu + static incl. Wi-Fi (DS-03). Open: extra dynamic types | Christian, Oleg |
| SRS-Q-05 ⚠️ | Bilingual pages: warn or block when French is missing? Prominence check in or out? | Open | Client |
| SRS-Q-07 | Any free plan, or only trial → paid? Are static codes free after the trial, and what does a static code in Archive do? | Open | Client |
| SRS-Q-08 ⚠️ | Plans, prices, limits, entitlements, trial entitlements, proration | Open | Client |
| SRS-Q-11 | PDF / File: allowed types, max size, storage per plan | Open | Denys Melnyk, client |
| SRS-Q-13 | Bulk creation limits | ◐ Partly: per-upload cap + plan limit (DS-09); numbers open | Client, Denys Melnyk |
| SRS-Q-14 | Scan history of deleted codes: kept or removed? | Open | Denys Melnyk |
| SRS-Q-15 | Name of the dedicated redirect domain | Open | Client |
| SRS-Q-16 | Performance targets, session timeouts, statistics latency | Open | Denys Melnyk |
| SRS-Q-17 | Refund policy; console or Recurly | Open | Client |
| SRS-Q-18 | Consent for owner tags on hosted pages before the Law 25 layer exists | Open | Denys Melnyk, legal |
| SRS-Q-19 | Client's full name and legal entity | Open | Anastasia |
| SRS-Q-24 | Currency: show prices in the visitor's local currency only, or also charge in it? Which currencies at launch? | Open | Christian, then client; Denys for Recurly |
| SRS-Q-25 | Which 10 starter templates, grouped by industry or by style, and in V1 or later? | Open | Christian, Oleg; client |
| SRS-Q-26 | Terminal 'archived' status needed, or is the Archive folder enough? Check competitors; decide from archive analytics | Open | Christian |
| SRS-Q-27 | Duplicates: safeguard for unchanged duplicates? How do analytics and safety treat two identical codes? | Open | Denys |
| SRS-Q-28 | Email confirmation: legal / compliance requirement? Why does Uniqode accept only corporate emails? | Open | Christian / Oleksandra |
| SRS-Q-29 | Bulk use cases: which ones V1 supports (basic), which wait | Open | Christian |

4b — Features: M3 Scanning · M4 Statistics · M5 Account, trial and billing

Closed and already built in: SRS-Q-02, SRS-Q-04, SRS-Q-06, SRS-Q-09, SRS-Q-10, SRS-Q-12, SRS-Q-20, SRS-Q-21, SRS-Q-22, SRS-Q-23.

4c — Features: M6 Integrations · M7 Team tools · M8 Cross-product

---

5 — User flows FL-01…FL-13

## 6 · Out of V1

Features in this file that are not V1:

| ID | Feature | Release | Why not V1 |
| --- | --- | --- | --- |
| F-05 | Extra dynamic types | To confirm | The brief asks not to expand the catalogue unnecessarily ✅. Static codes are now a separate feature, F-65. |
| F-28 | Scan-summary emails | Later | Drawn in Account Settings; hidden at launch. |
| F-29 | Export and period comparison | Later | — |
| F-33 | End of trial and lapse behaviour | To confirm | The wireflows say codes expire; the client expects expiry messaging (C-1.3); the KB recommends a paused page. Decision: SRS-Q-01. |
| F-48 | Webhooks for customers | Later | **Later** (Christian's post-sync decision, 2026-09-30, reversing A-8 after Oleg removed the screen). Trigger: paying customers with their own systems ask for it, next to the API. |
| F-62 | Automatic currency conversion | To confirm | Proposed by Christian, 2026-09-30. ⚠️ Two different things: **display** in local currency (charge still CAD) or **charging** in local currency (Recurly multi-currency price lists, FX risk, tax per country). |
| F-63 | Public template gallery | To confirm | Proposed by Christian, 2026-09-30, after EZQR: its footer links a "QR Code Theme Gallery" (~94 free themes) and ~58 industry landing pages (verified 2026-09-30, `ezqr.ca/qr-code-gallery`, `ezqr.ca/qr-codes-for-restaurants`). |

Scope boundary (the SRS §13 has the full list):

| Item | Reason | Phase |
| --- | --- | --- |
| Canadian data residency guarantee (`TRS-04`) | Client deferred it post-launch ✅ C-4. Architecture keeps the door open | PH-2 |
| Law 25 consent layer and preference centre (`TRS-05`) | Follows `TRS-04` ✅ C-4 | PH-2 |
| French-prominence compliance check (`LOC-03`) | Pending SRS-Q-05 | PH-2 |
| Smart routing by location or scan count (`DYN-09`); time-based routing is in V1 (A-10) | Not needed to launch; drawn in the wireflows, hidden at launch | PH-2 |
| Scheduled publication (`DYN-15` candidate) and password-protected codes (`TRS-09`) | Not in any client source | PH-2 |
| Extra dynamic types beyond the confirmed set (`GEN-13`, `DST-12`, `DST-13`) | Brief limits the dynamic catalogue to five ✅; static codes are in (DS-03) | PH-2 |
| Structured restaurant menu builder (`DST-04`) | DS-04: scope almost for a separate product; V1 menu is a PDF | PH-2 |
| Anonymous download from the home page (`ACC-01`) | DS-08: sign-up required | PH-3 |
| Scan-summary emails (`ANL-12`), CSV export and comparison period (`ANL-13`, `ANL-14`); UTM passthrough is in V1 (A-6) | Useful once owners have scan history | PH-2 |
| Zapier / Make connector (`PLT-10`) | Customer webhooks (F-48) and a no-code connector both wait for demand | PH-2 |
| General-purpose landing page editor (`DST-06`) | A-1: V1 page builder covers Multi-Link and vCard only | PH-2 |
| Teams, roles, agency sub-accounts (`ACC-05`, `ACC-06`) | Brief's V2 list ✅ | PH-2 |
| Custom domains per customer, white-label (`DYN-11`) | Brief's V2 list ✅; would hide the `qr.ca` asset | PH-2 |
| Advanced bot filtering beyond the V1 preview-bot denylist (`ANL-10`) | Basic filtering is in V1 (A-3) | PH-2 |
| SOC 2 (`TRS-08`) | Brief's V2 list ✅ | PH-2 |
| Ordering and payments on hosted pages (`DST-10`) | PCI scope, a different product | PH-3 |
| AI-generated art codes (`GEN-09`) | Known to break scannability | PH-3 |
| Native mobile apps (`PLT-08`) | Brief's V2 list ✅; scanning uses the phone camera | PH-3 |
| Visual design, architecture, estimate | Separate Discovery outputs (Ruslan / Oleg, Denys Melnyk, Anatolii) | — |

---

## 7 · Open questions that touch the estimate

*Generated from the KB data (`05_product/_build/build-final-for-denys.py`). Edit the data, not this page.*
