import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SideProgressBar from '@/components/SideProgressBar';
import Chatbot from '@/components/Chatbot';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Calendar, Clock, MapPin, Star, Award, Users, Heart } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'General Dentistry',
      description: 'Comprehensive care for your entire family, including check-ups, cleanings, and fillings.',
      icon: Users,
      details: [
        'Regular check-ups and cleanings',
        'Fillings and cavity treatment',
        'Oral cancer screenings',
        'Gum disease treatment',
      ],
    },
    {
      title: 'Cosmetic Dentistry',
      description: 'Enhance your smile with our range of cosmetic services, including whitening, veneers, and smile makeovers.',
      icon: Star,
      details: [
        'Teeth whitening',
        'Porcelain veneers',
        'Smile makeovers',
        'Bonding and reshaping',
      ],
    },
    {
      title: 'Dental Implants',
      description: 'Permanent solutions for missing teeth, restoring your smile and confidence.',
      icon: Award,
      details: [
        'Single tooth implants',
        'Multiple teeth implants',
        'Implant-supported dentures',
        'Bone grafting',
      ],
    },
    {
      title: 'Orthodontics',
      description: 'Straighten your teeth with traditional braces or clear aligners for a confident smile.',
      icon: Heart,
      details: [
        'Traditional braces',
        'Clear aligners',
        'Early orthodontic treatment',
        'Adult orthodontics',
      ],
    },
    {
      title: 'Oral Surgery',
      description: 'Expert surgical procedures, including extractions, root canals, and jaw surgery.',
      icon: Phone,
      details: [
        'Tooth extractions',
        'Root canal therapy',
        'Wisdom teeth removal',
        'Corrective jaw surgery',
      ],
    },
    {
      title: 'Emergency Dental Care',
      description: 'Immediate care for dental emergencies, providing relief and solutions when you need them most.',
      icon: Calendar,
      details: [
        'Emergency pain relief',
        'Broken tooth repair',
        'Infection treatment',
        'Trauma care',
      ],
    },
  ];

  const testimonials = [
    {
      name: 'Alice Johnson',
      text: 'The team at Doral Dental is amazing! They made me feel comfortable and provided excellent care. My smile has never looked better!',
      rating: 5,
    },
    {
      name: 'Bob Williams',
      text: 'I had a great experience with Doral Dental. The staff was friendly and professional, and the results were fantastic. Highly recommended!',
      rating: 4,
    },
  ];

  const contactInfo = {
    phone: '(555) 123-4567',
    email: 'info@doraldental.com',
    address: '123 Main Street, Wellness City',
    hours: 'Mon-Fri: 8am - 6pm, Sat: 9am - 3pm',
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <section className="bg-teal-50 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-semibold text-teal-700 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600">
            We offer a wide range of dental services to meet your needs.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl font-semibold">
                  <service.icon className="w-5 h-5 text-teal-500" />
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-500">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 text-gray-600">
                  {service.details.map((detail, i) => (
                    <li key={i} className="mb-1">
                      {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <Footer />
      <SideProgressBar />
      <Chatbot />
    </div>
  );
};

export default Services;
