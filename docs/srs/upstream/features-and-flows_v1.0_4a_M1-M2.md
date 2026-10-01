<!--
  UPSTREAM COPY. DO NOT EDIT.
  Source of truth: Christian Kapuzo's KB, Features and User Flows v1.0, subpage 4a (Notion).
  Received 2026-10-01 (pasted by Oleg S). Internal: not for the client.
-->

# 4a — Features: M1 Making codes · M2 Managing codes

### M1 · Making codes

#### F-01

**Home-page generator** · V1 · Must · size **L** · ✅🟡

- **What:** A code generator on the public home page. A visitor picks a type, adds content, styles the code and sees a live preview without signing up. The Download button activates once content is entered; **downloading needs a quick sign-up** (DS-08).
- **Why:** It is the first step of the PLG loop the client described: discover → create → customize → download. Value comes before any form, and the sign-up at download collects the email.
- **Solves:** Visitors leave before seeing value when they are asked to sign up first; the first code has to happen in minutes.
- **Who:** Visitor · **Problems:** BP-03 Existing tools are confusing or poor to use, BP-09 A self-serve business needs to run without sales · **Goals:** G-01, G-02
- **Depends on:** F-02 Core dynamic types (five), F-07 Code styling, F-30 Sign-up, log-in and password recovery
- **Scope map (size):** `GEN-01` S, `GEN-03` M, `PLT-06` L · **SRS:** QR-U-01, QR-U-02
- **Figma:** `8045:3711`
- **Flows:** FL-01
- **Notes and risks:** DS-08: no anonymous download. It avoids linking unclaimed codes later, and the risk of claiming someone else's code. Team decision; one-line confirmation with the client. Oleg's 'download PNG preview' concept waits for the client's reaction.
- **Complexity (market check):** The home-page generator is a second entry to the same builder; the design must carry into the new account after sign-up.
- **Complexity (market check):** Plus required email confirmation at sign-up (DS-07): Customer.io transactional email, resend, change-email.
- **Market:** *Create-before-signup / instant generation* (competitive standard, free); *Email-gated / download-gated free codes* (competitive standard, free with limits)

#### F-02

**Core dynamic types (five)** · V1 · Must · size **M** · ✅

