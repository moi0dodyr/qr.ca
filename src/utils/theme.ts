export type ContentTabType =
  | 'website'
  | 'vcard'
  | 'links'
  | 'text'
  | 'appstore'
  | 'menu'
  | 'more';

export const tabColors: Record<ContentTabType, string> = {
  website: '#00A7F5',
  vcard: '#C778D9',
  links: '#9F87F7',
  text: '#5F9BFE',
  appstore: '#00BA7F',
  menu: '#D68A00',
  more: '#00A7F5',
};

export function hexToRgba(hex: string, alpha: number): string {
  const cleanHex = hex.replace('#', '');
  const r = parseInt(cleanHex.substring(0, 2), 16);
  const g = parseInt(cleanHex.substring(2, 4), 16);
  const b = parseInt(cleanHex.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export interface DownloadPanelTheme {
  panelBg: string;
  panelBorder: string;
  buttonBg: string;
  buttonBorder: string;
  buttonShadow: string;
  buttonActiveShadow: string;
}

export function getDownloadPanelTheme(hex: string): DownloadPanelTheme {
  return {
    panelBg: hexToRgba(hex, 0.08),
    panelBorder: hexToRgba(hex, 0.12),
    buttonBg: `linear-gradient(to bottom, ${hexToRgba(hex, 0.24)}, ${hexToRgba(hex, 0.08)})`,
    buttonBorder: hexToRgba(hex, 0.36),
    buttonShadow: `0px 4px 0px 0px ${hexToRgba(hex, 0.25)}`,
    buttonActiveShadow: `0px 2px 0px 0px ${hexToRgba(hex, 0.25)}`,
  };
}
