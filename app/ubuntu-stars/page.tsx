"use client";

import Link from "next/link";
import Image from "next/image";

export default function UbuntuStarsPage() {
  const container = "mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-10";

  const programTracks = [
    {
      title: "Community Energy Associates",
      description: "Women and youth trained to support basic system operations around healthcare facilities.",
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>,
      responsibilities: [
        "basic solar system checks",
        "reporting operational issues",
        "facility support coordination",
        "community awareness on reliable health services"
      ]
    },
    {
      title: "Digital Care & Operations Assistants",
      description: "Young people trained to support digital health operations.",
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>,
      responsibilities: [
        "AfyaBooking onboarding",
        "patient communication workflows",
        "digital literacy support for facility staff",
        "service data and feedback management"
      ]
    },
    {
      title: "Emerging Women Technical Leaders",
      description: "Advanced pathway for women building careers in health infrastructure operations.",
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>,
      responsibilities: [
        "solar system support and troubleshooting",
        "site supervision and coordination",
        "customer and facility support",
        "regional operations leadership"
      ]
    }
  ];

  const participants = [
    {
      title: "Young Technicians",
      description: "Early-career technical professionals",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    },
    {
      title: "Health Administration Assistants",
      description: "Healthcare operations support staff",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    },
    {
      title: "Community Leaders",
      description: "Local community representatives",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    },
    {
      title: "Clean Energy & Digital Health Enthusiasts",
      description: "Professionals interested in health infrastructure",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    }
  ];

  const partnerBenefits = [
    {
      title: "Workforce Development",
      description: "Build local technical capacity",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
      </svg>
    },
    {
      title: "Local Service Networks",
      description: "Strengthen community support systems",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    },
    {
      title: "Healthcare Access",
      description: "Expand resilient healthcare delivery",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    }
  ];

  const impactGoals = [
    {
      title: "Technical & Digital Training",
      description: "Build skills in women and youth for modern healthcare infrastructure",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    },
    {
      title: "Facility Operations Support",
      description: "Ensure reliable day-to-day healthcare facility operations",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    },
    {
      title: "Local Leadership Pipeline",
      description: "Develop the next generation of healthcare infrastructure leaders",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    }
  ];

  return (
    <main className="bg-white text-black">
      {/* Enhanced Hero Section */}
      <section className="w-full py-20 md:py-32 bg-gradient-to-br from-green-50 via-white to-emerald-50/40 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className={`${container} text-center relative z-10`}>
          {/* Enhanced badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-green-600/25 bg-gradient-to-r from-green-50 to-emerald-50 px-4 py-2 text-xs font-bold tracking-[0.16em] text-green-700 uppercase mb-10 shadow-sm">
            <span className="inline-flex h-2 w-2 rounded-full bg-green-600 animate-pulse"></span>
            Ubuntu Stars Program
            <span className="inline-flex h-2 w-2 rounded-full bg-green-600 animate-pulse"></span>
          </div>
          
          {/* Enhanced heading with better typography */}
          <div className="max-w-6xl mx-auto mb-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-[1.02] tracking-tight text-balance">
              <span className="text-green-700 relative inline-block">
                Women and youth
                <svg className="absolute -bottom-3 left-0 w-full h-4 text-green-200 rotate-1" fill="currentColor" viewBox="0 0 200 12">
                  <path d="M0,6 Q50,12 100,6 T200,6" />
                </svg>
              </span>
              <br className="hidden sm:block" />
              <span className="text-black relative inline-block">
                powering
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-gray-200 -rotate-1" fill="currentColor" viewBox="0 0 200 10">
                  <path d="M0,5 Q50,8 100,5 T200,5" />
                </svg>
              </span>
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent relative inline-block">
                resilient healthcare
                <svg className="absolute -bottom-3 left-0 w-full h-4 text-green-200 rotate-1" fill="currentColor" viewBox="0 0 200 12">
                  <path d="M0,6 Q50,10 100,6 T200,6" />
                </svg>
              </span>
            </h1>
          </div>
          
          {/* Enhanced description with better spacing */}
          <div className="max-w-5xl mx-auto space-y-6 mb-12">
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-green-100 shadow-lg">
              <p className="text-xl md:text-2xl leading-8 text-black/90 font-medium">
                Ubuntu Stars is a <span className="text-green-700 font-bold">practical pathway</span> for women and youth to participate in building and supporting resilient healthcare infrastructure.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-200">
              <p className="text-xl md:text-2xl leading-8 text-black/90">
                Through <span className="font-bold text-green-700">technical training</span> and <span className="font-bold text-green-700">operational roles</span>, participants help health facilities maintain reliable energy systems and improve digital healthcare coordination.
              </p>
            </div>
          </div>
          
          {/* CTA buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:bg-green-700 hover:shadow-xl hover:-translate-y-1"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Join the Program
            </Link>
            <Link
              href="#program-tracks"
              className="inline-flex items-center gap-2 rounded-full border-2 border-green-600 bg-transparent px-6 py-3 text-base font-semibold text-green-600 transition-all duration-300 hover:bg-green-600 hover:text-white"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Why This Matters */}
      <section className="w-full py-16 md:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50/40 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-20 w-64 h-64 bg-green-100/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className={`${container} relative z-10`}>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-green-100 text-green-700 px-4 py-2 text-sm font-bold mb-8">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Why Ubuntu Stars Matters
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-balance mb-12">
              <span className="text-black">Why</span>{" "}
              <span className="text-green-700">This Matters</span>
            </h2>
            
            {/* Key points with icons */}
            <div className="grid gap-8 md:grid-cols-3 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-black mb-3">Beyond Technology</h3>
                <p className="text-black/80 leading-relaxed">
                  Reliable healthcare infrastructure requires more than technology it needs skilled local people.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-black mb-3">Local Expertise</h3>
                <p className="text-black/80 leading-relaxed">
                  Local people who understand systems, support daily operations, and help facilities stay reliable.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-black mb-3">Lasting Impact</h3>
                <p className="text-black/80 leading-relaxed">
                  Creating opportunity while strengthening healthcare delivery for entire communities.
                </p>
              </div>
            </div>
            
            {/* Call to action */}
            <div className="bg-green-50 rounded-3xl p-8 border border-green-200">
              <p className="text-lg text-black/90 font-medium mb-4">
                Ubuntu Stars builds the local workforce that helps resilient health infrastructure work.
              </p>
              <p className="text-black/80">
                Join us in creating sustainable healthcare solutions powered by local talent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Program Tracks */}
      <section id="program-tracks" className="w-full bg-gradient-to-br from-green-50 via-emerald-50/50 to-green-50/40 py-16 md:py-20 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-20 w-64 h-64 bg-green-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-80 h-80 bg-emerald-200/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className={`${container} relative z-10`}>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-green-100 text-green-700 px-4 py-2 text-sm font-bold mb-8">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Program Pathways
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-balance mb-4">
              <span className="text-black">Program</span>{" "}
              <span className="text-green-700">Tracks</span>
            </h2>
            <p className="text-xl text-black/90 max-w-3xl mx-auto">
              Ubuntu Stars focuses on three practical pathways to build local healthcare infrastructure capacity.
            </p>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-3">
            {programTracks.map((track, idx) => (
              <div
                key={idx}
                className={[
                  "group bg-white rounded-3xl border-2 p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden",
                  idx === 0 && "border-blue-600/20 bg-gradient-to-br from-blue-200 via-blue-50 to-white",
                  idx === 1 && "border-purple-600/20 bg-gradient-to-br from-purple-200 via-purple-50 to-white",
                  idx === 2 && "border-green-600/20 bg-gradient-to-br from-green-200 via-green-50 to-white"
                ].filter(Boolean).join(" ")}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${idx * 0.15}s both`
                }}
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl text-5xl mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto">
                    {track.icon}
                  </div>
                  <h3 className="text-2xl font-extrabold text-black mb-4 text-center group-hover:text-green-700 transition-colors">
                    {track.title}
                  </h3>
                  <p className="text-black/80 mb-6 text-center leading-relaxed">{track.description}</p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <div className="h-1 w-8 bg-green-600 rounded-full"></div>
                      <p className="text-sm font-bold text-green-700 uppercase tracking-wider">Key Responsibilities</p>
                      <div className="h-1 w-8 bg-green-600 rounded-full"></div>
                    </div>
                    <div className="space-y-3">
                      {track.responsibilities.map((responsibility, responsibilityIdx) => (
                        <div key={responsibilityIdx} className="flex items-start gap-3 group/item hover:bg-green-50 p-2 rounded-lg transition-colors">
                          <span className="h-2 w-2 rounded-full bg-green-600 mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform"></span>
                          <span className="text-black/80 text-sm leading-relaxed">{responsibility}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Corner decoration */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-green-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
          
          {/* Track comparison */}
          <div className="mt-16 bg-white rounded-3xl border border-gray-200 p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-black mb-6 text-center">Choose Your Path</h3>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="text-center p-4 rounded-xl border border-gray-200 hover:border-green-300 hover:bg-green-50 transition-all">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h4 className="font-bold text-black mb-1">Beginner Friendly</h4>
                <p className="text-sm text-gray-600">No prior experience needed</p>
              </div>
              <div className="text-center p-4 rounded-xl border border-gray-200 hover:border-green-300 hover:bg-green-50 transition-all">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="font-bold text-black mb-1">Digital Skills</h4>
                <p className="text-sm text-gray-600">Modern healthcare technology</p>
              </div>
              <div className="text-center p-4 rounded-xl border border-gray-200 hover:border-green-300 hover:bg-green-50 transition-all">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h4 className="font-bold text-black mb-1">Leadership Track</h4>
                <p className="text-sm text-gray-600">Career advancement opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Who Can Join */}
      <section className="w-full py-16 md:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50/40 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute bottom-10 left-20 w-64 h-64 bg-green-100/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className={`${container} relative z-10`}>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-green-100 text-green-700 px-4 py-2 text-sm font-bold mb-8">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Ideal Participants
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-balance">
              <span className="text-black">Who Can</span>{" "}
              <span className="text-green-700">Join</span>
            </h2>
            <p className="text-xl text-black/90 max-w-3xl mx-auto mt-4">
              Ubuntu Stars focuses on motivated women and youth from communities served by healthcare facilities.
            </p>
            <p className="text-lg text-black/80 max-w-2xl mx-auto mt-2">
              Participants typically include:
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {participants.map((participant, idx) => (
              <div
                key={idx}
                className={[
                  "group bg-white rounded-3xl border-2 p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center relative overflow-hidden",
                  idx === 0 && "border-orange-600/20 bg-gradient-to-br from-orange-200 via-orange-50 to-white",
                  idx === 1 && "border-pink-600/20 bg-gradient-to-br from-pink-200 via-pink-50 to-white",
                  idx === 2 && "border-cyan-600/20 bg-gradient-to-br from-cyan-200 via-cyan-50 to-white",
                  idx === 3 && "border-indigo-600/20 bg-gradient-to-br from-indigo-200 via-indigo-50 to-white"
                ].filter(Boolean).join(" ")}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s both`
                }}
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto">
                    {participant.icon}
                  </div>
                  <h3 className="text-lg font-bold text-black mb-2 group-hover:text-green-700 transition-colors">{participant.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{participant.description}</p>
                </div>
                
                {/* Corner decoration */}
                <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-green-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
          
          {/* Eligibility criteria */}
          <div className="mt-12 bg-green-50 rounded-3xl p-8 border border-green-200">
            <h3 className="text-xl font-bold text-black mb-4 text-center">Basic Requirements</h3>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-black/80">18-35 years old</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-black/80">Basic education</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-black/80">Motivated to learn</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced For Partners */}
      <section className="w-full bg-gradient-to-br from-green-50 via-emerald-50/50 to-green-50/40 py-16 md:py-20 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-20 w-64 h-64 bg-green-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-20 w-80 h-80 bg-emerald-200/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className={`${container} relative z-10`}>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-green-100 text-green-700 px-4 py-2 text-sm font-bold mb-8">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Partnership Opportunities
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-balance">
              <span className="text-black">For</span>{" "}
              <span className="text-green-700">Partners</span>
            </h2>
            <p className="text-xl text-black/90 max-w-3xl mx-auto mt-4">
              Scaling resilient healthcare infrastructure requires strong local capacity.
            </p>
            <p className="text-lg text-black/80 max-w-2xl mx-auto mt-2">
              Ubuntu Stars offers partners a pathway to:
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            {partnerBenefits.map((benefit, idx) => (
              <div
                key={idx}
                className={[
                  "group bg-white rounded-3xl border-2 p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center relative overflow-hidden",
                  idx === 0 && "border-teal-600/20 bg-gradient-to-br from-teal-200 via-teal-50 to-white",
                  idx === 1 && "border-rose-600/20 bg-gradient-to-br from-rose-200 via-rose-50 to-white",
                  idx === 2 && "border-violet-600/20 bg-gradient-to-br from-violet-200 via-violet-50 to-white"
                ].filter(Boolean).join(" ")}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${idx * 0.15}s both`
                }}
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3 group-hover:text-green-700 transition-colors">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
                
                {/* Corner decoration */}
                <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-green-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
          
          {/* Partner CTA */}
          <div className="mt-12 text-center">
            <div className="bg-white rounded-3xl border-2 border-green-200 p-8 shadow-lg max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-black mb-4">Ready to Partner?</h3>
              <p className="text-black/80 mb-6">
                Join us in building sustainable healthcare infrastructure powered by local talent.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:bg-green-700 hover:shadow-xl hover:-translate-y-1"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Explore Partnership
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Impact Goals */}
      <section className="w-full py-16 md:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50/40 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-20 w-64 h-64 bg-green-100/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-80 h-80 bg-emerald-100/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className={`${container} relative z-10`}>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-green-100 text-green-700 px-4 py-2 text-sm font-bold mb-8">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Our Impact
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-balance">
              <span className="text-black">Impact</span>{" "}
              <span className="text-green-700">Goals</span>
            </h2>
            <p className="text-xl text-black/90 max-w-3xl mx-auto mt-4">
              Ubuntu Stars aims to support the growth of resilient health systems while creating meaningful local opportunities.
            </p>
            <p className="text-lg text-black/80 max-w-2xl mx-auto mt-2">
              Focus areas include:
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            {impactGoals.map((goal, idx) => (
              <div
                key={idx}
                className={[
                  "group bg-white rounded-3xl border-2 p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center relative overflow-hidden",
                  idx === 0 && "border-amber-600/20 bg-gradient-to-br from-amber-200 via-amber-50 to-white",
                  idx === 1 && "border-emerald-600/20 bg-gradient-to-br from-emerald-200 via-emerald-50 to-white",
                  idx === 2 && "border-lime-600/20 bg-gradient-to-br from-lime-200 via-lime-50 to-white"
                ].filter(Boolean).join(" ")}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${idx * 0.15}s both`
                }}
              >
                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto">
                    {goal.icon}
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3 text-center group-hover:text-green-700 transition-colors">{goal.title}</h3>
                  <p className="text-gray-600 text-center leading-relaxed">{goal.description}</p>
                </div>
                
                {/* Corner decoration */}
                <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-green-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
          
          {/* Impact metrics */}
          <div className="mt-16 bg-white rounded-3xl border-2 border-gray-200 p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-black mb-8 text-center">Our Targets</h3>
            <div className="grid gap-6 md:grid-cols-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-700 mb-2">1000+</div>
                <div className="text-sm text-black/70">Participants Trained</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-700 mb-2">100+</div>
                <div className="text-sm text-black/70">Health Facilities</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-700 mb-2">80%</div>
                <div className="text-sm text-black/70">Women Participation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-700 mb-2">90%</div>
                <div className="text-sm text-black/70">Job Placement</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Final CTA */}
      <section className="w-full py-20 md:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50/40 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className={`${container} relative z-10`}>
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-green-600/25 bg-green-50/50 px-3 py-1 text-xs font-bold tracking-[0.16em] text-green-700 uppercase mb-8">
              <span className="inline-flex h-2 w-2 rounded-full bg-green-600"></span>
              Join the Movement
              <span className="inline-flex h-2 w-2 rounded-full bg-green-600"></span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight text-balance mb-6">
              <span className="text-green-700">Build the workforce</span>{" "}
              <span className="text-black">behind resilient healthcare</span>
            </h2>
            
            <p className="text-xl leading-8 text-black/90 mb-12 max-w-3xl mx-auto">
              Join Ubuntu Stars in creating sustainable healthcare solutions powered by local talent. Together, we can build stronger communities through opportunity and innovation.
            </p>
            
            {/* Value proposition cards */}
            <div className="grid gap-6 md:grid-cols-3 mb-12">
              <div className="bg-white rounded-3xl border border-sky-600/20 bg-gradient-to-br from-sky-200 via-sky-50 to-white p-6 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">Skills Development</h3>
                <p className="text-sm text-gray-600">Gain valuable technical and digital skills for healthcare infrastructure</p>
              </div>
              
              <div className="bg-white rounded-3xl border border-fuchsia-600/20 bg-gradient-to-br from-fuchsia-200 via-fuchsia-50 to-white p-6 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A5.002 5.002 0 0017 9V5a3 3 0 10-6 0v4a5.002 5.002 0 00-4 4.255V17a2 2 0 004 0v-2.255a6.002 6.002 0 018 0V17a2 2 0 004 0v-3.745z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">Career Opportunities</h3>
                <p className="text-sm text-gray-600">Access employment opportunities in growing healthcare sector</p>
              </div>
              
              <div className="bg-white rounded-3xl border border-slate-600/20 bg-gradient-to-br from-slate-200 via-slate-50 to-white p-6 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">Community Impact</h3>
                <p className="text-sm text-gray-600">Make a difference in your community's healthcare delivery</p>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="btn-bounce inline-flex items-center justify-center rounded-full bg-green-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:bg-green-700 hover:shadow-xl hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-green-600"
              >
                Partner on the Program
              </Link>
              <Link
                href="/contact"
                className="btn-bounce inline-flex items-center justify-center rounded-full border-2 border-gray-300 bg-white px-8 py-4 text-base font-semibold text-black shadow-lg transition-all duration-300 hover:border-gray-400 hover:shadow-xl hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                Register Interest
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  );
}

