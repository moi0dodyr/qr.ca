# Task 07 — Home page: match Mockups *Concept v.2*

| | |
| --- | --- |
| **Status** | Done |
| **Created** | 2026-10-06 |
| **Confirmed by** | Oleg, 2026-10-06 |
| **Traces to** | F-01 · QR-U-01 · QR-U-07 · QR-U-08 · Figma Mockups *Concept v.2* `6119:5` → *Terminal* `6119:6` · gaps PG-03, PG-05, PG-07, PG-08, PG-15 |

## Problem

Oleg updated the home page concept in Figma (Mockups, *Concept v.2* `6119:6`, note *Light Gradient View*). The deployed prototype (qrca-teal.vercel.app) still shows the old concept (`6062:2295`). What a visitor sees today, compared with Figma:

| Area | Prototype today | Figma `6119:6` |
| --- | --- | --- |
| Header | "QR.ca", 36 px logo, nav item "Price" | "QR.CA", 32 px logo, nav item "Pricing" |
| Hero headline | "The first 🇨🇦 Canadian-native QR Code Generator" | "Create, customize and track QR codes" (no flag, no "Canadian") |
| Hero subtitle | "Generate branded QR codes in seconds, share them…" | "Add your content, customize the design, and download. Track every scan when you need to." |
| Type tabs | Website · vCard · Links Page · Text · **Contact** · Restaurant menu · More | Website · vCard · **Multi-link page** · **Plain text** · **App store link** · Restaurant menu · More |
| Tab icons | Filled icons | Outline icons (globe, ID card, link, note, storefront, fork-knife, chevron for More) |
| Website accent | Blue `#00A7F5` | Lavender `#9F87F7` (only *Website* is drawn; other tabs keep their own colours) |
| Step 2 tabs | Active underline always blue | Active underline in the Website lavender |
| "+10 more" ribbon | Amber | Pink |
| Step 3 panel | Tinted with the tab colour | Same idea; for Website it's lavender |
| Tracking toggle | "Track your scans" + pink **Premium** badge, left-aligned | "Track analytics", no badge, centred under the code |
| Formats line | "Available in SVG, PNG, JPG" | "Available in SVG, PNG, JPG, PDF, EPS" |

## Root causes

- Figma change: the concept was redrawn after the client's feedback of 2026-10-06 (no "Canadian" in copy, keep it simple like Uniqode / QRCG, see [client-feedback.md](../../design/client-feedback.md)).
- The type tabs now follow the SRS v2 reference list more closely (QR-U-07): *Multi-link page*, *Plain text* and *App store link* are v2 names, and the old *Contact* tab (a `tel:` phone number, PG-05) is gone.
- The prototype was built from the older Mockups frame and was never re-synced.

## Agreed decisions

1. Figma `6119:6` is the visual source for the home page. Exact sizes and colours come from `get_design_context` on that node, not from the screenshot.
2. Tabs become: Website, vCard, Multi-link page, Plain text, App store link, Restaurant menu, More. The *Contact* (`tel:`) tab and its form are removed.
3. **App store link** gets the v2 form (*[User] - Code creation - step 2*): App Store URL, Google Play URL, Fallback URL. On the home page it stays a demo (0002): the preview encodes the Fallback URL, or the first filled store link if it's empty. A real dynamic code would encode our redirect link, which picks the store by device. Logged as a gap. (Oleg left this to Claude.)
4. Each type keeps its own accent colour, which still switches with the tab (Oleg). **Website becomes lavender `#9F87F7`.** That's Multi-link page's current colour, so the two swap: Multi-link page takes Website's old blue `#00A7F5`. *App store link* inherits the old Contact green `#00BA7F`. The Step 2 tab underline follows the active tab's accent too (Figma draws it lavender on Website).
5. "Track analytics" keeps today's behaviour (opens the sign-up pop-up), just without the Premium badge.
6. The Figma formats line has a stray space ("JPG ,"). The prototype uses "SVG, PNG, JPG, PDF, EPS".
7. Copy in the sign-up pop-up that says "Canadian" or "Premium" is shortened to follow the client principles (no "Canadian", short copy). This isn't in the Figma frame but the same feedback applies.
8. Static *Contact (vCard)* has no home-page tab for now; it belongs under *More*, which stays non-functional (PG-03, PG-11). (Oleg left this to Claude.)
9. Figma only shows desktop. On phones (375 px) the tab strip scrolls sideways inside itself (as today), and the panels stack.

## Implementation stages

