
import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ContactFormModal from './ContactFormModal';

const Hero: React.FC = () => {
  const navigate = useNavigate();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  const openContactForm = () => setIsFormOpen(true);
  const closeContactForm = () => setIsFormOpen(false);
  
  const navigateToCaseStudies = () => {
    navigate('/case-studies');
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const scrollToExplore = () => {
    const exploreSection = document.getElementById('why-us');
    if (exploreSection) {
      exploreSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24">
        {/* Background elements */}
        <div className="absolute inset-0 -z-10">
          {/* Animated gradient circles */}
          <div className="absolute top-1/4 left-1/5 w-[500px] h-[500px] rounded-full bg-ohwow-purple/10 blur-[100px] animate-float"></div>
          <div className="absolute bottom-1/4 right-1/5 w-[600px] h-[600px] rounded-full bg-ohwow-lime/5 blur-[120px] animate-float" style={{ animationDelay: '2s' }}></div>
          
          {/* Animated particles/dots */}
          <div className="absolute inset-0 opacity-20">
            {Array.from({ length: 20 }).map((_, index) => (
              <div 
                key={index}
                className="absolute rounded-full bg-ohwow-purple-light/50"
                style={{
                  width: `${Math.random() * 6 + 2}px`,
                  height: `${Math.random() * 6 + 2}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animation: `float ${Math.random() * 5 + 3}s infinite ease-in-out`,
                  animationDelay: `${Math.random() * 5}s`
                }}
              ></div>
            ))}
          </div>
          
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10 pt-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className={`mb-6 flex justify-center transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
              <span className="px-4 py-2 rounded-full border border-ohwow-lime/50 bg-gradient-to-r from-ohwow-lime/20 to-ohwow-lime/5 text-ohwow-lime text-sm font-semibold backdrop-blur-sm">
                REAL ESTATE SUCCESS PARTNER
              </span>
            </div>
            
            <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
              Transform Real Estate Sales & Branding with <span className="gradient-text relative inline-block">
                Oh.Wow's
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-ohwow-purple to-ohwow-purple-light transform scale-x-0 origin-left transition-transform duration-1000 ease-out delay-1000" style={{ transitionDelay: '1s', transform: isVisible ? 'scaleX(1)' : 'scaleX(0)' }}></span>
              </span> Cutting-Edge Digital & AI Solutions
            </h1>
            
            <p className={`text-xl md:text-2xl text-ohwow-white-muted mb-10 max-w-3xl mx-auto transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
              From high-converting digital campaigns to AI-powered sales automation—unlock your real estate brand's full potential.
            </p>
            
            <div className={`flex flex-col sm:flex-row justify-center gap-4 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
              <button 
                className="oh-wow-button-primary flex items-center justify-center group"
                onClick={openContactForm}
              >
                Get a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button 
                className="oh-wow-button-secondary flex items-center justify-center group"
                onClick={navigateToCaseStudies}
              >
                See Our Work
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
            </div>
            
            <div className={`mt-20 flex flex-wrap justify-center gap-8 md:gap-12 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {[
                { value: '230%', label: 'Avg. ROI Increase' },
                { value: '40+', label: 'Real Estate Projects' },
                { value: '24/7', label: 'Lead Generation' },
                { value: '15K+', label: 'Properties Sold' }
              ].map((stat, index) => (
                <div key={index} className="stat-card text-center" style={{ transitionDelay: `${700 + index * 100}ms` }}>
                  <p className="text-3xl md:text-4xl font-bold text-ohwow-lime mb-1 flex items-center justify-center">
                    <span className="relative overflow-hidden inline-block">
                      {stat.value}
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-ohwow-lime/50 transform scale-x-0 origin-left transition-transform duration-700" style={{ transitionDelay: `${900 + index * 150}ms`, transform: isVisible ? 'scaleX(1)' : 'scaleX(0)' }}></span>
                    </span>
                  </p>
                  <p className="text-sm uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="scroll-indicator cursor-pointer hover:opacity-100" onClick={scrollToExplore}>
          <span className="text-sm text-ohwow-white/50 mb-2">Scroll to explore</span>
          <div className="w-10 h-16 rounded-full border-2 border-ohwow-white/20 flex justify-center p-2">
            <ChevronDown className="w-6 h-6 text-ohwow-white/50 animate-bounce" />
          </div>
        </div>
      </section>
      
      {/* Contact Form Modal */}
      <ContactFormModal isOpen={isFormOpen} onClose={closeContactForm} source="Hero Section" />
    </>
  );
};

export default Hero;
