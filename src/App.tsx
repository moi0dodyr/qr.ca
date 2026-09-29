import { useState } from 'react';
import QRCodeStyling from 'qr-code-styling';
import { Header } from './components/Header';
import { HeroHeadline } from './components/HeroHeadline';
import { ContentTypeNav, type ContentTabType } from './components/ContentTypeNav';
import { ContentForm } from './components/ContentForm';
import { DownloadPanel } from './components/DownloadPanel';
import { SignUpModal } from './components/SignUpModal';
import type { ShapeType } from './components/ShapeTiles';

export default function App() {
  const [urlValue, setUrlValue] = useState('https://www.acne.com/');
  const [selectedShape, setSelectedShape] = useState<ShapeType>('square');
  const [selectedColor, setSelectedColor] = useState<string>('#2c2e30');
  const [activeContentTab, setActiveContentTab] = useState<ContentTabType>('website');

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('Your code is ready to download and customize!');
  const [modalDescription, setModalDescription] = useState(
    'Sign up to the platform to download your QR code in high-resolution vector and raster formats (SVG, PNG, JPG), customize styling, and manage all your Canadian QR codes.'
  );

  // QRCodeStyling reference for programmatic direct download
  const [qrCodeInstance, setQrCodeInstance] = useState<QRCodeStyling | null>(null);

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

  const handleDirectDownload = () => {
    if (qrCodeInstance) {
      qrCodeInstance.download({
        name: 'qr-ca-code',
        extension: 'png',
      });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#2c2e30] flex flex-col font-['Inter_Tight'] selection:bg-[#00a7f5]/20 selection:text-[#00a7f5]">
      {/* Top Header */}
      <Header
        onSignUpClick={() => {
          setModalTitle('Get Started with QR.ca');
          setModalDescription(
            'Create free branded QR codes in seconds, share them with your Canadian audience, and track scan performance.'
          );
          setIsModalOpen(true);
        }}
        onLogInClick={() => {
          setModalTitle('Welcome Back to QR.ca');
          setModalDescription(
            'Log in to manage your active QR codes, review analytics, and download high-resolution marketing assets.'
          );
          setIsModalOpen(true);
        }}
      />

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
              urlValue={urlValue}
              onUrlChange={setUrlValue}
              selectedShape={selectedShape}
              onSelectShape={setSelectedShape}
              selectedColor={selectedColor}
              onSelectColor={setSelectedColor}
              activeContentTab={activeContentTab}
              onOpenSignUpModal={handleOpenSignUpModalFromSource}
            />

            {/* Step 3 */}
            <DownloadPanel
              urlValue={urlValue}
              shape={selectedShape}
              color={selectedColor}
              onDownloadClick={handleDownloadClick}
              onTrackScansToggle={handleTrackScansToggle}
              onInstanceReady={setQrCodeInstance}
            />
          </div>
        </div>
      </main>

      {/* Sign-Up / Completion Modal */}
      <SignUpModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onDirectDownload={handleDirectDownload}
        title={modalTitle}
        description={modalDescription}
      />
    </div>
  );
}
