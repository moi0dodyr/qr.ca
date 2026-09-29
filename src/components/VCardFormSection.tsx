import React, { useState } from 'react';
import type { VCardData } from '../utils/vcard';
import { ChevronDown, Building2, MapPin, Globe } from 'lucide-react';

interface VCardFormSectionProps {
  data: VCardData;
  onChange: (data: VCardData) => void;
}

export const VCardFormSection: React.FC<VCardFormSectionProps> = ({ data, onChange }) => {
  const [openSections, setOpenSections] = useState({
    work: true,
    address: false,
    online: false,
  });

  const toggleSection = (key: 'work' | 'address' | 'online') => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const updateField = (field: keyof VCardData, value: string) => {
    onChange({ ...data, [field]: value });
  };

  // Helper count badges
  const workCount = [data.company, data.jobTitle, data.workPhone, data.fax].filter((v) => Boolean(v && v.trim())).length;
  const addressCount = [data.street, data.city, data.state, data.zipCode, data.country].filter((v) => Boolean(v && v.trim())).length;
  const onlineCount = [data.website, data.notes].filter((v) => Boolean(v && v.trim())).length;

  return (
    <div className="flex flex-col gap-4 w-full" data-name="vCard Form Section">
      {/* ── 1. Primary Information ── */}
      <div className="bg-white border border-[rgba(44,46,48,0.1)] rounded-[16px] p-4 flex flex-col gap-3">
        <h3 className="font-['Inter_Tight'] font-semibold text-[14px] text-[#2c2e30] flex items-center justify-between">
          <span>Primary Contact</span>
          <span className="text-[12px] font-normal text-neutral-400">Core details</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="flex flex-col gap-1">
            <label className="text-[13px] font-medium text-[#2c2e30]">First Name *</label>
            <input
              type="text"
              placeholder="e.g. Alex"
              value={data.firstName}
              onChange={(e) => updateField('firstName', e.target.value)}
              className="bg-neutral-50/50 border border-[rgba(44,46,48,0.16)] h-[42px] px-3 rounded-[10px] text-[15px] text-[#2c2e30] focus:outline-none focus:border-[#C778D9] focus:ring-2 focus:ring-[#C778D9]/20 transition-all placeholder:text-neutral-400"
            />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex justify-between items-center">
              <label className="text-[13px] font-medium text-[#2c2e30]">Last Name</label>
              <span className="text-[11px] text-neutral-400 font-normal">Optional</span>
            </div>
            <input
              type="text"
              placeholder="e.g. Morgan"
              value={data.lastName}
              onChange={(e) => updateField('lastName', e.target.value)}
              className="bg-neutral-50/50 border border-[rgba(44,46,48,0.16)] h-[42px] px-3 rounded-[10px] text-[15px] text-[#2c2e30] focus:outline-none focus:border-[#C778D9] focus:ring-2 focus:ring-[#C778D9]/20 transition-all placeholder:text-neutral-400"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="flex flex-col gap-1">
            <div className="flex justify-between items-center">
              <label className="text-[13px] font-medium text-[#2c2e30]">Mobile Phone</label>
              <span className="text-[11px] text-neutral-400 font-normal">Optional</span>
            </div>
            <input
              type="tel"
              placeholder="+1 (416) 555-0192"
              value={data.cellPhone}
              onChange={(e) => updateField('cellPhone', e.target.value)}
              className="bg-neutral-50/50 border border-[rgba(44,46,48,0.16)] h-[42px] px-3 rounded-[10px] text-[15px] text-[#2c2e30] focus:outline-none focus:border-[#C778D9] focus:ring-2 focus:ring-[#C778D9]/20 transition-all placeholder:text-neutral-400"
            />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex justify-between items-center">
              <label className="text-[13px] font-medium text-[#2c2e30]">Work Email</label>
              <span className="text-[11px] text-neutral-400 font-normal">Optional</span>
            </div>
            <input
              type="email"
              placeholder="alex@startup.ca"
              value={data.email}
              onChange={(e) => updateField('email', e.target.value)}
              className="bg-neutral-50/50 border border-[rgba(44,46,48,0.16)] h-[42px] px-3 rounded-[10px] text-[15px] text-[#2c2e30] focus:outline-none focus:border-[#C778D9] focus:ring-2 focus:ring-[#C778D9]/20 transition-all placeholder:text-neutral-400"
            />
          </div>
        </div>
      </div>

      {/* ── 2. Work & Organization Details ── */}
      <div className="bg-white border border-[rgba(44,46,48,0.1)] rounded-[16px] overflow-hidden transition-all">
        <button
          type="button"
          onClick={() => toggleSection('work')}
          className="w-full px-4 py-3 flex items-center justify-between hover:bg-neutral-50/80 transition-colors cursor-pointer text-left"
        >
          <div className="flex items-center gap-2.5">
            <Building2 className="w-4 h-4 text-[#C778D9]" />
            <span className="font-['Inter_Tight'] font-medium text-[14px] text-[#2c2e30]">
              Work & Organization
            </span>
            {workCount > 0 && (
              <span className="bg-[#C778D9]/10 text-[#C778D9] font-semibold text-[11px] px-2 py-0.5 rounded-full">
                {workCount} filled
              </span>
            )}
          </div>
          <ChevronDown
            className={`w-4 h-4 text-neutral-400 transition-transform duration-200 ${
              openSections.work ? 'rotate-180' : ''
            }`}
          />
        </button>

        {openSections.work && (
          <div className="p-4 pt-1 border-t border-[rgba(44,46,48,0.06)] flex flex-col gap-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex flex-col gap-1">
                <div className="flex justify-between items-center">
                  <label className="text-[13px] font-medium text-[#2c2e30]">Company Name</label>
                  <span className="text-[11px] text-neutral-400 font-normal">Optional</span>
                </div>
                <input
                  type="text"
                  placeholder="e.g. Northern Lights Tech"
                  value={data.company}
                  onChange={(e) => updateField('company', e.target.value)}
                  className="bg-neutral-50/50 border border-[rgba(44,46,48,0.16)] h-[40px] px-3 rounded-[10px] text-[14px] text-[#2c2e30] focus:outline-none focus:border-[#C778D9] focus:ring-2 focus:ring-[#C778D9]/20 transition-all placeholder:text-neutral-400"
                />
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex justify-between items-center">
                  <label className="text-[13px] font-medium text-[#2c2e30]">Work Title</label>
                  <span className="text-[11px] text-neutral-400 font-normal">Optional</span>
                </div>
                <input
                  type="text"
                  placeholder="e.g. VP of Product"
                  value={data.jobTitle}
                  onChange={(e) => updateField('jobTitle', e.target.value)}
                  className="bg-neutral-50/50 border border-[rgba(44,46,48,0.16)] h-[40px] px-3 rounded-[10px] text-[14px] text-[#2c2e30] focus:outline-none focus:border-[#C778D9] focus:ring-2 focus:ring-[#C778D9]/20 transition-all placeholder:text-neutral-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex flex-col gap-1">
                <div className="flex justify-between items-center">
                  <label className="text-[13px] font-medium text-[#2c2e30]">Work Phone</label>
                  <span className="text-[11px] text-neutral-400 font-normal">Optional</span>
                </div>
                <input
                  type="tel"
                  placeholder="+1 (416) 555-0199"
                  value={data.workPhone}
                  onChange={(e) => updateField('workPhone', e.target.value)}
                  className="bg-neutral-50/50 border border-[rgba(44,46,48,0.16)] h-[40px] px-3 rounded-[10px] text-[14px] text-[#2c2e30] focus:outline-none focus:border-[#C778D9] focus:ring-2 focus:ring-[#C778D9]/20 transition-all placeholder:text-neutral-400"
                />
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex justify-between items-center">
                  <label className="text-[13px] font-medium text-[#2c2e30]">Fax</label>
                  <span className="text-[11px] text-neutral-400 font-normal">Optional</span>
                </div>
                <input
                  type="tel"
                  placeholder="+1 (416) 555-0101"
                  value={data.fax}
                  onChange={(e) => updateField('fax', e.target.value)}
                  className="bg-neutral-50/50 border border-[rgba(44,46,48,0.16)] h-[40px] px-3 rounded-[10px] text-[14px] text-[#2c2e30] focus:outline-none focus:border-[#C778D9] focus:ring-2 focus:ring-[#C778D9]/20 transition-all placeholder:text-neutral-400"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ── 3. Address Details ── */}
      <div className="bg-white border border-[rgba(44,46,48,0.1)] rounded-[16px] overflow-hidden transition-all">
        <button
          type="button"
          onClick={() => toggleSection('address')}
          className="w-full px-4 py-3 flex items-center justify-between hover:bg-neutral-50/80 transition-colors cursor-pointer text-left"
        >
          <div className="flex items-center gap-2.5">
            <MapPin className="w-4 h-4 text-[#C778D9]" />
            <span className="font-['Inter_Tight'] font-medium text-[14px] text-[#2c2e30]">
              Physical Address
            </span>
            {addressCount > 0 && (
              <span className="bg-[#C778D9]/10 text-[#C778D9] font-semibold text-[11px] px-2 py-0.5 rounded-full">
                {addressCount} filled
              </span>
            )}
          </div>
          <ChevronDown
            className={`w-4 h-4 text-neutral-400 transition-transform duration-200 ${
              openSections.address ? 'rotate-180' : ''
            }`}
          />
        </button>

        {openSections.address && (
          <div className="p-4 pt-1 border-t border-[rgba(44,46,48,0.06)] flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <div className="flex justify-between items-center">
                <label className="text-[13px] font-medium text-[#2c2e30]">Street Address</label>
                <span className="text-[11px] text-neutral-400 font-normal">Optional</span>
              </div>
              <input
                type="text"
                placeholder="e.g. 100 King St W, Suite 400"
                value={data.street}
                onChange={(e) => updateField('street', e.target.value)}
                className="bg-neutral-50/50 border border-[rgba(44,46,48,0.16)] h-[40px] px-3 rounded-[10px] text-[14px] text-[#2c2e30] focus:outline-none focus:border-[#C778D9] focus:ring-2 focus:ring-[#C778D9]/20 transition-all placeholder:text-neutral-400"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex flex-col gap-1">
                <div className="flex justify-between items-center">
                  <label className="text-[13px] font-medium text-[#2c2e30]">City</label>
                  <span className="text-[11px] text-neutral-400 font-normal">Optional</span>
                </div>
                <input
                  type="text"
                  placeholder="e.g. Toronto"
                  value={data.city}
                  onChange={(e) => updateField('city', e.target.value)}
                  className="bg-neutral-50/50 border border-[rgba(44,46,48,0.16)] h-[40px] px-3 rounded-[10px] text-[14px] text-[#2c2e30] focus:outline-none focus:border-[#C778D9] focus:ring-2 focus:ring-[#C778D9]/20 transition-all placeholder:text-neutral-400"
                />
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex justify-between items-center">
                  <label className="text-[13px] font-medium text-[#2c2e30]">Province / State</label>
                  <span className="text-[11px] text-neutral-400 font-normal">Optional</span>
                </div>
                <input
                  type="text"
                  placeholder="e.g. ON"
                  value={data.state}
                  onChange={(e) => updateField('state', e.target.value)}
                  className="bg-neutral-50/50 border border-[rgba(44,46,48,0.16)] h-[40px] px-3 rounded-[10px] text-[14px] text-[#2c2e30] focus:outline-none focus:border-[#C778D9] focus:ring-2 focus:ring-[#C778D9]/20 transition-all placeholder:text-neutral-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex flex-col gap-1">
                <div className="flex justify-between items-center">
                  <label className="text-[13px] font-medium text-[#2c2e30]">Postal / ZIP Code</label>
                  <span className="text-[11px] text-neutral-400 font-normal">Optional</span>
                </div>
                <input
                  type="text"
                  placeholder="e.g. M5X 1A9"
                  value={data.zipCode}
                  onChange={(e) => updateField('zipCode', e.target.value)}
                  className="bg-neutral-50/50 border border-[rgba(44,46,48,0.16)] h-[40px] px-3 rounded-[10px] text-[14px] text-[#2c2e30] focus:outline-none focus:border-[#C778D9] focus:ring-2 focus:ring-[#C778D9]/20 transition-all placeholder:text-neutral-400"
                />
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex justify-between items-center">
                  <label className="text-[13px] font-medium text-[#2c2e30]">Country</label>
                  <span className="text-[11px] text-neutral-400 font-normal">Optional</span>
                </div>
                <input
                  type="text"
                  placeholder="e.g. Canada"
                  value={data.country}
                  onChange={(e) => updateField('country', e.target.value)}
                  className="bg-neutral-50/50 border border-[rgba(44,46,48,0.16)] h-[40px] px-3 rounded-[10px] text-[14px] text-[#2c2e30] focus:outline-none focus:border-[#C778D9] focus:ring-2 focus:ring-[#C778D9]/20 transition-all placeholder:text-neutral-400"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ── 4. Online & Notes ── */}
      <div className="bg-white border border-[rgba(44,46,48,0.1)] rounded-[16px] overflow-hidden transition-all">
        <button
          type="button"
          onClick={() => toggleSection('online')}
          className="w-full px-4 py-3 flex items-center justify-between hover:bg-neutral-50/80 transition-colors cursor-pointer text-left"
        >
          <div className="flex items-center gap-2.5">
            <Globe className="w-4 h-4 text-[#C778D9]" />
            <span className="font-['Inter_Tight'] font-medium text-[14px] text-[#2c2e30]">
              Website & Notes
            </span>
            {onlineCount > 0 && (
              <span className="bg-[#C778D9]/10 text-[#C778D9] font-semibold text-[11px] px-2 py-0.5 rounded-full">
                {onlineCount} filled
              </span>
            )}
          </div>
          <ChevronDown
            className={`w-4 h-4 text-neutral-400 transition-transform duration-200 ${
              openSections.online ? 'rotate-180' : ''
            }`}
          />
        </button>

        {openSections.online && (
          <div className="p-4 pt-1 border-t border-[rgba(44,46,48,0.06)] flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <div className="flex justify-between items-center">
                <label className="text-[13px] font-medium text-[#2c2e30]">Website</label>
                <span className="text-[11px] text-neutral-400 font-normal">Optional</span>
              </div>
              <input
                type="url"
                placeholder="https://startup.ca"
                value={data.website}
                onChange={(e) => updateField('website', e.target.value)}
                className="bg-neutral-50/50 border border-[rgba(44,46,48,0.16)] h-[40px] px-3 rounded-[10px] text-[14px] text-[#2c2e30] focus:outline-none focus:border-[#C778D9] focus:ring-2 focus:ring-[#C778D9]/20 transition-all placeholder:text-neutral-400"
              />
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex justify-between items-center">
                <label className="text-[13px] font-medium text-[#2c2e30]">Notes / Memo</label>
                <span className="text-[11px] text-neutral-400 font-normal">Optional</span>
              </div>
              <textarea
                rows={2}
                placeholder="Brief summary or message..."
                value={data.notes}
                onChange={(e) => updateField('notes', e.target.value)}
                className="bg-neutral-50/50 border border-[rgba(44,46,48,0.16)] p-2.5 rounded-[10px] text-[14px] text-[#2c2e30] focus:outline-none focus:border-[#C778D9] focus:ring-2 focus:ring-[#C778D9]/20 transition-all resize-none placeholder:text-neutral-400"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
