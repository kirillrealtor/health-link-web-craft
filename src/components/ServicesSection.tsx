
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Smile, Shield, Sparkles, Heart } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      title: 'General & Cosmetic Dental Treatment',
      description: 'Comprehensive dental care including checkups, cleanings, fillings, and cosmetic procedures to keep your smile healthy and beautiful.',
      icon: Smile,
      color: 'bg-blue-100 text-blue-600',
      features: ['Regular Checkups', 'Teeth Whitening', 'Veneers', 'Fillings']
    },
    {
      title: 'Surgical Treatment & Tooth Extraction',
      description: 'Expert surgical procedures including wisdom tooth removal, tooth extractions, and oral surgery with minimal discomfort.',
      icon: Shield,
      color: 'bg-teal-100 text-teal-600',
      features: ['Wisdom Teeth', 'Tooth Extraction', 'Oral Surgery', 'Sedation Options']
    },
    {
      title: 'Dental Implants & Prosthodontics',
      description: 'Advanced implant solutions and prosthetic dentistry to restore your smile with natural-looking, permanent results.',
      icon: Sparkles,
      color: 'bg-purple-100 text-purple-600',
      features: ['Dental Implants', 'Crowns & Bridges', 'Dentures', 'Full Mouth Restoration']
    },
    {
      title: 'Compassionate Patient-Focused Care',
      description: 'Personalized treatment plans with a focus on comfort, using the latest technology and techniques for optimal results.',
      icon: Heart,
      color: 'bg-rose-100 text-rose-600',
      features: ['Personalized Care', 'Latest Technology', 'Comfort Focus', 'Emergency Services']
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Enjoy Specialized Dental Services
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From routine cleanings to advanced procedures, we provide comprehensive 
            dental care tailored to your unique needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-12 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 bg-white border-0">
                <CardContent className="p-8 lg:p-10">
                  <div className="flex items-start space-x-6">
                    <div className={`p-4 rounded-2xl ${service.color} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-10 w-10" />
                    </div>
                    <div className="flex-1 space-y-6">
                      <h3 className="text-xl lg:text-2xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {service.description}
                      </p>
                      <div className="grid grid-cols-2 gap-3">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-gray-500">
                            <div className="w-2 h-2 bg-teal-400 rounded-full mr-3"></div>
                            <span className="font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Button 
                        variant="outline" 
                        className="border-teal-200 text-teal-600 hover:bg-teal-50 hover:border-teal-300 transition-all duration-300"
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Featured Image Section */}
        <div className="mb-16">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2 items-center">
              <div className="p-12 lg:p-16">
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Advanced Dental Technology
                </h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Experience the latest in dental technology with our state-of-the-art 
                  equipment and techniques, ensuring precise, comfortable, and effective treatments.
                </p>
                <Button 
                  size="lg" 
                  className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 text-lg"
                >
                  Explore Our Technology
                </Button>
              </div>
              <div className="relative h-[400px] lg:h-[500px]">
                <img 
                  src="/lovable-uploads/8d904085-2c83-409d-83d0-a93b9c8d43af.png" 
                  alt="Advanced dental technology and precision treatment"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-teal-900/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-teal-600 hover:bg-teal-700 text-white px-10 py-6 text-xl font-semibold"
          >
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
