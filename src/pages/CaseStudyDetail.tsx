
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getCaseStudyById, caseStudies } from '../data/caseStudies';

// Components
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
    // Redirect if case study not found
    if (!caseStudy) {
      navigate('/case-studies', { replace: true });
      return;
    }
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [caseStudy, navigate]);

  // Return null during redirect
  if (!caseStudy) {
    return null;
  }

  // Find next case study for navigation
  const currentIndex = caseStudies.findIndex(study => study.id === id);
  const nextCaseStudy = caseStudies[(currentIndex + 1) % caseStudies.length];

  return (
    <div className="min-h-screen bg-ohwow-black text-white">
      <Navbar />
      
      <main className="pt-24 md:pt-32 pb-16 relative">
        <div className="container mx-auto px-4 md:px-8">
          {/* Hero Section - Make sure it's on top of other sections */}
          <div className="relative z-20">
            <CaseStudyHero caseStudy={caseStudy} />
          </div>
          
          {/* Case Study Content - Lower z-index than the hero */}
          <section className="glassmorphism p-6 md:p-8 mb-12 relative z-0 mt-10">
            <div className="prose prose-lg prose-invert max-w-none">
              <CaseStudyContent caseStudy={caseStudy} id={id || ''} />
              
              {/* Mid-content CTA - Give it a higher z-index */}
              <div className="relative z-20">
                <CaseStudyMidCta />
              </div>
            </div>
          </section>
          
          {/* Call to Action - Also with a higher z-index */}
          <section className="relative z-20">
            <CaseStudyContactForm />
          </section>
          
          {/* Navigation between case studies */}
          <CaseStudyNavigation nextCaseStudy={nextCaseStudy} />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CaseStudyDetail;
