"use client"; // Ensure this is a client component if it uses hooks

import { useProfile } from '@/context/ProfileContext'; // Import useProfile hook
import React from 'react'; // Required for React.ReactNode types

export default function Hero() {
  const { profile } = useProfile(); // Get profile from context

  if (!profile || !profile.personalInfo || !profile.hero) {
    return null; // Or a fallback UI if essential profile data is missing or profile is not loaded
  }

  const personalInfo = profile.personalInfo;
  const heroSection = profile.hero;
  const socialLinks = profile.socialLinks || [];

  const { name, title, description, resumeLink } = personalInfo;
  const { heading, subheading, callToAction, techStackBadges, resumeButtonText } = heroSection; // Destructure new fields

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden w-full">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" aria-hidden="true" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} aria-hidden="true" />
      
      {/* Glassmorphism card */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-16">
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl">
          {/* Tech stack badges */}
          {techStackBadges && techStackBadges.length > 0 && ( // Use techStackBadges from profile
            <div className="flex flex-wrap justify-center gap-2 mb-8" aria-label="Key Technologies">
              {techStackBadges.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm font-medium text-white/80 bg-white/10 border border-white/10 rounded-full hover:bg-white/20 hover:border-white/30 transition-all duration-300 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
          
          {/* Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center text-white mb-4 tracking-tight">
            {name}
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-center text-purple-300 mb-6 font-medium">
            {title}
          </p>
          
          {/* Professional intro */}
          {description && (
            <p className="text-center text-white/70 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              {description}
            </p>
          )}
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            {callToAction && (
              <a
                href={callToAction.url}
                target={callToAction.external ? "_blank" : "_self"}
                rel={callToAction.external ? "noopener noreferrer" : ""}
                className="group relative px-8 py-3 bg-white text-slate-900 font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
                aria-label={callToAction.text}
              >
                <span className="relative z-10">{callToAction.text}</span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
              </a>
            )}
            {resumeLink && (
              <a
                href={resumeLink}
                download
                className="group px-8 py-3 border-2 border-white/30 text-white font-semibold rounded-full transition-all duration-300 hover:bg-white/10 hover:border-white/50 hover:scale-105 btn-glow"
                aria-label={`Download ${name}'s Resume`}
              >
                {resumeButtonText || "Download Resume"} {/* Use resumeButtonText from profile */}
              </a>
            )}
          </div>
          
          {/* Social links */}
          {socialLinks.length > 0 && (
            <div className="flex justify-center gap-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/10 border border-white/10 text-white/80 hover:bg-white/20 hover:text-white hover:border-white/30 transition-all duration-300 hover:scale-110"
                  aria-label={`${link.name} Profile`}
                  title={`${link.name} Profile`}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
