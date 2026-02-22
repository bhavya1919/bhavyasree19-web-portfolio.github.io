const education = [
  {
    degree: "B.Tech in Computer Science",
    institution: "CMR Institute of Technology",
    period: "Sep 2023 - Present",
    status: "Currently Pursuing",
  },
  {
    degree: "Intermediate",
    institution: "Sri Chaitanya Junior Kalasala",
    period: "Apr 2021 - Mar 2023",
    status: "Completed",
  },
]

export function EducationSection() {
  return (
    <section id="education" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <p className="mb-2 font-mono text-xs tracking-widest text-[#4A7FA7] uppercase">
          Education
        </p>
        <h2 className="mb-12 text-3xl font-bold text-[#0A1931]">
          Academic Background
        </h2>

        <div className="space-y-6">
          {education.map((edu) => (
            <div
              key={edu.degree}
              className="group rounded-xl border border-[#B3CFE5] bg-[#F6FAFD] p-6 transition-all hover:border-[#4A7FA7] hover:shadow-md"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-lg font-semibold text-[#0A1931]">
                  {edu.degree}
                </h3>
                <span className="font-mono text-xs text-[#4A7FA7]">
                  {edu.period}
                </span>
              </div>
              <p className="mt-1 text-sm text-[#1A3D63]/70">
                {edu.institution}
              </p>
              <span
                className={`mt-3 inline-block rounded-full px-3 py-1 text-xs font-medium ${
                  edu.status === "Currently Pursuing"
                    ? "bg-[#4A7FA7]/15 text-[#4A7FA7]"
                    : "bg-[#B3CFE5]/30 text-[#1A3D63]"
                }`}
              >
                {edu.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
