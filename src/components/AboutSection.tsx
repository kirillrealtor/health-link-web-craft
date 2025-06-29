
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
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div className="space-y-10">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Compassionate Patient-Focused 
                <span className="text-teal-600"> Oral And Maxillofacial Care</span>
              </h2>
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                Our practice combines cutting-edge dental technology with a warm, 
                caring approach to dentistry. We believe that every patient deserves 
                personalized attention and the highest standard of oral healthcare.
              </p>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-teal-600" />
                  </div>
                  <span className="text-gray-700 font-medium text-lg">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-6 sm:space-y-0 sm:space-x-8 pt-4">
              <Button 
                size="lg" 
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 text-lg"
              >
                About Our Dentist
              </Button>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center">
                  <Award className="h-8 w-8 text-teal-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-lg">Dr. Olivia Reynolds, DDS</p>
                  <p className="text-gray-600">Lead Oral Surgeon</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative mb-8">
              <img 
                src="/lovable-uploads/ac43c119-046c-427f-8532-e591d8417513.png" 
                alt="Professional dental treatment in progress"
                className="w-full h-[400px] lg:h-[500px] object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/20 to-transparent rounded-3xl"></div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div 
                    key={index} 
                    className="bg-gradient-to-br from-teal-50 to-white p-6 lg:p-8 rounded-2xl text-center hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="w-14 h-14 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <div className="text-3xl lg:text-4xl font-bold text-teal-600 mb-2">{stat.number}</div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </div>
                );
              })}
            </div>
            
            <div className="mt-8 bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
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
