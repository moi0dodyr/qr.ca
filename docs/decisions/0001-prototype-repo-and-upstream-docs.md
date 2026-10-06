# 0001 — The repo is a front-end prototype; BA documents are kept as read-only upstream copies

**Date:** 2026-10-01 · **Status:** Accepted (which upstream version wins: see [0005](0005-adopt-srs-v2.md)) · **Decided by:** Oleg

## Context

SRS v1.0 describes a full SaaS product: a redirect service, accounts, billing, email, an API and an admin console. Its architecture belongs to Denys Melnyk. This repo started as a Vite + React prototype of the home-page generator. The BA documents are regenerated from Christian's KB, so rewritten copies would drift from them.

## Decision

1. For now, `qr.ca` is a **front-end-only clickable prototype**. Backend behaviour is faked, and the fakes are clearly labelled.
2. The BA documents are kept **word for word** in `docs/srs/upstream/` and never edited. Our own documents (scope, traceability, gaps, tasks, decisions) sit beside them.
3. The repo is **private to Oleg**, so the internal documents may be committed.
4. The pre-pipeline PRD tasks 01–15 are archived in `docs/archive/prd/`.

## Consequences

- Prototype code is not production code. Don't build backend abstractions here.
- When upstream releases a new version, add new files, update the manifest, and re-check `prototype-gaps.md`.
- If the repo is ever shared, or turns into the production app, revisit this record. `upstream/` would then need to be removed or ignored.
