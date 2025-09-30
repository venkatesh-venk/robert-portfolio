"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Home, Shield, Trash2, TreePine, Car, Volume2, Store, AlertCircle } from "lucide-react";
import { useTranslations, useLocale } from '@/contexts/LocaleContext';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Issues = () => {
  const t = useTranslations('Issues');
  const locale = useLocale();
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(0);

  // All issues - you can add more here
  const allIssues = [
    {
      id: 'open-door-troubles',
      icon: AlertCircle,
      title: t('openDoorTroubles.title'),
      description: t('openDoorTroubles.description'),
      color: "bg-red-100 text-red-600"
    },
    {
      id: 'safety',
      icon: Shield,
      title: t('safety.title'),
      description: t('safety.description'),
      color: "bg-blue-100 text-blue-600"
    },
    {
      id: 'garbage-pest-control',
      icon: Trash2,
      title: t('garbagePestControl.title'),
      description: t('garbagePestControl.description'),
      color: "bg-amber-100 text-amber-600"
    },
    {
      id: 'affordable-housing',
      icon: Home,
      title: t('affordableHousing.title'),
      description: t('affordableHousing.description'),
      color: "bg-green-100 text-green-600"
    },
    {
      id: 'parks-green-spaces',
      icon: TreePine,
      title: t('parksGreenSpaces.title'),
      description: t('parksGreenSpaces.description'),
      color: "bg-emerald-100 text-emerald-600"
    },
    {
      id: 'traffic-road-safety',
      icon: Car,
      title: t('trafficRoadSafety.title'),
      description: t('trafficRoadSafety.description'),
      color: "bg-orange-100 text-orange-600"
    },
    {
      id: 'noise-quality-of-life',
      icon: Volume2,
      title: t('noiseQualityOfLife.title'),
      description: t('noiseQualityOfLife.description'),
      color: "bg-purple-100 text-purple-600"
    },
    {
      id: 'local-business-support',
      icon: Store,
      title: t('localBusinessSupport.title'),
      description: t('localBusinessSupport.description'),
      color: "bg-primary-100 text-primary-600"
    }
  ];

  const itemsPerPage = 4;
  const [startIndex, setStartIndex] = useState(0);

  // Auto-rotate every 7 seconds - shift one issue at a time
  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % allIssues.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [allIssues.length]);

  // Get 4 consecutive issues in a circular manner
  const currentIssues = Array.from({ length: itemsPerPage }, (_, i) => {
    const index = (startIndex + i) % allIssues.length;
    return allIssues[index];
  });

  const handleIssueClick = (issueId: string) => {
    router.push(`/${locale}/issues/${issueId}`);
  };

  return (
    <section id="issues" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Smooth Horizontal Carousel */}
        <div className="relative min-h-[420px] overflow-hidden px-4">
          <motion.div
            key={startIndex}
            className="flex gap-8"
            initial={{ x: "0%" }}
            animate={{ x: "0%" }}
            transition={{
              duration: 0.8,
              ease: [0.4, 0, 0.2, 1]
            }}
          >
            <AnimatePresence mode="popLayout" initial={false}>
              {currentIssues.map((issue, index) => (
                <motion.div
                  key={issue.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8, x: 300 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.8, x: -300 }}
                  transition={{
                    duration: 0.8,
                    ease: [0.4, 0, 0.2, 1],
                    layout: { duration: 0.6 }
                  }}
                  onClick={() => handleIssueClick(issue.id)}
                  className="flex-shrink-0 w-full md:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105 hover:-translate-y-1"
                  style={{ minWidth: "280px" }}
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${issue.color} mb-4`}>
                    <issue.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {issue.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {issue.description}
                  </p>
                  <div className="mt-4 text-primary-600 text-sm font-semibold flex items-center">
                    Learn More →
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {allIssues.map((issue, index) => (
            <button
              key={issue.id}
              onClick={() => setStartIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-500 ${
                index === startIndex 
                  ? 'bg-primary-600 w-6' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Show ${issue.title}`}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 transition-colors duration-200 shadow-lg hover:shadow-xl">
            {t('viewFullPlatform')}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Issues;