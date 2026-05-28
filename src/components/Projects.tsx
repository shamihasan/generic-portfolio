import React from "react";

const projectsData = [
  {
    title: "New Relic",
    description: "Cloud Cost Intelligence Platform",
    highlights: [
      "Developed large-scale telemetry dashboards for real-time data visualization.",
      "Optimized data fetching and rendering for complex analytics views.",
    ],
    techStack: ["React.js", "TypeScript", "GraphQL", "AWS"],
    githubLink: "https://github.com/yourusername/newrelic-project-placeholder", // Placeholder
    liveDemoLink: "#", // Placeholder
  },
  {
    title: "1-800-Flowers",
    description: "E-commerce Performance Optimization",
    highlights: [
      "Reduced Product Detail Page (PDP) load time by 30%, significantly improving user experience.",
      "Implemented critical frontend optimizations, boosting e-commerce conversions by 12%.",
    ],
    techStack: ["React.js", "Next.js", "Lighthouse", "Core Web Vitals"],
    githubLink: "https://github.com/yourusername/1800flowers-project-placeholder", // Placeholder
    liveDemoLink: "#", // Placeholder
  },
  {
    title: "Uber Freight",
    description: "Real-time Shipment Tracking Platform",
    highlights: [
      "Engineered features for real-time logistics visibility, handling 10K+ daily shipments.",
      "Contributed to a robust micro-frontend architecture for enhanced scalability and maintainability.",
    ],
    techStack: ["React.js", "Node.js", "Kafka", "Microservices"],
    githubLink: "https://github.com/yourusername/uberfreight-project-placeholder", // Placeholder
    liveDemoLink: "#", // Placeholder
  },
  {
    title: "Bagisto / Webkul",
    description: "Open-source E-commerce Ecosystem",
    highlights: [
      "Developed marketplace and SaaS modules for a 20K+ GitHub stars ecosystem.",
      "Implemented scalability improvements for core modules, enhancing platform stability.",
    ],
    techStack: ["Vue.js", "Laravel", "Node.js", "MySQL"],
    githubLink: "https://github.com/yourusername/bagisto-project-placeholder", // Placeholder
    liveDemoLink: "#", // Placeholder
  },
];

export default function Projects() {
  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12 text-purple-400">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="relative flex flex-col bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-lg
                       hover:border-purple-400 hover:shadow-xl hover:shadow-purple-500/30
                       transition-all duration-300 ease-in-out transform hover:-translate-y-2
                       project-card-spotlight" // Apply the spotlight effect
            tabIndex={0} // Make div focusable for keyboard navigation
            role="article" // Semantic role for project entry
            aria-labelledby={`project-title-${index}`}
            aria-describedby={`project-description-${index}`}
          >
            <h3 id={`project-title-${index}`} className="text-2xl font-semibold mb-3 text-purple-300">
              {project.title}
            </h3>
            <p id={`project-description-${index}`} className="text-gray-300 mb-4 text-sm flex-grow">
              {project.description}
            </p>
            <ul className="list-disc list-inside text-gray-400 text-sm mb-4" aria-label={`${project.title} highlights`}>
              {project.highlights.map((highlight, hIndex) => (
                <li key={hIndex}>{highlight}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/10" aria-label="Technologies used">
              {project.techStack.map((tech, tIndex) => (
                <span
                  key={tIndex}
                  className="bg-purple-600/30 text-purple-200 text-xs font-medium px-2.5 py-0.5 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-3 mt-6">
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 px-4 py-2 bg-purple-600/40 text-purple-200 text-sm rounded-full hover:bg-purple-500/60 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  GitHub
                </a>
              )}
              {project.liveDemoLink && project.liveDemoLink !== "#" && (
                <a
                  href={project.liveDemoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 px-4 py-2 bg-purple-600/40 text-purple-200 text-sm rounded-full hover:bg-purple-500/60 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75"
                  aria-label={`View live demo of ${project.title}`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
