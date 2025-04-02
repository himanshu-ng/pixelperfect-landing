
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { CaseStudyProps } from './CaseStudyCard';
import ContactFormModal from './ContactFormModal';

interface CaseStudyHeroProps {
  caseStudy: CaseStudyProps;
}

const CaseStudyHero: React.FC<CaseStudyHeroProps> = ({ caseStudy }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  
  const openContactForm = () => setIsFormOpen(true);
  const closeContactForm = () => setIsFormOpen(false);

  return (
    <>
      {/* Breadcrumbs */}
      <div className="mb-8">
        <Link to="/case-studies" className="inline-flex items-center text-ohwow-white-muted hover:text-white transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to All Case Studies
        </Link>
      </div>
      
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="md:w-1/2 lg:w-3/5">
          <div className="mb-4">
            <span className="bg-ohwow-purple/90 text-white text-sm px-3 py-1 rounded-full">
              {caseStudy.category}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            {caseStudy.title}
          </h1>
          <p className="text-xl text-ohwow-white-muted mb-6">
            {caseStudy.description}
          </p>
          
          {/* Results Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {caseStudy.results.map((result, index) => (
              <div key={index} className="text-center bg-white/5 p-4 rounded-lg">
                <p className="text-2xl md:text-3xl font-semibold text-ohwow-lime mb-1">{result.value}</p>
                <p className="text-xs text-ohwow-white-muted uppercase tracking-wider">{result.label}</p>
              </div>
            ))}
          </div>
          
          {/* Floating CTA */}
          <div className="mt-8 md:hidden">
            <button 
              className="oh-wow-button-primary w-full"
              onClick={openContactForm}
            >
              Get Similar Results for Your Project
            </button>
          </div>
        </div>
        
        <div className="md:w-1/2 lg:w-2/5">
          <div className="h-72 md:h-full rounded-xl overflow-hidden">
            <img 
              src={caseStudy.image} 
              alt={caseStudy.title} 
              className="w-full h-full object-cover" 
            />
          </div>
          
          {/* Desktop CTA next to image */}
          <div className="hidden md:block mt-6">
            <button 
              className="oh-wow-button-primary w-full"
              onClick={openContactForm}
            >
              Get Similar Results for Your Project
            </button>
          </div>
        </div>
      </div>
      
      {/* Contact Form Modal */}
      <ContactFormModal 
        isOpen={isFormOpen} 
        onClose={closeContactForm}
        source={`Case Study: ${caseStudy.title}`}
      />
    </>
  );
};

export default CaseStudyHero;
