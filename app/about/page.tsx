import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  const container = "mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-10";
  const heroBackgroundImages = [
    "/images/team/IMG_7143.jpg",
    "/images/team/IMG_7096.jpg",
  ];
  const heroLoopImages = [...heroBackgroundImages, ...heroBackgroundImages];
  const teamMembers = [
    {
      name: "Anodi Kaihula",
      role: "Founder & CEO",
      expertise: "Health infrastructure systems and innovation.",
      image: "/images/profile-images/Anodi_Kaihula_Headshot.jpeg",
      linkedin: "#",
    },
    {
      name: "Dr. Albert Mageuzi",
      role: "CTO",
      expertise: "Systems, data, and technology delivery.",
      image: "/images/profile-images/Dr. Albert Mageuzi profile.jpg",
      linkedin: "#",
    },
    {
      name: "Idda Abel",
      role: "CFO",
      expertise: "Finance, controls, and long-term sustainability.",
      image: "/images/profile-images/idah abela.jpeg",
      linkedin: "#",
    },
    {
      name: "Elia Walles",
      role: "Product Manager",
      expertise: "Product design and healthcare workflow execution.",
      image: "/images/profile-images/elia walles.jpeg",
      linkedin: "#",
    },
    {
      name: "Yohana Yona",
      role: "Business Development Manager",
      expertise: "Partnership growth and market implementation.",
      image: "/images/profile-images/yohana nyanza.jpeg",
      linkedin: "#",
    },
    {
      name: "Marry Yonaza",
      role: "Head of Afyabooking",
      expertise: "Digital operations and patient flow systems.",
      image: "/images/profile-images/mary mbonea.jpeg",
      linkedin: "#",
    },
    {
      name: "Aidan Conrad",
      role: "Accountant",
      expertise: "Financial reporting and accountability processes.",
      image: "/images/profile-images/aidan conrad.jpeg",
      linkedin: "#",
    },
  ];

  return (
    <main className="bg-white text-black">
      {/* 1) Hero */}
      <section className="relative w-full min-h-[62vh] overflow-hidden py-20 md:min-h-[72vh] md:py-28 lg:min-h-[78vh]">
        <div className="absolute inset-0 z-0">
          <div className="about-hero-slider h-full w-full">
            <div className="about-hero-track h-full">
              {heroLoopImages.map((src, index) => (
                <div key={`${src}-${index}`} className="about-hero-slide relative h-full">
                  <Image
                    src={src}
                    alt={`About hero background ${index + 1}`}
                    fill
                    priority={index === 0}
                    sizes="100vw"
                    className="object-cover contrast-110 saturate-110"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="absolute inset-0 bg-white/42" />
        </div>
        <div className={`${container} relative z-10`}>
          <div className="max-w-5xl pt-4 md:pt-8">
            <p className="inline-flex rounded-full border border-green-700/25 bg-white/90 px-3 py-1 text-xs font-bold tracking-[0.16em] text-green-700 uppercase backdrop-blur-sm">
              About Us
            </p>
            <h1 className="mt-3 text-4xl font-extrabold leading-[1.04] tracking-tight sm:text-5xl lg:text-6xl text-balance">
              <span className="bg-gradient-to-r from-black via-black to-green-800 bg-clip-text text-transparent">
                Resilient Energy.
              </span>{" "}
              <span className="bg-gradient-to-r from-green-700 to-emerald-500 bg-clip-text text-transparent">
                Intelligent Healthcare.
              </span>
            </h1>
            <p className="mt-5 max-w-3xl rounded-2xl border border-black/10 bg-white/88 px-5 py-4 text-base font-medium leading-8 text-black sm:text-lg">
              Ubuntu AfyaLink is building climate-resilient healthcare systems
              that keep facilities powered, connected, and ready to serve
              communities every day.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {[
                { label: "Powered Facilities", tint: "from-emerald-100 to-green-50" },
                { label: "Connected Operations", tint: "from-sky-100 to-cyan-50" },
                { label: "Community Ready", tint: "from-violet-100 to-fuchsia-50" },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`inline-flex items-center gap-2 rounded-full border border-black/10 bg-gradient-to-r ${item.tint} px-3 py-2 text-sm font-semibold text-black shadow-sm`}
                >
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white ring-1 ring-black/10">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-3.5 w-3.5 text-green-700"
                      aria-hidden="true"
                    >
                      <path
                        fill="currentColor"
                        d="M9.55 17.6 4.7 12.75l1.4-1.4 3.45 3.45 8.35-8.35 1.4 1.4z"
                      />
                    </svg>
                  </span>
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 1.1) Vision & Mission */}
      <section className="w-full py-10 md:py-14">
        <div className={container}>
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-3xl border border-green-700/20 bg-gradient-to-br from-white via-green-50 to-emerald-100 p-6 shadow-sm sm:p-8">
              <div className="flex items-start gap-4">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white ring-1 ring-green-700/20">
                  <svg viewBox="0 0 24 24" className="h-6 w-6 text-green-700" aria-hidden="true">
                    <path fill="currentColor" d="M12 3 2 12h3v8h5v-5h4v5h5v-8h3L12 3z" />
                  </svg>
                </span>
                <div>
                  <p className="text-xs font-bold tracking-[0.18em] text-green-700 uppercase">
                    Our Vision
                  </p>
                  <p className="mt-2 max-w-[26ch] text-2xl font-bold leading-9 text-black sm:text-[1.7rem]">
                    Every primary healthcare facility powered, connected, and resilient.
                  </p>
                </div>
              </div>
            </article>

            <article className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-start gap-4">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-green-50 ring-1 ring-green-700/20">
                  <svg viewBox="0 0 24 24" className="h-6 w-6 text-green-700" aria-hidden="true">
                    <path
                      fill="currentColor"
                      d="M12 2c4.42 0 8 3.58 8 8 0 5.25-8 12-8 12S4 15.25 4 10c0-4.42 3.58-8 8-8Zm0 3a5 5 0 1 0 .001 10.001A5 5 0 0 0 12 5Z"
                    />
                  </svg>
                </span>
                <div>
                  <p className="text-xs font-bold tracking-[0.18em] text-green-700 uppercase">
                    Mission
                  </p>
                  <p className="mt-2 max-w-[52ch] text-black text-base leading-8 sm:text-lg">
                    To build climate-resilient primary healthcare facilities by delivering reliable clean energy, intelligent operations, and embedded financing that strengthen performance, protect patients, and unlock sustainable growth.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 2) Our Story */}
      <section className="w-full bg-green-50/40 py-16 md:py-20">
        <div className={container}>
          <p className="text-xs font-bold tracking-[0.18em] text-green-700 uppercase">
            Our Story
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
            <span className="text-black">Why Ubuntu AfyaLink</span>{" "}
            <span className="text-green-700">was created</span>
          </h2>
          <p className="mt-3 max-w-3xl text-black text-lg leading-8">
            Built from lived frontline experience to solve the infrastructure
            and coordination barriers that primary healthcare teams face daily.
          </p>

          <div className="mt-8 rounded-3xl border border-black/10 bg-white p-7 shadow-sm sm:p-8">
            <div className="mb-6 flex flex-wrap gap-3">
              {[
                "Frontline reality",
                "Reliable infrastructure",
                "Coordinated operations",
              ].map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full border border-black/10 bg-gradient-to-r from-white to-green-50 px-3 py-1.5 text-sm font-semibold text-black"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="grid gap-7 lg:grid-cols-[1.08fr_0.92fr]">
              <div>
                <p className="max-w-[70ch] text-black text-[1.03rem] leading-8">
                  We experienced, as healthcare professionals, what it means to
                  serve primary healthcare facilities in Tanzania under difficult
                  conditions. The experience of delivering care using phone torches
                  inspired us to make a lasting difference.
                </p>

                <div className="mt-6 rounded-2xl border border-green-700/25 bg-gradient-to-r from-emerald-50 to-green-100/70 p-5">
                  <p className="text-base font-semibold text-black">
                    Ubuntu AfyaLink was created to address these foundational gaps.
                  </p>
                  <p className="mt-2 text-black text-[1.02rem] leading-8">
                    We strengthen the infrastructure and operational systems that
                    primary healthcare facilities depend on, so providers can
                    deliver care with greater reliability and confidence.
                  </p>
                </div>
              </div>

              <aside className="rounded-2xl border border-black/10 bg-gradient-to-br from-white to-green-50/60 p-5">
                <p className="text-base font-semibold tracking-tight text-black">
                  Across many communities, healthcare facilities operate under pressure:
                </p>
                <ul className="mt-4 space-y-3 text-black">
                  {[
                    "Power outages interrupt services.",
                    "Vaccine refrigeration becomes unreliable.",
                    "Water access can be inconsistent.",
                    "Patient coordination is often fragmented.",
                  ].map((item) => (
                    <li
                      key={item}
                      className="rounded-xl border border-black/10 bg-white px-4 py-3 text-base leading-7"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </aside>
            </div>
          </div>
        </div>
      </section>

      {/* 3) What We Believe */}
      <section className="w-full py-16 md:py-20">
        <div className={container}>
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <h2 className="text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
              <span className="text-green-700">What</span>{" "}
              <span className="text-black">we believe</span>
            </h2>
            <div className="hidden items-center gap-3 sm:flex">
              <div className="h-12 w-12 rounded-full border border-violet-700/20 bg-gradient-to-br from-violet-200/80 to-fuchsia-100/80 shadow-sm" />
              <div className="h-12 w-12 rounded-full border border-emerald-700/20 bg-gradient-to-br from-emerald-200/80 to-green-100/80 shadow-sm" />
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Healthcare starts with reliable infrastructure",
                desc: "Before digital tools or advanced services can work, facilities must have dependable power and stable systems.",
                classes:
                  "border-emerald-600/25 from-emerald-200/90 via-emerald-50 to-white",
                icon: "⚡",
              },
              {
                title: "Local systems build stronger health systems",
                desc: "Solutions must be designed around the real operating conditions of African healthcare facilities. Practicality matters more than complexity.",
                classes:
                  "border-sky-600/25 from-sky-200/90 via-sky-50 to-white",
                icon: "🌍",
              },
              {
                title: "Communities should benefit from resilient systems",
                desc: "Stronger health infrastructure should also create local opportunity, knowledge, and long-term capacity.",
                classes:
                  "border-violet-600/25 from-violet-200/90 via-violet-50 to-white",
                icon: "🤝",
              },
            ].map((card, idx) => (
              <article
                key={card.title}
                className={[
                  "group rounded-3xl border bg-gradient-to-br p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md",
                  card.classes,
                ].join(" ")}
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/15 bg-white text-sm font-extrabold text-green-700 shadow-sm">
                    {idx + 1}
                  </span>
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/85 text-base ring-1 ring-black/10">
                    {card.icon}
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-extrabold tracking-tight text-black">
                  {card.title}
                </h3>
                <p className="mt-3 text-black text-base leading-8">{card.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4) Our Core Values */}
      <section className="w-full bg-green-50/40 py-16 md:py-20">
        <div className={container}>
          <div className="max-w-4xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
              <span className="text-black">Our Core</span>{" "}
              <span className="text-green-700">Values</span>
            </h2>
            <p className="mt-3 text-black text-lg leading-8">
              These principles guide how we build our company, work with partners,
              and serve healthcare providers.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Ubuntu",
                lines: [
                  "We are because others are.",
                  "We lead with compassion, community, inclusivity, and collaboration.",
                ],
                icon: "🤝",
                accent: "from-emerald-200/80 via-emerald-50 to-white",
                border: "border-emerald-600/25",
              },
              {
                title: "Kaizen",
                lines: [
                  "We believe in continuous improvement, however small.",
                  "Progress comes from learning and refining every day.",
                ],
                icon: "📈",
                accent: "from-sky-200/80 via-sky-50 to-white",
                border: "border-sky-600/25",
              },
              {
                title: "Radical Ownership",
                lines: [
                  "Everyone is a leader.",
                  "We take responsibility for outcomes and work together to solve problems.",
                ],
                icon: "🧭",
                accent: "from-violet-200/80 via-violet-50 to-white",
                border: "border-violet-600/25",
              },
              {
                title: "Experiment Boldly",
                lines: [
                  "Innovation is our duty.",
                  "We try, we fail, we learn, and we rise stronger.",
                ],
                icon: "🚀",
                accent: "from-amber-200/80 via-amber-50 to-white",
                border: "border-amber-600/25",
              },
            ].map((v, idx) => (
              <article
                key={v.title}
                className={[
                  "rounded-3xl border bg-gradient-to-br p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-7",
                  v.border,
                  v.accent,
                  idx % 2 === 1 ? "md:translate-y-2" : "",
                ].join(" ")}
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/15 bg-white text-sm font-extrabold text-green-700 shadow-sm">
                    {idx + 1}
                  </span>
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/90 text-lg ring-1 ring-black/10">
                    {v.icon}
                  </span>
                </div>
                <h3 className="text-2xl font-extrabold tracking-tight text-black">
                  {v.title}
                </h3>
                <p className="mt-3 text-black text-base font-semibold leading-8">{v.lines[0]}</p>
                <p className="mt-2 text-black text-base leading-8">{v.lines[1]}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5) The Ubuntu Philosophy */}
      <section className="w-full py-16 md:py-20">
        <div className={container}>
          <div className="rounded-3xl border border-black/10 bg-gradient-to-br from-white via-green-50/35 to-emerald-100/40 p-8 shadow-sm sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
              <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-green-700/20 bg-white px-3 py-1.5 text-xs font-bold tracking-[0.14em] text-green-700 uppercase">
                Ubuntu Philosophy
              </div>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
                <span className="text-black">The meaning behind</span>{" "}
                <span className="text-green-700">our name</span>
              </h2>
              <p className="mt-5 max-w-[70ch] text-black text-lg leading-8">
                Ubuntu is an African philosophy centered on shared humanity. It
                expresses the idea that people thrive through the wellbeing of
                others.
              </p>
              <p className="mt-4 max-w-[70ch] text-black text-lg leading-8">
                For us, this principle guides how we design systems, work with
                partners, and engage communities. Healthcare infrastructure is not
                only technical - it is deeply human.
              </p>
              </div>
              <aside className="rounded-2xl border border-black/10 bg-white/80 p-5 shadow-sm">
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-green-700">
                  Living Ubuntu
                </p>
                <p className="mt-3 text-black text-base leading-7">
                  We apply this philosophy in every partnership, design decision,
                  and service model to make healthcare systems more humane,
                  resilient, and community-driven.
                </p>
                <div className="mt-5 grid gap-3">
                  {[
                    { label: "Shared humanity", style: "from-emerald-200 to-green-100 border-emerald-600/25" },
                    { label: "Collective wellbeing", style: "from-sky-200 to-cyan-100 border-sky-600/25" },
                    { label: "Human-centered systems", style: "from-violet-200 to-fuchsia-100 border-violet-600/25" },
                  ].map((pill) => (
                    <div
                      key={pill.label}
                      className={`rounded-2xl border bg-gradient-to-r ${pill.style} px-4 py-3 text-sm font-bold text-black shadow-sm`}
                    >
                      {pill.label}
                    </div>
                  ))}
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      {/* 6) Our Team */}
      <section className="w-full bg-gradient-to-br from-slate-50 via-green-50/30 to-emerald-50/50 py-24 md:py-32 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-200 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-200 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className={`${container} relative z-10`}>
          <div className="text-center max-w-5xl mx-auto mb-20">
            <div className="inline-flex items-center gap-3 rounded-full border border-green-700/20 bg-white/80 backdrop-blur-md px-6 py-3 text-xs font-bold tracking-[0.16em] text-green-700 uppercase shadow-lg mb-8">
              <div className="h-2 w-2 rounded-full bg-green-700 animate-pulse"></div>
              Meet Our Team
              <div className="h-2 w-2 rounded-full bg-green-700 animate-pulse"></div>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 whitespace-nowrap">
              <span className="text-black block sm:inline">The people building</span>{" "}
              <span className="bg-gradient-to-r from-green-700 via-emerald-600 to-green-500 bg-clip-text text-transparent block sm:inline">Ubuntu AfyaLink</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-700 to-emerald-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid gap-10 md:gap-8 lg:grid-cols-2 xl:grid-cols-3 2xl:gap-12">
            {teamMembers.map((member, idx) => (
              <article
                key={member.name}
                className="group relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 overflow-hidden transition-all duration-700 hover:shadow-2xl hover:-translate-y-3 hover:scale-[1.03] hover:bg-white"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>
                
                {/* Image container with enhanced styling */}
                <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                  <Image
                    src={member.image}
                    alt={`${member.name} profile`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    priority={idx < 3}
                  />
                  
                  {/* Enhanced number badge */}
                  <div className="absolute left-5 top-5 z-20">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/90 bg-white/95 shadow-xl backdrop-blur-sm">
                      <span className="text-sm font-extrabold text-green-700">{idx + 1}</span>
                    </span>
                  </div>

                  {/* Role badge overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-15">
                    <p className="text-white font-bold text-sm uppercase tracking-wider">{member.role}</p>
                  </div>
                </div>

                {/* Enhanced content section */}
                <div className="p-7 md:p-8">
                  <div className="mb-4">
                    <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-black mb-2 leading-tight">
                      {member.name}
                    </h3>
                    <p className="text-sm font-bold uppercase tracking-[0.08em] text-green-700 leading-tight">
                      {member.role}
                    </p>
                  </div>
                  
                  <p className="text-gray-700 leading-7 text-base mb-6 line-clamp-3 font-medium">
                    {member.expertise}
                  </p>

                  <div className="flex items-center justify-between pt-2">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-3 rounded-full border border-green-700/25 bg-gradient-to-r from-green-50 to-emerald-50 px-5 py-3 text-sm font-semibold text-green-700 transition-all duration-300 hover:from-green-700 hover:to-emerald-600 hover:text-white hover:border-green-700 hover:shadow-xl hover:scale-105"
                      aria-label={`${member.name} LinkedIn profile`}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="h-5 w-5"
                        aria-hidden="true"
                        fill="currentColor"
                      >
                        <path d="M6.94 8.5V19H3.44V8.5h3.5ZM5.19 3C6.31 3 7.2 3.9 7.2 5.01c0 1.11-.89 2.01-2.01 2.01a2 2 0 1 1 0-4.01ZM20.56 13.01V19h-3.49v-5.47c0-1.31-.47-2.2-1.64-2.2-.9 0-1.43.6-1.66 1.18-.09.21-.11.51-.11.81V19h-3.5s.05-9.4 0-10.5h3.5v1.49c.47-.73 1.31-1.77 3.2-1.77 2.33 0 4.1 1.53 4.1 4.79Z" />
                      </svg>
                      LinkedIn
                    </a>
                    
                    {/* Enhanced decorative element */}
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-green-100 via-emerald-50 to-green-100 flex items-center justify-center shadow-md border border-green-200/50">
                      <svg viewBox="0 0 24 24" className="h-5 w-5 text-green-700" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 7) Our Programs & Initiatives */}
      <section className="w-full py-16 md:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50/40">
        <div className={container}>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-green-600/25 bg-green-50/50 px-3 py-1 text-xs font-bold tracking-[0.16em] text-green-700 uppercase mb-6">
              <span className="inline-flex h-2 w-2 rounded-full bg-green-600"></span>
              Our Programs
              <span className="inline-flex h-2 w-2 rounded-full bg-green-600"></span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-balance mb-6">
              <span className="text-green-700">Explore Our</span>{" "}
              <span className="text-black">Programs</span>
            </h2>
            <p className="text-xl leading-8 text-black/90 max-w-3xl mx-auto">
              Discover our comprehensive programs that extend beyond technology to create lasting change across African healthcare systems.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            {/* Health Microgrids Button */}
            <Link
              href="/health-microgrids"
              className="group relative overflow-hidden rounded-3xl border-2 border-blue-600/20 bg-gradient-to-br from-blue-200 via-blue-50 to-white p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-black mb-2">Health Microgrids</h3>
                <p className="text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                  Learn More About Health Microgrids →
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Link>

            {/* Ubuntu Stars Button */}
            <Link
              href="/ubuntu-stars"
              className="group relative overflow-hidden rounded-3xl border-2 border-purple-600/20 bg-gradient-to-br from-purple-200 via-purple-50 to-white p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-black mb-2">Ubuntu Stars</h3>
                <p className="text-purple-600 font-semibold group-hover:text-purple-700 transition-colors">
                  Learn More About Ubuntu Stars →
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

