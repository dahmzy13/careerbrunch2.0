import React from 'react';
import { Coffee, Mail, ExternalLink, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '#about-us' },
    { name: 'Event Structure', href: '#event-structure' },
    { name: 'Speakers', href: '#speakers' },
    { name: 'Partners', href: '#partners' },
    { name: 'FAQ', href: '#faq' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="relative">
                <Coffee className="w-8 h-8 text-[#1060D3]" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#FF7878] rounded-full"></div>
              </div>
              <span className="font-bold text-xl">Career Brunch 2.0</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              The Career-Tech & Lifestyle Experience by GenZHR. Where Ambition Meets Opportunity. 
              Join us on November 8th, 2025, for a transformative day of career growth and networking.
            </p>
            <div className="space-y-2 text-gray-300">
              <p className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-[#00FFBD]" />
                hello@genzhr.org
              </p>
              <p>📍 Zone Tech Park, Gbagada, Lagos</p>
              <p>📅 November 8th, 2025 | 9:00am - 4:00pm</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-[#00FFBD] transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-bold text-lg mb-6">Connect With Us</h3>
            <div className="space-y-4">
              <a
                href="https://linktr.ee/careerbrunch2025"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-[#00FFBD] transition-colors duration-200"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Linktree
              </a>
              <div className="flex space-x-4 pt-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#1060D3] transition-colors duration-200"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#1060D3] transition-colors duration-200"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#1060D3] transition-colors duration-200"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Career Brunch by GenZHR. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdoHnRILNznU2yqI7C4_uSv2GNjWFzHdtB6lP-NO4NOUHrorA/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FF7878] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#FF6B6B] transition-colors duration-200 text-sm"
              >
                Join Waitlist
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;