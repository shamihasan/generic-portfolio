import React from 'react';
import { profile } from '../data/profile'; // Import profile data
import { AchievementItem } from '../types/profile'; // Import the interface from types

export default function Achievements() {
  const achievementsSection = profile.achievements;

  if (!achievementsSection || !achievementsSection.items || achievementsSection.items.length === 0) {
    return null; // Hide section if no achievements data is available
  }

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12 text-purple-400">
        {achievementsSection.heading}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {achievementsSection.items.map((item: AchievementItem, index: number) => (
          <div
            key={index}
            className="relative p-[1px] rounded-lg overflow-hidden group
                       transition-all duration-300 ease-in-out hover:scale-[1.02]
                       focus-within:ring-2 focus-within:ring-purple-500 focus-within:ring-opacity-75" // Focus state for keyboard navigation
            tabIndex={0} // Make div focusable for keyboard navigation
            role="listitem" // Semantic role for list items
            aria-labelledby={`achievement-title-${index}`}
          >
            {/* Animated gradient border */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true"></div>

            {/* Glassmorphism card content */}
            <div className={`relative bg-gray-900/80 backdrop-blur-md rounded-lg p-6 border border-white/20 group-hover:border-transparent h-full flex flex-col`}>
              <div className="flex items-center mb-4">
                {item.icon && <span className="text-4xl mr-4 transition-transform duration-300 group-hover:scale-110" aria-hidden="true">{item.icon}</span>}
                <h3 id={`achievement-title-${index}`} className="font-bold text-xl text-purple-300">{item.title}</h3>
              </div>
              {item.description && (
                <ul className="list-disc list-inside text-gray-200 space-y-2 flex-grow" aria-label={`${item.title} details`}>
                  {Array.isArray(item.description) ? (
                    item.description.map((desc, idx) => (
                      <li key={idx} className="text-base" dangerouslySetInnerHTML={{ __html: desc }} />
                    ))
                  ) : (
                    <li className="text-base" dangerouslySetInnerHTML={{ __html: item.description }} />
                  )}
                </ul>
              )}
              {item.date && (
                <div className="mt-4 text-right text-sm text-gray-400 italic">
                  {item.date}
                </div>
              )}
              {item.link && (
                <div className="mt-4 text-right">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-300 hover:text-purple-400 text-sm font-semibold transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75 rounded-md px-2 py-1"
                    aria-label={`Learn more about ${item.title}`}
                  >
                    Learn More &rarr;
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
