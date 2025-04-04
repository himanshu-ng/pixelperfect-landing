
import React, { useEffect, useRef, useState } from 'react';
import { 
  Brain, 
  LineChart, 
  Users, 
  Box,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

const features = [
  {
    icon: <Brain className="w-10 h-10" />,
    number: "1️⃣",
    title: "AI & Automation-Driven Sales Acceleration",
    description: [
      "Custom Real Estate CRM to track leads, bookings & site visits.",
      "AI-powered chatbots & virtual assistants for 24/7 lead nurturing."
    ]
  },
  {
    icon: <LineChart className="w-10 h-10" />,
    number: "2️⃣",
    title: "Conversion-Optimized Digital Marketing & Branding",
    description: [
      "Data-backed high-converting landing pages & lead magnets.",
      "Smart ad campaigns that generate more leads at lower costs."
    ]
  },
  {
    icon: <Users className="w-10 h-10" />,
    number: "3️⃣",
    title: "Broker & Investor Community Development",
    description: [
      "Exclusive broker CRM & loyalty programs to drive engagement.",
      "Investor newsletters & ROI showcases to build trust."
    ]
  },
  {
    icon: <Box className="w-10 h-10" />,
    number: "4️⃣",
    title: "3D Walkthroughs, OOH & Hyperlocal Targeting",
    description: [
      "Immersive 3D property walkthroughs for stronger buyer engagement.",
      "Offline campaigns that grab attention & convert."
    ]
  }
];

const WhyOhWow: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeFeature, setActiveFeature] = useState(-1);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    if (featureRefs.current) {
      featureRefs.current.forEach((ref) => {
        if (ref) observer.observe(ref);
      });
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      if (featureRefs.current) {
        featureRefs.current.forEach((ref) => {
          if (ref) observer.unobserve(ref);
        });
      }
    };
  }, []);

  return (
    <section id="why-us" className="section-padding bg-ohwow-black relative" ref={sectionRef}>
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-ohwow-purple/20 rounded-full blur-[100px] animate-float"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-ohwow-lime/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: '2s' }}></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 opacity-0 translate-y-8 transition-all duration-700 ease-out" ref={el => featureRefs.current[0] = el}>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-0.5 bg-gradient-to-r from-ohwow-purple to-transparent rounded-full"></div>
            <h2 className="text-3xl md:text-5xl font-bold gradient-text inline-block">
              Why Oh.Wow?
            </h2>
            <div className="w-12 h-0.5 bg-gradient-to-l from-ohwow-purple to-transparent rounded-full"></div>
          </div>
          <p className="text-xl text-ohwow-white-muted max-w-3xl mx-auto flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-ohwow-lime mr-2" />
            Beyond Digital. Beyond Branding. We Build Real Estate Success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => (featureRefs.current[index + 1] = el)}
              className={`feature-card p-8 cursor-pointer opacity-0 translate-y-8 transition-all duration-700 ease-out ${activeFeature === index ? 'border-ohwow-purple/50 shadow-lg bg-gradient-to-b from-ohwow-black-lighter/90 to-ohwow-purple/5' : ''}`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setActiveFeature(index)}
              onMouseLeave={() => setActiveFeature(-1)}
            >
              <div className="flex items-start gap-6">
                <div className={`p-4 rounded-2xl transition-all duration-300 ${activeFeature === index ? 'bg-ohwow-purple/20 border border-ohwow-purple/40 text-ohwow-lime scale-110' : 'bg-ohwow-purple/15 border border-ohwow-purple/30 text-ohwow-lime'}`}>
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <div className={`text-ohwow-lime mb-2 font-semibold transition-all duration-300 ${activeFeature === index ? 'text-xl' : 'text-lg'}`}>{feature.number}</div>
                  <h3 className={`text-xl font-bold mb-4 transition-all duration-300 ${activeFeature === index ? 'text-ohwow-lime text-2xl' : ''}`}>{feature.title}</h3>
                  <ul className="space-y-3">
                    {feature.description.map((item, i) => (
                      <li key={i} className={`flex items-start gap-3 group transition-all duration-300 ${activeFeature === index ? 'transform translate-x-2' : ''}`} style={{ transitionDelay: `${i * 50}ms` }}>
                        <CheckCircle2 className={`w-5 h-5 mt-0.5 flex-shrink-0 transition-colors duration-300 ${activeFeature === index ? 'text-ohwow-lime' : 'text-ohwow-purple'}`} />
                        <span className={`transition-colors duration-300 ${activeFeature === index ? 'text-ohwow-white' : 'text-ohwow-white-muted'}`}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div 
            ref={(el) => (featureRefs.current[5] = el)}
            className="gradient-border opacity-0 translate-y-8 transition-all duration-700 ease-out"
          >
            <div className="gradient-border-content px-8 py-5">
              <p className="text-lg font-semibold flex items-center justify-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-ohwow-lime" />
                <span>Full-Scale Growth Strategies Tailored for Real Estate Developers.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyOhWow;
