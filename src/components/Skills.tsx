import React from 'react';

interface Skill {
  name: string;
}

interface SkillCategory {
  name: string;
  icon: string; // Using string for emoji/text icon
  skills: Skill[];
}

const skillsData: SkillCategory[] = [
  {
    name: "Frontend",
    icon: "💻",
    skills: [
      { name: "React.js" },
      { name: "Next.js" },
      { name: "Vue.js" },
      { name: "Nuxt.js" },
      { name: "TypeScript" },
      { name: "Redux" },
    ],
  },
  {
    name: "Backend",
    icon: "⚙️",
    skills: [
      { name: "Node.js" },
      { name: "Laravel" },
      { name: "Symfony" },
      { name: "REST APIs" },
      { name: "GraphQL" },
    ],
  },
  {
    name: "Cloud & DevOps",
    icon: "☁️",
    skills: [
      { name: "AWS" },
      { name: "Docker" },
      { name: "CI/CD" },
      { name: "Redis" },
      { name: "MongoDB" },
      { name: "MySQL" },
    ],
  },
  {
    name: "Tools & Testing",
    icon: "🛠️",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Jest" },
      { name: "Lighthouse" },
      { name: "Core Web Vitals" },
      { name: "Jira" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6 text-purple-400">
          Tech Stack & Skills
        </h2>
        <p className="text-center text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
          A comprehensive overview of the technologies and tools I leverage to build robust, scalable, and high-performance applications.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((category, index) => (
            <div
              key={index}
              className="relative p-[1px] rounded-lg overflow-hidden group
                         transition-all duration-300 ease-in-out hover:scale-[1.02]" // Subtle float on hover
            >
              {/* Animated gradient border */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Glassmorphism card content */}
              <div className="relative bg-gray-900/80 backdrop-blur-md rounded-lg p-6 border border-white/20 group-hover:border-transparent h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{category.icon}</span>
                  <h3 className="font-bold text-2xl text-purple-300">{category.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto"> {/* mt-auto pushes skills to bottom if card height varies */}
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="inline-block bg-purple-600/30 text-purple-200 text-sm px-4 py-2 rounded-full
                                 transition-transform duration-200 ease-in-out hover:scale-105 hover:bg-purple-500/50" // Animated tech badge
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
