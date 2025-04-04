
import React from 'react';
import ContactForm from './shared/ContactForm';

const CaseStudyContactForm: React.FC = () => {
  return (
    <div className="glassmorphism p-8 md:p-12 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 gradient-text">Ready to achieve similar results?</h2>
      <p className="text-ohwow-white-muted max-w-2xl mx-auto mb-8">
        Our team of digital marketing and automation experts are ready to transform your real estate brand's performance.
      </p>

      <div className="max-w-md mx-auto">
        <ContactForm 
          source="Case Study Page"
          subject="Case Study Consultation Request"
          successMessage="Your consultation request has been submitted. We'll be in touch soon!"
          submitButtonText="Book Your Free Consultation"
          loadingText="Processing..."
          className="max-w-md mx-auto"
        />
        <p className="mt-4 text-sm text-ohwow-white-muted">
          No obligation. Our team will contact you within 24 hours.
        </p>
      </div>
    </div>
  );
};

export default CaseStudyContactForm;
