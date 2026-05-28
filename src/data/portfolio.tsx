import React from 'react';

// --- Interfaces ---

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  description: string;
  resumeLink: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode; // Using React.ReactNode for SVG icons or similar
}

export interface NavLink {
  id: string;
  name: string;
  url: string;
}

export interface AboutHighlight {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface AboutContent {
  heading: string;
  intro: string;
  expertise: string;
  trackRecord: string;
  certificationSummary: string;
  highlights: AboutHighlight[];
}

export interface AchievementItem {
  icon: string; // Using string for emoji/text icon
  title: string;
  description: string[];
  isCertification?: boolean;
}

export interface AchievementsContent {
  heading: string;
  items: AchievementItem[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  achievements: string[];
  techStack: string[];
}

export interface ExperienceContent {
  heading: string;
  items: ExperienceItem[];
}

export interface ProjectItem {
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  liveLink?: string;
  githubLink?: string;
}

export interface ProjectsContent {
  heading: string;
  items: ProjectItem[];
}

export interface Skill {
  name: string;
}

export interface SkillCategory {
  name: string;
  icon: string; // Using string for emoji/text icon
  skills: Skill[];
}

export interface SkillsContent {
  heading: string;
  categories: SkillCategory[];
}

export interface ContactInfo {
  heading: string;
  description: string;
  email: string;
  phone?: string;
  linkedin?: string;
  github?: string;
}

// --- Data ---

export const personalInfo: PersonalInfo = {
  name: "Shubham Mehrotra",
  title: "Senior Full-Stack Engineer",
  tagline: "Crafting scalable web solutions with a passion for performance and user experience.",
  description: "I am a seasoned full-stack engineer with a strong background in architecting and developing robust web applications. My expertise spans across modern frontend frameworks and powerful backend technologies, enabling me to deliver end-to-end solutions that drive business value.",
  resumeLink: "/path/to/your/resume.pdf", // Placeholder, update with actual path
};

export const socialLinks: SocialLink[] = [
  // Example social links - update with actual data
  { name: "GitHub", url: "https://github.com/yourusername", icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.47.087.686-.208.686-.468 0-.23-.009-1.05-.014-1.844-2.782.604-3.369-1.34-3.369-1.34-.455-1.157-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.007.07 1.532 1.03 1.532 1.03.894 1.53 2.344 1.088 2.91.832.091-.646.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.949 0-1.09.39-1.984 1.029-2.682-.103-.253-.446-1.27.097-2.646 0 0 .84-.27 2.75 1.025.798-.222 1.648-.333 2.495-.337.846.004 1.696.115 2.495.337 1.908-1.296 2.747-1.025 2.747-1.025.544 1.376.201 2.393.099 2.646.64.698 1.028 1.592 1.028 2.682 0 3.848-2.339 4.692-4.566 4.941.359.31.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .262.214.559.695.467C21.133 20.197 24 16.44 24 12.017 24 6.484 19.522 2 14 2h-2z" clipRule="evenodd" /></svg> },
  { name: "LinkedIn", url: "https://linkedin.com/in/yourusername", icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.395-2.535 4-2.798 4-2.798 2.759 0 5 2.209 5 4.669v7.364z"/></svg> },
];

export const navLinks: NavLink[] = [
  { id: "hero", name: "Home", url: "#hero" },
  { id: "about", name: "About", url: "#about" },
  { id: "projects", name: "Projects", url: "#projects" },
  { id: "experience", name: "Experience", url: "#experience" },
  { id: "skills", name: "Skills", url: "#skills" },
  { id: "achievements", name: "Achievements", url: "#achievements" },
  { id: "contact", name: "Contact", url: "#contact" },
];

export const aboutContent: AboutContent = {
  heading: "About Me",
  intro: "I am a <span class='text-purple-300 font-semibold'>Senior Full-Stack Engineer</span> with over 7 years of experience in architecting and developing scalable web applications and robust enterprise solutions.",
  expertise: "My expertise lies in crafting high-performance frontend systems using <span class='text-white font-medium'>React.js</span> and <span class='text-white font-medium'>Vue.js</span>, complemented by strong backend development skills in <span class='text-white font-medium'>Node.js</span> and <span class='text-white font-medium'>GraphQL</span>.",
  trackRecord: "I have a proven track record working with leading platforms like <span class='text-white font-medium'>New Relic</span>, contributing to application monitoring and <span class='text-white font-medium'>Cloud Cost Intelligence</span> solutions. I am deeply passionate about <span class='text-white font-medium'>performance optimization</span> and delivering exceptional user experiences.",
  certificationSummary: "As a <span class='text-purple-300 font-semibold'>Salesforce Certified JavaScript Developer II</span>, I bring extensive experience in e-commerce, SaaS platforms, and advanced cloud analytics.",
  highlights: [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "7+ Years Experience",
      description: "Building enterprise-grade web applications"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: "Salesforce Certified",
      description: "JavaScript Developer II credential"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      title: "Cloud & SaaS Solutions",
      description: "Expertise in cloud cost intelligence & analytics"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      title: "E-commerce Architect",
      description: "Designing scalable frontend systems"
    }
  ]
};

export const achievementsContent: AchievementsContent = {
  heading: "Achievements & Certifications",
  items: [
    {
      icon: "🏅",
      title: "Salesforce Certified JavaScript Developer II",
      description: ["Achieved in 2025, demonstrating advanced JavaScript proficiency and platform expertise."],
      isCertification: true,
    },
    {
      icon: "🌟",
      title: "Bagisto Contributor",
      description: [
        "Contributed to a <span class='font-semibold text-purple-200'>20K+ GitHub stars</span> open-source e-commerce ecosystem.",
        "Implemented significant scalability improvements for core modules, enhancing platform robustness.",
      ],
    },
    {
      icon: "⚡",
      title: "Performance Optimization Lead",
      description: [
        "Reduced Product Detail Page (PDP) load time by <span class='font-semibold text-purple-200'>30%</span>, directly improving user experience.",
        "Improved e-commerce conversions by <span class='font-semibold text-purple-200'>12%</span> through targeted frontend optimizations and Core Web Vitals improvements.",
      ],
    },
    {
      icon: "🚚",
      title: "Logistics Platform Development",
      description: [
        "Developed critical features supporting <span class='font-semibold text-purple-200'>10K+ daily shipments</span> for a major freight platform.",
        "Integrated real-time tracking systems, significantly enhancing user experience and operational transparency.",
      ],
    },
    {
      icon: "🤝",
      title: "Community & Technical Leadership",
      description: [
        "Hosted SymfonyIndia Meetup, fostering knowledge sharing and community growth.",
        "Mentored junior engineers on best practices, scalable architecture, and career development.",
        "Provided architecture guidance and conducted thorough code reviews, ensuring high code quality.",
      ],
    },
  ]
};

export const experienceContent: ExperienceContent = {
  heading: "Work Experience",
  items: [
    // Placeholder for experience data
    // {
    //   company: "Tech Solutions Inc.",
    //   role: "Senior Software Engineer",
    //   duration: "Jan 2020 - Present",
    //   achievements: [
    //     "Led development of a new microservices architecture.",
    //     "Mentored a team of 5 junior developers."
    //   ],
    //   techStack: ["React", "Node.js", "AWS", "GraphQL"]
    // }
  ]
};

export const projectsContent: ProjectsContent = {
  heading: "My Projects",
  items: [
    // Placeholder for project data
    // {
    //   title: "E-commerce Platform",
    //   description: "A full-stack e-commerce application with payment integration.",
    //   techStack: ["Next.js", "Stripe", "PostgreSQL"],
    //   imageUrl: "/images/project1.jpg",
    //   liveLink: "https://example.com/project1",
    //   githubLink: "https://github.com/yourusername/project1"
    // }
  ]
};

export const skillsContent: SkillsContent = {
  heading: "My Skills",
  categories: [
    // Placeholder for skills data
    // {
    //   name: "Frontend",
    //   icon: "💻",
    //   skills: [{ name: "React" }, { name: "Vue.js" }, { name: "TypeScript" }]
    // }
  ]
};

export const contactInfo: ContactInfo = {
  heading: "Let's Build Something Amazing",
  description: "I'm always open to new opportunities and collaborations. Whether you have a project in mind or just want to chat, feel free to reach out!",
  email: "your.email@example.com", // Placeholder, update with actual email
  // phone: "+1234567890",
  // linkedin: "https://linkedin.com/in/yourusername",
  // github: "https://github.com/yourusername",
};
