# TASK-08: Reposition "No Credit Card Required" Badge Over QR Code Frame

## Overview
Move the floating badge tag *"no credit card required"* from the top of the outer Download Panel down to sit directly at the top of the QR code canvas frame.

---

## Background & Problem
- In [`src/components/DownloadPanel.tsx`](../../src/components/DownloadPanel.tsx), the badge was placed at the top of the entire outer download section container (`top-[-12px]`), hovering above the "Step 3: Download your QR" header.
- User Specification: *"Next thing is the tag that says not credit card required should stay at the top of the QR code itself, not at the top of the download your QR section."*
- Figma Node `6062:2669`: Located centered over the white QR code card container (`data-name="QR Code"`).

---

## Technical Implementation
In [`src/components/DownloadPanel.tsx`](../../src/components/DownloadPanel.tsx):

### 1. Remove Top Badge from Outer Container
Remove the existing floating badge located at lines 30-34.

### 2. Nest Badge Directly on Top of the QR Canvas Frame
```tsx
{/* QR Preview & Tracking section */}
<div className="flex flex-col gap-[24px] items-center w-full" data-name="QR Preview">
  <div className="flex flex-col gap-[20px] items-center w-full max-w-[277px] relative" data-name="Preview Content">
    
    {/* "NO CREDIT CARD REQUIRED" Floating Badge anchored to the QR code frame */}
    <div
      className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white border border-[rgba(44,46,48,0.16)] flex h-[24px] items-center justify-center px-[8px] py-[10px] rounded-[6px] shadow-[0px_2px_4px_rgba(0,0,0,0.04)] z-20"
      data-name="Credit Card Notice"
    >
      <span className="font-['Inter_Tight'] font-medium text-[12px] text-[rgba(44,46,48,0.7)] text-center tracking-[0.72px] uppercase whitespace-nowrap">
        no credit card required
      </span>
    </div>

    {/* White Card framing the QR code */}
    <div
      className="bg-white border border-[rgba(44,46,48,0.1)] rounded-[12px] size-[268px] flex items-center justify-center overflow-hidden shrink-0 shadow-sm transition-transform duration-200 hover:scale-[1.01] relative"
      data-name="QR Code"
    >
      <QrCodeView
        value={urlValue}
        shape={shape}
        color={color}
        bgColor="#ffffff"
        size={200}
        onInstanceReady={onInstanceReady}
      />
    </div>

    {/* Tracking Option Toggle */}
    ...
  </div>
</div>
```

---

## Target File
- [`src/components/DownloadPanel.tsx`](../../src/components/DownloadPanel.tsx)

---

## Acceptance Criteria
- [ ] Outer download panel has clean top margin without badge overlap.
- [ ] The "no credit card required" badge floats centered right at the top border of the 268x268px white QR frame.
- [ ] Badge text styling matches Figma: uppercase, 12px, font-medium, letter-spacing 0.72px.
