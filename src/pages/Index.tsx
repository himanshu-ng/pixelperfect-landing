
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import WhyOhWow from '../components/WhyOhWow';
import Solutions from '../components/Solutions';
import Testimonials from '../components/Testimonials';
import ContactCta from '../components/ContactCta';
import Footer from '../components/Footer';

const Index: React.FC = () => {
  useEffect(() => {
    // Add scroll reveal animations or other effects here if needed
  }, []);

  return (
    <div className="min-h-screen bg-ohwow-black text-ohwow-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <WhyOhWow />
      <Solutions />
      <Testimonials />
      <ContactCta />
      <Footer />
    </div>
  );
};

export default Index;
