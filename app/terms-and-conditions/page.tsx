import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions - Ubuntu AfyaLink",
  description: "Ubuntu AfyaLink Company Limited Terms & Conditions - Governing the use of AfyaSolar and AfyaBooking AI services.",
};

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">📜 TERMS & CONDITIONS</h1>
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">Ubuntu AfyaLink Company Limited</h2>
            <p className="text-gray-600">Effective Date: 11th October 2025</p>
          </div>

          {/* Content */}
          <div className="space-y-8 text-gray-800">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p className="mb-4">
                These Terms and Conditions ("Terms") govern the use of services provided by Ubuntu AfyaLink Company Limited ("Company", "we", "us", or "our").
              </p>
              <p>
                By accessing or using our services, including AfyaSolar and AfyaBooking AI, you ("Customer", "User") agree to be bound by these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Services Overview</h2>
              <p className="mb-4">We provide integrated infrastructure and digital services including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>AfyaSolar: solar energy systems, installation, and monitoring</li>
                <li>Energy-as-a-Service (EaaS): subscription-based energy provision</li>
                <li>PAYGo / Instalment Plans: financed system ownership</li>
                <li>Health Microgrid Services: shared energy distribution models</li>
                <li>AfyaBooking AI: digital healthcare operations platform</li>
                <li>Maintenance & Support Services</li>
              </ul>
              <p>Services may vary depending on the agreement with each customer.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Eligibility</h2>
              <p>You must:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>be legally authorized to enter into a binding agreement</li>
                <li>provide accurate and complete information</li>
                <li>use the services only for lawful purposes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Service Agreements</h2>
              <p className="mb-4">Specific services may be governed by separate written agreements (contracts, proposals, or service orders).</p>
              <p>In case of conflict:</p>
              <p className="font-semibold">The signed service agreement overrides these general Terms</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Payment Terms</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">5.1 Pricing Models</h3>
              <p className="mb-4">Customers may pay through:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Upfront purchase</li>
                <li>PAYGo / instalment plans</li>
                <li>Monthly subscription (Energy-as-a-Service)</li>
                <li>Software subscription (AfyaBooking AI)</li>
                <li>Maintenance service fees</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">5.2 Payment Obligations</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Payments must be made on time as agreed</li>
                <li>Late payments may result in:
                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>service suspension</li>
                    <li>penalties (if specified in contract)</li>
                  </ul>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">5.3 Default</h3>
              <p>If a customer fails to pay:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>we may suspend or limit services</li>
                <li>repossess equipment (for PAYGo or EaaS models)</li>
                <li>terminate the agreement</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Ownership of Equipment</h2>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">6.1 Upfront Purchase</h3>
              <p>Customer owns the system upon full payment</p>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">6.2 PAYGo / Instalment</h3>
              <p>Ownership transfers only after full payment</p>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">6.3 Energy-as-a-Service / Microgrid</h3>
              <p>Equipment remains the property of Ubuntu AfyaLink</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Installation and Access</h2>
              <p className="mb-4">Customers agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>provide safe and adequate installation space</li>
                <li>allow access for installation, inspection, and maintenance</li>
                <li>ensure site conditions meet agreed requirements</li>
              </ul>
              <p>We are not liable for delays caused by site readiness issues.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Use of Services</h2>
              <p className="mb-4">Customers must:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>use systems responsibly</li>
                <li>not tamper with equipment or software</li>
                <li>not resell or redistribute services without authorization</li>
              </ul>
              <p>Unauthorized use may result in service termination.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. AfyaBooking AI (Software Terms)</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access is provided via subscription</li>
                <li>Features may evolve over time</li>
                <li>Users must keep login credentials secure</li>
                <li>We are not responsible for user-entered data errors</li>
              </ul>
              <p>We reserve the right to suspend access for misuse.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Maintenance and Support</h2>
              <p className="mb-4">We provide:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>preventive maintenance</li>
                <li>system monitoring</li>
                <li>technical support</li>
              </ul>
              <p>Service levels may vary based on the selected plan.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Service Availability</h2>
              <p className="mb-4">We aim to provide reliable services but do not guarantee uninterrupted operation.</p>
              <p className="mb-4">We are not liable for disruptions caused by:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>force majeure events</li>
                <li>network failures</li>
                <li>external technical issues</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Limitation of Liability</h2>
              <p className="mb-4">To the maximum extent permitted by law:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>we are not liable for indirect or consequential damages</li>
                <li>liability is limited to the amount paid for services within a defined period</li>
              </ul>
              <p>This includes loss of revenue, data, or business interruption.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Indemnification</h2>
              <p className="mb-4">Customers agree to indemnify and hold harmless Ubuntu AfyaLink from:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>misuse of services</li>
                <li>violation of laws</li>
                <li>third-party claims arising from customer actions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Data Protection</h2>
              <p className="mb-4">Use of data is governed by our Privacy Policy.</p>
              <p>Customers are responsible for ensuring lawful use of any personal data entered into AfyaBooking AI.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Termination</h2>
              <p className="mb-4">We may terminate services if:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>payment obligations are not met</li>
                <li>terms are violated</li>
                <li>misuse or fraud is detected</li>
              </ul>
              <p>Customers may terminate according to contract terms.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">16. Force Majeure</h2>
              <p className="mb-4">We are not responsible for failure to perform due to events beyond our control, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>natural disasters</li>
                <li>government actions</li>
                <li>power grid failures</li>
                <li>pandemics</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">17. Governing Law</h2>
              <p>These Terms shall be governed by the laws of:</p>
              <p className="font-semibold">The United Republic of Tanzania</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">18. Dispute Resolution</h2>
              <p className="mb-4">Disputes shall be resolved through:</p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>good faith negotiation</li>
                <li>mediation (if necessary)</li>
                <li>arbitration or courts in Tanzania</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">19. Changes to Terms</h2>
              <p className="mb-4">We may update these Terms from time to time.</p>
              <p>Continued use of services constitutes acceptance of updated Terms.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">20. Contact Information</h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p><strong>Ubuntu AfyaLink Company Limited</strong></p>
                <p>Email: info@ubuntuafyalink.co.tz</p>
                <p>Phone: +255 656 721 324</p>
                <p>Location: Dar es Salaam, Tanzania</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
