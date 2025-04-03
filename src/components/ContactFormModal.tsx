import React, { useState } from 'react';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";
import { Loader2, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { addContactToBrevo } from '../utils/brevoService';

// Hardcoded Brevo API key with fallback to environment variable
const BREVO_API_KEY = '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' || import.meta.env.VITE_BREVO_API_KEY || '';

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  source?: string;
}

const ContactFormModal: React.FC<ContactFormModalProps> = ({ isOpen, onClose, source = "website" }) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    cityState: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all required fields
    if (!formData.name || !formData.email || !formData.phone || !formData.company || !formData.cityState) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // First submit to Web3Forms (existing functionality)
      const web3FormResponse = await fetch('https://api.web3forms.com/submit', {
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
          cityState: formData.cityState,
          subject: 'New Consultation Request from Oh.Wow Website',
          message: `New consultation request from ${formData.name} at ${formData.company} (${formData.cityState}).\nSource: ${source}`,
          from_name: 'Oh.Wow Website'
        }),
      });
      
      const web3FormData = await web3FormResponse.json();
      
      if (!web3FormData.success) {
        throw new Error('Web3Forms submission failed');
      }

      // Always try to submit to Brevo regardless of environment variable
      try {
        await addContactToBrevo({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          cityState: formData.cityState,
          source: source
        }, BREVO_API_KEY);
        
        // If Brevo fails, we still consider the form submission successful
        // as long as Web3Forms succeeded
      } catch (brevoError) {
        console.error('Brevo submission error:', brevoError);
      }

      // Show success message
      toast({
        title: "Request submitted successfully!",
        description: "Our team will contact you within 24 hours.",
      });
      
      // Reset form and close modal
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        cityState: ''
      });
      onClose();
      
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
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent className="bg-ohwow-black border border-ohwow-purple/30 text-white max-w-md md:max-w-lg">
        <div className="flex justify-between items-center">
          <AlertDialogHeader className="text-left">
            <AlertDialogTitle className="text-2xl font-bold gradient-text">
              Book Your Free Consultation
            </AlertDialogTitle>
            <AlertDialogDescription className="text-ohwow-white-muted">
              Our team will contact you within 24 hours to discuss your real estate marketing needs.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogCancel className="border-0 bg-transparent text-white hover:bg-white/10 h-8 w-8 p-0 absolute right-4 top-4">
            <X className="h-4 w-4" />
          </AlertDialogCancel>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
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
              placeholder="Company Name"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-md focus:outline-none focus:border-ohwow-purple"
              required
            />
          </div>
          <div>
            <input
              type="text"
              name="cityState"
              placeholder="City/State"
              value={formData.cityState}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-md focus:outline-none focus:border-ohwow-purple"
              required
            />
          </div>
          <button
            type="submit"
            className="oh-wow-button-primary w-full flex items-center justify-center"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Processing...
              </>
            ) : (
              "Submit Request"
            )}
          </button>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ContactFormModal;
