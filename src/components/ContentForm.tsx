import React from 'react';
import { ShapeTiles, type ShapeType } from './ShapeTiles';
import type { ContentTabType } from './ContentTypeNav';
import { VCardFormSection } from './VCardFormSection';
import type { VCardData } from '../utils/vcard';
import { LinksFormSection } from './LinksFormSection';
import type { LinksPageData } from '../utils/links';
import type { AppStoreLinkData } from '../utils/appStore';

const APP_STORE_FIELDS: { key: keyof AppStoreLinkData; label: string; placeholder: string }[] = [
  { key: 'appStoreUrl', label: 'App Store URL', placeholder: 'https://apps.apple.com/app/…' },
  { key: 'googlePlayUrl', label: 'Google Play URL', placeholder: 'https://play.google.com/store/apps/…' },
  { key: 'fallbackUrl', label: 'Fallback URL', placeholder: 'https://www.example.com/' },
];

export interface ContentFormProps {
  websiteUrl: string;
  onWebsiteUrlChange: (val: string) => void;
  vCardData: VCardData;
  onVCardDataChange: (val: VCardData) => void;
  linksData: LinksPageData;
  onLinksDataChange: (val: LinksPageData) => void;
  textContent: string;
  onTextContentChange: (val: string) => void;
  appStoreData: AppStoreLinkData;
  onAppStoreDataChange: (val: AppStoreLinkData) => void;
  menuUrl: string;
  onMenuUrlChange: (val: string) => void;
  selectedShape: ShapeType;
  onSelectShape: (shape: ShapeType) => void;
  selectedColor?: string;
  onSelectColor?: (color: string) => void;
  activeContentTab: ContentTabType;
  onOpenSignUpModal: (source: string) => void;
  urlValue?: string;
  onUrlChange?: (val: string) => void;
}

export const ContentForm: React.FC<ContentFormProps> = ({
  websiteUrl,
  onWebsiteUrlChange,
  vCardData,
  onVCardDataChange,
  linksData,
  onLinksDataChange,
  textContent,
  onTextContentChange,
  appStoreData,
  onAppStoreDataChange,
  menuUrl,
  onMenuUrlChange,
  selectedShape,
  onSelectShape,
  activeContentTab,
  onOpenSignUpModal,
  urlValue,
  onUrlChange,
}) => {
  const currentUrl = websiteUrl ?? urlValue ?? '';
  const handleUrlChange = (val: string) => {
    if (onWebsiteUrlChange) {
      onWebsiteUrlChange(val);
    } else if (onUrlChange) {
      onUrlChange(val);
    }
  };

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
              value={currentUrl}
              onChange={(e) => handleUrlChange(e.target.value)}
              placeholder="https://www.example.com/"
              className="bg-white border border-[rgba(44,46,48,0.16)] h-[44px] px-[16px] py-[10px] rounded-[12px] font-['Inter_Tight'] font-normal text-[16px] text-[#2c2e30] tracking-[0.32px] w-full focus:outline-none focus:border-[#00a7f5] focus:ring-2 focus:ring-[#00a7f5]/20 transition-all placeholder:text-neutral-400"
            />
          </div>
        )}

        {activeContentTab === 'vcard' && (
          <VCardFormSection
            data={vCardData}
            onChange={onVCardDataChange}
          />
        )}

        {activeContentTab === 'links' && (
          <LinksFormSection
            data={linksData}
            onChange={onLinksDataChange}
          />
        )}

        {activeContentTab === 'text' && (
          <div className="flex flex-col gap-1 w-full">
            <label className="font-['Inter_Tight'] text-[14px] text-[#2c2e30] tracking-[0.7px]">Text Payload</label>
            <textarea
              rows={3}
              value={textContent}
              onChange={(e) => onTextContentChange(e.target.value)}
              className="bg-white border border-[rgba(44,46,48,0.16)] p-3 rounded-[12px] text-[15px] text-[#2c2e30] focus:outline-none focus:border-[#00a7f5] resize-none"
            />
          </div>
        )}

        {activeContentTab === 'appstore' && (
          <div className="flex flex-col gap-[16px] w-full" data-name="App Store Fields">
            {APP_STORE_FIELDS.map((field) => (
              <div key={field.key} className="flex flex-col gap-[4px] w-full" data-name="URL Field">
                <label
                  htmlFor={`appstore-${field.key}`}
                  className="font-['Inter_Tight'] font-normal text-[14px] text-[#2c2e30] tracking-[0.7px]"
                >
                  {field.label}
                </label>
                <input
                  id={`appstore-${field.key}`}
                  type="url"
                  value={appStoreData[field.key]}
                  onChange={(e) => onAppStoreDataChange({ ...appStoreData, [field.key]: e.target.value })}
                  placeholder={field.placeholder}
                  className="bg-white border border-[rgba(44,46,48,0.16)] h-[44px] px-[16px] py-[10px] rounded-[12px] font-['Inter_Tight'] font-normal text-[16px] text-[#2c2e30] tracking-[0.32px] w-full focus:outline-none focus:border-[#00a7f5] focus:ring-2 focus:ring-[#00a7f5]/20 transition-all placeholder:text-neutral-400"
                />
              </div>
            ))}
            <p className="font-['Inter_Tight'] font-normal text-[14px] text-[rgba(44,46,48,0.7)] tracking-[0.7px]">
              Add at least one store link. The fallback opens on other devices.
            </p>
          </div>
        )}

        {activeContentTab === 'menu' && (
          <div className="flex flex-col gap-1 w-full">
            <label className="font-['Inter_Tight'] text-[14px] text-[#2c2e30] tracking-[0.7px]">Digital Menu URL / PDF</label>
            <input
              type="text"
              value={menuUrl}
              onChange={(e) => onMenuUrlChange(e.target.value)}
              placeholder="https://menu.qr.ca/bistro-toronto"
              className="bg-white border border-[rgba(44,46,48,0.16)] h-[44px] px-4 rounded-[12px] text-[16px] text-[#2c2e30] focus:outline-none focus:border-[#00a7f5]"
            />
          </div>
        )}

        {activeContentTab === 'more' && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            {['WiFi Network', 'Calendar Event', 'SMS Message', 'Google Maps', 'Contact (vCard)', 'Email Template'].map((item) => (
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

        {/* Sub-tabs: Shape (active), Logo, Frame, Colors (static) */}
        <div className="flex flex-col gap-[16px] w-full">
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

          {/* Sub-tab content */}
          <ShapeTiles
            selectedShape={selectedShape}
            onSelectShape={onSelectShape}
            onAppBadgeClick={() => onOpenSignUpModal('shape-presets')}
          />
        </div>
      </div>
    </div>
  );
};
