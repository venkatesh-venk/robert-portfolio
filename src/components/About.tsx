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
        {/* Section Header */}
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

        {/* Leader Bio Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative rounded-2xl overflow-hidden w-96 h-96 shadow-2xl">
              <Image
                src="/images/member_pictures/robert.JPG"
                alt="Professional Photo of Robert Fradette"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-2">
              {t('leaderBadge')}
            </div>
            <h3 className="text-3xl font-bold text-gray-900">
              {t('leaderName')}
            </h3>
            <p className="text-xl text-primary-600 font-semibold">
              {t('leaderTitle')}
            </p>
            <p className="text-gray-700 text-lg">
              {t('visionText1')}
            </p>
            <p className="text-gray-700 text-lg">
              {t('visionText2')}
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              <span className="bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-medium border border-primary-200">
                {t('skills.publicAdministration')}
              </span>
              <span className="bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-medium border border-primary-200">
                {t('skills.communityDevelopment')}
              </span>
              <span className="bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-medium border border-primary-200">
                {t('skills.policyInnovation')}
              </span>
            </div>
          </motion.div>
        </div>

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