import React, { useEffect, useRef } from 'react';
import {
  PLATFORM_REGISTRY,
  type PlatformLogoKey,
} from '../utils/links';
import { PlatformIcon } from './platformIcons';
import { X } from 'lucide-react';

interface PlatformIconPickerProps {
  currentPlatform: PlatformLogoKey;
  onSelect: (platform: PlatformLogoKey) => void;
  onClose: () => void;
}

export const PlatformIconPicker: React.FC<PlatformIconPickerProps> = ({
  currentPlatform,
  onSelect,
  onClose,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const platforms = Object.values(PLATFORM_REGISTRY);

  return (
    <div
      ref={containerRef}
      className="absolute top-full left-0 mt-2 z-50 bg-white border border-[rgba(44,46,48,0.12)] rounded-[16px] shadow-xl p-3 w-[280px] sm:w-[320px] flex flex-col gap-2.5 animate-in fade-in zoom-in-95 duration-150"
    >
      <div className="flex items-center justify-between pb-1.5 border-b border-[rgba(44,46,48,0.06)]">
        <span className="font-['Inter_Tight'] font-semibold text-[13px] text-[#2c2e30]">
          Select Platform Icon
        </span>
        <button
          type="button"
          onClick={onClose}
          className="text-neutral-400 hover:text-[#2c2e30] p-1 rounded-md transition-colors cursor-pointer"
        >
          <X className="size-3.5" />
        </button>
      </div>

      <div className="grid grid-cols-2 gap-1.5 max-h-[260px] overflow-y-auto pr-1">
        {platforms.map((cfg) => {
          const isSelected = cfg.key === currentPlatform;
          return (
            <button
              key={cfg.key}
              type="button"
              onClick={() => onSelect(cfg.key)}
              className={`flex items-center gap-2 p-1.5 rounded-[10px] text-left transition-all cursor-pointer ${
                isSelected
                  ? 'bg-[#9F87F7]/10 ring-1 ring-[#9F87F7]'
                  : 'hover:bg-neutral-50'
              }`}
            >
              <div
                style={{ backgroundColor: cfg.bgColor, color: cfg.color }}
                className="size-7 rounded-[8px] flex items-center justify-center shrink-0"
              >
                <PlatformIcon platform={cfg.key} className="size-4" />
              </div>
              <span className="text-[12px] font-medium text-[#2c2e30] truncate">
                {cfg.name}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
