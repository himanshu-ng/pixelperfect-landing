
import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
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
  index?: number;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ caseStudy, index = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`premium-card overflow-hidden transition-all duration-700 hover:-translate-y-2 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
      style={{ transitionDelay: `${index * 150}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-56 w-full overflow-hidden">
        <img 
          src={caseStudy.image} 
          alt={caseStudy.title} 
          className="w-full h-full object-cover transition-transform duration-700 scale-100 group-hover:scale-110" 
        />
        <div 
          className="absolute inset-0 bg-gradient-to-t from-ohwow-black to-transparent opacity-60"
        ></div>
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-gradient-to-r from-ohwow-purple to-ohwow-purple-light text-white text-xs px-4 py-1.5 rounded-full font-medium shadow-lg backdrop-blur-sm">
            {caseStudy.category}
          </span>
        </div>
        
        {/* Animated overlay on hover */}
        <div 
          className={`absolute inset-0 bg-ohwow-purple/10 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        >
          <ExternalLink className="text-white w-12 h-12 p-3 rounded-full bg-ohwow-purple/70 animate-pulse" />
        </div>
      </div>
      
      <div className="p-6 relative">
        {/* Subtle gradient accent */}
        <div className="absolute top-0 left-0 w-20 h-1 bg-gradient-to-r from-ohwow-purple to-ohwow-purple-light rounded-full transform -translate-y-1/2"></div>
        
        <h3 className="text-xl font-bold mb-3 group-hover:text-ohwow-lime transition-colors duration-300">{caseStudy.title}</h3>
        <p className="text-ohwow-white-muted mb-6">{caseStudy.description}</p>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          {caseStudy.results.map((result, idx) => (
            <div 
              key={idx} 
              className="text-center bg-ohwow-gray-100 backdrop-blur-sm p-3 rounded-xl group-hover:bg-ohwow-gray-200 transition-all duration-300"
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              <p className="text-2xl font-semibold text-ohwow-lime mb-1 group-hover:scale-110 transition-transform duration-300">{result.value}</p>
              <p className="text-xs text-ohwow-white-muted uppercase tracking-wider">{result.label}</p>
            </div>
          ))}
        </div>
        
        <Link 
          to={`/case-studies/${caseStudy.id}`} 
          className="flex items-center text-ohwow-lime font-medium group/link"
        >
          <span className="relative">
            View Case Study
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-ohwow-lime/50 transform scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 origin-left"></span>
          </span>
          <ArrowRight className="ml-2 h-4 w-4 transform group-hover/link:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </div>
  );
};

export default CaseStudyCard;
