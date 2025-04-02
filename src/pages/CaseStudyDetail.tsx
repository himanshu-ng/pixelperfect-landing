
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, LineChart, Target, Users, ArrowRight, BarChart2, Mail, MessageSquare } from 'lucide-react';
import { getCaseStudyById, caseStudies } from '../data/caseStudies';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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

  // Custom content for FabHomz case study
  const renderCustomContent = () => {
    if (id === 'fabHomz-development') {
      return (
        <>
          <h2 className="text-2xl font-bold mb-6 gradient-text inline-block">The Challenge</h2>
          <p className="mb-6">
            FabHomz, a premier real estate developer in India, was struggling with digital marketing efforts that weren't delivering results. 
            Their landing pages had poor conversion rates, their ad campaigns were costly with minimal returns, and they weren't attracting 
            qualified leads. With increasing competition in the Indian real estate market, they needed a comprehensive digital transformation 
            to stay competitive and maximize their marketing budget.
          </p>
          
          <h2 className="text-2xl font-bold mb-6 gradient-text inline-block">Our Approach</h2>
          <p className="mb-4">
            Our team conducted a thorough analysis of FabHomz's digital presence and implemented a multi-faceted strategy:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-ohwow-purple/15 border border-ohwow-purple/30 text-ohwow-lime">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold mb-2">Landing Page Revamp</h3>
                <p className="text-ohwow-white-muted">
                  Complete overhaul of landing pages with a focus on local cultural elements, site speed optimization, 
                  and conversion-focused design specifically tailored for the Indian market.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-ohwow-purple/15 border border-ohwow-purple/30 text-ohwow-lime">
                <BarChart2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold mb-2">Strategic Ad Scheduling</h3>
                <p className="text-ohwow-white-muted">
                  Implemented data-driven ad scheduling aligned with Indian browsing patterns, focusing ad spend during 
                  peak engagement times to maximize ROI.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-ohwow-purple/15 border border-ohwow-purple/30 text-ohwow-lime">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold mb-2">WhatsApp Integration</h3>
                <p className="text-ohwow-white-muted">
                  Implemented WhatsApp Business API with automated responses in multiple Indian languages, catering to 
                  the preferred communication channel in the region.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-ohwow-purple/15 border border-ohwow-purple/30 text-ohwow-lime">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold mb-2">Localized Lead Nurturing</h3>
                <p className="text-ohwow-white-muted">
                  Developed culturally relevant email and SMS sequences that respected local festivals and auspicious times 
                  for property decisions.
                </p>
              </div>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold mb-6 gradient-text inline-block">The Results</h2>
          <p className="mb-6">
            Within just 3 months of implementation, FabHomz experienced transformative results:
          </p>
          
          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-ohwow-lime mt-1 flex-shrink-0" />
              <span>
                <strong>280% increase in lead generation</strong> - The localized approach and optimized landing pages 
                dramatically increased visitor-to-lead conversion rates across all campaigns.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-ohwow-lime mt-1 flex-shrink-0" />
              <span>
                <strong>65% reduction in ad costs</strong> - Strategic scheduling and improved targeting significantly 
                lowered cost-per-lead and maximized marketing budget efficiency.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-ohwow-lime mt-1 flex-shrink-0" />
              <span>
                <strong>170% improvement in lead quality</strong> - Better qualification processes and targeted messaging 
                attracted more serious buyers with higher purchase intent.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-ohwow-lime mt-1 flex-shrink-0" />
              <span>
                <strong>210% increase in conversions</strong> - The comprehensive approach resulted in more site visits being 
                converted to actual property purchases.
              </span>
            </li>
          </ul>
          
          <div className="bg-ohwow-purple/10 p-6 rounded-xl border border-ohwow-purple/30 mb-8">
            <h3 className="font-bold mb-2">Client Testimonial</h3>
            <p className="italic text-white/80">
              "Oh.Wow's understanding of the Indian real estate market and digital marketing expertise completely transformed our 
              business. The localized approach they took with our campaigns resonated deeply with our target audience. 
              We're not just getting more leads—we're getting the right leads that convert into sales."
            </p>
            <p className="mt-4 font-medium">
              - Marketing Director, FabHomz Development
            </p>
          </div>
        </>
      );
    }
    
    // Default content for other case studies
    return (
      <>
        <h2 className="text-2xl font-bold mb-6 gradient-text inline-block">The Challenge</h2>
        <p className="mb-6">
          Our client, a leading property developer, was struggling with conventional marketing methods 
          that were yielding diminishing returns. Their sales cycles were long, leads were of inconsistent quality, 
          and their digital presence failed to showcase their premium developments effectively. They needed 
          a comprehensive solution that would streamline their marketing efforts and accelerate sales.
        </p>
        
        <h2 className="text-2xl font-bold mb-6 gradient-text inline-block">Our Approach</h2>
        <p className="mb-4">
          We implemented a multi-faceted digital marketing and automation strategy:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-ohwow-purple/15 border border-ohwow-purple/30 text-ohwow-lime">
              <Target className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold mb-2">Precision-Targeted Digital Campaigns</h3>
              <p className="text-ohwow-white-muted">
                Implemented hyper-targeted ad campaigns based on demographic, behavioral, 
                and geographic data to reach high-intent property buyers.
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-ohwow-purple/15 border border-ohwow-purple/30 text-ohwow-lime">
              <LineChart className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold mb-2">Multi-Step Conversion Funnel</h3>
              <p className="text-ohwow-white-muted">
                Designed a comprehensive lead journey from awareness to purchase, with 
                tailored content at each stage to nurture prospects.
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-4 md:col-span-2">
            <div className="p-3 rounded-lg bg-ohwow-purple/15 border border-ohwow-purple/30 text-ohwow-lime">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold mb-2">Marketing Automation & CRM Integration</h3>
              <p className="text-ohwow-white-muted">
                Implemented automated email sequences, SMS notifications, and AI-powered chatbots 
                integrated with a custom real estate CRM for seamless lead management.
              </p>
            </div>
          </div>
        </div>
        
        <h2 className="text-2xl font-bold mb-6 gradient-text inline-block">The Results</h2>
        <p className="mb-6">
          Within 6 months of implementation, our client experienced dramatic improvements across all key metrics:
        </p>
        
        <ul className="space-y-4 mb-8">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 text-ohwow-lime mt-1 flex-shrink-0" />
            <span>
              <strong>{caseStudy.results[0].value} {caseStudy.results[0].label}</strong> - The comprehensive digital strategy delivered 
              exceptional return on investment compared to traditional marketing methods.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 text-ohwow-lime mt-1 flex-shrink-0" />
            <span>
              <strong>{caseStudy.results[1].value} {caseStudy.results[1].label}</strong> - Precision targeting 
              resulted in higher-intent prospects entering the sales funnel.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 text-ohwow-lime mt-1 flex-shrink-0" />
            <span>
              <strong>{caseStudy.results[2].value} {caseStudy.results[2].label}</strong> - Optimized campaigns 
              and improved targeting reduced acquisition costs significantly.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 text-ohwow-lime mt-1 flex-shrink-0" />
            <span>
              <strong>{caseStudy.results[3].value} {caseStudy.results[3].label}</strong> - Automated nurturing 
              and efficient follow-ups shortened the sales cycle dramatically.
            </span>
          </li>
        </ul>
        
        <div className="bg-ohwow-purple/10 p-6 rounded-xl border border-ohwow-purple/30 mb-8">
          <h3 className="font-bold mb-2">Client Testimonial</h3>
          <p className="italic text-white/80">
            "Oh.Wow's digital marketing and automation strategy transformed our sales process completely. 
            We're now generating higher quality leads at a lower cost, and our conversion rates have soared. 
            The ROI has exceeded our expectations, and we're now expanding our collaboration to all our upcoming projects."
          </p>
          <p className="mt-4 font-medium">
            - Marketing Director, {caseStudy.title.split(':')[0]}
          </p>
        </div>
      </>
    );
  };

  return (
    <div className="min-h-screen bg-ohwow-black text-white">
      <Navbar />
      
      <div className="pt-24 md:pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-8">
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
                <button className="oh-wow-button-primary w-full">
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
                <button className="oh-wow-button-primary w-full">
                  Get Similar Results for Your Project
                </button>
              </div>
            </div>
          </div>
          
          {/* Case Study Content */}
          <div className="glassmorphism p-6 md:p-8 mb-12">
            <div className="prose prose-lg prose-invert max-w-none">
              {renderCustomContent()}
              
              {/* Mid-content CTA */}
              <div className="my-8 p-6 bg-ohwow-purple/15 border border-ohwow-purple/30 rounded-lg text-center">
                <h3 className="text-xl font-bold mb-3">Want to see these strategies in action?</h3>
                <button className="oh-wow-button-primary">
                  Schedule a Demo
                </button>
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="glassmorphism p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 gradient-text">Ready to achieve similar results?</h2>
            <p className="text-ohwow-white-muted max-w-2xl mx-auto mb-8">
              Our team of digital marketing and automation experts are ready to transform your real estate brand's performance.
            </p>
            <button className="oh-wow-button-primary mx-auto text-lg px-8 py-4 animate-pulse">
              Book Your Free Consultation
            </button>
            <p className="mt-4 text-sm text-ohwow-white-muted">
              No obligation. Our team will contact you within 24 hours.
            </p>
          </div>
          
          {/* Navigation between case studies */}
          <div className="flex justify-between items-center mt-12">
            <Link to="/case-studies" className="oh-wow-button-secondary">
              All Case Studies
            </Link>
            <Link to={`/case-studies/${nextCaseStudy.id}`} className="oh-wow-button-primary flex items-center">
              Next Case Study
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CaseStudyDetail;
