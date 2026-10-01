# QR.CA — prototype

A front-end-only clickable prototype of QR.CA, a Canadian dynamic-QR-code SaaS. **Not the production app.** There is no backend: auth, the redirect service, billing, email and statistics are faked. Architecture belongs to Denys Melnyk and is decided elsewhere ([decision 0001](docs/decisions/0001-prototype-repo-and-upstream-docs.md)).

Owner: Oleg S (designer). Explain things in plain language and keep the jargon down.

## Commands

```
npm run dev      # Vite dev server
npm run lint     # oxlint
npm run build    # tsc -b && vite build (this is also the typecheck)
```

There's no test runner. Verify in the browser at **375 px and 1440 px** with no horizontal scroll.

## Stack and conventions

- React 19 + TypeScript (strict) + Vite 8, Tailwind CSS v4 through `@tailwindcss/vite` (tokens in `src/index.css` `@theme`).
- QR rendering: `qr-code-styling` (`src/components/QrCodeView.tsx`). Icons: inline SVG in `components/icons.tsx` and `platformIcons.tsx`, plus `lucide-react`.
- Payload encoders are pure functions in `src/utils/` (`vcard.ts` follows vCard 3.0 / RFC 2426; `links.ts` handles the multi-link model). Keep encoders pure and UI-free.
- State lives in `App.tsx`. The QR payload is derived in one place (`activePayload`).
- Match the existing style: functional components, `data-name="…"` attributes that mirror Figma layer names, Tailwind with exact Figma pixel values (`gap-[20px]`).
- Anything that would come from a server is mocked and **visibly labelled as mock**.
- Don't use `alert()`, `confirm()` or `prompt()` in new code. Use in-page UI.

## Requirements: read before building

- **Upstream (read-only):** `docs/srs/upstream/` holds BA SRS v1.0 and Features and Flows v1.0, word for word. **Never edit them.** They are internal: don't paste them into anything external.
- **Our layer:** `docs/srs/` contains `prototype-scope.md`, `traceability.md` (story → Figma → code), `prototype-gaps.md` and `domain-model.md` (the types, statuses and account states that mock data must respect).
- **Precedence:** upstream SRS > Figma Wireflows > Figma Mockups > current code. If they conflict, log it in `prototype-gaps.md`. Never resolve it silently.
- The reference type list is SRS QR-U-07 (A-15). Use upstream IDs (F-, QR-U-, DS-, A-, SRS-Q-) in briefs and commits.
- Figma: see `docs/design/README.md`. Use the Figma MCP for node IDs.

## Pipeline (mandatory)

1. Every multi-file change starts as a brief in `docs/srs/tasks/NN-name.md` (copy `_template.md`), listed in `docs/srs/README.md`. **Wait for Oleg to confirm it** before writing code.
2. Make one commit per stage. Each commit message ends with `Task: docs/srs/tasks/NN-….md`. Keep the brief's progress log up to date.
3. Lint and build must pass at every commit.
4. When done, update `traceability.md` and `prototype-gaps.md`, and set the brief to `Done`.
5. If a requirement or approach changes, add a record in `docs/decisions/`.
6. **Never push without asking.**

Trivial single-file fixes (a typo, a copy tweak Oleg asked for directly) don't need a brief.
