# Task 04 — Prototype exploration: Upgrade pop-up

| | |
| --- | --- |
| **Status** | In progress |
| **Created** | 2026-10-02 |
| **Confirmed by** | Oleg, 2026-10-02 |
| **Traces to** | QR-U-32 · QR-U-30 · QR-U-31 · F-34 · F-32 · FL-09 steps 3–4 · A-14 · BRL-35, BRL-36 · Figma `8053:2117` (trial `8053:2284`, note `8053:2194`) · audit rows #2, #3, #11, #19, #67 |

## Problem

Owners have no way to pay yet. QR-U-32 asks for an upgrade pop-up that opens from wherever the owner is, shows the version for their account state, takes a card and handles success and failure.

The Figma flow `8053:2117` has two branches:

- **Trial** ("Upgrade pop-up from trial"). *Trial Details* lists what's unlocked, the days left, what stops without a subscription and when the charge happens. Then come *Enter Card Details* → *Unlock Premium* → payment → a Success pop-up (*To QR codes*) or an Error pop-up (*Try again* / *Close*). *Keep Free Trial* closes the pop-up and returns the owner to where they were.
- **No subscription** ("Default Upgrade pop-up"). *Your Plan Details* lists what still works and what doesn't. It has the same card and payment path. *Not now* closes it.

The flow is drawn, but the pop-up itself isn't. Nobody has decided how much it holds on one screen, or how the details, the card and the result fit together. This prototype settles that.

## Root causes

