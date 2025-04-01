
import React from 'react';
import { 
  Phone, 
  Mail, 
  Instagram, 
  Linkedin, 
  Facebook, 
  Twitter 
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-ohwow-white border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold text-ohwow-purple mb-4">Oh.Wow</div>
            <p className="text-ohwow-white-muted mb-6">
              Cutting-edge digital, branding & AI solutions tailored for real estate success.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-ohwow-white-muted hover:text-ohwow-lime transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-ohwow-white-muted hover:text-ohwow-lime transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-ohwow-white-muted hover:text-ohwow-lime transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-ohwow-white-muted hover:text-ohwow-lime transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-ohwow-white-muted hover:text-ohwow-lime transition-colors">Sales Acceleration & CRM</a></li>
              <li><a href="#services" className="text-ohwow-white-muted hover:text-ohwow-lime transition-colors">Performance Marketing</a></li>
              <li><a href="#services" className="text-ohwow-white-muted hover:text-ohwow-lime transition-colors">Branding & Positioning</a></li>
              <li><a href="#services" className="text-ohwow-white-muted hover:text-ohwow-lime transition-colors">Broker Engagement</a></li>
              <li><a href="#services" className="text-ohwow-white-muted hover:text-ohwow-lime transition-colors">AI & Automation</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#why-us" className="text-ohwow-white-muted hover:text-ohwow-lime transition-colors">Why Us</a></li>
              <li><a href="#success-stories" className="text-ohwow-white-muted hover:text-ohwow-lime transition-colors">Success Stories</a></li>
              <li><a href="#" className="text-ohwow-white-muted hover:text-ohwow-lime transition-colors">About Us</a></li>
              <li><a href="#" className="text-ohwow-white-muted hover:text-ohwow-lime transition-colors">Blog</a></li>
              <li><a href="#contact" className="text-ohwow-white-muted hover:text-ohwow-lime transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-ohwow-purple" />
                <a href="tel:+123456789" className="text-ohwow-white-muted hover:text-ohwow-lime transition-colors">+1 (234) 567-890</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-ohwow-purple" />
                <a href="mailto:info@ohwow.com" className="text-ohwow-white-muted hover:text-ohwow-lime transition-colors">info@ohwow.com</a>
              </li>
            </ul>
            <div className="mt-6">
              <button className="oh-wow-button-secondary text-sm">
                WhatsApp Us
              </button>
            </div>
          </div>
        </div>

        <div className="py-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-ohwow-white-muted mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Oh.Wow. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-ohwow-white-muted hover:text-ohwow-lime transition-colors">Privacy Policy</a>
            <a href="#" className="text-ohwow-white-muted hover:text-ohwow-lime transition-colors">Terms of Service</a>
            <a href="#" className="text-ohwow-white-muted hover:text-ohwow-lime transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
