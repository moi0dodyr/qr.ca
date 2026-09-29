import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { BrandLogo, CanadaFlag, GoogleIcon } from './icons';

interface SignUpModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDirectDownload?: () => void;
  title?: string;
  description?: string;
}

export const SignUpModal: React.FC<SignUpModalProps> = ({
  isOpen,
  onClose,
  onDirectDownload,
  title = 'Your code is ready to download and customize!',
  description = 'Sign up to QR.ca to download your vector SVG and high-res PNG files, track your live scan analytics, and manage all your Canadian QR codes in one place.',
}) => {
  useEffect(() => {
    if (isOpen) {
      // Fire confetti celebration
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#00A7F5', '#EF6F68', '#2C2E30'],
        });
      } catch (e) {
        // ignore if canvas not supported
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs transition-opacity duration-200">
      <div
        className="bg-white border border-[rgba(44,46,48,0.12)] rounded-[24px] p-6 sm:p-8 max-w-[460px] w-full shadow-2xl flex flex-col gap-6 relative animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 text-[rgba(44,46,48,0.5)] hover:text-[#2c2e30] p-1.5 rounded-full hover:bg-neutral-100 transition-colors cursor-pointer"
          aria-label="Close"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Modal Header */}
        <div className="flex flex-col items-center text-center gap-3 pt-2">
          <div className="flex items-center gap-2">
            <BrandLogo className="size-10" />
            <CanadaFlag className="w-8 h-5 rounded-[2px] shadow-xs" />
          </div>
          <h3 className="font-['Inter_Tight'] font-bold text-[22px] sm:text-[24px] text-[#2c2e30] leading-tight">
            {title}
          </h3>
          <p className="font-['Inter_Tight'] text-[15px] text-[rgba(44,46,48,0.7)] leading-relaxed">
            {description}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3 w-full">
          {/* Sign Up with Google */}
          <button
            type="button"
            onClick={() => {
              alert('Prototype: "Sign up with Google" clicked!');
              onClose();
            }}
            className="w-full h-[46px] rounded-[12px] bg-white border border-[rgba(44,46,48,0.18)] drop-shadow-[0px_4px_0px_rgba(44,46,48,0.12)] active:translate-y-[2px] active:drop-shadow-[0px_2px_0px_rgba(44,46,48,0.12)] flex items-center justify-center gap-3 font-['Inter_Tight'] font-medium text-[15px] text-[#2c2e30] hover:bg-neutral-50 transition-all cursor-pointer"
          >
            <GoogleIcon className="w-5 h-5" />
            Sign up with Google
          </button>

          {/* Sign Up with Email */}
          <button
            type="button"
            onClick={() => {
              alert('Prototype: "Sign up with Email" clicked!');
              onClose();
            }}
            className="w-full h-[46px] rounded-[12px] bg-gradient-to-b from-[rgba(0,167,245,0.24)] to-[rgba(0,167,245,0.08)] border border-[rgba(0,167,245,0.36)] shadow-[0px_4px_0px_0px_rgba(0,167,245,0.25)] active:translate-y-[2px] active:shadow-[0px_2px_0px_0px_rgba(0,167,245,0.25)] flex items-center justify-center font-['Inter_Tight'] font-medium text-[15px] text-[#2c2e30] hover:brightness-105 transition-all cursor-pointer"
          >
            Sign up with Email
          </button>

          {/* Direct Download Link */}
          {onDirectDownload && (
            <div className="text-center pt-2">
              <button
                type="button"
                onClick={onDirectDownload}
                className="text-[13px] font-medium text-[#00a7f5] hover:underline cursor-pointer"
              >
                Or download a quick PNG preview now ↓
              </button>
            </div>
          )}
        </div>

        {/* Footer Guarantee */}
        <div className="text-center text-[12px] text-[rgba(44,46,48,0.5)] pt-1 border-t border-neutral-100">
          🍁 100% Canadian data residency &middot; No credit card required
        </div>
      </div>
    </div>
  );
};
