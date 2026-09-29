import React from 'react';
import { CanadaFlag } from './icons';

export const HeroHeadline: React.FC = () => {
  return (
    <section className="flex flex-col gap-3 items-center text-center w-full max-w-[1148px] mx-auto select-none pt-2">
      {/* Main Headline */}
      <h1 className="flex flex-wrap items-center justify-center gap-3 font-['Inter_Tight'] font-bold text-[36px] sm:text-[44px] md:text-[48px] leading-[1.15] text-[#2c2e30] tracking-tight">
        <span>The first</span>
        <span className="inline-flex items-center justify-center">
          <CanadaFlag className="w-[36px] sm:w-[42px] md:w-[45px] h-[45px] sm:h-[52px] md:h-[56px] shrink-0" />
        </span>
        <span className="text-[#ef6f68]">Canadian</span>
        <span>-native QR Code Generator</span>
      </h1>

      {/* Subtitle */}
      <p className="font-['Inter_Tight'] font-normal text-[15px] sm:text-[16px] text-[rgba(44,46,48,0.7)] text-center tracking-[0.32px] w-full max-w-none whitespace-normal lg:whitespace-nowrap">
        Generate branded QR codes in seconds, share them with your audience, and instantly track your scan data.
      </p>
    </section>
  );
};
