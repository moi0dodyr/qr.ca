# Task 07 — Home page: match Mockups *Concept v.2*

| | |
| --- | --- |
| **Status** | Draft |
| **Created** | 2026-10-06 |
| **Confirmed by** | — |
| **Traces to** | F-01 · QR-U-01 · QR-U-07 · QR-U-08 · Figma Mockups *Concept v.2* `6119:5` → *Terminal* `6119:6` · gaps PG-03, PG-05, PG-07, PG-08, PG-15 |

## Problem

Oleg updated the home page concept in Figma (Mockups, *Concept v.2* `6119:6`, note *Light Gradient View*). The deployed prototype (qrca-teal.vercel.app) still shows the old concept (`6062:2295`). What a visitor sees today, compared with Figma:

| Area | Prototype today | Figma `6119:6` |
| --- | --- | --- |
| Header | "QR.ca", 36 px logo, nav item "Price" | "QR.CA", 32 px logo, nav item "Pricing" |
| Hero headline | "The first 🇨🇦 Canadian-native QR Code Generator" | "Create, customize and track QR codes" (no flag, no "Canadian") |
| Hero subtitle | "Generate branded QR codes in seconds, share them…" | "Add your content, customize the design, and download. Track every scan when you need to." |
| Type tabs | Website · vCard · Links Page · Text · **Contact** · Restaurant menu · More | Website · vCard · **Multi-link page** · **Plain text** · **App store link** · Restaurant menu · More |
| Tab icons | Filled icons; active circle filled with the tab's own colour | Outline icons (globe, ID card, link, note, storefront, fork-knife, chevron for More); active circle and underline in a soft lavender |
| Accent colour | Changes per tab (blue, pink, violet, …) | One lavender accent (only *Website* is drawn) |
| Step 2 tabs | Active underline blue | Active underline lavender |
| "+10 more" ribbon | Amber | Pink |
| Step 3 panel | Tinted with the tab colour | Lavender tint, lavender Download button |
| Tracking toggle | "Track your scans" + pink **Premium** badge, left-aligned | "Track analytics", no badge, centred under the code |
| Formats line | "Available in SVG, PNG, JPG" | "Available in SVG, PNG, JPG, PDF, EPS" |

## Root causes

- Figma change: the concept was redrawn after the client's feedback of 2026-10-06 (no "Canadian" in copy, keep it simple like Uniqode / QRCG, see [client-feedback.md](../../design/client-feedback.md)).
- The type tabs now follow the SRS v2 reference list more closely (QR-U-07): *Multi-link page*, *Plain text* and *App store link* are v2 names, and the old *Contact* tab (a `tel:` phone number, PG-05) is gone.
- The prototype was built from the older Mockups frame and was never re-synced.

## Agreed decisions

Proposed by Claude; Oleg confirms or changes them (see Open questions).

1. Figma `6119:6` is the visual source for the home page. Exact sizes and colours come from `get_design_context` on that node, not from the screenshot.
2. Tabs become: Website, vCard, Multi-link page, Plain text, App store link, Restaurant menu, More. The *Contact* (`tel:`) tab and its form are removed.
3. **App store link** gets the v2 form (*[User] - Code creation - step 2*): App Store URL, Google Play URL, Fallback URL. On the home page it stays a demo (0002): the preview encodes the first filled store link, falling back to the Fallback URL. A real dynamic code would point to our redirect service instead. Logged as a gap.
4. One lavender accent for every type, replacing the per-tab colours (`tabColors`), as only one state is drawn and the note describes one "cool-toned" look.
5. "Track analytics" keeps today's behaviour (opens the sign-up pop-up), just without the Premium badge.
6. The Figma formats line has a stray space ("JPG ,"). The prototype uses "SVG, PNG, JPG, PDF, EPS".
7. Copy in the sign-up pop-up that says "Canadian" or "Premium" is shortened to follow the client principles (no "Canadian", short copy). This isn't in the Figma frame but the same feedback applies.
8. Figma only shows desktop. On phones (375 px) the tab strip scrolls sideways inside itself (as today), and the panels stack.

## Implementation stages

Each stage is one commit, and each must leave `npm run lint` and `npm run build` green. The uncommitted dev-only proto harness in `src/main.tsx` (tasks 02–06) is not part of this task and stays out of these commits.

1. **Stage 1: Header and hero.** Brand name, logo size, "Pricing"; new headline and subtitle, Canada flag removed from the hero. (files: `Header.tsx`, `HeroHeadline.tsx`)
2. **Stage 2: Type tabs.** New labels and order, outline icons, lavender active state; rename the `contact` type to `appstore` in `ContentTabType`. (files: `ContentTypeNav.tsx`, `icons.tsx`, `utils/theme.ts`, `App.tsx`)
3. **Stage 3: App store link form.** Three URL fields replace the phone field; a pure encoder picks the payload. (files: `ContentForm.tsx`, new `utils/appStore.ts`, `App.tsx`)
4. **Stage 4: One accent colour.** Lavender for the Step 2 tab underline, Step 3 panel tint and Download button; pink "+10 more" ribbon. (files: `utils/theme.ts`, `ContentForm.tsx`, `ShapeTiles.tsx`, `DownloadPanel.tsx`)
5. **Stage 5: Download panel and pop-up copy.** "Track analytics" centred, no Premium badge; formats line; pop-up copy without "Canadian" / "Premium". (files: `DownloadPanel.tsx`, `App.tsx`)
6. **Stage 6: Close the docs.** `traceability.md` (F-01 → `6119:6`), `prototype-gaps.md` (PG-03, PG-05, PG-07, PG-08 updated; new gap for the App store link payload), `docs/design/README.md` (Mockups node map gets *Concept v.2*), brief set to Done.

After Stage 6 I'll ask before pushing; the push is what updates the deployed prototype.

## Out of scope

- Making the *More* tab, Logo, Frame and Colours tabs work (PG-11).
- PDF upload for Restaurant menu (PG-01), disabling Download when empty (PG-02), static / dynamic labels (PG-04).
- Marketing sections below the generator (How it works, Features, Pricing, FAQ).
- The dev-only proto routes under `src/proto/`.

## Acceptance criteria

- [ ] At 1440 px the home page matches `6119:6` side by side: header, hero copy, tab labels / icons / active state, Step 1–3 panels, colours and copy.
- [ ] No "Canadian" anywhere on the home page or in the sign-up pop-up.
- [ ] *App store link* shows App Store URL, Google Play URL and Fallback URL, and the preview code changes as they're typed.
- [ ] Switching tabs no longer changes the accent colour.
- [ ] "Track analytics" opens the sign-up pop-up; there's no Premium badge.
- [ ] Phone (375 px) and desktop (1440 px) checked, with no horizontal scroll
- [ ] `npm run lint` and `npm run build` pass

## Open questions

- **Accent colour (decision 4):** one lavender for every type, or keep a colour per type and just make Website lavender? Recommendation: one colour.
- **App store link preview (decision 3):** OK to encode the store link directly as a demo, or would you rather show a mock short link (labelled "mock")?
- **Pop-up copy (decision 7):** include it here, or leave the pop-up for a later task?
- **Static Contact (vCard):** it no longer has a tab on the home page. Should it sit under *More* later, or is that fine as is?

## Progress log

| Date | Stage | Commit | Note |
| --- | --- | --- | --- |
| 2026-10-06 | Brief | — | Drafted from Figma `6119:6`, waiting for Oleg |
