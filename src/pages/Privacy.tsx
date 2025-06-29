
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="h-8 w-8 text-teal-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy & HIPAA Compliance</h1>
          <p className="text-xl text-gray-600">
            Your privacy and the security of your health information is our top priority
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6 bg-teal-50 rounded-2xl">
            <Lock className="h-12 w-12 text-teal-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">HIPAA Compliant</h3>
            <p className="text-gray-600">All patient information is protected under HIPAA regulations</p>
          </div>
          <div className="text-center p-6 bg-blue-50 rounded-2xl">
            <Eye className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure Systems</h3>
            <p className="text-gray-600">SSL encryption and secure servers protect your data</p>
          </div>
          <div className="text-center p-6 bg-purple-50 rounded-2xl">
            <FileText className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Transparent Policies</h3>
            <p className="text-gray-600">Clear policies on how we collect and use information</p>
          </div>
        </div>

        <div className="prose max-w-none">
          <div className="bg-gray-50 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">HIPAA Notice of Privacy Practices</h2>
            <p className="text-gray-700 mb-4">
              This notice describes how health information about you may be used and disclosed and 
              how you can get access to this information. Please review it carefully.
            </p>
            <p className="text-gray-700">
              Doral Dental is committed to protecting your health information in compliance with 
              the Health Insurance Portability and Accountability Act (HIPAA).
            </p>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-teal-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Treatment</h3>
                  <p className="text-gray-700">
                    We use your health information to provide dental treatments, coordinate care 
                    with other healthcare providers, and maintain your dental records.
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Payment</h3>
                  <p className="text-gray-700">
                    Your information may be used to process insurance claims, verify coverage, 
                    and handle billing for services provided.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Healthcare Operations</h3>
                  <p className="text-gray-700">
                    We may use your information for quality improvement, staff training, 
                    and other healthcare operations necessary to run our practice.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Access Your Records</h3>
                  <p className="text-gray-600">
                    You have the right to request and receive copies of your health records.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Request Amendments</h3>
                  <p className="text-gray-600">
                    You may request corrections to your health information if you believe it's incorrect.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Restrict Use</h3>
                  <p className="text-gray-600">
                    You can request restrictions on how we use or disclose your health information.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">File Complaints</h3>
                  <p className="text-gray-600">
                    You have the right to file a complaint if you believe your privacy rights have been violated.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-teal-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Security Measures</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Physical Safeguards</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Secure facility access controls</li>
                    <li>• Locked filing cabinets</li>
                    <li>• Restricted access areas</li>
                    <li>• Secure disposal of records</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Technical Safeguards</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• SSL encryption for data transmission</li>
                    <li>• Secure servers and databases</li>
                    <li>• User authentication systems</li>
                    <li>• Regular security updates</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <div className="bg-gray-900 text-white rounded-2xl p-8">
                <p className="text-lg mb-4">
                  If you have any questions about this privacy notice or need to exercise your rights, please contact:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-teal-400 font-semibold mb-2">Privacy Officer</h3>
                    <p>Dr. Maria Rodriguez</p>
                    <p>Doral Dental</p>
                    <p>123 Health Street</p>
                    <p>Wellness City, WC 12345</p>
                  </div>
                  <div>
                    <h3 className="text-teal-400 font-semibold mb-2">Contact Details</h3>
                    <p>Phone: (555) 123-4567</p>
                    <p>Email: privacy@doraldental.com</p>
                    <p>Fax: (555) 123-4568</p>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-700">
                  <p className="text-sm text-gray-300">
                    This notice is effective as of January 1, 2024, and complies with all applicable HIPAA regulations.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Privacy;
