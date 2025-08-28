import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1060D3] via-[#0E4FB8] to-[#0C3F9A]"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent-400/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-purple-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-yellow-400/10 rounded-full blur-xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-red-400/10 rounded-full blur-xl animate-pulse delay-3000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold font-heading text-white mb-4 leading-tight">
            Career Brunch 2.0
          </h1>
          <p className="text-lg md:text-xl text-yellow-300 font-semibold font-body">
            Where Ambition Meets Opportunity
          </p>
        </div>

        <div className="mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-6 space-y-2 sm:space-y-0 text-white">
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-accent-400" />
              <span className="font-medium font-body">November 8th, 2025</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-purple-400" />
              <span className="font-medium font-body">Zone Tech Park, Gbagada</span>
            </div>
          </div>
        </div>

        <p className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto mb-12 leading-relaxed font-body">
          Join 250+ emerging professionals, creators, and innovators for a one-day immersive experience 
          at the foremost event for young ambitious people across Africa.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdoHnRILNznU2yqI7C4_uSv2GNjWFzHdtB6lP-NO4NOUHrorA/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent-500 text-white px-8 py-4 rounded-full font-bold text-lg font-body hover:bg-accent-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Join the Waitlist
          </a>
          <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg font-body hover:bg-white hover:text-primary-600 transition-all duration-300 transform hover:scale-105">
            Register
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;