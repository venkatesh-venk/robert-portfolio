"use client";

import { motion } from "framer-motion";
import { TrendingUp, Home, GraduationCap, Leaf } from "lucide-react";

const Issues = () => {
  const issues = [
    {
      icon: TrendingUp,
      title: "Economic Development",
      description: "Creating jobs and supporting local businesses through smart economic policies and infrastructure investment.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Home,
      title: "Affordable Housing",
      description: "Addressing the housing crisis with innovative solutions that make homeownership accessible to all families.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: GraduationCap,
      title: "Education Excellence",
      description: "Investing in our schools and teachers to ensure every child has access to quality education and opportunities.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Leaf,
      title: "Environmental Protection",
      description: "Protecting our natural resources and promoting sustainable practices for future generations.",
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
            Key Issues
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Robert is focused on addressing the most pressing challenges facing our community 
            with practical, evidence-based solutions.
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
            View Full Platform
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Issues;
