"use client"; // Ensure this is a client component if it uses hooks

import React from 'react';
import { useProfile } from '@/context/ProfileContext'; // Import useProfile hook

// SVG Icons for social links
const GitHubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.08-.73.08-.73 1.205.085 1.838 1.238 1.838 1.238 1.07 1.835 2.809 1.305 3.49.998.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.175 0 0 1.005-.32 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.55 3.285-1.23 3.285-1.23.645 1.65.24 2.87.12 3.175.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const LinkedInIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.923-2.063-2.065 0-1.145.92-2.066 2.063-2.066 1.145 0 2.064.922 2.064 2.066 0 1.142-.92 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.209 24 24 23.227 24 22.271V1.729C24 .774 23.209 0 22.225 0z"/>
  </svg>
);

const EmailIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/>
  </svg>
);

export default function Contact() {
  const { profile } = useProfile(); // Get profile from context

  if (!profile || !profile.contact) {
    return null; // Hide section if no contact data is available or profile is not loaded
  }

  const contactData = profile.contact;
  const personalInfo = profile.personalInfo; // Still need personalInfo for resumeLink

  const socialLinks = contactData.socialLinks || [];

  return (
    <div className="max-w-4xl mx-auto text-center">
      <h2 id="contact-heading" className="text-4xl font-bold mb-6 text-purple-400">
        {contactData.heading}
      </h2>
      <p className="text-lg text-gray-300 mb-12">
        {contactData.description}
      </p>

      <div className="relative p-[1px] rounded-lg overflow-hidden group
                       transition-all duration-300 ease-in-out hover:scale-[1.02]
                       focus-within:ring-2 focus-within:ring-purple-500 focus-within:ring-opacity-75" // Focus state for keyboard navigation
           tabIndex={0} // Make div focusable for keyboard navigation
           role="region" // Semantic role for a section of content
           aria-labelledby="contact-heading"
      >
        {/* Animated gradient border */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true"></div>

        {/* Glassmorphism card content */}
        <div className="relative bg-gray-900/80 backdrop-blur-md rounded-lg p-8 border border-white/20 group-hover:border-transparent flex flex-col items-center">
          {contactData.location && (
            <p className="text-xl font-semibold text-white mb-4">
              {contactData.location}
            </p>
          )}

          {(socialLinks.length > 0 || contactData.email) && (
            <div className="flex space-x-6 mb-8">
              {socialLinks.map((socialLink) => {
                let IconComponent = null;
                if (socialLink.name.toLowerCase() === "github") {
                  IconComponent = GitHubIcon;
                } else if (socialLink.name.toLowerCase() === "linkedin") {
                  IconComponent = LinkedInIcon;
                }
                // Add more conditions for other social icons if needed

                if (IconComponent) {
                  return (
                    <a
                      key={socialLink.name}
                      href={socialLink.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-purple-400 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75 rounded-full p-1"
                      aria-label={socialLink.ariaLabel || `${socialLink.name} Profile`}
                      title={`${socialLink.name} Profile`}
                    >
                      <IconComponent className="w-8 h-8" />
                    </a>
                  );
                }
                return null;
              })}
              {contactData.email && (
                <a
                  href={`mailto:${contactData.email}`}
                  className="text-gray-300 hover:text-purple-400 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75 rounded-full p-1"
                  aria-label="Email Me"
                  title="Email Me"
                >
                  <EmailIcon className="w-8 h-8" />
                </a>
              )}
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4">
            {personalInfo?.resumeLink && (
              <a
                href={personalInfo.resumeLink}
                download
                className="px-8 py-3 bg-purple-600 text-white font-semibold rounded-full shadow-lg
                           hover:bg-purple-700 transition-all duration-300 ease-in-out
                           transform hover:-translate-y-1 hover:scale-105 btn-glow
                           focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75"
                aria-label={`Download ${personalInfo.name || 'My'} Resume`}
              >
                Download Resume
              </a>
            )}
            {contactData.email && (
              <a
                href={`mailto:${contactData.email}`}
                className="px-8 py-3 bg-transparent border border-purple-500 text-purple-300 font-semibold rounded-full shadow-lg
                           hover:bg-purple-500 hover:text-white transition-all duration-300 ease-in-out
                           transform hover:-translate-y-1 hover:scale-105
                           focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75"
                aria-label="Get In Touch via Email"
              >
                Get In Touch
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
