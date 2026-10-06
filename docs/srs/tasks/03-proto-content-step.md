# Task 03 — Prototype exploration: creation Step 2 content (Website, Links Page)

| | |
| --- | --- |
| **Status** | In progress |
| **Created** | 2026-10-02 |
| **Confirmed by** | Oleg, 2026-10-02 |
| **Traces to** | QR-U-08 · QR-U-15 · QR-U-18 (Q-W8) · F-02 · F-46 · QR-A-04 · B-3 · Figma `8045:2816` Step 2 (`8013:2853` → `8040:1616` → `8040:1693`, note `8040:1619`) · FL-03 step 2 · audit row #37 |

## Problem

The owner-side creation wizard has no Step 2 yet. After picking a type, the owner has to enter what the code opens, and the form has to catch mistakes before the code can be saved. The SRS sets the rules (QR-U-08):

- **Website:** the address must be a valid http(s) URL and is safety-checked before saving.
- **Links Page:** every link has a label and a URL, links can be reordered and removed, and every URL is safety-checked.
- **Both:** when the owner presses Next Step with invalid content, the invalid fields are named and the step doesn't advance.

Figma has almost nothing for this step: one "Enter content" box, then "Tweak optional features" (French support, Smart Rules, Geolocation URL), then Next Step. The audit already flagged that Step 2 has no fields per type, no validation and no blocked-link state (row #37). So nobody has decided yet how the form looks, how links get edited, or when errors and the safety check show up. This prototype is meant to settle that.

## Root causes

- The Wireflows show Step 2 as one generic box with no fields.
- The home page `LinksFormSection` is demo-only (decision 0002). Its parts can be reused, but it isn't the baseline.
- F-46, the link safety check, is not drawn anywhere. Its states (checking, safe, blocked, under review) have never been designed.

## Agreed decisions

1. **Scope (Oleg, 2026-10-02).** Only **Website (dynamic)** and **Links Page (dynamic)**. Static Website comes later with the other static types. Links Page as a static type is still open (Q-W6).
2. **Links Page fields (Oleg, 2026-10-02).** Step 2 holds **only the links**, each with a label and a URL. The page title, description, logo and the page's look belong to Step 3, the Page Builder (QR-U-10).
3. **French (Oleg, 2026-10-02).** French is an optional **"French support" toggle**, as in Figma note `8040:1619`. It's off by default. Turning it on shows a French label field for each link. A missing French label only warns, it doesn't block (B-3). This differs from QR-U-18, which treats both languages as a property of every page. The SRS keeps the toggle only if the client prefers it (Q-W8). The difference is logged as a gap at teardown. Smart Rules and Geolocation URL are left out because they're post-MVP (FD-09).
4. **Three variants**, each a direction that could ship on its own. Each takes a different position on the three axes Oleg picked (preview, links editor, when validation runs):

   | Variant | Preview | Links editor | Validation and safety check |
   | --- | --- | --- | --- |
   | **Plain Form** | None. A single, calm column | Stacked cards with ↑ / ↓ and remove | When the owner leaves a field. The safety status sits next to each URL |
   | **Live Preview** | Form beside a phone preview of what the scanner gets: a "this code opens…" card for Website, a bare list of links for Links Page. On phone, a Form / Preview switch | Compact rows with a drag handle, reorderable with the pointer or with the keyboard | While typing, with a short delay. The safety status updates live |
   | **Check at the End** | None | One link at a time: fill in a small "Add link" panel, and the link drops into a list. A row menu offers edit, move up / down and remove | Nothing shows while typing. Next Step names every invalid field in a summary, then runs a visible "Checking N links…" pass |

5. **Shared surroundings for every variant.** These carry over from task 02:
   - the same mock wizard frame: header, "Step 2", Cancel with a mock confirmation note, and Back / Next Step
   - the real tokens, the EN / fr-CA interface toggle, and machine-drafted French copy marked as mock

   Next Step opens a labelled placeholder for the following step: *Page Builder* for Links Page, *Code style* for Website. The placeholder lists the content that was entered, to show it carried over.
6. **Prototype controls.** These belong to the harness, not the design:
   - a type switch (Website / Links Page)
   - a content preset: **Empty**, **Realistic**, or **Worst**. Worst means 12 links, a 60-character label, a long URL with a query string, French on, and one blocked and one under-review link.
7. **The safety check is faked and labelled as mock.**
   - A URL containing `malware-test` is **blocked**. It can't be saved, and the reason is shown.
   - A URL containing `review-test` is **under review**. It works and is flagged.
   - Anything else is **safe** after about 600 ms.
   - Typing a bare domain such as `cafe.ca` adds `https://` and shows that it did. Anything other than http(s) is invalid.
8. Same as task 02: the output is a decision record in `docs/decisions/`. Then the prototype is deleted.

## Implementation stages

1. **Stage 1: harness and variants.**
   - Files: `src/proto/create-content/*`, containing the harness, the picker chrome copied verbatim from the skill spec, three variant files, the shared validation and mock safety helpers, and the presets.
   - It's self-contained and doesn't import anything from `src/proto/create-type/`, so either prototype can be torn down first.
   - One fenced, dev-only mount block goes in `src/main.tsx` (`// PROTO create-content`), next to the task 02 block, on `/proto/create-content`. Outside dev it falls back to `<App />`.
   - `src/proto/` is already excluded locally (`.git/info/exclude`), so only the mount block and the docs are committed.
2. **Stage 2: decision and teardown.**
   - Write the decision record.
   - Delete `src/proto/create-content/` and revert the mount block, then grep to confirm `PROTO create-content` is gone.
   - Add the French-toggle gap to `prototype-gaps.md`, and mark QR-U-08 (Website, Multi-Link) as decided in `traceability.md`.

## Out of scope

- Static Website, the other dynamic types (PDF / File, vCard, App Store, Menu, Review) and all other static types.
- Page title, bio, logo and styling (Step 3, QR-U-10). Platform icons per link.
- Time-based schedules (F-60, Step 5), Smart Rules and Geolocation URL (FD-09).
- A real safety-check service and the admin review queue (F-52).
- Choosing the Step 1 layout. That's task 02.

## Acceptance criteria

- [ ] **Website:** a valid http(s) URL is required. A bare domain gets `https://`. A blocked URL can't pass Next Step and shows its reason. An under-review URL passes and is flagged (QR-U-08, F-46).
- [ ] **Links Page:** links can be added, edited, reordered and removed in every variant. Each link needs a label and a valid URL. At least one link is required. Each URL shows its safety status (QR-U-08).
- [ ] With invalid content, Next Step names the invalid fields and doesn't advance, in every variant (QR-U-08 last AC).
- [ ] The French support toggle shows a French label per link. Missing French only warns (B-3).
- [ ] Reordering works from the keyboard in every variant. Every icon button has a label. Inputs are at least 16 px.
- [ ] The placeholder after Next Step names the type and lists the content that was entered. Back returns to Step 2 with the input intact.
- [ ] Picker: keys 1–3 and ←/→ switch variants, `?v=` keeps the choice, and the console is clean.
- [ ] Phone (375 px) and desktop (1440 px) checked in EN and fr-CA, with the Worst preset and no horizontal scroll.
- [ ] `npm run lint` and `npm run build` pass. At teardown, `src/proto/create-content/` and the mount block are gone.

## Open questions

- **Q-W8:** does the client want French as a per-code toggle, or always on? This prototype shows the toggle, and the decision record should note what it implies for QR-U-18.
- How many links can a page have? The SRS sets no limit. The prototype uses 12 as the worst case and sets no cap.

## Progress log

| Date | Stage | Commit | Note |
| --- | --- | --- | --- |
| 2026-10-02 | Brief | — | Draft written from SRS QR-U-08/18, FL-03, F-46 and Figma `8045:2816` Step 2 |
| 2026-10-02 | 1 | — | Harness and 3 variants (Plain, Preview, Batch) built. Headless check: 3 variants × 2 types × 375/1440 × EN/FR show no horizontal scroll and a clean console. Worst content is stopped at Next Step and Realistic content goes through. Drag, keyboard reorder, row menu, blocked flow and Back with input kept all verified. Not committed: `src/main.tsx` also holds task 02's uncommitted block |
