
import React from 'react';
import { Button } from '@/components/ui/button';
import { Star, Award, Users } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-teal-50 via-white to-mint-50 py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-teal-600/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div className="space-y-10">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Healthy Smiles for the{' '}
                <span className="text-teal-600 relative">
                  Whole Family
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-mint-400 rounded-full"></div>
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 max-w-lg leading-relaxed">
                Expert dental care with a personal touch. Experience comprehensive 
                dental services in a comfortable, modern environment.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <Button 
                size="lg" 
                className="bg-teal-600 hover:bg-teal-700 text-white px-10 py-6 text-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Book Appointment
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-teal-600 text-teal-600 hover:bg-teal-50 px-10 py-6 text-xl font-semibold transition-all duration-300"
              >
                Call (555) 123-4567
              </Button>
            </div>

            <div className="flex items-center space-x-12 pt-8">
              <div className="flex items-center space-x-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-gray-700 font-medium text-lg">4.9/5 Rating</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="h-6 w-6 text-teal-600" />
                <span className="text-gray-700 font-medium text-lg">5000+ Happy Patients</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative">
              <img 
                src="/lovable-uploads/23e664d2-496c-4009-bafb-ceb8d8dde5ad.png" 
                alt="Happy patient with beautiful smile" 
                className="w-full h-[500px] lg:h-[600px] object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/20 to-transparent rounded-3xl"></div>
              
              {/* Floating card with doctor info */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center">
                    <Award className="h-8 w-8 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Dr. Maria Rodriguez</h3>
                    <p className="text-gray-600 mb-2">Lead Dentist & Practice Owner</p>
                    <div className="flex space-x-2 text-sm text-gray-500">
                      <span>DDS, University of Miami</span>
                      <span>•</span>
                      <span>15+ Years Experience</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
