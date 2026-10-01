# Upstream BA documents (read-only copies)

These files are copies of the Business Analysis documents. **Do not edit them.** The source of truth is Christian Kapuzo's knowledge base in Notion. When Christian publishes a new version, add the new files alongside the old ones under a new date, update this manifest, and log what changed in `docs/decisions/`.

The documents are **internal**: nothing in them goes to the client without Christian's sign-off. This repo is private to Oleg.

## Manifest

| File | Upstream document | Version | Received | Complete? |
| --- | --- | --- | --- | --- |
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
