"use client";

import Link from "next/link";
import Image from "next/image";
import { SolarSizingTool } from "../../../components/solar/SizingTool";

export default function SolarDesignToolPage() {
  const container = "mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-10";

  return (
    <main className="bg-white text-black">
      {/* Hero Section */}
      <section className="w-full py-20 md:py-28 bg-gradient-to-br from-green-50 via-white to-emerald-50/40">
        <div className={`${container} grid gap-10 md:grid-cols-2 md:items-center`}>
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-green-600/25 bg-green-50/50 px-3 py-1 text-xs font-bold tracking-[0.16em] text-green-700 uppercase mb-6">
              <span className="inline-flex h-2 w-2 rounded-full bg-green-600"></span>
              Design Tool
              <span className="inline-flex h-2 w-2 rounded-full bg-green-600"></span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.05] tracking-tight text-balance mb-6">
              <span className="text-green-700">Solar Design &</span>{" "}
              <span className="text-black">Cost Analysis</span>{" "}
              <span className="text-green-700">Tool</span>
            </h1>
            
            <p className="text-xl leading-8 text-black/90 mb-8 max-w-2xl">
              Calculate your solar energy needs, estimate costs, and design the perfect solar solution for your healthcare facility. Our intelligent tool helps you make informed decisions about renewable energy investments.
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/products/afyasolar"
                className="btn-bounce inline-flex items-center justify-center rounded-full border border-green-600/40 bg-white px-6 py-3 text-sm font-semibold text-black shadow-sm transition hover:border-green-600 hover:bg-green-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to AfyaSolar
              </Link>
              <Link
                href="/contact"
                className="btn-bounce inline-flex items-center justify-center rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                Get Expert Help
              </Link>
            </div>
          </div>
          
          <div className="relative h-80 w-full overflow-hidden rounded-3xl border border-black/10 bg-white md:h-96">
            <Image
              src="/images/afyasolar.jpg"
              alt="Solar design tool interface"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* Tool Section */}
      <section className="w-full py-16 md:py-20 bg-gradient-to-br from-gray-50 via-white to-green-50/30">
        <div className={container}>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-balance mb-6">
                <span className="text-green-700">Design Your</span>{" "}
                <span className="text-black">Solar Solution</span>
              </h2>
              <p className="text-xl leading-8 text-black/90 max-w-3xl mx-auto">
                Use our advanced calculator to determine the optimal solar configuration for your healthcare facility's energy needs.
              </p>
            </div>
            
            {/* Solar Sizing Tool */}
            <SolarSizingTool />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-16 md:py-20">
        <div className={container}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-balance text-center mb-12">
              <span className="text-black">Why Use Our</span>{" "}
              <span className="text-green-700">Design Tool?</span>
            </h2>
            
            <div className="grid gap-8 md:grid-cols-3">
              <div className="bg-white rounded-3xl border-2 border-blue-600/20 bg-gradient-to-br from-blue-200 via-blue-50 to-white p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-black mb-4">Accurate Calculations</h3>
                <p className="text-gray-600 leading-relaxed">
                  Advanced algorithms ensure precise energy requirements and cost estimates based on your facility's specific needs.
                </p>
              </div>
              
              <div className="bg-white rounded-3xl border-2 border-green-600/20 bg-gradient-to-br from-green-200 via-green-50 to-white p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-black mb-4">Cost Transparency</h3>
                <p className="text-gray-600 leading-relaxed">
                  Get detailed breakdowns of equipment costs, installation expenses, and projected savings over time.
                </p>
              </div>
              
              <div className="bg-white rounded-3xl border-2 border-purple-600/20 bg-gradient-to-br from-purple-200 via-purple-50 to-white p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-black mb-4">Quick Results</h3>
                <p className="text-gray-600 leading-relaxed">
                  Receive instant recommendations and designs tailored to your healthcare facility's unique requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 md:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50/40">
        <div className={container}>
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-black mb-6">
              Ready to Design Your Solar Solution?
            </h2>
            <p className="text-xl text-black/90 mb-8 max-w-3xl mx-auto">
              Our team is here to help you implement the perfect solar energy system for your healthcare facility.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="btn-bounce inline-flex items-center justify-center rounded-full bg-green-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:bg-green-700 hover:shadow-xl hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-green-600"
              >
                Schedule Consultation
              </Link>
              <Link
                href="/products/afyasolar"
                className="btn-bounce inline-flex items-center justify-center rounded-full border-2 border-green-600/40 bg-white px-8 py-4 text-base font-semibold text-black shadow-lg transition-all duration-300 hover:border-green-600 hover:bg-green-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                Learn More About AfyaSolar
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
