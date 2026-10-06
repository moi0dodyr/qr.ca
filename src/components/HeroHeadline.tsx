import React from 'react';

export const HeroHeadline: React.FC = () => {
  return (
    <section className="flex flex-col gap-3 items-center text-center w-full max-w-[1148px] mx-auto select-none" data-name="Hero Section">
      {/* Main Headline */}
      <h1 className="font-['Inter_Tight'] font-bold text-[36px] sm:text-[44px] md:text-[48px] leading-[1.15] text-[#2c2e30] tracking-tight">
        Create, customize and track QR codes
      </h1>

      {/* Subtitle */}
      <p className="font-['Inter_Tight'] font-normal text-[15px] sm:text-[16px] text-[rgba(44,46,48,0.7)] text-center tracking-[0.32px] w-full">
        Add your content, customize the design, and download. Track every scan when you need to.
      </p>
    </section>
  );
};
