
import React from 'react';
import { Loader2 } from 'lucide-react';
import { useContactForm, ContactFormData } from '@/hooks/useContactForm';

interface ContactFormProps {
  source?: string;
  subject?: string;
  successMessage?: string;
  submitButtonText?: string;
  onSuccess?: () => void;
  className?: string;
  loadingText?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ 
  source = 'website',
  subject,
  successMessage,
  submitButtonText = "Submit Request",
  onSuccess,
  className = '',
  loadingText = "Processing..."
}) => {
  const { formData, isSubmitting, handleChange, handleSubmit } = useContactForm({
    source,
    subject,
    successMessage,
    onSuccess
  });

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
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
            {loadingText}
          </>
        ) : (
          submitButtonText
        )}
      </button>
    </form>
  );
};

export default ContactForm;
