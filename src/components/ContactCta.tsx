
import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import ContactForm from './shared/ContactForm';

const benefits = [
  "Personalized analysis of your current marketing & sales strategy",
  "AI & automation opportunities specific to your property portfolio",
  "Competitor benchmarking & positioning strategy",
  "Custom growth roadmap with clear ROI projections"
];

const ContactCta: React.FC = () => {
  return (
    <section id="contact" className="section-padding bg-ohwow-black relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-ohwow-black to-black/80 z-0"></div>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-ohwow-purple/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-ohwow-lime/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto glassmorphism p-8 md:p-12 border border-ohwow-purple/20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Let's Build Your Next <span className="gradient-text">Success Story</span>
          </h2>
          
          <p className="text-xl text-ohwow-white-muted mb-8 text-center max-w-2xl mx-auto">
            Ready to scale your real estate brand with high-impact digital, branding & AI solutions?
          </p>
          
          <div className="flex flex-col md:flex-row gap-8 mb-10">
            <div className="md:w-1/2">
              <h3 className="text-xl font-semibold mb-4">Your Free Strategy Call Includes:</h3>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-ohwow-lime mt-0.5 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="md:w-1/2 relative z-50">
              <ContactForm 
                source="Homepage CTA"
                subject="New Strategy Call Request from Oh.Wow Website"
                successMessage="Our team will contact you within 24 hours."
                submitButtonText="Schedule a Free Strategy Call"
                loadingText="Processing request..."
              />
              <div className="mt-4 flex items-center justify-center">
                <ArrowRight className="mr-2 h-5 w-5 text-ohwow-lime" />
                <p className="text-sm text-ohwow-white-muted">
                  No obligation. Our team will contact you within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCta;
