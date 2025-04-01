
import React, { useState } from 'react';
import { 
  LineChart, 
  Rocket,
  Paintbrush,
  UsersRound,
  BrainCircuit,
  ExternalLink,
  ArrowRight
} from 'lucide-react';

interface Solution {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  before: string;
  after: string;
}

const solutions: Solution[] = [
  {
    id: "sales",
    icon: <Rocket className="w-6 h-6" />,
    title: "🚀 Sales Acceleration & CRM",
    description: "Custom solutions to track, nurture and convert leads automatically, optimizing every step of your sales funnel.",
    before: "Manual lead tracking and follow-ups with high drop-off rates",
    after: "Automated 24/7 lead nurturing with 300% improvement in conversion"
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
    id: "ai",
    icon: <BrainCircuit className="w-6 h-6" />,
    title: "🧠 AI, SaaS & Automation for Real Estate Growth",
    description: "Cutting-edge tech solutions that streamline operations and create competitive advantage at scale.",
    before: "Labor-intensive processes with frequent human errors",
    after: "Streamlined operations with 60% reduction in workforce costs"
  }
];

const Solutions: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(solutions[0].id);

  const activeSolution = solutions.find(solution => solution.id === activeTab);

  return (
    <section id="services" className="section-padding bg-ohwow-black relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-ohwow-gold/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text inline-block">
            Solutions & Services
          </h2>
          <p className="text-xl text-ohwow-white-muted max-w-3xl mx-auto">
            Comprehensive strategies and tools for every aspect of real estate growth
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {solutions.map((solution) => (
            <button
              key={solution.id}
              onClick={() => setActiveTab(solution.id)}
              className={`px-4 py-2 rounded-full transition-all duration-300 flex items-center gap-2 ${
                activeTab === solution.id
                  ? 'bg-ohwow-gold text-ohwow-black font-medium'
                  : 'bg-white/5 hover:bg-white/10 text-ohwow-white-muted'
              }`}
            >
              {solution.icon}
              <span className="hidden sm:inline">{solution.title.split(' ').slice(1).join(' ')}</span>
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
                    <h4 className="text-ohwow-gold font-semibold mb-2 flex items-center gap-2">
                      <span className="inline-block px-2 py-1 bg-white/5 rounded text-sm">BEFORE</span>
                    </h4>
                    <p className="text-ohwow-white-muted">
                      {activeSolution.before}
                    </p>
                  </div>
                  <div className="bg-ohwow-gold/10 p-5 rounded-xl border border-ohwow-gold/30">
                    <h4 className="text-ohwow-gold font-semibold mb-2 flex items-center gap-2">
                      <span className="inline-block px-2 py-1 bg-ohwow-gold text-ohwow-black rounded text-sm">AFTER</span>
                    </h4>
                    <p className="text-ohwow-white">
                      {activeSolution.after}
                    </p>
                  </div>
                </div>

                <button className="oh-wow-button-primary flex items-center">
                  Book a Free Strategy Call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
              
              <div className="lg:w-1/2 bg-white/5 rounded-2xl overflow-hidden relative min-h-[300px] flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="mb-6 p-4 rounded-full bg-ohwow-gold/10 inline-block">
                    {activeSolution.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">See Our Success Story</h3>
                  <p className="text-ohwow-white-muted mb-4">View how we implemented this solution for a leading property developer</p>
                  <button className="inline-flex items-center text-ohwow-gold hover:underline">
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
  );
};

export default Solutions;
