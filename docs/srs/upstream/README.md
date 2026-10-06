# Upstream BA documents (read-only copies)

These files are copies of the Business Analysis documents. **Do not edit them.**

**Source of truth: SRS v2.0 and Product Backlog v2** in [`v2.0_2026-10-05/`](./v2.0_2026-10-05/) ([decision 0005](../../decisions/0005-adopt-srs-v2.md)). The v1.0 files below stay for history and for the v1 IDs (QR-U-, QR-A-, F-, DS-, A-) that every v2 story still lists in its traceability block. Where v2.0 and v1.0 disagree, v2.0 wins. The source of truth is Christian Kapuzo's knowledge base in Notion. When Christian publishes a new version, add the new files alongside the old ones under a new date, update this manifest, and log what changed in `docs/decisions/`.

The documents are **internal**: nothing in them goes to the client without Christian's sign-off. This repo is private to Oleg.

## Manifest

| File | Upstream document | Version | Received | Complete? |
| --- | --- | --- | --- | --- |
| [`v2.0_2026-10-05/QR-CA-SRS-v2-0-…`](./v2.0_2026-10-05/QR-CA-SRS-v2-0-by-role-and-user-journey.md), [`10-…`](./v2.0_2026-10-05/10-Functional-requirements-by-role-and-user-journey.md), [`11-16-…`](./v2.0_2026-10-05/11-16-System-requirements-scope-risks-open-questions-glossary.md) | **SRS v2.0** (by role and user journey): main page, §10 functional requirements, §11–16 system requirements, scope, risks, open questions, glossary | 2.0 · 2026-10-05 (internal draft for review) | 2026-10-05 | ✅ |
| [`v2.0_2026-10-05/User-…`, `Admin-…`, `System-…`, `QR-CA-business-…`](./v2.0_2026-10-05/) (30 files) | **Product Backlog v2**: one file per feature page, with acceptance criteria and a v1-ID traceability block per story | 2.0 · 2026-10-05 | 2026-10-05 | ✅ |
| [`srs_v1.0_2026-09-30.md`](./srs_v1.0_2026-09-30.md) | SRS v1.0, Part 1 (business context) and the Part 2 intro | 1.0 · 2026-09-30 | 2026-10-01 | ✅ |
| [`srs_v1.0_part-2a_epics-E0-E4.md`](./srs_v1.0_part-2a_epics-E0-E4.md) | SRS v1.0, Part 2a: epics E0–E4 (QR-U-01…27, QR-U-42) | 1.0 · 2026-09-30 | 2026-10-01 | ✅ |
| [`srs_v1.0_part-2b_epics-E5-E9-admin.md`](./srs_v1.0_part-2b_epics-E5-E9-admin.md) | SRS v1.0, Part 2b: epics E5–E9 and the admin epics (QR-U-28…44, QR-A-01…06) | 1.0 · 2026-09-30 | 2026-10-01 | ✅ |
| [`srs_v1.0_part-2c_system-requirements.md`](./srs_v1.0_part-2c_system-requirements.md) | SRS v1.0, Part 2c: §12–§17 (system requirements, scope, integrations, risks, open questions, assumptions, glossary) | 1.0 · 2026-09-30 | 2026-10-01 | ✅ |
| [`features-and-flows_v1.0_2026-09-30.md`](./features-and-flows_v1.0_2026-09-30.md) | Features and User Flows v1.0: §1–3 and §6–7 (the §4/§5 headings point to the subpages below) | 1.0 · 2026-09-30 | 2026-10-01 | ✅ |
| [`features-and-flows_v1.0_4a_M1-M2.md`](./features-and-flows_v1.0_4a_M1-M2.md) | §4a: features of M1 Making codes and M2 Managing codes | 1.0 · 2026-09-30 | 2026-10-01 | ✅ |
| [`features-and-flows_v1.0_4b_M3-M5.md`](./features-and-flows_v1.0_4b_M3-M5.md) | §4b: M3 Scanning, M4 Statistics, M5 Account, trial and billing | 1.0 · 2026-09-30 | 2026-10-01 | ✅ |
| [`features-and-flows_v1.0_4c_M6-M8.md`](./features-and-flows_v1.0_4c_M6-M8.md) | §4c: M6 Integrations, M7 Team tools, M8 Cross-product | 1.0 · 2026-09-30 | 2026-10-01 | ✅ |
| [`features-and-flows_v1.0_5_user-flows.md`](./features-and-flows_v1.0_5_user-flows.md) | §5: user flows FL-01…FL-13 | 1.0 · 2026-09-30 | 2026-10-01 | ✅ |

## ID vocabulary (as used upstream)

| Prefix | Meaning | Defined in |
| --- | --- | --- |
| `F-NN` | Feature | Features and Flows §1 |
| `FL-NN` | User flow | Features and Flows §5 |
| `QR-U-NN` / `QR-A-NN` | User / admin story | SRS Part 2 |
| `SRS-Q-NN` | Open question | SRS Part 2c §16 |
| `SR-NN` | SRS-level risk | SRS Part 2c §15 |
| `R-NN` | Risk in the KB's full register | KB `risk-register.md` (not in this repo) |
| `DS-NN` | Design-sync decision, 2026-09-30 | SRS, Features §2 |
| `A-NN` | Christian's decision, 2026-09-30 | Features §2 |
| `B-N` / `C-N` | Estimate assumption / estimate risk | Features §3 |
| `BP-NN` / `G-NN` | Business problem / goal | KB (not in this repo). **Not** our prototype gaps `G-NN` in `../prototype-gaps.md` |
| `W-N` / `Q-W-N` | Wireflow contradiction / wireflow question | SRS (wireflows review) |
| `C-N` (client) | Client's Notion comments, 2026-09-12 | SRS sources |
| `GEN-`, `DST-`, `DYN-`, `ACC-`, `BIL-`, `ANL-`, `LOC-`, `TRS-`, `PLT-`, `EXP-`, `ADM-` | KB scope-map items | `scope-map.md` (KB, not in this repo) |
| `BRL-NN` | Business rule | `business-rules.md` (KB, not in this repo) |

Note that `C-N` means two different things upstream: client comments in the SRS, and estimate risks in the Features document §3.2. Check which document you're reading.

## Notes on the v2.0 copy

Copied from Notion on 2026-10-05 (BA, Christian Kapuzo):
- SRS v2.0: https://app.notion.com/p/phenomenonstudio/QR-CA-SRS-v2-0-by-role-and-user-journey-3f09b791c6af818dbafdf13bb210d37e
- Product Backlog v2: https://app.notion.com/p/phenomenonstudio/QR-CA-Product-Backlog-v2-by-role-and-user-journey-3f09b791c6af8173be52feba5c30d064

Not copied, summarised here instead:
- **Backlog index page:** only the list of the 30 feature pages, grouped by role.
- **Appendix A. Traceability:** says traceability lives in a collapsed block at the end of each story, and links to SRS v1.0.
- **"Backlog — all stories (table)":** 93 stories, the same as on the feature pages (User 60, Admin 16, System 15, QR.CA business 2). All are *Draft*. 91 are Must and in V1. 2 are Could / to confirm: #4 template gallery and #46 live map of scans.

v2 stories have no IDs of their own. Cite them by page and story title, for example *[User] - Code creation - step 1*, plus the v1 ID from its traceability block. What changed from v1.0 is in [`../v2-review-2026-10-05.md`](../v2-review-2026-10-05.md).
