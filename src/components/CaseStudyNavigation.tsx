
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { CaseStudyProps } from './CaseStudyCard';

interface CaseStudyNavigationProps {
  nextCaseStudy: CaseStudyProps;
}

const CaseStudyNavigation: React.FC<CaseStudyNavigationProps> = ({ nextCaseStudy }) => {
  return (
    <div className="flex justify-between items-center mt-12">
      <Link to="/case-studies" className="oh-wow-button-secondary">
        All Case Studies
      </Link>
      <Link to={`/case-studies/${nextCaseStudy.id}`} className="oh-wow-button-primary flex items-center">
        Next Case Study
        <ArrowRight className="ml-2 h-5 w-5" />
      </Link>
    </div>
  );
};

export default CaseStudyNavigation;
