"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useTranslations, useLocale } from '@/contexts/LocaleContext';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Hero = () => {
  const t = useTranslations('Hero');
  const locale = useLocale();
  const router = useRouter();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const backgroundImages = [
    '/images/cityline-mtl-plateau.png',
    '/images/montreal_paint.jpeg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 7000); // Change every 7 seconds

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  const handleGetInvolved = () => {
    router.push(`/${locale}/community`);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images with Carousel */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image}
              alt={`Background ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
              quality={100}
            />
          </div>
        ))}
        {/* Light overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/85 via-primary-50/90 to-white/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              {t('name')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              {t('tagline')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 transition-colors duration-200 shadow-lg hover:shadow-xl">
              {t('learnMore')}
            </button>
            <button 
              onClick={handleGetInvolved}
              className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-600 hover:text-white transition-colors duration-200"
            >
              {t('getInvolved')}
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <ChevronDown className="w-8 h-8 text-gray-400 animate-bounce" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;