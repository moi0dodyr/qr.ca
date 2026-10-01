# Task 01 — Context layer setup

| | |
| --- | --- |
| **Status** | In progress |
| **Created** | 2026-10-01 |
| **Confirmed by** | Oleg, 2026-10-01 (in chat: prototype for now · upstream copy + our working layer · repo is private) |
| **Traces to** | — (process task) |

## Problem

The repo had no professional context layer. There was no `CLAUDE.md`, the README was the default Vite one, and planning lived in ad-hoc PRD files that weren't linked to the BA's SRS v1.0. Work could drift from the agreed requirements unnoticed.

## Agreed decisions

1. This repo is a **front-end prototype for now** ([0001](../../decisions/0001-prototype-repo-and-upstream-docs.md)).
2. The BA documents are kept as **read-only upstream copies**, with our working layer beside them.
3. The repo is **private to Oleg**, so the internal BA documents can be committed.
4. The old `docs/prd/` tasks 01–15 are moved to `docs/archive/prd/`.
5. Every future change follows the brief → confirm → staged-commits pipeline in [`../README.md`](../README.md).

## Implementation stages

1. Archive `docs/prd/` → `docs/archive/prd/`.
2. Add the upstream copies plus a manifest (`docs/srs/upstream/`).
3. Add the SRS working layer: index, prototype scope, traceability, gaps, task template and this brief. Add the decisions log and the design map.
4. Add `CLAUDE.md` and replace the Vite template `README.md`.
5. Add SRS Parts 2b and 2c (✅ done), then Features 4a–4c and 5 (*blocked*). Extend traceability, gaps and scope, and add `domain-model.md`.
6. *(Blocked)* Add the Figma wireflows link. Verify the node map against the file and add the flows FL-01…FL-13 to the design map.

## Out of scope

- Any code change in `src/`.
- Choosing the next prototype task. That comes after stage 6, as its own brief.

## Acceptance criteria

- [ ] `CLAUDE.md` names the stack, commands, conventions, doc map and pipeline, and stays short
- [ ] Every upstream file has a do-not-edit header and an entry in the manifest
- [x] Every SRS story (QR-U-01…44, QR-A-01…06) appears in `traceability.md`
- [ ] Every known contradiction between the prototype and the SRS is listed in `prototype-gaps.md`
- [ ] Stages 5–6 are done once the missing documents and the Figma link arrive

## Open questions

- The Figma wireflows file URL (only node IDs are known so far).
- Which subset of types the **home page** offers (G-03), and whether its vCard is static or dynamic (G-06).

## Progress log

| Date | Stage | Commit | Note |
| --- | --- | --- | --- |
| 2026-10-01 | 1 | `1500f3d` | PRD tasks archived |
| 2026-10-01 | 2 | `90ec7bf` | SRS Part 1 and 2a, Features §1–3 and §6–7. The rest is pending |
| 2026-10-01 | 3 | `f3bc3d8` | Working layer, decision 0001, design map |
| 2026-10-01 | 4 | `7ff293e` | CLAUDE.md, README |
| 2026-10-01 | 5a | — | SRS Parts 2b and 2c added; traceability M3–M8, gaps G-14 and G-15, scope E5–E9, domain-model.md |
