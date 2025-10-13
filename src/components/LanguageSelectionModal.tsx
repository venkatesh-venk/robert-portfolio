"use client";

import { useRouter } from 'next/navigation';
import { useState } from 'react';

const LanguageSelectionModal = () => {
  const router = useRouter();
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleLanguageSelect = (languageCode: string) => {
    setSelectedLanguage(languageCode);
    setIsAnimating(true);

    // Wait for animation to complete before navigating
    setTimeout(() => {
      router.push(`/${languageCode}`);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden">
      {/* Background Video with Loop - Optimized for Mobile */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto object-cover"
          style={{
            maxWidth: 'none',
          }}
        >
          <source src="/video/replicate-prediction-z6q5yxkaxnrmc0csvcdskk1fym.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark overlay to make text more readable */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content Container */}
      <div 
        className={`relative z-10 flex flex-col items-center space-y-6 md:space-y-8 px-4 transition-all duration-500 ${
          isAnimating ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
        }`}
      >
        {/* Welcome Text */}
        <div className="text-center mb-2 md:mb-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]" 
              style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8), 0 4px 8px rgba(0,0,0,0.6)' }}>
            Bienvenue
          </h1>
          <p className="mt-2 md:mt-3 text-white text-base md:text-lg drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] px-4"
             style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>
            Veuillez sélectionner votre langue
          </p>
        </div>

        {/* Language Buttons */}
        <div className="flex items-center gap-4 md:gap-6">
          <button
            onClick={() => handleLanguageSelect('fr')}
            disabled={isAnimating}
            className={`relative px-10 py-6 sm:px-12 sm:py-7 md:px-16 md:py-8 text-2xl sm:text-3xl font-semibold rounded-full transition-all duration-300 transform ${
              selectedLanguage === 'fr'
                ? 'bg-orange-500 text-white shadow-2xl scale-110 ring-4 ring-orange-300/50'
                : 'bg-white text-gray-800 border-2 border-white hover:bg-orange-50 hover:scale-105 shadow-2xl'
            }`}
          >
            FR
          </button>

          <button
            onClick={() => handleLanguageSelect('en')}
            disabled={isAnimating}
            className={`relative px-10 py-6 sm:px-12 sm:py-7 md:px-16 md:py-8 text-2xl sm:text-3xl font-semibold rounded-full transition-all duration-300 transform ${
              selectedLanguage === 'en'
                ? 'bg-orange-500 text-white shadow-2xl scale-110 ring-4 ring-orange-300/50'
                : 'bg-white text-gray-800 border-2 border-white hover:bg-orange-50 hover:scale-105 shadow-2xl'
            }`}
          >
            EN
          </button>
        </div>

        {/* Tagline */}
        <div className="mt-2 md:mt-4 px-4">
          <p className="text-xl sm:text-3xl md:text-5xl lg:text-7xl font-semibold text-white tracking-wide drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] text-center"
             style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8), 0 4px 8px rgba(0,0,0,0.6)' }}>
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

