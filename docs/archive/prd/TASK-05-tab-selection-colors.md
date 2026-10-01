# TASK-05: Per-Tab Selection Hex Color Architecture

## Overview
Implement unique selection accent colors for each QR code type in the Content Type Navigation bar, applying user-provided hex codes dynamically on tab click.

---

## User Specified Hex Codes & Mapping

| Tab ID | Tab Label | Active Accent Hex | Visual Identity |
|---|---|---|---|
| `website` | **Website** | `#00A7F5` | Primary Figma Cyan |
| `vcard` | **vCard** | `#C778D9` | Orchid / Lilac |
| `links` | **Links Page** | `#9F87F7` | Soft Periwinkle Violet |
| `text` | **Text** | `#5F9BFE` | Cornflower / Soft Sky Blue |
| `contact` | **Contact** | `#00BA7F` | Emerald Mint Green |
| `menu` | **Restaurant menu** | `#D68A00` | Amber / Golden Orange |
| `more` | **More** | `#00A7F5` | Fallback Brand Cyan |

---

## Technical Implementation

### 1. Color Configuration Map
In [`src/components/ContentTypeNav.tsx`](../../../src/components/ContentTypeNav.tsx):
```ts
export const tabColorConfig: Record<ContentTabType, { hex: string; shadow: string }> = {
  website: { hex: '#00A7F5', shadow: 'rgba(0, 167, 245, 0.35)' },
  vcard:   { hex: '#C778D9', shadow: 'rgba(199, 120, 217, 0.35)' },
  links:   { hex: '#9F87F7', shadow: 'rgba(159, 135, 247, 0.35)' },
  text:    { hex: '#5F9BFE', shadow: 'rgba(95, 155, 254, 0.35)' },
  contact: { hex: '#00BA7F', shadow: 'rgba(0, 186, 127, 0.35)' },
  menu:    { hex: '#D68A00', shadow: 'rgba(214, 138, 0, 0.35)' },
  more:    { hex: '#00A7F5', shadow: 'rgba(0, 167, 245, 0.35)' },
};
```

### 2. Dynamic Style Application
Replace hardcoded `#00a7f5` Tailwind utility classes with inline styles:
```tsx
const config = tabColorConfig[tab.id];

return (
  <button
    key={tab.id}
    type="button"
    onClick={() => onSelectTab(tab.id)}
    style={isActive ? { borderBottomColor: config.hex } : undefined}
    className={`flex items-center gap-3 h-[72px] px-4 shrink-0 transition-colors cursor-pointer relative ${
      isActive ? 'border-b-2' : 'border-b-2 border-transparent hover:bg-neutral-50/70'
    }`}
  >
    {/* Icon circle */}
    <div
      style={
        isActive
          ? { backgroundColor: config.hex, boxShadow: `0px 2px 8px ${config.shadow}` }
          : undefined
      }
      className={`size-[32px] rounded-full flex items-center justify-center transition-colors shrink-0 ${
        isActive
          ? 'text-white'
          : 'border border-[rgba(44,46,48,0.08)] bg-white text-[rgba(44,46,48,0.7)]'
      }`}
    >
      {tab.icon(isActive)}
    </div>

    {/* Label */}
    <span
      className={`font-['Inter_Tight'] font-medium text-[16px] tracking-[0.32px] whitespace-nowrap transition-colors ${
        isActive ? 'text-[#2c2e30]' : 'text-[rgba(44,46,48,0.7)]'
      }`}
    >
      {tab.label}
    </span>
  </button>
);
```

---

## Target File
- [`src/components/ContentTypeNav.tsx`](../../../src/components/ContentTypeNav.tsx)

---

## Acceptance Criteria
- [ ] Clicking on "Website" highlights the tab in `#00A7F5`.
- [ ] Clicking on "vCard" highlights the tab in `#C778D9`.
- [ ] Clicking on "Links Page" highlights the tab in `#9F87F7`.
- [ ] Clicking on "Text" highlights the tab in `#5F9BFE`.
- [ ] Clicking on "Contact" highlights the tab in `#00BA7F`.
- [ ] Clicking on "Restaurant menu" highlights the tab in `#D68A00`.
- [ ] Bottom border line, icon background circle, and subtle drop shadow transition smoothly upon tab switch.
