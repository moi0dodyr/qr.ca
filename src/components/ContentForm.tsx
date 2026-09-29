import React, { useState } from 'react';
import { ShapeTiles, type ShapeType } from './ShapeTiles';
import type { ContentTabType } from './ContentTypeNav';
import { CanadaFlag, BrandLogo } from './icons';

export type DesignTabType = 'shape' | 'logo' | 'frame' | 'colors';

interface ContentFormProps {
  urlValue: string;
  onUrlChange: (val: string) => void;
  selectedShape: ShapeType;
  onSelectShape: (shape: ShapeType) => void;
  selectedColor: string;
  onSelectColor: (color: string) => void;
  activeContentTab: ContentTabType;
  onOpenSignUpModal: (source: string) => void;
}

export const ContentForm: React.FC<ContentFormProps> = ({
  urlValue,
  onUrlChange,
  selectedShape,
  onSelectShape,
  selectedColor,
  onSelectColor,
  activeContentTab,
  onOpenSignUpModal,
}) => {
  const [activeDesignTab, setActiveDesignTab] = useState<DesignTabType>('shape');

  // Preview form states for non-website tabs
  const [vCardName, setVCardName] = useState('Alex Morgan');
  const [vCardPhone, setVCardPhone] = useState('+1 (416) 555-0192');
  const [vCardEmail, setVCardEmail] = useState('alex@startup.ca');
  const [textContent, setTextContent] = useState('Welcome to our flagship Toronto store! Scan for special in-store perks.');
  const [menuUrl, setMenuUrl] = useState('https://menu.qr.ca/bistro-toronto');

  const colorPresets = [
    { label: 'Charcoal', hex: '#2c2e30' },
    { label: 'Brand Blue', hex: '#00a7f5' },
    { label: 'Canadian Coral', hex: '#ef6f68' },
    { label: 'Emerald', hex: '#10b981' },
    { label: 'Violet', hex: '#8b5cf6' },
    { label: 'Amber', hex: '#f59e0b' },
  ];

  return (
    <div
      className="bg-[#f7f7f7] border border-[rgba(44,46,48,0.08)] flex-1 flex flex-col gap-[24px] p-[24px] sm:p-[28px] rounded-[28px] w-full"
      data-name="Content Form"
    >
      {/* ────────────────────────────────────────── */}
      {/* STEP 1: Complete the content              */}
      {/* ────────────────────────────────────────── */}
      <div className="flex flex-col gap-[16px] w-full" data-name="Content Section">
        {/* Step Header */}
        <div className="flex items-center gap-[12px]">
          <div className="bg-[#2c2e30] border border-[#f4f5f5] text-white rounded-full size-[32px] flex items-center justify-center font-['Inter_Tight'] font-semibold text-[16px] shrink-0">
            1
          </div>
          <h2 className="font-['Inter_Tight'] font-semibold text-[16px] text-[#2c2e30]">
            Complete the content
          </h2>
        </div>

        {/* Input depending on active tab */}
        {activeContentTab === 'website' && (
          <div className="flex flex-col gap-[4px] w-full" data-name="URL Field">
            <label className="font-['Inter_Tight'] font-normal text-[14px] text-[#2c2e30] tracking-[0.7px]">
              Your URL
            </label>
            <input
              type="text"
              value={urlValue}
              onChange={(e) => onUrlChange(e.target.value)}
              placeholder="https://www.example.com/"
              className="bg-white border border-[rgba(44,46,48,0.16)] h-[44px] px-[16px] py-[10px] rounded-[12px] font-['Inter_Tight'] font-normal text-[16px] text-[#2c2e30] tracking-[0.32px] w-full focus:outline-none focus:border-[#00a7f5] focus:ring-2 focus:ring-[#00a7f5]/20 transition-all placeholder:text-neutral-400"
            />
          </div>
        )}

        {activeContentTab === 'vcard' && (
          <div className="flex flex-col gap-[12px] w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex flex-col gap-1">
                <label className="font-['Inter_Tight'] text-[14px] text-[#2c2e30] tracking-[0.7px]">Full Name</label>
                <input
                  type="text"
                  value={vCardName}
                  onChange={(e) => setVCardName(e.target.value)}
                  className="bg-white border border-[rgba(44,46,48,0.16)] h-[44px] px-4 rounded-[12px] text-[16px] text-[#2c2e30] focus:outline-none focus:border-[#00a7f5]"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-['Inter_Tight'] text-[14px] text-[#2c2e30] tracking-[0.7px]">Phone</label>
                <input
                  type="text"
                  value={vCardPhone}
                  onChange={(e) => setVCardPhone(e.target.value)}
                  className="bg-white border border-[rgba(44,46,48,0.16)] h-[44px] px-4 rounded-[12px] text-[16px] text-[#2c2e30] focus:outline-none focus:border-[#00a7f5]"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-['Inter_Tight'] text-[14px] text-[#2c2e30] tracking-[0.7px]">Work Email</label>
              <input
                type="email"
                value={vCardEmail}
                onChange={(e) => setVCardEmail(e.target.value)}
                className="bg-white border border-[rgba(44,46,48,0.16)] h-[44px] px-4 rounded-[12px] text-[16px] text-[#2c2e30] focus:outline-none focus:border-[#00a7f5]"
              />
            </div>
          </div>
        )}

        {activeContentTab === 'links' && (
          <div className="flex flex-col gap-3 w-full">
            <label className="font-['Inter_Tight'] text-[14px] text-[#2c2e30] tracking-[0.7px]">Bio Link Page URL</label>
            <input
              type="text"
              defaultValue="https://qr.ca/alex-portfolio"
              className="bg-white border border-[rgba(44,46,48,0.16)] h-[44px] px-4 rounded-[12px] text-[16px] text-[#2c2e30] focus:outline-none focus:border-[#00a7f5]"
            />
            <div className="text-[13px] text-[rgba(44,46,48,0.6)]">
              Connect your Instagram, TikTok, LinkedIn, and personal website under one branded QR link.
            </div>
          </div>
        )}

        {activeContentTab === 'text' && (
          <div className="flex flex-col gap-1 w-full">
            <label className="font-['Inter_Tight'] text-[14px] text-[#2c2e30] tracking-[0.7px]">Text Payload</label>
            <textarea
              rows={3}
              value={textContent}
              onChange={(e) => setTextContent(e.target.value)}
              className="bg-white border border-[rgba(44,46,48,0.16)] p-3 rounded-[12px] text-[15px] text-[#2c2e30] focus:outline-none focus:border-[#00a7f5] resize-none"
            />
          </div>
        )}

        {activeContentTab === 'contact' && (
          <div className="flex flex-col gap-3 w-full">
            <label className="font-['Inter_Tight'] text-[14px] text-[#2c2e30] tracking-[0.7px]">Direct Contact Card</label>
            <input
              type="text"
              defaultValue="+1 (800) 555-QRCA"
              className="bg-white border border-[rgba(44,46,48,0.16)] h-[44px] px-4 rounded-[12px] text-[16px] text-[#2c2e30] focus:outline-none focus:border-[#00a7f5]"
            />
          </div>
        )}

        {activeContentTab === 'menu' && (
          <div className="flex flex-col gap-1 w-full">
            <label className="font-['Inter_Tight'] text-[14px] text-[#2c2e30] tracking-[0.7px]">Digital Menu URL / PDF</label>
            <input
              type="text"
              value={menuUrl}
              onChange={(e) => setMenuUrl(e.target.value)}
              className="bg-white border border-[rgba(44,46,48,0.16)] h-[44px] px-4 rounded-[12px] text-[16px] text-[#2c2e30] focus:outline-none focus:border-[#00a7f5]"
            />
          </div>
        )}

        {activeContentTab === 'more' && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            {['WiFi Network', 'Calendar Event', 'SMS Message', 'Google Maps', 'App Store Link', 'Email Template'].map((item) => (
              <div
                key={item}
                className="bg-white border border-[rgba(44,46,48,0.1)] rounded-[10px] p-3 text-center text-[13px] font-medium text-[#2c2e30] hover:border-[#00a7f5] cursor-pointer transition-all"
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Divider */}
      <div className="bg-[rgba(44,46,48,0.08)] h-px w-full" data-name="Divider" />

      {/* ────────────────────────────────────────── */}
      {/* STEP 2: Design your QR                    */}
      {/* ────────────────────────────────────────── */}
      <div className="flex flex-col gap-[20px] w-full" data-name="Design Section">
        {/* Step Header */}
        <div className="flex items-center gap-[12px]">
          <div className="bg-[#2c2e30] border border-[#f4f5f5] text-white rounded-full size-[32px] flex items-center justify-center font-['Inter_Tight'] font-semibold text-[16px] shrink-0">
            2
          </div>
          <h2 className="font-['Inter_Tight'] font-semibold text-[16px] text-[#2c2e30]">
            Design your QR
          </h2>
        </div>

        {/* Sub-tabs: Shape, Logo, Frame, Colors */}
        <div className="flex flex-col gap-[16px] w-full">
          <div className="border-b border-[rgba(44,46,48,0.08)] flex gap-[24px] items-center w-full select-none">
            <button
              type="button"
              onClick={() => setActiveDesignTab('shape')}
              className={`h-[44px] flex items-center justify-center font-['Inter_Tight'] font-medium text-[16px] tracking-[0.32px] transition-colors cursor-pointer relative ${
                activeDesignTab === 'shape'
                  ? 'border-b-2 border-[#00a7f5] text-[#2c2e30]'
                  : 'text-[rgba(44,46,48,0.7)] hover:text-[#2c2e30]'
              }`}
            >
              Shape
            </button>

            <button
              type="button"
              onClick={() => setActiveDesignTab('logo')}
              className={`h-[44px] flex items-center justify-center font-['Inter_Tight'] font-medium text-[16px] tracking-[0.32px] transition-colors cursor-pointer relative ${
                activeDesignTab === 'logo'
                  ? 'border-b-2 border-[#00a7f5] text-[#2c2e30]'
                  : 'text-[rgba(44,46,48,0.7)] hover:text-[#2c2e30]'
              }`}
            >
              Logo
            </button>

            <button
              type="button"
              onClick={() => setActiveDesignTab('frame')}
              className={`h-[44px] flex items-center justify-center font-['Inter_Tight'] font-medium text-[16px] tracking-[0.32px] transition-colors cursor-pointer relative ${
                activeDesignTab === 'frame'
                  ? 'border-b-2 border-[#00a7f5] text-[#2c2e30]'
                  : 'text-[rgba(44,46,48,0.7)] hover:text-[#2c2e30]'
              }`}
            >
              Frame
            </button>

            <button
              type="button"
              onClick={() => setActiveDesignTab('colors')}
              className={`h-[44px] flex items-center justify-center font-['Inter_Tight'] font-medium text-[16px] tracking-[0.32px] transition-colors cursor-pointer relative ${
                activeDesignTab === 'colors'
                  ? 'border-b-2 border-[#00a7f5] text-[#2c2e30]'
                  : 'text-[rgba(44,46,48,0.7)] hover:text-[#2c2e30]'
              }`}
            >
              Colors
            </button>
          </div>

          {/* Sub-tab content */}
          {activeDesignTab === 'shape' && (
            <ShapeTiles
              selectedShape={selectedShape}
              onSelectShape={onSelectShape}
              onAppBadgeClick={() => onOpenSignUpModal('shape-presets')}
            />
          )}

          {activeDesignTab === 'logo' && (
            <div className="flex flex-col gap-4 py-2">
              <p className="text-[14px] text-[rgba(44,46,48,0.7)]">
                Add an official Canadian badge or your custom brand logo to the center of your code:
              </p>
              <div className="flex flex-wrap gap-3 items-center">
                <button
                  type="button"
                  onClick={() => onOpenSignUpModal('logo-custom')}
                  className="h-16 px-4 rounded-[12px] bg-white border border-[rgba(44,46,48,0.12)] hover:border-[#00a7f5] flex items-center gap-3 cursor-pointer transition-all"
                >
                  <BrandLogo className="w-8 h-8" />
                  <span className="text-[14px] font-medium text-[#2c2e30]">QR.ca Official Badge</span>
                </button>

                <button
                  type="button"
                  onClick={() => onOpenSignUpModal('logo-canada')}
                  className="h-16 px-4 rounded-[12px] bg-white border border-[rgba(44,46,48,0.12)] hover:border-[#00a7f5] flex items-center gap-3 cursor-pointer transition-all"
                >
                  <CanadaFlag className="w-8 h-6 rounded-[2px]" />
                  <span className="text-[14px] font-medium text-[#2c2e30]">Maple Leaf</span>
                </button>

                <button
                  type="button"
                  onClick={() => onOpenSignUpModal('logo-upload')}
                  className="h-16 px-5 rounded-[12px] border border-dashed border-[rgba(44,46,48,0.2)] hover:border-[#00a7f5] hover:bg-white text-[14px] font-medium text-[rgba(44,46,48,0.7)] hover:text-[#2c2e30] flex items-center justify-center cursor-pointer transition-all"
                >
                  + Upload Custom Logo
                </button>
              </div>
            </div>
          )}

          {activeDesignTab === 'frame' && (
            <div className="flex flex-col gap-4 py-2">
              <p className="text-[14px] text-[rgba(44,46,48,0.7)]">
                Add a call-to-action banner to increase scan rates by up to 80%:
              </p>
              <div className="flex flex-wrap gap-3">
                {['No Frame', 'Bottom "SCAN ME"', 'Top "SCAN ME"', 'Badge Card', 'Handheld Phone'].map((frameStyle, idx) => (
                  <button
                    key={frameStyle}
                    type="button"
                    onClick={() => onOpenSignUpModal('frame-select')}
                    className={`h-14 px-4 rounded-[12px] bg-white border text-[14px] font-medium transition-all cursor-pointer ${
                      idx === 0
                        ? 'border-[#2c2e30] text-[#2c2e30] shadow-[0px_2px_4px_rgba(0,0,0,0.06)]'
                        : 'border-[rgba(44,46,48,0.12)] text-[rgba(44,46,48,0.7)] hover:border-[#2c2e30]'
                    }`}
                  >
                    {frameStyle}
                  </button>
                ))}
              </div>
            </div>
          )}

          {activeDesignTab === 'colors' && (
            <div className="flex flex-col gap-4 py-2">
              <p className="text-[14px] text-[rgba(44,46,48,0.7)]">
                Choose from Canadian-inspired palettes or customize with brand hex codes:
              </p>
              <div className="flex flex-wrap gap-3 items-center">
                {colorPresets.map((preset) => {
                  const isSelected = selectedColor === preset.hex;
                  return (
                    <button
                      key={preset.hex}
                      type="button"
                      onClick={() => onSelectColor(preset.hex)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-[10px] bg-white border transition-all cursor-pointer ${
                        isSelected
                          ? 'border-[#2c2e30] shadow-sm'
                          : 'border-[rgba(44,46,48,0.12)] hover:border-[rgba(44,46,48,0.3)]'
                      }`}
                    >
                      <span
                        className="size-4 rounded-full border border-black/10 shrink-0"
                        style={{ backgroundColor: preset.hex }}
                      />
                      <span className="text-[13px] font-medium text-[#2c2e30]">
                        {preset.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
