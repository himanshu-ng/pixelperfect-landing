
import React, { useEffect, useRef } from 'react';
import { 
  Brain, 
  LineChart, 
  Users, 
  Box,
  CheckCircle2
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

    if (featureRefs.current) {
      featureRefs.current.forEach((ref) => {
        if (ref) observer.observe(ref);
      });
    }

    return () => {
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
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-ohwow-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-ohwow-gold/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text inline-block">
            Why Oh.Wow?
          </h2>
          <p className="text-xl text-ohwow-white-muted max-w-3xl mx-auto">
            👉 Beyond Digital. Beyond Branding. We Build Real Estate Success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => (featureRefs.current[index] = el)}
              className="glassmorphism p-6 md:p-8 opacity-0 translate-y-8 transition-all duration-700 ease-out"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-ohwow-gold/10 border border-ohwow-gold/30 text-ohwow-gold">
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <div className="text-ohwow-gold mb-1">{feature.number}</div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <ul className="space-y-2">
                    {feature.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-ohwow-gold mt-0.5 flex-shrink-0" />
                        <span className="text-ohwow-white-muted">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="glassmorphism inline-block px-6 py-4">
            <p className="text-lg font-semibold flex items-center justify-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-ohwow-gold" />
              <span>Full-Scale Growth Strategies Tailored for Real Estate Developers.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyOhWow;
