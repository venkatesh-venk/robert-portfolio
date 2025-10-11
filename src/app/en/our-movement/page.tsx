"use client";

import { motion } from "framer-motion";
import { Users, Target, Heart, Lightbulb, Shield, TrendingUp, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function OurMovementPage() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const principles = [
    {
      icon: Users,
      title: "Community-Centered",
      description: "We believe that the best solutions come from listening to and working with community members. Every voice matters, and every concern is valid."
    },
    {
      icon: Target,
      title: "Action-Oriented",
      description: "We don't just talk about change—we make it happen. Our movement is focused on practical, actionable solutions to real community problems."
    },
    {
      icon: Heart,
      title: "Compassionate Leadership",
      description: "We lead with empathy, understanding that behind every issue are real people with real stories and real needs."
    },
    {
      icon: Lightbulb,
      title: "Innovative Solutions",
      description: "We combine traditional wisdom with modern approaches to create innovative policies that work for everyone."
    },
    {
      icon: Shield,
      title: "Integrity & Transparency",
      description: "We operate with complete transparency, holding ourselves accountable to the highest ethical standards."
    },
    {
      icon: TrendingUp,
      title: "Progressive Values",
      description: "We believe in building a more equitable, sustainable, and inclusive community for current and future generations."
    }
  ];

  const achievements = [
    "Successfully advocated for increased police presence in Milton-Parc area",
    "Led community consultations with over 500+ residents",
    "Developed comprehensive housing affordability proposals",
    "Partnered with local organizations on environmental initiatives",
    "Organized community clean-up events with 200+ volunteers"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-primary-50 to-orange-50">
      {/* Hero Image Section */}
      <div className="relative h-[400px] w-full">
        <Image
          src="/images/montreal_paint.jpeg"
          alt="Community background"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        
        {/* Back Button */}
        <button
          onClick={handleBack}
          className="absolute top-8 left-8 flex items-center gap-2 text-white hover:text-primary-300 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
          <span>Back to Home</span>
        </button>

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                What is <span className="text-primary-400">Citoyens en Action</span>?
              </h1>
              <p className="text-xl text-white/90">
                Citoyens en Action is a grassroots progressive political movement dedicated to creating positive change in our community through collaboration, innovation, and genuine commitment to public service.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700 text-lg">
                <p>
                  Citoyens en Action was born from a simple yet powerful idea: that real change comes from citizens working together to address the challenges facing their community.
                </p>
                <p>
                  We started with a small group of concerned neighbors who saw issues in our district—from safety concerns around the Open Door facility to inadequate housing affordability, from neglected parks to traffic safety problems. Rather than simply complaining, we decided to act.
                </p>
                <p>
                  Today, we've grown into a vibrant movement of engaged citizens, community leaders, students, families, and seniors—all united by a shared vision of a better, more livable community for everyone.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-96 rounded-lg overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/cityline-mtl-plateau.png"
                alt="Community gathering"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Principles */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Principles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These guiding values shape everything we do and every decision we make
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-saffron-500 rounded-full mb-4">
                  <principle.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {principle.title}
                </h3>
                <p className="text-gray-600">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We've Accomplished */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We've Accomplished
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results through community engagement and dedicated action
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary-50 to-saffron-50 rounded-lg p-8 md:p-12"
          >
            <ul className="space-y-4">
              {achievements.map((achievement, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
                    ✓
                  </div>
                  <p className="text-lg text-gray-700 pt-1">
                    {achievement}
                  </p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-orange-50 to-primary-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Join Our Movement
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Together, we can build the community we all deserve. Your voice, your passion, and your commitment can make a real difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/en/community"
                className="bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Get Involved
              </Link>
              <Link
                href="/en#issues"
                className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-600 hover:text-white transition-colors duration-200"
              >
                View Our Platform
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

