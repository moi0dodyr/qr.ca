# Domain model for the prototype

These are the rules the prototype's **mock data and screen states** must follow. The list is condensed from SRS v2.0 / Product Backlog v2 ([0005](../decisions/0005-adopt-srs-v2.md)), mainly *[System] - Code states*, *[User] - Code creation* and *[User] - Plans and billing*, with v1 IDs in brackets. This is **not** an architecture or a database schema; those belong to Denys. If anything here disagrees with upstream, upstream wins, except for the cuts agreed on the call of 2026-10-06 ([0007](../decisions/0007-call-2026-10-06-scope-cuts.md)), which the BA is removing from upstream.

## Code types (reference list: v2 *[User] - Code creation - step 1*; QR-U-07)

| Type | Dynamic | Static | Has a hosted page | Notes |
| --- | --- | --- | --- | --- |
| Website URL | ✅ | ✅ | — | Valid http(s); screened before save (QR-A-04) |
| PDF / File | ✅ | — | PDF opens directly with a QR.CA footer | Limits TBD (SRS-Q-11) |
| Multi-link page | ✅ | — | ✅ micro-landing | Label + URL per link, reorderable |
| vCard | ✅ | — | ✅ micro-landing | First name, last name, company, job title, phone, email, website, address, photo / logo. First name required; `.vcf` download |
| Contact (vCard) | — | ✅ | — | Same fields as vCard, encoded in the code itself; long content makes the code denser ([0006](../decisions/0006-static-contact-is-vcard.md)) |
| App store link | ✅ | — | — | iOS and/or Android + **required** fallback (QR-U-19) |
| Restaurant menu (PDF) | ✅ | — | PDF + footer | Display only (DS-04) |
| Email, SMS, Phone call, Plain text, Wi-Fi | — | ✅ | — | Encoded in the code itself; can't be edited, no statistics |

Only Multi-link page and dynamic vCard get the page builder (A-1). Static codes skip step 3, have no statistics, and **can't be edited or duplicated** ([0007](../decisions/0007-call-2026-10-06-scope-cuts.md); v2 allowed editing name, folder and tags). *Review* and *Time-based redirect* are out of V1 ([0007](../decisions/0007-call-2026-10-06-scope-cuts.md)). Bulk creation covers only the non-page types (QR-U-17).

## Code status

The owner sees two statuses: **Active** and **Paused** (DS-02). **Archive is a folder**: moving a dynamic code there pauses it.

Behind those two, the system has these states. Each one decides what a scanner sees (QR-U-38, QR-U-39):

| System state | Owner sees | Scanner sees |
| --- | --- | --- |
| `active` | Active | The destination, or the hosted page |
| `paused (owner)` | Paused | Friendly "not available right now" page. No owner's message ([0007](../decisions/0007-call-2026-10-06-scope-cuts.md)) |
| `paused (archived)` | Paused (in Archive) | Same friendly page |
| `unpaid` (no active subscription) | Paused / *codes paused* banner | Per SRS-Q-01 ⚠️ (recommended: the same page, naming the business) |
| `disabled (admin)` | Disabled; the owner can't re-enable it | Safety warning page; the destination is not shown |
| `deleted` | — (undo toast first) | "No longer available" page |
| unknown identifier | — | Generic not-found page |

**Precedence:** `disabled (admin)` > `deleted` > `paused (owner or archived)` > `unpaid` > `active` (BRL-06).

**Static codes** have no server state. They keep working even when filed in Archive (to confirm, SRS-Q-07).

Extra flags on a code:
- **granted by support:** a goodwill code that stays live without a subscription (QR-A-03).

## Account states (§12.2)

```
email not confirmed → trial (14 days, no card)
trial → subscribed → canceled (until period end) → no active subscription
trial → no active subscription
subscribed → payment failed (retry) → subscribed | no active subscription
any → suspended (admin)
```

Each account state has its own banner. The trial countdown and trial banner (QR-U-30) sit in the sidebar. Every other banner sits at the top of the Dashboard: *codes paused*, canceled until period end (QR-U-34), failed payment (QR-U-35) and suspended ([0004](../decisions/0004-account-banners-on-dashboard.md), agreed on the call, [0007](../decisions/0007-call-2026-10-06-scope-cuts.md)). There's no email-change banner: changing the email is removed.

The owner has no name until they add one in Account Settings; until then the app shows their **email** in its place ([0007](../decisions/0007-call-2026-10-06-scope-cuts.md)).

## Rules that affect what screens show

- Edits are unlimited on every plan (BRL-10). Scans are never capped (BRL-09).
- Plan limits block **new** items only and never disable existing ones (BRL-12). The same limit applies in the app, bulk creation and the API (DS-09).
- A duplicate gets a **new ID and a new short link**, is named "Copy of …", and its statistics start from zero (DS-01).
- An identifier is never reused (BRL-01).
- A unique scan is one visitor fingerprint per code per day. Location goes down to city level at most (BRL-22, BRL-26).
- Prices are in CAD, with GST / HST / QST by province. Monthly billing is available on every paid plan (BRL-35, BRL-36).
- Downloads come as PNG, JPG, SVG, EPS or PDF, never with a watermark (A-2, A-4). Without an active plan, a paused code can still be downloaded from the Dashboard, with a note that scanners see the "not available" page (A-13). **In the Archive**, Download opens the upgrade window, like Edit, Duplicate and Activate ([0005](../decisions/0005-adopt-srs-v2.md)).
- Without an active plan, Create, Edit, Bulk and Activate open the upgrade window. Analytics, Download, Move, Duplicate and Delete still work, except in the Archive (above) (v2 *work without an active plan*; QR-U-31).
- API: one key at a time. *Create API key* shows only when there's no key; after *Revoke*, a new one can be created. The key has no usage limit of its own; the plan's limits apply ([0007](../decisions/0007-call-2026-10-06-scope-cuts.md)).
- Error correction is automatic and the level is shown; there's no selector (A-7).
