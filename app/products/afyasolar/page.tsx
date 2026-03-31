"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { SolarDesignToolSimple } from "../../components/solar/SolarDesignToolSimple";

export default function AfyaSolarPage() {
  const container = "mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-10";
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [expandedModule, setExpandedModule] = useState<string | null>(null);

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const toggleModule = (moduleId: string) => {
    setExpandedModule(expandedModule === moduleId ? null : moduleId);
  };

  const includedItems = [
    {
      title: "Solar Power Systems",
      description: "Reliable solar energy generation and storage",
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      details: "High-efficiency solar panels with battery storage systems designed for healthcare facility loads."
    },
    {
      title: "Solar Vaccine Refrigeration",
      description: "Cold-chain protection for vaccines and medications",
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      details: "Solar-powered medical-grade refrigerators maintaining consistent temperature for vaccine storage."
    },
    {
      title: "Energy Efficiency & Carbon Monitoring",
      description: "Track energy usage and environmental impact",
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
          <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
        </svg>
      ),
      details: "Real-time monitoring dashboard for energy consumption, efficiency metrics, and carbon footprint tracking."
    },
    {
      title: "Climate Resilience Assessment",
      description: "Evaluate and strengthen facility climate readiness",
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
          <path d="M12 2l-5.5 9h11z M12 22l5.5-9h-11z M3.5 9l5.5 9v-11z M20.5 9l-5.5 9v-11z"/>
        </svg>
      ),
      details: "Comprehensive assessment of climate risks and resilience strategies tailored to healthcare facilities."
    }
  ];

  const modules = [
    {
      id: "module-a",
      title: "Essential Facility Resilience",
      subtitle: "For dispensaries and small clinics",
      description: "Reliable solar power for daily operations.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
          <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
        </svg>
      ),
      features: [
        "Solar power system",
        "Battery storage",
        "Essential lighting and equipment support",
        "Basic energy monitoring"
      ]
    },
    {
      id: "module-b",
      title: "Cold Chain & Safe Water",
      subtitle: "For dispensaries and health centers",
      description: "Protect vaccines and support safe water access.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
          <path d="M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8zm0 18c-3.35 0-6-2.57-6-6.2 0-2.34 1.95-5.44 6-9.14 4.05 3.7 6 6.79 6 9.14 0 3.63-2.65 6.2-6 6.2z"/>
        </svg>
      ),
      features: [
        "Solar vaccine refrigeration",
        "Solar water pumping",
        "Cold-chain monitoring"
      ]
    },
    {
      id: "module-c",
      title: "Digital Efficiency & Climate Readiness",
      subtitle: "For health centers, polyclinics, pharmacies, and diagnostic labs",
      description: "Improve energy visibility and facility resilience.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
          <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
        </svg>
      ),
      features: [
        "Energy monitoring dashboard",
        "Smart load management",
        "Climate resilience assessment",
        "Integration with AfyaBooking systems"
      ]
    },
    {
      id: "module-d",
      title: "Health Microgrid Expansion",
      subtitle: "For larger facilities and health networks",
      description: "Scale one facility into a local energy hub.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
          <path d="M4 6h2v12H4zm6 0h2v12h-2zm6 0h2v12h-2z"/>
        </svg>
      ),
      features: [
        "Clinics and pharmacies",
        "Diagnostic labs",
        "Staff housing",
        "Community health services",
        "Future productive-use loads"
      ]
    }
  ];

  const howItWorksSteps = [
    {
      step: "Step 1 — Assess",
      title: "We measure your loads, outages, and operating costs",
      description: "Comprehensive site survey and energy audit",
      bullets: ["site survey", "load profile", "baseline diesel/cost"]
    },
    {
      step: "Step 2 — Install & Finance",
      title: "Choose flexible payment options",
      description: "Tailored financing solutions for your facility",
      bullets: ["no hidden costs", "clear service terms"]
    },
    {
      step: "Step 3 — Monitor & Protect",
      title: "Remote monitoring tracks uptime and temperature",
      description: "Real-time alerts to WhatsApp/SMS",
      bullets: ["predictive maintenance", "cold chain alerts"]
    },
    {
      step: "Step 4 — Optimise",
      title: "Cut waste and improve efficiency",
      description: "Strengthen revenue and operational performance",
      bullets: ["efficiency tracking", "leakage flags", "credit readiness"]
    }
  ];

  return (
    <main className="bg-white text-black">
      {/* Hero Section */}
      <section className="w-full py-20 md:py-28">
        <div className={`${container} grid gap-10 md:grid-cols-2 md:items-center`}>
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-green-700/25 bg-green-50/50 px-3 py-1 text-xs font-bold tracking-[0.16em] text-green-700 uppercase mb-6">
              <span className="inline-flex h-2 w-2 rounded-full bg-green-700"></span>
              AfyaSolar
              <span className="inline-flex h-2 w-2 rounded-full bg-green-700"></span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.05] tracking-tight text-balance mb-6">
              <span className="text-green-700">Climate-resilient</span>{" "}
              <span className="text-black">infrastructure for</span>{" "}
              <span className="text-green-700">frontline health facilities</span>
            </h1>
            <p className="text-xl leading-8 text-black/90 mb-8 max-w-2xl">
              Reliable solar energy, vaccine refrigeration, climate resilience monitoring, and scalable health microgrids.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="btn-bounce inline-flex items-center justify-center rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                Request Site Assessment
              </Link>
              <Link
                href="/contact"
                className="btn-bounce inline-flex items-center justify-center rounded-full border border-green-600/40 bg-white px-6 py-3 text-sm font-semibold text-black shadow-sm transition hover:border-green-600 hover:bg-green-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                Talk to Sales
              </Link>
              <Link
                href="https://app.ubuntuafyalink.co.tz/auth/signup"
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
          <div className="relative h-80 w-full overflow-hidden rounded-3xl border border-black/10 bg-white md:h-96">
            <Image
              src="/images/solar facility undp.png"
              alt="Solar facility with UNDP partnership"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* Section 1 — What AfyaSolar solves */}
      <section className="w-full bg-green-50/40 py-16 md:py-20">
        <div className={container}>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-balance">
              <span className="text-black">What</span>{" "}
              <span className="text-green-700">AfyaSolar solves</span>
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Unreliable electricity",
              "Vaccine cold-chain risk",
              "Access and quality gaps",
              "Weak energy visibility",
              "Climate-related facility disruption"
            ].map((problem, idx) => (
              <div
                key={problem}
                className={[
                  "rounded-2xl border bg-gradient-to-r p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md",
                  idx === 0 && "border-amber-600/20 from-amber-200 via-amber-50 to-white",
                  idx === 1 && "border-sky-600/20 from-sky-200 via-sky-50 to-white",
                  idx === 2 && "border-cyan-600/20 from-cyan-200 via-cyan-50 to-white",
                  idx === 3 && "border-fuchsia-600/20 from-fuchsia-200 via-fuchsia-50 to-white",
                  idx === 4 && "border-emerald-600/20 from-emerald-200 via-emerald-50 to-white"
                ].join(" ")}
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/70 ring-1 ring-black/10">
                    <span className="text-lg font-bold text-green-700">{idx + 1}</span>
                  </div>
                  <p className="font-semibold text-lg text-black">{problem}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 — What's included */}
      <section className="w-full py-16 md:py-20">
        <div className={container}>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-balance">
              <span className="text-black">What's</span>{" "}
              <span className="text-green-700">included</span>
            </h2>
          </div>
          <div className="grid gap-8 lg:grid-cols-2 items-start">
            <div className="relative h-full min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] w-full overflow-hidden rounded-3xl border border-black/10 bg-white lg:sticky lg:top-8">
              <Image
                src="/images/kisarawe hospital.jpeg"
                alt="Kisarawe Hospital with Ubuntu AfyaLink solar infrastructure"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
            <div className="space-y-6">
              {includedItems.map((item, idx) => (
                <div
                  key={idx}
                  className="group rounded-3xl border border-black/10 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-green-700">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-extrabold tracking-tight text-black mb-2">
                        {item.title}
                      </h3>
                      <p className="text-black/80 mb-4">{item.description}</p>
                      <button
                        onClick={() => toggleCard(idx)}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-green-700 hover:text-green-800 transition-colors"
                      >
                        {expandedCard === idx ? "Show less" : "Learn more"}
                        <svg
                          className={`h-4 w-4 transition-transform ${expandedCard === idx ? "rotate-180" : ""}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {expandedCard === idx && (
                        <div className="mt-4 p-4 rounded-2xl bg-green-50/50 border border-green-700/20">
                          <p className="text-black/90">{item.details}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-gradient-to-br from-green-50/60 via-white to-emerald-50/40 py-20 md:py-24">
        <div className={container}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-balance mb-4">
              <span className="text-black">How we deploy</span>{" "}
              <span className="text-green-700">resilience</span>
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {howItWorksSteps.map((step, idx) => (
              <div
                key={idx}
                className="relative group"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${idx * 0.15}s both`
                }}
              >
                <div className="bg-white rounded-3xl border border-black/10 p-6 shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 text-xs font-bold text-green-700 bg-green-50 rounded-full mb-3">
                      {step.step}
                    </span>
                    <h3 className="text-xl font-extrabold tracking-tight text-black mb-2">
                      {step.title}
                    </h3>
                    <p className="text-black/80 text-sm mb-4">{step.description}</p>
                  </div>
                  <ul className="space-y-2">
                    {step.bullets.map((bullet, bulletIdx) => (
                      <li key={bulletIdx} className="flex items-center gap-2 text-sm text-black/90">
                        <span className="h-1.5 w-1.5 rounded-full bg-green-700"></span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
                {idx < howItWorksSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-green-200 -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="btn-bounce inline-flex items-center justify-center rounded-full bg-green-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:bg-green-700 hover:shadow-xl hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              Request Site Assessment
            </Link>
          </div>
        </div>
      </section>

      {/* Section 4 — Design Tool CTA */}
      <section className="w-full py-16 md:py-20 bg-gradient-to-br from-gray-50 via-white to-green-50/30">
        <div className={container}>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-green-600/25 bg-green-50/50 px-3 py-1 text-xs font-bold tracking-[0.16em] text-green-700 uppercase mb-8">
              <span className="inline-flex h-2 w-2 rounded-full bg-green-600"></span>
              Interactive Tool
              <span className="inline-flex h-2 w-2 rounded-full bg-green-600"></span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-balance mb-6">
              <span className="text-green-700">Design Your</span>{" "}
              <span className="text-black">Solar Solution</span>
            </h2>
            
            <p className="text-xl leading-8 text-black/90 mb-12 max-w-3xl mx-auto">
              Use our advanced solar design and cost analysis tool to calculate your energy requirements, estimate costs, and design the perfect solar solution for your healthcare facility.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/products/afyasolar/design-tool"
                className="btn-bounce inline-flex items-center justify-center rounded-full bg-green-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:bg-green-700 hover:shadow-xl hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-green-600"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Launch Design Tool
              </Link>
              <Link
                href="/contact"
                className="btn-bounce inline-flex items-center justify-center rounded-full border-2 border-green-600/40 bg-white px-8 py-4 text-base font-semibold text-black shadow-lg transition-all duration-300 hover:border-green-600 hover:bg-green-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                Get Expert Help
              </Link>
            </div>
            
            {/* Feature Highlights */}
            <div className="mt-16 grid gap-6 md:grid-cols-3">
              <div className="bg-white rounded-3xl border-2 border-blue-600/20 bg-gradient-to-br from-blue-200 via-blue-50 to-white p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-black mb-2">Accurate Calculations</h3>
                <p className="text-sm text-gray-600">Precise energy requirements and cost estimates</p>
              </div>
              
              <div className="bg-white rounded-3xl border-2 border-green-600/20 bg-gradient-to-br from-green-200 via-green-50 to-white p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-black mb-2">Cost Transparency</h3>
                <p className="text-sm text-gray-600">Detailed breakdowns and projected savings</p>
              </div>
              
              <div className="bg-white rounded-3xl border-2 border-purple-600/20 bg-gradient-to-br from-purple-200 via-purple-50 to-white p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-black mb-2">Quick Results</h3>
                <p className="text-sm text-gray-600">Instant recommendations tailored to your needs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 — Product modules */}
      <section className="w-full py-16 md:py-20">
        <div className={container}>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-balance mb-4">
              <span className="text-black">AfyaSolar</span>{" "}
              <span className="text-green-700">Modules</span>
            </h2>
            <p className="text-xl text-black/90 max-w-3xl mx-auto">
              Flexible modules for different healthcare facilities
            </p>
            <p className="text-lg text-black/80 max-w-2xl mx-auto mt-4">
              AfyaSolar can be deployed as a simple resilience upgrade or expanded into a full health facility energy system.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
            {modules.map((module) => (
              <div
                key={module.id}
                className="group bg-white rounded-3xl border border-black/10 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-green-700">
                      {module.icon}
                    </div>
                    <span className="text-xs font-bold text-green-700 bg-green-50 px-2 py-1 rounded-full">
                      {module.subtitle.split(" ")[0]}
                    </span>
                  </div>
                  <h3 className="text-lg font-extrabold tracking-tight text-black mb-2">
                    {module.title}
                  </h3>
                  <p className="text-sm text-black/70 mb-3">{module.subtitle}</p>
                  <p className="text-black/80 text-sm mb-4">{module.description}</p>
                  <button
                    onClick={() => toggleModule(module.id)}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-green-700 hover:text-green-800 transition-colors"
                  >
                    {expandedModule === module.id ? "Show less" : "View details"}
                    <svg
                      className={`h-4 w-4 transition-transform ${expandedModule === module.id ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {expandedModule === module.id && (
                    <div className="mt-4 space-y-2">
                      <div className="text-xs font-bold text-black/90 uppercase tracking-wider mb-2">Includes:</div>
                      {module.features.map((feature, featureIdx) => (
                        <div key={featureIdx} className="flex items-start gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-green-700 mt-1.5 flex-shrink-0"></span>
                          <span className="text-sm text-black/80">{feature}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 — Health microgrids */}
      <section className="w-full bg-green-50/40 py-16 md:py-20">
        <div className={container}>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-balance">
              <span className="text-black">From one facility to a</span>{" "}
              <span className="text-green-700">stronger local health ecosystem</span>
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl border border-black/10 p-8 shadow-lg">
              <div className="grid gap-8 md:grid-cols-2 items-center">
                <div>
                  <div className="flex items-center justify-center w-20 h-20 bg-green-100 rounded-2xl mb-6 mx-auto md:mx-0">
                    <svg viewBox="0 0 24 24" className="h-10 w-10 text-green-700" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-extrabold text-black mb-4">Health Facility (Anchor)</h3>
                  <p className="text-black/80 mb-6">The central hub that powers and connects the entire local health ecosystem.</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: (
                      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M19 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                        <circle cx="9" cy="7" r="4"/>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                      </svg>
                    ), label: "Clinics & Pharmacies" },
                    { icon: (
                      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/>
                      </svg>
                    ), label: "Vaccine Fridges" },
                    { icon: (
                      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
                      </svg>
                    ), label: "Water Points" },
                    { icon: (
                      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                        <polyline points="14,2 14,8 20,8"/>
                        <line x1="16" y1="13" x2="8" y2="13"/>
                        <line x1="16" y1="17" x2="8" y2="17"/>
                        <polyline points="10,9 9,9 8,9"/>
                      </svg>
                    ), label: "Diagnostic Labs" },
                    { icon: (
                      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                        <polyline points="9,22 9,12 15,12 15,22"/>
                      </svg>
                    ), label: "Staff Housing" },
                    { icon: (
                      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                        <line x1="12" y1="18" x2="12.01" y2="18"/>
                      </svg>
                    ), label: "Digital Health Nodes" }
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3 rounded-2xl border border-green-700/20 bg-green-50/30"
                      style={{
                        animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s both`
                      }}
                    >
                      {item.icon}
                      <span className="text-sm font-medium text-black">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7 — Why it is different */}
      <section className="w-full py-16 md:py-20">
        <div className={container}>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-balance">
              <span className="text-black">More than</span>{" "}
              <span className="text-green-700">solar installation</span>
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Infrastructure + operations",
                description: "We don't just install equipment - we provide ongoing operations, maintenance, and support to ensure reliable performance.",
                icon: (
                  <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                ),
                color: "border-emerald-600/20 from-emerald-200 via-emerald-50 to-white"
              },
              {
                title: "Health-specific design",
                description: "Our solutions are purpose-built for healthcare facilities, addressing unique needs like cold-chain reliability and medical equipment loads.",
                icon: (
                  <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
                    <path d="M19 8h-2v3h-3v2h3v3h2v-3h3v-2h-3zM4 8h8v2H4zM4 13h5v2H4zM4 18h5v2H4z"/>
                  </svg>
                ),
                color: "border-sky-600/20 from-sky-200 via-sky-50 to-white"
              },
              {
                title: "Pathway to scale",
                description: "Modular approach allows facilities to start small and expand over time, with financing options that match growth stages.",
                icon: (
                  <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
                    <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
                  </svg>
                ),
                color: "border-violet-600/20 from-violet-200 via-violet-50 to-white"
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className={`rounded-3xl border bg-gradient-to-br p-6 shadow-sm ${item.color} transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${idx * 0.15}s both`
                }}
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/70 text-green-700 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-extrabold tracking-tight text-black mb-3">
                  {item.title}
                </h3>
                <p className="text-black/80 leading-7">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8 — Financing */}
      <section className="w-full bg-gradient-to-br from-green-50/30 to-emerald-50/20 py-16 md:py-20">
        <div className={container}>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-balance">
              <span className="text-black">Structured for</span>{" "}
              <span className="text-green-700">adoption</span>
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Subscription / Energy as Service",
                description: "Pay-as-you-go model with no upfront costs",
                icon: (
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="23,4 23,10 17,10"/>
                    <polyline points="1,20 1,14 7,14"/>
                    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
                  </svg>
                )
              },
              {
                title: "Upfront Payment",
                description: "One-time investment with immediate ownership",
                icon: (
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="1" x2="12" y2="23"/>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                  </svg>
                )
              },
              {
                title: "Partner-supported Deployment",
                description: "Leverage partner networks and funding",
                icon: (
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="8.5" cy="7" r="4"/>
                    <line x1="20" y1="8" x2="20" y2="14"/>
                    <line x1="23" y1="11" x2="17" y2="11"/>
                  </svg>
                )
              },
              {
                title: "Portfolio Rollout",
                description: "Multi-site programs with streamlined management",
                icon: (
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="20" x2="18" y2="10"/>
                    <line x1="12" y1="20" x2="12" y2="4"/>
                    <line x1="6" y1="20" x2="6" y2="14"/>
                  </svg>
                )
              }
            ].map((option, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl border border-black/10 p-6 shadow-sm hover:shadow-lg transition-all duration-300 text-center"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s both`
                }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-green-700 mx-auto mb-4">
                  {option.icon}
                </div>
                <h3 className="text-lg font-extrabold tracking-tight text-black mb-2">
                  {option.title}
                </h3>
                <p className="text-black/80 text-sm">{option.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Section 9 — CTA */}
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
              Get Started
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-black mb-6">
                  <span className="text-green-700">Book an</span>{" "}
                  <span className="text-black">Assessment</span>
                </h2>
                
                <p className="text-xl text-black/90 mb-8 max-w-2xl mx-auto leading-8">
                  Take the first step towards climate-resilient healthcare infrastructure. Our team will evaluate your facility's needs and design a tailored solution.
                </p>
                
                {/* Benefits */}
                <div className="grid gap-4 md:grid-cols-3 mb-8">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm text-black/80">Free Initial Consultation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm text-black/80">Custom Solution Design</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm text-black/80">Expert Technical Support</span>
                  </div>
                </div>
                
                <Link
                  href="/contact"
                  className="btn-bounce inline-flex items-center justify-center rounded-full bg-green-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:bg-green-700 hover:shadow-xl hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-green-600"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Schedule Your Site Assessment
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

