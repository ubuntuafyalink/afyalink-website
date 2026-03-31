import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const container = "mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-10";

  return (
    <main className="bg-white text-black">
      {/* Section 1 — Hero */}
      <section className="w-full py-16 md:py-24">
        <div className={`${container} grid gap-10 md:grid-cols-2 md:items-center`}>
          <div>
            <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl text-balance">
              <span className="text-green-700">Climate-resilient</span>{" "}
              <span className="text-black">healthcare infrastructure</span>{" "}
              <span className="text-green-700">for Africa</span>
            </h1>
            <p className="mt-5 text-lg leading-8 text-black/90">
              Ubuntu AfyaLink helps health facilities stay powered, protect
              vaccines and coordinate care through AfyaSolar & AfyaBooking AI.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="btn-bounce inline-flex items-center justify-center rounded-full bg-green-600 px-6 py-3 sm:px-5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                Talk to Us
              </Link>
              <Link
                href="/products/afyasolar"
                className="btn-bounce inline-flex items-center justify-center rounded-full border border-green-600/40 bg-white px-6 py-3 sm:px-5 text-sm font-semibold text-black shadow-sm transition hover:border-green-600 hover:bg-green-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                Explore Solutions for Your Facility →
              </Link>
            </div>
          </div>

          <div className="relative h-72 w-full overflow-hidden rounded-2xl border border-black/10 bg-white sm:h-80 md:h-96">
        <Image
              src="/images/solar facility undp.png"
              alt="Solar facility with UNDP partnership"
              fill
          priority
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* Section 2 — What we do */}
      <section className="w-full bg-green-50/40 py-16 md:py-20">
        <div className={container}>
        <div className="flex flex-col items-center gap-2 text-center">
          <h2 className="text-5xl font-extrabold tracking-tight text-balance font-sans">
            <span className="text-green-700">What</span>{" "}
            <span className="text-black">we do</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-14">
          {/* AfyaSolar (plain layout) */}
          <div className="grid gap-6 md:grid-cols-2 md:items-start">
            <div className="overflow-hidden rounded-2xl border border-black/10 bg-white">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src="/images/afyasolar.jpg"
                  alt="Solar technician working on solar panels"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
            </div>
            <div className="min-w-0">
              <h3 className="text-2xl font-extrabold tracking-tight text-balance">
                <span className="text-black">Afya</span>
                <span className="text-green-700">Solar</span>
              </h3>
              <p className="mt-3 text-black/90">
                Reliable power, vaccine cold chain, resilience monitoring, and
                health microgrids for frontline facilities.
              </p>
              <ul className="mt-5 space-y-3 text-black">
                {[
                  "Stable power for essential services",
                  "Cold-chain protection for vaccines",
                  "Resilience monitoring & reporting",
                ].map((t, idx) => (
                  <li
                    key={t}
                    className={[
                      "rounded-2xl border px-4 py-3 leading-7 shadow-sm",
                      "bg-gradient-to-r",
                      idx === 0 &&
                        "border-fuchsia-600/20 from-fuchsia-200 via-fuchsia-50 to-white",
                      idx === 1 &&
                        "border-cyan-600/20 from-cyan-200 via-cyan-50 to-white",
                      idx === 2 &&
                        "border-indigo-600/20 from-indigo-200 via-indigo-50 to-white",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Link
                  href="/products/afyasolar"
                  className="btn-bounce inline-flex items-center justify-center rounded-full bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-green-700 hover:shadow-md hover:-translate-y-[1px] active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 focus-visible:ring-offset-green-50/40"
                >
                  See AfyaSolar →
                </Link>
              </div>
            </div>
          </div>

          {/* AfyaBooking AI (plain layout, swapped) */}
          <div className="grid gap-6 md:grid-cols-2 md:items-start">
            <div className="min-w-0 md:order-1">
              <h3 className="text-2xl font-extrabold tracking-tight text-balance">
                <span className="text-black">AfyaBooking</span>{" "}
                <span className="text-green-700">AI</span>
              </h3>
              <p className="mt-3 text-black/90">
                Booking, patient flow, referrals, feedback, and agentic AI for
                healthcare operations.
              </p>
              <ul className="mt-5 space-y-3 text-black">
                {[
                  "Smart booking & triage workflows",
                  "Referrals, follow-ups & feedback",
                  "AI assistance for operations",
                ].map((t, idx) => (
                  <li
                    key={t}
                    className={[
                      "rounded-2xl border px-4 py-3 leading-7 shadow-sm",
                      "bg-gradient-to-r",
                      idx === 0 &&
                        "border-green-600/25 from-green-200 via-green-50 to-white",
                      idx === 1 &&
                        "border-blue-600/20 from-blue-200 via-blue-50 to-white",
                      idx === 2 &&
                        "border-amber-600/20 from-amber-200 via-amber-50 to-white",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Link
                  href="/products/afyabooking"
                  className="btn-bounce inline-flex items-center justify-center rounded-full bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-green-700 hover:shadow-md hover:-translate-y-[1px] active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 focus-visible:ring-offset-green-50/40"
                >
                  See AfyaBooking AI →
                </Link>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-black/10 bg-white md:order-2">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src="/images/afyabooking%20doctor.png"
                  alt="Doctor using AfyaBooking AI"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Section 3 — The problem we solve */}
      <section className="w-full py-16 md:py-20">
        <div className={container}>
          <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr] lg:items-start">
            <div>
              <h2 className="text-5xl font-extrabold tracking-tight text-balance">
                <span className="text-black">The problem</span>{" "}
                <span className="text-green-700">we solve</span>
              </h2>
              <p className="mt-4 max-w-xl text-black/90 text-lg leading-8">
                Health facilities face connected problems.
              </p>
              <p className="mt-3 max-w-xl text-black/90 text-lg leading-8">
                Power. Vaccines. Coordination. Climate risk. We help solve them
                together.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {[
                {
                  label: "Unreliable electricity",
                  classes:
                    "border-amber-600/20 from-amber-200 via-amber-50 to-white",
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z" />
                    </svg>
                  ),
                },
                {
                  label: "Cold-chain risk",
                  classes:
                    "border-sky-600/20 from-sky-200 via-sky-50 to-white",
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path d="m21 3-6 6" />
                      <path d="m3 21 6-6" />
                      <path d="M16 8l-6 6" />
                      <path d="M8 16l-3 3" />
                      <path d="M14 6l4 4" />
                    </svg>
                  ),
                },
                {
                  label: "Access gaps",
                  classes:
                    "border-cyan-600/20 from-cyan-200 via-cyan-50 to-white",
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path d="M12 2s6 7 6 11a6 6 0 1 1-12 0c0-4 6-11 6-11Z" />
                    </svg>
                  ),
                },
                {
                  label: "Patient flow challenges",
                  classes:
                    "border-fuchsia-600/20 from-fuchsia-200 via-fuchsia-50 to-white",
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" />
                      <path d="M16 2v4M8 2v4M3 10h18" />
                    </svg>
                  ),
                },
                {
                  label: "Climate vulnerability",
                  classes:
                    "border-emerald-600/20 from-emerald-200 via-emerald-50 to-white",
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
                    </svg>
                  ),
                },
                {
                  label: "Maintenance & downtime",
                  classes:
                    "border-violet-600/20 from-violet-200 via-violet-50 to-white",
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path d="M12 2h2l1 3h-4l1-3Z" />
                      <path d="M8 5h8l1 5a5 5 0 0 1-10 0l1-5Z" />
                      <path d="M7 14h10l-1 8H8l-1-8Z" />
                    </svg>
                  ),
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className={[
                    "rounded-2xl border bg-gradient-to-r p-5 shadow-sm",
                    item.classes,
                  ].join(" ")}
                >
                  <div className="flex items-center gap-3 text-black">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/70 ring-1 ring-black/10">
                      {item.icon}
                    </span>
                    <p className="font-semibold leading-6">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — Why Ubuntu AfyaLink */}
      <section className="w-full py-16 md:py-20">
        <div className={container}>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="text-5xl font-extrabold tracking-tight text-balance">
                <span className="text-black">Why</span>{" "}
                <span className="text-green-700">Ubuntu AfyaLink</span>
              </h2>
              <Image
                src="/images/why%20ubuntuafyalink1.png"
                alt="Why Ubuntu AfyaLink infographic"
                width={1600}
                height={700}
                className="mt-5 h-auto w-full"
                sizes="(min-width: 1024px) 700px, 100vw"
                priority={false}
              />
            </div>

            <div>
              <p className="text-xs font-bold tracking-[0.18em] text-green-700 uppercase">
                Customer pathways
              </p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight lg:whitespace-nowrap">
                <span className="text-black">Designed for</span>{" "}
                <span className="text-green-700">
                  primary healthcare providers
                </span>
              </h2>

              <div className="mt-7 grid gap-3">
                {[
                  "Primary Healthcare Facilities",
                  "Dispensaries",
                  "Pharmacies",
                  "Laboratory & Diagnostic Centers",
                  "Specialized Polyclinics",
                ].map((t) => (
                  <div
                    key={t}
                    className="group flex items-center justify-between rounded-2xl border border-black/10 bg-gradient-to-r from-white via-white to-green-50/40 px-4 py-3 font-semibold text-black shadow-sm transition hover:-translate-y-[1px] hover:shadow-md"
                  >
                    <span>{t}</span>
                    <span className="text-green-700 opacity-0 transition group-hover:opacity-100">
                      →
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 — Impact / proof */}
      <section className="w-full bg-green-50/40 py-14">
        <div className={container}>
        <div className="flex flex-col items-center gap-2 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight">
            <span className="text-black">Our</span>{" "}
            <span className="text-green-700">Impact</span>
          </h2>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            {
              value: "33",
              label: "Facilities served",
              classes:
                "border-emerald-600/20 from-emerald-200 via-emerald-50 to-white",
            },
            {
              value: "40%",
              label: "Energy cost cut",
              classes: "border-sky-600/20 from-sky-200 via-sky-50 to-white",
            },
            {
              value: "97,300",
              label: "Patients reached",
              classes: "border-amber-600/20 from-amber-200 via-amber-50 to-white",
            },
          ].map((stat, idx) => (
            <div
              key={stat.label}
              className={[
                "impact-card group relative mx-auto flex aspect-square w-full max-w-[240px] sm:max-w-[280px] items-center justify-center overflow-hidden rounded-full border bg-gradient-to-br p-6 sm:p-8 shadow-sm transition-transform duration-500 hover:-translate-y-2 hover:scale-[1.03]",
                stat.classes,
              ].join(" ")}
              style={{
                animation: `impactIntro 0.6s ease-out ${idx * 0.12}s both, impactFloat 4.2s ease-in-out ${idx * 0.3}s infinite, impactPulse 3.6s ease-in-out ${idx * 0.2}s infinite`,
              }}
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-white/70 blur-xl" />
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute inset-3 rounded-full border border-white/40" />
              </div>
              <div className="relative flex flex-col items-center justify-center text-center">
                <div className="text-5xl font-extrabold tracking-tight text-green-700 transition-transform duration-500 group-hover:scale-110">
                  {stat.value}
                </div>
                <div className="mt-2 text-base font-bold text-black">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* Section 7 — Case Study CTA */}
      <section className="w-full py-16 md:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50/40 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-green-100/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-emerald-100/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className={`${container} relative z-10`}>
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-green-600/25 bg-green-50/50 px-3 py-1 text-xs font-bold tracking-[0.16em] text-green-700 uppercase mb-8">
              <span className="inline-flex h-2 w-2 rounded-full bg-green-600"></span>
              Real Impact
              <span className="inline-flex h-2 w-2 rounded-full bg-green-600"></span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold leading-[1.05] tracking-tight text-balance mb-6">
              <span className="text-black">See our work in</span>{" "}
              <span className="text-green-700">action</span>
            </h2>
            
            <p className="text-xl leading-8 text-black/90 mb-12 max-w-3xl mx-auto">
              Discover how Ubuntu AfyaLink has transformed healthcare facilities across Tanzania. Read detailed case studies showing real challenges, innovative solutions, and measurable impact.
            </p>
            
            {/* Case study highlights */}
            <div className="grid gap-6 md:grid-cols-3 mb-12">
              <div className="bg-white rounded-3xl border border-blue-600/20 bg-gradient-to-br from-blue-200 via-blue-50 to-white p-6 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">Rural Health Centers</h3>
                <p className="text-sm text-gray-600">How 5 clinics achieved 99.5% uptime with AfyaSolar systems</p>
              </div>
              
              <div className="bg-white rounded-3xl border border-purple-600/20 bg-gradient-to-br from-purple-200 via-purple-50 to-white p-6 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">Vaccine Protection</h3>
                <p className="text-sm text-gray-600">Cold chain success story: 12,000+ vaccines saved during power outages</p>
              </div>
              
              <div className="bg-white rounded-3xl border border-green-600/20 bg-gradient-to-br from-green-200 via-green-50 to-white p-6 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">Patient Flow Revolution</h3>
                <p className="text-sm text-gray-600">AfyaBooking AI reduced wait times by 60% at district hospital</p>
              </div>
            </div>
            
            {/* CTA Button */}
            <div className="flex flex-col sm:flex-wrap items-center justify-center gap-4">
              <Link
                href="/case-studies"
                className="btn-bounce inline-flex items-center justify-center rounded-full bg-green-600 px-6 py-4 sm:px-8 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:bg-green-700 hover:shadow-xl hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-green-600 w-full sm:w-auto"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Read Case Studies
              </Link>
              <Link
                href="/contact"
                className="btn-bounce inline-flex items-center justify-center rounded-full border-2 border-gray-300 bg-white px-6 py-4 sm:px-8 text-base font-semibold text-black shadow-lg transition-all duration-300 hover:border-gray-400 hover:shadow-xl hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white w-full sm:w-auto"
              >
                Request Specific Case Study
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8 — Women and youth program highlight */}
      <section className="w-full py-14">
        <div className={container}>
          <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white p-8 shadow-sm sm:p-10">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(22,163,74,0.12),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(16,185,129,0.10),transparent_55%)]" />

            <div className="relative grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-start">
              <div>
                <p className="text-xs font-bold tracking-[0.18em] text-green-700 uppercase">
                  Program Spotlight
                </p>
                <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-balance">
                  <span className="text-black">Women and youth</span>{" "}
                  <span className="text-green-700">at the center of scale</span>
                </h2>
                <p className="mt-4 max-w-3xl text-black/90 text-lg leading-8">
                  We believe resilient healthcare systems grow faster when
                  communities help build and run them. Ubuntu AfyaLink is
                  developing a practical pathway for women and youth to lead
                  local operations, technical service, and community engagement.
                </p>
                <div className="mt-7">
                  <Link
                    href="/ubuntu-stars"
                    className="btn-bounce inline-flex items-center justify-center rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-green-700 hover:shadow-md hover:-translate-y-[1px] focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                  >
                    Explore the program →
                  </Link>
                </div>
              </div>

              <div className="rounded-2xl border border-green-600/20 bg-gradient-to-br from-green-100/70 via-white to-emerald-100/40 p-6 shadow-sm">
                <p className="text-sm font-extrabold tracking-[0.08em] uppercase text-green-800">
                  Practical pathway
                </p>
                <ul className="mt-4 space-y-3 text-sm text-black/90">
                  {[
                    "Local operations leadership",
                    "Technical service & maintenance",
                    "Community engagement support",
                  ].map((t, idx) => (
                    <li
                      key={t}
                      className="flex items-start gap-3 rounded-xl border border-green-700/10 bg-white/70 px-3 py-2"
                    >
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-green-600 text-xs font-bold text-white">
                        {idx + 1}
                      </span>
                      <span className="pt-0.5">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9 — Partners */}
      <section className="w-full bg-gradient-to-br from-green-50/30 to-emerald-50/20 py-20">
        <div className={container}>
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="inline-flex items-center rounded-full border border-green-600/20 bg-green-50/50 px-4 py-2">
              <span className="text-xs font-bold tracking-[0.18em] text-green-700 uppercase">Partnerships</span>
            </div>
            <h2 className="text-5xl font-extrabold tracking-tight text-balance">
              <span className="text-black">Trusted by</span>{" "}
              <span className="text-green-700">leading organizations</span>
            </h2>
          </div>
          <div className="mt-12 sm:mt-16 grid items-center justify-center gap-8 sm:gap-12 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { name: "UNDP", src: "/images/partners/UNDP.png" },
              { name: "Climate KIC", src: "/images/partners/climateKIC.png" },
              { name: "Smart Lab", src: "/images/partners/smart Lab.png" },
              { name: "Gogla", src: "/images/partners/gogla logo.png" },
              { name: "European Union", src: "/images/partners/European%20Union.png" },
            ].map((p, idx) => (
              <div
                key={p.name}
                className="group partner-logo-card relative flex h-20 sm:h-24 items-center justify-center px-2 transition-all duration-500 hover:-translate-y-1"
                title={p.name}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s both, partnerFloat 3.2s ease-in-out ${idx * 0.25}s infinite`,
                }}
          >
            <Image
                  src={p.src}
                  alt={`${p.name} logo`}
                  width={340}
                  height={140}
                  className="relative z-10 max-h-16 sm:max-h-20 w-auto object-contain transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-lg"
                  priority={idx < 2}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 10 — Programs & Initiatives */}
      <section className="w-full py-16 md:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50/40">
        <div className={container}>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-green-600/25 bg-green-50/50 px-3 py-1 text-xs font-bold tracking-[0.16em] text-green-700 uppercase mb-6">
              <span className="inline-flex h-2 w-2 rounded-full bg-green-600"></span>
              Programs & Initiatives
              <span className="inline-flex h-2 w-2 rounded-full bg-green-600"></span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-balance mb-6">
              <span className="text-green-700">Explore Our</span>{" "}
              <span className="text-black">Programs</span>
            </h2>
            <p className="text-xl leading-8 text-black/90 max-w-3xl mx-auto">
              Discover our comprehensive programs that extend beyond technology to create lasting impact across African healthcare systems.
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
                  Explore Health Microgrids →
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
                  Explore Ubuntu Stars →
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
