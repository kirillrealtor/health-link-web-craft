
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SideProgressBar from '@/components/SideProgressBar';
import Chatbot from '@/components/Chatbot';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Phone,
  Calendar,
  Clock,
  MapPin,
} from "lucide-react"

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-semibold text-teal-700 mb-4">Contact Us</h1>
          <p className="text-gray-600">We're here to help! Reach out to us for any inquiries or to book an appointment.</p>
        </div>
      </section>

      {/* Contact Form and Details */}
      <section className="container mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
                <CardDescription>We'll get back to you as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="grid gap-2">
                  <label htmlFor="name" className="text-right inline-block text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your Name"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="email" className="text-right inline-block text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your Email"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="message" className="text-right inline-block text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Your Message"
                    className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
                <Button>Send Message</Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Details */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Our Contact Information</CardTitle>
                <CardDescription>Feel free to reach out to us through the following channels:</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-gray-500" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-gray-500" />
                  <span>Mon - Fri: 8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-gray-500" />
                  <span>Sat: 9:00 AM - 3:00 PM</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-gray-500" />
                  <span>5501 Seminary Rd #2112S, Falls Church, VA 22041</span>
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </section>

      {/* Enhanced Google Maps Section - NOW MORE VISIBLE */}
      <section className="py-16 bg-gradient-to-b from-teal-50 to-white border-t-4 border-teal-500">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-teal-700 mb-6">🗺️ Visit Our Dental Office</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              We're conveniently located in Falls Church, Virginia. Find us easily with our interactive map below.
            </p>
            <div className="mt-6 inline-flex items-center bg-teal-100 text-teal-800 px-6 py-3 rounded-full">
              <MapPin className="h-5 w-5 mr-2" />
              <span className="font-semibold">5501 Seminary Rd #2112S, Falls Church, VA 22041</span>
            </div>
          </div>
          
          <div className="relative max-w-6xl mx-auto">
            {/* Enhanced Map Container */}
            <div className="relative overflow-hidden rounded-3xl shadow-2xl border-8 border-white bg-white">
              {/* Decorative Corner Elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full opacity-90 animate-pulse"></div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full opacity-90 animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full opacity-90 animate-pulse" style={{ animationDelay: '2s' }}></div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full opacity-90 animate-pulse" style={{ animationDelay: '3s' }}></div>
              
              {/* Map with Teal Overlay */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-b from-teal-500/15 to-transparent pointer-events-none z-10 rounded-2xl"></div>
                
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.8947372!2d-77.1725283!3d38.8372159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7c6bb1a7b8c0d%3A0x1234567890abcdef!2s5501%20Seminary%20Rd%20%232112S%2C%20Falls%20Church%2C%20VA%2022041!5e0!3m2!1sen!2sus!4v1679234481904!5m2!1sen!2sus"
                  width="100%"
                  height="500"
                  style={{ 
                    border: 0,
                    filter: 'saturate(1.1) brightness(0.95) contrast(1.05)'
                  }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="relative z-0 rounded-2xl">
                </iframe>
              </div>
            </div>
            
            {/* Enhanced Location Info Card */}
            <div className="absolute bottom-8 left-8 bg-white/98 backdrop-blur-md rounded-2xl p-6 shadow-2xl border-2 border-teal-200 max-w-sm">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-4 h-4 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full animate-pulse"></div>
                <h3 className="text-xl font-bold text-teal-700">Doral Dental</h3>
              </div>
              <div className="space-y-2 text-gray-700">
                <p className="font-semibold">5501 Seminary Rd #2112S</p>
                <p className="font-semibold">Falls Church, VA 22041</p>
                <div className="flex items-center space-x-2 pt-2">
                  <Phone className="h-4 w-4 text-teal-600" />
                  <p className="text-teal-600 font-semibold">(555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced Location Features */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-xl border-2 border-teal-100 hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Easy To Find</h3>
              <p className="text-gray-600 leading-relaxed">Located in the heart of Falls Church with ample parking available for your convenience.</p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-2xl shadow-xl border-2 border-teal-100 hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Convenient Hours</h3>
              <p className="text-gray-600 leading-relaxed">Open Monday-Friday 8AM-6PM, Saturday 9AM-3PM for your convenience.</p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-2xl shadow-xl border-2 border-teal-100 hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Call Ahead</h3>
              <p className="text-gray-600 leading-relaxed">Call us at (555) 123-4567 to schedule your appointment today.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <SideProgressBar />
      <Chatbot />
    </div>
  );
};

export default Contact;
