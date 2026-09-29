export type PlatformLogoKey =
  | 'website'
  | 'instagram'
  | 'tiktok'
  | 'linkedin'
  | 'youtube'
  | 'x'
  | 'github'
  | 'facebook'
  | 'spotify'
  | 'discord'
  | 'email'
  | 'phone';

export interface LinkItem {
  id: string;
  title: string;
  url: string;
  platform: PlatformLogoKey;
  enabled: boolean;
}

export interface LinksPageData {
  profileTitle: string;
  bioUrlSlug: string;
  description: string;
  links: LinkItem[];
}

export interface PlatformConfig {
  key: PlatformLogoKey;
  name: string;
  color: string;
  bgColor: string;
  placeholder: string;
  defaultTitle: string;
}

export const PLATFORM_REGISTRY: Record<PlatformLogoKey, PlatformConfig> = {
  website: {
    key: 'website',
    name: 'Website / Portfolio',
    color: '#00A7F5',
    bgColor: '#E6F6FE',
    placeholder: 'https://example.com',
    defaultTitle: 'My Website',
  },
  instagram: {
    key: 'instagram',
    name: 'Instagram',
    color: '#E1306C',
    bgColor: '#FDF2F5',
    placeholder: 'https://instagram.com/username',
    defaultTitle: 'Follow on Instagram',
  },
  tiktok: {
    key: 'tiktok',
    name: 'TikTok',
    color: '#000000',
    bgColor: '#F4F4F5',
    placeholder: 'https://tiktok.com/@username',
    defaultTitle: 'Watch on TikTok',
  },
  linkedin: {
    key: 'linkedin',
    name: 'LinkedIn',
    color: '#0A66C2',
    bgColor: '#EDF5FD',
    placeholder: 'https://linkedin.com/in/username',
    defaultTitle: 'Connect on LinkedIn',
  },
  youtube: {
    key: 'youtube',
    name: 'YouTube',
    color: '#FF0000',
    bgColor: '#FEF2F2',
    placeholder: 'https://youtube.com/@channel',
    defaultTitle: 'Subscribe on YouTube',
  },
  x: {
    key: 'x',
    name: 'X (Twitter)',
    color: '#111111',
    bgColor: '#F4F4F5',
    placeholder: 'https://x.com/username',
    defaultTitle: 'Follow on X',
  },
  github: {
    key: 'github',
    name: 'GitHub',
    color: '#24292F',
    bgColor: '#F1F3F5',
    placeholder: 'https://github.com/username',
    defaultTitle: 'GitHub Profile',
  },
  facebook: {
    key: 'facebook',
    name: 'Facebook',
    color: '#1877F2',
    bgColor: '#EDF4FE',
    placeholder: 'https://facebook.com/username',
    defaultTitle: 'Follow on Facebook',
  },
  spotify: {
    key: 'spotify',
    name: 'Spotify',
    color: '#1DB954',
    bgColor: '#F0FBF4',
    placeholder: 'https://open.spotify.com/artist/...',
    defaultTitle: 'Listen on Spotify',
  },
  discord: {
    key: 'discord',
    name: 'Discord',
    color: '#5865F2',
    bgColor: '#F1F2FE',
    placeholder: 'https://discord.gg/invitecode',
    defaultTitle: 'Join Discord Server',
  },
  email: {
    key: 'email',
    name: 'Email / Newsletter',
    color: '#EA4335',
    bgColor: '#FEF2F1',
    placeholder: 'mailto:hello@example.com',
    defaultTitle: 'Send an Email',
  },
  phone: {
    key: 'phone',
    name: 'Phone / SMS',
    color: '#00BA7F',
    bgColor: '#EAF8F3',
    placeholder: 'tel:+14165550192',
    defaultTitle: 'Call or Text',
  },
};

export const initialLinksPageData: LinksPageData = {
  profileTitle: 'Alex Morgan',
  bioUrlSlug: 'alex-portfolio',
  description: 'Digital creator & designer based in Toronto, ON.',
  links: [
    {
      id: 'link-1',
      title: 'Personal Portfolio',
      url: 'https://startup.ca',
      platform: 'website',
      enabled: true,
    },
    {
      id: 'link-2',
      title: 'Instagram Photos & Stories',
      url: 'https://instagram.com/alexmorgan',
      platform: 'instagram',
      enabled: true,
    },
    {
      id: 'link-3',
      title: 'LinkedIn Network',
      url: 'https://linkedin.com/in/alexmorgan',
      platform: 'linkedin',
      enabled: true,
    },
  ],
};

/**
 * Creates a new link item
 */
export function createNewLink(platform: PlatformLogoKey = 'website'): LinkItem {
  const cfg = PLATFORM_REGISTRY[platform];
  const uniqueId = 'link-' + Math.random().toString(36).substring(2, 9);
  return {
    id: uniqueId,
    title: cfg.defaultTitle,
    url: cfg.placeholder,
    platform,
    enabled: true,
  };
}

/**
 * Reorders links array moving item up or down
 */
export function reorderLinks(
  links: LinkItem[],
  fromIndex: number,
  direction: 'up' | 'down'
): LinkItem[] {
  const targetIndex = direction === 'up' ? fromIndex - 1 : fromIndex + 1;
  if (targetIndex < 0 || targetIndex >= links.length) return links;

  const copy = [...links];
  const [removed] = copy.splice(fromIndex, 1);
  copy.splice(targetIndex, 0, removed);
  return copy;
}

/**
 * Adds a new link to the array
 */
export function addLink(links: LinkItem[], platform: PlatformLogoKey = 'website'): LinkItem[] {
  return [...links, createNewLink(platform)];
}

/**
 * Removes a link by ID
 */
export function removeLink(links: LinkItem[], id: string): LinkItem[] {
  return links.filter((link) => link.id !== id);
}

/**
 * Updates a link by ID
 */
export function updateLink(links: LinkItem[], id: string, updates: Partial<LinkItem>): LinkItem[] {
  return links.map((link) => (link.id === id ? { ...link, ...updates } : link));
}

/**
 * Generates the QR destination payload for the bio link page
 */
export function generateLinksPagePayload(data: LinksPageData): string {
  const cleanSlug = data.bioUrlSlug.trim() || 'my-links';
  return `https://qr.ca/${cleanSlug}`;
}
