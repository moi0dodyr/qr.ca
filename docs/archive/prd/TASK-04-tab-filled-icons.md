# TASK-04: High-Contrast Filled Icons for QR Type Navigation

## Overview
Replace the thin outline/stroke icons in the Content Type Navigation bar with solid, filled SVG icons to maximize visual clarity, accessibility, and contrast.

---

## Background & Problem
- In [`src/components/icons.tsx`](../../../src/components/icons.tsx), most icons (`GlobeIcon`, `IdCardIcon`, `NoteIcon`, `UserIcon`, `ForkKnifeIcon`) use `stroke="currentColor" fill="none" strokeWidth="1.8"`.
- When displayed inside the 32x32px circular icon container in [`src/components/ContentTypeNav.tsx`](../../../src/components/ContentTypeNav.tsx), thin stroke lines have low contrast against colored or white backgrounds.
- Replacing them with solid, filled vector shapes ensures high readability across all active selection colors.

---

## Required Solid Filled Icons

### 1. `GlobeFilledIcon` (Website Tab)
- Solid globe with meridians and equator punched out as negative space or filled disc with contrast lines.
```xml
<svg viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm6.93 6h-2.95a15.65 15.65 0 0 0-1.38-3.56A8.03 8.03 0 0 1 18.93 8zM12 4.07a14.09 14.09 0 0 1 1.91 3.93h-3.82A14.09 14.09 0 0 1 12 4.07zM4.26 14a7.84 7.84 0 0 1 0-4h3.38a16.7 16.7 0 0 0-.14 2 16.7 16.7 0 0 0 .14 2zm.81 2h2.95a15.65 15.65 0 0 0 1.38 3.56A8.03 8.03 0 0 1 5.07 16zm2.95-8H5.07a8.03 8.03 0 0 1 3.53-3.56A15.65 15.65 0 0 0 8.02 8zm3.98 11.93A14.09 14.09 0 0 1 10.09 16h3.82a14.09 14.09 0 0 1-1.91 3.93zM9.64 14a14.7 14.7 0 0 1-.14-2c0-.68.05-1.35.14-2h4.72c.09.65.14 1.32.14 2s-.05 1.35-.14 2zm4.96 5.56A15.65 15.65 0 0 0 15.98 16h2.95a8.03 8.03 0 0 1-3.53 3.56zM16.36 14a16.7 16.7 0 0 0 .14-2 16.7 16.7 0 0 0-.14-2h3.38a7.84 7.84 0 0 1 0 4z" />
</svg>
```

### 2. `IdCardFilledIcon` (vCard Tab)
- Solid badge/identity card with cutout silhouette and credential lines.
```xml
<svg viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm-11 5a2 2 0 1 1-2 2 2 2 0 0 1 2-2zm3 8H6v-1c0-1.33 2-2 3-2s3 .67 3 2zm6-2h-4v-1.5h4zm0-3h-4V10.5h4zm0-3h-4V7.5h4z" />
</svg>
```

### 3. `LinkFilledIcon` (Links Page Tab)
- Already filled in codebase, retain full solid fill.

### 4. `NoteFilledIcon` (Text Tab)
- Solid document with folded corner and text lines.
```xml
<svg viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
</svg>
```

### 5. `UserFilledIcon` (Contact Tab)
- Solid avatar portrait.
```xml
<svg viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
</svg>
```

### 6. `ForkKnifeFilledIcon` (Restaurant Menu Tab)
- Solid crossed or paired fork and knife silhouettes.
```xml
<svg viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm7-7c-2.21 0-4 1.79-4 4v7h2.5V22h2.5V2h-1z" />
</svg>
```

### 7. `MoreFilledIcon` (More Tab)
- Solid rounded dots / chevron symbol.

---

## Target Files
- [`src/components/icons.tsx`](../../../src/components/icons.tsx)
- [`src/components/ContentTypeNav.tsx`](../../../src/components/ContentTypeNav.tsx)

---

## Acceptance Criteria
- [x] All 6 navigation tabs use solid, filled iconography.
- [x] Inactive state renders icons in subtle slate (`rgba(44, 46, 48, 0.7)`).
- [x] Active state renders icons in bright white (`#FFFFFF`) against the active tab's accent background.
