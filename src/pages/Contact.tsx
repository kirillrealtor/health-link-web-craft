
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

      {/* Google Maps Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold text-teal-700 mb-4">Visit Our Dental Office</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're conveniently located in Falls Church, Virginia. Find us easily with our interactive map below.
            </p>
          </div>
          
          <div className="relative">
            {/* Map Container with Custom Styling */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl border-4 border-teal-100">
              {/* Decorative Border Elements */}
              <div className="absolute -top-2 -left-2 w-6 h-6 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full opacity-80"></div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full opacity-80"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full opacity-80"></div>
              <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full opacity-80"></div>
              
              {/* Map Overlay with Teal Tint */}
              <div className="absolute inset-0 bg-gradient-to-b from-teal-500/10 to-transparent pointer-events-none z-10"></div>
              
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.8947!2d-77.1725!3d38.8372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7c6bb1a7b8c0d%3A0x1234567890abcdef!2s5501%20Seminary%20Rd%20%232112S%2C%20Falls%20Church%2C%20VA%2022041!5e0!3m2!1sen!2sus!4v1679234481904!5m2!1sen!2sus"
                width="100%"
                height="500"
                style={{ 
                  border: 0,
                  filter: 'hue-rotate(180deg) saturate(1.2) brightness(0.9)'
                }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="relative z-0">
              </iframe>
            </div>
            
            {/* Location Info Card Overlay */}
            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-teal-100 max-w-xs">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-3 h-3 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full animate-pulse"></div>
                <h3 className="font-semibold text-teal-700">Doral Dental</h3>
              </div>
              <p className="text-sm text-gray-600 mb-2">5501 Seminary Rd #2112S</p>
              <p className="text-sm text-gray-600 mb-2">Falls Church, VA 22041</p>
              <p className="text-xs text-teal-600 font-medium">📞 (555) 123-4567</p>
            </div>
          </div>
          
          {/* Additional Location Info */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-teal-100">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Easy to Find</h3>
              <p className="text-sm text-gray-600">Located in the heart of Falls Church with ample parking available.</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-teal-100">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Convenient Hours</h3>
              <p className="text-sm text-gray-600">Open Monday-Friday 8AM-6PM, Saturday 9AM-3PM for your convenience.</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-teal-100">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Call Ahead</h3>
              <p className="text-sm text-gray-600">Call us at (555) 123-4567 to schedule your appointment today.</p>
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
