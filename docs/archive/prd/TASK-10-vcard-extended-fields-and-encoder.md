# TASK-10: vCard Extended Fields, Data Model & vCard 3.0 Encoder

## Overview
Implement the comprehensive TypeScript interface for vCard data and a robust RFC 2426-compliant vCard 3.0 serialization utility in `src/utils/vcard.ts`. This utility converts user form state into a valid standard vCard text payload that natively imports into iOS Contacts and Android Google Contacts when scanned.

---

## 1. Requirements

### 1.1 Field Coverage
The encoder must support all core and extended optional fields:
- **Personal**: `firstName`, `lastName`, `email`, `cellPhone`
- **Work / Organization**: `company` (`ORG`), `jobTitle` (`TITLE`), `workPhone` (`TEL;TYPE=WORK,VOICE`), `fax` (`TEL;TYPE=FAX`)
- **Physical Address**: `street`, `city`, `state` (Province/State), `zipCode` (Postal/ZIP), `country` (`ADR;TYPE=WORK:;;street;city;state;zip;country`)
- **Online & Notes**: `website` (`URL`), `notes` (`NOTE`)

### 1.2 RFC 2426 vCard 3.0 Rules
1. Wrap with `BEGIN:VCARD` and `END:VCARD`.
2. Always specify `VERSION:3.0`.
3. Construct `FN` (Formatted Name):
   - If both first and last name exist: `${firstName} ${lastName}`.
   - If only first name: `${firstName}`.
   - If only last name: `${lastName}`.
   - Fallback if both empty: `Alex Morgan` or Company name.
4. Construct `N` (Structured Name): `${lastName};${firstName};;;`.
5. Escape special characters:
   - Semicolons `;` -> `\;`
   - Commas `,` -> `\,`
   - Newlines `\n` -> `\n`
   - Backslashes `\` -> `\\`
6. Address formatting:
   `ADR;TYPE=WORK:;;${escaped(street)};${escaped(city)};${escaped(state)};${escaped(zipCode)};${escaped(country)}`
   Only include `ADR` if at least one address component is non-empty.
7. Omit empty fields entirely to keep the QR matrix clean and scannable.

---

## 2. Technical Implementation

### File to Create: [`src/utils/vcard.ts`](../../../src/utils/vcard.ts)

```typescript
export interface VCardData {
  // Core / Personal
  firstName: string;
  lastName: string;
  email: string;
  cellPhone: string;

  // Work & Organization (Optional)
  company: string;
  jobTitle: string;
  workPhone: string;
  fax: string;

  // Address (Optional)
  street: string;
  city: string;
  state: string; // Province / State
  zipCode: string; // Postal Code / ZIP
  country: string;

  // Online & Notes (Optional)
  website: string;
  notes: string;
}

export const initialVCardData: VCardData = {
  firstName: 'Alex',
  lastName: 'Morgan',
  email: 'alex@startup.ca',
  cellPhone: '+1 (416) 555-0192',
  company: 'Northern Lights Tech',
  jobTitle: 'VP of Product',
  workPhone: '+1 (416) 555-0199',
  fax: '+1 (416) 555-0101',
  street: '100 King St W, Suite 400',
  city: 'Toronto',
  state: 'ON',
  zipCode: 'M5X 1A9',
  country: 'Canada',
  website: 'https://startup.ca',
  notes: 'Scan to connect with our Toronto office.',
};

/**
 * Escapes characters reserved by vCard 3.0 specification
 */
export function escapeVCard(value: string): string {
  if (!value) return '';
  return value
    .replace(/\\/g, '\\\\')
    .replace(/;/g, '\\;')
    .replace(/,/g, '\\,')
    .replace(/\n/g, '\\n')
    .trim();
}

/**
 * Generates an RFC 2426-compliant vCard 3.0 string from VCardData
 */
export function generateVCardString(data: VCardData): string {
  const lines: string[] = ['BEGIN:VCARD', 'VERSION:3.0'];

  const first = data.firstName.trim();
  const last = data.lastName.trim();

  // Full Name & Structured Name
  const fullName = [first, last].filter(Boolean).join(' ') || data.company.trim() || 'Contact';
  lines.push(`FN:${escapeVCard(fullName)}`);
  lines.push(`N:${escapeVCard(last)};${escapeVCard(first)};;;`);

  // Organization & Title
  if (data.company.trim()) {
    lines.push(`ORG:${escapeVCard(data.company.trim())}`);
  }
  if (data.jobTitle.trim()) {
    lines.push(`TITLE:${escapeVCard(data.jobTitle.trim())}`);
  }

  // Phones
  if (data.cellPhone.trim()) {
    lines.push(`TEL;TYPE=CELL,VOICE:${escapeVCard(data.cellPhone.trim())}`);
  }
  if (data.workPhone.trim()) {
    lines.push(`TEL;TYPE=WORK,VOICE:${escapeVCard(data.workPhone.trim())}`);
  }
  if (data.fax.trim()) {
    lines.push(`TEL;TYPE=FAX:${escapeVCard(data.fax.trim())}`);
  }

  // Email
  if (data.email.trim()) {
    lines.push(`EMAIL;TYPE=WORK,INTERNET:${escapeVCard(data.email.trim())}`);
  }

  // Address
  const hasAddress = Boolean(
    data.street.trim() ||
      data.city.trim() ||
      data.state.trim() ||
      data.zipCode.trim() ||
      data.country.trim()
  );

  if (hasAddress) {
    const street = escapeVCard(data.street.trim());
    const city = escapeVCard(data.city.trim());
    const state = escapeVCard(data.state.trim());
    const zip = escapeVCard(data.zipCode.trim());
    const country = escapeVCard(data.country.trim());
    lines.push(`ADR;TYPE=WORK:;;${street};${city};${state};${zip};${country}`);
  }

  // Website / URL
  if (data.website.trim()) {
    lines.push(`URL:${escapeVCard(data.website.trim())}`);
  }

  // Notes
  if (data.notes.trim()) {
    lines.push(`NOTE:${escapeVCard(data.notes.trim())}`);
  }

  lines.push('END:VCARD');
  return lines.join('\n');
}
```

---

## 3. Acceptance Criteria
- [x] `VCardData` type definition exported and strongly typed.
- [x] `generateVCardString` produces standard `BEGIN:VCARD ... END:VCARD` blocks with `VERSION:3.0`.
- [x] Supports all 14 requested properties including Fax, Work Phone, Company, Title, full Address components, Website, and Notes.
- [x] Automatically omits empty fields from output payload.
- [x] Special characters (commas, semicolons, backslashes, newlines) are properly escaped.
