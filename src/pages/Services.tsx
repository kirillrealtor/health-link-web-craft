
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
      image: '/lovable-uploads/580c2c7d-9a53-4f6f-b600-50b7de99a86a.png',
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
      image: '/lovable-uploads/580c2c7d-9a53-4f6f-b600-50b7de99a86a.png',
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
      image: '/lovable-uploads/8d904085-2c83-409d-83d0-a93b9c8d43af.png',
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
      image: '/lovable-uploads/8d904085-2c83-409d-83d0-a93b9c8d43af.png',
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
      image: '/lovable-uploads/4692ee3f-0971-46ad-b360-2d96ff36b524.png',
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
      image: '/lovable-uploads/acc4199a-19da-4487-9ca4-850259a7e184.png',
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
            <Card key={index} className="card-hover overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute top-4 left-4 p-2 bg-white/90 rounded-full">
                  <service.icon className="w-5 h-5 text-teal-500" />
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-500">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 text-gray-600 mb-4">
                  {service.details.map((detail, i) => (
                    <li key={i} className="mb-1">
                      {detail}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="outline" 
                  className="border-teal-200 text-teal-600 hover:bg-teal-50 hover:border-teal-300 transition-all duration-300"
                >
                  Learn More
                </Button>
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
