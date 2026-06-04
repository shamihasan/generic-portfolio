import { Profile, NavLink, SocialLink, AboutHighlight } from '../../types/profile';
import React from 'react'; // Required for React.ReactNode types

// SVG Icons for Social Links (re-using from shubhamProfile for consistency, or define Himani-specific if needed)
const LinkedInIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.395-2.535 4-2.798 4-2.798 2.759 0 5 2.209 5 4.669v7.364z" />
  </svg>
);

// Placeholder for Dribbble Icon (if not already defined elsewhere)
const DribbbleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm9.006 13.006c-.002 4.41-3.588 7.994-8.006 7.994-4.418 0-8.004-3.584-8.006-7.994-.002-4.41 3.588-7.994 8.006-7.994 4.418 0 8.004 3.584 8.006 7.994zM12 2.006c-5.514 0-9.994 4.48-9.994 9.994 0 5.514 4.48 9.994 9.994 9.994 5.514 0 9.994-4.48 9.994-9.994 0-5.514-4.48-9.994-9.994-9.994zm-1.006 10.994c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3zm6 0c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z" />
  </svg>
);

// Placeholder for Behance Icon
const BehanceIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.006 16.006c-.002 4.41-3.588 7.994-8.006 7.994-4.418 0-8.004-3.584-8.006-7.994-.002-4.41 3.588-7.994 8.006-7.994 4.418 0 8.004 3.584 8.006 7.994zM12 2.006c-5.514 0-9.994 4.48-9.994 9.994 0 5.514 4.48 9.994 9.994 9.994 5.514 0 9.994-4.48 9.994-9.994 0-5.514-4.48-9.994-9.994-9.994zm-1.006 10.994c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3zm6 0c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z" />
  </svg>
);


