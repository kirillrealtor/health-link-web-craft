import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBookAppointment = () => {
    // Scroll to contact form on homepage or navigate to contact page
    if (window.location.pathname === '/') {
      const contactSection = document.getElementById('contact-section');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = '/contact';
    }
  };

  const handlePhoneCall = () => {
    // Navigate to contact form instead of opening phone dialer
    if (window.location.pathname === '/') {
      const contactSection = document.getElementById('contact-section');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = '/contact';
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/98 backdrop-blur-lg shadow-xl border-b border-gray-100' 
        : 'bg-black/20 backdrop-blur-sm shadow-2xl'
    }`}>
      {/* Top bar */}
      <div className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-teal-600 text-white py-1.5' 
          : 'bg-teal-600/95 backdrop-blur-md text-white py-2'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm font-medium">
            <div className="flex items-center space-x-6">
              <div className="flex items-center cursor-pointer hover:text-teal-200 transition-colors" onClick={handlePhoneCall}>
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
            <NavLink to="/" className={`text-2xl font-bold transition-all duration-300 ${
              isScrolled 
                ? 'text-teal-600' 
                : 'text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-extrabold'
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
                  className={({ isActive }) => {
                    const baseClasses = `relative px-3 py-2 text-sm font-semibold transition-all duration-300 group`;
                    const colorClasses = isScrolled 
                      ? (isActive 
                          ? 'text-teal-600' 
                          : 'text-gray-800 hover:text-teal-600')
                      : (isActive 
                          ? 'text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]' 
                          : 'text-white/95 hover:text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-medium');
                    
                    return `${baseClasses} ${colorClasses}`;
                  }}
                >
                  {({ isActive }) => (
                    <>
                      {item.name}
                      {/* Animated underline */}
                      <span className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                        isActive ? 'w-full' : 'w-0'
                      } ${
                        isScrolled ? 'bg-teal-600' : 'bg-white drop-shadow-lg'
                      }`}></span>
                    </>
                  )}
                </NavLink>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <Button 
              className={`transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 ${
                isScrolled 
                  ? 'bg-teal-600 hover:bg-teal-700 text-white border-2 border-teal-600 hover:border-teal-700' 
                  : 'bg-white text-teal-600 hover:bg-gray-50 border-2 border-white hover:border-gray-50 drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]'
              }`}
              onClick={handleBookAppointment}
            >
              Book Appointment
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`transition-all duration-300 p-2 rounded-lg ${
                isScrolled 
                  ? 'text-gray-800 hover:text-teal-600 hover:bg-gray-100' 
                  : 'text-white hover:text-teal-200 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] hover:bg-white/10'
              }`}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/98 backdrop-blur-lg border-t border-gray-200 shadow-2xl rounded-b-2xl mx-2">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    `block px-4 py-3 text-base font-semibold transition-all duration-300 relative group rounded-lg ${
                      isActive
                        ? 'text-teal-600 bg-teal-50 shadow-sm'
                        : 'text-gray-800 hover:text-teal-600 hover:bg-gray-50'
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {({ isActive }) => (
                    <>
                      {item.name}
                      {/* Mobile underline animation */}
                      <span className={`absolute bottom-1 left-4 h-0.5 bg-teal-600 transition-all duration-300 group-hover:w-[calc(100%-32px)] ${
                        isActive ? 'w-[calc(100%-32px)]' : 'w-0'
                      }`}></span>
                    </>
                  )}
                </NavLink>
              ))}
              <div className="px-4 py-3">
                <Button 
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] font-semibold"
                  onClick={() => {
                    handleBookAppointment();
                    setIsMenuOpen(false);
                  }}
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