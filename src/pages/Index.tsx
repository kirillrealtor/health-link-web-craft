
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import SideProgressBar from '@/components/SideProgressBar';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
      <Footer />
      <SideProgressBar />
    </div>
  );
};

export default Index;
