import { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { HeroHeadline } from './components/HeroHeadline';
import { ContentTypeNav, type ContentTabType } from './components/ContentTypeNav';
import { ContentForm } from './components/ContentForm';
import { DownloadPanel } from './components/DownloadPanel';
import { SignUpModal } from './components/SignUpModal';
import type { ShapeType } from './components/ShapeTiles';
import { tabColors } from './utils/theme';
import { initialVCardData, generateVCardString, type VCardData } from './utils/vcard';
import { initialLinksPageData, generateLinksPagePayload, type LinksPageData } from './utils/links';
import { initialAppStoreLinkData, generateAppStorePayload, type AppStoreLinkData } from './utils/appStore';

export default function App() {
  // Content type states
  const [websiteUrl, setWebsiteUrl] = useState('https://www.acme.com/');
  const [vCardData, setVCardData] = useState<VCardData>(initialVCardData);
  const [linksData, setLinksData] = useState<LinksPageData>(initialLinksPageData);
  const [textContent, setTextContent] = useState('Welcome to our flagship Toronto store! Scan for special in-store perks.');
  const [appStoreData, setAppStoreData] = useState<AppStoreLinkData>(initialAppStoreLinkData);
  const [menuUrl, setMenuUrl] = useState('https://menu.qr.ca/bistro-toronto');

  const [selectedShape, setSelectedShape] = useState<ShapeType>('square');
  const [selectedColor, setSelectedColor] = useState<string>('#2c2e30');
  const [activeContentTab, setActiveContentTab] = useState<ContentTabType>('website');

  // Compute active QR payload based on the active tab and data
  const activePayload = useMemo(() => {
    switch (activeContentTab) {
      case 'website':
        return websiteUrl.trim() || 'https://www.acme.com/';
      case 'vcard':
        return generateVCardString(vCardData);
      case 'links':
        return generateLinksPagePayload(linksData);
      case 'text':
        return textContent || ' ';
      case 'appstore':
        return generateAppStorePayload(appStoreData);
      case 'menu':
        return menuUrl.trim() || 'https://menu.qr.ca';
      default:
        return websiteUrl.trim() || 'https://www.acme.com/';
    }
  }, [activeContentTab, websiteUrl, vCardData, linksData, textContent, appStoreData, menuUrl]);

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('Your QR code is ready');
  const [modalDescription, setModalDescription] = useState(
    'Sign up free to download it in SVG, PNG, JPG, PDF or EPS.'
  );

  const openModal = (title: string, description: string) => {
    setModalTitle(title);
    setModalDescription(description);
    setIsModalOpen(true);
  };

  const handleDownloadClick = () => {
    openModal('Your QR code is ready', 'Sign up free to download it in SVG, PNG, JPG, PDF or EPS.');
  };

  const handleTrackScansToggle = () => {
    openModal('Track every scan', 'Sign up to see scan analytics and change where your code points without reprinting it.');
  };

  const handleOpenSignUpModalFromSource = (source: string) => {
    if (source === 'shape-presets') {
      openModal('Unlock more shapes', 'Sign up to get every shape, frame and color.');
    } else if (source.startsWith('logo')) {
      openModal('Add your logo', 'Sign up to put your logo on the code.');
    } else {
      openModal('Add a frame', 'Sign up to add a frame with your own call to action.');
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#2c2e30] flex flex-col font-['Inter_Tight'] selection:bg-[#00a7f5]/20 selection:text-[#00a7f5]">
      {/* Top Header */}
      <Header />

      {/* Main Generator Section */}
      <main className="w-full max-w-[1148px] mx-auto px-4 sm:px-6 py-8 md:pt-[56px] md:pb-12 flex flex-col gap-[32px] items-center">
        {/* Hero Section */}
        <HeroHeadline />

        {/* Content Type Navigation */}
        <div className="w-full flex flex-col gap-[20px] items-start">
          <ContentTypeNav
            activeTab={activeContentTab}
            onSelectTab={setActiveContentTab}
          />

          {/* Generator Body (Step 1 & 2 on Left, Step 3 on Right) */}
          <div
            className="flex flex-col lg:flex-row gap-[20px] items-start w-full"
            data-name="Generator Content"
          >
            {/* Steps 1 & 2 */}
            <ContentForm
              websiteUrl={websiteUrl}
              onWebsiteUrlChange={setWebsiteUrl}
              vCardData={vCardData}
              onVCardDataChange={setVCardData}
              linksData={linksData}
              onLinksDataChange={setLinksData}
              textContent={textContent}
              onTextContentChange={setTextContent}
              appStoreData={appStoreData}
              onAppStoreDataChange={setAppStoreData}
              menuUrl={menuUrl}
              onMenuUrlChange={setMenuUrl}
              selectedShape={selectedShape}
              onSelectShape={setSelectedShape}
              selectedColor={selectedColor}
              onSelectColor={setSelectedColor}
              activeContentTab={activeContentTab}
              onOpenSignUpModal={handleOpenSignUpModalFromSource}
            />

            {/* Step 3 */}
            <DownloadPanel
              urlValue={activePayload}
              shape={selectedShape}
              color={selectedColor}
              accentColor={tabColors[activeContentTab]}
              onDownloadClick={handleDownloadClick}
              onTrackScansToggle={handleTrackScansToggle}
            />
          </div>
        </div>
      </main>

      {/* Sign-Up / Completion Modal */}
      <SignUpModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={modalTitle}
        description={modalDescription}
      />
    </div>
  );
}
