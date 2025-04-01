
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  position: string;
  company: string;
  stats: {
    leads: string;
    cost: string;
    engagement: string;
  };
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Oh.Wow didn't just give us leads—they gave us a sales machine that works 24/7! Our conversion rates increased dramatically while our acquisition costs went down.",
    author: "Michael Chen",
    position: "Marketing Director",
    company: "Prestige Developers",
    stats: {
      leads: "+180%",
      cost: "-35%",
      engagement: "+210%"
    }
  },
  {
    id: 2,
    quote: "The AI-driven sales automation system Oh.Wow implemented transformed how we manage leads. The ROI has been incredible, and we're seeing consistent growth month over month.",
    author: "Sarah Johnson",
    position: "Sales Head",
    company: "Horizon Properties",
    stats: {
      leads: "+220%",
      cost: "-42%",
      engagement: "+175%"
    }
  },
  {
    id: 3,
    quote: "Our broker network is more engaged than ever thanks to Oh.Wow's community building strategies. This has directly impacted our bottom line with faster sell-through rates.",
    author: "Raj Mehta",
    position: "CEO",
    company: "Skyline Estates",
    stats: {
      leads: "+150%",
      cost: "-28%",
      engagement: "+320%"
    }
  }
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [transition, setTransition] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setTransition(true);
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setTransition(true);
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  // Auto-rotate slides
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 8000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [activeIndex]);

  // Reset transition after animation completes
  useEffect(() => {
    if (transition) {
      const timer = setTimeout(() => {
        setTransition(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [transition]);

  return (
    <section id="success-stories" className="section-padding bg-ohwow-black relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text inline-block">
            Success Stories & Testimonials
          </h2>
          <p className="text-xl text-ohwow-white-muted max-w-3xl mx-auto">
            Real estate brands that skyrocketed conversions with Oh.Wow
          </p>
        </div>

        <div className="relative glassmorphism p-6 md:p-10 overflow-hidden">
          {/* Testimonial */}
          <div 
            className={`flex flex-col md:flex-row gap-8 ${transition ? 'opacity-0 scale-95' : 'opacity-100 scale-100'} transition-all duration-500`}
          >
            <div className="md:w-2/3">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-ohwow-gold fill-ohwow-gold" />
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl font-medium italic mb-6 text-ohwow-white">
                "{testimonials[activeIndex].quote}"
              </blockquote>
              <div className="mb-8">
                <p className="font-semibold text-ohwow-white">{testimonials[activeIndex].author}</p>
                <p className="text-ohwow-white-muted">
                  {testimonials[activeIndex].position}, {testimonials[activeIndex].company}
                </p>
              </div>
            </div>

            <div className="md:w-1/3 bg-white/5 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4 text-center">Results Achieved</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-ohwow-white-muted">Lead Conversion</span>
                  <span className="text-ohwow-gold font-bold">{testimonials[activeIndex].stats.leads}</span>
                </div>
                <div className="w-full bg-white/10 h-2 rounded-full">
                  <div className="bg-gradient-to-r from-ohwow-gold to-ohwow-gold-light h-full rounded-full" style={{width: '80%'}}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-ohwow-white-muted">Cost Reduction</span>
                  <span className="text-ohwow-gold font-bold">{testimonials[activeIndex].stats.cost}</span>
                </div>
                <div className="w-full bg-white/10 h-2 rounded-full">
                  <div className="bg-gradient-to-r from-ohwow-gold to-ohwow-gold-light h-full rounded-full" style={{width: '65%'}}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-ohwow-white-muted">Community Engagement</span>
                  <span className="text-ohwow-gold font-bold">{testimonials[activeIndex].stats.engagement}</span>
                </div>
                <div className="w-full bg-white/10 h-2 rounded-full">
                  <div className="bg-gradient-to-r from-ohwow-gold to-ohwow-gold-light h-full rounded-full" style={{width: '90%'}}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between mt-10">
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeIndex === index ? 'bg-ohwow-gold scale-125' : 'bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
            
            <div className="flex gap-2">
              <button 
                onClick={prevSlide} 
                className="p-2 rounded-full border border-white/10 hover:border-ohwow-gold/50 hover:bg-white/5 transition-all duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={nextSlide} 
                className="p-2 rounded-full border border-white/10 hover:border-ohwow-gold/50 hover:bg-white/5 transition-all duration-300"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
