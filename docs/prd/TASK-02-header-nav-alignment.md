# TASK-02: Header Navigation Center-Alignment Fix

## Overview
Fix the visual misalignment of the top navigation menu ("Features", "Resources", "Price", "FAQ") so that it is mathematically centered across the entire header width.

---

## Background & Problem
- In [`src/components/Header.tsx`](../../src/components/Header.tsx), the container uses `flex justify-between items-center`:
  - Left element (Brand: Logo + "QR.ca"): width ~`100px`.
  - Center element (Nav links: "Features", "Resources", "Price", "FAQ").
  - Right element (Account Actions: "Log in" + "Sign up"): width ~`180px`.
- Because the right cluster is ~80px wider than the left cluster, `justify-between` pushes the middle item noticeably to the left of the true center of the screen.

---

## Technical Solution Options

### Option A: Absolute Centering (Recommended)
Keep the outer flex layout, but position the `<nav>` absolutely in the center of the header:
```tsx
<header className="relative w-full border-b border-[rgba(44,46,48,0.08)] bg-white px-6 py-5 flex items-center justify-between shrink-0">
  {/* Left: Brand */}
  <div className="flex gap-2 items-center cursor-pointer select-none z-10">
    <BrandLogo className="size-9" />
    <span className="font-['Inter_Tight'] font-semibold text-[18px] text-[#2c2e30] tracking-tight">QR.ca</span>
  </div>

  {/* Center: Navigation Links (Mathematically Centered) */}
  <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8 font-['Inter_Tight'] font-medium text-[16px] text-[rgba(44,46,48,0.7)] tracking-[0.32px]">
    <a href="#features" className="hover:text-[#2c2e30] transition-colors">Features</a>
    <a href="#resources" className="hover:text-[#2c2e30] transition-colors">Resources</a>
    <a href="#price" className="hover:text-[#2c2e30] transition-colors">Price</a>
    <a href="#faq" className="hover:text-[#2c2e30] transition-colors">FAQ</a>
  </nav>

  {/* Right: Account Actions */}
  <div className="flex items-center gap-3 z-10">
    ...
  </div>
</header>
```

### Option B: 3-Column Equal Grid
```tsx
<header className="w-full border-b border-[rgba(44,46,48,0.08)] bg-white px-6 py-5 grid grid-cols-[1fr_auto_1fr] items-center shrink-0">
  <div className="flex items-center justify-start">...</div>
  <nav className="flex items-center justify-center gap-8">...</nav>
  <div className="flex items-center justify-end gap-3">...</div>
</header>
```

---

## Target File
- [`src/components/Header.tsx`](../../src/components/Header.tsx)

---

## Acceptance Criteria
- [x] On desktop (`>= 768px`), the navigation links are aligned to the exact horizontal center of the header container.
- [x] No collision occurs between Brand, Nav, and Account Action buttons on intermediate viewports (`768px` - `1024px`).
- [x] On mobile viewports, the nav links remain cleanly hidden or accessible without layout breaking.
