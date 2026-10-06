# Task 06 — Prototype exploration: dynamic vCard hosted page (scanner side)

| | |
| --- | --- |
| **Status** | In progress |
| **Created** | 2026-10-06 |
| **Confirmed by** | Oleg, 2026-10-06 |
| **Traces to** | F-22 · F-24 · F-12 · QR-U-08 (vCard AC) · QR-U-10 · QR-U-18 · QR-U-38 · A-1 · BRL-16 · BRL-34 · not drawn in Figma (C-4) |

## Problem

When someone scans a dynamic vCard code, they land on a hosted "business card" page. No one has designed this page. It isn't drawn in Figma (C-4), and the SRS only says what has to be on it:

- **v1.0 (upstream):** name is required and the rest is optional. The scanner can save the contact as a `.vcf` file (QR-U-08). The owner sets the colours, logo, call-to-action and template in Micro-Landing Customization (QR-U-10). The page is in English and French (QR-U-18) and has no advertising (BRL-34).
- **v2.0 (source of truth since 2026-10-06, [0005](../../decisions/0005-adopt-srs-v2.md)):** it lists the fields: first name, last name, company, job title, phone, email, website, address, photo or logo. Save to contacts downloads a contact file. EN / FR follows the phone's language and has a visible switch. The page has to load fast on a mid-range Android phone.

This prototype is meant to settle what the page looks like and how a scanner uses it.

## Root causes

- The scanner-side pages were deferred ([0002](../decisions/0002-home-page-demo-only-scanner-pages-later.md)), and Figma has no frame for them.
- The SRS lists data, not layout or actions. It doesn't mention tap-to-call, tap-to-email, opening the address in maps or opening the website.

## Agreed decisions

To confirm. These are proposals until Oleg confirms this brief.

1. **Fields follow v2.0 (Oleg, 2026-10-06):** first name, last name, company, job title, **one phone**, email, website, address and photo / logo. Decided: one phone, as v2 says (it replaces the earlier v1 basis with several numbers).
2. **Three variants**, each a direction that could ship on its own:

   | Variant | Axis | Shape |
   | --- | --- | --- |
   | **Contact Sheet** | Utility and density, like the phone's own contacts app | Compact header: photo, name, title and company. Then one labelled row per detail, and tapping a row calls, emails, opens maps or opens the site. *Save to contacts* is pinned to the bottom of the screen |
   | **Profile Card** | Brand-led personality | A full-width hero in the owner's colour, with a large photo and the name in big type. Below it, a row of round quick-action buttons (Call, Email, Website, Map), then the details on a card. *Save to contacts* sits in the hero |
   | **Save First** | One job: get the contact saved | A centred card with the photo, name and role, and one large *Save to contacts* button. The rest of the details are hidden behind a "Show details" disclosure |

3. **Shared in every variant:**
   - Save to contacts downloads a real `.vcf` built with the existing pure encoder `utils/vcard.ts`. It's labelled as mock, because a real page would serve the file from the server.
   - An EN / FR switch. French copy is machine-drafted and marked as mock.
   - Owner styling taken from QR-U-10: brand colour, logo and the call-to-action text.
   - No ads or third-party content.
   - Phone-first. On desktop the page is centred at phone width, not stretched.
4. **Harness controls** belong to the prototype, not the design:
   - **Content:** *Minimal* (first name only, the only required field), *Realistic*, or *Worst*. Worst means a 40+ character name, a long title and company, a long phone number, a long email, a long address, no photo, and a French text that runs longer than the English.
   - **Brand colour:** light (yellow), dark (navy) or the QR.CA blue, to check contrast on the hero and the buttons.
   - **Language:** EN / FR.
5. The output is a decision record in `docs/decisions/`. Then the prototype is deleted, as in tasks 02–05.
6. **Working answers to the open questions (Oleg confirmed the brief as written, 2026-10-06).** These hold until the questions are settled:
   - Tap-to-act actions are shown.
   - One phone number, as in v2.0.
   - The QR.CA footer and the photo each get an on/off switch in the harness, so both cases can be judged.
   - Photo and logo are separate optional fields.

## Implementation stages

1. **Stage 1: harness and variants.**
   - Files: `src/proto/vcard-page/*`, containing the harness, the picker copied from the skill spec, three variant files, presets and the mock copy.
   - It imports only `utils/vcard.ts` and doesn't depend on the other proto folders.
   - One fenced, dev-only mount block goes in `src/main.tsx` (`// PROTO vcard-page`) on `/proto/vcard-page`. Outside dev it falls back to `<App />`.
   - `src/proto/` is excluded locally, so only the mount block and the docs are committed.
2. **Stage 2: decision and teardown.**
   - Write the decision record.
   - Delete `src/proto/vcard-page/` and revert the mount block, then grep to confirm `PROTO vcard-page` is gone.
   - Log the gaps in `prototype-gaps.md`, and update `traceability.md`.

## Out of scope

- The owner-side page builder (Step 3, QR-U-10). This task covers only what the scanner sees.
- Static *Contact (vCard)* ([0006](../../decisions/0006-static-contact-is-vcard.md)). It has no page: the phone's own contact screen opens.
- The paused, deleted and disabled pages (QR-U-39). That would be a separate task.
- Real hosting, speed measurement, search-engine hiding and the owner's tracking tags.

## Acceptance criteria

- [ ] In every variant, Save to contacts downloads a valid vCard 3.0 file with the entered data (QR-U-08).
- [ ] The Minimal preset (name only) looks deliberate, with no empty rows or broken layout.
- [ ] The Worst preset wraps cleanly and nothing is cut off or overflows.
- [ ] Every tappable action has a target of at least 44 px and a text label (not an icon alone). Brand colours keep text readable on the light, dark and blue presets.
- [ ] The EN / FR switch changes all the page text.
- [ ] Picker: keys 1–3 and ←/→ switch variants, `?v=` keeps the choice, and the console is clean.
- [ ] Phone (375 px) and desktop (1440 px) checked in EN and FR with no horizontal scroll.
- [ ] `npm run lint` and `npm run build` pass. At teardown the folder and the mount block are gone.

## Open questions

- **Tap-to-act actions** (call, email, maps, website) aren't in either SRS. The prototype shows them. Do we propose them upstream?
- ~~Several phone numbers (v1.0) or one (v2.0)?~~ Answered 2026-10-06: one (v2.0).
- **QR.CA branding:** should the page carry a small "Made with QR.CA" footer, like the PDF pages, or nothing? Neither SRS says.
- **Photo and logo:** v2.0 has one "photo / logo" field. Is it a person's photo, the company logo, or both?

## Progress log

| Date | Stage | Commit | Note |
| --- | --- | --- | --- |
| 2026-10-06 | Brief | — | Draft written from SRS v1.0 QR-U-08/10/18, v2.0 Hosted pages (reference only) and decision 0002 |
| 2026-10-06 | 1 | — | Harness and 3 variants built. The picker labels are shortened to Sheet / Profile / Save so they fit at 375 px. Headless check: 3 variants × 3 contents × 3 brands × 375/1440 × EN/FR show no horizontal scroll and a clean console. The Worst `.vcf` downloads and is valid vCard 3.0, with all 3 phones. Lint and build pass. Not committed: `src/main.tsx` also holds the uncommitted blocks for tasks 02–05 |
| 2026-10-06 | — | — | Oleg: one phone number, as v2.0 says. Brief updated; the stage-1 prototype still shows up to 3 phones and needs the change |
