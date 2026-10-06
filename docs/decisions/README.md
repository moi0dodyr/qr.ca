# Decision records

These are short records of choices made **in this repo**: prototype scope, approach, and any departure from upstream. Upstream product decisions (DS-NN, A-NN) live in the BA documents. Don't copy them here; link to them.

Name files `NNNN-short-name.md`. Each record has: date, status (Accepted / Superseded by NNNN), context, decision, consequences. Never rewrite an accepted record. Supersede it with a new one.

| # | Decision | Date | Status |
| --- | --- | --- | --- |
| [0001](./0001-prototype-repo-and-upstream-docs.md) | The repo is a front-end prototype; BA documents are kept as read-only upstream copies | 2026-10-01 | Accepted |
| [0002](./0002-home-page-demo-only-scanner-pages-later.md) | The home page is demo-only; scanner pages wait for a later design stage | 2026-10-01 | Accepted |
| [0003](./0003-static-contact-and-vcard-both-kept.md) | Static *Contact* and *vCard* are two separate types | 2026-10-05 | Superseded by [0006](./0006-static-contact-is-vcard.md) |
| [0004](./0004-account-banners-on-dashboard.md) | Account-state banners sit on the Dashboard; only the trial banner stays in the sidebar | 2026-10-05 | Accepted |
| [0005](./0005-adopt-srs-v2.md) | SRS v2.0 and Product Backlog v2 are the source of truth | 2026-10-06 | Accepted |
| [0006](./0006-static-contact-is-vcard.md) | Static *Contact* is the vCard: one "Contact (vCard)" type | 2026-10-06 | Accepted |
| [0007](./0007-call-2026-10-06-scope-cuts.md) | Call of 2026-10-06: Review, Time-based redirect, email change, paused-page message and *not healthy* cut; no name at sign-up; Integrations; one API key; static codes not editable | 2026-10-06 | Accepted |
