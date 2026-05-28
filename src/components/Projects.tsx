import React from "react";

const projectsData = [
  {
    title: "New Relic",
    description: "Cloud Cost Intelligence",
    highlights: [
      "Large-scale telemetry dashboards",
    ],
    techStack: ["React.js", "TypeScript", "GraphQL"],
  },
  {
    title: "1-800-Flowers",
    description: "Performance optimization",
    highlights: [
      "Improved PDP load time by 30%",
    ],
    techStack: ["React.js", "Next.js"],
  },
  {
    title: "Uber Freight",
    description: "Shipment tracking platform",
    highlights: [
      "Real-time logistics visibility",
      "Micro-frontend architecture",
    ],
    techStack: ["React.js", "Node.js", "Kafka"], // Assuming some backend tech for micro-frontend
  },
  {
    title: "Bagisto / Webkul",
    description: "Open-source e-commerce platform",
    highlights: [
      "Marketplace + SaaS modules",
    ],
    techStack: ["Vue.js", "Laravel", "Node.js"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-purple-400">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="flex flex-col bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-lg
                         hover:border-purple-400 hover:shadow-xl hover:shadow-purple-500/30
                         transition-all duration-300 ease-in-out transform hover:-translate-y-2"
            >
              <h3 className="text-2xl font-semibold mb-3 text-purple-300">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4 text-sm flex-grow">
                {project.description}
              </p>
              <ul className="list-disc list-inside text-gray-400 text-sm mb-4">
                {project.highlights.map((highlight, hIndex) => (
                  <li key={hIndex}>{highlight}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/10">
                {project.techStack.map((tech, tIndex) => (
                  <span
                    key={tIndex}
                    className="bg-purple-600/30 text-purple-200 text-xs font-medium px-2.5 py-0.5 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
