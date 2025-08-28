import React from 'react';
import { Target, Users, Zap, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              ABOUT US<span className="text-[#1060D3]">.</span>
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Career Brunch is a flagship initiative by <strong>GenZHR</strong> designed to bridge the gap 
                between ambition and opportunity for Africa's young professionals. Unlike typical conferences, 
                Career Brunch prioritizes real transformation: tools you can apply, mentors you can connect with, 
                and opportunities you can act on.
              </p>
              <p>
                In this second edition, we're raising the bar: more sessions, more mentors, more hands-on 
                opportunities, and a curated experience that brings together the best of career development, 
                technology, lifestyle, and networking.
              </p>
            </div>
            
            <div className="mt-8">
              <a
                href="https://linktr.ee/careerbrunch2025"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-[#1060D3] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#0E4FB8] transition-all duration-300 transform hover:scale-105"
              >
                Learn More About Us
              </a>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Career professionals networking at event"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1060D3]/80 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;