
import React from 'react';
import { 
  CheckCircle2, 
  Mail, 
  MessageSquare, 
  Target, 
  LineChart, 
  BarChart3, 
  ChevronRight 
} from 'lucide-react';

const MarketingShowcase: React.FC = () => {
  const marketingCategories = [
    {
      title: "📌 High-Impact Digital Marketing & Branding",
      items: [
        "High-Converting Landing Pages & Funnels",
        "Multi-Step Conversion Funnels",
        "Advanced Digital Ad Strategies",
        "SEO-Optimized Landing Pages & Organic Visibility"
      ]
    },
    {
      title: "📌 Marketing Automation & Email Sequences",
      items: [
        "Automated Email Nurturing & Personalized Follow-Ups",
        "AI-Driven Follow-Ups & CRM Integrations",
        "Omnichannel Lead Engagement Strategies",
        "AI Agents & Conversational Sales Automation"
      ]
    },
    {
      title: "📌 Stronger Hooks & Sales Enhancements",
      items: [
        "High-Converting Lead Magnets",
        "Behavior-Based Email Triggers",
        "Automated Follow-Ups with Brokers & Investors",
        "Storytelling-Driven Ads & Content"
      ]
    }
  ];
  
  const optimizationStrategies = [
    "Retargeting investors who dropped off at different stages",
    "Lead scoring based on interactions",
    "Advanced AI-powered chatbot & CRM integrations"
  ];

  return (
    <section id="digital-marketing" className="section-padding bg-ohwow-black relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-ohwow-lime/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-ohwow-purple/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text inline-block">
            Comprehensive Digital Marketing Strategy
          </h2>
          <p className="text-xl text-ohwow-white-muted max-w-3xl mx-auto">
            Mapping digital marketing, funnels & automation into your real estate growth strategy
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {marketingCategories.map((category, index) => (
            <div key={index} className="glassmorphism p-6 md:p-8">
              <h3 className="text-xl font-bold mb-6 text-ohwow-white">{category.title}</h3>
              <ul className="space-y-4">
                {category.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-ohwow-lime mt-1 flex-shrink-0" />
                    <span className="text-ohwow-white-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="glassmorphism p-6 md:p-8 mb-12">
          <h3 className="text-xl font-bold mb-6 text-ohwow-white">🛠️ FINAL OPTIMIZATION STRATEGY</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {optimizationStrategies.map((strategy, i) => (
              <div key={i} className="bg-white/5 p-5 rounded-lg border border-ohwow-purple/30 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-ohwow-lime mt-1 flex-shrink-0" />
                <span className="text-ohwow-white">{strategy}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-ohwow-purple/20 to-ohwow-purple/5 p-6 rounded-xl border border-ohwow-purple/30 flex flex-col items-center text-center">
            <div className="p-4 bg-ohwow-purple/20 rounded-full mb-4">
              <Target className="w-8 h-8 text-ohwow-lime" />
            </div>
            <h4 className="text-lg font-bold mb-2">Precision Ad Targeting</h4>
            <p className="text-ohwow-white-muted mb-4">Hyper-targeted campaigns for 40% higher conversion rates</p>
            <a href="/case-studies" className="text-ohwow-lime font-medium flex items-center hover:underline">
              View case study <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-ohwow-purple/20 to-ohwow-purple/5 p-6 rounded-xl border border-ohwow-purple/30 flex flex-col items-center text-center">
            <div className="p-4 bg-ohwow-purple/20 rounded-full mb-4">
              <BarChart3 className="w-8 h-8 text-ohwow-lime" />
            </div>
            <h4 className="text-lg font-bold mb-2">Multi-Step Conversion Funnel</h4>
            <p className="text-ohwow-white-muted mb-4">Turning cold prospects into committed buyers</p>
            <a href="/case-studies" className="text-ohwow-lime font-medium flex items-center hover:underline">
              View case study <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-ohwow-purple/20 to-ohwow-purple/5 p-6 rounded-xl border border-ohwow-purple/30 flex flex-col items-center text-center md:col-span-2 lg:col-span-1">
            <div className="p-4 bg-ohwow-purple/20 rounded-full mb-4">
              <Mail className="w-8 h-8 text-ohwow-lime" />
            </div>
            <h4 className="text-lg font-bold mb-2">Email Marketing Automation</h4>
            <p className="text-ohwow-white-muted mb-4">Personalized sequences with 65% open rates</p>
            <a href="/case-studies" className="text-ohwow-lime font-medium flex items-center hover:underline">
              View case study <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <a href="/case-studies" className="oh-wow-button-primary inline-flex items-center">
            Explore All Case Studies
            <ChevronRight className="ml-1 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default MarketingShowcase;
