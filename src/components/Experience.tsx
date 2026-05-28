import React from 'react';

interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  achievements: string[];
  techStack: string[];
}

const experienceData: ExperienceItem[] = [
  {
    company: "New Relic",
    role: "Senior Software Engineer",
    duration: "Sep 2025 – Present",
    achievements: [
      "Led development of a new real-time analytics dashboard, improving data visualization by 30%.",
      "Optimized backend services, reducing latency by 15% and improving system reliability.",
      "Mentored junior engineers on best practices and scalable architecture patterns."
    ],
    techStack: ["TypeScript", "React", "Node.js", "GraphQL", "AWS", "Kubernetes"]
  },
  {
    company: "Encora Digital",
    role: "Senior Software Engineer",
    duration: "Sep 2021 – Sep 2025",
    achievements: [
      "Designed and implemented microservices for a large-scale e-commerce platform.",
      "Improved CI/CD pipelines, reducing deployment time by 25%.",
      "Collaborated with cross-functional teams to deliver high-quality software solutions."
    ],
    techStack: ["Java", "Spring Boot", "Kafka", "PostgreSQL", "Docker", "Azure"]
  },
  {
    company: "Webkul",
    role: "Senior Full-Stack Engineer",
    duration: "Feb 2018 – Sep 2021",
    achievements: [
      "Developed custom modules and extensions for various e-commerce platforms (Magento, Shopify).",
      "Contributed to the architecture and development of a SaaS product from conception to launch.",
      "Implemented responsive user interfaces using modern front-end frameworks."
    ],
    techStack: ["PHP", "Laravel", "Vue.js", "MySQL", "JavaScript", "HTML/CSS"]
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-purple-400">
          My Experience
        </h2>

        <div className="relative">
          {/* Vertical glowing timeline line - hidden on small screens, visible on md and up */}
          <div
            className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500 rounded-full shadow-lg"
            style={{ boxShadow: '0 0 15px rgba(168, 85, 247, 0.7), 0 0 30px rgba(236, 72, 153, 0.5)' }}
          ></div>

          {experienceData.map((item, index) => (
            <div
              key={index}
              className={`mb-8 flex flex-col md:grid md:grid-cols-[1fr_auto_1fr] items-center w-full`}
            >
              {/* Card for even index (left on md, top on sm) */}
              {index % 2 === 0 && (
                <div className="md:col-start-1 md:col-end-2 w-full md:w-auto p-6 rounded-lg shadow-xl transition-all duration-300 ease-in-out
                  bg-white/10 backdrop-blur-md border border-white/20
                  hover:scale-[1.02] hover:border-purple-400 hover:shadow-purple-500/50
                  md:text-right mb-4 md:mb-0
                ">
                  <h3 className="mb-2 font-bold text-xl text-purple-300">{item.company}</h3>
                  <p className="text-lg font-semibold text-white mb-1">{item.role}</p>
                  <p className="text-sm text-gray-300 mb-4">{item.duration}</p>
                  <ul className="list-disc list-inside text-gray-200 mb-4">
                    {item.achievements.map((achievement, idx) => (
                      <li key={idx} className="mb-1">{achievement}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 md:justify-end">
                    {item.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="inline-block bg-purple-600/30 text-purple-200 text-xs px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Timeline dot */}
              <div className="md:col-start-2 md:col-end-3 z-20 flex items-center bg-purple-500 shadow-xl w-8 h-8 rounded-full flex-shrink-0">
                <h1 className="mx-auto font-semibold text-lg text-white">{index + 1}</h1>
              </div>

              {/* Card for odd index (right on md, bottom on sm) */}
              {index % 2 !== 0 && (
                <div className="md:col-start-3 md:col-end-4 w-full md:w-auto p-6 rounded-lg shadow-xl transition-all duration-300 ease-in-out
                  bg-white/10 backdrop-blur-md border border-white/20
                  hover:scale-[1.02] hover:border-purple-400 hover:shadow-purple-500/50
                  md:text-left mt-4 md:mt-0
                ">
                  <h3 className="mb-2 font-bold text-xl text-purple-300">{item.company}</h3>
                  <p className="text-lg font-semibold text-white mb-1">{item.role}</p>
                  <p className="text-sm text-gray-300 mb-4">{item.duration}</p>
                  <ul className="list-disc list-inside text-gray-200 mb-4">
                    {item.achievements.map((achievement, idx) => (
                      <li key={idx} className="mb-1">{achievement}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 md:justify-start">
                    {item.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="inline-block bg-purple-600/30 text-purple-200 text-xs px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
