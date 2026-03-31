"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function AfyaBookingPage() {
  const container = "mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-10";

  const features = [
    {
      title: "Booking",
      description: "Smart appointment scheduling",
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
      )
    },
    {
      title: "Queue management",
      description: "Real-time patient flow control",
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      )
    },
    {
      title: "Referral coordination",
      description: "Seamless patient transfers",
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      )
    },
    {
      title: "Patient communication",
      description: "Automated SMS reminders",
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"></path>
        </svg>
      )
    },
    {
      title: "Operational AI agents",
      description: "Intelligent workflow automation",
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M12 1v6m0 6v6m4.22-13.22l4.24 4.24M1.54 9.96l4.24 4.24M20.46 14.04l-4.24 4.24M7.78 7.78L3.54 3.54"></path>
        </svg>
      )
    }
  ];

  const aiAssistants = [
    {
      title: "Patient assistant",
      description: "Helps patients book appointments and get information",
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
      )
    },
    {
      title: "Front-desk assistant",
      description: "Supports staff with check-ins and scheduling",
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      )
    },
    {
      title: "Follow-up and outreach assistant",
      description: "Manages patient communication and care continuity",
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      )
    },
    {
      title: "Operations assistant",
      description: "Optimizes facility workflows and resource allocation",
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3"/>
          <path d="M12 1v6m0 6v6m4.22-13.22l4.24 4.24M1.54 9.96l4.24 4.24M20.46 14.04l-4.24 4.24M7.78 7.78L3.54 3.54"/>
        </svg>
      )
    }
  ];

  const integrations = [
    {
      title: "Smart scheduling around outages",
      description: "Automatically adjusts appointments during power maintenance",
      icon: (
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
          <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/>
        </svg>
      )
    },
    {
      title: "Energy-aware service hours",
      description: "Aligns facility operations with energy availability",
      icon: (
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
          <path d="M11 21h-1l1-7H7.5c-.58 0-.57-.32-.38-.66.19-.34.05-.08.07-.12C8.48 10.94 10.42 7.54 13 3h1l-1 7h3.5c.49 0 .56.33.47.51l-.07.15C12.96 17.55 11 21 11 21z"/>
        </svg>
      )
    },
    {
      title: "Resilient operations support",
      description: "Maintains care continuity during infrastructure updates",
      icon: (
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      )
    }
  ];

  return (
    <main className="bg-gradient-to-br from-slate-50 via-white to-green-50/30 text-black">
      {/* Hero Section */}
      <section className="w-full py-20 md:py-28">
        <div className={`${container} grid gap-10 md:grid-cols-2 md:items-center`}>
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-green-600/25 bg-green-50/50 px-3 py-1 text-xs font-bold tracking-[0.16em] text-green-700 uppercase mb-6">
              <span className="inline-flex h-2 w-2 rounded-full bg-green-600"></span>
              AfyaBooking AI
              <span className="inline-flex h-2 w-2 rounded-full bg-green-600"></span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.05] tracking-tight text-balance mb-6">
              <span className="text-green-700">Patient access and</span>{" "}
              <span className="text-black">care coordination for</span>{" "}
              <span className="text-green-700">modern health facilities</span>
            </h1>
            <p className="text-xl leading-8 text-black/90 mb-8 max-w-2xl">
              Booking, referrals, reminders, feedback, and operational intelligence tools that help facilities serve patients better and run more smoothly.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="btn-bounce inline-flex items-center justify-center rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                Request Demo
              </Link>
              <Link
                href="/contact"
                className="btn-bounce inline-flex items-center justify-center rounded-full border border-green-600/40 bg-white px-6 py-3 text-sm font-semibold text-black shadow-sm transition hover:border-green-600 hover:bg-green-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                Talk to Product Team
              </Link>
              <Link
                href="https://www.afyabooking.com/auth/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-bounce inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:from-blue-700 hover:to-blue-800 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Start Today
              </Link>
            </div>
          </div>
          <div className="relative h-[460px] w-full overflow-hidden rounded-3xl border border-black/10 bg-white md:h-[520px]">
            <Image
              src="/images/dr shunu.jpeg"
              alt="Dr. Shunu, CEO of Appledental Clinic"
              fill
              priority
              className="object-cover object-top"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* Section 1 — What it does */}
      <section className="w-full py-16 md:py-20">
        <div className={container}>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-balance">
              <span className="text-green-700">What it</span>{" "}
              <span className="text-green-700">does</span>
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className={[
                  "group bg-white rounded-3xl border p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center",
                  idx === 0 && "border-blue-600/20 bg-gradient-to-br from-blue-200 via-blue-50 to-white",
                  idx === 1 && "border-purple-600/20 bg-gradient-to-br from-purple-200 via-purple-50 to-white",
                  idx === 2 && "border-green-600/20 bg-gradient-to-br from-green-200 via-green-50 to-white",
                  idx === 3 && "border-orange-600/20 bg-gradient-to-br from-orange-200 via-orange-50 to-white",
                  idx === 4 && "border-pink-600/20 bg-gradient-to-br from-pink-200 via-pink-50 to-white"
                ].filter(Boolean).join(" ")}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s both`
                }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-green-600 mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 — Why it matters */}
      <section className="w-full bg-gradient-to-r from-green-50/50 to-emerald-50/50 py-16 md:py-20">
        <div className={container}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-balance mb-8">
              <span className="text-black">Why it</span>{" "}
              <span className="text-green-700">matters</span>
            </h2>
            <p className="text-xl leading-8 text-black/90">
              Better care starts before the consultation. AfyaBooking AI helps patients find services, helps staff manage demand, and helps facilities run with less friction.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 — Agentic AI */}
      <section className="w-full py-16 md:py-20">
        <div className={container}>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-balance">
              <span className="text-black">AI that helps</span>{" "}
              <span className="text-green-700">teams act</span>
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {aiAssistants.map((assistant, idx) => (
              <div
                key={idx}
                className={[
                  "bg-white rounded-3xl border p-6 shadow-sm hover:shadow-lg transition-all duration-300",
                  idx === 0 && "border-cyan-600/20 bg-gradient-to-br from-cyan-200 via-cyan-50 to-white",
                  idx === 1 && "border-indigo-600/20 bg-gradient-to-br from-indigo-200 via-indigo-50 to-white",
                  idx === 2 && "border-teal-600/20 bg-gradient-to-br from-teal-200 via-teal-50 to-white",
                  idx === 3 && "border-rose-600/20 bg-gradient-to-br from-rose-200 via-rose-50 to-white"
                ].filter(Boolean).join(" ")}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${idx * 0.15}s both`
                }}
              >
                <div className="text-4xl mb-4 text-center">{assistant.icon}</div>
                <h3 className="text-lg font-semibold text-black mb-2 text-center">{assistant.title}</h3>
                <p className="text-sm text-gray-600 text-center">{assistant.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Works well with AfyaSolar */}
      <section className="w-full bg-gradient-to-br from-green-50/30 to-emerald-50/20 py-16 md:py-20">
        <div className={container}>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-balance">
              <span className="text-black">Connected to</span>{" "}
              <span className="text-green-700">real facility readiness</span>
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {integrations.map((integration, idx) => (
              <div
                key={idx}
                className={[
                  "bg-white rounded-3xl border p-6 shadow-sm hover:shadow-lg transition-all duration-300",
                  idx === 0 && "border-violet-600/20 bg-gradient-to-br from-violet-200 via-violet-50 to-white",
                  idx === 1 && "border-amber-600/20 bg-gradient-to-br from-amber-200 via-amber-50 to-white",
                  idx === 2 && "border-emerald-600/20 bg-gradient-to-br from-emerald-200 via-emerald-50 to-white"
                ].filter(Boolean).join(" ")}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${idx * 0.15}s both`
                }}
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 text-green-600 mb-4">
                  {integration.icon}
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">{integration.title}</h3>
                <p className="text-sm text-gray-600">{integration.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Section 5 — CTA */}
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
              Experience AI
              <span className="inline-flex h-2 w-2 rounded-full bg-green-600"></span>
            </div>
            
            {/* Enhanced content card */}
            <div className="bg-white rounded-3xl border-2 border-gray-200 p-12 md:p-16 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-emerald-50/50 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-black mb-6">
                  <span className="text-green-700">Book a</span>{" "}
                  <span className="text-black">demo</span>
                </h2>
                
                <p className="text-xl text-black/90 mb-8 max-w-2xl mx-auto leading-8">
                  See how AfyaBooking AI can transform your facility's patient coordination and operational efficiency.
                </p>
                
                {/* Benefits */}
                <div className="grid gap-4 md:grid-cols-3 mb-8">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm text-black/80">Live AI Demonstration</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm text-black/80">Custom Integration Plan</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm text-black/80">ROI Analysis Report</span>
                  </div>
                </div>
                
                <Link
                  href="/contact"
                  className="btn-bounce inline-flex items-center justify-center rounded-full bg-green-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:bg-green-700 hover:shadow-xl hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-green-600"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Schedule Your Demo
                </Link>
              </div>
            </div>
            
            {/* Contact info */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Response within 24 hours
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +255 656 721 324
              </div>
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

