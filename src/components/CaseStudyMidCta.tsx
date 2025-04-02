
import React, { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const CaseStudyMidCta: React.FC = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');

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
      
      if (data.success) {
        toast({
          title: "Demo requested!",
          description: "We'll contact you shortly to schedule your demo.",
        });
        setEmail('');
      } else {
        throw new Error('Form submission failed');
      }
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
    <div className="my-8 p-6 bg-ohwow-purple/15 border border-ohwow-purple/30 rounded-lg text-center">
      <h3 className="text-xl font-bold mb-3">Want to see these strategies in action?</h3>
      <form onSubmit={handleDemoRequest} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 px-4 py-2 bg-white/5 border border-white/20 rounded-md focus:outline-none focus:border-ohwow-purple"
          required
        />
        <button 
          type="submit" 
          className="oh-wow-button-primary whitespace-nowrap"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin inline" />
              Processing...
            </>
          ) : (
            "Schedule a Demo"
          )}
        </button>
      </form>
    </div>
  );
};

export default CaseStudyMidCta;
