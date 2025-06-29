
import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const handleCall = () => {
    window.location.href = 'tel:+15551234567';
  };

  const handleEmail = () => {
    window.location.href = 'mailto:info@doraldental.com';
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-teal-400">Doral Dental</h3>
            <p className="text-gray-300 leading-relaxed">
              Providing exceptional dental care with a personal touch. 
              Your smile is our passion, your health is our priority.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center hover:bg-teal-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center hover:bg-teal-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center hover:bg-teal-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <NavLink to="/" className="block text-gray-300 hover:text-teal-400 transition-colors">
                Home
              </NavLink>
              <NavLink to="/services" className="block text-gray-300 hover:text-teal-400 transition-colors">
                Services
              </NavLink>
              <NavLink to="/about" className="block text-gray-300 hover:text-teal-400 transition-colors">
                About Us
              </NavLink>
              <NavLink to="/contact" className="block text-gray-300 hover:text-teal-400 transition-colors">
                Contact
              </NavLink>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <div className="space-y-2 text-gray-300">
              <NavLink to="/services" className="block hover:text-teal-400 transition-colors">General Dentistry</NavLink>
              <NavLink to="/services" className="block hover:text-teal-400 transition-colors">Cosmetic Dentistry</NavLink>
              <NavLink to="/services" className="block hover:text-teal-400 transition-colors">Dental Implants</NavLink>
              <NavLink to="/services" className="block hover:text-teal-400 transition-colors">Oral Surgery</NavLink>
              <NavLink to="/services" className="block hover:text-teal-400 transition-colors">Emergency Care</NavLink>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-teal-400 flex-shrink-0" />
                <span className="text-gray-300">123 Health Street, Wellness City, WC 12345</span>
              </div>
              <div className="flex items-center space-x-3 cursor-pointer" onClick={handleCall}>
                <Phone className="h-5 w-5 text-teal-400 flex-shrink-0" />
                <span className="text-gray-300 hover:text-teal-400 transition-colors">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 cursor-pointer" onClick={handleEmail}>
                <Mail className="h-5 w-5 text-teal-400 flex-shrink-0" />
                <span className="text-gray-300 hover:text-teal-400 transition-colors">info@doraldental.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-teal-400 flex-shrink-0" />
                <span className="text-gray-300">Mon-Fri 8AM-6PM, Sat 9AM-3PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Doral Dental. All rights reserved. | HIPAA Compliant Practice
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-gray-400">
              <NavLink to="/privacy" className="hover:text-teal-400 transition-colors">
                Privacy Policy
              </NavLink>
              <NavLink to="/terms" className="hover:text-teal-400 transition-colors">
                Terms of Service
              </NavLink>
              <NavLink to="/hipaa" className="hover:text-teal-400 transition-colors">
                HIPAA Notice
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
