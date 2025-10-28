"use client";

import { motion } from "framer-motion";
import { Users, Heart, Shield } from "lucide-react";
import { useTranslations } from '@/contexts/LocaleContext';
import Image from 'next/image';

const About = () => {
  const t = useTranslations('About');

  const values = [
    {
      icon: Users,
      title: t('values.communityFirst.title'),
      description: t('values.communityFirst.description')
    },
    {
      icon: Heart,
      title: t('values.compassionateLeadership.title'),
      description: t('values.compassionateLeadership.description')
    },
    {
      icon: Shield,
      title: t('values.integrityTransparency.title'),
      description: t('values.integrityTransparency.description')
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden bg-white">
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            {t('valuesHeading')}
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-gradient-to-br from-primary-50 to-white hover:shadow-lg transition-all duration-300 border border-primary-100">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full mb-4 shadow-md">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;