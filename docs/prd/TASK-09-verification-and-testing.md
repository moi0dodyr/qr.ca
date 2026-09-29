# TASK-09: Typecheck, Oxlint, and Cross-Device Verification

## Overview
Perform automated code quality checks, TypeScript type verification, production build validation, and visual regression tests to ensure all 8 tasks integrate cleanly.

---

## 1. Automated Verification Checks

### Step 1: Linting with Oxlint
```bash
npm run lint
```
- Verify zero syntax or linter errors.

### Step 2: TypeScript & Vite Build
```bash
npm run build
```
- Executes `tsc -b && vite build`.
- Validates that types, asset imports, and JSX markup compile cleanly without regressions.

---

## 2. Interactive & Visual Quality Checklist

- [ ] **Favicon & Logo**: Check that tab favicon and header brand logo render the official two-finder QR logo cleanly at 1x and 2x DPR.
- [ ] **Header Center Alignment**: Verify top navigation menu is centered across the header on desktop viewports.
- [ ] **Hero Headline**: Confirm Canadian maple leaf is rendered in `#EF6F68` between "The first" and "Canadian".
- [ ] **Hero Subheading**: Confirm the subtitle text is on a single line on desktop screens (`>= 1024px`).
- [ ] **Tab Navigation Icons**: Ensure all icons are bold, filled (solid), and easily distinguishable.
- [ ] **Tab Colors**: Test clicking each tab and verifying active highlight colors:
  - Website: `#00A7F5`
  - vCard: `#C778D9`
  - Links Page: `#9F87F7`
  - Text: `#5F9BFE`
  - Contact: `#00BA7F`
  - Restaurant menu: `#D68A00`
- [ ] **Shape Options**: Verify that all 8 shape preview tiles render exact vector SVGs from Figma and clicking them alters the rendered QR code modules.
- [ ] **Design Tabs**: Confirm that only "Shape" is selectable, and "Logo", "Frame", "Colors" are static and unclickable.
- [ ] **Credit Card Badge**: Confirm badge rests directly centered over the top of the QR code canvas frame.