- The Wireflows show the pop-up as boxes and lists, with no layout.
- FL-09 step 4 and Figma disagree about choosing a plan (audit #2). The other Figma details are already settled upstream: *Stay Free* becomes "Not now" (A-14, audit #3), and the days left is a live counter (audit #11, accepted).

## Agreed decisions

1. **One plan, as in Figma (Oleg, 2026-10-02).** The pop-up sells a single plan, *Premium*, with *Unlock Premium*, as in QR-U-32. There's no tier choice. FL-09 step 4 ("choose a plan") and the three-tier ladder (F-35) are left to Plans & Billing. This difference is logged as a gap at teardown (audit #2, SRS-Q-08).
   - The owner chooses between **monthly and yearly** billing (BRL-36). This is billing, not a plan choice.
   - Mock prices come from the client's entry tier: **$20 / month or $120 / year, CAD** (C-1.2). They're labelled as mock.
   - Tax is shown by province (BRL-35), for example GST + QST for Quebec.
2. **Two account states, two entry points (Oleg, 2026-10-02).**
   - **Trial, from the sidebar trial banner.** The days left is a live number, the end date is shown and the button is *Keep Free Trial*.
   - **No subscription, from the Dashboard** while trying to create a dynamic code. The pop-up shows what still works (see codes and statistics, download) and what doesn't (new dynamic codes; paused codes per SRS-Q-01), and the button is *Not now*.

   The account menu and locked-feature entry points are left out of this round.
3. **Three variants.** Each takes a different structure:

   | Variant | Structure | Card entry | Result |
   | --- | --- | --- | --- |
   | **Single Sheet** | One scrolling pop-up holds the details, the billing period, the card form and *Unlock Premium*. Closest to Figma | Inline, always visible | Replaces the sheet's contents |
   | **Steps** | One question per screen: details, then card, then result, inside one pop-up with a step indicator and Back | Its own step | Its own step |
   | **Split** | A wide pop-up. The left side says why the owner is here: days left with the date, or what got blocked. The right side is the checkout. On phone it becomes a bottom sheet with the reason collapsed at the top | Right column | Right column, while the left side stays |

4. **The secure card form is faked and labelled as mock** ("Payment provider's secure form, mock"). QR.CA never sees the card (QR-U-32 last AC).
   - The card `4000 0000 0000 0002` is **declined**. That opens the Error state, with *Try again* (back to the card, still filled in) and *Close*.
   - Any other complete card **succeeds** after about 1.2 s. The Success state leads to a labelled *QR codes (Dashboard)* placeholder that shows the account as subscribed.
   - Card number, expiry and CVC are checked on the spot, with errors named.
5. **Shared surroundings for every variant:** a mock owner-app frame (sidebar with the trial banner, and a Dashboard behind the pop-up), the real tokens and the EN / fr-CA toggle. French copy is machine-drafted and marked as mock. Close and Escape return the owner to where they were, with focus back on the button that opened the pop-up.
6. **Prototype controls.** These belong to the harness, not the design:
   - the account state (Trial / No subscription)
   - the days left (12 / 1)
   - the province (ON, HST / QC, GST + QST)
   - a **Worst** preset: fr-CA, 1 day left, Quebec, yearly billing and a declined card already filled in
7. As with tasks 02 and 03, the output is a decision record in `docs/decisions/`, and the prototype is then deleted.

9. **Round 2: refine Split (Oleg, 2026-10-02).** Oleg picked **Split** and asked for a more polished and refined version. Sheet and Steps are set aside, and the reasons go in the decision record. Round 1's Split stays in the picker as **Before**. Three refined takes share one checkout:
   - one grouped card field
   - a sliding monthly / yearly switch
   - a pinned footer that shows **Due today** (0 $ during the trial), the next charge, and the tax lines behind a toggle
   - *Unlock Premium* always in view

   The three takes differ in the left panel:

   | Variant | Left panel |
   | --- | --- |
   | **Timeline** | The 14 trial days drawn as a bar with today marked, the start and end dates, then what stops and what Premium keeps |
   | **Ledger** | A "without a plan / Premium" comparison table. The checkout shows an order summary before the card |
   | **Contrast** | A dark panel with one large number (days left or codes paused) and three short lines |

## Implementation stages

1. **Stage 1: harness and variants.**
   - Files: `src/proto/upgrade/*`, containing the harness, the picker chrome copied verbatim from the skill spec, three variant files, the shared copy, mock payment and price helpers, and the presets.
   - It's self-contained and imports nothing from the other prototypes.
   - One fenced, dev-only mount block goes in `src/main.tsx` (`// PROTO upgrade`) on `/proto/upgrade`. Outside dev it falls back to `<App />`.
   - `src/proto/` is already excluded locally, so only the mount block and the docs are committed.
2. **Stage 2: decision and teardown.**
   - Write the decision record.
   - Delete `src/proto/upgrade/` and revert the mount block, then grep to confirm `PROTO upgrade` is gone.
   - Add the single-plan-versus-FL-09 gap to `prototype-gaps.md`, and update the F-34 row in `traceability.md`.

## Out of scope

- Choosing between tiers, Plans & Billing, downgrade and cancel (QR-U-33, QR-U-34).
- The account-menu and locked-feature entry points. Showing the pop-up to an owner who is already subscribed (audit #19).
- The trial banner's own design (QR-U-30). It's only a trigger here.
- Currency conversion (F-62, SRS-Q-24), proration, invoices, and a real Recurly integration.
- What scanners see after the trial ends (SRS-Q-01). The wording reads "paused" and is marked as pending SRS-Q-01.

## Acceptance criteria

- [ ] **Trial:** the pop-up shows what's unlocked, the live days left with the end date, what stops working without a subscription, and when the charge happens. *Keep Free Trial* closes it and returns the owner to where they were (QR-U-32 AC2).
- [ ] **No subscription:** the pop-up shows what works and what doesn't. *Not now* closes it and returns the owner to where they were (QR-U-32 AC3).
- [ ] Card and *Unlock Premium*: success shows a Success state that leads to the codes, and the account then shows as subscribed. A declined card shows an Error state with *Try again* and *Close* (QR-U-32 AC4).
- [ ] The card form is visibly the payment provider's mock secure form (QR-U-32 AC5). The price shows CAD, the billing period and tax by province (BRL-35).
- [ ] The pop-up traps focus, closes with Escape, returns focus to its trigger, uses inputs of at least 16 px and labels every icon button.
- [ ] Picker: keys 1–3 and ←/→ switch variants, `?v=` keeps the choice, and the console is clean.
- [ ] Phone (375 px) and desktop (1440 px) checked in EN and fr-CA, with the Worst preset and no horizontal scroll.
- [ ] `npm run lint` and `npm run build` pass. At teardown, `src/proto/upgrade/` and the mount block are gone.

## Open questions

- **SRS-Q-08:** the plan's name and price. *Premium* at $20 / $120 is a placeholder.
- **SRS-Q-01:** whether codes "expire" or "pause" after the trial. The pop-up copy uses "pause" (recommended) until the client decides.
- Yearly billing: should the saving be shown? $120 a year against $240 for twelve months is a 50% saving. The prototype shows it, and the decision record should say whether to keep it.

- **When is a trial owner charged?** QR-U-32 says the plan applies at once, but not when the first charge happens. The prototype assumes nothing is charged until the trial ends, so the trial days aren't lost. Confirm with Christian.

## Progress log

| Date | Stage | Commit | Note |
| --- | --- | --- | --- |
| 2026-10-02 | Brief | — | Draft written from QR-U-32, FL-09, F-34 and Figma `8053:2117`. Oleg chose: a single plan, the three proposed directions, and the Trial banner and Dashboard (no subscription) entry points |
| 2026-10-02 | Brief | — | Confirmed by Oleg |
| 2026-10-02 | 1 | — | Harness and 3 variants (Sheet, Steps, Split) built on `/proto/upgrade`. Headless check: 3 variants × 2 states × 375/1440 × EN/FR show no horizontal scroll and a clean console. Verified: empty submit names and focuses the invalid fields, card formatting, Escape blocked while paying, declined → Try again keeps the card, success → To QR codes → account shows subscribed, focus trap, focus returns to the trigger. Variant 1 renamed "Sheet" so the picker fits at 375 px. Not committed: `src/main.tsx` also holds the uncommitted task 02 and 03 blocks |
| 2026-10-02 | 1 (round 2) | — | Oleg picked Split and asked for polish. Built Timeline, Ledger and Contrast, with round-1 Split as "Before"; Sheet and Steps removed from the picker. Headless: *Unlock Premium* stays in view at 375×740, 1280×720 and 1440×900 in every refined variant (round 1 failed this everywhere). 88/88 flow checks pass, with no horizontal scroll and a clean console |
