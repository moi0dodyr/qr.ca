# Task 05 — Prototype exploration: Plans & Billing page

| | |
| --- | --- |
| **Status** | In progress |
| **Created** | 2026-10-02 |
| **Confirmed by** | Oleg, 2026-10-02 |
| **Traces to** | QR-U-33 · F-35 · FL-10 step 1 (step 3 entry only) · QR-U-30, QR-U-31 (trial state) · BRL-35, BRL-36 · Figma `8045:3051` (trial `8086:7099`, subscription check `8053:3032`) · audit rows #2, #59, #60, #61, #63, #67 |

## Problem

Owners have nowhere to see their plan, what they'll be charged next, or their past invoices. QR-U-33 asks for "one place to see and change my plan and invoices so that billing is never a mystery".

The Figma flow `8045:3051` opens Plans & Billing from the account menu (or the upgrade pop-up) and branches three ways:

- **Free trial** (`8086:7099` Yes) has *Active Plan Details* (plan, auto-renewal, valid until, next invoice), *Provide Payment Details* → payment, *See all Plans* → *Available Plans* → *Select Plan* → payment, *Orders History* and *Manage Billing* → payment.
- **Subscribed** (`8053:3032` Yes) has *Active Plan Details*, *Upgrade / Downgrade* → *Available Plans* → *Select Plan* → payment → Success / Error pop-up, *Orders History*, *Manage Billing* → payment and *Cancel Plan* → reason → *Discount Suggestion* → *Canceled State* or *Activate Discount*.
- **No active subscription** (`8053:3032` No) has *Available Plans* → *Select Plan* → payment → Success / Error pop-up, and *Orders History*.

The flow lists what's on the page, but the page itself isn't drawn. Nobody has decided how the plan, the price, the next charge and the order history sit together, or how the page changes between the three states. This prototype settles the page layout.

## Root causes

