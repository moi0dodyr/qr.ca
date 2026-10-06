# 0005 — SRS v2.0 and Product Backlog v2 are the source of truth

**Date:** 2026-10-06 · **Status:** Accepted · **Decided by:** Oleg · **Partly supersedes:** [0001](0001-prototype-repo-and-upstream-docs.md) (which upstream version wins)

## Context

On 2026-10-05 the BA published SRS v2.0 and Product Backlog v2 in Notion. The scope and decisions are the same as v1.0, reorganised by role and by the order people meet the product. Acceptance criteria now live only on the Backlog feature pages. Every story still lists its v1 IDs in a traceability block. The real changes are in [`v2-review-2026-10-05.md`](../srs/v2-review-2026-10-05.md). Until today the copy sat in `_inbox/`, not adopted.

## Decision

1. SRS v2.0 and Product Backlog v2 are the **source of truth**. They're copied word for word into [`docs/srs/upstream/v2.0_2026-10-05/`](../srs/upstream/v2.0_2026-10-05/) and are read-only, like v1.0.
2. Precedence is now: **SRS v2.0 / Backlog v2 > SRS v1.0 > Figma Wireflows > Figma Mockups > current code.** v1.0 stays in `upstream/` for history and for the v1 IDs.
3. v2 stories have no IDs of their own, so we keep citing v1 IDs (QR-U-, QR-A-, F-, DS-, A-) from each story's traceability block, plus the v2 page and story title when the wording matters.
4. Inside v2, the Archive story ([User] - Code management - move a code to Archive) says that without a plan **Download in the Archive opens the upgrade window**. The "work without an active plan" story allows downloading a paused code. Oleg sides with the Archive story for the Archive folder. Figma changes to match; Download elsewhere keeps the "not available" note.

## Consequences

- `_inbox/` is gone. `upstream/README.md` lists v2.0 first.
- `CLAUDE.md`, `domain-model.md`, the audit files and the review file point to v2.0.
- Answers from the same review: Contact and vCard merge ([0006](0006-static-contact-is-vcard.md)); time-based redirect is its own dynamic type, Oleg's call as v2 says (FD-01, FD-06 rewritten). Removing that type from V1 is up for discussion on 2026-10-06.
- Change requests against v2: **DR-01** and **DR-05** stay, with the v2 wording. **DR-02** is withdrawn (v2 locks Edit without a plan). **DR-04** is withdrawn (0006). **DR-03** stays withdrawn, but Figma's Archive *Download* (audit #79) now has to open the upgrade window: new open item #102.
- `prototype-gaps.md` and `traceability.md` still cite v1 wording. Re-check them against v2 when each feature is next touched.
