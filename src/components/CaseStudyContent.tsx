
import React from 'react';
import { CheckCircle2, Target, LineChart, Users } from 'lucide-react';
import { CaseStudyProps } from './CaseStudyCard';

interface CaseStudyContentProps {
  caseStudy: CaseStudyProps;
  id: string;
}

const CaseStudyContent: React.FC<CaseStudyContentProps> = ({ caseStudy, id }) => {
  // Custom content for FabHomz case study
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
              <Target className="w-6 h-6" />
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
              <Target className="w-6 h-6" />
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
              <Target className="w-6 h-6" />
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

export default CaseStudyContent;
