export default function About() {
  const highlights = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "8+ Years Experience",
      description: "Building enterprise-grade web applications"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: "Salesforce Certified",
      description: "JavaScript Developer credential"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      title: "Cloud & SaaS",
      description: "Cloud cost intelligence & analytics"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      title: "E-commerce",
      description: "Scalable frontend systems"
    }
  ];

  const techStack = [
    "React.js", "Vue.js", "Node.js", "TypeScript", "New Relic", "Cloud Analytics"
  ];

  return (
    <section className="min-h-screen py-20 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-purple-900/20 to-slate-900" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
        </div>

        {/* Main content */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left column - Bio */}
          <div className="space-y-6">
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl hover:border-white/30 transition-all duration-300">
              <p className="text-white/80 text-lg leading-relaxed">
                I'm a <span className="text-purple-300 font-semibold">Senior Full-Stack Engineer</span> with over 8 years of experience building scalable web applications and enterprise solutions.
              </p>
              <p className="text-white/70 mt-4 leading-relaxed">
                I specialize in crafting high-performance frontend systems using modern technologies like <span className="text-white font-medium">React.js</span>, <span className="text-white font-medium">Vue.js</span>, and <span className="text-white font-medium">TypeScript</span>. My expertise extends to backend development with <span className="text-white font-medium">Node.js</span> and building cloud-native applications with a focus on cost intelligence and analytics.
              </p>
              <p className="text-white/70 mt-4 leading-relaxed">
                As a <span className="text-purple-300 font-semibold">Salesforce Certified JavaScript Developer</span>, I bring deep experience in e-commerce, SaaS platforms, and cloud analytics solutions. I'm passionate about creating exceptional user experiences and elegant solutions to complex technical challenges.
              </p>
            </div>

            {/* Tech stack badges */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-white font-semibold mb-4 text-center">Tech Expertise</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 text-sm font-medium text-white/80 bg-white/10 border border-white/10 rounded-full hover:bg-white/20 hover:border-white/30 hover:scale-105 transition-all duration-300 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right column - Highlights */}
          <div className="grid gap-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 shadow-lg hover:bg-white/15 hover:border-white/30 hover:scale-[1.02] transition-all duration-300 cursor-default"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-purple-500/20 border border-purple-500/30 text-purple-300 group-hover:bg-purple-500/30 group-hover:border-purple-500/50 transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">
                      {item.title}
                    </h3>
                    <p className="text-white/60 text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
