
import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

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
            
            <div className="md:w-1/2">
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-md focus:outline-none focus:border-ohwow-purple"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-md focus:outline-none focus:border-ohwow-purple"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-md focus:outline-none focus:border-ohwow-purple"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-md focus:outline-none focus:border-ohwow-purple"
                  />
                </div>
              </form>
            </div>
          </div>
          
          <div className="text-center">
            <button className="oh-wow-button-primary flex items-center justify-center mx-auto animate-pulse">
              Schedule a Free Strategy Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <p className="mt-4 text-sm text-ohwow-white-muted">
              No obligation. Our team will contact you within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCta;
