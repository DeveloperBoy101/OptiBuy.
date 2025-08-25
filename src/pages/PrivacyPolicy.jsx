import React from "react";
import { Link } from "react-router-dom";
import Title from "../components/Title";

const PrivacyPolicy = () => {
  return (
    <div className="w-full  mx-auto mb-12 mt-10  text-gray-700">
      <div className="px-6 sm:px-10 py-8">
        <div className="text-center mb-6 text-3xl">
          <Title text1="Privacy" text2="Policy" />
          <p className="text-xs text-gray-500 mt-2">Last updated: August 20, 2025</p>
        </div>

        <div className="space-y-8 text-sm leading-6">
          <section>
            <h2 className="text-2xl font-semibold mb-2">Overview</h2>
            <p>
              We respect your privacy. This Policy explains what information we collect, how we use it, and the choices you have. By using our website and services, you agree to the practices described here.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Information We Collect</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Account Data: name, email, password, and profile details you provide.</li>
              <li>Usage Data: pages visited, actions taken, device and browser information.</li>
              <li>Cookies & Similar Tech: small files used for analytics, preferences, and security.</li>
              <li>Communications: messages, support requests, and feedback you send us.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">How We Use Your Information</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Provide and improve our services and site experience.</li>
              <li>Process sign up, login, and account management.</li>
              <li>Personalize content, recommendations, and offers.</li>
              <li>Communicate updates, security alerts, and support responses.</li>
              <li>Analyze performance, prevent fraud, and maintain security.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Cookies</h2>
            <p>
              We use essential, performance, and preference cookies. You can control cookies through your browser settings, but disabling some may impact site functionality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Sharing Of Information</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Service Providers assisting with hosting, analytics, payments, and support.</li>
              <li>Legal and Compliance purposes if required by law or to protect our rights.</li>
              <li>Business Transfers in connection with a merger, acquisition, or asset sale.</li>
              <li>With Your Consent when you ask us to share specific data.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Data Retention</h2>
            <p>
              We retain information as long as your account is active or as needed to provide services and comply with legal obligations. When no longer needed, we securely delete or anonymize it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Your Rights</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Access, update, or delete your account information.</li>
              <li>Object to or restrict certain processing activities.</li>
              <li>Opt out of promotional communications at any time.</li>
              <li>Request a copy of your data where applicable by law.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Security</h2>
            <p>
              We use administrative, technical, and physical safeguards to protect your data. No method of transmission or storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">International Transfers</h2>
            <p>
              Your information may be processed in other countries with different data protection laws. We take steps to ensure appropriate safeguards are in place.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Children’s Privacy</h2>
            <p>
              Our services are not directed to children under the age of 13. We do not knowingly collect personal data from children. If you believe a child has provided data, please contact us for removal.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Changes To This Policy</h2>
            <p>
              We may update this Policy from time to time. Material changes will be highlighted on this page. Continued use of our services means you accept the updated Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
            <p>
              If you have questions or requests about this Policy, contact us at
              <span className="font-medium"> support@example.com</span>.
            </p>
          </section>

          <div className="pt-4">
            <Link to="/" className="flex justify-center items-center">
              <button className="w-32 h-10 prata-regular text-xs  bg-[#053052] text-white hover:bg-[#ece4a9] hover:text-black border transition-colors">
                Back To Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
