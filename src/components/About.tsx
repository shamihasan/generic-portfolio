import { profile } from '@/data/profile'; // Updated import path to profile

export default function About() {
  const aboutData = profile.about;

  if (!aboutData) {
    return null; // Hide section if no about data is available in the profile
  }

  const { heading, intro, expertise, trackRecord, certificationSummary, highlights } = aboutData;

  return (
    <div className="min-h-screen px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-purple-900/20 to-slate-900" aria-hidden="true" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            {heading}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" aria-hidden="true" />
        </div>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left column - Professional introduction */}
          <div className="space-y-6">
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl hover:border-white/30 transition-all duration-300">
              {intro && <p className="text-white/80 text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: intro }} />}
              {expertise && <p className="text-white/70 mt-4 leading-relaxed" dangerouslySetInnerHTML={{ __html: expertise }} />}
              {trackRecord && <p className="text-white/70 mt-4 leading-relaxed" dangerouslySetInnerHTML={{ __html: trackRecord }} />}
              {certificationSummary && <p className="text-white/70 mt-4 leading-relaxed" dangerouslySetInnerHTML={{ __html: certificationSummary }} />}
            </div>
          </div>

          {/* Right column - Highlight cards */}
          {highlights && highlights.length > 0 && (
            <div className="grid gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="group backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 shadow-lg hover:bg-white/15 hover:border-white/30 hover:scale-[1.02] transition-all duration-300 cursor-default"
                  role="listitem"
                  aria-labelledby={`about-highlight-title-${index}`}
                  aria-describedby={`about-highlight-description-${index}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-purple-500/20 border border-purple-500/30 text-purple-300 group-hover:bg-purple-500/30 group-hover:border-purple-500/50 transition-all duration-300" aria-hidden="true">
                      {item.icon}
                    </div>
                    <div>
                      <h3 id={`about-highlight-title-${index}`} className="text-white font-semibold text-lg mb-1">
                        {item.title}
                      </h3>
                      <p id={`about-highlight-description-${index}`} className="text-white/60 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
