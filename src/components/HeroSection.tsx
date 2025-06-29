
import React from 'react';
import { Button } from '@/components/ui/button';
import { Star, Award, Users } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-teal-50 via-white to-mint-50 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-teal-600/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Healthy Smiles for the{' '}
                <span className="text-teal-600 relative">
                  Whole Family
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-mint-400 rounded-full"></div>
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-lg">
                Expert dental care with a personal touch. Experience comprehensive 
                dental services in a comfortable, modern environment.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Book Appointment
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-teal-600 text-teal-600 hover:bg-teal-50 px-8 py-4 text-lg font-semibold transition-all duration-300"
              >
                Call (555) 123-4567
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-8">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-gray-700 font-medium">4.9/5 Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-teal-600" />
                <span className="text-gray-700 font-medium">5000+ Happy Patients</span>
              </div>
            </div>
          </div>

          <div className="relative lg:h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-mint-400 rounded-3xl transform rotate-3"></div>
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl transform -rotate-1 hover:rotate-0 transition-transform duration-500">
              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto">
                  <Award className="h-10 w-10 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Dr. Maria Rodriguez</h3>
                  <p className="text-gray-600 mb-4">Lead Dentist & Practice Owner</p>
                  <p className="text-sm text-gray-500">
                    "15+ years of experience providing exceptional dental care 
                    with the latest technology and techniques."
                  </p>
                </div>
                <div className="flex justify-center space-x-4 text-sm text-gray-500">
                  <span>DDS, University of Miami</span>
                  <span>•</span>
                  <span>Board Certified</span>
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
