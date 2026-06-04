import React from 'react';
import { profile } from '../data/profile';
import { ExperienceItem } from '../types/profile'; // Import the interface from types

export default function Experience() {
  const experienceSection = profile.experience;

  if (!experienceSection || !experienceSection.items || experienceSection.items.length === 0) {
    return null; // Hide section if no experience data is available
  }

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12 text-purple-400">
        {experienceSection.heading}
      </h2>

      <div className="relative">
        {/* Vertical glowing timeline line - hidden on small screens, visible on md and up */}
        <div
          className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500 rounded-full shadow-lg"
          style={{ boxShadow: '0 0 15px rgba(168, 85, 247, 0.7), 0 0 30px rgba(236, 72, 153, 0.5)' }}
          aria-hidden="true" // Decorative element
        ></div>

        {experienceSection.items.map((item: ExperienceItem, index: number) => (
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
                focus-within:ring-2 focus-within:ring-purple-500 focus-within:ring-opacity-75" // Focus state for keyboard navigation
                tabIndex={0} // Make div focusable for keyboard navigation
                role="article" // Semantic role for experience entry
                aria-labelledby={`experience-company-${index}`}
                aria-describedby={`experience-role-${index}`}
              >
                <h3 id={`experience-company-${index}`} className="mb-2 font-bold text-xl text-purple-300">{item.company}</h3>
                <p id={`experience-role-${index}`} className="text-lg font-semibold text-white mb-1">{item.role}</p>
                <p className="text-sm text-gray-300 mb-4">{item.duration}</p>
                {item.responsibilities && item.responsibilities.length > 0 && (
                  <ul className="list-disc list-inside text-gray-200 mb-4" aria-label="Key responsibilities">
                    {item.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="mb-1">{responsibility}</li>
                    ))}
                  </ul>
                )}
                {item.techStack && item.techStack.length > 0 && (
                  <div className="flex flex-wrap gap-2 md:justify-end" aria-label="Technologies used">
                    {item.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="inline-block bg-purple-600/30 text-purple-200 text-xs px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Timeline dot */}
            <div className="md:col-start-2 md:col-end-3 z-20 flex items-center justify-center bg-purple-500 shadow-xl w-8 h-8 rounded-full flex-shrink-0" aria-hidden="true">
              <span className="font-semibold text-lg text-white">{index + 1}</span>
            </div>

            {/* Card for odd index (right on md, bottom on sm) */}
            {index % 2 !== 0 && (
              <div className="md:col-start-3 md:col-end-4 w-full md:w-auto p-6 rounded-lg shadow-xl transition-all duration-300 ease-in-out
                bg-white/10 backdrop-blur-md border border-white/20
                hover:scale-[1.02] hover:border-purple-400 hover:shadow-purple-500/50
                md:text-left mt-4 md:mt-0
                focus-within:ring-2 focus-within:ring-purple-500 focus-within:ring-opacity-75" // Focus state for keyboard navigation
                tabIndex={0} // Make div focusable for keyboard navigation
                role="article" // Semantic role for experience entry
                aria-labelledby={`experience-company-${index}`}
                aria-describedby={`experience-role-${index}`}
              >
                <h3 id={`experience-company-${index}`} className="mb-2 font-bold text-xl text-purple-300">{item.company}</h3>
                <p id={`experience-role-${index}`} className="text-lg font-semibold text-white mb-1">{item.role}</p>
                <p className="text-sm text-gray-300 mb-4">{item.duration}</p>
                {item.responsibilities && item.responsibilities.length > 0 && (
                  <ul className="list-disc list-inside text-gray-200 mb-4" aria-label="Key responsibilities">
                    {item.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="mb-1">{responsibility}</li>
                    ))}
                  </ul>
                )}
                {item.techStack && item.techStack.length > 0 && (
                  <div className="flex flex-wrap gap-2 md:justify-start" aria-label="Technologies used">
                    {item.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="inline-block bg-purple-600/30 text-purple-200 text-xs px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
