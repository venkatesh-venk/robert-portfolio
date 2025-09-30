"use client";

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';

const LanguageSelectionModal = () => {
  const router = useRouter();
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleLanguageSelect = (languageCode: string) => {
    setSelectedLanguage(languageCode);
    setIsAnimating(true);

    // Store the language preference in localStorage
    localStorage.setItem('preferredLanguage', languageCode);

    // Wait for animation to complete before navigating
    setTimeout(() => {
      router.push(`/${languageCode}`);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image with Blur Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/green_saffron.jpeg"
          alt="Background"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        {/* Blur overlay */}
        <div className="absolute inset-0 backdrop-blur-sm bg-black/20" />
      </div>

      {/* Content Container */}
      <div 
        className={`relative z-10 flex flex-col items-center space-y-8 transition-all duration-500 ${
          isAnimating ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
        }`}
      >
        {/* Welcome Text */}
        <div className="text-center mb-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-wide drop-shadow-2xl">
            Bienvenue
          </h1>
          <p className="mt-3 text-white/90 text-lg drop-shadow-lg">
            Veuillez sélectionner votre langue
          </p>
        </div>

        {/* Language Buttons */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => handleLanguageSelect('fr')}
            disabled={isAnimating}
            className={`relative px-16 py-8 text-3xl font-semibold rounded-full transition-all duration-300 transform ${
              selectedLanguage === 'fr'
                ? 'bg-primary-600 text-white shadow-2xl scale-110'
                : 'bg-white/90 text-gray-800 border-2 border-white/60 hover:bg-white hover:scale-105 shadow-xl'
            }`}
          >
            FR
          </button>

          <button
            onClick={() => handleLanguageSelect('en')}
            disabled={isAnimating}
            className={`relative px-16 py-8 text-3xl font-semibold rounded-full transition-all duration-300 transform ${
              selectedLanguage === 'en'
                ? 'bg-primary-600 text-white shadow-2xl scale-110'
                : 'bg-white/90 text-gray-800 border-2 border-white/60 hover:bg-white hover:scale-105 shadow-xl'
            }`}
          >
            EN
          </button>
        </div>

        {/* Tagline */}
        <div className="mt-4">
          <p className="text-2xl md:text-7xl font-semibold text-gray-900 tracking-wide drop-shadow-2xl">
            Citoyens en Action
          </p>
        </div>
      </div>

      {/* Decorative gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/30 to-transparent" />
    </div>
  );
};

export default LanguageSelectionModal;

