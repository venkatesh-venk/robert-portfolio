"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations, useLocale } from '@/contexts/LocaleContext';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Hero = () => {
  const t = useTranslations('Hero');
  const locale = useLocale();
  const router = useRouter();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  
  // Define 3 slides with different content and backgrounds
  const slides = [
    {
      id: 1,
      image: '/images/cityline-mtl-plateau.png',
      title: t('slide1.title'),
      description: t('slide1.description'),
      primaryButton: t('slide1.primaryButton'),
      secondaryButton: t('slide1.secondaryButton'),
    },
    {
      id: 2,
      image: '/images/montreal_paint.jpeg',
      title: t('slide2.title'),
      description: t('slide2.description'),
      primaryButton: t('slide2.primaryButton'),
      secondaryButton: t('slide2.secondaryButton'),
    },
    {
      id: 3,
      image: '/images/mount_royal_image.png',
      title: t('slide3.title'),
      description: t('slide3.description'),
      primaryButton: t('slide3.primaryButton'),
      secondaryButton: t('slide3.secondaryButton'),
    },
  ];

  // Auto-rotate slides every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => 
        (prevIndex + 1) % slides.length
      );
    }, 12000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const handleGetInvolved = () => {
    router.push(`/${locale}/community`);
  };

  const handleLearnMore = () => {
    router.push(`/${locale}/our-movement`);
  };

  const handlePrimaryButton = () => {
    if (currentSlideIndex === 0) {
      // Slide 1: WHAT - Learn More about the movement
      router.push(`/${locale}/our-movement`);
    } else if (currentSlideIndex === 1) {
      // Slide 2: WHO - Meet Our Team (navigate to team page)
      router.push(`/${locale}/team`);
    } else if (currentSlideIndex === 2) {
      // Slide 3: WHERE - Find Us Locally (navigate to community locations page)
      router.push(`/${locale}/community-locations`);
    }
  };

  const handleSecondaryButton = () => {
    if (currentSlideIndex === 1) {
      // Slide 2: WHO - Join the Movement (scroll to community section)
      document.getElementById('community')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // All other slides: Get Involved (navigate to community page)
      router.push(`/${locale}/community`);
    }
  };

  const nextSlide = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlideIndex(index);
  };

  const currentSlide = slides[currentSlideIndex];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images with Transition */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Image
              src={currentSlide.image}
              alt={`Slide ${currentSlide.id}`}
              fill
              className="object-cover"
              priority={currentSlide.id === 1}
              quality={100}
            />
          </motion.div>
        </AnimatePresence>
        {/* Light overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/85 via-primary-50/90 to-white/80" />
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-gray-800" />
      </button>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
                {currentSlide.title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                {currentSlide.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button 
                  onClick={handlePrimaryButton}
                  className="bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  {currentSlide.primaryButton}
                </button>
                <button 
                  onClick={handleSecondaryButton}
                  className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-600 hover:text-white transition-colors duration-200"
                >
                  {currentSlide.secondaryButton}
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentSlideIndex
                    ? 'w-12 h-3 bg-primary-600'
                    : 'w-3 h-3 bg-gray-400 hover:bg-gray-600'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Scroll Down Indicator */}
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