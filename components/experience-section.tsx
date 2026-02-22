const experiences = [
  {
    role: "Data Analytics Intern",
    company: "Novitech",
    period: "Jan 2024 - Feb 2024",
    description: "Tech company specializing in data analytics",
    bullets: [
      "Improved data quality by cleaning and preprocessing datasets, enhancing analysis accuracy",
      "Created basic visualizations and insights to support data-driven decision making",
      "Performed data cleaning, preprocessing, and exploratory data analysis using Python and Pandas",
    ],
    tags: ["Python", "Pandas", "Data Analysis", "Visualization"],
  },
  {
    role: "Artificial Intelligence Intern",
    company: "TechNook",
    period: "Mar 2024 - Apr 2024",
    description: "Company focusing on AI and machine learning applications",
    bullets: [
      "Acquired foundational knowledge in 3 AI concepts including regression and classification",
      "Practiced building simple ML models using Python, Pandas, NumPy, and Scikit-learn",
      "Learned basic AI and machine learning concepts such as regression and classification",
    ],
    tags: ["Python", "NumPy", "Scikit-learn", "Machine Learning"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="bg-[#0A1931] px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <p className="mb-2 font-mono text-xs tracking-widest text-[#4A7FA7] uppercase">
          Experience
        </p>
        <h2 className="mb-12 text-3xl font-bold text-[#F6FAFD]">Internships</h2>

        <div className="space-y-10">
          {experiences.map((exp) => (
            <div
              key={exp.role}
              className="relative rounded-xl border border-[#1A3D63] bg-[#1A3D63]/30 p-6 backdrop-blur-sm"
            >
              <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-lg font-semibold text-[#F6FAFD]">
                  {exp.role}
                </h3>
                <span className="font-mono text-xs text-[#B3CFE5]">
                  {exp.period}
                </span>
              </div>

              <p className="mb-1 text-sm font-medium text-[#4A7FA7]">
                {exp.company}
              </p>
              <p className="mb-4 text-sm text-[#B3CFE5]/70">{exp.description}</p>

              <ul className="mb-5 space-y-2">
                {exp.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-[#B3CFE5]/90 leading-relaxed"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#4A7FA7]" />
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[#4A7FA7]/20 px-3 py-1 text-xs text-[#B3CFE5]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
