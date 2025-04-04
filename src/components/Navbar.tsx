
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import ContactFormModal from './ContactFormModal';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const location = useLocation();
  
  const openContactForm = () => setIsFormOpen(true);
  const closeContactForm = () => setIsFormOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { label: 'Services', path: '/#services' },
    { label: 'Why Us', path: '/#why-us' },
    { label: 'Success Stories', path: '/case-studies' },
    { label: 'Contact', path: '/#contact' }
  ];

  const isHomePage = location.pathname === '/';

  const scrollToSection = (id: string) => {
    if (isHomePage) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to home page with hash
      window.location.href = `/${id}`;
    }
  };

  return (
    <>
      <nav 
        className={`fixed w-full top-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'py-3 bg-ohwow-black/80 backdrop-blur-md shadow-lg border-b border-ohwow-gray-200' 
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center group"
          >
            <img 
              src="/lovable-uploads/7beed18f-46a7-41e4-ad7a-29eeec799c4e.png" 
              alt="Oh.Wow Logo" 
              className="h-10 md:h-12 transition-transform duration-300 group-hover:scale-105" 
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((item, index) => {
              const isHashLink = item.path.includes('#');
              const id = isHashLink ? item.path.split('#')[1] : '';
              
              return isHashLink ? (
                <button
                  key={index}
                  onClick={() => scrollToSection(id)}
                  className="text-ohwow-white hover:text-ohwow-lime transition-colors relative group py-2"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-ohwow-lime transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </button>
              ) : (
                <Link
                  key={index}
                  to={item.path}
                  className="text-ohwow-white hover:text-ohwow-lime transition-colors relative group py-2"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-ohwow-lime transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button 
              className="oh-wow-button-primary group"
              onClick={openContactForm}
            >
              Get Free Consultation
              <ChevronRight className="inline-block ml-1 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-ohwow-white p-2 bg-ohwow-gray-100 rounded-lg hover:bg-ohwow-gray-200 transition-colors"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden fixed inset-0 top-[72px] bg-ohwow-black/95 backdrop-blur-xl z-40 transition-all duration-500 ${
            mobileMenuOpen 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 -translate-x-full pointer-events-none'
          }`}
        >
          <div className="container mx-auto px-4 py-8 flex flex-col space-y-6">
            {navLinks.map((item, index) => {
              const isHashLink = item.path.includes('#');
              const id = isHashLink ? item.path.split('#')[1] : '';
              
              return isHashLink ? (
                <button
                  key={index}
                  onClick={() => scrollToSection(id)}
                  className="text-2xl font-montserrat text-ohwow-white hover:text-ohwow-lime py-3 border-b border-ohwow-gray-200 flex justify-between items-center group"
                >
                  {item.label}
                  <ChevronRight className="h-6 w-6 text-ohwow-lime transform group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              ) : (
                <Link
                  key={index}
                  to={item.path}
                  className="text-2xl font-montserrat text-ohwow-white hover:text-ohwow-lime py-3 border-b border-ohwow-gray-200 flex justify-between items-center group"
                >
                  {item.label}
                  <ChevronRight className="h-6 w-6 text-ohwow-lime transform group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              );
            })}
            
            <div className="mt-8 pt-4">
              <button 
                className="oh-wow-button-primary w-full text-lg py-4 group"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openContactForm();
                }}
              >
                Get Free Consultation
                <ChevronRight className="inline-block ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Contact Form Modal */}
      <ContactFormModal isOpen={isFormOpen} onClose={closeContactForm} source="Navbar" />
    </>
  );
};

export default Navbar;
