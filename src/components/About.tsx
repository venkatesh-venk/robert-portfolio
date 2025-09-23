"use client";

import { motion } from "framer-motion";
import { Users, Heart, Shield } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Users,
      title: "Community First",
      description: "Putting the needs and voices of our community at the center of every decision."
    },
    {
      icon: Heart,
      title: "Compassionate Leadership",
      description: "Leading with empathy and understanding to create positive change for all."
    },
    {
      icon: Shield,
      title: "Integrity & Transparency",
      description: "Maintaining the highest standards of honesty and openness in all actions."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Robert
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A dedicated public servant with over 15 years of experience in community 
            development and policy making. Robert brings fresh perspectives and proven 
            leadership to address the challenges facing our community.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-100 rounded-lg p-8 h-96 flex items-center justify-center">
              <p className="text-gray-500 text-center">
                [Professional Photo of Robert Feradett]
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900">
              A Vision for Progress
            </h3>
            <p className="text-gray-600">
              Robert Feradett has dedicated his career to building stronger communities 
              through innovative policy solutions and collaborative leadership. His 
              approach combines data-driven decision making with genuine care for 
              the people he serves.
            </p>
            <p className="text-gray-600">
              With a background in public administration and community organizing, 
              Robert understands both the challenges and opportunities that lie ahead 
              for our district. He is committed to creating policies that promote 
              economic growth, environmental sustainability, and social equity.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-medium">
                Public Administration
              </span>
              <span className="bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-medium">
                Community Development
              </span>
              <span className="bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-medium">
                Policy Innovation
              </span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {values.map((value, index) => (
            <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-200">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <value.icon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600">
                {value.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