- The Wireflows show the page as boxes, with no layout (audit #61: no plan names, prices, CAD, monthly / yearly or tax).
- The trial branch shows auto-renewal and next invoice. A trial has no card, so it can't renew (audit #60, C-6).
- Invoice PDF download and billing address are not drawn (audit #63, QR-U-33 AC4–5).

## Agreed decisions

1. **Page only this round (Oleg, 2026-10-02).** The prototype explores the page itself in each account state. Its actions open a **labelled placeholder panel** ("Change plan, next round", "Cancel plan, next round", "Manage billing, next round"), never a dead button:
   - *Change billing period* / *Upgrade*
   - *Cancel Plan*
   - *Manage Billing*
   - *Provide payment details*
   - *Select Plan*

   Two things are real because they live on the page: the **Orders History** list, and its **invoice PDF download**. The download is a mock that saves a small generated file labelled as mock.
2. **Single Premium plan, consistent with task 04 (Oleg, 2026-10-02).**
   - Available Plans shows one plan, *Premium*, with monthly or yearly billing (BRL-36) at the mock prices **$20 / month or $120 / year, CAD**, and what it includes.
   - Tax is shown by province (BRL-35).
   - The three-tier ladder (F-35, C-1.2), *Upgrade / Downgrade* and downgrade (BRL-12) aren't shown. This difference is logged as a gap at teardown, together with audit #2 (SRS-Q-08).
   - For a subscribed owner, "change plan" means switching between monthly and yearly. The button opens the placeholder.
3. **Three account states (Oleg, 2026-10-02):**

   | State | What the page shows |
   | --- | --- |
   | **Trial** | The plan is the free trial, with the live days left and the end date. There's **no** auto-renewal or next invoice (audit #60). It shows what stops when the trial ends, *Provide payment details* (optional, QR-U-04), the Premium plan to choose, and Orders History (empty) |
   | **Subscribed** | Active Plan Details: plan, billing period, auto-renewal on, valid until, next invoice (date and amount with tax), and the card on file (mock, last four digits). Then *Change billing period*, *Manage Billing*, Orders History and *Cancel Plan* (QR-U-33 AC2) |
   | **No subscription** | A *codes paused* notice (wording pending SRS-Q-01), Available Plans with the CAD price for monthly and yearly and what it includes, and Orders History, which is empty after a lapsed trial or filled after a past cancellation (QR-U-33 AC1) |

   The *Canceled (until period end)* and *Payment failed* states are left for the next round (audit #59).
4. **Three variants.** Each takes a different page structure:

   | Variant | Structure | Orders | Phone |
   | --- | --- | --- | --- |
   | **Stack** | One column of cards in the Figma order: plan, payment method, orders. Closest to Figma | A list inside a card, showing 5 at first with *Show all* | The same column |
   | **Tabs** | A page header with the plan status, then *Plan* / *Billing* / *Orders* tabs, one section at a time. Settings-style | A full-width table on its own tab, with pages | Scrollable tab bar |
   | **Statement** | A summary strip at the top: status, next charge, amount. Below it, two columns: the plan and actions on the left (sticky), and the order history at full height on the right. Dashboard-style | A dense table, always visible | The strip, then the plan, then the orders |

5. **Shared surroundings for every variant:**
   - a mock owner-app frame: the sidebar with the account menu, *Plans & Billing* selected and the trial banner when on trial
   - the real tokens
   - the EN / fr-CA toggle; French copy is machine-drafted and marked as mock

   Everything that would come from Recurly (plan, dates, card, orders) is mock and labelled as mock.
6. **Prototype controls.** These belong to the harness, not the design:
   - account state (Trial / Subscribed / No subscription)
   - billing period when subscribed (Monthly / Yearly)
   - province (ON, HST / QC, GST + QST)
   - order count (0 / 3 / 40)
   - a **Worst** preset: fr-CA, Quebec, yearly billing, 40 orders including one refunded and one failed-then-paid, a long business name and billing email, and 1 trial day left when on trial
7. The page follows the same pattern as task 04. The output is a decision record in `docs/decisions/`, and the prototype is then deleted.

## Implementation stages

1. **Stage 1: harness and variants.**
   - Files: `src/proto/plans-billing/*`, containing the harness, the picker chrome copied verbatim from the skill spec, three variant files, shared copy (EN / fr-CA), mock account / order / price / tax helpers, the mock invoice download and the presets.
   - It's self-contained and imports nothing from the other prototypes.
   - One fenced, dev-only mount block goes in `src/main.tsx` (`// PROTO plans-billing`) on `/proto/plans-billing`. Outside dev it falls back to `<App />`.
2. **Stage 2: decision and teardown.**
   - Write the decision record.
   - Delete `src/proto/plans-billing/` and revert the mount block, then grep to confirm `PROTO plans-billing` is gone.
   - Add the single-plan-versus-ladder gap and the deferred states to `prototype-gaps.md`, and update the F-35 and FL-10 rows in `traceability.md`.

## Out of scope

- Change plan, the three-tier ladder, upgrade / downgrade and proration (QR-U-33 AC3, BRL-12).
- Cancel, the reason, the retention offer and the canceled state (QR-U-34, F-36, A-12).
- Manage Billing: the card and billing address forms (QR-U-33 AC4).
- The checkout itself (task 04 covers it).
- The *Canceled until period end* and *Payment failed* states, and the failed-payment banner (QR-U-35, audit #59).
- Currency conversion (F-62, SRS-Q-24), refunds (SRS-Q-17) and a real Recurly integration.

## Acceptance criteria

- [ ] **No subscription:** shows Available Plans with the CAD price, monthly and yearly, what's included, and Orders History (QR-U-33 AC1).
- [ ] **Subscribed:** shows Active Plan Details (plan, auto-renewal, valid until, next invoice), the change-plan action, Orders History, *Cancel Plan* and *Manage Billing* (QR-U-33 AC2).
- [ ] **Trial:** shows the days left and the end date rather than auto-renewal or next invoice, plus an optional *Provide payment details* (audit #60, QR-U-04).
- [ ] **Orders History:**
  - [ ] Every order shows the date, the period, the amount with tax by province (BRL-35) and the status.
  - [ ] Each order downloads a mock invoice PDF (QR-U-33 AC5).
  - [ ] There's an empty state.
  - [ ] 40 orders don't break the layout.
- [ ] Every action responds. Out-of-scope actions open a labelled placeholder panel that traps focus, closes with Escape and returns focus to its trigger.
- [ ] Inputs are at least 16 px, every icon button has a label, and nothing uses `transition: all`.
- [ ] Picker: keys 1–3 and ←/→ switch variants, `?v=` keeps the choice, and the console is clean.
- [ ] Phone (375 px) and desktop (1440 px) checked in EN and fr-CA, with the Worst preset and no horizontal scroll.
- [ ] `npm run lint` and `npm run build` pass. At teardown, `src/proto/plans-billing/` and the mount block are gone.

## Open questions

- **SRS-Q-08:** the plan's name, price and limits. *Premium* at $20 / $120 is a placeholder, and the ladder is still undecided.
- **SRS-Q-01:** whether codes "expire" or "pause" without a subscription. The copy uses "paused" (recommended).
- **Invoice numbering and the legal invoice fields** (GST/HST and QST registration numbers on a Canadian invoice) come from Recurly. The mock shows placeholders. Confirm with Denys.

## Progress log

| Date | Stage | Commit | Note |
| --- | --- | --- | --- |
| 2026-10-02 | Brief | — | Draft written from QR-U-33, FL-10, F-35 and Figma `8045:3051` (box labels read per screenshot; the Figma MCP rate limit was hit, and the last 3 labels came from the audit). Oleg chose: page only, single Premium, and the Trial / Subscribed / No subscription states |
| 2026-10-02 | Brief | — | Confirmed by Oleg |
| 2026-10-02 | 1 | — | Harness and 3 variants (Stack, Tabs, Statement) built on `/proto/plans-billing`. Headless: 3 variants × 3 states × 375/1440 × EN/FR × normal/Worst show no horizontal scroll and a clean console. 109/109 checks pass: every placeholder action opens a panel that traps focus, closes with Escape and returns focus; the invoice downloads as a real (mock) PDF with a toast; Stack *Show all 40*; Tabs arrow keys stay inside the tab bar and pages work; picker keys switch. Not committed: `src/main.tsx` also holds the uncommitted task 02–04 blocks |
