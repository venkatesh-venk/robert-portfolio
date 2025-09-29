"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Award } from "lucide-react";
import { useTranslations } from '@/contexts/LocaleContext';

const Experience = () => {
  const t = useTranslations('Experience');

  const experiences = [
    {
      year: t('experiences.director.year'),
      title: t('experiences.director.title'),
      organization: t('experiences.director.organization'),
      location: t('experiences.director.location'),
      description: t('experiences.director.description')
    },
    {
      year: t('experiences.analyst.year'),
      title: t('experiences.analyst.title'),
      organization: t('experiences.analyst.organization'),
      location: t('experiences.analyst.location'),
      description: t('experiences.analyst.description')
    },
    {
      year: t('experiences.organizer.year'),
      title: t('experiences.organizer.title'),
      organization: t('experiences.organizer.organization'),
      location: t('experiences.organizer.location'),
      description: t('experiences.organizer.description')
    }
  ];

  const achievements = [
    t('achievements.0'),
    t('achievements.1'),
    t('achievements.2'),
    t('achievements.3')
  ];

  return (
    <section id="experience" className="py-20 bg-white">
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

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">{t('professionalExperience')}</h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-primary-200">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-primary-600 rounded-full"></div>
                  <div className="flex items-center mb-2">
                    <Calendar className="w-4 h-4 text-gray-400 mr-2" />
                    <span className="text-sm text-gray-500">{exp.year}</span>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-1">
                    {exp.title}
                  </h4>
                  <div className="flex items-center mb-2">
                    <MapPin className="w-4 h-4 text-gray-400 mr-2" />
                    <span className="text-gray-600">{exp.organization}, {exp.location}</span>
                  </div>
                  <p className="text-gray-600">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Key Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">{t('keyAchievements')}</h3>
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                    <Award className="w-4 h-4 text-primary-600" />
                  </div>
                  <p className="text-gray-600">{achievement}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-primary-50 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                {t('education')}
              </h4>
              <p className="text-gray-600 mb-1">
                <strong>{t('educationDetails.degree')}</strong>
              </p>
              <p className="text-gray-600">
                {t('educationDetails.university')}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;