export const himaniProfile: Profile = {
  personalInfo: {
    name: "Himani Mehrotra",
    title: "Assistant Manager - Finance",
    tagline:
      "Finance professional specializing in revenue management, MIS reporting, taxation, and financial compliance.",
    description:
      "Results-driven finance professional with 5+ years of experience in MIS Reporting, Revenue Management, GST, TDS Compliance, Financial Reporting, and ERP systems including Tally, Zoho, Sage and SAP.",
    resumeLink: "/resume/Himani-Mehrotra-Resume.pdf",
    profilePicture: "/images/himani_profile.jpg",
  },
  navLinks: [
    { id: "hero", name: "Home", url: "#hero" },
    { id: "about", name: "About", url: "#about" },
    { id: "projects", name: "Portfolio", url: "#projects" },
    { id: "experience", name: "Experience", url: "#experience" },
    { id: "skills", name: "Skills", url: "#skills" },
    { id: "achievements", name: "Achievements", url: "#achievements" },
    { id: "contact", name: "Contact", url: "#contact" },
  ],
  socialLinks: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/himani-mehrotra-a436a7256/",
      icon: <LinkedInIcon />,
      ariaLabel: "LinkedIn profile",
    },
  ],
  hero: {
    heading: "Assistant Manager - Finance",
    subheading:
      "Driving financial accuracy, compliance, and business growth through data-driven decision making.",
    callToAction: {
      text: "View Experience",
      url: "#experience",
    },
    image: "/images/hero_himani.jpg",
    techStackBadges: [
      "SAP FICO",
      "Tally Prime",
      "Zoho",
      "Sage",
      "GST",
      "Advanced Excel",
    ],
    resumeButtonText: "Download Resume",
  },
  about: {
    heading: "About Himani",
    intro: "Hi, I'm Himani! My journey in design and development is driven by a desire to solve real-world problems with elegant and functional solutions. I believe good design is invisible, and great design is empowering.",
    expertise: "My expertise lies in the full design process, from user research and wireframing to prototyping and high-fidelity UI design. I'm also skilled in translating designs into responsive web interfaces using React and modern CSS frameworks.",
    trackRecord: "I've successfully delivered intuitive designs for mobile apps, web platforms, and enterprise software, consistently focusing on user satisfaction and business goals.",
    certificationSummary: "Certified in Google UX Design and proficient in design tools like Figma, Adobe XD, and Sketch.",
    highlights: [
      { icon: <span>✨</span>, title: "User-Centric", description: "Always prioritizing the user's needs and experience." },
      { icon: <span>🎨</span>, title: "Visual Storyteller", description: "Communicating ideas effectively through visual design." },
      { icon: <span>💡</span>, title: "Innovative Thinker", description: "Bringing fresh perspectives and creative solutions." },
    ],
  },
  skills: {
    heading: "Core Expertise",
    categories: [
      {
        name: "Finance & Compliance",
        skills: [
          { name: "GST Compliance" },
          { name: "TDS Compliance" },
          { name: "Income Tax" },
          { name: "Revenue Management" },
          { name: "Audit Coordination" },
        ],
      },
      {
        name: "Reporting & Analysis",
        skills: [
          { name: "MIS Reporting" },
          { name: "Financial Analysis" },
          { name: "Financial Statements" },
          { name: "Variance Analysis" },
          { name: "Forecasting" },
        ],
      },
      {
        name: "ERP & Tools",
        skills: [
          { name: "SAP FICO" },
          { name: "Tally Prime" },
          { name: "Zoho" },
          { name: "Sage" },
          { name: "Advanced Excel" },
        ],
      },
    ],
  },
  experience: {
    heading: "Professional Experience",
    items: [
      {
        company: "Threecolts India Private Limited",
        role: "Assistant Manager - Finance",
        duration: "Sep 2024 – Present",
      },
      {
        company: "Cedcoss Technology Private Limited",
        role: "Accountant",
        duration: "Apr 2021 – Aug 2024",
      },
      {
        company: "M/s True Partner Business Consultant",
        role: "Finance Intern",
        duration: "Jun 2019 – Mar 2020",
      },
    ],
  },
  projects: {
    heading: "Selected Design Portfolio",
    items: [
      {
        title: "Mobile Banking App Redesign",
        description: "A complete redesign of a banking application, focusing on simplifying complex financial tasks and improving user trust through intuitive UI.",
        techStack: ["Figma", "User Research", "Prototyping", "Design System"],
        liveLink: "https://dribbble.com/shots/banking-app-redesign",
        category: "UI/UX Design",
        features: ["Simplified navigation", "Personalized dashboards", "Secure transaction flows", "Dark mode support"],
      },
      {
        title: "E-learning Platform UI Kit",
        description: "Developed a comprehensive UI kit for an e-learning platform, ensuring consistency and scalability across various course modules and user roles.",
        techStack: ["Figma", "Design System", "Component Library", "Atomic Design"],
        liveLink: "https://behance.net/gallery/elearning-ui-kit",
        category: "UI Design",
        features: ["Reusable components", "Style guide", "Accessibility considerations", "Interactive elements"],
      },
      {
        title: "Healthcare Dashboard Concept",
        description: "A conceptual design for a healthcare provider dashboard, aiming to visualize patient data and administrative tasks efficiently.",
        techStack: ["Adobe XD", "Data Visualization", "Wireframing", "User Flows"],
        category: "UX Design",
        features: ["Patient overview", "Appointment management", "Analytics charts", "Secure data access"],
      },
    ],
  },
  achievements: {
    heading: "Key Achievements",
    items: [
      {
        icon: "🏆",
        title: "Chargebee Integration",
        description: [
          "Integrated Chargebee with Sage Accounting Software, automating invoice generation and reconciliation."
        ],
      },
      {
        icon: "⚡",
        title: "20% Faster Month-End Closing",
        description: [
          "Reduced month-end financial closing time by 20% through process optimization and automation."
        ],
      },
      {
        icon: "✅",
        title: "Audit Excellence",
        description: [
          "Successfully coordinated statutory and internal audits with no major non-compliance issues."
        ],
      },
    ],
  },
  certifications: {
    heading: "Certifications",
    items: [
      {
        name: "SAP FICO & HANA",
        issuer: "Henry Harvin",
        dateIssued: "",
      },
      {
        name: "Advanced Excel Training",
        issuer: "Professional Certification",
        dateIssued: "",
      },
      {
        name: "Diploma in Financial Accounting (Tally ERP)",
        issuer: "National Development Foundation",
        dateIssued: "",
      },
    ],
  },
  education: {
    heading: "Education",
    items: [
      {
        institution: "University of Lucknow",
        degree: "Master of Commerce",
        fieldOfStudy: "Commerce",
        duration: "2016 - 2018",
        location: "Lucknow, India",
      },
      {
        institution: "University of Lucknow",
        degree: "Bachelor of Commerce",
        fieldOfStudy: "Commerce",
        duration: "2013 - 2016",
        location: "Lucknow, India",
      },
    ],
  },
  contact: {
    heading: "Let's Connect",
    description:
      "Open to finance, accounting, reporting, taxation, and compliance opportunities.",
    email: "himanimehrotra959@gmail.com",
    phone: "7843979800",
    location: "Lucknow / Delhi, India",
  },
};
