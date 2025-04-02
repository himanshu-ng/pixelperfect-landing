
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import WhyOhWow from '../components/WhyOhWow';
import Solutions from '../components/Solutions';
import MarketingShowcase from '../components/MarketingShowcase';
import Testimonials from '../components/Testimonials';
import ContactCta from '../components/ContactCta';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Index: React.FC = () => {
  useEffect(() => {
    // Add scroll reveal animations or other effects here if needed
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-ohwow-black text-ohwow-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <WhyOhWow />
      <Solutions />
      <div id="marketing-showcase-section" className="relative">
        <MarketingShowcase />
        <div className="container mx-auto text-center mt-8 mb-16">
          <h3 className="text-2xl font-bold mb-4">See How We Deliver Results</h3>
          <Link 
            to="/case-studies" 
            className="oh-wow-button-primary inline-flex items-center"
          >
            View All Case Studies
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
      <Testimonials />
      <ContactCta />
      <Footer />
    </div>
  );
};

export default Index;
