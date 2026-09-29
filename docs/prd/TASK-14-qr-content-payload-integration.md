# TASK-14: Generator State Integration & Live QR Code Payload Synchronization

## Overview
Connect the state of all content types in `App.tsx` so that user edits in the vCard form, Links Page manager, Website, Text, Contact, and Menu immediately update the live QR preview rendered by `QrCodeView` and downloaded by `DownloadPanel`.

---

## 1. Problem Statement
Previously, `App.tsx` only tracked `urlValue` as a single static string. The sub-form states in `ContentForm.tsx` (such as `vCardName`, `vCardPhone`, etc.) were isolated local variables. Switching tabs or filling out contact information did not change the rendered QR code matrix.

---

## 2. Technical Architecture

### 2.1 State Management in `App.tsx`
Centralize the state models in `src/App.tsx`:
```tsx
// Content type state
const [websiteUrl, setWebsiteUrl] = useState('https://www.acme.com/');
const [vCardData, setVCardData] = useState<VCardData>(initialVCardData);
const [linksData, setLinksData] = useState<LinksPageData>(initialLinksPageData);
const [textContent, setTextContent] = useState('Welcome to our flagship Toronto store!');
const [contactNumber, setContactNumber] = useState('+1 (800) 555-QRCA');
const [menuUrl, setMenuUrl] = useState('https://menu.qr.ca/bistro-toronto');
```

### 2.2 Computed Active Payload
Use `useMemo` to serialize the appropriate standard payload depending on `activeContentTab`:
```tsx
const activePayload = useMemo(() => {
  switch (activeContentTab) {
    case 'website':
      return websiteUrl || 'https://www.acme.com/';
    case 'vcard':
      return generateVCardString(vCardData);
    case 'links':
      return generateLinksPagePayload(linksData);
    case 'text':
      return textContent || ' ';
    case 'contact':
      return contactNumber ? `tel:${contactNumber}` : '+1 (800) 555-QRCA';
    case 'menu':
      return menuUrl || 'https://menu.qr.ca';
    default:
      return websiteUrl;
  }
}, [activeContentTab, websiteUrl, vCardData, linksData, textContent, contactNumber, menuUrl]);
```

### 2.3 Passing to Children
- Pass `activePayload` to `<DownloadPanel urlValue={activePayload} ... />`.
- Pass content states and setter callbacks to `<ContentForm ... />`.
- Update `ContentFormProps` to accept:
  ```typescript
  interface ContentFormProps {
    websiteUrl: string;
    onWebsiteUrlChange: (val: string) => void;
    vCardData: VCardData;
    onVCardDataChange: (val: VCardData) => void;
    linksData: LinksPageData;
    onLinksDataChange: (val: LinksPageData) => void;
    textContent: string;
    onTextContentChange: (val: string) => void;
    contactNumber: string;
    onContactNumberChange: (val: string) => void;
    menuUrl: string;
    onMenuUrlChange: (val: string) => void;
    selectedShape: ShapeType;
    onSelectShape: (shape: ShapeType) => void;
    selectedColor?: string;
    onSelectColor?: (color: string) => void;
    activeContentTab: ContentTabType;
    onOpenSignUpModal: (source: string) => void;
  }
  ```

---

## 3. Acceptance Criteria
- [x] Changing any vCard input (e.g., adding Company, Fax, Address) instantly alters the QR code module patterns in the preview canvas.
- [x] Scanning the vCard QR code on an iOS or Android device triggers the native "Add to Contacts" screen with all populated fields.
- [x] Changing the Links Page slug or adding/removing links updates the generated QR code.
- [x] Switching between tabs immediately recalculates the QR code payload without lag.
- [x] Direct download (`Download QR`) downloads an SVG/PNG containing the active payload.
