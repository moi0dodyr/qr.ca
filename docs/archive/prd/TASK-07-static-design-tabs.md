# TASK-07: Static, Non-Clickable Design Tabs (Logo, Frame, Colors)

## Overview
In Step 2 ("Design your QR"), disable interactivity for the "Logo", "Frame", and "Colors" tabs so only "Shape" is visible and active, matching the exact visual state in Figma.

---

## Background & Problem
- In the prototype, clicking "Logo", "Frame", or "Colors" toggled sub-views or mock controls.
- User Specification: *"the design your QR tabs, logo frame and colors shouldn't be clickable at all. So we just need to see the shape tab and that's it."*
- Figma Node `6062:2403`: Shows "Shape" as the active tab with `#00A7F5` bottom border indicator, while "Logo", "Frame", and "Colors" are rendered as inactive visual tabs.

---

## Technical Implementation
In [`src/components/ContentForm.tsx`](../../../src/components/ContentForm.tsx):

### 1. Replace Clickable Buttons with Static Presentation
```tsx
{/* Sub-tabs: Shape (active), Logo, Frame, Colors (static) */}
<div className="border-b border-[rgba(44,46,48,0.08)] flex gap-[24px] items-center w-full select-none" data-name="Design Tabs">
  {/* Shape Tab: Active */}
  <div className="border-b-2 border-[#00a7f5] h-[44px] flex items-center justify-center font-['Inter_Tight'] font-medium text-[16px] text-[#2c2e30] tracking-[0.32px] shrink-0">
    Shape
  </div>

  {/* Inactive & Non-Clickable Tabs */}
  <div className="h-[44px] flex items-center justify-center font-['Inter_Tight'] font-medium text-[16px] text-[rgba(44,46,48,0.7)] tracking-[0.32px] cursor-default pointer-events-none shrink-0">
    Logo
  </div>

  <div className="h-[44px] flex items-center justify-center font-['Inter_Tight'] font-medium text-[16px] text-[rgba(44,46,48,0.7)] tracking-[0.32px] cursor-default pointer-events-none shrink-0">
    Frame
  </div>

  <div className="h-[44px] flex items-center justify-center font-['Inter_Tight'] font-medium text-[16px] text-[rgba(44,46,48,0.7)] tracking-[0.32px] cursor-default pointer-events-none shrink-0">
    Colors
  </div>
</div>
```

### 2. Simplify Tab Body Content
Remove state management for `activeDesignTab` ('logo' | 'frame' | 'colors') and always render `<ShapeTiles />` directly underneath.

---

## Target File
- [`src/components/ContentForm.tsx`](../../../src/components/ContentForm.tsx)

---

## Acceptance Criteria
- [ ] "Shape" is clearly indicated as the active tab with cyan bottom underline.
- [ ] "Logo", "Frame", and "Colors" are visible as gray labels matching Figma, but are not clickable (no hover state changes, no cursor pointer).
- [ ] No extraneous sub-panel views for Logo/Frame/Colors are rendered.
