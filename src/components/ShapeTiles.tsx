import React from 'react';

export type ShapeType =
  | 'square'
  | 'rounded'
  | 'dots'
  | 'classy'
  | 'classy-rounded'
  | 'extra-rounded'
  | 'horizontal-bars'
  | 'vertical-bars'
  | 'diamond';

interface ShapeTileOption {
  id: ShapeType;
  label: string;
  preview: React.ReactNode;
}

export const shapeOptions: ShapeTileOption[] = [
  // 1. Classic Square
  {
    id: 'square',
    label: 'Square',
    preview: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <rect x="6" y="6" width="10" height="10" fill="#2C2E30" />
        <rect x="20" y="6" width="10" height="10" fill="#2C2E30" />
        <rect x="6" y="20" width="10" height="10" fill="#2C2E30" />
        <rect x="20" y="20" width="10" height="10" fill="#2C2E30" />
        <rect x="34" y="6" width="8" height="8" fill="#2C2E30" />
        <rect x="34" y="18" width="8" height="8" fill="#2C2E30" />
        <rect x="34" y="34" width="8" height="8" fill="#2C2E30" />
        <rect x="6" y="34" width="8" height="8" fill="#2C2E30" />
        <rect x="18" y="34" width="12" height="8" fill="#2C2E30" />
      </svg>
    ),
  },

  // 2. Rounded Square
  {
    id: 'rounded',
    label: 'Rounded',
    preview: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <rect x="6" y="6" width="10" height="10" rx="3" fill="rgba(44, 46, 48, 0.7)" />
        <rect x="20" y="6" width="10" height="10" rx="3" fill="rgba(44, 46, 48, 0.7)" />
        <rect x="6" y="20" width="10" height="10" rx="3" fill="rgba(44, 46, 48, 0.7)" />
        <rect x="20" y="20" width="10" height="10" rx="3" fill="rgba(44, 46, 48, 0.7)" />
        <rect x="34" y="6" width="8" height="8" rx="2" fill="rgba(44, 46, 48, 0.7)" />
        <rect x="34" y="18" width="8" height="8" rx="2" fill="rgba(44, 46, 48, 0.7)" />
        <rect x="34" y="34" width="8" height="8" rx="2" fill="rgba(44, 46, 48, 0.7)" />
        <rect x="6" y="34" width="8" height="8" rx="2" fill="rgba(44, 46, 48, 0.7)" />
        <rect x="18" y="34" width="12" height="8" rx="2" fill="rgba(44, 46, 48, 0.7)" />
      </svg>
    ),
  },

  // 3. Extra Rounded / Squircle
  {
    id: 'extra-rounded',
    label: 'Squircle',
    preview: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <rect x="6" y="6" width="10" height="10" rx="5" fill="rgba(44, 46, 48, 0.7)" />
        <rect x="20" y="6" width="10" height="10" rx="5" fill="rgba(44, 46, 48, 0.7)" />
        <rect x="6" y="20" width="10" height="10" rx="5" fill="rgba(44, 46, 48, 0.7)" />
        <rect x="20" y="20" width="10" height="10" rx="5" fill="rgba(44, 46, 48, 0.7)" />
        <rect x="34" y="6" width="8" height="8" rx="4" fill="rgba(44, 46, 48, 0.7)" />
        <rect x="34" y="18" width="8" height="8" rx="4" fill="rgba(44, 46, 48, 0.7)" />
        <rect x="34" y="34" width="8" height="8" rx="4" fill="rgba(44, 46, 48, 0.7)" />
        <rect x="6" y="34" width="8" height="8" rx="4" fill="rgba(44, 46, 48, 0.7)" />
        <rect x="18" y="34" width="12" height="8" rx="4" fill="rgba(44, 46, 48, 0.7)" />
      </svg>
    ),
  },

  // 4. Dot Matrix / Circular Dots
  {
    id: 'dots',
    label: 'Dots',
    preview: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <circle cx="8" cy="8" r="3.5" fill="rgba(44, 46, 48, 0.7)" />
        <circle cx="16" cy="8" r="3.5" fill="rgba(44, 46, 48, 0.7)" />
        <circle cx="24" cy="8" r="3.5" fill="rgba(44, 46, 48, 0.7)" />
        <circle cx="32" cy="8" r="3.5" fill="rgba(44, 46, 48, 0.7)" />
        <circle cx="40" cy="8" r="3.5" fill="rgba(44, 46, 48, 0.7)" />
        <circle cx="8" cy="16" r="3.5" fill="rgba(44, 46, 48, 0.7)" />
        <circle cx="24" cy="16" r="3.5" fill="rgba(44, 46, 48, 0.7)" />
        <circle cx="40" cy="16" r="3.5" fill="rgba(44, 46, 48, 0.7)" />
        <circle cx="8" cy="24" r="3.5" fill="rgba(44, 46, 48, 0.7)" />
        <circle cx="16" cy="24" r="3.5" fill="rgba(44, 46, 48, 0.7)" />
        <circle cx="32" cy="24" r="3.5" fill="rgba(44, 46, 48, 0.7)" />
        <circle cx="40" cy="24" r="3.5" fill="rgba(44, 46, 48, 0.7)" />
        <circle cx="8" cy="32" r="3.5" fill="rgba(44, 46, 48, 0.7)" />
        <circle cx="24" cy="32" r="3.5" fill="rgba(44, 46, 48, 0.7)" />
        <circle cx="40" cy="32" r="3.5" fill="rgba(44, 46, 48, 0.7)" />
        <circle cx="8" cy="40" r="3.5" fill="rgba(44, 46, 48, 0.7)" />
        <circle cx="16" cy="40" r="3.5" fill="rgba(44, 46, 48, 0.7)" />
        <circle cx="24" cy="40" r="3.5" fill="rgba(44, 46, 48, 0.7)" />
        <circle cx="32" cy="40" r="3.5" fill="rgba(44, 46, 48, 0.7)" />
        <circle cx="40" cy="40" r="3.5" fill="rgba(44, 46, 48, 0.7)" />
      </svg>
    ),
  },

  // 5. Classy Diamond / Star
  {
    id: 'diamond',
    label: 'Diamond',
    preview: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <polygon points="12,6 18,12 12,18 6,12" fill="rgba(44, 46, 48, 0.7)" />
        <polygon points="26,6 32,12 26,18 20,12" fill="rgba(44, 46, 48, 0.7)" />
        <polygon points="40,6 46,12 40,18 34,12" fill="rgba(44, 46, 48, 0.7)" />
        <polygon points="12,20 18,26 12,32 6,26" fill="rgba(44, 46, 48, 0.7)" />
        <polygon points="26,20 32,26 26,32 20,26" fill="rgba(44, 46, 48, 0.7)" />
        <polygon points="40,20 46,26 40,32 34,26" fill="rgba(44, 46, 48, 0.7)" />
        <polygon points="12,34 18,40 12,46 6,40" fill="rgba(44, 46, 48, 0.7)" />
        <polygon points="26,34 32,40 26,46 20,40" fill="rgba(44, 46, 48, 0.7)" />
        <polygon points="40,34 46,40 40,46 34,40" fill="rgba(44, 46, 48, 0.7)" />
      </svg>
    ),
  },

  // 6. Horizontal Bars
  {
    id: 'horizontal-bars',
    label: 'Bars',
    preview: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <rect x="6" y="6" width="22" height="7" rx="3.5" fill="rgba(44, 46, 48, 0.7)" />
        <rect x="32" y="6" width="10" height="7" rx="3.5" fill="rgba(44, 46, 48, 0.7)" />
        <rect x="6" y="15" width="12" height="7" rx="3.5" fill="rgba(44, 46, 48, 0.7)" />
        <rect x="22" y="15" width="20" height="7" rx="3.5" fill="rgba(44, 46, 48, 0.7)" />
        <rect x="6" y="24" width="28" height="7" rx="3.5" fill="rgba(44, 46, 48, 0.7)" />
        <rect x="38" y="24" width="4" height="7" rx="2" fill="rgba(44, 46, 48, 0.7)" />
        <rect x="6" y="33" width="10" height="7" rx="3.5" fill="rgba(44, 46, 48, 0.7)" />
        <rect x="20" y="33" width="22" height="7" rx="3.5" fill="rgba(44, 46, 48, 0.7)" />
      </svg>
    ),
  },

  // 7. Vertical Pills
  {
    id: 'vertical-bars',
    label: 'Pills',
    preview: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <rect x="6" y="6" width="7" height="22" rx="3.5" fill="rgba(44, 46, 48, 0.7)" />
        <rect x="6" y="32" width="7" height="10" rx="3.5" fill="rgba(44, 46, 48, 0.7)" />
        <rect x="15" y="6" width="7" height="12" rx="3.5" fill="rgba(44, 46, 48, 0.7)" />
        <rect x="15" y="22" width="7" height="20" rx="3.5" fill="rgba(44, 46, 48, 0.7)" />
        <rect x="24" y="6" width="7" height="28" rx="3.5" fill="rgba(44, 46, 48, 0.7)" />
        <rect x="24" y="38" width="7" height="4" rx="2" fill="rgba(44, 46, 48, 0.7)" />
        <rect x="33" y="6" width="7" height="10" rx="3.5" fill="rgba(44, 46, 48, 0.7)" />
        <rect x="33" y="20" width="7" height="22" rx="3.5" fill="rgba(44, 46, 48, 0.7)" />
      </svg>
    ),
  },

  // 8. Classy Connected
  {
    id: 'classy',
    label: 'Classy',
    preview: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <path
          d="M6 10C6 7.79086 7.79086 6 10 6H16V16H6V10Z"
          fill="rgba(44, 46, 48, 0.7)"
        />
        <path
          d="M20 6H30V12C30 14.2091 28.2091 16 26 16H20V6Z"
          fill="rgba(44, 46, 48, 0.7)"
        />
        <path
          d="M34 6H42V14C42 15.1046 41.1046 16 40 16H34V6Z"
          fill="rgba(44, 46, 48, 0.7)"
        />
        <path
          d="M6 20H16V28C16 30.2091 14.2091 32 12 32H6V20Z"
          fill="rgba(44, 46, 48, 0.7)"
        />
        <path
          d="M20 20H28C30.2091 20 32 21.7909 32 24V32H20V20Z"
          fill="rgba(44, 46, 48, 0.7)"
        />
        <path
          d="M34 22C34 20.8954 34.8954 20 36 20H42V30C42 31.1046 41.1046 32 40 32H34V22Z"
          fill="rgba(44, 46, 48, 0.7)"
        />
        <path
          d="M8 36C8 34.8954 8.89543 34 10 34H18V42H10C8.89543 42 8 41.1046 8 40V36Z"
          fill="rgba(44, 46, 48, 0.7)"
        />
        <path
          d="M22 34H32V40C32 41.1046 31.1046 42 30 42H22V34Z"
          fill="rgba(44, 46, 48, 0.7)"
        />
      </svg>
    ),
  },

  // 9. Classy Rounded / Fluid Blobs
  {
    id: 'classy-rounded',
    label: 'Fluid',
    preview: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <rect x="6" y="6" width="10" height="10" rx="4" fill="rgba(44, 46, 48, 0.7)" />
        <rect x="20" y="6" width="10" height="10" rx="2" fill="rgba(44, 46, 48, 0.7)" />
        <path
          d="M34 6H40C41.1046 6 42 6.89543 42 8V14C42 15.1046 41.1046 16 40 16H36C34.8954 16 34 15.1046 34 14V6Z"
          fill="rgba(44, 46, 48, 0.7)"
        />
        <rect x="6" y="20" width="10" height="10" rx="3" fill="rgba(44, 46, 48, 0.7)" />
        <circle cx="25" cy="25" r="5" fill="rgba(44, 46, 48, 0.7)" />
        <rect x="34" y="20" width="8" height="12" rx="4" fill="rgba(44, 46, 48, 0.7)" />
        <rect x="6" y="34" width="12" height="8" rx="4" fill="rgba(44, 46, 48, 0.7)" />
        <rect x="22" y="34" width="8" height="8" rx="3" fill="rgba(44, 46, 48, 0.7)" />
        <circle cx="38" cy="38" r="4" fill="rgba(44, 46, 48, 0.7)" />
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
                ? 'border-2 border-[#2c2e30] shadow-[0px_2px_8px_rgba(44,46,48,0.12)]'
                : 'border border-[rgba(44,46,48,0.08)] hover:border-[rgba(44,46,48,0.24)] hover:bg-[#fafafa]'
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

      {/* 10th card: +10 more in the App */}
      <button
        type="button"
        onClick={onAppBadgeClick}
        className="w-[116px] h-[116px] rounded-[12px] border border-dashed border-[rgba(44,46,48,0.2)] bg-transparent hover:bg-white/80 transition-all flex flex-col items-center justify-center cursor-pointer group"
      >
        <div className="text-[14px] text-[rgba(44,46,48,0.7)] text-center tracking-[0.7px] leading-[18px] group-hover:text-[#2c2e30]">
          <p className="font-semibold">+10 more</p>
          <p>in the App</p>
        </div>
      </button>
    </div>
  );
};
