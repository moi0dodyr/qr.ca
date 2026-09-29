import React from 'react';
import { BrandLogo } from './icons';

interface HeaderProps {
  onSignUpClick?: () => void;
  onLogInClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onSignUpClick, onLogInClick }) => {
  return (
    <header className="relative w-full border-b border-[rgba(44,46,48,0.08)] bg-white px-6 py-5 flex items-center justify-between shrink-0">
      {/* Brand */}
      <div className="flex gap-2 items-center cursor-pointer select-none z-10">
        <BrandLogo className="size-9" />
        <span className="font-['Inter_Tight'] font-semibold text-[18px] text-[#2c2e30] tracking-tight">
          QR.ca
        </span>
      </div>

      {/* Navigation Links (Mathematically Centered) */}
      <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8 font-['Inter_Tight'] font-medium text-[16px] text-[rgba(44,46,48,0.7)] tracking-[0.32px]">
        <a href="#features" className="hover:text-[#2c2e30] transition-colors">
          Features
        </a>
        <a href="#resources" className="hover:text-[#2c2e30] transition-colors">
          Resources
        </a>
        <a href="#price" className="hover:text-[#2c2e30] transition-colors">
          Price
        </a>
        <a href="#faq" className="hover:text-[#2c2e30] transition-colors">
          FAQ
        </a>
      </nav>

      {/* Account Actions */}
      <div className="flex items-center gap-3 z-10">
        <button
          type="button"
          onClick={onLogInClick}
          className="bg-white border border-[rgba(44,46,48,0.16)] drop-shadow-[0px_4px_0px_rgba(44,46,48,0.15)] active:translate-y-[2px] active:drop-shadow-[0px_2px_0px_rgba(44,46,48,0.15)] flex h-[36px] items-center justify-center px-4 py-2.5 rounded-[10px] text-[#2c2e30] font-['Inter_Tight'] font-medium text-[16px] tracking-[0.32px] hover:bg-neutral-50 transition-all cursor-pointer"
        >
          Log in
        </button>

        <button
          type="button"
          onClick={onSignUpClick}
          className="bg-gradient-to-b from-[rgba(0,167,245,0.24)] to-[rgba(0,167,245,0.08)] border border-[rgba(0,167,245,0.36)] shadow-[0px_4px_0px_0px_rgba(0,167,245,0.25)] active:translate-y-[2px] active:shadow-[0px_2px_0px_0px_rgba(0,167,245,0.25)] flex h-[36px] items-center justify-center px-4 py-2.5 rounded-[12px] text-[#2c2e30] font-['Inter_Tight'] font-medium text-[16px] tracking-[0.32px] hover:brightness-105 transition-all cursor-pointer"
        >
          Sign up
        </button>
      </div>
    </header>
  );
};
