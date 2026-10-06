// App store link (dynamic): SRS v2 [User] - Code creation - step 2.
// Fields: App Store URL, Google Play URL, Fallback URL.
// Rules: at least one store link; fallback required.

export interface AppStoreLinkData {
  appStoreUrl: string;
  googlePlayUrl: string;
  fallbackUrl: string;
}

// Mock demo values for the home page.
export const initialAppStoreLinkData: AppStoreLinkData = {
  appStoreUrl: 'https://apps.apple.com/app/acme/id0000000000',
  googlePlayUrl: 'https://play.google.com/store/apps/details?id=com.acme.app',
  fallbackUrl: 'https://www.acme.com/app',
};

export const APP_STORE_DEMO_PAYLOAD = 'https://www.acme.com/app';

// Home-page demo payload (PG-16): the real code encodes a redirect link that
// picks the store by device. Here the preview encodes the fallback, or the
// first filled store link when the fallback is empty.
export function generateAppStorePayload(data: AppStoreLinkData): string {
  return (
    data.fallbackUrl.trim() ||
    data.appStoreUrl.trim() ||
    data.googlePlayUrl.trim() ||
    APP_STORE_DEMO_PAYLOAD
  );
}
