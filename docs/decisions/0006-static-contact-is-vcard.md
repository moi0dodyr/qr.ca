# 0006 — Static *Contact* is the vCard: one "Contact (vCard)" type

**Date:** 2026-10-06 · **Status:** Accepted · **Decided by:** Oleg · **Supersedes:** [0003](0003-static-contact-and-vcard-both-kept.md)

## Context

[0003](0003-static-contact-and-vcard-both-kept.md) kept two static types: a full *vCard* and a basic *Contact* (name, phone, email), and sent it to the BA as DR-04. SRS v2.0 ([User] - Code creation - step 1 and step 2) answers the other way: the static list has one **Contact (vCard)** with the same fields as the dynamic vCard, "encoded in the pattern; long content makes the code denser". v2.0 is now the source of truth ([0005](0005-adopt-srs-v2.md)).

## Decision

Follow v2.0. There is **one static contact type, "Contact (vCard)"**, with the vCard fields (first name required, the rest optional). The dynamic **vCard** keeps its hosted page. There's no separate basic Contact.

## Consequences

- 0003 is superseded. DR-04 is withdrawn.
- `domain-model.md` lists static *Contact (vCard)* and dynamic *vCard*.
- Figma: the static *Contact* `8256:11645` and static *vCard* in the Step 1 wireframe become one *Contact (vCard)* tile (FD-01).
- PG-05: the home page's *Contact* tab (a `tel:` phone number) should become a vCard contact card. It stays deferred under [0002](0002-home-page-demo-only-scanner-pages-later.md).
