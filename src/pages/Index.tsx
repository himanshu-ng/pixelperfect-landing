
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import WhyOhWow from '../components/WhyOhWow';
import Solutions from '../components/Solutions';
import MarketingShowcase from '../components/MarketingShowcase';
import Testimonials from '../components/Testimonials';
import ContactCta from '../components/ContactCta';
import Footer from '../components/Footer';

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
      <MarketingShowcase />
      <Testimonials />
      <ContactCta />
      <Footer />
    </div>
  );
};

export default Index;
