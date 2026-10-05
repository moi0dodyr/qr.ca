# 0003 — Static *Contact* and *vCard* are two separate types

**Date:** 2026-10-05 · **Status:** Accepted · **Decided by:** Oleg

## Context

The SRS leaves the difference between *vCard* and *Contact* open, "to confirm with Oleg" (QR-U-07, SRS-Q-03, Q-W6). Its static list names only *vCard*. Figma has both: the type note `8193:23287` and the Landing tabs `8193:15352`. The audit flagged this as #35, on the assumption that the two were one type.

## Decision

1. Keep both as **static** types:
   - **vCard** is a full contact card: name, occupation, company, several phone numbers, email, website, address and possibly a photo. It is also dynamic, with a hosted page (A-1).
   - **Contact** is a basic contact: name, a phone number and an email. It is static only.
2. Proposed, to confirm at the design stage: Contact is encoded as a short vCard 3.0 with only those fields, so phones save it the same way. Fewer fields keep the printed code less dense and easier to scan.
3. Q-W6 is answered for vCard vs Contact. Whether *Links Page* exists as a static type is still open.

## Consequences

- Upstream is read-only, so this goes to the SRS owner as change request **DR-04** ([audit](../design/figma-audit-2026-10-01.md#requests-to-change-the-docs)). Until it's recorded upstream, QR-U-07 still lists vCard only (A-15). This record is the prototype's basis for showing both.
- `domain-model.md` lists Contact as its own static type.
- Audit #35 changes from "remove Contact" to "add Contact to the Step 1 static list".
- PG-05: the home page's *Contact* tab (a `tel:` phone number) should become a basic contact card. It stays deferred under [0002](0002-home-page-demo-only-scanner-pages-later.md).
