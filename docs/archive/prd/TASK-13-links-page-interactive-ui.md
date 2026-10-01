# TASK-13: Links Page Interactive Form UI (Add, Reorder, Delete, Logo Picker)

## Overview
Build the interactive Links Page manager UI with support for adding links, selecting brand logos via a popover picker, reordering links with Move Up / Move Down buttons, and removing links.

---

## 1. UX & Component Hierarchy

```text
LinksFormSection
├── Bio Page Header / Slug Customizer (https://qr.ca/[ alex-portfolio ])
├── Multi-Link List
│   └── LinkItemCard (repeating)
│       ├── Logo Selector Button (renders current platform SVG badge)
│       │   └── Popover Grid Picker (12 selectable platform icons)
│       ├── Title Input ("e.g. Follow on Instagram")
│       ├── URL Input ("https://instagram.com/...")
│       └── Action Buttons:
│           ├── Move Up (↑)
│           ├── Move Down (↓)
│           └── Delete (🗑)
└── "+ Add Another Link" Button
```

---

## 2. Technical Implementation

### 2.1 File to Create: [`src/components/platformIcons.tsx`](../../../src/components/platformIcons.tsx)
Provides crisp inline SVGs for all 12 platform keys:
- `website`, `instagram`, `tiktok`, `linkedin`, `youtube`, `x`, `github`, `facebook`, `spotify`, `discord`, `email`, `phone`.

### 2.2 File to Create: [`src/components/PlatformIconPicker.tsx`](../../../src/components/PlatformIconPicker.tsx)
A popover modal/flyout allowing one-click selection of any of the 12 platforms. Shows the icon, brand color badge, and platform name.

### 2.3 Component to Create: [`src/components/LinksFormSection.tsx`](../../../src/components/LinksFormSection.tsx)

