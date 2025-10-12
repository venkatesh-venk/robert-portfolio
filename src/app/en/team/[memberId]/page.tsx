"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Mail, Linkedin, Calendar, MapPin, Award, GraduationCap, Briefcase } from "lucide-react";
import Image from "next/image";
import { useRouter, useParams } from "next/navigation";

// Team member data with full profiles
const teamMemberProfiles: Record<string, any> = {
  "robert-fradette": {
    name: "Robert Fradette",
    role: "Party Leader & Candidate for City Council",
    bio: "Dedicated to building stronger communities through innovative policy solutions and collaborative leadership. With over 10 years of experience in public administration and community development, Robert brings a unique blend of expertise and passion to local politics.",
    image: "/images/member_pictures/robert.JPG",
    email: "robert@citoyensenaction.ca",
    linkedin: "#",
    experiences: [
      {
        year: "2018 - Present",
        title: "Community Development Director",
        organization: "City of Montreal",
        location: "Montreal, QC",
        description: "Led initiatives that resulted in 25% increase in affordable housing units and $2M in economic development grants."
      },
      {
        year: "2015 - 2018",
        title: "Policy Analyst",
        organization: "Quebec Provincial Government",
        location: "Quebec City, QC",
        description: "Developed and analyzed legislation focused on education reform and environmental protection policies."
      },
      {
        year: "2012 - 2015",
        title: "Community Organizer",
        organization: "Progressive Action Network",
        location: "Montreal, QC",
        description: "Organized grassroots campaigns that mobilized over 10,000 community members on key policy issues."
      }
    ],
    achievements: [
      "Led successful campaign for $50M school funding increase",
      "Established community health initiative serving 5,000+ families",
      "Championed environmental protection bill with bipartisan support",
      "Created job training program with 85% employment success rate"
    ],
    education: {
      degree: "Master of Public Administration",
      university: "McGill University",
      year: "2012"
    }
  },
  "arjun-lokhande": {
    name: "Arjun Lokhande",
    role: "Campaign Manager",
    bio: "Passionate about grassroots organizing and community engagement. Arjun has managed multiple successful political campaigns and specializes in digital outreach and volunteer coordination.",
    image: "/images/member_pictures/default-avatar.png",
    email: "arjun@citoyensenaction.ca",
    linkedin: "#",
    experiences: [
      {
        year: "2020 - Present",
        title: "Campaign Manager",
        organization: "Citoyens en Action",
        location: "Montreal, QC",
        description: "Managing all aspects of the campaign including strategy, volunteer coordination, and community outreach."
      },
      {
        year: "2018 - 2020",
        title: "Digital Organizer",
        organization: "Various Political Campaigns",
        location: "Montreal, QC",
        description: "Specialized in social media strategy and digital grassroots mobilization."
      }
    ],
    achievements: [
      "Recruited and trained over 200 volunteers",
      "Increased social media engagement by 300%",
      "Organized 50+ community events"
    ],
    education: {
      degree: "Bachelor of Political Science",
      university: "Concordia University",
      year: "2018"
    }
  },
  "venkatesh-chaudhary": {
    name: "Venkatesh Chaudhary",
    role: "Policy Advisor",
    bio: "Expert in urban planning and sustainable community development. Venkatesh provides strategic policy guidance on housing, transportation, and environmental issues.",
    image: "/images/member_pictures/default-avatar.png",
    email: "venkatesh@citoyensenaction.ca",
    linkedin: "#",
    experiences: [
      {
        year: "2019 - Present",
        title: "Urban Planning Consultant",
        organization: "Montreal Urban Planning Institute",
        location: "Montreal, QC",
        description: "Advising on sustainable development projects and community planning initiatives."
      },
      {
        year: "2016 - 2019",
        title: "Transportation Analyst",
        organization: "City of Montreal",
        location: "Montreal, QC",
        description: "Analyzed and recommended improvements to public transportation systems."
      }
    ],
    achievements: [
      "Developed comprehensive housing affordability plan",
      "Led transit improvement study for Plateau-Mont-Royal",
      "Published research on sustainable urban development"
    ],
    education: {
      degree: "Master of Urban Planning",
      university: "University of Montreal",
      year: "2016"
    }
  }
};

export default function MemberProfilePage() {
  const router = useRouter();
  const params = useParams();
  const memberId = params.memberId as string;

  const handleBack = () => {
    router.back();
  };

  // Get member profile
  const member = teamMemberProfiles[memberId];

  // If member not found, show error
  if (!member) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-primary-50 to-orange-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Member Not Found</h1>
          <button
            onClick={handleBack}
            className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-primary-50 to-orange-50">
      {/* Hero Section with Member Photo */}
      <div className="relative h-[400px] w-full">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-700" />
        
        {/* Back Button */}
        <button
          onClick={handleBack}
          className="absolute top-8 left-8 flex items-center gap-2 text-white hover:text-primary-300 transition-colors group z-10"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
          <span>Back to Team</span>
        </button>

        {/* Member Info Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col md:flex-row items-center gap-8"
            >
              {/* Profile Photo */}
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl flex-shrink-0 bg-white">
                {member.image === "/images/member_pictures/default-avatar.png" ? (
                  <div className="w-full h-full flex items-center justify-center bg-primary-200 rounded-full">
                    <span className="text-6xl font-bold text-primary-600">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                ) : (
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover rounded-full"
                    style={{ objectPosition: 'center' }}
                  />
                )}
              </div>

              {/* Member Details */}
              <div className="text-center md:text-left text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-2">{member.name}</h1>
                <p className="text-2xl text-primary-200 font-semibold mb-4">{member.role}</p>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-white/30 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Email</span>
                  </a>
                  {member.linkedin !== "#" && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-white/30 transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                      <span>LinkedIn</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bio Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">About</h2>
            <p className="text-lg text-gray-700 leading-relaxed">{member.bio}</p>
          </motion.div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="w-8 h-8 text-primary-600" />
              <h2 className="text-3xl font-bold text-gray-900">Professional Experience</h2>
            </div>
          </motion.div>

          <div className="space-y-6">
            {member.experiences.map((exp: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-primary-500"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-primary-600" />
                  </div>
                  <div className="flex-grow">
                    <p className="text-sm text-primary-600 font-semibold mb-1">{exp.year}</p>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-gray-600 mb-3">
                      <span className="font-medium">{exp.organization}</span>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    <p className="text-gray-700">{exp.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-8 h-8 text-primary-600" />
              <h2 className="text-3xl font-bold text-gray-900">Key Achievements</h2>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            {member.achievements.map((achievement: string, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 bg-gradient-to-br from-primary-50 to-orange-50 p-4 rounded-lg"
              >
                <div className="flex-shrink-0 w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  ✓
                </div>
                <p className="text-gray-700">{achievement}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-8 h-8 text-primary-600" />
              <h2 className="text-3xl font-bold text-gray-900">Education</h2>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.education.degree}</h3>
              <p className="text-lg text-gray-700">{member.education.university}, {member.education.year}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-600 to-primary-700">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-xl text-white/90 mb-6">
              Have questions or want to connect with {member.name}?
            </p>
            <a
              href={`mailto:${member.email}`}
              className="inline-block bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg"
            >
              Send an Email
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

