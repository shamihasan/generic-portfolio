import React from 'react';

interface AchievementItem {
  icon: string;
  title: string;
  description: string[];
  isCertification?: boolean;
}

const achievementsData: AchievementItem[] = [
  {
    icon: "🏅",
    title: "Salesforce Certified JavaScript Developer II",
    description: ["Achieved in 2025"],
    isCertification: true,
  },
  {
    icon: "🌟",
    title: "Bagisto Contributor",
    description: [
      "Contributed to 20K+ GitHub stars ecosystem",
      "Implemented scalability improvements for core modules",
    ],
  },
  {
    icon: "⚡",
    title: "Performance Optimization",
    description: [
      "Reduced Product Detail Page (PDP) load time by 30%",
      "Improved e-commerce conversions by 12% through frontend optimizations",
    ],
  },
  {
    icon: "🚚",
    title: "Logistics Platform Development",
    description: [
      "Developed features supporting 10K+ daily shipments",
      "Integrated real-time tracking systems for enhanced user experience",
    ],
  },
  {
    icon: "🤝",
    title: "Community & Leadership",
    description: [
      "Hosted SymfonyIndia Meetup, fostering knowledge sharing",
      "Mentored junior engineers on best practices and career growth",
      "Provided architecture guidance and conducted thorough code reviews",
    ],
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-purple-400">
          Achievements & Certifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievementsData.map((item, index) => (
            <div
              key={index}
              className="relative p-[1px] rounded-lg overflow-hidden group
                         transition-all duration-300 ease-in-out hover:scale-[1.02]"
            >
              {/* Animated gradient border */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Glassmorphism card content */}
              <div className={`relative bg-gray-900/80 backdrop-blur-md rounded-lg p-6 border border-white/20 group-hover:border-transparent h-full flex flex-col
                ${item.isCertification ? 'bg-gradient-to-br from-purple-800/50 to-indigo-800/50 border-purple-500' : ''}
              `}>
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-4 transition-transform duration-300 group-hover:scale-110">{item.icon}</span>
                  <h3 className="font-bold text-xl text-purple-300">{item.title}</h3>
                </div>
                <ul className="list-disc list-inside text-gray-200 space-y-2 flex-grow">
                  {item.description.map((desc, idx) => (
                    <li key={idx} className="text-base">
                      {/* Highlight metrics */}
                      {desc.includes("20K+ GitHub stars") && <span className="font-semibold text-purple-200">20K+ GitHub stars</span>}
                      {desc.includes("30% reduced") && <span className="font-semibold text-purple-200">30% reduced</span>}
                      {desc.includes("12% improved") && <span className="font-semibold text-purple-200">12% improved</span>}
                      {desc.includes("10K+ daily shipments") && <span className="font-semibold text-purple-200">10K+ daily shipments</span>}
                      {!desc.includes("20K+ GitHub stars") && !desc.includes("30% reduced") && !desc.includes("12% improved") && !desc.includes("10K+ daily shipments") && desc}
                    </li>
                  ))}
                </ul>
                {item.isCertification && (
                  <div className="mt-4 text-right text-sm text-gray-400 italic">
                    Certified Professional
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
