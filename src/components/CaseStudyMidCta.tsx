
import React, { useState, useEffect, useRef } from 'react';
import { Loader2, ArrowRight, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import ContactFormModal from './ContactFormModal';
import { addContactToBrevo } from '../utils/brevoService';

// Use the same API key constant for consistency
const BREVO_API_KEY = import.meta.env.VITE_BREVO_API_KEY || '';

const CaseStudyMidCta: React.FC = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef<HTMLDivElement>(null);
  
  const openContactForm = () => setIsFormOpen(true);
  const closeContactForm = () => setIsFormOpen(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    
    if (componentRef.current) {
      observer.observe(componentRef.current);
    }
    
    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  const handleDemoRequest = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Submit to Web3Forms first
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'fc248909-5a96-423e-a558-73c545fddc9e',
          email: email,
          subject: 'Demo Request from Case Study Page',
          message: `A visitor has requested a demo. Email: ${email}`,
          from_name: 'Oh.Wow Website'
        }),
      });
      
      const data = await response.json();
      
      if (!data.success) {
        throw new Error('Form submission failed');
      }
      
      // Always try to add to Brevo regardless of environment variable
      try {
        // We have limited data, but we'll add what we can
        await addContactToBrevo({
          name: email.split('@')[0], // Use email username as temporary name
          email: email,
          phone: '',  // We don't have this yet
          company: '', // We don't have this yet
          cityState: '', // We don't have this yet
          source: 'Case Study Mid-CTA'
        }, BREVO_API_KEY);
      } catch (brevoError) {
        console.error('Brevo submission error:', brevoError);
        // Continue even if Brevo fails
      }
      
      toast({
        title: "Demo requested!",
        description: "We'll contact you shortly to schedule your demo.",
      });
      setEmail('');
      // Open the full contact form for more information
      openContactForm();
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "There was an error submitting your request. Please try again.",
        variant: "destructive",
      });
      console.error("Demo request error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div 
        ref={componentRef}
        className={`my-12 p-8 rounded-2xl transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} relative z-20`}
        style={{
          background: 'linear-gradient(120deg, rgba(94, 23, 235, 0.15), rgba(94, 23, 235, 0.05))',
          boxShadow: '0 10px 30px -5px rgba(94, 23, 235, 0.2), 0 0 0 1px rgba(94, 23, 235, 0.1) inset',
          borderRadius: '24px',
        }}
      >
        <div className="relative overflow-hidden">
          {/* Animated particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {Array.from({ length: 15 }).map((_, index) => (
              <div
                key={index}
                className="absolute bg-ohwow-purple-light/30 rounded-full"
                style={{
                  width: `${Math.random() * 5 + 2}px`,
                  height: `${Math.random() * 5 + 2}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  opacity: Math.random() * 0.5 + 0.3,
                  transform: `scale(${Math.random() * 1 + 0.5})`,
                  animation: `float ${Math.random() * 8 + 5}s infinite ease-in-out`,
                  animationDelay: `${Math.random() * 5}s`
                }}
              />
            ))}
          </div>

          <div className="text-center relative z-30">
            <div className="flex items-center justify-center mb-4">
              <Sparkles className="text-ohwow-lime mr-2 h-5 w-5 animate-pulse" />
              <h3 className="text-2xl font-bold gradient-text">Want to see these strategies in action?</h3>
            </div>
            <p className="text-lg text-ohwow-white-muted mb-6 max-w-2xl mx-auto">
              Schedule a personalized demo to discover how we can tailor our solutions to your specific real estate needs.
            </p>
            <form onSubmit={handleDemoRequest} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto relative z-40">
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 bg-ohwow-black/30 border border-ohwow-purple/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-ohwow-purple transition-all duration-300"
                required
              />
              <button 
                type="submit" 
                className="oh-wow-button-primary whitespace-nowrap group flex items-center justify-center"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin inline" />
                    Processing...
                  </>
                ) : (
                  <>
                    Schedule a Demo
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Contact Form Modal */}
      <ContactFormModal 
        isOpen={isFormOpen} 
        onClose={closeContactForm}
        source="Case Study Mid-Content CTA"
      />
    </>
  );
};

export default CaseStudyMidCta;
