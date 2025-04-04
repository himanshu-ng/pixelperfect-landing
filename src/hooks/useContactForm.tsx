
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { addContactToBrevo } from '../utils/brevoService';

// Define form data interface
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  cityState: string;
}

// The Brevo API key is defined here once
const BREVO_API_KEY = import.meta.env.VITE_BREVO_API_KEY || '';

export interface UseContactFormProps {
  source?: string;
  subject?: string;
  successMessage?: string;
  onSuccess?: () => void;
}

export const useContactForm = ({
  source = 'website',
  subject = 'New Consultation Request from Oh.Wow Website',
  successMessage = "Our team will contact you within 24 hours.",
  onSuccess
}: UseContactFormProps = {}) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
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

  const validateForm = (): boolean => {
    if (!formData.name || !formData.email || !formData.phone || !formData.company || !formData.cityState) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return false;
    }
    return true;
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      cityState: ''
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // First submit to Web3Forms
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
          cityState: formData.cityState,
          subject: subject,
          message: `New consultation request from ${formData.name} at ${formData.company} (${formData.cityState}).\nSource: ${source}`,
          from_name: 'Oh.Wow Website'
        }),
      });
      
      const data = await response.json();
      
      if (!data.success) {
        throw new Error('Form submission failed');
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
      } catch (brevoError) {
        console.error('Brevo submission error:', brevoError);
        // Continue even if Brevo fails
      }
      
      toast({
        title: "Request submitted successfully!",
        description: successMessage,
      });
      
      resetForm();
      
      if (onSuccess) {
        onSuccess();
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

  return {
    formData,
    isSubmitting,
    handleChange,
    handleSubmit,
    resetForm
  };
};
