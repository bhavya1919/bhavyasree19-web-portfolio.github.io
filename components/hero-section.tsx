import Image from "next/image"

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center px-6"
    >
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-[#B3CFE5]/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-[#4A7FA7]/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-8 text-center">
        {/* Profile Image */}
        <div className="relative">
          <div className="absolute -inset-1 rounded-full bg-[#4A7FA7]/20 blur-md" />
          <Image
            src="/images/profile.png"
            alt="Bhavya Sree - Computer Science Student"
            width={160}
            height={160}
            className="relative rounded-full border-4 border-[#B3CFE5] object-cover shadow-lg"
            priority
          />
        </div>

        <div>
          <p className="mb-2 font-mono text-sm tracking-widest text-[#4A7FA7] uppercase">
            Computer Science Student
          </p>
          <h1 className="text-balance text-4xl font-bold tracking-tight text-[#0A1931] md:text-6xl">
            Bijili Bhavya Sree
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-[#1A3D63]/70 leading-relaxed">
            Data Analytics &middot; Artificial Intelligence &middot; Python Programming &middot; Continuous Learner
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="rounded-lg bg-[#0A1931] px-6 py-3 text-sm font-medium text-[#F6FAFD] transition-all hover:bg-[#1A3D63] hover:shadow-lg"
          >
            Get in Touch
          </a>
          <a
            href="https://linkedin.com/in/bhavya-sree-478106297"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-[#B3CFE5] px-6 py-3 text-sm font-medium text-[#0A1931] transition-all hover:bg-[#B3CFE5]/30"
          >
            LinkedIn
          </a>
          <a
            href="tel:9494076410"
            className="rounded-lg border border-[#B3CFE5] px-6 py-3 text-sm font-medium text-[#0A1931] transition-all hover:bg-[#B3CFE5]/30"
          >
            Call
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-8 animate-bounce">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#4A7FA7"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14" />
            <path d="m19 12-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  )
}
