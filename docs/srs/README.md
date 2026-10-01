# QR.CA — SRS working layer

This folder connects the BA requirements to the prototype in this repo.

- **`upstream/`** holds the BA documents, copied word for word. They say **what** the product must do. Never edit them; see [`upstream/README.md`](./upstream/README.md).
- **Everything else here is ours.** It records which parts we prototype, how each requirement maps to screens and code, where the prototype and the SRS disagree, and the task briefs that drive every change.

If an upstream document and a working document disagree, upstream wins. Record the difference in [`prototype-gaps.md`](./prototype-gaps.md) and don't change the requirement.

## Documents

| File | What it answers |
| --- | --- |
| [`domain-model.md`](./domain-model.md) | The rules the prototype's mock data must follow: types, statuses, account states, precedence |
| [`prototype-scope.md`](./prototype-scope.md) | Which stories and flows this prototype covers, and what it fakes |
| [`traceability.md`](./traceability.md) | For each feature: SRS story → Figma node → prototype code → status |
| [`prototype-gaps.md`](./prototype-gaps.md) | Where the current prototype contradicts SRS v1.0 or is missing something it needs |
| [`tasks/`](./tasks/) | One brief per change. **No multi-file change starts without a confirmed brief** |
| [`../decisions/`](../decisions/) | Why we chose what we chose, including the reason for any change in requirements |
| [`../design/`](../design/) | Figma files, node map, design tokens |

## Pipeline

1. **Brief.** Copy [`tasks/_template.md`](./tasks/_template.md) to `tasks/NN-short-name.md`. Fill it in and trace it to F-, QR-U- and Figma IDs. Add it to the index below with status `Draft`.
2. **Confirm.** Oleg reads it and confirms. Status becomes `Confirmed`. Nothing is built before this.
3. **Build in stages.** Make one commit per stage. Every commit message names the brief (`Task: docs/srs/tasks/NN-….md`). Keep the progress log in the brief up to date.
4. **Verify.** Run `npm run lint` and `npm run build`. Check the acceptance criteria by hand in the browser at phone and desktop widths.
5. **Close.** Status becomes `Done`. Update `traceability.md` and `prototype-gaps.md`.
6. **If a requirement changes on the way**, add a record in `docs/decisions/`. If the change affects upstream, flag it to Christian instead of editing the copy.

Never push without asking.

## Task index

| # | Task | Traces to | Status |
| --- | --- | --- | --- |
| 01 | [Context layer setup](./tasks/01-context-layer-setup.md) | — | Done |

Prototype tasks 01–15 from before this pipeline existed are in [`../archive/prd/`](../archive/prd/README.md), all completed.
