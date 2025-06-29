
import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, Award, Users, Clock } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { number: '15+', label: 'Years Experience', icon: Clock },
    { number: '5000+', label: 'Happy Patients', icon: Users },
    { number: '50+', label: 'Awards Won', icon: Award },
    { number: '99%', label: 'Success Rate', icon: CheckCircle }
  ];

  const features = [
    'Right and weekend appointments',
    'Routine and emergency services', 
    'Direct and consultancy services'
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-gray-900">
                Compassionate Patient-Focused 
                <span className="text-teal-600"> Oral And Maxillofacial Care</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our practice combines cutting-edge dental technology with a warm, 
                caring approach to dentistry. We believe that every patient deserves 
                personalized attention and the highest standard of oral healthcare.
              </p>
            </div>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-4 w-4 text-teal-600" />
                  </div>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center space-x-6">
              <Button 
                size="lg" 
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4"
              >
                About Our Dentist
              </Button>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                  <Award className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Dr. Olivia Reynolds, DDS</p>
                  <p className="text-sm text-gray-600">Lead Oral Surgeon</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div 
                    key={index} 
                    className="bg-gradient-to-br from-teal-50 to-white p-6 rounded-2xl text-center hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-teal-600 mb-2">{stat.number}</div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </div>
                );
              })}
            </div>
            
            <div className="mt-8 bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="text-center space-y-4">
                <h3 className="text-xl font-bold text-gray-900">
                  Excellence in Dental Care
                </h3>
                <p className="text-gray-600">
                  Our commitment to excellence has earned us recognition as one of 
                  the leading dental practices in the region.
                </p>
                <div className="flex justify-center space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-2 h-2 bg-teal-400 rounded-full"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
