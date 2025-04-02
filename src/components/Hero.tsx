
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ContactFormModal from './ContactFormModal';

const Hero: React.FC = () => {
  const navigate = useNavigate();
  const [isFormOpen, setIsFormOpen] = useState(false);
  
  const openContactForm = () => setIsFormOpen(true);
  const closeContactForm = () => setIsFormOpen(false);
  
  const navigateToCaseStudies = () => {
    navigate('/case-studies');
  };

  return (
    <>
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        {/* Background overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-ohwow-black/50 via-ohwow-black to-ohwow-black z-0"></div>
        
        {/* Background animated elements */}
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-ohwow-purple/20 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-ohwow-lime/10 blur-3xl animate-pulse delay-700"></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 z-10 pt-16">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-4 flex justify-center">
              <span className="px-3 py-1 rounded-full border border-ohwow-lime/50 bg-ohwow-lime/10 text-ohwow-lime text-sm">
                REAL ESTATE SUCCESS PARTNER
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Transform Real Estate Sales & Branding with <span className="gradient-text">Oh.Wow's</span> Cutting-Edge Digital & AI Solutions
            </h1>
            
            <p className="text-xl md:text-2xl text-ohwow-white-muted mb-8 max-w-3xl mx-auto">
              From high-converting digital campaigns to AI-powered sales automation—unlock your real estate brand's full potential.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button 
                className="oh-wow-button-primary flex items-center justify-center"
                onClick={openContactForm}
              >
                Get a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button 
                className="oh-wow-button-secondary flex items-center justify-center"
                onClick={navigateToCaseStudies}
              >
                See Our Work
              </button>
            </div>
            
            <div className="mt-16 flex flex-wrap justify-center gap-8 opacity-70">
              <div className="text-center text-ohwow-white/80">
                <p className="text-3xl font-bold text-ohwow-lime mb-1">230%</p>
                <p className="text-sm uppercase">Avg. ROI Increase</p>
              </div>
              <div className="text-center text-ohwow-white/80">
                <p className="text-3xl font-bold text-ohwow-lime mb-1">40+</p>
                <p className="text-sm uppercase">Real Estate Projects</p>
              </div>
              <div className="text-center text-ohwow-white/80">
                <p className="text-3xl font-bold text-ohwow-lime mb-1">24/7</p>
                <p className="text-sm uppercase">Lead Generation</p>
              </div>
              <div className="text-center text-ohwow-white/80">
                <p className="text-3xl font-bold text-ohwow-lime mb-1">15K+</p>
                <p className="text-sm uppercase">Properties Sold</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <span className="text-sm text-ohwow-white/50 mb-2">Scroll to explore</span>
          <div className="w-6 h-10 rounded-full border-2 border-ohwow-white/20 flex justify-center">
            <div className="w-1.5 h-3 bg-ohwow-lime rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>
      
      {/* Contact Form Modal */}
      <ContactFormModal isOpen={isFormOpen} onClose={closeContactForm} source="Hero Section" />
    </>
  );
};

export default Hero;
