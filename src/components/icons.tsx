import React from 'react';

// Brand Logo: Cyan rounded square with stylized white QR modules
export const BrandLogo: React.FC<{ className?: string }> = ({ className = "w-9 h-9" }) => (
  <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="36" height="36" rx="8" fill="#00A7F5" />
    {/* Top-Left Finder */}
    <rect x="5.5" y="5.5" width="10" height="10" rx="2" fill="white" />
    <rect x="7.5" y="7.5" width="6" height="6" rx="1" fill="#00A7F5" />
    <rect x="9" y="9" width="3" height="3" rx="0.5" fill="white" />

    {/* Top-Right Finder */}
    <rect x="20.5" y="5.5" width="10" height="10" rx="2" fill="white" />
    <rect x="22.5" y="7.5" width="6" height="6" rx="1" fill="#00A7F5" />
    <rect x="24" y="9" width="3" height="3" rx="0.5" fill="white" />

    {/* Bottom-Left Finder */}
    <rect x="5.5" y="20.5" width="10" height="10" rx="2" fill="white" />
    <rect x="7.5" y="22.5" width="6" height="6" rx="1" fill="#00A7F5" />
    <rect x="9" y="24" width="3" height="3" rx="0.5" fill="white" />

    {/* Custom data modules */}
    <rect x="20.5" y="20.5" width="3" height="3" rx="0.5" fill="white" />
    <rect x="25.5" y="20.5" width="5" height="3" rx="0.5" fill="white" />
    <rect x="20.5" y="25.5" width="4" height="5" rx="0.5" fill="white" />
    <rect x="26.5" y="25.5" width="4" height="5" rx="0.5" fill="white" />
    <rect x="17.5" y="14" width="3" height="8" rx="0.5" fill="white" />
  </svg>
);

// Canadian National Flag SVG
export const CanadaFlag: React.FC<{ className?: string }> = ({ className = "w-[45px] h-[36px]" }) => (
  <svg viewBox="0 0 900 450" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="900" height="450" fill="white" rx="4" />
    <rect width="225" height="450" fill="#FF0000" />
    <rect x="675" width="225" height="450" fill="#FF0000" />
    {/* Maple Leaf */}
    <path
      d="M450 357.5L445.5 315C427.5 321.75 418.5 310.5 405 292.5L373.5 306L360 270L328.5 288L337.5 243C315 247.5 301.5 238.5 292.5 225L324 189L301.5 180L337.5 135L360 148.5C369 135 373.5 117 382.5 90L405 135L427.5 112.5L432 171C436.5 166.5 441 157.5 450 135C459 157.5 463.5 166.5 468 171L472.5 112.5L495 135L517.5 90C526.5 117 531 135 540 148.5L562.5 135L598.5 180L576 189L607.5 225C598.5 238.5 585 247.5 562.5 243L571.5 288L540 270L526.5 306L495 292.5C481.5 310.5 472.5 321.75 454.5 315L450 357.5Z"
      fill="#FF0000"
    />
  </svg>
);

// Globe Outline Icon
export const GlobeIcon: React.FC<{ className?: string; color?: string }> = ({ className = "w-4 h-4", color = "currentColor" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
    <path d="M2 12h20" />
  </svg>
);

// Identification Card Outline Icon
export const IdCardIcon: React.FC<{ className?: string; color?: string }> = ({ className = "w-4 h-4", color = "currentColor" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="18" height="14" x="3" y="5" rx="2" />
    <circle cx="9" cy="11" r="2" />
    <path d="M15 9h2" />
    <path d="M15 13h2" />
    <path d="M6 16c0-1.5 1.5-2.5 3-2.5s3 1 3 2.5" />
  </svg>
);

// Link Fill Icon
export const LinkFillIcon: React.FC<{ className?: string; color?: string }> = ({ className = "w-4 h-4", color = "currentColor" }) => (
  <svg viewBox="0 0 24 24" fill={color} className={className}>
    <path d="M13.293 3.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L18.586 10l-4.293-4.293-1 1a1 1 0 0 1-1.414-1.414l1.414-1.414v-.586zm-2.586 7.414a1 1 0 0 1 1.414 0l1.414 1.414a1 1 0 0 1-1.414 1.414L10.707 12.12l-4.293 4.293 4.293 4.293 1.414-1.414a1 1 0 0 1 1.414 1.414l-2 2a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 0l1.472 1.472z" />
  </svg>
);

// Note Outline Icon
export const NoteIcon: React.FC<{ className?: string; color?: string }> = ({ className = "w-4 h-4", color = "currentColor" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="8" y1="13" x2="16" y2="13" />
    <line x1="8" y1="17" x2="14" y2="17" />
  </svg>
);

// User Outline Icon
export const UserIcon: React.FC<{ className?: string; color?: string }> = ({ className = "w-4 h-4", color = "currentColor" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="7" r="4" />
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
  </svg>
);

// Fork & Knife Outline Icon
export const ForkKnifeIcon: React.FC<{ className?: string; color?: string }> = ({ className = "w-4 h-4", color = "currentColor" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2v20M18 2a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3M6 2v6a3 3 0 0 0 3 3h0a3 3 0 0 0 3-3V2M9 11v11" />
  </svg>
);

// Chevron Down / More Icon
export const ChevronDownIcon: React.FC<{ className?: string; color?: string }> = ({ className = "w-4 h-4", color = "currentColor" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

// Sketch / Gem Diamond Icon for Premium badge
export const GemIcon: React.FC<{ className?: string; color?: string }> = ({ className = "w-3 h-3", color = "currentColor" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M6 3h12l4 6-10 12L2 9z" />
    <path d="M2 9h20M12 21 8 9M12 21l4-12M6 3l2 6M18 3l-2 6" />
  </svg>
);

// Google "G" Icon for Auth
export const GoogleIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
    />
  </svg>
);
