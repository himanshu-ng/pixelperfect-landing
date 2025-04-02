import React, { useState } from 'react';
import { 
  LineChart, 
  Rocket,
  Paintbrush,
  UsersRound,
  BrainCircuit,
  BarChart3,
  Mail,
  MessageSquare,
  ExternalLink,
  ArrowRight
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ContactFormModal from './ContactFormModal';

interface Solution {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  before: string;
  after: string;
  caseStudyId?: string;
}

const solutions: Solution[] = [
  {
    id: "sales",
    icon: <Rocket className="w-6 h-6" />,
    title: "🚀 Sales Acceleration & CRM",
    description: "Custom solutions to track, nurture and convert leads automatically, optimizing every step of your sales funnel.",
    before: "Manual lead tracking and follow-ups with high drop-off rates",
    after: "Automated 24/7 lead nurturing with 300% improvement in conversion",
    caseStudyId: "oceanview-towers"
  },
  {
    id: "marketing",
    icon: <LineChart className="w-6 h-6" />,
    title: "📈 Performance Marketing & Lead Generation",
    description: "Data-driven campaigns that deliver measurable results and a consistent flow of qualified prospects.",
    before: "Inconsistent lead quality with high acquisition costs",
    after: "Targeted campaigns with 40% reduction in cost per acquisition"
  },
  {
    id: "funnels",
    icon: <BarChart3 className="w-6 h-6" />,
    title: "🔄 High-Converting Funnels & Automation",
    description: "Multi-step conversion funnels that transform cold leads into warm prospects and paying customers.",
    before: "Disjointed customer journey with leaky conversion points",
    after: "Seamless funnel with 250% increase in lead-to-sale conversion rate"
  },
  {
    id: "email",
    icon: <Mail className="w-6 h-6" />,
    title: "📧 Email Sequences & Retargeting",
    description: "Behavior-based email triggers and automated follow-ups for personalized investor communication.",
    before: "Generic mass emails with low open and click rates",
    after: "Personalized sequences achieving 65% open rates and 4x ROI"
  },
  {
    id: "branding",
    icon: <Paintbrush className="w-6 h-6" />,
    title: "🎨 Branding & Positioning for Maximum Recall",
    description: "Strategic brand identity that creates trust, recognition and differentiates you in a competitive market.",
    before: "Generic positioning blending in with competitors",
    after: "Distinctive identity with 85% higher brand recognition"
  },
  {
    id: "engagement",
    icon: <UsersRound className="w-6 h-6" />,
    title: "🤝 Broker & Investor Engagement Strategies",
    description: "Build and nurture powerful relationships with key stakeholders through targeted engagement programs.",
    before: "Inconsistent broker relationships and low referral rates",
    after: "Loyal broker network delivering 70% of qualified leads"
  },
  {
    id: "chatbots",
    icon: <MessageSquare className="w-6 h-6" />,
    title: "💬 AI Chatbots & Conversational Sales",
    description: "24/7 intelligent chat solutions that qualify leads, answer queries, and book appointments automatically.",
    before: "Lost leads due to delayed responses and unavailability",
    after: "Instant engagement capturing 90% more leads outside business hours"
  },
  {
    id: "ai",
    icon: <BrainCircuit className="w-6 h-6" />,
    title: "🧠 AI, SaaS & Automation for Real Estate Growth",
    description: "Cutting-edge tech solutions that streamline operations and create competitive advantage at scale.",
    before: "Labor-intensive processes with frequent human errors",
    after: "Streamlined operations with 60% reduction in workforce costs"
  }
];

const Solutions: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<string>(solutions[0].id);
  const [isFormOpen, setIsFormOpen] = useState(false);
  
  const openContactForm = () => setIsFormOpen(true);
  const closeContactForm = () => setIsFormOpen(false);

  const activeSolution = solutions.find(solution => solution.id === activeTab);
  
  const handleCaseStudyClick = () => {
    if (activeSolution?.caseStudyId) {
      navigate(`/case-studies/${activeSolution.caseStudyId}`);
    } else {
      navigate('/case-studies');
    }
  };

  return (
    <>
      <section id="services" className="section-padding bg-ohwow-black relative">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-ohwow-purple/15 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text inline-block">
              Solutions & Services
            </h2>
            <p className="text-xl text-ohwow-white-muted max-w-3xl mx-auto">
              Comprehensive digital marketing, automation & conversion strategies for real estate growth
            </p>
          </div>

          {/* Tab Navigation - scrollable on mobile */}
          <div className="flex overflow-x-auto pb-3 mb-10 gap-3 justify-start md:justify-center">
            {solutions.map((solution) => (
              <button
                key={solution.id}
                onClick={() => setActiveTab(solution.id)}
                className={`px-4 py-2 rounded-full transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${
                  activeTab === solution.id
                    ? 'bg-ohwow-purple text-white font-medium'
                    : 'bg-white/5 hover:bg-white/10 text-ohwow-white-muted'
                }`}
              >
                {solution.icon}
                <span className="inline">{solution.title.split(' ')[0]}</span>
              </button>
            ))}
          </div>

          {/* Active Tab Content */}
          {activeSolution && (
            <div className="glassmorphism p-8 md:p-10 animate-fade-in">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/2">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    {activeSolution.title}
                  </h3>
                  <p className="text-ohwow-white-muted mb-6">
                    {activeSolution.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-white/5 p-5 rounded-xl border border-white/10">
                      <h4 className="text-ohwow-purple font-semibold mb-2 flex items-center gap-2">
                        <span className="inline-block px-2 py-1 bg-white/5 rounded text-sm">BEFORE</span>
                      </h4>
                      <p className="text-ohwow-white-muted">
                        {activeSolution.before}
                      </p>
                    </div>
                    <div className="bg-ohwow-lime/5 p-5 rounded-xl border border-ohwow-lime/20">
                      <h4 className="text-ohwow-lime font-semibold mb-2 flex items-center gap-2">
                        <span className="inline-block px-2 py-1 bg-ohwow-lime/20 text-ohwow-lime rounded text-sm">AFTER</span>
                      </h4>
                      <p className="text-ohwow-white">
                        {activeSolution.after}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <button 
                      className="oh-wow-button-primary flex items-center"
                      onClick={openContactForm}
                    >
                      Book a Free Strategy Call
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                    <button 
                      className="oh-wow-button-secondary flex items-center"
                      onClick={handleCaseStudyClick}
                    >
                      View Related Case Study
                    </button>
                  </div>
                </div>
                
                <div className="lg:w-1/2 bg-white/5 rounded-2xl overflow-hidden relative min-h-[300px] flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="mb-6 p-4 rounded-full bg-ohwow-purple/10 inline-block">
                      {activeSolution.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">See Our Success Story</h3>
                    <p className="text-ohwow-white-muted mb-4">View how we implemented this solution for a leading property developer</p>
                    <button 
                      className="inline-flex items-center text-ohwow-lime hover:underline"
                      onClick={handleCaseStudyClick}
                    >
                      View Case Study 
                      <ExternalLink className="ml-1 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    
      {/* Contact Form Modal */}
      <ContactFormModal 
        isOpen={isFormOpen} 
        onClose={closeContactForm} 
        source={`Solution: ${activeSolution?.title}`}
      />
    </>
  );
};

export default Solutions;
