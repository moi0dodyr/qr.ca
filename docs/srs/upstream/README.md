# Upstream BA documents (read-only copies)

These files are copies of the Business Analysis documents. **Do not edit them.** The source of truth is Christian Kapuzo's knowledge base in Notion. When Christian publishes a new version, add the new files alongside the old ones under a new date, update this manifest, and log what changed in `docs/decisions/`.

The documents are **internal**: nothing in them goes to the client without Christian's sign-off. This repo is private to Oleg.

## Manifest

| File | Upstream document | Version | Received | Complete? |
| --- | --- | --- | --- | --- |
| [`srs_v1.0_2026-09-30.md`](./srs_v1.0_2026-09-30.md) | SRS v1.0, Part 1 (business context) and the Part 2 intro | 1.0 · 2026-09-30 | 2026-10-01 | ✅ |
| [`srs_v1.0_part-2a_epics-E0-E4.md`](./srs_v1.0_part-2a_epics-E0-E4.md) | SRS v1.0, Part 2a: epics E0–E4 (QR-U-01…27, QR-U-42) | 1.0 · 2026-09-30 | 2026-10-01 | ✅ |
| `srs_v1.0_part-2b_epics-E5-E9-admin.md` | SRS v1.0, Part 2b: epics E5–E9 and the admin epics (QR-U-28…44, QR-A-01…06) | 1.0 | — | ⏳ **not received** |
| `srs_v1.0_part-2c_system-requirements.md` | SRS v1.0, Part 2c: §11–§16a (system requirements, scope, integrations, risks, open questions, assumptions, glossary) | 1.0 | — | ⏳ **not received** |
| [`features-and-flows_v1.0_2026-09-30.md`](./features-and-flows_v1.0_2026-09-30.md) | Features and User Flows v1.0: §1–3 and §6–7 | 1.0 · 2026-09-30 | 2026-10-01 | ◐ the subpages are missing |
| `features-and-flows_v1.0_4a-4c_features.md` | Feature details for modules M1–M8 (subpages 4a, 4b, 4c) | 1.0 | — | ⏳ **not received** |
| `features-and-flows_v1.0_5_user-flows.md` | User flows FL-01…FL-13 (subpage 5) | 1.0 | — | ⏳ **not received** |

## ID vocabulary (as used upstream)

| Prefix | Meaning | Defined in |
| --- | --- | --- |
| `F-NN` | Feature | Features and Flows §1 |
| `FL-NN` | User flow | Features and Flows §5 |
| `QR-U-NN` / `QR-A-NN` | User / admin story | SRS Part 2 |
| `SRS-Q-NN` | Open question | SRS §16 |
| `DS-NN` | Design-sync decision, 2026-09-30 | SRS, Features §2 |
| `A-NN` | Christian's decision, 2026-09-30 | Features §2 |
| `B-N` / `C-N` | Estimate assumption / estimate risk | Features §3 |
| `W-N` / `Q-W-N` | Wireflow contradiction / wireflow question | SRS (wireflows review) |
| `C-N` (client) | Client's Notion comments, 2026-09-12 | SRS sources |
| `GEN-`, `DST-`, `DYN-`, `ACC-`, `BIL-`, `ANL-`, `LOC-`, `TRS-`, `PLT-`, `EXP-` | KB scope-map items | `scope-map.md` (KB, not in this repo) |
| `BRL-NN` | Business rule | `business-rules.md` (KB, not in this repo) |

Note that `C-N` means two different things upstream: client comments in the SRS, and estimate risks in the Features document §3.2. Check which document you're reading.
