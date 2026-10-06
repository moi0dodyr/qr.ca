# Task 02 — Prototype exploration: creation Step 1 type picker

| | |
| --- | --- |
| **Status** | In progress |
| **Created** | 2026-10-01 |
| **Confirmed by** | Oleg, 2026-10-01 |
| **Traces to** | F-02 · F-03 · F-04 · F-65 · v2 *[User] - Code creation - step 1* · QR-U-07 · QR-U-08 (static note) · QR-U-21 · DS-03 · A-15 · Figma `8045:2816` Step 1 · FL-03 step 1 |

## Problem

The owner-side creation wizard doesn't exist yet. Its first step has to offer eight dynamic and seven static types (v2 *Code creation - step 1*, QR-U-07; seven dynamic if time-based redirect is dropped). It also has to say, at the moment the owner chooses, that a static code works without QR.CA but can't be edited after printing and has no scan statistics. Website and vCard exist as both dynamic and static, so the screen has to handle the same purpose appearing twice.

How to lay this out hasn't been decided: by kind first, by purpose first, or through a question. This is a throwaway exploration to settle that before the real step is built.

## Root causes

- The home page type tabs (`ContentTypeNav`) are demo-only and don't follow the reference list ([0002](../../decisions/0002-home-page-demo-only-scanner-pages-later.md), PG-03, PG-04). They aren't the baseline for this step.
- The SRS fixes what the step must contain but not how it's presented.

## Agreed decisions

1. This is an exploration, not a feature. Three variants sit behind a dev-only picker on `/proto/create-type`. Nothing in production imports them.
2. The three directions, each on its own axis:
   - **Two Shelves.** Kind first, everything at once: a Dynamic grid and a Static grid. The static limits are stated once, on the shelf.
   - **Purpose First.** Purpose first, kind second: one list of what the code does. After picking, a Dynamic/Static switch appears only where both exist (Website, vCard). Static-only types carry the note inline.
   - **One Question.** Decision first, sequential: "Will you need to change it or see scans after printing?" leads to a short list for that kind, with a way back.
3. Shared surroundings for every variant: a mock owner-app wizard frame (header, "Step 1 of 4", Cancel), the real tokens (Inter Tight, `tabColors`, the existing icons), and an EN / fr-CA toggle. The French labels are the longest content and are machine-drafted, so they're **marked as mock copy**. Next Step leads to a labelled Step 2 placeholder with Back.
4. The output is a decision record in `docs/decisions/`, not code. The prototype is then deleted.

## Implementation stages

1. **Stage 1: harness and variants.** Files: `src/proto/create-type/*` (the harness, the picker chrome verbatim from the skill spec, three variant files, the shared type config). There's one fenced, dev-only mount block in `src/main.tsx` (`// PROTO create-type`). It renders the harness only when `import.meta.env.DEV` is true and the path is `/proto/create-type`. Otherwise it fails closed to `<App />`.
2. **Stage 2: decision and teardown.** Add the decision record (chosen direction plus the rejected ones and why). Delete `src/proto/`, revert the mount block, and grep to confirm `PROTO create-type` is gone. Update `traceability.md` for QR-U-07 (decided, not built).

## Out of scope

- Steps 2–6 of the wizard, the real Step 1 build, routing for the owner app.
- Extra dynamic types not in V1 (v2: "not in V1 unless the client asks"). Q-W6 is closed by v2: no static Multi-link page, and static contact is *Contact (vCard)* ([0006](../../decisions/0006-static-contact-is-vcard.md)).
- Changes to the home page type tabs (0002).

## Acceptance criteria

- [ ] Every entry of the v2 list is reachable in every variant, with v2 names: dynamic Website, PDF / File, Restaurant menu (PDF), Multi-link page, vCard, App store link, Review, Time-based redirect (⚠️ may be dropped from V1, discussion 2026-10-06); static Website, Contact (vCard), Email, SMS, Phone call, Plain text, Wi-Fi.
- [ ] Each variant states the static limits at the moment of choosing (works without QR.CA, can't be edited, no statistics).
- [ ] Picking a type and pressing Next Step opens the Step 2 placeholder, and the placeholder names the chosen type and kind. Next Step is disabled until a type is chosen.
- [ ] Picker: keys 1–3 and ←/→ switch variants, `?v=` persists the choice, the console is clean.
- [ ] Phone (375 px) and desktop (1440 px) checked in EN and fr-CA, with no horizontal scroll.
- [ ] `npm run lint` and `npm run build` pass. At teardown, `src/proto/` and the mount block are gone.

## Open questions

- Figma `8045:2816` Step 1 wasn't re-checked for this brief (MCP rate limit 2026-10-01). Its type list is aligned to A-15 already.

## Progress log

| Date | Stage | Commit | Note |
| --- | --- | --- | --- |
| 2026-10-01 | Brief | — | Draft written |
| 2026-10-01 | 1 | — | Harness and 3 variants built and checked headless at 375/1440, EN/FR. `src/proto/` is excluded in local `.git/info/exclude`, so stage 1 is not committed; only `src/main.tsx` mount block is tracked |
| 2026-10-06 | — | — | Re-targeted to SRS v2.0 ([0005](../../decisions/0005-adopt-srs-v2.md)): v2 names, *Contact (vCard)*, and Time-based redirect pending today's discussion. The stage-1 prototype still uses the v1 labels and needs the change |
