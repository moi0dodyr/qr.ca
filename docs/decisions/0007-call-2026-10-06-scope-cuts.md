# 0007 — Call of 2026-10-06: V1 scope cuts and settled questions

**Date:** 2026-10-06 · **Status:** Accepted · **Decided by:** the project call of 2026-10-06, reported by Oleg · **Affects:** [0004](0004-account-banners-on-dashboard.md), [0005](0005-adopt-srs-v2.md)

## Context

The v2 audit left several items open until the call: whether *Review* and *Time-based redirect* stay in V1 (FD-02, FD-06), the *Integrations* screen (#109, FD-07), the name at sign-up (#105), and where account-state banners go (DR-05). The call settled these and cut a few more features. The BA will remove the cut features from SRS v2 and the Backlog. Until the upstream copy is updated, this record wins over it for the items below.

## Decision

1. **Review and Time-based redirect are removed** from V1 (QR-U-44, QR-U-43, F-61, F-60). V1 dynamic types: Website, PDF / File, Restaurant menu, Multi-link page, vCard, App store link. Static types are unchanged.
2. The **GTM / Google Tag Manager** screen is renamed **Integrations**. It has three fields: **Google Tag Manager ID, Google Analytics ID and Meta Pixel ID** (QR-U-41).
3. **Sign-up doesn't ask for a name** (Email, Password, Confirm password, Terms, as v2 QR-U-03). Until the user adds a name in Account Settings, the app shows their **email** where the name would be (e.g. the account menu).
4. **Changing the email is removed** from Account Settings (QR-U-36 *change the email*). So is the *waiting for email confirmation* banner that came with it.
5. The **paused page has no custom message**. Scanners see only the standard "not available right now" page (v2 *Code not available*; the "owner's message" was a nice-to-have).
6. **Static codes can't be edited or duplicated.** Edit and Duplicate aren't offered for them (settles audit #83; v2 allowed editing the name, folder and tags).
7. **API: one key at a time.** *Create API key* is available only while there's no key. Once created, it can be revoked, and only then can a new one be created. The API key has **no usage limit of its own**. It's bound by the account plan's limits, if any (QR-U-40).
8. The **not healthy label is removed** (QR-U-12, DS-05: a code saved or downloaded after a failed scan check no longer carries a label). The scannability check and *Continue anyway* stay.
9. **Account-state banners go on the Dashboard.** Only the **trial banner** stays in the sidebar ([0004](0004-account-banners-on-dashboard.md), now agreed; the DR-05 banner part).

## Consequences

- Audit: FD-02, FD-06 / #33, #32, #83 and the usage-limit half of #75 close. #105, #109 and FD-07 become Figma changes. New Figma items #119–#122 ([open items](../design/figma-audit-open-items.md)).
- DR-05: the banner part is agreed. The other part (no *Upgrade* for subscribed owners, #28) wasn't discussed and stays to send.
- `domain-model.md`, `traceability.md`, `prototype-scope.md`, `prototype-gaps.md` (PG-03) and task brief 02 follow the shorter type list and the cuts above.
- **Open question for the BA:** *Delete account* asks the user to type their full name (QR-U-37). With the name now optional, the confirmation needs another value, e.g. the email.
