import React from 'react';

export type ShapeType =
  | 'square'
  | 'rounded'
  | 'extra-rounded'
  | 'dots'
  | 'diamond'
  | 'horizontal-bars'
  | 'vertical-bars'
  | 'classy';

interface ShapeTileOption {
  id: ShapeType;
  label: string;
  preview: React.ReactNode;
}

const shapeOptions: ShapeTileOption[] = [
  // 1. Square Modules (Figma 6062:2414)
  {
    id: 'square',
    label: 'Square',
    preview: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <path d="M24 48H0V24H24V48ZM8 32V40H16V32H8Z" fill="currentColor" />
        <rect x="8" y="16" width="8" height="8" fill="currentColor" />
        <rect x="8" width="8" height="8" fill="currentColor" />
        <rect width="8" height="8" fill="currentColor" />
        <rect y="8" width="8" height="8" fill="currentColor" />
        <rect x="16" y="8" width="8" height="8" fill="currentColor" />
        <rect x="24" y="8" width="8" height="8" fill="currentColor" />
        <rect x="24" width="8" height="8" fill="currentColor" />
        <rect x="40" width="8" height="8" fill="currentColor" />
        <rect x="40" y="40" width="8" height="8" fill="currentColor" />
        <rect x="40" y="32" width="8" height="8" fill="currentColor" />
        <rect x="40" y="24" width="8" height="8" fill="currentColor" />
        <rect x="32" y="24" width="8" height="8" fill="currentColor" />
        <rect x="40" y="16" width="8" height="8" fill="currentColor" />
        <rect x="32" y="16" width="8" height="8" fill="currentColor" />
        <rect x="24" y="16" width="8" height="8" fill="currentColor" />
        <rect x="24" y="32" width="8" height="8" fill="currentColor" />
        <rect x="32" y="40" width="8" height="8" fill="currentColor" />
      </svg>
    ),
  },

  // 2. Rounded Modules (Figma 6062:2854)
  {
    id: 'rounded',
    label: 'Rounded',
    preview: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <path
          d="M32 15C32 15.5523 32.4477 16 33 16H47C47.5523 16 48 16.4477 48 17V47C48 47.5523 47.5523 48 47 48H33C32.4477 48 32 47.5523 32 47V40H39C39.5523 40 40 39.5523 40 39V33C40 32.4477 39.5523 32 39 32H32V40H25C24.4477 40 24 40.4477 24 41V47C24 47.5523 23.5523 48 23 48H1C0.447716 48 0 47.5523 0 47V25C0 24.4477 0.447715 24 1 24H7C7.55228 24 8 23.5523 8 23V16H16V23C16 23.5523 16.4477 24 17 24H24V17C24 16.4477 23.5523 16 23 16H16V8H23C23.5523 8 24 7.55228 24 7V1C24 0.447715 24.4477 0 25 0H31C31.5523 0 32 0.447715 32 1V15ZM8 39C8 39.5523 8.44772 40 9 40H15C15.5523 40 16 39.5523 16 39V33C16 32.4477 15.5523 32 15 32H9C8.44772 32 8 32.4477 8 33V39ZM24 31C24 31.5523 24.4477 32 25 32H32V25C32 24.4477 31.5523 24 31 24H24V31ZM16 8H9C8.44772 8 8 8.44772 8 9V16H1C0.447715 16 0 15.5523 0 15V1C0 0.447715 0.447715 0 1 0H15C15.5523 0 16 0.447715 16 1V8ZM48 7C48 7.55228 47.5523 8 47 8H41C40.4477 8 40 7.55228 40 7V1C40 0.447715 40.4477 0 41 0H47C47.5523 0 48 0.447715 48 1V7Z"
          fill="currentColor"
        />
      </svg>
    ),
  },

  // 3. Squircle Interconnected (Figma 6062:2855)
  {
    id: 'extra-rounded',
    label: 'Squircle',
    preview: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <path
          d="M16 24H20C22.2091 24 24 25.7909 24 28V32H28C30.2091 32 32 33.7909 32 36C32 38.2091 30.2091 40 28 40H24V44C24 46.2091 22.2091 48 20 48H4C1.79086 48 6.44266e-08 46.2091 0 44V28C2.57706e-07 25.7909 1.79086 24 4 24H8V16H16V24ZM28 0C30.2091 0 32 1.79086 32 4V16H44C46.2091 16 48 17.7909 48 20V44C48 46.2091 46.2091 48 44 48H36C33.7909 48 32 46.2091 32 44C32 41.7909 33.7909 40 36 40H40V32H36C33.7909 32 32 30.2091 32 28V24H28C25.7909 24 24 22.2091 24 20V16H20C17.7909 16 16 14.2091 16 12C16 9.79086 17.7909 8 20 8H24V4C24 1.79086 25.7909 0 28 0ZM8 40H16V32H8V40ZM12 0C14.2091 0 16 1.79086 16 4C16 6.20914 14.2091 8 12 8H8V12C8 14.2091 6.20914 16 4 16C1.79086 16 0 14.2091 0 12V4C0 1.79086 1.79086 0 4 0H12ZM45 0C46.6569 0 48 1.34315 48 3V5C48 6.65685 46.6569 8 45 8H43C41.3431 8 40 6.65685 40 5V3C40 1.34315 41.3431 0 43 0H45Z"
          fill="currentColor"
        />
      </svg>
    ),
  },

  // 4. Circular Dot Matrix (Figma 6062:2856)
  {
    id: 'dots',
    label: 'Dots',
    preview: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <g fill="currentColor">
          <circle cx="12" cy="20" r="4" />
          <circle cx="12" cy="28" r="4" />
          <circle cx="4" cy="28" r="4" />
          <circle cx="4" cy="36" r="4" />
          <circle cx="4" cy="44" r="4" />
          <circle cx="12" cy="44" r="4" />
          <circle cx="20" cy="44" r="4" />
          <circle cx="20" cy="36" r="4" />
          <circle cx="20" cy="28" r="4" />
          <circle cx="12" cy="4" r="4" />
          <circle cx="4" cy="4" r="4" />
          <circle cx="4" cy="12" r="4" />
          <circle cx="20" cy="12" r="4" />
          <circle cx="28" cy="12" r="4" />
          <circle cx="28" cy="4" r="4" />
          <circle cx="44" cy="4" r="4" />
          <circle cx="44" cy="44" r="4" />
          <circle cx="44" cy="36" r="4" />
          <circle cx="44" cy="28" r="4" />
          <circle cx="36" cy="28" r="4" />
          <circle cx="44" cy="20" r="4" />
          <circle cx="36" cy="20" r="4" />
          <circle cx="28" cy="20" r="4" />
          <circle cx="28" cy="36" r="4" />
          <circle cx="36" cy="44" r="4" />
        </g>
      </svg>
    ),
  },

  // 5. Classy Star / Diamond Notches (Figma 6062:2857)
  {
    id: 'diamond',
    label: 'Diamond',
    preview: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <path
          d="M31.3848 0C31.7245 8.14074e-05 31.9999 0.275486 32 0.615234V16H47C47.5523 16 48 16.4477 48 17V44C48 46.2091 46.2091 48 44 48H32.6152C32.2755 47.9999 32.0001 47.7245 32 47.3848C32 43.3064 35.3064 40 39.3848 40H40V32H32V36C32 38.2091 30.2091 40 28 40H24V44C24 46.2091 22.2091 48 20 48H1C0.447715 48 1.61065e-08 47.5523 0 47V28C2.57706e-07 25.7909 1.79086 24 4 24H8V20C8 17.7909 9.79086 16 12 16H15C15.5523 16 16 16.4477 16 17V24H23C23.5523 24 24 24.4477 24 25V32H32V24H24V16H16.6152C16.2755 15.9999 16.0001 15.7245 16 15.3848C16 11.3064 19.3064 8 23.3848 8H24V7.38477C24 3.30636 27.3064 0 31.3848 0ZM8 40H16V32H8V40ZM15.3848 0C15.7245 8.11499e-05 15.9999 0.275486 16 0.615234C16 4.69364 12.6936 8 8.61523 8H8V8.61523C8 12.6936 4.69364 16 0.615234 16C0.275486 15.9999 8.11822e-05 15.7245 0 15.3848V4C0 1.79086 1.79086 0 4 0H15.3848ZM47 0C47.5523 0 48 0.447715 48 1V4C48 6.20914 46.2091 8 44 8H41C40.4477 8 40 7.55228 40 7V4C40 1.79086 41.7909 0 44 0H47Z"
          fill="currentColor"
        />
      </svg>
    ),
  },

  // 6. Horizontal Rounded Pills (Figma 6062:2858)
  {
    id: 'horizontal-bars',
    label: 'Bars',
    preview: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <g fill="currentColor">
          <rect x="8" y="16.5" width="8" height="7" rx="3.5" />
          <rect x="0" y="24.5" width="24" height="7" rx="3.5" />
          <rect x="0" y="32.5" width="8" height="7" rx="3.5" />
          <rect x="0" y="40.5" width="24" height="7" rx="3.5" />
          <rect x="16" y="32.5" width="16" height="7" rx="3.5" />
          <rect x="0" y="0.5" width="16" height="7" rx="3.5" />
          <rect x="0" y="8.5" width="8" height="7" rx="3.5" />
          <rect x="16" y="8.5" width="16" height="7" rx="3.5" />
          <rect x="24" y="0.5" width="8" height="7" rx="3.5" />
          <rect x="40" y="0.5" width="8" height="7" rx="3.5" />
          <rect x="40" y="32.5" width="8" height="7" rx="3.5" />
          <rect x="32" y="24.5" width="16" height="7" rx="3.5" />
          <rect x="24" y="16.5" width="24" height="7" rx="3.5" />
          <rect x="32" y="40.5" width="16" height="7" rx="3.5" />
        </g>
      </svg>
    ),
  },

  // 7. Vertical Rounded Pills (Figma 6062:2859)
  {
    id: 'vertical-bars',
    label: 'Pills',
    preview: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <g fill="currentColor">
          <rect x="8.5" y="16" width="7" height="8" rx="3.5" />
          <rect x="8.5" y="24" width="7" height="8" rx="3.5" />
          <rect x="0.5" y="24" width="7" height="24" rx="3.5" />
          <rect x="8.5" y="40" width="7" height="8" rx="3.5" />
          <rect x="16.5" y="24" width="7" height="24" rx="3.5" />
          <rect x="8.5" y="0" width="7" height="8" rx="3.5" />
          <rect x="0.5" y="0" width="7" height="16" rx="3.5" />
          <rect x="16.5" y="8" width="7" height="8" rx="3.5" />
          <rect x="40.5" y="0" width="7" height="8" rx="3.5" />
          <rect x="40.5" y="16" width="7" height="32" rx="3.5" />
          <rect x="32.5" y="16" width="7" height="16" rx="3.5" />
          <rect x="24.5" y="0" width="7" height="24" rx="3.5" />
          <rect x="24.5" y="32" width="7" height="8" rx="3.5" />
          <rect x="32.5" y="40" width="7" height="8" rx="3.5" />
        </g>
      </svg>
    ),
  },

  // 8. Classy Connected / Matrix (Figma 6062:2860)
  {
    id: 'classy',
    label: 'Classy',
    preview: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <g fill="currentColor">
          <rect x="8" y="16.5" width="8" height="7" rx="3.5" />
          <rect x="0" y="24.5" width="24" height="7" rx="3.5" />
          <rect x="0" y="32.5" width="8" height="7" rx="3.5" />
          <rect x="0" y="40.5" width="24" height="7" rx="3.5" />
          <rect x="16" y="32.5" width="16" height="7" rx="3.5" />
          <rect x="0" y="0.5" width="16" height="7" rx="3.5" />
          <rect x="0" y="8.5" width="8" height="7" rx="3.5" />
          <rect x="16" y="8.5" width="16" height="7" rx="3.5" />
          <rect x="24" y="0.5" width="8" height="7" rx="3.5" />
          <rect x="40" y="0.5" width="8" height="7" rx="3.5" />
          <rect x="40" y="32.5" width="8" height="7" rx="3.5" />
          <rect x="32" y="24.5" width="16" height="7" rx="3.5" />
          <rect x="24" y="16.5" width="24" height="7" rx="3.5" />
          <rect x="32" y="40.5" width="16" height="7" rx="3.5" />
        </g>
      </svg>
    ),
  },
];

