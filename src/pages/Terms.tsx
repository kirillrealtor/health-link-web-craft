
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600">
              Effective Date: January 1, 2024
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                By accessing and using the services provided by Doral Dental, you accept and agree to be bound by the terms and provision of this agreement. These Terms of Service apply to all visitors, users, and others who access or use our services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Doral Dental provides comprehensive dental care services including but not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>General and preventive dentistry</li>
                <li>Cosmetic dental procedures</li>
                <li>Oral surgery and extractions</li>
                <li>Dental implants and prosthodontics</li>
                <li>Emergency dental care</li>
                <li>Pediatric dentistry</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Appointment Policy</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Appointments must be scheduled in advance. We require 24-hour notice for cancellations. Failure to provide adequate notice may result in a cancellation fee. No-show appointments may be charged the full treatment fee.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Payment Terms</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Payment is due at the time of service unless prior arrangements have been made. We accept cash, check, and major credit cards. Insurance claims will be filed as a courtesy, but patients are responsible for understanding their coverage and any remaining balances.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Privacy and Confidentiality</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We are committed to protecting your privacy and maintaining the confidentiality of your health information in accordance with HIPAA regulations. Please refer to our Privacy Policy for detailed information about how we collect, use, and protect your personal information.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Treatment Consent</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                By scheduling and attending appointments, you consent to examination and treatment by our dental professionals. All treatment recommendations will be explained, and your informed consent will be obtained before any procedures are performed.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                While we strive to provide the highest quality dental care, we cannot guarantee specific results. Our liability is limited to the cost of the services provided. We are not responsible for any indirect, incidental, or consequential damages.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Changes to Terms</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We reserve the right to modify these terms at any time. Changes will be posted on our website and take effect immediately upon posting. Continued use of our services constitutes acceptance of the modified terms.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Information</h2>
              <p className="text-gray-600 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="mt-4 p-6 bg-gray-50 rounded-lg">
                <p className="text-gray-800 font-medium">Doral Dental</p>
                <p className="text-gray-600">123 Health Street, Wellness City, WC 12345</p>
                <p className="text-gray-600">Phone: (555) 123-4567</p>
                <p className="text-gray-600">Email: info@doraldental.com</p>
              </div>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Terms;
