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
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n')
    .replace(/\n/g, '\\n')
    .trim();
}

/**
 * Generates an RFC 2426-compliant vCard 3.0 string from VCardData
 */
export function generateVCardString(data: VCardData): string {
  const lines: string[] = ['BEGIN:VCARD', 'VERSION:3.0'];

  const first = (data.firstName || '').trim();
  const last = (data.lastName || '').trim();

  // Full Name & Structured Name
  const fullName = [first, last].filter(Boolean).join(' ') || (data.company || '').trim() || 'Contact';
  lines.push(`FN:${escapeVCard(fullName)}`);
  lines.push(`N:${escapeVCard(last)};${escapeVCard(first)};;;`);

  // Organization & Title
  if (data.company?.trim()) {
    lines.push(`ORG:${escapeVCard(data.company.trim())}`);
  }
  if (data.jobTitle?.trim()) {
    lines.push(`TITLE:${escapeVCard(data.jobTitle.trim())}`);
  }

  // Phones
  if (data.cellPhone?.trim()) {
    lines.push(`TEL;TYPE=CELL,VOICE:${escapeVCard(data.cellPhone.trim())}`);
  }
  if (data.workPhone?.trim()) {
    lines.push(`TEL;TYPE=WORK,VOICE:${escapeVCard(data.workPhone.trim())}`);
  }
  if (data.fax?.trim()) {
    lines.push(`TEL;TYPE=FAX:${escapeVCard(data.fax.trim())}`);
  }

  // Email
  if (data.email?.trim()) {
    lines.push(`EMAIL;TYPE=WORK,INTERNET:${escapeVCard(data.email.trim())}`);
  }

  // Address
  const hasAddress = Boolean(
    data.street?.trim() ||
      data.city?.trim() ||
      data.state?.trim() ||
      data.zipCode?.trim() ||
      data.country?.trim()
  );

  if (hasAddress) {
    const street = escapeVCard((data.street || '').trim());
    const city = escapeVCard((data.city || '').trim());
    const state = escapeVCard((data.state || '').trim());
    const zip = escapeVCard((data.zipCode || '').trim());
    const country = escapeVCard((data.country || '').trim());
    lines.push(`ADR;TYPE=WORK:;;${street};${city};${state};${zip};${country}`);
  }

  // Website / URL
  if (data.website?.trim()) {
    lines.push(`URL:${escapeVCard(data.website.trim())}`);
  }

  // Notes
  if (data.notes?.trim()) {
    lines.push(`NOTE:${escapeVCard(data.notes.trim())}`);
  }

  lines.push('END:VCARD');
  return lines.join('\n');
}
