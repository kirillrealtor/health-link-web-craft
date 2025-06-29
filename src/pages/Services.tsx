
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Smile, Shield, Sparkles, Heart, Clock, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'General & Cosmetic Dental Treatment',
      description: 'Comprehensive dental care including checkups, cleanings, fillings, and cosmetic procedures to keep your smile healthy and beautiful.',
      icon: Smile,
      color: 'bg-blue-100 text-blue-600',
      features: ['Regular Checkups', 'Teeth Whitening', 'Veneers', 'Fillings'],
      image: '/lovable-uploads/580c2c7d-9a53-4f6f-b600-50b7de99a86a.png'
    },
    {
      title: 'Surgical Treatment & Tooth Extraction',
      description: 'Expert surgical procedures including wisdom tooth removal, tooth extractions, and oral surgery with minimal discomfort.',
      icon: Shield,
      color: 'bg-teal-100 text-teal-600',
      features: ['Wisdom Teeth', 'Tooth Extraction', 'Oral Surgery', 'Sedation Options'],
      image: '/lovable-uploads/4692ee3f-0971-46ad-b360-2d96ff36b524.png'
    },
    {
      title: 'Advanced Dental Procedures',
      description: 'State-of-the-art dental technology for precise treatments including laser therapy and advanced diagnostics.',
      icon: Sparkles,
      color: 'bg-purple-100 text-purple-600',
      features: ['Laser Therapy', 'Digital X-Rays', 'CAD/CAM Crowns', 'Implant Surgery'],
      image: '/lovable-uploads/8d904085-2c83-409d-83d0-a93b9c8d43af.png'
    },
    {
      title: 'Compassionate Patient-Focused Care',
      description: 'Personalized treatment plans with a focus on comfort, using the latest technology and techniques for optimal results.',
      icon: Heart,
      color: 'bg-rose-100 text-rose-600',
      features: ['Personalized Care', 'Latest Technology', 'Comfort Focus', 'Emergency Services'],
      image: '/lovable-uploads/c148b70b-93ab-49a7-9cc0-6043e1171eed.png'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 via-white to-mint-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center space-y-6 mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
              Our <span className="text-teal-600">Dental Services</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              From routine cleanings to advanced procedures, we provide comprehensive 
              dental care tailored to your unique needs with cutting-edge technology.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-white border-0 overflow-hidden">
                  <div className="relative h-64 lg:h-80 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className={`absolute top-6 left-6 p-4 rounded-2xl ${service.color} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-8 w-8" />
                    </div>
                  </div>
                  <CardContent className="p-8 lg:p-10">
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                      {service.description}
                    </p>
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-gray-500">
                          <div className="w-2 h-2 bg-teal-400 rounded-full mr-3"></div>
                          <span className="text-sm font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button 
                      variant="outline" 
                      className="border-teal-200 text-teal-600 hover:bg-teal-50 hover:border-teal-300 transition-all duration-300 w-full"
                    >
                      Learn More About This Service
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 lg:py-28 bg-teal-600">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Ready to Transform Your Smile?
            </h2>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto">
              Schedule your consultation today and discover how our expert team can help you achieve the perfect smile.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-teal-600 hover:bg-gray-100 px-10 py-6 text-xl font-semibold"
              >
                Book Consultation
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-10 py-6 text-xl font-semibold"
              >
                Call (555) 123-4567
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
