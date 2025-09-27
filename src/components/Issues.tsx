"use client";

import { motion } from "framer-motion";
import { TrendingUp, Home, GraduationCap, Leaf } from "lucide-react";
import { useTranslations } from '@/contexts/LocaleContext';

const Issues = () => {
  const t = useTranslations('Issues');

  const issues = [
    {
      icon: TrendingUp,
      title: t('economicDevelopment.title'),
      description: t('economicDevelopment.description'),
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Home,
      title: t('affordableHousing.title'),
      description: t('affordableHousing.description'),
      color: "bg-green-100 text-green-600"
    },
    {
      icon: GraduationCap,
      title: t('educationExcellence.title'),
      description: t('educationExcellence.description'),
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Leaf,
      title: t('environmentalProtection.title'),
      description: t('environmentalProtection.description'),
      color: "bg-emerald-100 text-emerald-600"
    }
  ];

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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {issues.map((issue, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-200"
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
            </motion.div>
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