- **What:** The five dynamic types from the brief: Website URL, PDF / File, Multi-Link page, vCard, App Store link. Each has its own content form with validation. The type system is configuration-driven so new types plug in without changing the flow.
- **Why:** The client's own usage data puts these five at the large majority of real business use.
- **Solves:** Covers the practical needs of most businesses without the cost of a large catalogue.
- **Who:** Owner (customer) · **Problems:** BP-01 A printed code cannot be changed, BP-02 There is nothing worth pointing the code at · **Goals:** G-01
- **Depends on:** F-19 Fast, reliable redirect, F-22 Hosted pages, F-46 Link safety check · **Needed by:** F-01, F-11, F-40
- **Scope map (size):** `GEN-02` M, `DST-02` S, `DST-03` S, `DST-05` M, `DYN-07` S · **SRS:** QR-U-07, QR-U-08, QR-U-09, QR-U-15
- **Figma:** `8045:2816`
- **Flows:** FL-01, FL-03
- **Notes and risks:** Wireflows show 23 types; V1 is the brief's five unless SRS-Q-03 says otherwise.
- **Complexity (market check):** Separate redirect service + cache (Denys's design). Short-ID scheme that is never reused (BRL-01). Separate redirect domain (C-2 #4) needs DNS + TLS + reputation setup.
- **Complexity (market check):** On the page engine; per-link screening (Safe Browsing) on every URL.
- **Complexity (market check):** `.vcf` generation; personal data (PIPEDA). vCard vs Contact to confirm (Q-W6).
- **Complexity (market check):** Object storage + CDN + malware scan on upload + size limits per plan (SRS-Q-11) + replace flow. Viewer with footer on mobile.
- **Open questions:** SRS-Q-03 — Which types ship in V1? *(◐ Partly: five dynamic + PDF menu + static incl. Wi-Fi (DS-03). Open: extra dynamic types)*; SRS-Q-11 — PDF / File: allowed types, max size, storage per plan *(Open)*
- **Market:** *Dynamic QR code generation* (table stakes, varies); *Link-in-bio / multi-link page* (competitive standard, free with limits); *vCard / digital business card* (table stakes, free with limits); *PDF / file hosting* (table stakes, free with limits); *Payment / booking links* (competitive standard, free with limits)

#### F-03

**Restaurant menu (PDF)** · V1 · Must · size **M** · 🟡

- **What:** A Restaurant Menu type where the owner uploads the menu as a PDF. The scanner sees the PDF with a QR.CA-branded footer. Replacing the PDF updates the menu without reprinting. Display only: no ordering or payment.
- **Why:** The menu is the page a restaurant prints first; a PDF covers it with no extra build.
- **Solves:** Restaurants reprinting menus when prices change.
- **Who:** Owner (customer), Scanner · **Problems:** BP-02 There is nothing worth pointing the code at, BP-01 A printed code cannot be changed · **Goals:** G-01
- **Depends on:** F-22 Hosted pages
- **Scope map (size):** `DST-05` M · **SRS:** QR-U-20
- **Figma:** `8045:2816`
- **Flows:** FL-03
- **Notes and risks:** DS-04: the structured menu builder (sections, items, prices, allergens; scope-map DST-04) is out, *scope almost for a separate product*. Usage is tracked; revisit if owners ask for more.
- **Complexity (market check):** Reuses the PDF type; near-zero extra build.
- **Market:** *QR digital menu builder (display)* (competitive standard, free with limits)

#### F-04

**Wi-Fi code (static)** · V1 · Must · size **—** · 🟡

- **What:** A static code that encodes network name, password and security type, so guests join by scanning.
- **Why:** The second code a café prints after a menu; part of the static set (DS-03).
- **Solves:** Guests asking for and mistyping the Wi-Fi password.
- **Who:** Owner (customer), Scanner · **Problems:** BP-02 There is nothing worth pointing the code at · **Goals:** G-01
- **Depends on:** F-65 Static codes
- **Scope map (size):** `GEN-10` ?, `GEN-12` ? · **SRS:** QR-U-21
- **Figma:** `8045:2816`
- **Flows:** FL-03
- **Notes and risks:** Static: cannot be edited after printing and has no statistics; the product must say so.
- **Complexity (market check):** Standard `WIFI:` payload; test on iOS + Android camera apps.
- **Market:** *WiFi credentials code* (table stakes, free)

#### F-05

**Extra dynamic types** · To confirm · Won't (V1) unless confirmed · size **S** · ⚪

- **What:** Dynamic types beyond the brief's five, as drawn in the wireflows: map location, social page, image, coupon, dynamic email / SMS / call.
- **Why:** Breadth of catalogue.
- **Solves:** Occasional use cases outside the core types.
- **Who:** Owner (customer) · **Problems:** BP-02 There is nothing worth pointing the code at · **Goals:** G-01
- **Depends on:** —
- **Scope map (size):** `GEN-13` ?, `DST-12` S · **SRS:** QR-U-07
- **Figma:** `8045:2816`
- **Notes and risks:** The brief asks not to expand the catalogue unnecessarily ✅. Static codes are now a separate feature, F-65.
- **Complexity (market check):** Per-type form + payload encoder + validation. Each type is small; multiply by the type count and both static/dynamic variants.
- **Open questions:** SRS-Q-03 — Which types ship in V1? *(◐ Partly: five dynamic + PDF menu + static incl. Wi-Fi (DS-03). Open: extra dynamic types)*
- **Market:** *Multiple content/data-type templates (URL, text, email, SMS, phone, geo)* (table stakes, free); *Coupon / offer code* (competitive standard, paid — entry tier)

#### F-06

**Page builder** · V1 · Must · size **L** · ✅

- **What:** For the types that have a page (Multi-Link and vCard), a template-based, phone-first page editor: colours, logo, call-to-action button, template, with a phone-sized preview.
- **Why:** The brief asks for a lightweight, template-based landing page creator in the MVP, modular and easy to extend.
- **Solves:** Owners have no page worth pointing a code at and cannot build one themselves.
- **Who:** Owner (customer), Scanner · **Problems:** BP-02 There is nothing worth pointing the code at · **Goals:** G-01, G-04
- **Depends on:** F-22 Hosted pages, F-12 English and French pages · **Needed by:** F-09
- **Scope map (size):** `DST-01` L, `DST-02` S, `DST-03` S · **SRS:** QR-U-10
- **Figma:** `8045:2816`
- **Flows:** FL-03, FL-05
- **Notes and risks:** DS-06: PDF / File and the PDF menu have no page to customize; they show the file with a QR.CA footer.
- **Complexity (market check):** Biggest single build: page engine + templates + editor + public rendering + FR/EN fields + SEO. Scoped to two page types, not a general editor (A-1).
- **Complexity (market check):** On the page engine; per-link screening (Safe Browsing) on every URL.
- **Market:** *Hosted landing page / microsite builder* (competitive standard, paid — mid tier); *Link-in-bio / multi-link page* (competitive standard, free with limits)

#### F-07

**Code styling** · V1 · Must · size **M** · ✅

- **What:** Colours, logo, dot and corner shapes, frames with call-to-action text, and templates, with a live preview. Error correction is **automatic**: raised when a logo is added and shown to the owner; no manual selector (A-7). Fully usable on a phone.
- **Why:** The client asked for this area to be *"a dream to use"* and to work on mobile (C-3).
- **Solves:** Branded codes are expected; clumsy editors lose users at the creation step.
- **Who:** Visitor, Owner (customer) · **Problems:** BP-03 Existing tools are confusing or poor to use · **Goals:** G-01
- **Depends on:** F-08 Scannability check · **Needed by:** F-01, F-08, F-09, F-10, F-65
- **Scope map (size):** `GEN-03` M · **SRS:** QR-U-11
- **Figma:** `8045:2816` · `8045:2390` · `8045:2391`
- **Flows:** FL-01, FL-03, FL-04, FL-05
- **Complexity (market check):** Ties into the scannability check; decide whether the owner can lower EC below the safe level.
- **Complexity (market check):** UX-heavy on mobile; logo upload + EC interplay; live preview performance.
- **Complexity (market check):** Frames must survive every export format (SVG/PDF).
- **Market:** *Error-correction / print-quality settings* (competitive standard, varies); *Logo embedding + colour/eye/pattern customisation* (table stakes, free with limits); *Custom frames + call-to-action text* (table stakes, free with limits)

#### F-08

**Scannability check** · V1 · Must · size **M** · 🟡⚪

- **What:** A pre-download check of contrast, quiet zone, data density, logo coverage and effective error correction. Shows pass, warning or fail, names the problem and offers a one-click fix. A fail never blocks the download: the owner confirms and downloads anyway, and the code gets a **"not healthy" label** in the dashboard (DS-05). Never changes the design silently.
- **Why:** A code that fails on real phones is the one defect a customer finds after paying for print.
- **Solves:** Styled codes that do not scan once printed.
- **Who:** Visitor, Owner (customer) · **Problems:** BP-11 A styled code may not scan once printed · **Goals:** G-03
- **Depends on:** F-07 Code styling · **Needed by:** F-07
- **Scope map (size):** `GEN-06` M · **SRS:** QR-U-12
- **Figma:** `8045:2816`
- **Business rules:** BRL-28
- **Flows:** FL-01, FL-03, FL-04, FL-05
- **Complexity (market check):** Needs a decode-based check, not only heuristics: render → decode at small sizes with 2–3 decoder libs. Android-first test matrix (58% of scans). Risk: false positives annoy, false negatives destroy trust.
- **Complexity (market check):** Ties into the scannability check; decide whether the owner can lower EC below the safe level.
- **Market:** *Scannability Detector* (differentiator, free); *Error-correction / print-quality settings* (competitive standard, varies)

#### F-09

**Templates** · V1 · Must · size **M** · ✅⚪🟡

- **What:** A small starter set of ready-made code and page designs by industry, plus the owner's own saved styles (*Save as Template*).
- **Why:** The client singled out the breadth and quality of Uniqode's templates (brief §7). Templates shorten time to a good-looking first code.
- **Solves:** Blank-canvas paralysis and inconsistent branding across many codes.
- **Who:** Owner (customer) · **Problems:** BP-03 Existing tools are confusing or poor to use · **Goals:** G-01
- **Depends on:** F-06 Page builder, F-07 Code styling
- **Scope map (size):** `GEN-04` M, `GEN-14` ? · **SRS:** QR-U-16
- **Figma:** `8045:2816`
- **Flows:** FL-03
- **Notes and risks:** **Starter set: begin with 10 ready-made templates** (Christian, 2026-09-30 🟡), grown from usage data. Benchmark, checked 2026-09-30: EZQR (`ezqr.ca/qr-code-gallery`) has ~94 free themes — 24 branded (Instagram, WhatsApp, Google Reviews…), 15 shapes, 55+ styles — and ~58 industry landing pages in its footer that open the generator with "Start from a theme". Which 10, and whether they are by industry or by style, is SRS-Q-25. The public gallery page is F-63.
- **Complexity (market check):** Template = saved style JSON; cheap in code, the cost is **design content** (who makes the 10?). Gallery page adds SEO/marketing-site work.
- **Open questions:** SRS-Q-25 — Which 10 starter templates, grouped by industry or by style, and in V1 or later? *(Open)*
- **Market:** *QR Code design templates* (table stakes, free with limits)

#### F-10

**Print-ready download** · V1 · Must · size **S** · ✅⚪🟡

- **What:** Download in **PNG, JPG, SVG, EPS and print-ready PDF** (A-4), with the minimum print size stated and the quiet zone included. **No watermark on any download**, trial and static included (A-2). A re-download reproduces the original artwork exactly.
- **Why:** Codes live on print; the file has to work for a printer, not just a screen.
- **Solves:** Blurry or badly sized prints, and reprints that do not match material already in circulation.
- **Who:** Visitor, Owner (customer) · **Problems:** BP-11 A styled code may not scan once printed · **Goals:** G-01, G-03
- **Depends on:** F-07 Code styling · **Needed by:** F-65
- **Scope map (size):** `GEN-05` S · **SRS:** QR-U-14
- **Figma:** not drawn
- **Business rules:** BRL-29, BRL-30, BRL-42
- **Flows:** FL-01, FL-03, FL-04, FL-05
- **Notes and risks:** EPS needs a vector converter; test output in print software.
- **Complexity (market check):** Print PDF with stated physical size + quiet zone; re-download must be byte-identical (BRL-30) → store render params, not just images. EPS adds a converter.
- **Complexity (market check):** Single export path; no per-plan render variants.
- **Market:** *High-resolution / vector export (PNG, JPG, SVG, EPS, PDF)* (table stakes, free with limits); *Watermark-free downloads* (competitive standard, varies)

#### F-11

**Bulk creation (CSV)** · V1 · Must · size **M** · ✅

- **What:** One design and one set of settings applied to a table of different contents: download a CSV template per type, upload it, see every row validated with reasons (*Check what data will be loaded*), apply one style and one set of settings, and get one code per valid row (optionally as one archive). A per-upload cap and the plan limit on codes both apply, and are shown before anything is created (DS-09).
- **Why:** The client named bulk upload as a need-to-have for top spenders (C-2 #1).
- **Solves:** Creating dozens or hundreds of codes one at a time.
- **Who:** Owner (customer) · **Problems:** BP-08 Heavy users need scale and automation · **Goals:** G-02
- **Depends on:** F-02 Core dynamic types (five), F-46 Link safety check, F-35 Plans and billing
- **Scope map (size):** `GEN-07` M · **SRS:** QR-U-17
- **Figma:** `8045:2390`
- **Flows:** FL-04
- **Notes and risks:** DS-10: stay basic, with no per-table ordering or POS cases. Page types in bulk are not V1. Limit numbers: SRS-Q-13.
- **Complexity (market check):** Async job with progress; parsing + row validation; batch safety screening of every URL (rate limits of Safe Browsing); zip export of N files.
- **Open questions:** SRS-Q-13 — Bulk creation limits *(◐ Partly: per-upload cap + plan limit (DS-09); numbers open)*; SRS-Q-29 — Bulk use cases: which ones V1 supports (basic), which wait *(Open)*
- **Market:** *Bulk / CSV code generation* (competitive standard, paid — mid tier)

#### F-12

**English and French pages** · V1 (rules to confirm) · Must · size **—** · ✅

- **What:** Every hosted page holds English and French text in the same record. Scanners get their phone's language, with a visible switch.
- **Why:** The brief requires fr-CA on relevant user-facing QR landing pages at launch.
- **Solves:** French-speaking scanners served in English only, and costly retrofits of bilingual content.
- **Who:** Owner (customer), Scanner · **Problems:** BP-07 Canadian customers need English and French · **Goals:** G-06
- **Depends on:** F-22 Hosted pages, F-55 English and Canadian French product · **Needed by:** F-06, F-22, F-61
- **Scope map (size):** `LOC-02` ?, `LOC-03` ? · **SRS:** QR-U-18
- **Figma:** `8045:2816` · `8045:2391`
- **Business rules:** BRL-16, BRL-21
- **Flows:** FL-03, FL-05, FL-12
- **Notes and risks:** Whether missing French warns or blocks publishing, and the prominence check, depend on SRS-Q-05.
- **Complexity (market check):** Language resolution on hosted pages (not a redirect rule). Warn-vs-block rule is still open (SRS-Q-05).
- **Complexity (market check):** Data model: two language fields per text field (BRL-16). Warn-vs-block open (SRS-Q-05).
- **Open questions:** SRS-Q-05 ⚠️ — Bilingual pages: warn or block when French is missing? Prominence check in or out? *(Open)*
- **Market:** *Device-language-based routing to bilingual destinations* (differentiator, paid — mid tier); *Bilingual / multi-language destination content* (differentiator, paid — mid tier)

#### F-61

**Review / feedback funnel** · V1 · Must · size **—** · ⚪🟡

- **What:** A dynamic code type that sends scanners to the business's Google review page, directly or after a short 1–5 rating step. The Google link is offered to **everyone**; a private feedback form is an extra for unhappy customers, and feedback reaches the owner by email and in the app (A-10, QR-U-44).
- **Why:** The highest-value code a café prints after the menu; near-free once the page engine exists.
- **Solves:** Small businesses struggling to collect reviews.
- **Who:** Owner (customer), Scanner · **Problems:** BP-02 There is nothing worth pointing the code at · **Goals:** G-04
- **Depends on:** F-22 Hosted pages, F-12 English and French pages
- **Scope map (size):** `DST-11` ? · **SRS:** QR-U-44
- **Figma:** not drawn · ⚠️ **review type and rating page not drawn** (C-4)
- **Flows:** FL-03, FL-12
- **Notes and risks:** Not drawn in the wireflows yet. ⚠️ Review gating (sending only happy customers to Google) is discouraged by Google's review policies; the default should offer everyone the Google link, with private feedback as an extra.
- **Complexity (market check):** Not drawn in Figma. Google review policy: never gate the review link on the rating.
- **Market:** *Review / feedback funnel* (competitive standard, paid — entry tier)

#### F-65

**Static codes** · V1 · Must · size **—** · 🟡

- **What:** Codes whose content is encoded in the code itself: website URL, vCard / contact, email, SMS, phone call, plain text, Wi-Fi (F-04). They work without QR.CA, cannot be edited after printing and have no scan statistics; the product says so when the type is chosen.
- **Why:** Basic types every competitor offers; confirmed by Christian after the design sync: *static codes definitely in scope* (DS-03).
- **Solves:** Owners who only need a fixed link, contact or Wi-Fi code and expect it from any QR tool.
- **Who:** Visitor, Owner (customer), Scanner · **Problems:** BP-02 There is nothing worth pointing the code at, BP-03 Existing tools are confusing or poor to use · **Goals:** G-01
- **Depends on:** F-07 Code styling, F-10 Print-ready download · **Needed by:** F-04
- **Scope map (size):** `GEN-12` ? · **SRS:** QR-U-07, QR-U-08, QR-U-21
- **Figma:** `8045:2816` · `8079:3007`
- **Flows:** FL-03
- **Notes and risks:** Open: whether static codes are free after the trial (Oleg's *Basic* user type), and what a static code in Archive does (SRS-Q-07). *Links Page* as static and vCard vs Contact are to confirm with Oleg (Q-W6).
- **Complexity (market check):** Client-side encoding (qr-code-styling). Low risk. Open: behaviour in Archive and after the trial (SRS-Q-07) affects state logic, not encoding.
- **Complexity (market check):** Per-type form + payload encoder + validation. Each type is small; multiply by the type count and both static/dynamic variants.
- **Complexity (market check):** `.vcf` generation; personal data (PIPEDA). vCard vs Contact to confirm (Q-W6).
- **Open questions:** SRS-Q-07 — Any free plan, or only trial → paid? Are static codes free after the trial, and what does a static code in Archive do? *(Open)*
- **Market:** *Static QR code generation* (table stakes, free); *Multiple content/data-type templates (URL, text, email, SMS, phone, geo)* (table stakes, free); *vCard / digital business card* (table stakes, free with limits)

### M2 · Managing codes

#### F-13

**Dashboard** · V1 · Must · size **S** · ✅

- **What:** All codes in one list with name, type, status and scan count, row actions (edit, analytics, download, move, duplicate, pause / activate, delete), search, filters, sort and an empty state that leads to creation.
- **Why:** Management is the brief's second core area (§2) and the screen owners return to.
- **Solves:** Owners with more than a handful of codes lose track of them.
- **Who:** Owner (customer) · **Problems:** BP-03 Existing tools are confusing or poor to use · **Goals:** G-04
- **Depends on:** F-64 Owner web app (code workspace) · **Needed by:** F-17
- **Scope map (size):** `ACC-04` S · **SRS:** QR-U-22
- **Figma:** `8045:3708` · `8045:3479`
- **Flows:** FL-07
- **Notes and risks:** Sort is not drawn in the wireflows.

#### F-14

**Edit at any time** · V1 · Must · size **M** · ✅

- **What:** Change content, page, style or settings in any order. Content changes apply on the next scan with the same code identifier and printed pattern. Edits are unlimited on every plan.
- **Why:** This is the reason dynamic codes exist.
- **Solves:** Reprinting when anything behind the code changes.
- **Who:** Owner (customer) · **Problems:** BP-01 A printed code cannot be changed · **Goals:** G-03
- **Depends on:** F-19 Fast, reliable redirect
- **Scope map (size):** `DYN-01` M, `DYN-02` S, `DYN-03` S · **SRS:** QR-U-23
- **Figma:** `8045:2391`
- **Business rules:** BRL-01, BRL-10
- **Flows:** FL-05
- **Complexity (market check):** Cache invalidation on edit (redirect must see the new target within seconds). Edit history not required in V1.
- **Market:** *Editable destination after printing* (table stakes, paid — entry tier)

#### F-15

**Pause and reactivate** · V1 · Must · size **S** · ✅

- **What:** Switch a dynamic code off and back on with a confirmation. Codes have two statuses, **Active** and **Paused** (DS-02). A paused code shows a friendly QR.CA "not available" page, never an error; reactivation restores the last destination. Moving a code to Archive also pauses it (F-18).
- **Why:** Owners need control over when a code works (brief §2 activate / deactivate).
- **Solves:** Deleting a code just to stop it temporarily, and dead-looking codes that read as broken.
- **Who:** Owner (customer), Scanner · **Problems:** BP-01 A printed code cannot be changed, BP-04 Trials and cancellations that kill printed codes · **Goals:** G-03
- **Depends on:** F-19 Fast, reliable redirect, F-23 Clear "not live" pages · **Needed by:** F-18, F-37
- **Scope map (size):** `DYN-04` S, `DYN-05` ? · **SRS:** QR-U-24
- **Figma:** `8045:3708`
- **Business rules:** BRL-05
- **Flows:** FL-06

#### F-16

**Duplicate and delete** · V1 · Must · size **S** · ✅

- **What:** Duplicate makes a full copy (content, style, page, settings) with a **new ID and a new short redirect link**; it opens the same destination until changed, has its own analytics, and is managed separately (DS-01). Delete asks for confirmation and offers Undo; afterwards the code shows a "no longer available" page and its identifier is never reused.
- **Why:** Basic management from the brief (§2).
- **Solves:** Rebuilding similar codes from scratch, and accidental deletions.
- **Who:** Owner (customer) · **Problems:** BP-03 Existing tools are confusing or poor to use · **Goals:** G-03
- **Depends on:** F-19 Fast, reliable redirect
- **Scope map (size):** `DYN-06` S, `DYN-02` S · **SRS:** QR-U-25
- **Figma:** `8045:3708`
- **Business rules:** BRL-01
- **Flows:** FL-06
- **Open questions:** SRS-Q-14 — Scan history of deleted codes: kept or removed? *(Open)*; SRS-Q-27 — Duplicates: safeguard for unchanged duplicates? How do analytics and safety treat two identical codes? *(Open)*

#### F-17

**Folders, tags and publication settings** · V1 · Must · size **S** · ✅

- **What:** Name, folder, tags and description on each code; create folders from the sidebar and move codes between them. Deleting a folder never deletes its codes.
- **Why:** Organisation is in the brief (§2) and matters most to multi-location and heavier users.
- **Solves:** Finding the right code among many.
- **Who:** Owner (customer) · **Problems:** BP-03 Existing tools are confusing or poor to use, BP-08 Heavy users need scale and automation · **Goals:** G-04
- **Depends on:** F-13 Dashboard · **Needed by:** F-18
- **Scope map (size):** `ACC-04` S · **SRS:** QR-U-13, QR-U-26
- **Figma:** `8045:2816` · `8045:3479`
- **Flows:** FL-03, FL-04, FL-07
- **Notes and risks:** Schedule publication and password protection, drawn in the settings step, are not V1.
- **Market:** *Folders / Tags / campaign organization* (competitive standard, paid — mid tier)

#### F-18

**Archive folder** · V1 · Must · size **—** · 🟡

- **What:** An always-present Archive folder for codes the owner no longer uses. **Archive is a folder, not a status.** Moving a dynamic code there pauses it, after a clear warning. Archived codes keep their history and can be taken out and reactivated; on activation the owner picks the folder it returns to.
- **Why:** Business users may have hundreds of codes; the working list has to stay short without deleting anything.
- **Solves:** Cluttered dashboards, and deleting codes just to hide them.
- **Who:** Owner (customer) · **Problems:** BP-03 Existing tools are confusing or poor to use · **Goals:** G-04
- **Depends on:** F-15 Pause and reactivate, F-17 Folders, tags and publication settings
- **Scope map (size):** `ACC-07` ? · **SRS:** QR-U-27
- **Figma:** `8053:2392` · `8070:2711`
- **Flows:** FL-06
- **Notes and risks:** DS-02. Archive moves are tracked, to decide later whether a terminal 'archived' status is needed (SRS-Q-26). What a static code does in Archive is open (SRS-Q-07).
- **Open questions:** SRS-Q-26 — Terminal 'archived' status needed, or is the Archive folder enough? Check competitors; decide from archive analytics *(Open)*; SRS-Q-07 — Any free plan, or only trial → paid? Are static codes free after the trial, and what does a static code in Archive do? *(Open)*
- **Market:** *Folders / Tags / campaign organization* (competitive standard, paid — mid tier)

#### F-64

**Owner web app (code workspace)** · V1 · Must · size **S** · ✅

- **What:** The logged-in QR.CA application where an owner works with their codes, on phone or desktop: dashboard; creation and editing; folders and the Archive folder; pause, duplicate, delete; bulk creation; analytics; plans and billing; account settings; the APIs screen. An umbrella: it names the application and its navigation; behaviour is in F-02…F-39.
- **Why:** It is the core of the client's brief: *"Creation … Management: Dashboard • edit destination/content • activate/deactivate • duplicate/delete • folders/tags • search/filter/sort"* (brief §2).
- **Solves:** Where the main promise is kept: change a printed code without reprinting, organise many codes, see whether they work.
- **Who:** Owner (customer) · **Problems:** BP-01 A printed code cannot be changed, BP-03 Existing tools are confusing or poor to use, BP-05 The business cannot tell whether a code works · **Goals:** G-01, G-03, G-04
- **Depends on:** F-30 Sign-up, log-in and password recovery · **Needed by:** F-13
- **Scope map (size):** `ACC-04` S · **SRS:** QR-U-42
- **Figma:** `8045:3479` · `8045:3708`
- **Notes and risks:** Named separately after the design sync (00:00–00:40), where 'admin' was used for it. Rule for all documents: **'admin' means only the internal QR.CA console** (F-49…F-54).
