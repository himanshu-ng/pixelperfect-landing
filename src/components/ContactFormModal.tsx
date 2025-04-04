
import React from 'react';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";
import { X } from 'lucide-react';
import ContactForm from './shared/ContactForm';

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  source?: string;
}

const ContactFormModal: React.FC<ContactFormModalProps> = ({ isOpen, onClose, source = "website" }) => {
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
        
        <ContactForm 
          source={source}
          subject="New Consultation Request from Oh.Wow Website"
          successMessage="Our team will contact you within 24 hours."
          submitButtonText="Submit Request"
          onSuccess={onClose}
        />
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ContactFormModal;
