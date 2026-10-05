# Domain model for the prototype

These are the rules the prototype's **mock data and screen states** must follow. The list is condensed from SRS v1.0 Part 2c §12.2 and the stories it names. This is **not** an architecture or a database schema; those belong to Denys. If anything here disagrees with upstream, upstream wins.

## Code types (reference list: QR-U-07, A-15)

| Type | Dynamic | Static | Has a hosted page | Notes |
| --- | --- | --- | --- | --- |
| Website URL | ✅ | ✅ | — | Valid http(s); screened before save (QR-A-04) |
| PDF / File | ✅ | — | PDF opens directly with a QR.CA footer | Limits TBD (SRS-Q-11) |
| Multi-Link / Links Page | ✅ | ? (Q-W6) | ✅ micro-landing | Label + URL per link, reorderable |
| vCard | ✅ | ✅ | ✅ micro-landing when dynamic | Full card: name, occupation, company, several numbers, email, website, address, photo. Name required; `.vcf` download |
| Contact | — | ✅ | — | Basic card: name, phone, email ([0003](../decisions/0003-static-contact-and-vcard-both-kept.md); not yet in upstream, DR-04) |
| App Store | ✅ | — | — | iOS and/or Android + **required** fallback (QR-U-19) |
| Restaurant Menu | ✅ | — | PDF + footer | Display only (DS-04) |
| Review / feedback | ✅ | — | Optional 1–5 rating page | Google link always shown (QR-U-44) |
| Email, SMS, Phone call, Plain text, Wi-Fi | — | ✅ | — | Encoded in the code itself; can't be edited, no statistics |

Only Multi-Link and vCard get the page builder (A-1). Bulk creation covers only the non-page types (QR-U-17).

## Code status

The owner sees two statuses: **Active** and **Paused** (DS-02). **Archive is a folder**: moving a dynamic code there pauses it.

Behind those two, the system has these states. Each one decides what a scanner sees (QR-U-38, QR-U-39):

| System state | Owner sees | Scanner sees |
| --- | --- | --- |
| `active` | Active | The destination, or the hosted page |
| `paused (owner)` | Paused | Friendly "not available right now" page, plus the owner's message if they wrote one |
| `paused (archived)` | Paused (in Archive) | Same friendly page |
| `unpaid` (no active subscription) | Paused / *codes paused* banner | Per SRS-Q-01 ⚠️ (recommended: the same page, naming the business) |
| `disabled (admin)` | Disabled; the owner can't re-enable it | Safety warning page; the destination is not shown |
| `deleted` | — (undo toast first) | "No longer available" page |
| unknown identifier | — | Generic not-found page |

**Precedence:** `disabled (admin)` > `deleted` > `paused (owner or archived)` > `unpaid` > `active`. A pause beats a schedule window, which beats the default destination (BRL-06, BRL-07).

**Static codes** have no server state. They keep working even when filed in Archive (to confirm, SRS-Q-07).

Extra flags on a code:
- **not healthy:** the scannability check failed and the owner downloaded anyway (DS-05).
- **granted by support:** a goodwill code that stays live without a subscription (QR-A-03).

## Account states (§12.2)

```
email not confirmed → trial (14 days, no card)
trial → subscribed → canceled (until period end) → no active subscription
trial → no active subscription
subscribed → payment failed (retry) → subscribed | no active subscription
any → suspended (admin)
```

The sidebar banner follows the account state: trial countdown (QR-U-30), *codes paused*, failed payment (QR-U-35), or waiting for email confirmation.

## Rules that affect what screens show

- Edits are unlimited on every plan (BRL-10). Scans are never capped (BRL-09).
- Plan limits block **new** items only and never disable existing ones (BRL-12). The same limit applies in the app, bulk creation and the API (DS-09).
- A duplicate gets a **new ID and a new short link**, is named "Copy of …", and its statistics start from zero (DS-01).
- An identifier is never reused (BRL-01).
- A unique scan is one visitor fingerprint per code per day. Location goes down to city level at most (BRL-22, BRL-26).
- Prices are in CAD, with GST / HST / QST by province. Monthly billing is available on every paid plan (BRL-35, BRL-36).
- Downloads come as PNG, JPG, SVG, EPS or PDF, never with a watermark (A-2, A-4). A paused code can still be downloaded, with a note (A-13).
- Error correction is automatic and the level is shown; there's no selector (A-7).
