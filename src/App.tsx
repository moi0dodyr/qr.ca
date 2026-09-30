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

export default function App() {
  // Content type states
  const [websiteUrl, setWebsiteUrl] = useState('https://www.acme.com/');
  const [vCardData, setVCardData] = useState<VCardData>(initialVCardData);
  const [linksData, setLinksData] = useState<LinksPageData>(initialLinksPageData);
  const [textContent, setTextContent] = useState('Welcome to our flagship Toronto store! Scan for special in-store perks.');
  const [contactNumber, setContactNumber] = useState('+1 (800) 555-QRCA');
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
      case 'contact':
        return contactNumber.trim()
          ? contactNumber.startsWith('tel:')
            ? contactNumber
            : `tel:${contactNumber.trim()}`
          : '+1 (800) 555-QRCA';
      case 'menu':
        return menuUrl.trim() || 'https://menu.qr.ca';
      default:
        return websiteUrl.trim() || 'https://www.acme.com/';
    }
  }, [activeContentTab, websiteUrl, vCardData, linksData, textContent, contactNumber, menuUrl]);

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('Your code is ready to download and customize!');
  const [modalDescription, setModalDescription] = useState(
    'Sign up to the platform to download your QR code in high-resolution vector and raster formats (SVG, PNG, JPG), customize styling, and manage all your Canadian QR codes.'
  );

  const handleDownloadClick = () => {
    setModalTitle('Your code is ready to download and customize!');
    setModalDescription(
      'Sign up to QR.ca to download your QR code in crisp vector and high-res raster formats (SVG, PNG, JPG), enable scan analytics, and keep your links updated anytime.'
    );
    setIsModalOpen(true);
  };

  const handleTrackScansToggle = () => {
    setModalTitle('Unlock Dynamic Scan Tracking');
    setModalDescription(
      'Track scans, visitor locations, device types, and change your destination URL without re-printing. Sign up for QR.ca Premium to activate dynamic tracking!'
    );
    setIsModalOpen(true);
  };

  const handleOpenSignUpModalFromSource = (source: string) => {
    if (source === 'shape-presets') {
      setModalTitle('Access 10+ More Custom Shapes');
      setModalDescription(
        'Sign up to QR.ca to unlock our full library of Canadian-designed QR module styles, custom frames, and gradient colors.'
      );
    } else if (source.startsWith('logo')) {
      setModalTitle('Add Your Custom Brand Logo');
      setModalDescription(
        'Upload high-resolution brand logos, vector icons, or Canadian badges directly onto your QR codes with an account.'
      );
    } else {
      setModalTitle('Customize with Advanced Frames');
      setModalDescription(
        'Boost your scan rates with branded call-to-action frames and custom text tags by signing up.'
      );
    }
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-[#2c2e30] flex flex-col font-['Inter_Tight'] selection:bg-[#00a7f5]/20 selection:text-[#00a7f5]">
      {/* Top Header */}
      <Header />

      {/* Main Generator Section */}
      <main className="w-full max-w-[1148px] mx-auto px-4 sm:px-6 py-8 md:py-12 flex flex-col gap-[32px] md:gap-[40px] items-center">
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
              contactNumber={contactNumber}
              onContactNumberChange={setContactNumber}
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
