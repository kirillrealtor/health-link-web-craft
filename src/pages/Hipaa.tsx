
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Hipaa = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              HIPAA Notice of Privacy Practices
            </h1>
            <p className="text-xl text-gray-600">
              Effective Date: January 1, 2024
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Notice of Privacy Practices</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                This notice describes how medical information about you may be used and disclosed and how you can get access to this information. Please review it carefully.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Pledge Regarding Medical Information</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We understand that medical information about you and your health is personal. We are committed to protecting medical information about you. We create a record of the care and services you receive at our practice. We need this record to provide you with quality care and to comply with certain legal requirements.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We May Use and Disclose Medical Information</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">For Treatment</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may use medical information about you to provide you with medical treatment or services. We may disclose medical information about you to doctors, nurses, technicians, or other personnel who are involved in taking care of you.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">For Payment</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may use and disclose medical information about you so that the treatment and services you receive may be billed and payment may be collected from you, an insurance company, or a third party.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">For Health Care Operations</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may use and disclose medical information about you for health care operations. These uses and disclosures are necessary to run the practice and make sure that all of our patients receive quality care.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights Regarding Medical Information</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Right to Inspect and Copy</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                You have the right to inspect and copy medical information that may be used to make decisions about your care. To inspect and copy medical information, you must submit your request in writing.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Right to Amend</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you feel that medical information we have about you is incorrect or incomplete, you may ask us to amend the information. You have the right to request an amendment for as long as the information is kept by or for the practice.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Right to Request Restrictions</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                You have the right to request a restriction or limitation on the medical information we use or disclose about you for treatment, payment, or health care operations.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Right to Request Confidential Communications</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                You have the right to request that we communicate with you about medical matters in a certain way or at a certain location.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Notice</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We reserve the right to change this notice. We reserve the right to make the revised or changed notice effective for medical information we already have about you as well as any information we receive in the future.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Complaints</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you believe your privacy rights have been violated, you may file a complaint with our practice or with the Secretary of the Department of Health and Human Services. You will not be penalized for filing a complaint.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-600 leading-relaxed">
                For more information about this Notice or to file a complaint, contact:
              </p>
              <div className="mt-4 p-6 bg-gray-50 rounded-lg">
                <p className="text-gray-800 font-medium">Privacy Officer - Doral Dental</p>
                <p className="text-gray-600">123 Health Street, Wellness City, WC 12345</p>
                <p className="text-gray-600">Phone: (555) 123-4567</p>
                <p className="text-gray-600">Email: privacy@doraldental.com</p>
              </div>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Hipaa;
