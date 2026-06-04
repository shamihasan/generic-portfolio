import React from 'react';
import { profile } from '../data/profile';
import { SkillCategory } from '../types/profile'; // Import the interface from types

export default function Skills() {
  const skillsSection = profile.skills;

  if (!skillsSection || !skillsSection.categories || skillsSection.categories.length === 0) {
    return null; // Hide section if no skills data is available
  }

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-6 text-purple-400">
        {skillsSection.heading}
      </h2>
      {skillsSection.description && (
        <p className="text-center text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
          {skillsSection.description}
        </p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillsSection.categories.map((category: SkillCategory, index: number) => (
          <div
            key={index}
            className="relative p-[1px] rounded-lg overflow-hidden group
                       transition-all duration-300 ease-in-out hover:scale-[1.02]
                       focus-within:ring-2 focus-within:ring-purple-500 focus-within:ring-opacity-75" // Focus state for keyboard navigation
            tabIndex={0} // Make div focusable for keyboard navigation
            role="listitem" // Semantic role for list items
            aria-labelledby={`skill-category-${index}`}
          >
            {/* Animated gradient border */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true"></div>

            {/* Glassmorphism card content */}
            <div className="relative bg-gray-900/80 backdrop-blur-md rounded-lg p-6 border border-white/20 group-hover:border-transparent h-full flex flex-col">
              <div className="flex items-center mb-4">
                {category.icon && <span className="text-3xl mr-3" aria-hidden="true">{category.icon}</span>}
                <h3 id={`skill-category-${index}`} className="font-bold text-2xl text-purple-300">{category.name}</h3>
              </div>
              {category.skills && category.skills.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-auto" aria-label={`${category.name} skills`}> {/* mt-auto pushes skills to bottom if card height varies */}
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
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
