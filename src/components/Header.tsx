
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const handleBookAppointment = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCall = () => {
    window.location.href = 'tel:+15551234567';
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      {/* Top bar */}
      <div className={`bg-teal-600 text-white py-2 transition-all duration-300 ${
        isScrolled ? 'h-0 overflow-hidden opacity-0' : 'h-auto opacity-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center cursor-pointer" onClick={handleCall}>
                <Phone className="h-4 w-4 mr-2" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>Mon-Fri 8AM-6PM | Sat 9AM-3PM</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span>📍 123 Health Street, Wellness City</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <NavLink to="/" className={`text-2xl font-bold transition-colors ${
              isScrolled ? 'text-teal-600' : 'text-white'
            }`}>
              Doral Dental
            </NavLink>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    `px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? 'text-teal-600 border-b-2 border-teal-600'
                        : isScrolled 
                        ? 'text-gray-700 hover:text-teal-600'
                        : 'text-white hover:text-teal-200'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <Button 
              onClick={handleBookAppointment}
              className="bg-teal-600 hover:bg-teal-700 text-white"
            >
              Book Appointment
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-teal-600' : 'text-white hover:text-teal-200'
              }`}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md border-t">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    `block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                      isActive
                        ? 'text-teal-600 bg-teal-50'
                        : 'text-gray-700 hover:text-teal-600 hover:bg-gray-50'
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </NavLink>
              ))}
              <div className="px-3 py-2">
                <Button 
                  onClick={handleBookAppointment}
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white"
                >
                  Book Appointment
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