```tsx
import React, { useState } from 'react';
import type { LinksPageData, PlatformLogoKey } from '../utils/links';
import {
  PLATFORM_REGISTRY,
  createNewLink,
  reorderLinks,
} from '../utils/links';
import { PlatformIcon } from './platformIcons';
import { PlatformIconPicker } from './PlatformIconPicker';
import { Plus, Trash2, ArrowUp, ArrowDown, ExternalLink } from 'lucide-react';

interface LinksFormSectionProps {
  data: LinksPageData;
  onChange: (data: LinksPageData) => void;
}

export const LinksFormSection: React.FC<LinksFormSectionProps> = ({ data, onChange }) => {
  const [activePickerLinkId, setActivePickerLinkId] = useState<string | null>(null);

  const handleAddLink = () => {
    const newLink = createNewLink('website');
    onChange({
      ...data,
      links: [...data.links, newLink],
    });
  };

  const handleRemoveLink = (id: string) => {
    if (data.links.length <= 1) return; // Keep at least one
    onChange({
      ...data,
      links: data.links.filter((l) => l.id !== id),
    });
  };

  const handleMove = (index: number, direction: 'up' | 'down') => {
    onChange({
      ...data,
      links: reorderLinks(data.links, index, direction),
    });
  };

  const handleUpdateItem = (id: string, updates: Partial<{ title: string; url: string; platform: PlatformLogoKey }>) => {
    onChange({
      ...data,
      links: data.links.map((link) => (link.id === id ? { ...link, ...updates } : link)),
    });
  };

  return (
    <div className="flex flex-col gap-4 w-full" data-name="Links Page Section">
      {/* Slug / Domain bar */}
      <div className="bg-white border border-[rgba(44,46,48,0.1)] rounded-[16px] p-4 flex flex-col gap-2">
        <label className="text-[13px] font-medium text-[#2c2e30]">
          Your QR Bio Link URL
        </label>
        <div className="flex items-center bg-neutral-50/50 border border-[rgba(44,46,48,0.16)] rounded-[10px] overflow-hidden focus-within:border-[#9F87F7] focus-within:ring-2 focus-within:ring-[#9F87F7]/20 transition-all">
          <span className="bg-neutral-100 text-neutral-500 font-mono text-[14px] px-3 py-2 border-r border-[rgba(44,46,48,0.1)] select-none">
            https://qr.ca/
          </span>
          <input
            type="text"
            value={data.bioUrlSlug}
            onChange={(e) => onChange({ ...data, bioUrlSlug: e.target.value.replace(/[^a-zA-Z0-9-_]/g, '') })}
            placeholder="your-custom-slug"
            className="flex-1 px-3 py-2 text-[15px] bg-transparent focus:outline-none"
          />
        </div>
      </div>

      {/* Multi-Link Cards */}
      <div className="flex flex-col gap-2.5 w-full">
        {data.links.map((link, index) => {
          const config = PLATFORM_REGISTRY[link.platform];
          const isFirst = index === 0;
          const isLast = index === data.links.length - 1;

          return (
            <div
              key={link.id}
              className="bg-white border border-[rgba(44,46,48,0.1)] rounded-[14px] p-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 relative shadow-xs hover:border-[rgba(44,46,48,0.2)] transition-all"
            >
              {/* Left: Platform Logo Selector Button */}
              <div className="relative shrink-0 flex items-center">
                <button
                  type="button"
                  onClick={() => setActivePickerLinkId(link.id)}
                  title={`Change logo (currently ${config.name})`}
                  className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-[10px] border border-[rgba(44,46,48,0.12)] hover:border-[#9F87F7] bg-neutral-50/60 hover:bg-neutral-100/70 transition-all cursor-pointer"
                >
                  <div
                    style={{ backgroundColor: config.bgColor, color: config.color }}
                    className="size-7 rounded-[8px] flex items-center justify-center shrink-0"
                  >
                    <PlatformIcon platform={link.platform} className="size-4" />
                  </div>
                  <span className="text-[12px] font-medium text-neutral-600 hidden md:inline">
                    {config.name}
                  </span>
                </button>

                {activePickerLinkId === link.id && (
                  <PlatformIconPicker
                    currentPlatform={link.platform}
                    onSelect={(p) => {
                      handleUpdateItem(link.id, { platform: p });
                      setActivePickerLinkId(null);
                    }}
                    onClose={() => setActivePickerLinkId(null)}
                  />
                )}
              </div>

              {/* Middle: Title & URL Inputs */}
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-2">
                <input
                  type="text"
                  placeholder="Link Title (e.g. My Instagram)"
                  value={link.title}
                  onChange={(e) => handleUpdateItem(link.id, { title: e.target.value })}
                  className="bg-neutral-50/50 border border-[rgba(44,46,48,0.16)] h-[38px] px-3 rounded-[8px] text-[14px] focus:outline-none focus:border-[#9F87F7] focus:ring-1 focus:ring-[#9F87F7]/30"
                />
                <input
                  type="text"
                  placeholder={config.placeholder}
                  value={link.url}
                  onChange={(e) => handleUpdateItem(link.id, { url: e.target.value })}
                  className="bg-neutral-50/50 border border-[rgba(44,46,48,0.16)] h-[38px] px-3 rounded-[8px] text-[14px] focus:outline-none focus:border-[#9F87F7] focus:ring-1 focus:ring-[#9F87F7]/30"
                />
              </div>

              {/* Right: Reorder & Delete Actions */}
              <div className="flex items-center gap-1 self-end sm:self-center shrink-0">
                <button
                  type="button"
                  disabled={isFirst}
                  onClick={() => handleMove(index, 'up')}
                  title="Move Up"
                  className="size-8 rounded-[8px] flex items-center justify-center text-neutral-500 hover:text-neutral-800 hover:bg-neutral-100 disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
                >
                  <ArrowUp className="size-4" />
                </button>

                <button
                  type="button"
                  disabled={isLast}
                  onClick={() => handleMove(index, 'down')}
                  title="Move Down"
                  className="size-8 rounded-[8px] flex items-center justify-center text-neutral-500 hover:text-neutral-800 hover:bg-neutral-100 disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
                >
                  <ArrowDown className="size-4" />
                </button>

                <button
                  type="button"
                  disabled={data.links.length <= 1}
                  onClick={() => handleRemoveLink(link.id)}
                  title="Delete Link"
                  className="size-8 rounded-[8px] flex items-center justify-center text-red-500 hover:text-red-700 hover:bg-red-50 disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer ml-1"
                >
                  <Trash2 className="size-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Add Link Button */}
      <button
        type="button"
        onClick={handleAddLink}
        className="w-full h-[42px] border-2 border-dashed border-[#9F87F7]/40 hover:border-[#9F87F7] bg-[#9F87F7]/5 hover:bg-[#9F87F7]/10 text-[#9F87F7] rounded-[12px] font-['Inter_Tight'] font-medium text-[14px] flex items-center justify-center gap-2 transition-all cursor-pointer"
      >
        <Plus className="size-4" />
        <span>Add Another Link</span>
      </button>
    </div>
  );
};
```

---

## 3. Acceptance Criteria
- [x] Users can add unlimited links via "+ Add Another Link".
- [x] Users can change the platform icon of any link via the popover picker.
- [x] Users can reorder links up and down; top and bottom buttons disable appropriately.
- [x] Users can delete links; at least 1 link is always maintained.
- [x] Accent color `#9F87F7` is used for focus rings and subtle button states.
