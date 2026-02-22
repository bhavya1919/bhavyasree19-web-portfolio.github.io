const skills = [
  {
    title: "Python Expertise",
    description:
      "Proficient in Python programming with hands-on data analysis experience, optimizing data workflows.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: "Power BI",
    description:
      "Proficient in data visualization and reporting using Power BI for actionable insights.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    title: "Excel Proficiency",
    description:
      "Strong Excel skills for efficient data manipulation and accurate analysis.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="3" y1="15" x2="21" y2="15" /><line x1="9" y1="3" x2="9" y2="21" /><line x1="15" y1="3" x2="15" y2="21" />
      </svg>
    ),
  },
  {
    title: "Communication",
    description:
      "Effective communication skills, able to convey complex ideas clearly and enhance team collaboration.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    title: "Management",
    description:
      "Excellent management and organizational abilities to drive projects forward.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Problem Solving",
    description:
      "Creative problem-solving skills leveraging AI and analytics to tackle real-world challenges.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" />
      </svg>
    ),
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="bg-[#e8f0f7] px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <p className="mb-2 font-mono text-xs tracking-widest text-[#4A7FA7] uppercase">
          Skills
        </p>
        <h2 className="mb-12 text-3xl font-bold text-[#0A1931]">
          What I Bring
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="group rounded-xl border border-[#B3CFE5] bg-[#F6FAFD] p-5 transition-all hover:border-[#4A7FA7] hover:shadow-md"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#4A7FA7]/10 text-[#4A7FA7] transition-colors group-hover:bg-[#4A7FA7]/20">
                {skill.icon}
              </div>
              <h3 className="mb-2 text-sm font-semibold text-[#0A1931]">
                {skill.title}
              </h3>
              <p className="text-xs text-[#1A3D63]/70 leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
