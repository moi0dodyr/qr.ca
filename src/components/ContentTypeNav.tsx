import React from 'react';
import {
  GlobeIcon,
  IdCardIcon,
  LinkFillIcon,
  NoteIcon,
  UserIcon,
  ForkKnifeIcon,
  ChevronDownIcon,
} from './icons';

export type ContentTabType =
  | 'website'
  | 'vcard'
  | 'links'
  | 'text'
  | 'contact'
  | 'menu'
  | 'more';

interface TabItem {
  id: ContentTabType;
  label: string;
  icon: (isActive: boolean) => React.ReactNode;
}

const tabs: TabItem[] = [
  {
    id: 'website',
    label: 'Website',
    icon: (isActive) => <GlobeIcon className="w-4 h-4" color={isActive ? '#ffffff' : 'currentColor'} />,
  },
  {
    id: 'vcard',
    label: 'vCard',
    icon: (isActive) => <IdCardIcon className="w-4 h-4" color={isActive ? '#ffffff' : 'currentColor'} />,
  },
  {
    id: 'links',
    label: 'Links Page',
    icon: (isActive) => <LinkFillIcon className="w-4 h-4" color={isActive ? '#ffffff' : 'currentColor'} />,
  },
  {
    id: 'text',
    label: 'Text',
    icon: (isActive) => <NoteIcon className="w-4 h-4" color={isActive ? '#ffffff' : 'currentColor'} />,
  },
  {
    id: 'contact',
    label: 'Contact',
    icon: (isActive) => <UserIcon className="w-4 h-4" color={isActive ? '#ffffff' : 'currentColor'} />,
  },
  {
    id: 'menu',
    label: 'Restaurant menu',
    icon: (isActive) => <ForkKnifeIcon className="w-4 h-4" color={isActive ? '#ffffff' : 'currentColor'} />,
  },
  {
    id: 'more',
    label: 'More',
    icon: (isActive) => <ChevronDownIcon className="w-4 h-4" color={isActive ? '#ffffff' : 'currentColor'} />,
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
    <div className="w-full bg-white border-b border-[rgba(44,46,48,0.1)] flex items-center justify-between overflow-x-auto scrollbar-none select-none">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onSelectTab(tab.id)}
            className={`flex items-center gap-3 h-[72px] px-4 shrink-0 transition-colors cursor-pointer relative ${
              isActive
                ? 'border-b-2 border-[#00a7f5]'
                : 'border-b-2 border-transparent hover:bg-neutral-50/70'
            }`}
          >
            {/* Icon circle */}
            <div
              className={`size-[32px] rounded-full flex items-center justify-center transition-colors shrink-0 ${
                isActive
                  ? 'bg-[#00a7f5] text-white shadow-[0px_2px_4px_rgba(0,167,245,0.3)]'
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
