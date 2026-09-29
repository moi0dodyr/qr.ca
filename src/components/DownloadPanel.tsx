import React from 'react';
import QRCodeStyling from 'qr-code-styling';
import { QrCodeView } from './QrCodeView';
import type { ShapeType } from './ShapeTiles';
import { GemIcon } from './icons';
import { getDownloadPanelTheme } from '../utils/theme';

interface DownloadPanelProps {
  urlValue: string;
  shape: ShapeType;
  color: string;
  accentColor?: string;
  onDownloadClick: () => void;
  onTrackScansToggle: () => void;
  onInstanceReady: (instance: QRCodeStyling) => void;
}

export const DownloadPanel: React.FC<DownloadPanelProps> = ({
  urlValue,
  shape,
  color,
  accentColor = '#00A7F5',
  onDownloadClick,
  onTrackScansToggle,
  onInstanceReady,
}) => {
  const theme = getDownloadPanelTheme(accentColor);

  return (
    <div
      style={{
        backgroundColor: theme.panelBg,
        borderColor: theme.panelBorder,
      }}
      className="border flex flex-col gap-[28px] items-start p-[24px] sm:p-[28px] rounded-[28px] w-full lg:w-[393px] shrink-0 relative select-none transition-colors duration-200"
      data-name="Download Panel"
    >
      {/* Step 3 Header */}
      <div className="flex items-center gap-[12px] w-full" data-name="Download Header">
        <div className="bg-[#2c2e30] border border-[#f4f5f5] text-white rounded-full size-[32px] flex items-center justify-center font-['Inter_Tight'] font-semibold text-[16px] shrink-0">
          3
        </div>
        <h2 className="font-['Inter_Tight'] font-semibold text-[16px] text-[#2c2e30] whitespace-nowrap">
          Download your QR
        </h2>
      </div>

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
          <div
            onClick={onTrackScansToggle}
            className="flex items-center justify-between w-full px-1 py-1 cursor-pointer group hover:opacity-90 transition-opacity"
            data-name="Tracking Option"
            role="button"
            tabIndex={0}
          >
            <div className="flex items-center gap-[12px]">
              {/* Toggle switch visual */}
              <div className="w-[40px] h-[24px] rounded-full bg-[rgba(44,46,48,0.16)] p-[2px] flex items-center group-hover:bg-[rgba(44,46,48,0.24)] transition-colors">
                <div className="size-[20px] rounded-full bg-white shadow-sm transition-transform" />
              </div>

              <span className="font-['Inter_Tight'] font-medium text-[16px] text-[#2c2e30] tracking-[0.32px] whitespace-nowrap">
                Track your scans
              </span>
            </div>

            {/* Premium Badge */}
            <div className="bg-[#e96d98] flex gap-[4px] h-[24px] items-center px-[8px] py-[4px] rounded-[6px] shrink-0 shadow-sm">
              <GemIcon className="size-[12px] text-white" />
              <span className="font-['Inter_Tight'] font-medium text-[11px] text-center text-white tracking-[0.72px] uppercase whitespace-nowrap">
                Premium
              </span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="bg-[rgba(44,46,48,0.08)] h-px w-full" data-name="Divider" />

        {/* Download Actions */}
        <div className="flex flex-col gap-[14px] items-center w-full" data-name="Download Actions">
          <button
            type="button"
            onClick={onDownloadClick}
            style={{
              background: theme.buttonBg,
              borderColor: theme.buttonBorder,
              boxShadow: theme.buttonShadow,
            }}
            className="border active:translate-y-[2px] flex h-[44px] items-center justify-center px-[16px] py-[10px] rounded-[12px] w-full text-[#2c2e30] font-['Inter_Tight'] font-medium text-[16px] tracking-[0.32px] hover:brightness-105 transition-all duration-200 cursor-pointer"
            data-name="Download Button"
          >
            Download QR
          </button>

          <p className="font-['Inter_Tight'] font-normal text-[14px] text-[rgba(44,46,48,0.7)] text-center tracking-[0.7px] w-full">
            Available in SVG, PNG, JPG
          </p>
        </div>
      </div>
    </div>
  );
};
