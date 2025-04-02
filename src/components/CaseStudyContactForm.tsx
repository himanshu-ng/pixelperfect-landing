
import React, { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const CaseStudyContactForm: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'fc248909-5a96-423e-a558-73c545fddc9e',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          subject: 'Case Study Consultation Request',
          message: `Consultation request from ${formData.name} after viewing a case study.`,
          from_name: 'Oh.Wow Website'
        }),
      });
      
      const data = await response.json();
      
      if (data.success) {
        toast({
          title: "Success!",
          description: "Your consultation request has been submitted. We'll be in touch soon!",
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: ''
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "There was an error submitting your request. Please try again.",
        variant: "destructive",
      });
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="glassmorphism p-8 md:p-12 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 gradient-text">Ready to achieve similar results?</h2>
      <p className="text-ohwow-white-muted max-w-2xl mx-auto mb-8">
        Our team of digital marketing and automation experts are ready to transform your real estate brand's performance.
      </p>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-md focus:outline-none focus:border-ohwow-purple"
            required
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-md focus:outline-none focus:border-ohwow-purple"
            required
          />
        </div>
        <div>
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-md focus:outline-none focus:border-ohwow-purple"
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="company"
            placeholder="Company Name (Optional)"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-md focus:outline-none focus:border-ohwow-purple"
          />
        </div>
        <button
          type="submit"
          className="oh-wow-button-primary mx-auto text-lg px-8 py-4"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin inline" />
              Processing...
            </>
          ) : (
            "Book Your Free Consultation"
          )}
        </button>
      </form>
      <p className="mt-4 text-sm text-ohwow-white-muted">
        No obligation. Our team will contact you within 24 hours.
      </p>
    </div>
  );
};

export default CaseStudyContactForm;
