export function ContactSection() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-2 font-mono text-xs tracking-widest text-[#4A7FA7] uppercase">
          Contact
        </p>
        <h2 className="mb-4 text-3xl font-bold text-[#0A1931]">
          {"Let's Connect"}
        </h2>
        <p className="mb-12 text-[#1A3D63]/70">
          {"I'm always open to discussing new opportunities, projects, or just having a chat about tech."}
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          {/* Email */}
          <a
            href="mailto:bhavya101929@gmail.com"
            className="flex w-full items-center gap-3 rounded-xl border border-[#B3CFE5] bg-[#F6FAFD] px-5 py-4 text-left transition-all hover:border-[#4A7FA7] hover:shadow-md sm:w-auto"
          >
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#4A7FA7]/10 text-[#4A7FA7]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-[#1A3D63]/50">Email</p>
              <p className="text-sm font-medium text-[#0A1931]">
                bhavya101929@gmail.com
              </p>
            </div>
          </a>

          {/* Phone */}
          <a
            href="tel:9494076410"
            className="flex w-full items-center gap-3 rounded-xl border border-[#B3CFE5] bg-[#F6FAFD] px-5 py-4 text-left transition-all hover:border-[#4A7FA7] hover:shadow-md sm:w-auto"
          >
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#4A7FA7]/10 text-[#4A7FA7]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-[#1A3D63]/50">Phone</p>
              <p className="text-sm font-medium text-[#0A1931]">9494076410</p>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/bhavya-sree-478106297"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center gap-3 rounded-xl border border-[#B3CFE5] bg-[#F6FAFD] px-5 py-4 text-left transition-all hover:border-[#4A7FA7] hover:shadow-md sm:w-auto"
          >
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#4A7FA7]/10 text-[#4A7FA7]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-[#1A3D63]/50">LinkedIn</p>
              <p className="text-sm font-medium text-[#0A1931]">Bhavya Sree</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
