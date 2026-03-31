"use client";

import Link from "next/link";
import Image from "next/image";

export default function CaseStudies() {
  const container = "mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-10";

  return (
    <main className="bg-white text-black">
      {/* Section 1 — Hero */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50/40 relative overflow-hidden">
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
              Case Study
              <span className="inline-flex h-2 w-2 rounded-full bg-green-600"></span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight text-balance mb-6">
              <span className="text-green-700">AfyaBooking AI</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 max-w-3xl mx-auto">
              How Appledental Clinic created a faster, more patient-centered care journey with AfyaBooking AI
            </h2>
            
            <p className="text-xl leading-8 text-black/90 mb-12 max-w-3xl mx-auto">
              A practical digital coordination layer that helped Appledental Clinic reduce friction, improve appointment flow, and run a smoother daily operation.
            </p>
            
            {/* Client Info */}
            <div className="bg-white rounded-3xl border-2 border-gray-200 p-8 shadow-lg max-w-2xl mx-auto">
              <div className="grid gap-6 md:grid-cols-2 items-center">
                <div className="space-y-4 text-left">
                  <div>
                    <span className="text-sm font-bold text-green-700">Client</span>
                    <p className="text-black font-semibold">Appledental Clinic</p>
                  </div>
                  <div>
                    <span className="text-sm font-bold text-green-700">Location</span>
                    <p className="text-black font-semibold">Dar es Salaam, Tanzania</p>
                  </div>
                  <div>
                    <span className="text-sm font-bold text-green-700">CEO</span>
                    <p className="text-black font-semibold">Dr. Shunu</p>
                  </div>
                  <div>
                    <span className="text-sm font-bold text-green-700">Solution used</span>
                    <p className="text-black font-semibold">Booking, queue flow, patient reminders, operational intelligence</p>
                  </div>
                </div>
                
                {/* Dr. Shunu's Image */}
                <div className="flex justify-center">
                  <div className="relative w-48 h-64 md:w-56 md:h-72 rounded-2xl overflow-hidden border-4 border-green-200 shadow-lg">
                    <Image
                      src="/images/dr shunu.jpeg"
                      alt="Dr. Shunu, CEO of Appledental Clinic"
                      fill
                      className="object-contain"
                      sizes="(min-width: 768px) 224px, 192px"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — The Challenge */}
      <section className="w-full py-16 md:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50/40">
        <div className={container}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-balance mb-8">
              <span className="text-black">The</span>{" "}
              <span className="text-green-700">Challenge</span>
            </h2>
            
            <p className="text-xl leading-8 text-black/90 mb-6">
              Appledental Clinic was serving patients in a busy outpatient environment where daily demand needed to be managed with speed, consistency, and care. But too much of the coordination burden still sat on manual processes.
            </p>
            
            <p className="text-xl leading-8 text-black/90 mb-8">
              Booking could become fragmented, patient arrivals were not always easy to organize, and front-desk teams spent valuable time resolving avoidable confusion. The result was pressure on staff, unnecessary waiting for patients, and limited visibility into how the clinic was performing day to day.
            </p>
            
            {/* Challenge Points */}
            <div className="grid gap-4 md:grid-cols-3">
              {[
                "Manual booking processes",
                "Unorganized patient arrivals",
                "Limited operational visibility"
              ].map((challenge, idx) => (
                <div
                  key={idx}
                  className={[
                    "bg-white rounded-3xl border p-6 shadow-sm hover:shadow-lg transition-all duration-300",
                    idx === 0 && "border-red-600/20 bg-gradient-to-br from-red-200 via-red-50 to-white",
                    idx === 1 && "border-orange-600/20 bg-gradient-to-br from-orange-200 via-orange-50 to-white",
                    idx === 2 && "border-amber-600/20 bg-gradient-to-br from-amber-200 via-amber-50 to-white"
                  ].join(" ")}
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-xl mb-4 mx-auto">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <p className="text-center font-semibold text-black">{challenge}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — The Solution */}
      <section className="w-full py-16 md:py-20">
        <div className={container}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-balance mb-8">
              <span className="text-black">The</span>{" "}
              <span className="text-green-700">Solution</span>
            </h2>
            
            <p className="text-xl leading-8 text-black/90 mb-8">
              Appledental Clinic adopted AfyaBooking AI to bring more structure to the patient journey before, during, and after the visit. The platform supported appointment booking, queue flow management, patient reminders, and operational insight in one practical system.
            </p>
            
            <p className="text-xl leading-8 text-black/90 mb-12">
              Instead of changing the clinic's care model, AfyaBooking AI strengthened the coordination layer around it, helping the team manage demand more clearly and respond to patients more consistently.
            </p>
            
            {/* Solution Features */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Appointment Booking",
                  description: "Structured scheduling system",
                  icon: (
                    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                      <line x1="16" y1="2" x2="16" y2="6"/>
                      <line x1="8" y1="2" x2="8" y2="6"/>
                      <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                  ),
                  color: "border-blue-600/20 bg-gradient-to-br from-blue-200 via-blue-50 to-white"
                },
                {
                  title: "Queue Flow",
                  description: "Visible patient management",
                  icon: (
                    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                  ),
                  color: "border-green-600/20 bg-gradient-to-br from-green-200 via-green-50 to-white"
                },
                {
                  title: "Patient Reminders",
                  description: "Automated notifications",
                  icon: (
                    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                      <line x1="12" y1="18" x2="12.01" y2="18"/>
                    </svg>
                  ),
                  color: "border-purple-600/20 bg-gradient-to-br from-purple-200 via-purple-50 to-white"
                },
                {
                  title: "Operational Intelligence",
                  description: "Real-time insights",
                  icon: (
                    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="18" y1="20" x2="18" y2="10"/>
                      <line x1="12" y1="20" x2="12" y2="4"/>
                      <line x1="6" y1="20" x2="6" y2="14"/>
                    </svg>
                  ),
                  color: "border-orange-600/20 bg-gradient-to-br from-orange-200 via-orange-50 to-white"
                }
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className={`bg-white rounded-3xl border p-6 shadow-sm hover:shadow-lg transition-all duration-300 text-center ${feature.color}`}
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-semibold text-black mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 — The Impact */}
      <section className="w-full py-16 md:py-20 bg-gradient-to-br from-green-50 via-emerald-50/50 to-green-50/40">
        <div className={container}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-balance mb-8">
              <span className="text-black">The</span>{" "}
              <span className="text-green-700">Impact</span>
            </h2>
            
            <p className="text-xl leading-8 text-black/90 mb-12">
              With stronger booking discipline, better communication, and improved operational visibility, Appledental Clinic was able to create a more predictable and patient-centered way of working. Staff gained better control of the flow of care, patients experienced less friction, and leadership could begin making decisions with clearer operational insight.
            </p>
            
            {/* Quote */}
            <div className="bg-white rounded-3xl border-2 border-green-200 p-8 shadow-lg mb-12">
              <svg className="w-8 h-8 text-green-600 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-xl leading-8 text-black/90 italic mb-4">
                "Before AfyaBooking AI, managing patient flow took too much manual effort, and that affected both staff efficiency and patient experience. With the system in place, we now have a more organized, responsive, and patient-centered way of operating."
              </p>
              <p className="text-sm font-bold text-green-700">— Dr. Shunu, CEO, Appledental Clinic</p>
            </div>
            
            {/* Impact Metrics */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                { value: "↓ 42%", label: "reduction in average patient wait time", color: "border-blue-600/20 bg-gradient-to-br from-blue-200 via-blue-50 to-white" },
                { value: "↓ 31%", label: "reduction in missed appointments driven by automated reminders and confirmations", color: "border-purple-600/20 bg-gradient-to-br from-purple-200 via-purple-50 to-white" },
                { value: "↑ 38%", label: "increase in daily patient throughput without increasing clinical staff", color: "border-green-600/20 bg-gradient-to-br from-green-200 via-green-50 to-white" },
                { value: "↑ 27%", label: "improvement in patient satisfaction scores based on post-visit feedback collection", color: "border-orange-600/20 bg-gradient-to-br from-orange-200 via-orange-50 to-white" },
                { value: "100%", label: "visibility into daily operations including peak hours, service delays, and staff allocation", color: "border-cyan-600/20 bg-gradient-to-br from-cyan-200 via-cyan-50 to-white" }
              ].map((metric, idx) => (
                <div
                  key={idx}
                  className={`bg-white rounded-3xl border p-6 shadow-sm hover:shadow-lg transition-all duration-300 text-center ${metric.color}`}
                >
                  <div className="text-3xl font-bold text-green-700 mb-3">{metric.value}</div>
                  <p className="text-sm text-gray-600 leading-relaxed">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 7 — What Changed */}
      <section className="w-full py-16 md:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50/40">
        <div className={container}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-balance mb-12">
              <span className="text-black">What changed</span>{" "}
              <span className="text-green-700">inside the clinic</span>
            </h2>
            
            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  title: "Faster patient access",
                  description: "Patients could move into the care journey with less confusion and more predictable scheduling.",
                  icon: (
                    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/>
                    </svg>
                  ),
                  color: "border-blue-600/20 bg-gradient-to-br from-blue-200 via-blue-50 to-white"
                },
                {
                  title: "Better appointment reliability",
                  description: "Reminder workflows reduced missed visits and improved daily schedule stability.",
                  icon: (
                    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                      <polyline points="22,4 12,14.01 9,11.01"/>
                    </svg>
                  ),
                  color: "border-green-600/20 bg-gradient-to-br from-green-200 via-green-50 to-white"
                },
                {
                  title: "More efficient staff coordination",
                  description: "Front-desk teams spent less time managing avoidable friction and more time supporting care delivery.",
                  icon: (
                    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                  ),
                  color: "border-purple-600/20 bg-gradient-to-br from-purple-200 via-purple-50 to-white"
                },
                {
                  title: "Clearer operational insight",
                  description: "The clinic could better understand demand patterns, pressure points, and workflow opportunities.",
                  icon: (
                    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="18" y1="20" x2="18" y2="10"/>
                      <line x1="12" y1="20" x2="12" y2="4"/>
                      <line x1="6" y1="20" x2="6" y2="14"/>
                    </svg>
                  ),
                  color: "border-orange-600/20 bg-gradient-to-br from-orange-200 via-orange-50 to-white"
                }
              ].map((change, idx) => (
                <div
                  key={idx}
                  className={`bg-white rounded-3xl border p-6 shadow-sm hover:shadow-lg transition-all duration-300 ${change.color}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{change.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-black mb-2">{change.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{change.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 8 — Before vs After Infographic */}
      <section className="w-full py-16 md:py-20">
        <div className={container}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-balance mb-12 text-center">
              <span className="text-black">Before vs After</span>{" "}
              <span className="text-green-700">patient journey</span>
            </h2>
            
            <div className="grid gap-8 md:grid-cols-2">
              {/* Before */}
              <div className="bg-red-50 rounded-3xl border-2 border-red-200 p-8">
                <h3 className="text-2xl font-bold text-red-700 mb-6 text-center">Before</h3>
                <div className="space-y-4">
                  {[
                    "Manual booking",
                    "Uncertain arrival",
                    "Crowded queue",
                    "Delayed service",
                    "Weak follow-up"
                  ].map((step, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-red-200 rounded-full flex items-center justify-center text-red-700 font-bold text-sm">
                        {idx + 1}
                      </div>
                      <p className="text-red-900 font-medium">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* After */}
              <div className="bg-green-50 rounded-3xl border-2 border-green-200 p-8">
                <h3 className="text-2xl font-bold text-green-700 mb-6 text-center">After</h3>
                <div className="space-y-4">
                  {[
                    "Structured booking",
                    "Planned arrival",
                    "Visible queue",
                    "Smoother consultation flow",
                    "Automated follow-up"
                  ].map((step, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center text-green-700 font-bold text-sm">
                        {idx + 1}
                      </div>
                      <p className="text-green-900 font-medium">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9 — Why It Matters */}
      <section className="w-full py-16 md:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50/40">
        <div className={container}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-balance mb-8">
              <span className="text-black">Why it</span>{" "}
              <span className="text-green-700">matters</span>
            </h2>
            
            <p className="text-xl leading-8 text-black/90 mb-8">
              This case shows that better care does not begin only in the consultation room. It begins with coordination. When patients can book more easily, receive clearer communication, and move through a facility with less friction, the care experience improves. When staff can see and manage demand more clearly, operations improve. AfyaBooking AI helps facilities achieve both.
            </p>
            
            {/* Product Screenshot */}
            <div className="bg-white rounded-3xl border-2 border-gray-200 p-8 shadow-lg">
              <div className="relative h-96 w-full overflow-hidden rounded-2xl border border-black/10 bg-gray-50">
                <Image
                  src="/images/afyabooking dashabord.png"
                  alt="AfyaBooking AI dashboard showing booking and operational insights"
                  fill
                  className="object-contain"
                  sizes="(min-width: 1024px) 100vw, 100vw"
                />
              </div>
              <p className="text-center text-sm text-gray-600 mt-4">AfyaBooking AI dashboard with real-time operational insights</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 10 — Final CTA */}
      <section className="w-full py-20 md:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50/40 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className={`${container} relative z-10`}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-[1.05] tracking-tight text-balance mb-6">
              <span className="text-green-700">Bring the same coordination</span>{" "}
              <span className="text-black">advantage to your facility</span>
            </h2>
            
            <p className="text-xl leading-8 text-black/90 mb-12 max-w-3xl mx-auto">
              If your clinic is dealing with long waits, missed appointments, or operational friction, AfyaBooking AI can help you build a more responsive and scalable patient experience.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/products/afyabooking"
                className="btn-bounce inline-flex items-center justify-center rounded-full bg-green-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:bg-green-700 hover:shadow-xl hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-green-600"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Request a Demo
              </Link>
              <Link
                href="/contact"
                className="btn-bounce inline-flex items-center justify-center rounded-full border-2 border-gray-300 bg-white px-8 py-4 text-base font-semibold text-black shadow-lg transition-all duration-300 hover:border-gray-400 hover:shadow-xl hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                Talk to Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Case Studies */}
      <section className="w-full py-16 md:py-20 bg-white border-t border-gray-200">
        <div className={container}>
          <div className="text-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full border-2 border-green-600/20 bg-green-50/50 px-6 py-3 text-base font-semibold text-green-700 transition-all duration-300 hover:border-green-600/40 hover:bg-green-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
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
