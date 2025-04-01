
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface CaseStudyProps {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  results: {
    label: string;
    value: string;
  }[];
}

interface CaseStudyCardProps {
  caseStudy: CaseStudyProps;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ caseStudy }) => {
  return (
    <div className="glassmorphism overflow-hidden transition-all duration-300 hover:transform hover:scale-[1.01] group">
      <div className="relative h-48 w-full overflow-hidden">
        <img 
          src={caseStudy.image} 
          alt={caseStudy.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
        />
        <div className="absolute top-4 left-4">
          <span className="bg-ohwow-purple/90 text-white text-xs px-3 py-1 rounded-full">
            {caseStudy.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{caseStudy.title}</h3>
        <p className="text-ohwow-white-muted mb-6">{caseStudy.description}</p>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          {caseStudy.results.map((result, index) => (
            <div key={index} className="text-center bg-white/5 p-3 rounded-lg">
              <p className="text-2xl font-semibold text-ohwow-lime mb-1">{result.value}</p>
              <p className="text-xs text-ohwow-white-muted uppercase tracking-wider">{result.label}</p>
            </div>
          ))}
        </div>
        
        <Link to={`/case-studies/${caseStudy.id}`} className="flex items-center text-ohwow-lime font-medium hover:underline">
          View Case Study
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

export default CaseStudyCard;
