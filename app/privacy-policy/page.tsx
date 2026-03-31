import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Ubuntu AfyaLink",
  description: "Ubuntu AfyaLink Company Limited Privacy Policy - How we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
              <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
              PRIVACY POLICY
            </h1>
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">Ubuntu AfyaLink Company Limited</h2>
            <p className="text-gray-600">Effective Date: 11th October 2025</p>
          </div>

          {/* Content */}
          <div className="space-y-8 text-gray-800">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p className="mb-4">
                Ubuntu AfyaLink Company Limited ("we", "us", or "our") is committed to protecting your privacy and ensuring that your personal information is handled responsibly and transparently.
              </p>
              <p className="mb-4">
                This Privacy Policy explains how we collect, use, store, and protect personal information when you interact with:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>our website</li>
                <li>AfyaSolar services</li>
                <li>AfyaBooking AI platform</li>
                <li>any related products or services</li>
              </ul>
              <p>By using our services, you agree to the terms of this Privacy Policy.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
              <p className="mb-4">We may collect the following types of information:</p>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">a. Personal Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Job title and organization</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">b. Business and Operational Data</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Facility information</li>
                <li>Energy usage data</li>
                <li>System performance data</li>
                <li>Appointment and operational data (via AfyaBooking AI)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">c. Technical Data</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>IP address</li>
                <li>Device information</li>
                <li>Browser type</li>
                <li>Usage data and analytics</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Collect Information</h2>
              <p className="mb-4">We collect information when you:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>contact us through forms or email</li>
                <li>use our services or platforms</li>
                <li>register or subscribe to AfyaBooking AI</li>
                <li>interact with our systems or monitoring tools</li>
                <li>visit our website</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. How We Use Your Information</h2>
              <p className="mb-4">We use your information to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>provide and operate our services</li>
                <li>install, monitor, and maintain AfyaSolar systems</li>
                <li>improve healthcare facility operations</li>
                <li>communicate with you</li>
                <li>provide customer support</li>
                <li>send updates or service notifications</li>
                <li>improve our products and services</li>
              </ul>
              <p>We only use your data for legitimate business purposes.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Sharing and Disclosure</h2>
              <p className="mb-4">We do not sell your personal data.</p>
              <p className="mb-4">We may share information with:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>trusted service providers (hosting, analytics)</li>
                <li>technical partners involved in system deployment</li>
                <li>regulators or authorities where required by law</li>
              </ul>
              <p>All third parties are required to protect your data.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Security</h2>
              <p className="mb-4">We implement appropriate technical and organizational measures to protect your data, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>secure servers</li>
                <li>encryption where applicable</li>
                <li>restricted access controls</li>
              </ul>
              <p>However, no system is completely secure, and we cannot guarantee absolute security.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Data Retention</h2>
              <p>We retain your information only as long as necessary to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>provide services</li>
                <li>comply with legal obligations</li>
                <li>resolve disputes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Your Rights</h2>
              <p className="mb-4">Depending on your jurisdiction, you may have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>access your data</li>
                <li>request correction</li>
                <li>request deletion</li>
                <li>object to processing</li>
                <li>withdraw consent</li>
              </ul>
              <p>You can exercise these rights by contacting us.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Cookies and Tracking</h2>
              <p className="mb-4">We may use cookies and similar technologies to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>improve user experience</li>
                <li>analyze website traffic</li>
                <li>enhance platform functionality</li>
              </ul>
              <p>You can control cookies through your browser settings.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Third-Party Services</h2>
              <p className="mb-4">Our services may integrate with third-party tools (e.g. messaging platforms, analytics tools). These providers have their own privacy policies.</p>
              <p>We are not responsible for third-party practices.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. International Data Transfers</h2>
              <p>Your data may be processed or stored outside your country. We ensure appropriate safeguards are in place to protect your information.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. Updates will be posted on our website with a revised effective date.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contact Us</h2>
              <p className="mb-4">If you have any questions about this Privacy Policy, please contact:</p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p><strong>Ubuntu AfyaLink Company Limited</strong></p>
                <p>Email: kaihula@ubuntuafyalink.co.tz</p>
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
