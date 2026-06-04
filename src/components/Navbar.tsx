"use client"; // This component uses client-side features like useState and useEffect

import Link from "next/link";
import { useState, useEffect } from "react";
import { profile } from '../data/profile';
import React from 'react'; // Required for React.ReactNode types

// SVG Icons for social links (extracted from original Navbar.tsx for reusability within this component)
const GitHubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const LinkedInIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

interface NavbarProps {
  activeSection: string;
  setActiveSection: (sectionId: string) => void; // Added prop for updating active section
}

export default function Navbar({ activeSection, setActiveSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fallback for personalInfo if not provided
  const personalInfo = profile.personalInfo || { name: "Portfolio", title: "", tagline: "", description: "" };
  const navLinks = profile.navLinks || [];
  const socialLinks = profile.socialLinks || [];

  // Generate initials for the logo, fallback to "P" if name is not available
  const logoInitials = personalInfo.name
    ? personalInfo.name.split(' ').map(n => n[0]).join('')
    : "P";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ease-in-out
                  ${isScrolled ? "bg-gray-900/80 backdrop-blur-md shadow-lg border-b border-white/10" : "bg-transparent"}`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo / Name */}
        <Link
          href="#hero"
          className="text-white font-bold text-2xl tracking-tight hover:text-purple-300 transition-colors duration-300"
          aria-label={`${personalInfo.name} - Home`}
          onClick={() => setActiveSection("hero")} // Update active section on logo click
        >
          {logoInitials}
        </Link>

        {/* Navigation Links */}
        {navLinks.length > 0 && (
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.id} // Use link.id as key for uniqueness
                href={link.url}
                className={`relative text-white/80 hover:text-purple-300 transition-colors duration-300
                            ${activeSection === link.id
                                ? "text-purple-300 border-b-2 border-purple-500 pb-1" // Active styles: text color, bottom border, padding
                                : ""
                            }`}
                aria-current={activeSection === link.id ? "page" : undefined}
                onClick={() => setActiveSection(link.id)} // Update active section on link click
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}

        {/* Social links */}
        {socialLinks.length > 0 && (
          <div className="flex items-center gap-4">
            {socialLinks.map((socialLink) => {
              let IconComponent = null;
              if (socialLink.name.toLowerCase() === "github") {
                IconComponent = GitHubIcon;
              } else if (socialLink.name.toLowerCase() === "linkedin") {
                IconComponent = LinkedInIcon;
              }
              // Add more conditions for other social icons if needed, e.g., TwitterIcon

              if (IconComponent) {
                return (
                  <a
                    key={socialLink.name}
                    href={socialLink.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white/10 border border-white/10 text-white/80 hover:bg-white/20 hover:text-white hover:border-white/30 transition-all duration-300"
                    aria-label={socialLink.ariaLabel || `${socialLink.name} Profile`}
                    title={`${socialLink.name} Profile`}
                  >
                    <IconComponent />
                  </a>
                );
              }
              return null; // Don't render if no matching icon component
            })}
          </div>
        )}
      </div>
    </nav>
  );
}
