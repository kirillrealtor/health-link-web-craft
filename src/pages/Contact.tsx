
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
                  <span>Wellness City, USA</span>
                </div>
                {/* Add more contact details as needed */}
              </CardContent>
            </Card>
          </div>

        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold text-teal-700 mb-4 text-center">Find Us on Google Maps</h2>
          <div className="overflow-hidden rounded-lg shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2449977217493!2d-73.9857071845849!3d40.74844047932969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b311d3dd%3A0x2940256a6a9b56e!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1679234481904!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
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
