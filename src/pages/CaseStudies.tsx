
import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { caseStudies } from '../data/caseStudies';
import CaseStudyCard from '../components/CaseStudyCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const categories = [
  "All",
  "Digital Marketing",
  "Marketing Automation",
  "Conversion Funnels",
  "Email Marketing",
  "AI & Automation",
  "Stakeholder Engagement"
];

const CaseStudies: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredCaseStudies = activeCategory === "All" 
    ? caseStudies 
    : caseStudies.filter(study => study.category === activeCategory);

  return (
    <div className="min-h-screen bg-ohwow-black text-white">
      <Navbar />
      
      <div className="pt-24 md:pt-32 pb-16 px-4 md:px-8 lg:px-12">
        <div className="container mx-auto">
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center text-ohwow-white-muted hover:text-white transition-colors mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Success Stories</h1>
            <p className="text-xl text-ohwow-white-muted max-w-3xl">
              Real results from our digital marketing, automation, and AI solutions for real estate developers
            </p>
          </div>
          
          {/* Filter tabs - scrollable on mobile */}
          <div className="overflow-x-auto pb-4 mb-8">
            <div className="flex gap-4 min-w-max">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                    activeCategory === category 
                      ? 'bg-ohwow-purple text-white' 
                      : 'bg-white/5 hover:bg-white/10 text-ohwow-white-muted'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.map(caseStudy => (
              <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
            ))}
          </div>
          
          {filteredCaseStudies.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-2xl font-semibold mb-2">No case studies found</h3>
              <p className="text-ohwow-white-muted">Try selecting a different category</p>
            </div>
          )}
          
          {/* Call to Action */}
          <div className="mt-16 glassmorphism p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to achieve similar results?</h2>
            <p className="text-ohwow-white-muted max-w-2xl mx-auto mb-8">
              Our team of digital marketing and automation experts are ready to transform your real estate brand's performance.
            </p>
            <button className="oh-wow-button-primary mx-auto">
              Book Your Free Consultation
            </button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CaseStudies;
