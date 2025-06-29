import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, Award, Users, Clock, Heart, Star } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '15+', label: 'Years Experience', icon: Clock },
    { number: '5000+', label: 'Happy Patients', icon: Users },
    { number: '50+', label: 'Awards Won', icon: Award },
    { number: '99%', label: 'Success Rate', icon: CheckCircle }
  ];

  const values = [
    'Right and weekend appointments',
    'Routine and emergency services', 
    'Direct and consultancy services',
    'State-of-the-art equipment',
    'Personalized treatment plans',
    'Insurance accepted'
  ];

  const handleMeetTeam = () => {
    // Scroll to team section or navigate to team page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBookAppointment = () => {
    window.location.href = '/contact';
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 via-white to-mint-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
                About <span className="text-teal-600">Doral Dental</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
                Our practice combines cutting-edge dental technology with a warm, 
                caring approach to dentistry. We believe that every patient deserves 
                personalized attention and the highest standard of oral healthcare.
              </p>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/ace2a899-3f89-4035-83d1-b517ea900005.png" 
                alt="Modern dental office with professional dentist"
                className="w-full h-[500px] lg:h-[600px] object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div className="relative">
              <img 
                src="/lovable-uploads/b2c1283a-2386-4e98-96ec-0183ef442a59.png" 
                alt="Dr. performing dental surgery with precision"
                className="w-full h-[500px] lg:h-[600px] object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/20 to-transparent rounded-3xl"></div>
            </div>
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                  Meet Our Expert
                  <span className="text-teal-600"> Dental Team</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Led by Dr. Maria Rodriguez, our experienced team brings together 
                  decades of expertise in comprehensive dental care. We are committed 
                  to staying at the forefront of dental technology and techniques.
                </p>
              </div>

              <div className="space-y-4">
                {values.slice(0, 3).map((value, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-teal-600" />
                    </div>
                    <span className="text-gray-700 font-medium text-lg">{value}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center space-x-6 pt-4">
                <Button 
                  size="lg" 
                  className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4"
                  onClick={handleMeetTeam}
                >
                  Meet Our Team
                </Button>
                <div className="flex items-center space-x-3">
                  <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center">
                    <Award className="h-7 w-7 text-teal-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Dr. Olivia Reynolds, DDS</p>
                    <p className="text-sm text-gray-600">Lead Oral Surgeon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Excellence in Numbers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence has earned us recognition as one of 
              the leading dental practices in the region.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index} 
                  className="bg-white p-8 lg:p-10 rounded-3xl text-center hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-4xl lg:text-5xl font-bold text-teal-600 mb-3">{stat.number}</div>
                  <div className="text-gray-600 font-medium text-lg">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center space-y-8 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Our Mission & Values
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We are dedicated to providing exceptional dental care that combines 
              advanced technology with compassionate service, ensuring every patient 
              receives the best possible treatment in a comfortable environment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {values.map((value, index) => (
              <div key={index} className="bg-gradient-to-br from-teal-50 to-white p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="h-5 w-5 text-teal-600" />
                  </div>
                  <span className="text-gray-700 font-medium text-lg">{value}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-teal-600 hover:bg-teal-700 text-white px-10 py-6 text-xl font-semibold"
              onClick={handleBookAppointment}
            >
              Schedule Your Visit Today
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;