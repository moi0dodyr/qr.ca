<!--
  UPSTREAM COPY. DO NOT EDIT.
  Source of truth: Christian Kapuzo's KB, Features and User Flows v1.0, subpage 4c (Notion).
  Received 2026-10-01 (pasted by Oleg S). Internal: not for the client.
-->

# 4c — Features: M6 Integrations · M7 Team tools · M8 Cross-product

### M6 · Connections and integrations

#### F-40

**Owner API** · V1 (plans that include it to confirm) · Must · size **M** · ✅

- **What:** A public REST API that lets an owner's own systems (an e-commerce store, a CRM, an internal tool, a print workflow) create and manage codes directly: per-account API keys (shown once, named, revocable); create, read, update, pause and delete codes; read scan totals; rate-limited; scoped to the key's account; the same plan limits as the web app. It is the same capability as the owner web app, for machines instead of people.
- **Why:** The client asked for it in writing: *"API and 'bulk upload' (like csv) support … Likely used by the 'top spenders'"* (C-2 #1). It is paid-advanced across the field; QRCG holds it to Enterprise.
- **Solves:** Customers who manage many codes, or create them inside another process (a code per product label, per ticket, per client campaign), cannot do it by hand in a browser, and would pick a competitor with an API.
- **Who:** Owner (customer) · **Problems:** BP-08 Heavy users need scale and automation · **Goals:** G-02
- **Depends on:** F-02 Core dynamic types (five), F-46 Link safety check, F-35 Plans and billing
- **Scope map (size):** `PLT-07` M · **SRS:** QR-U-40
- **Figma:** `8045:3377`
- **Notes and risks:** **Not** the owner web app (F-64), **not** the internal admin console (F-49…F-54), **not** customer webhooks (F-48), **not** platform events (F-47). On the APIs screen: *Account ID*, not *Org ID* (no organisations in V1). Endpoint design and the docs tool are Denys Melnyk's.
- **Complexity (market check):** Keys, scopes, rate limits, versioning, docs site, same plan limits as the app. Docs tool TBD. Which plans include it: SRS-Q-08.
- **Open questions:** SRS-Q-08 ⚠️ — Plans, prices, limits, entitlements, trial entitlements, proration *(Open)*
- **Market:** *Public REST API* (competitive standard, paid — mid tier)

#### F-41

**Google Tag Manager on pages** · V1 · Must · size **—** · ✅

- **What:** Owners add their own GTM container to their hosted pages. Nothing loads on the redirect itself.
- **Why:** The client named Google Tag Manager in his integration list (C-2 #2).
- **Solves:** Marketers unable to see scans in their own analytics.
- **Who:** Owner (customer) · **Problems:** BP-08 Heavy users need scale and automation · **Goals:** G-04
- **Depends on:** F-22 Hosted pages
- **Scope map (size):** `ANL-11` ? · **SRS:** QR-U-41
- **Figma:** `8045:3399`
- **Notes and risks:** Consent for owner tags before the Law 25 layer exists is SRS-Q-18. Must (A-16).
- **Complexity (market check):** Only on hosted pages, never on the redirect. **Consent risk** for Quebec visitors (SRS-Q-18, Law 25).
- **Open questions:** SRS-Q-18 — Consent for owner tags on hosted pages before the Law 25 layer exists *(Open)*
- **Market:** *Retargeting pixels (Meta Pixel, Google Tag Manager)* (competitive standard, paid — mid tier)

#### F-42

**Google Analytics 4 and Meta Pixel fields** · V1 · Must · size **—** · ⚪🟡

- **What:** Direct fields for a GA4 Measurement ID and a Meta Pixel ID; the tags load on the owner's hosted pages, never on the redirect. Shown on the same integrations screen as GTM (A-9; post-sync decision: Oleg's canvas is GTM-only, the two fields are to be added there).
- **Why:** Marketers expect to connect their own analytics and ads without setting up GTM.
- **Solves:** Owners who want their scans in GA4 or their audiences in Meta, with no tag-manager knowledge.
- **Who:** Owner (customer) · **Problems:** BP-08 Heavy users need scale and automation · **Goals:** G-04
- **Depends on:** F-22 Hosted pages
- **Scope map (size):** `ANL-11` ? · **SRS:** QR-U-41
- **Figma:** `8045:3399`
- **Notes and risks:** Consent exposure for Quebec visitors (Law 25), same as GTM: SRS-Q-18.
- **Complexity (market check):** Only on hosted pages, never on the redirect. **Consent risk** for Quebec visitors (SRS-Q-18, Law 25).
- **Complexity (market check):** UTM passthrough is near-free in the redirect.
- **Open questions:** SRS-Q-18 — Consent for owner tags on hosted pages before the Law 25 layer exists *(Open)*
- **Market:** *Retargeting pixels (Meta Pixel, Google Tag Manager)* (competitive standard, paid — mid tier); *CSV export + UTM handling + GA4* (competitive standard, paid — mid tier)

#### F-43

**Subscription management (Recurly + Stripe)** · V1 · Must · size **M** · ✅

- **What:** Recurly holds plans, trials, invoices, dunning and usage-based billing; Stripe is the payment gateway. Recurly notifies QR.CA of billing events by webhook (payment failed, renewed, canceled, expired, new invoice) so account state updates automatically.
- **Why:** The client's explicit choice, named twice (brief §4, C-2, C-5).
- **Solves:** Manual billing operations and account states out of sync with payments.
- **Who:** Owner (customer), Super admin (platform owner) · **Problems:** BP-09 A self-serve business needs to run without sales · **Goals:** G-02, G-07
- **Depends on:** — · **Needed by:** F-31, F-33, F-34, F-35, F-36, F-37, F-39, F-47
- **Scope map (size):** `BIL-02` M, `BIL-03` M · **SRS:** QR-U-32, QR-U-33, QR-U-34, QR-U-35
- **Figma:** not drawn
- **Flows:** FL-09, FL-10
- **Notes and risks:** Inbound Recurly webhooks drive account and code states (SRS v1.0 §12.4). Billing UI: Recurly hosted pages or our own form is open (C-1).

#### F-44

**Customer email (Customer.io)** · V1 · Must · size **M** · ✅

- **What:** Transactional and lifecycle email in both languages: verification, password reset, welcome, trial ending and ended, receipts, failed payment, cancellation, limit warnings, code disabled, account deleted. Segmentation by scan activity.
- **Why:** Named by the client (brief §4, C-2, C-5).
- **Solves:** Owners missing the moments that decide conversion and retention.
- **Who:** Owner (customer) · **Problems:** BP-09 A self-serve business needs to run without sales, BP-04 Trials and cancellations that kill printed codes · **Goals:** G-02
- **Depends on:** — · **Needed by:** F-30, F-31, F-37, F-47
- **Scope map (size):** `EXP-04` M · **SRS:** QR-U-03, QR-U-05, QR-U-30, QR-U-35
- **Figma:** not drawn
- **Business rules:** BRL-13
- **Flows:** FL-09, FL-10
- **Notes and risks:** CASL applies to marketing email.

#### F-45

**Product analytics (Amplitude)** · V1 · Must · size **M** · ✅

- **What:** Funnel events from first visit through first code, first scan, paywall, upgrade and retention, sent to Amplitude. Event names in `event-taxonomy.md`.
- **Why:** Named by the client (brief §3, C-2); the funnel has to be measured to be improved.
- **Solves:** Not knowing where visitors drop off.
- **Who:** Super admin (platform owner) · **Problems:** BP-09 A self-serve business needs to run without sales · **Goals:** G-02, G-08
- **Depends on:** — · **Needed by:** F-53, F-58
- **Scope map (size):** `ANL-07` M · **SRS:** QR-A-05
- **Figma:** not drawn

#### F-46

**Link safety check** · V1 · Must · size **M** · ✅

- **What:** Every destination URL (and uploaded file) is checked against Google Safe Browsing or similar at save and re-checked on a schedule. Known-malicious links cannot be saved; doubtful ones work and go to review.
- **Why:** Named by the client (C-2 #2) and in the brief (§5).
- **Solves:** Phishing and malware behind QR.CA codes.
- **Who:** Owner (customer), Support admin · **Problems:** BP-06 A trusted redirect domain attracts abuse · **Goals:** G-05
- **Depends on:** — · **Needed by:** F-02, F-11, F-40, F-52
- **Scope map (size):** `TRS-01` M · **SRS:** QR-A-04, QR-U-08
- **Figma:** not drawn
- **Business rules:** BRL-31, BRL-33
- **Flows:** FL-03, FL-13

#### F-47

**Platform events to Recurly and Customer.io** · V1 · Must · size **—** · ✅

- **What:** QR.CA sends events automatically to Recurly (usage for usage-based billing) and Customer.io (segmentation): account created, trial started / ending / ended, subscription changed, code created, first scan, scan thresholds crossed. Retries on failure; never blocks the redirect.
- **Why:** The client: *"we absolutely need webhooks"*, for Recurly usage billing and Customer.io segmentation (C-5).
- **Solves:** Billing and messaging that cannot react to what customers actually do.
- **Who:** Super admin (platform owner) · **Problems:** BP-09 A self-serve business needs to run without sales · **Goals:** G-07
- **Depends on:** F-25 Statistics for each code, F-43 Subscription management (Recurly + Stripe), F-44 Customer email (Customer.io)
- **Scope map (size):** `PLT-09` ? · **SRS:** — (system requirement / later)
- **Figma:** not drawn
- **Notes and risks:** Technically mostly calls to the Recurly and Customer.io APIs rather than webhooks. Runs on a queue, never on the redirect path.
- **Complexity (market check):** Platform events are mostly API calls to Recurly / Customer.io with retries; plus **inbound** Recurly webhooks for billing state.
- **Market:** *Webhooks* (emerging, paid — mid tier)

#### F-48

**Webhooks for customers** · Later · Won't (V1) · size **M** · ⚪🟡

- **What:** Owners register their own endpoint URL, choose events (e.g. new scan, code created, code paused) and receive signed HTTP calls; a list with open / edit / delete / active toggle and per-webhook event logs. Drawn by Oleg on 30.09 (morning), removed from his canvas after the design sync.
- **Why:** Lets owners and their developers connect QR.CA to their own systems, next to the API.
- **Solves:** Manual syncing with CRMs, spreadsheets and internal tools.
- **Who:** Owner (customer) · **Problems:** BP-08 Heavy users need scale and automation · **Goals:** G-02
- **Depends on:** —
- **Scope map (size):** `PLT-10` M · **SRS:** — (system requirement / later)
- **Figma:** `8045:3388` (deleted)
- **Notes and risks:** **Later** (Christian's post-sync decision, 2026-09-30, reversing A-8 after Oleg removed the screen). Trigger: paying customers with their own systems ask for it, next to the API. Separate from platform events to Recurly / Customer.io (F-47). Needs a delivery queue, retries with back-off, request signing and logs. Zapier / Make stays later.
- **Complexity (market check):** Platform events are mostly API calls to Recurly / Customer.io with retries; plus **inbound** Recurly webhooks for billing state.
- **Market:** *Webhooks* (emerging, paid — mid tier); *Zapier / Make no-code integration* (competitive standard, paid — mid tier)

### M7 · Tools for the QR.CA team

#### F-49

**Customer lookup** · V1 · Must · size **M** · ✅

- **What:** Search accounts by email, name or code identifier; see trial / subscription state, codes, plan and billing history (read-only) and recent events; suspend or reactivate with a reason.
- **Why:** Admin for users, codes and subscriptions is in the brief (§5).
- **Solves:** Support unable to see what a customer sees.
- **Who:** Support admin, Super admin (platform owner) · **Problems:** BP-10 A small team must support customers without engineering · **Goals:** G-07
- **Depends on:** F-54 Admin access control
- **Scope map (size):** `ADM-01` M · **SRS:** QR-A-01
- **Figma:** not drawn · ⚠️ **admin console not drawn** (C-4)
- **Flows:** FL-13

#### F-50

**Disable a harmful code** · V1 · Must · size **S** · ✅

- **What:** Any admin can disable any code with a reason; the next scan shows a safety warning and the owner is emailed. Only an admin can re-enable it. Every action is logged.
- **Why:** Moderation is in the brief (§5).
- **Solves:** Harmful codes staying live while someone finds a developer.
- **Who:** Support admin, Super admin (platform owner) · **Problems:** BP-06 A trusted redirect domain attracts abuse · **Goals:** G-05
- **Depends on:** F-54 Admin access control, F-23 Clear "not live" pages
- **Scope map (size):** `ADM-02` S, `TRS-02` S · **SRS:** QR-A-02
- **Figma:** not drawn · ⚠️ **admin console not drawn** (C-4)
- **Business rules:** BRL-32
- **Flows:** FL-13

#### F-51

**Support actions** · V1 · Must · size **S** · ✅

- **What:** Extend a trial, grant a goodwill dynamic code that stays live without a plan, and handle refunds or credits through the subscription system. Each action records who and why.
- **Why:** The client wants to give *"1 free"* dynamic code to a customer who comes with a problem (C-1.1).
- **Solves:** Customers stuck in a billing situation support cannot fix.
- **Who:** Support admin, Super admin (platform owner) · **Problems:** BP-10 A small team must support customers without engineering, BP-04 Trials and cancellations that kill printed codes · **Goals:** G-07
- **Depends on:** F-54 Admin access control
- **Scope map (size):** `ADM-03` S · **SRS:** QR-A-03
- **Figma:** not drawn · ⚠️ **admin console not drawn** (C-4)
- **Flows:** FL-13
- **Open questions:** SRS-Q-17 — Refund policy; console or Recurly *(Open)*

#### F-52

**Review queue** · V1 · Must · size **M** · ✅⚪

- **What:** Destinations flagged as doubtful by the safety check wait in a queue for an admin to approve or disable, with the decision logged.
- **Why:** Screening must not slow honest users, but doubtful links need a human.
- **Solves:** False positives blocking legitimate customers, and real threats slipping through.
- **Who:** Support admin, Super admin (platform owner) · **Problems:** BP-06 A trusted redirect domain attracts abuse · **Goals:** G-05
- **Depends on:** F-54 Admin access control, F-46 Link safety check
- **Scope map (size):** `TRS-01` M · **SRS:** QR-A-04
- **Figma:** not drawn · ⚠️ **admin console not drawn** (C-4)
- **Business rules:** BRL-33
- **Flows:** FL-13

#### F-53

**Platform statistics** · V1 · Must · size **M** · ✅

- **What:** Sign-ups, trials, conversions, cancellations, codes by type and scans over a period, plus an AI-assisted industry breakdown of what URL codes point to.
- **Why:** The client asked for *"executive"* analytics: top code types and industry breakdown, using LLMs (C-2 #3).
- **Solves:** The founder not knowing what customers make and who they are.
- **Who:** Super admin (platform owner) · **Problems:** BP-09 A self-serve business needs to run without sales · **Goals:** G-02, G-08
- **Depends on:** F-54 Admin access control, F-45 Product analytics (Amplitude)
- **Scope map (size):** `ADM-04` M · **SRS:** QR-A-05
- **Figma:** not drawn · ⚠️ **admin console not drawn** (C-4)
- **Flows:** FL-13
- **Notes and risks:** V1 Must (A-16).

#### F-54

**Admin access control** · V1 · Must · size **—** · ⚪

- **What:** Super admins invite and remove Support admins and Super admins; access requires two-step sign-in; every admin action is logged.
- **Why:** Internal tools can change any customer's codes and billing.
- **Solves:** Uncontrolled access to powerful internal tools.
- **Who:** Super admin (platform owner) · **Problems:** BP-12 Privacy and legal obligations from day one, BP-06 A trusted redirect domain attracts abuse · **Goals:** G-05, G-07
- **Depends on:** — · **Needed by:** F-49, F-50, F-51, F-52, F-53
- **Scope map (size):** — · **SRS:** QR-A-06
- **Figma:** not drawn · ⚠️ **admin console not drawn** (C-4)
- **Flows:** FL-13
- **Market:** *Audit logs / approval workflows* (emerging, paid — top tier / enterprise)

### M8 · Across the whole product

#### F-55

**English and Canadian French product** · V1 · Must · size **M** · ✅

- **What:** Website, onboarding, app, billing, emails and hosted pages in English and fr-CA at launch; strings managed in a localization platform (Crowdin or similar); no hard-coded text.
- **Why:** The brief requires both at launch and asks for localization-ready architecture (§5).
- **Solves:** French-speaking customers served in English, and expensive retrofits.
- **Who:** Visitor, Owner (customer), Scanner · **Problems:** BP-07 Canadian customers need English and French · **Goals:** G-06
- **Depends on:** — · **Needed by:** F-12
- **Scope map (size):** `LOC-01` M · **SRS:** — (system requirement / later)
- **Figma:** not drawn
- **Notes and risks:** Re-confirmed as a backlog must by Christian, 2026-09-30 (together with currency conversion, F-62). Page content in both languages is F-12.
- **Complexity (market check):** i18n framework + Crowdin + translated emails; doubles copy QA. Plan for text expansion in French.
- **Market:** *Canadian jurisdiction / Canadian-operated positioning* (emerging, varies); *Interface localisation (multi-language UI)* (competitive standard, free)

#### F-56

**Phone and desktop everywhere** · V1 · Must · size **M** · ✅

- **What:** Every surface works on phone and desktop, including creation, styling, dashboard, billing and hosted pages.
- **Why:** The brief requires it explicitly (§2), and the client repeated it for customization (C-3).
- **Solves:** Owners who manage codes from a phone, and scanners who only use phones.
- **Who:** Visitor, Owner (customer), Scanner · **Problems:** BP-03 Existing tools are confusing or poor to use · **Goals:** G-01
- **Depends on:** —
- **Scope map (size):** `PLT-05` M · **SRS:** QR-U-11
- **Figma:** not drawn

#### F-57

**Built to be found (SEO and AI discoverability)** · V1 · Must · size **L** · ✅

- **What:** Indexable marketing pages, clean information architecture and structured data for search engines and AI assistants; owner pages indexable by default with a switch to hide them.
- **Why:** The brief asks for strong organic and LLM discoverability (§5); PLG depends on being found.
- **Solves:** Acquisition that depends on paid channels the client does not have.
- **Who:** Visitor · **Problems:** BP-09 A self-serve business needs to run without sales · **Goals:** G-02
- **Depends on:** —
- **Scope map (size):** `PLT-06` L, `DST-07` M · **SRS:** — (system requirement / later)
- **Figma:** not drawn
- **Notes and risks:** This is also a content programme, not only engineering (R-11).

#### F-58

**Built for testing** · V1 (flags) · Later (A/B tool) · Must · size **M** · ✅

- **What:** Feature flags and front-end / back-end separation so onboarding, type selection, creation, templates, paywall and upgrade prompts can change without a back-end release. The full A/B testing framework follows once there is traffic.
- **Why:** The brief asks to build for iteration (§6).
- **Solves:** Every funnel experiment needing an engineering release.
- **Who:** Super admin (platform owner) · **Problems:** BP-09 A self-serve business needs to run without sales · **Goals:** G-08
- **Depends on:** F-45 Product analytics (Amplitude)
- **Scope map (size):** `EXP-01` M, `EXP-02` S, `EXP-03` M · **SRS:** QR-U-02
- **Figma:** not drawn

#### F-59

**Platform operations** · V1 · Must · size **M** · ✅

- **What:** Cloud environments, CI/CD, logging, monitoring, backups, security, encryption and rate limiting.
- **Why:** Listed in the brief as production requirements (§5).
- **Solves:** Outages, data loss and abuse that a production service cannot afford.
- **Who:** Super admin (platform owner) · **Problems:** BP-01 A printed code cannot be changed, BP-06 A trusted redirect domain attracts abuse, BP-12 Privacy and legal obligations from day one · **Goals:** G-03, G-05
- **Depends on:** —
- **Scope map (size):** `PLT-02` M, `PLT-03` M, `PLT-04` S · **SRS:** — (system requirement / later)
- **Figma:** not drawn
- **Notes and risks:** Not in the client features document (internal infrastructure). Design is Denys Melnyk's.
- **Open questions:** SRS-Q-16 — Performance targets, session timeouts, statistics latency *(Open)*

#### F-63

**Public template gallery** · To confirm · Should · size **L** · 🟡⚪

- **What:** A public, indexable page on the marketing site listing the ready-made templates, linked from the site footer. Each template opens the generator with that template applied. Later, industry pages (restaurants, realtors, trades…) each open the generator with a matching template.
- **Why:** It turns templates into an acquisition surface: search traffic for "restaurant QR code", "Instagram QR code" lands on a ready design, one click from a first code.
- **Solves:** Visitors who don't know what a good code looks like for their business, and a marketing site with little search surface.
- **Who:** Visitor · **Problems:** BP-03 Existing tools are confusing or poor to use, BP-09 A self-serve business needs to run without sales · **Goals:** G-01, G-02
- **Depends on:** —
- **Scope map (size):** `GEN-04` M, `PLT-06` L, `GEN-15` ? · **SRS:** — (system requirement / later)
- **Figma:** not drawn
- **Notes and risks:** Proposed by Christian, 2026-09-30, after EZQR: its footer links a "QR Code Theme Gallery" (~94 free themes) and ~58 industry landing pages (verified 2026-09-30, `ezqr.ca/qr-code-gallery`, `ezqr.ca/qr-codes-for-restaurants`). Start with the same 10 templates as F-09; industry pages are content work for the SEO programme (R-11).
- **Complexity (market check):** Template = saved style JSON; cheap in code, the cost is **design content** (who makes the 10?). Gallery page adds SEO/marketing-site work.
- **Open questions:** SRS-Q-25 — Which 10 starter templates, grouped by industry or by style, and in V1 or later? *(Open)*
- **Market:** *QR Code design templates* (table stakes, free with limits)
