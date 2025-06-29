import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import { toast } from '@/components/ui/sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    service: 'General Checkup',
    message: ''
  });

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Office',
      details: ['123 Health Street', 'Wellness City, WC 12345'],
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Phone,
      title: 'Call Us Today',
      details: ['(555) 123-4567', 'Emergency: (555) 987-6543'],
      color: 'bg-teal-100 text-teal-600'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Mon-Fri: 8AM - 6PM', 'Saturday: 9AM - 3PM'],
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@doraldental.com', 'appointments@doraldental.com'],
      color: 'bg-rose-100 text-rose-600'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.phone || !formData.email) {
      toast.error('Please fill in all required fields');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    // Phone validation
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      toast.error('Please enter a valid phone number');
      return;
    }

    // Simulate form submission
    toast.success('Appointment request submitted successfully! We will contact you within 24 hours to confirm your appointment.');
    
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      service: 'General Checkup',
      message: ''
    });
  };

  const handlePhoneClick = (phoneNumber: string) => {
    const cleanNumber = phoneNumber.replace(/\D/g, '');
    window.location.href = `tel:+1${cleanNumber}`;
  };

  const handleEmailClick = (email: string) => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 via-white to-mint-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
              Get in <span className="text-teal-600">Touch</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Ready to start your journey to a healthier smile? Contact us today to 
              schedule your appointment with our experienced dental team.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="hover:shadow-xl transition-shadow duration-300 bg-white border-0">
                  <CardContent className="p-8 text-center">
                    <div className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {item.title}
                    </h3>
                    <div className="space-y-2">
                      {item.details.map((detail, idx) => (
                        <p 
                          key={idx} 
                          className={`text-gray-600 text-lg ${
                            item.icon === Phone ? 'cursor-pointer hover:text-teal-600' : 
                            item.icon === Mail ? 'cursor-pointer hover:text-teal-600' : ''
                          }`}
                          onClick={() => {
                            if (item.icon === Phone) handlePhoneClick(detail);
                            if (item.icon === Mail) handleEmailClick(detail);
                          }}
                        >
                          {detail}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-12 lg:p-16">
                <h3 className="text-3xl font-bold text-gray-900 mb-8">
                  Schedule Your Appointment
                </h3>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-lg"
                        placeholder="John"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-lg"
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-lg"
                      placeholder="(555) 123-4567"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-lg"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Preferred Service
                    </label>
                    <select 
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-lg"
                    >
                      <option value="General Checkup">General Checkup</option>
                      <option value="Teeth Cleaning">Teeth Cleaning</option>
                      <option value="Cosmetic Dentistry">Cosmetic Dentistry</option>
                      <option value="Dental Implants">Dental Implants</option>
                      <option value="Emergency Care">Emergency Care</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Message (Optional)
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-lg"
                      placeholder="Tell us about your dental needs..."
                    ></textarea>
                  </div>
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white py-6 text-xl font-semibold"
                  >
                    Book Appointment Now
                  </Button>
                </form>
              </div>
              
              <div className="bg-gradient-to-br from-teal-600 to-teal-700 p-12 lg:p-16 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-600/90 to-teal-700/90"></div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-8">Why Choose Doral Dental?</h3>
                  <div className="space-y-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-lg">State-of-the-Art Technology</h4>
                        <p className="text-teal-100">Latest dental equipment for precise, comfortable treatments</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-lg">Experienced Team</h4>
                        <p className="text-teal-100">Board-certified dentists with 15+ years of experience</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-lg">Flexible Scheduling</h4>
                        <p className="text-teal-100">Evening and weekend appointments available</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12 p-6 bg-white bg-opacity-10 rounded-2xl">
                    <p className="text-center text-teal-100 text-lg">
                      Emergency appointments available 24/7
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;