"use client";

import { motion } from "framer-motion";
import { Home, Shield, Trash2, TreePine, Car, Volume2, Store, AlertCircle } from "lucide-react";
import { useTranslations, useLocale } from '@/contexts/LocaleContext';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Issues = () => {
  const t = useTranslations('Issues');
  const locale = useLocale();
  const router = useRouter();
  const [isPaused, setIsPaused] = useState(false);

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

  // Duplicate the array to create seamless loop
  const duplicatedIssues = [...allIssues, ...allIssues, ...allIssues];

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

        {/* Smooth Continuous Horizontal Scroll */}
        <div 
          className="relative min-h-[420px] overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            className="flex gap-8"
            animate={{
              x: [0, -((allIssues.length * 320) + (allIssues.length * 32))]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 60, // Adjust this for speed (lower = faster)
                ease: "linear"
              }
            }}
            style={{
              animationPlayState: isPaused ? 'paused' : 'running'
            }}
          >
            {duplicatedIssues.map((issue, index) => (
              <div
                key={`${issue.id}-${index}`}
                onClick={() => handleIssueClick(issue.id)}
                className="flex-shrink-0 w-[320px] bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105 hover:-translate-y-1"
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
              </div>
            ))}
          </motion.div>
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
