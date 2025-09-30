"use client";

import { useLocale } from '@/contexts/LocaleContext';
import { useRouter } from 'next/navigation';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const locale = useLocale();
  const router = useRouter();

  const switchLanguage = (newLocale: string) => {
    // Update localStorage preference
    localStorage.setItem('preferredLanguage', newLocale);
    // Navigate to the specific locale page (basePath will be added automatically)
    router.push(`/${newLocale}`);
  };

  return (
    <div className="flex items-center">
      {/* Language Toggle Button */}
      <div className="relative inline-flex items-center bg-gray-100 rounded-full p-1">
        {/* Globe Icon */}
        <Globe className="w-4 h-4 text-gray-500 mr-2" />
        
        {/* Language Options */}
        <button
          onClick={() => switchLanguage('en')}
          className={`px-3 py-1 text-sm font-medium rounded-full transition-all duration-200 ${
            locale === 'en'
              ? 'bg-white text-primary-600 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          EN
        </button>
        
        <button
          onClick={() => switchLanguage('fr')}
          className={`px-3 py-1 text-sm font-medium rounded-full transition-all duration-200 ${
            locale === 'fr'
              ? 'bg-white text-primary-600 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          FR
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;