Each stage is one commit, and each must leave `npm run lint` and `npm run build` green. The uncommitted dev-only proto harness in `src/main.tsx` (tasks 02–06) is not part of this task and stays out of these commits.

1. **Stage 1: Header and hero.** Brand name, logo size, "Pricing"; new headline and subtitle, Canada flag removed from the hero. (files: `Header.tsx`, `HeroHeadline.tsx`)
2. **Stage 2: Type tabs.** New labels and order, outline icons, lavender active state; rename the `contact` type to `appstore` in `ContentTabType`. (files: `ContentTypeNav.tsx`, `icons.tsx`, `utils/theme.ts`, `App.tsx`)
3. **Stage 3: App store link form.** Three URL fields replace the phone field; a pure encoder picks the payload. (files: `ContentForm.tsx`, new `utils/appStore.ts`, `App.tsx`)
4. **Stage 4: Accent colours.** Website lavender, Multi-link page blue; Step 2 tab underline follows the accent; pink "+10 more" ribbon. (files: `utils/theme.ts`, `ContentForm.tsx`, `ShapeTiles.tsx`, `DownloadPanel.tsx`)
5. **Stage 5: Download panel and pop-up copy.** "Track analytics" centred, no Premium badge; formats line; pop-up copy without "Canadian" / "Premium". (files: `DownloadPanel.tsx`, `App.tsx`)
6. **Stage 6: Close the docs.** `traceability.md` (F-01 → `6119:6`), `prototype-gaps.md` (PG-03, PG-05, PG-07, PG-08 updated; new gap for the App store link payload), `docs/design/README.md` (Mockups node map gets *Concept v.2*), brief set to Done.

After Stage 6 I'll ask before pushing; the push is what updates the deployed prototype.

## Out of scope

- Making the *More* tab, Logo, Frame and Colours tabs work (PG-11).
- PDF upload for Restaurant menu (PG-01), disabling Download when empty (PG-02), static / dynamic labels (PG-04).
- Marketing sections below the generator (How it works, Features, Pricing, FAQ).
- The dev-only proto routes under `src/proto/`.

## Acceptance criteria

- [x] At 1440 px the home page matches `6119:6` side by side: header, hero copy, tab labels / icons / active state, Step 1–3 panels, colours and copy.
- [x] No "Canadian" anywhere on the home page or in the sign-up pop-up.
- [x] *App store link* shows App Store URL, Google Play URL and Fallback URL, and the preview code changes as they're typed.
- [x] Website is lavender `#9F87F7`; switching tabs still switches the accent, and no two tabs share a colour.
- [x] "Track analytics" opens the sign-up pop-up; there's no Premium badge.
- [x] Phone (375 px, checked in a 375 px frame) and desktop (1440 px) checked, with no horizontal scroll
- [x] `npm run lint` and `npm run build` pass

## Open questions

Answered by Oleg on 2026-10-06:

- Accent colour: keep switching colours per type; make Website lavender (decision 4).
- App store link preview: Claude's call (decision 3).
- Pop-up copy: fix it here (decision 7).
- Static Contact (vCard): Claude's call (decision 8).

## Noticed, not changed

Things that differ from `6119:6` but were already like this and are outside this brief:

- The selected shape tile shows a "SQUARE" caption; Figma has none.
- The shape grid has 8 shapes plus *Unlock more*; Figma has 9 plus *Unlock more*.
- On *Multi-link page*, one link input is slightly wider than its row at 375 px (the page itself doesn't scroll sideways).
- The sign-up buttons still use `alert()` (PG-12).

## Progress log

| Date | Stage | Commit | Note |
| --- | --- | --- | --- |
| 2026-10-06 | Brief | — | Drafted from Figma `6119:6` |
| 2026-10-06 | Brief | — | Confirmed by Oleg with answers to the open questions |
| 2026-10-06 | Brief | `5a7c5ab` | Brief committed |
| 2026-10-06 | 1 | `c94a834` | Header and hero |
| 2026-10-06 | 2 | `c58be85` | Type tabs, outline icons from Figma |
| 2026-10-06 | 3 | `ba115ed` | App store link form and `utils/appStore.ts`; Contact (vCard) listed under More |
| 2026-10-06 | 4 | `6784e1f` | Website lavender, swapped with Multi-link page; More is slate |
| 2026-10-06 | 5 | `1b1a7a6` | Track analytics, formats, pop-up copy; also the page title and the flag in the pop-up |
| 2026-10-06 | 6 | (this commit) | Traceability, gaps (PG-16 added), design node map; brief Done |
