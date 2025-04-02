
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getCaseStudyById, caseStudies } from '../data/caseStudies';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CaseStudyHero from '../components/CaseStudyHero';
import CaseStudyContent from '../components/CaseStudyContent';
import CaseStudyContactForm from '../components/CaseStudyContactForm';
import CaseStudyNavigation from '../components/CaseStudyNavigation';
import CaseStudyMidCta from '../components/CaseStudyMidCta';

const CaseStudyDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const caseStudy = id ? getCaseStudyById(id) : undefined;

  useEffect(() => {
    if (!caseStudy) {
      navigate('/case-studies', { replace: true });
    }
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [caseStudy, navigate]);

  if (!caseStudy) {
    return null;
  }

  // Find next case study for navigation
  const currentIndex = caseStudies.findIndex(study => study.id === id);
  const nextCaseStudy = caseStudies[(currentIndex + 1) % caseStudies.length];

  return (
    <div className="min-h-screen bg-ohwow-black text-white">
      <Navbar />
      
      <div className="pt-24 md:pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-8">
          {/* Hero Section */}
          <CaseStudyHero caseStudy={caseStudy} />
          
          {/* Case Study Content */}
          <div className="glassmorphism p-6 md:p-8 mb-12">
            <div className="prose prose-lg prose-invert max-w-none">
              <CaseStudyContent caseStudy={caseStudy} id={id || ''} />
              
              {/* Mid-content CTA */}
              <CaseStudyMidCta />
            </div>
          </div>
          
          {/* Call to Action */}
          <CaseStudyContactForm />
          
          {/* Navigation between case studies */}
          <CaseStudyNavigation nextCaseStudy={nextCaseStudy} />
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CaseStudyDetail;
