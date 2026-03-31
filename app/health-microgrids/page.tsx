"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function HealthMicrogridsPage() {
  const container = "mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-10";

  const microgridComponents = [
    {
      title: "Solar Generation",
      description: "Primary power source with excess capacity",
      icon: (
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="5"/>
          <line x1="12" y1="1" x2="12" y2="3"/>
          <line x1="12" y1="21" x2="12" y2="23"/>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
          <line x1="1" y1="12" x2="3" y2="12"/>
          <line x1="21" y1="12" x2="23" y2="12"/>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
        </svg>
      )
    },
    {
      title: "Battery Storage",
      description: "Energy storage for 24/7 reliability",
      icon: (
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
        </svg>
      )
    },
    {
      title: "Smart Controls",
      description: "Intelligent load management and optimization",
      icon: (
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5c0 .74-.33 1.4-.85 1.85L12 6.5V8h-2V6.5l.35-.15A2.5 2.5 0 0 1 9.5 2z"/>
          <path d="M12 8v8l-3.5 3.5L10 16l2-2V8"/>
        </svg>
      )
    },
    {
      title: "Grid Connection",
      description: "Backup power and export capability",
      icon: (
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/>
        </svg>
      )
    }
  ];

  const supportedServices = [
    {
      title: "Primary Healthcare",
      description: "Core medical services and consultations",
      icon: (
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
        </svg>
      )
    },
    {
      title: "Cold Chain Storage",
      description: "Vaccine and medication refrigeration",
      icon: (
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/>
        </svg>
      )
    },
    {
      title: "Water Systems",
      description: "Pumping and purification facilities",
      icon: (
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
        </svg>
      )
    },
    {
      title: "Digital Health",
      description: "E-health and communication systems",
      icon: (
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
          <line x1="12" y1="18" x2="12.01" y2="18"/>
        </svg>
      )
    },
    {
      title: "Staff Housing",
      description: "Residential facilities for healthcare workers",
      icon: (
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9,22 9,12 15,12 15,22"/>
        </svg>
      )
    },
    {
      title: "Community Services",
      description: "Extended health and community programs",
      icon: (
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      )
    }
  ];

  const partnershipModels = [
    {
      title: "Public-Private Partnership",
      description: "Collaborative funding and operations",
      icon: (
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="8.5" cy="7" r="4"/>
          <line x1="20" y1="8" x2="20" y2="14"/>
          <line x1="23" y1="11" x2="17" y2="11"/>
        </svg>
      )
    },
    {
      title: "Energy Service Company",
      description: "Third-party ownership and maintenance",
      icon: (
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3"/>
          <path d="M12 1v6m0 6v6m4.22-13.22l4.24 4.24M1.54 9.96l4.24 4.24M20.46 14.04l-4.24 4.24M7.78 7.78L3.54 3.54"/>
        </svg>
      )
    },
    {
      title: "Community Ownership",
      description: "Local stakeholder management model",
      icon: (
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <path d="M2 12h20"/>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
      )
    },
    {
      title: "Health Network Rollout",
      description: "Multi-facility deployment programs",
      icon: (
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="18" y1="20" x2="18" y2="10"/>
          <line x1="12" y1="20" x2="12" y2="4"/>
          <line x1="6" y1="20" x2="6" y2="14"/>
        </svg>
      )
    }
  ];

  return (
    <main className="bg-white text-black">
      {/* Hero Section */}
      <section className="w-full py-20 md:py-28 bg-gradient-to-br from-emerald-50 via-white to-green-50/40">
        <div className={`${container} text-center`}>
          <div className="inline-flex items-center gap-2 rounded-full border border-green-700/25 bg-green-50/50 px-3 py-1 text-xs font-bold tracking-[0.16em] text-green-700 uppercase mb-6">
            <span className="inline-flex h-2 w-2 rounded-full bg-green-700"></span>
            Health Microgrids
            <span className="inline-flex h-2 w-2 rounded-full bg-green-700"></span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-balance mb-6 max-w-5xl mx-auto">
            <span className="text-green-700">A new model for</span>{" "}
            <span className="text-black">resilient local</span>{" "}
            <span className="text-green-700">healthcare infrastructure</span>
          </h1>
          <p className="text-xl leading-8 text-black/90 mb-8 max-w-3xl mx-auto">
            Transforming single facilities into interconnected energy hubs that power entire health ecosystems
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="btn-bounce inline-flex items-center justify-center rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              Explore Partnership
            </Link>
            <Link
              href="/products/afyasolar"
              className="btn-bounce inline-flex items-center justify-center rounded-full border border-green-600/40 bg-white px-6 py-3 text-sm font-semibold text-black shadow-sm transition hover:border-green-600 hover:bg-green-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Section 1 — The problem with one-off installations */}
      <section className="w-full py-16 md:py-20">
        <div className={container}>
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-balance mb-6">
                <span className="text-black">The problem with</span>{" "}
                <span className="text-red-600">one-off installations</span>
              </h2>
              <div className="space-y-4">
                {[
                  "Limited to single facility needs",
                  "No economies of scale",
                  "Fragmented maintenance and support",
                  "Missed opportunities for community impact",
                  "Higher per-unit costs"
                ].map((problem, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-red-500"></div>
                    <p className="text-black/90">{problem}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-96 w-full overflow-hidden rounded-3xl border border-red-200 bg-red-50">
              <Image
                src="/images/local doctor female.jpeg"
                alt="Local female healthcare professional working independently"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — The clinic as anchor load */}
      <section className="w-full bg-green-50/40 py-16 md:py-20">
        <div className={container}>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-balance">
              <span className="text-black">The clinic as</span>{" "}
              <span className="text-green-700">anchor load</span>
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl border border-green-200 p-8 shadow-lg">
              <div className="grid gap-8 md:grid-cols-2 items-center">
                <div>
                  <div className="w-24 h-24 bg-green-100 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                    <svg viewBox="0 0 24 24" className="h-12 w-12 text-green-700" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M19 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-4 text-center">Health Facility</h3>
                  <p className="text-black/80 text-center mb-6">Provides stable, predictable energy demand that justifies infrastructure investment</p>
                </div>
                <div className="space-y-4">
                  {[
                    "Consistent daily power consumption",
                    "Critical load priority",
                    "24/7 operation requirements",
                    "Professional maintenance capacity"
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-green-50 rounded-xl p-3">
                      <span className="text-green-600 text-lg">✓</span>
                      <span className="text-black/90">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — What the microgrid supports */}
      <section className="w-full py-16 md:py-20">
        <div className={container}>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-balance">
              <span className="text-black">What the</span>{" "}
              <span className="text-green-700">microgrid supports</span>
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {supportedServices.map((service, idx) => (
              <div
                key={idx}
                className={[
                  "bg-white rounded-3xl border p-6 shadow-sm hover:shadow-lg transition-all duration-300 text-center",
                  idx === 0 && "border-blue-600/20 bg-gradient-to-br from-blue-200 via-blue-50 to-white",
                  idx === 1 && "border-purple-600/20 bg-gradient-to-br from-purple-200 via-purple-50 to-white",
                  idx === 2 && "border-green-600/20 bg-gradient-to-br from-green-200 via-green-50 to-white",
                  idx === 3 && "border-orange-600/20 bg-gradient-to-br from-orange-200 via-orange-50 to-white"
                ].filter(Boolean).join(" ")}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s both`
                }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold text-black mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Digital monitoring and resilience analytics */}
      <section className="w-full bg-gradient-to-br from-blue-50 to-indigo-50 py-16 md:py-20">
        <div className={container}>
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-balance mb-6">
                <span className="text-black">Digital monitoring and</span>{" "}
                <span className="text-blue-600">resilience analytics</span>
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Real-time Performance Tracking",
                    description: "Monitor generation, storage, and consumption patterns",
                    icon: (
                      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="18" y1="20" x2="18" y2="10"/>
                        <line x1="12" y1="20" x2="12" y2="4"/>
                        <line x1="6" y1="20" x2="6" y2="14"/>
                      </svg>
                    )
                  },
                  {
                    title: "Predictive Maintenance",
                    description: "AI-powered alerts for equipment servicing needs",
                    icon: (
                      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                      </svg>
                    )
                  },
                  {
                    title: "Resilience Scoring",
                    description: "Quantitative assessment of system reliability",
                    icon: (
                      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="18" y1="20" x2="18" y2="10"/>
                        <line x1="12" y1="20" x2="12" y2="4"/>
                        <line x1="6" y1="20" x2="6" y2="14"/>
                      </svg>
                    )
                  },
                  {
                    title: "Remote Management",
                    description: "Cloud-based control and optimization",
                    icon: (
                      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 5-5z"/>
                        <line x1="12" y1="19" x2="12" y2="19"/>
                      </svg>
                    )
                  }
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    {feature.icon}
                    <div>
                      <h4 className="font-semibold text-black mb-1">{feature.title}</h4>
                      <p className="text-black/70 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-3xl border border-blue-200 p-8 shadow-lg">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {[
                      { label: "Uptime", value: "99.5%" },
                      { label: "Efficiency", value: "94%" },
                      { label: "CO₂ Saved", value: "12T" },
                      { label: "Sites", value: "33+" }
                    ].map((stat, idx) => (
                      <div key={idx} className="bg-white rounded-xl p-3 shadow-sm">
                        <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                        <div className="text-xs text-gray-600">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="text-sm text-gray-600">Live Dashboard Preview</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 — Expansion path */}
      <section className="w-full py-16 md:py-20">
        <div className={container}>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-balance">
              <span className="text-black">Expansion path from</span>{" "}
              <span className="text-green-700">one facility to local network</span>
            </h2>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Connection lines */}
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-green-200 -translate-y-1/2"></div>
              
              <div className="grid gap-8 lg:grid-cols-4">
                {[
                  {
                    step: "Phase 1",
                    title: "Single Facility",
                    description: "Anchor clinic with solar and storage",
                    icon: (
                      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M19 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                        <circle cx="9" cy="7" r="4"/>
                      </svg>
                    ),
                    color: "border-green-600/20 from-green-200 via-green-50 to-white"
                  },
                  {
                    step: "Phase 2",
                    title: "Extended Services",
                    description: "Add cold chain, water, and digital health",
                    icon: (
                      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-3 3a5 5 0 0 0-.54 7.54z"/>
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l3-3a5 5 0 0 0 .54-7.54z"/>
                      </svg>
                    ),
                    color: "border-blue-600/20 from-blue-200 via-blue-50 to-white"
                  },
                  {
                    step: "Phase 3",
                    title: "Satellite Sites",
                    description: "Connect nearby clinics and pharmacies",
                    icon: (
                      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/>
                        <line x1="2" y1="12" x2="12" y2="12"/>
                        <line x1="12" y1="12" x2="22" y2="12"/>
                        <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                        <line x1="9" y1="9" x2="9.01" y2="9"/>
                        <line x1="15" y1="9" x2="15.01" y2="9"/>
                      </svg>
                    ),
                    color: "border-purple-600/20 from-purple-200 via-purple-50 to-white"
                  },
                  {
                    step: "Phase 4",
                    title: "Community Hub",
                    description: "Full ecosystem with productive use",
                    icon: (
                      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                        <polyline points="9,22 9,12 15,12 15,22"/>
                      </svg>
                    ),
                    color: "border-orange-600/20 from-orange-200 via-orange-50 to-white"
                  }
                ].map((phase, idx) => (
                  <div
                    key={idx}
                    className={`relative bg-white rounded-3xl border bg-gradient-to-br p-6 shadow-sm ${phase.color} transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
                    style={{
                      animation: `fadeInUp 0.6s ease-out ${idx * 0.15}s both`
                    }}
                  >
                    <div className="text-center">
                      <div className="text-3xl mb-3">{phase.icon}</div>
                      <div className="text-xs font-bold text-green-700 uppercase tracking-wider mb-2">{phase.step}</div>
                      <h3 className="text-lg font-bold text-black mb-2">{phase.title}</h3>
                      <p className="text-sm text-black/70">{phase.description}</p>
                    </div>
                    {idx < 3 && (
                      <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-green-300 -translate-y-1/2 z-10"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 — Partnership and financing models */}
      <section className="w-full bg-green-50/40 py-16 md:py-20">
        <div className={container}>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-balance">
              <span className="text-black">Partnership and</span>{" "}
              <span className="text-green-700">financing models</span>
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {partnershipModels.map((model, idx) => (
              <div
                key={idx}
                className={[
                  "bg-white rounded-3xl border p-6 shadow-sm hover:shadow-lg transition-all duration-300 text-center",
                  idx === 0 && "border-cyan-600/20 bg-gradient-to-br from-cyan-200 via-cyan-50 to-white",
                  idx === 1 && "border-indigo-600/20 bg-gradient-to-br from-indigo-200 via-indigo-50 to-white",
                  idx === 2 && "border-teal-600/20 bg-gradient-to-br from-teal-200 via-teal-50 to-white"
                ].filter(Boolean).join(" ")}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s both`
                }}
              >
                <div className="text-4xl mb-4">{model.icon}</div>
                <h3 className="text-lg font-semibold text-black mb-2">{model.title}</h3>
                <p className="text-sm text-gray-600">{model.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7 — Enhanced CTA */}
      <section className="w-full py-20 md:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50/40 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-20 w-64 h-64 bg-green-100/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-80 h-80 bg-emerald-100/30 rounded-full blur-3xl"></div>
        </div>
        
        <div className={`${container} relative z-10`}>
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-green-600/25 bg-green-50/50 px-3 py-1 text-xs font-bold tracking-[0.16em] text-green-700 uppercase mb-8">
              <span className="inline-flex h-2 w-2 rounded-full bg-green-600"></span>
              Partnership Opportunities
              <span className="inline-flex h-2 w-2 rounded-full bg-green-600"></span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight text-balance mb-6">
              <span className="text-green-700">Explore</span>{" "}
              <span className="text-black">partnership</span>
            </h2>
            
            <p className="text-xl leading-8 text-black/90 mb-12 max-w-3xl mx-auto">
              Join us in building resilient healthcare infrastructure that serves entire communities. Let's discuss how we can work together to create lasting impact.
            </p>
            
            {/* Partnership highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white rounded-3xl border border-violet-600/20 bg-gradient-to-br from-violet-200 via-violet-50 to-white p-6 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">Community Impact</h3>
                <p className="text-sm text-gray-600">Serve entire communities with reliable healthcare infrastructure</p>
              </div>
              
              <div className="bg-white rounded-3xl border border-amber-600/20 bg-gradient-to-br from-amber-200 via-amber-50 to-white p-6 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">Scalable Solutions</h3>
                <p className="text-sm text-gray-600">Deploy proven microgrid systems at scale across regions</p>
              </div>
              
              <div className="bg-white rounded-3xl border border-emerald-600/20 bg-gradient-to-br from-emerald-200 via-emerald-50 to-white p-6 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">Financial Innovation</h3>
                <p className="text-sm text-gray-600">Flexible financing models that make healthcare infrastructure accessible</p>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="btn-bounce inline-flex items-center justify-center rounded-full bg-green-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:bg-green-700 hover:shadow-xl hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-green-600"
              >
                Start Partnership Discussion
              </Link>
              <Link
                href="/products/afyasolar"
                className="btn-bounce inline-flex items-center justify-center rounded-full border-2 border-gray-300 bg-white px-8 py-4 text-base font-semibold text-black shadow-lg transition-all duration-300 hover:border-gray-400 hover:shadow-xl hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                Learn More About Solutions
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

