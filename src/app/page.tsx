"use client"; // This component uses client-side features like useState and useEffect

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen"; // Import the new LoadingScreen component
import ScrollToTopButton from "@/components/ScrollToTopButton"; // Import the new ScrollToTopButton
import SectionWrapper from "@/components/SectionWrapper"; // Import the new SectionWrapper
import { navLinks } from "@/data/portfolio"; // Import navLinks for dynamic section IDs

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("hero"); // State for active section

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Adjust loading time as needed

    // Intersection Observer for active section highlighting
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px", // Trigger when section is roughly in the middle of the viewport
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    // Observe all sections dynamically based on navLinks
    const sections = navLinks.map(link => document.getElementById(link.id)).filter(Boolean) as Element[];
    sections.forEach((section) => observer.observe(section));

    return () => {
      clearTimeout(timer);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <main className="relative">
      <Navbar activeSection={activeSection} />
      {/* Render sections dynamically based on navLinks or explicitly if content is complex */}
      <SectionWrapper id="hero" className="min-h-screen flex items-center justify-center">
        <Hero />
      </SectionWrapper>
      <SectionWrapper id="about">
        <About />
      </SectionWrapper>
      <SectionWrapper id="projects">
        <Projects />
      </SectionWrapper>
      <SectionWrapper id="experience">
        <Experience />
      </SectionWrapper>
      <SectionWrapper id="skills">
        <Skills />
      </SectionWrapper>
      <SectionWrapper id="achievements">
        <Achievements />
      </SectionWrapper>
      <SectionWrapper id="contact">
        <Contact />
      </SectionWrapper>
      <Footer />
      <ScrollToTopButton />
    </main>
  );
}