interface ShapeTilesProps {
  selectedShape: ShapeType;
  onSelectShape: (shape: ShapeType) => void;
  onAppBadgeClick?: () => void;
}

export const ShapeTiles: React.FC<ShapeTilesProps> = ({
  selectedShape,
  onSelectShape,
  onAppBadgeClick,
}) => {
  return (
    <div className="flex flex-wrap gap-[12px] items-start w-full" data-name="Shape Options">
      {shapeOptions.map((opt) => {
        const isSelected = selectedShape === opt.id;
        return (
          <button
            key={opt.id}
            type="button"
            onClick={() => onSelectShape(opt.id)}
            title={opt.label}
            className={`w-[116px] h-[116px] rounded-[12px] bg-white transition-all flex items-center justify-center relative cursor-pointer group ${
              isSelected
                ? 'border-2 border-[#2c2e30] shadow-[0px_2px_8px_rgba(44,46,48,0.12)] text-[#2c2e30]'
                : 'border border-[rgba(44,46,48,0.08)] text-[rgba(44,46,48,0.7)] hover:border-[rgba(44,46,48,0.24)] hover:bg-[#fafafa]'
            }`}
          >
            <div className={`transition-transform duration-150 ${isSelected ? 'scale-105' : 'group-hover:scale-105'}`}>
              {opt.preview}
            </div>
            {isSelected && (
              <span className="absolute bottom-1 text-[10px] font-medium text-[#2c2e30] tracking-wide uppercase">
                {opt.label}
              </span>
            )}
          </button>
        );
      })}

      {/* More Shapes marketing hook (Figma 6063:4912) */}
      <button
        type="button"
        onClick={onAppBadgeClick}
        className="w-[116px] h-[116px] rounded-[12px] border border-dashed border-[rgba(44,46,48,0.16)] bg-white/40 hover:bg-white hover:border-[rgba(44,46,48,0.32)] transition-all overflow-hidden relative cursor-pointer group shrink-0"
        data-node-id="6063:4912"
        data-name="More Shapes"
      >
        <p className="absolute left-1/2 -translate-x-1/2 top-[calc(50%-17px)] w-[83px] text-center font-['Inter_Tight'] font-normal text-[14px] text-[rgba(44,46,48,0.7)] leading-[18px] tracking-[0.7px] group-hover:text-[#2c2e30] transition-colors select-none">
          Unlock more in App
        </p>
        <div className="absolute flex h-[92.209px] items-center justify-center left-[-25.5px] top-[-20.5px] w-[105.028px] pointer-events-none select-none" data-node-id="6063:4914">
          <div className="-rotate-[40deg] flex-none">
            <div className="bg-[#d68a00] flex h-[18px] items-center px-[6px] py-[4px] relative rounded-[6px] w-[122px]" data-name="More Shapes Badge">
              <p className="flex-1 font-['Inter_Tight'] font-medium text-[12px] text-center text-white tracking-[0.72px] uppercase leading-none whitespace-nowrap" data-node-id="6063:4915">
                +10 more
              </p>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
};
