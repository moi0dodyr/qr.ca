import React from 'react';
import {
  GlobeOutlineIcon,
  IdCardOutlineIcon,
  LinkOutlineIcon,
  NoteOutlineIcon,
  StorefrontOutlineIcon,
  ForkKnifeOutlineIcon,
  ChevronOutlineIcon,
} from './icons';

import { type ContentTabType, tabColors } from '../utils/theme';

export type { ContentTabType };

interface TabItem {
  id: ContentTabType;
  label: string;
  icon: (isActive: boolean) => React.ReactNode;
}

const tabs: TabItem[] = [
  {
    id: 'website',
    label: 'Website',
    icon: (isActive) => (
      <GlobeOutlineIcon className="size-4" color={isActive ? '#ffffff' : 'rgba(44, 46, 48, 0.7)'} />
    ),
  },
  {
    id: 'vcard',
    label: 'vCard',
    icon: (isActive) => (
      <IdCardOutlineIcon className="size-4" color={isActive ? '#ffffff' : 'rgba(44, 46, 48, 0.7)'} />
    ),
  },
  {
    id: 'links',
    label: 'Multi-link page',
    icon: (isActive) => (
      <LinkOutlineIcon className="size-4" color={isActive ? '#ffffff' : 'rgba(44, 46, 48, 0.7)'} />
    ),
  },
  {
    id: 'text',
    label: 'Plain text',
    icon: (isActive) => (
      <NoteOutlineIcon className="size-4" color={isActive ? '#ffffff' : 'rgba(44, 46, 48, 0.7)'} />
    ),
  },
  {
    id: 'appstore',
    label: 'App store link',
    icon: (isActive) => (
      <StorefrontOutlineIcon className="size-4" color={isActive ? '#ffffff' : 'rgba(44, 46, 48, 0.7)'} />
    ),
  },
  {
    id: 'menu',
    label: 'Restaurant menu',
    icon: (isActive) => (
      <ForkKnifeOutlineIcon className="size-4" color={isActive ? '#ffffff' : 'rgba(44, 46, 48, 0.7)'} />
    ),
  },
  {
    id: 'more',
    label: 'More',
    icon: (isActive) => (
      <ChevronOutlineIcon className="size-4" color={isActive ? '#ffffff' : 'rgba(44, 46, 48, 0.7)'} />
    ),
  },
];

interface ContentTypeNavProps {
  activeTab: ContentTabType;
  onSelectTab: (tab: ContentTabType) => void;
}

export const ContentTypeNav: React.FC<ContentTypeNavProps> = ({
  activeTab,
  onSelectTab,
}) => {
  return (
    <div className="w-full bg-white border-b border-[rgba(44,46,48,0.08)] flex items-center justify-between overflow-x-auto scrollbar-none select-none">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        const colorHex = tabColors[tab.id];
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onSelectTab(tab.id)}
            style={isActive ? { borderBottomColor: colorHex } : undefined}
            className={`flex items-center gap-3 h-[72px] px-4 shrink-0 transition-colors cursor-pointer relative ${
              isActive ? 'border-b-2' : 'border-b-2 border-transparent hover:bg-neutral-50/70'
            }`}
          >
            {/* Icon circle (no drop shadow) */}
            <div
              style={isActive ? { backgroundColor: colorHex } : undefined}
              className={`size-[32px] rounded-full flex items-center justify-center transition-colors shrink-0 ${
                isActive
                  ? 'text-white'
                  : 'border border-[rgba(44,46,48,0.08)] bg-white text-[rgba(44,46,48,0.7)]'
              }`}
            >
              {tab.icon(isActive)}
            </div>

            {/* Label */}
            <span
              className={`font-['Inter_Tight'] font-medium text-[16px] tracking-[0.32px] whitespace-nowrap transition-colors ${
                isActive ? 'text-[#2c2e30]' : 'text-[rgba(44,46,48,0.7)]'
              }`}
            >
              {tab.label}
            </span>
          </button>
        );
      })}
    </div>
  );
};
