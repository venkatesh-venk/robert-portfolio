import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';
import Navigation from '@/components/Navigation';

// Generate static paths for all issues
export function generateStaticParams() {
  return [
    { slug: 'open-door-troubles' },
    { slug: 'safety' },
    { slug: 'garbage-pest-control' },
    { slug: 'affordable-housing' },
    { slug: 'parks-green-spaces' },
    { slug: 'traffic-road-safety' },
    { slug: 'noise-quality-of-life' },
    { slug: 'local-business-support' }
  ];
}

const issuesData: Record<string, any> = {
  'open-door-troubles': {
    title: 'Open Door Troubles',
    subtitle: 'Addressing the homeless shelter crisis in Milton-Parc',
    image: '/images/cityline-mtl-plateau.png',
    sections: [
      {
        heading: 'The Current Situation',
        content: `At present, the homeless center Open Door, located at 3535 Avenue du Parc, serves around 50–70 homeless individuals daily. While this service is important, the facility has significant limitations. It operates only during the day and offers just 30 beds in total, leaving many people outside throughout the day and night.

As a result, large groups remain in front of neighbouring residents' main doors, alleys, staircases, and sidewalks. To pass the time, many turn to drug use, which has unfortunately attracted drug dealers who now roam the area on foot or bicycles, openly soliciting sales—even targeting McGill University students and neighborhood residents.`
      },
      {
        heading: 'Community Impact',
        content: `This situation has led to a visible increase in theft, robberies, and aggressive begging, while public hygiene has declined sharply due to spitting, vomiting, urination, and food waste around the center. Consequently, the rat population has exploded, and the once student-friendly, safe Milton-Parc intersection has become associated with crime, drugs, and insecurity.

Our community has been working tirelessly to propose solutions, but it is clear that the current administration is not treating this matter with the urgency it demands. The time for delay is over—we must take action now.`
      },
      {
        heading: 'Our Commitment',
        content: `We are committed to moving this Open Door facility away from the residential area and finding a perfect spot with a much bigger facility that can properly serve the homeless population while respecting the safety and quality of life of Milton-Parc residents.`
      }
    ]
  },
  'safety': {
    title: 'Students, Child & Elder Safety',
    subtitle: 'Ensuring a safe community for all residents',
    image: '/images/montreal_paint.jpeg',
    sections: [
      {
        heading: 'A Diverse Community at Risk',
        content: `Milton-Parc, at the heart of Downtown Montreal, brings together a diverse mix of residents and visitors. The community is home to students, young couples, families with children, and elderly residents, all of whom deserve to feel safe in their own neighborhood.

However, despite repeated requests from residents, police presence and patrols remain insufficient. This lack of consistent security has contributed to serious issues, including knife stabbings, harassment, and bullying incidents in the Milton-Parc area.`
      },
      {
        heading: 'The Need for Action',
        content: `While occasional patrols take place, they are not enough to effectively deter drug activity, theft, and intimidation. Students walking home late at night, children playing outdoors, and families going about daily life should never have to fear for their safety.`
      },
      {
        heading: 'Our Solution',
        content: `That is why we are calling for increased, consistent police patrols — particularly on bicycles. This would ensure quicker response times, greater visibility, and stronger community engagement. A proactive and reliable police presence will not only discourage crime but will also restore confidence among residents, students, and families that Milton-Parc is once again a safe and welcoming place to live, study, and raise children.`
      }
    ]
  },
  'garbage-pest-control': {
    title: 'Garbage & Pest Control',
    subtitle: 'Restoring cleanliness and public health',
    image: '/images/cityline-mtl-plateau.png',
    sections: [
      {
        heading: 'The Growing Problem',
        content: `Another major issue facing the community is the growing problem of garbage accumulation and pest infestations. Overflowing trash bins, litter on sidewalks, and improperly managed waste have created unsanitary conditions throughout the neighborhood. This situation has directly contributed to the rapid increase in rats and other pests, further undermining the area's cleanliness and quality of life.

The problem has worsened as public spaces around the homeless shelter and busy intersections are frequently used for eating, loitering, and discarding waste.`
      },
      {
        heading: 'Health and Safety Risks',
        content: `Left unaddressed, this not only damages the neighborhood's image but also poses serious public health risks for students, families, and elderly residents.`
      },
      {
        heading: 'Comprehensive Strategy',
        content: `We are demanding a comprehensive garbage and pest control strategy for Milton-Parc. This includes:

• More frequent waste collection and cleaning of sidewalks
• Installing secure, rodent-resistant garbage bins
• Stronger enforcement of littering violations
• A coordinated pest control program to reduce the rat population

By addressing waste management and pest control with urgency, we can restore Milton-Parc to a clean, safe, and welcoming community that reflects the pride of its residents.`
      }
    ]
  },
  'affordable-housing': {
    title: 'Affordable & Safe Housing',
    subtitle: 'Making housing accessible and safe for all',
    image: '/images/montreal_paint.jpeg',
    sections: [
      {
        heading: 'The Housing Crisis',
        content: `Rising housing costs in Milton-Parc and Plateau Mont-Royal are putting affordable homes out of reach for students, young families, and seniors. At the same time, poorly maintained apartments and neglectful landlords are creating unsafe and unstable living conditions.`
      },
      {
        heading: 'Our Proposed Solutions',
        content: `• Stricter enforcement of housing standards to ensure safe living conditions
• Enhanced tenant protections against unfair rent increases and evictions
• Investment in new affordable housing projects that meet the needs of ordinary residents

By addressing these issues, we can ensure that both neighborhoods remain inclusive, welcoming, and accessible to all, rather than being priced out of reach for long-term residents.`
      }
    ]
  },
  'parks-green-spaces': {
    title: 'Public Parks & Green Spaces',
    subtitle: 'Creating vibrant, safe spaces for everyone',
    image: '/images/cityline-mtl-plateau.png',
    sections: [
      {
        heading: 'Current State of Our Parks',
        content: `Milton-Parc and Plateau Mont-Royal are home to vibrant communities, yet parks and playgrounds often suffer from neglect, poor maintenance, insufficient lighting, and limited facilities. These green spaces are essential for students, families, and seniors to relax, exercise, and socialize safely.`
      },
      {
        heading: 'Our Proposed Solutions',
        content: `• Better maintenance of existing parks, including landscaping and cleanliness
• Creation of new recreational spaces for youth, families, and seniors
• Addition of benches, trees, and safe pathways to improve usability
• Enhanced lighting to ensure safety during evening hours

Well-maintained parks contribute to healthier, happier communities and encourage residents to engage actively in their neighborhoods.`
      }
    ]
  },
  'traffic-road-safety': {
    title: 'Traffic & Road Safety',
    subtitle: 'Making streets safe for everyone',
    image: '/images/montreal_paint.jpeg',
    sections: [
      {
        heading: 'Current Safety Concerns',
        content: `Busy streets and intersections in Milton-Parc and Plateau Mont-Royal pose risks for pedestrians, cyclists, and drivers alike. Speeding vehicles, poorly marked crosswalks, and inadequate bike lanes have already resulted in accidents and near-misses.`
      },
      {
        heading: 'Our Proposed Solutions',
        content: `• Improved pedestrian signals and clearly marked crosswalks for safer street crossings
• Expanded and protected bike lanes to encourage safe cycling
• Speed control measures, such as speed bumps and traffic calming initiatives
• Special focus on safety around schools, parks, and student housing

By prioritizing road safety, we can make streets safer for all, reduce accidents, and promote healthy, active lifestyles.`
      }
    ]
  },
  'noise-quality-of-life': {
    title: 'Noise & Quality of Life',
    subtitle: 'Balancing vibrancy with livability',
    image: '/images/cityline-mtl-plateau.png',
    sections: [
      {
        heading: 'The Challenge',
        content: `Both neighborhoods are vibrant and lively, yet noise has become a major concern. Late-night disturbances around student housing, bars, and nightlife venues disrupt families and seniors. Construction and street activity further add to the problem.`
      },
      {
        heading: 'Our Proposed Solutions',
        content: `• Stricter enforcement of noise bylaws to protect residential areas
• Coordination with universities and student organizations to minimize late-night disturbances
• Balanced nightlife regulation to ensure that entertainment does not compromise residents' comfort
• Noise-reduction measures during construction projects to limit disruption

A thriving community must also be a livable one — where students, families, and seniors can enjoy peace without sacrificing vibrancy.`
      }
    ]
  },
  'local-business-support': {
    title: 'Local Business & Community Engagement',
    subtitle: 'Strengthening our local economy and community bonds',
    image: '/images/montreal_paint.jpeg',
    sections: [
      {
        heading: 'Supporting Small Businesses',
        content: `Small businesses in Milton-Parc and Plateau Mont-Royal are struggling due to safety concerns, cleanliness issues, and competition from large chains. At the same time, residents often feel disconnected from municipal decision-making.`
      },
      {
        heading: 'Our Proposed Solutions',
        content: `• Incentives and support programs for small local businesses to help them thrive
• Clean, safe commercial streets that attract customers and visitors
• Creation of a neighborhood advisory council to give residents and business owners a stronger voice in local decisions
• Expansion of community-based events and cultural programs to foster a sense of belonging

By strengthening the local economy and promoting community engagement, we can create neighborhoods that are safe, prosperous, and welcoming for everyone.`
      }
    ]
  }
};

export default function IssueDetailPage({ params }: { params: { slug: string } }) {
  const issue = issuesData[params.slug];

  if (!issue) {
    notFound();
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white pt-16">
        {/* Hero Image Section */}
        <div className="relative h-[400px] w-full">
          <Image
            src={issue.image}
            alt={issue.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
          
          {/* Back Button */}
          <Link 
            href="/en"
            className="absolute top-8 left-8 flex items-center gap-2 text-white hover:text-primary-300 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>

          {/* Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                {issue.title}
              </h1>
              <p className="text-xl text-white/90">
                {issue.subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {issue.sections.map((section: any, index: number) => (
            <section key={index} className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {section.heading}
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {section.content}
                </p>
              </div>
            </section>
          ))}

          {/* Call to Action */}
          <div className="mt-16 bg-primary-50 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Join Us in Making a Difference
            </h3>
            <p className="text-gray-700 mb-6">
              Together, we can address these challenges and build a better community for everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/en#contact"
                className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200"
              >
                Get Involved
              </Link>
              <Link
                href="/en#issues"
                className="border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-colors duration-200"
              >
                View All Issues
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

