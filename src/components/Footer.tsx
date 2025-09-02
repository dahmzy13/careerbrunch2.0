import React, { useState, useEffect } from 'react';
import { Coffee, Mail, ExternalLink, Instagram, Twitter, Linkedin, ArrowUp, MapPin, Calendar, Clock } from 'lucide-react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('footer');
    if (element) {
      observer.observe(element);
    }

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'About Us', href: '#about-us', description: 'Learn about our mission' },
    { name: 'Event Structure', href: '#event-structure', description: 'See the full program' },
    { name: 'Speakers', href: '#speakers', description: 'Meet our experts' },
    { name: 'Partners', href: '#partners', description: 'Our sponsors & partners' },
    { name: 'FAQ', href: '#faq', description: 'Find answers' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/thegenzhr/', color: 'hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500' },
    { name: 'Twitter', icon: Twitter, href: 'https://x.com/thegenzhr', color: 'hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-600' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/company/career-brunch/posts/?feedView=all', color: 'hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800' },
    { name: 'TikTok', icon: '🎵', href: 'https://www.tiktok.com/@thegenzhr_', color: 'hover:bg-gradient-to-r hover:from-pink-500 hover:to-red-500' }
  ];

  const contactInfo = [
    { icon: Mail, text: 'thegenzhr@gmail.com', href: 'mailto:thegenzhr@gmail.com' },
    { icon: MapPin, text: 'Zone Tech Park, Gbagada, Lagos', href: '#' },
    { icon: Calendar, text: 'November 8th, 2025', href: '#' },
    { icon: Clock, text: '9:00am - 4:00pm', href: '#' }
  ];

  return (
    <footer id="footer" className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-accent-400 rounded-full blur-3xl"></div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 w-12 h-12 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-large transition-all duration-300 transform hover:scale-110 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6 mx-auto" />
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        {/* Main Footer Content */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-8">
              <div className="relative">
                <Coffee className="w-12 h-12 text-primary-400" />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent-500 rounded-full animate-pulse"></div>
              </div>
              <span className="font-bold text-3xl font-display">Career Brunch 2.0</span>
            </div>
            
            <p className="text-neutral-300 mb-8 max-w-md leading-relaxed text-lg font-body">
              The Career-Tech & Lifestyle Experience by GenZHR. Where Ambition Meets Opportunity. 
              Join us on November 8th, 2025, for a transformative day of career growth and networking.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center space-x-3 text-neutral-300 hover:text-white transition-colors duration-300">
                  <contact.icon className="w-5 h-5 text-primary-400 flex-shrink-0" />
                  <a 
                    href={contact.href}
                    className="hover:text-primary-400 transition-colors duration-300 font-body"
                  >
                    {contact.text}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-xl mb-8 font-display">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="group text-left transition-all duration-300"
                  >
                    <div className="text-neutral-300 group-hover:text-primary-400 font-medium font-body transition-colors duration-300">
                      {link.name}
                    </div>
                    <div className="text-sm text-neutral-500 group-hover:text-neutral-400 transition-colors duration-300">
                      {link.description}
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h3 className="font-bold text-xl mb-8 font-display">Connect With Us</h3>
            <div className="space-y-6">
              <a
                href="https://linktr.ee/careerbrunch2025"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center text-neutral-300 hover:text-primary-400 transition-colors duration-300 font-body"
              >
                <ExternalLink className="w-5 h-5 mr-2 group-hover:translate-x-0.5 transition-transform duration-300" />
                Linktree
              </a>
              
              {/* Social Media Links */}
              <div>
                <p className="text-neutral-400 text-sm mb-4 font-body">Follow us on social media</p>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className={`w-12 h-12 bg-neutral-800 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 ${social.color}`}
                      aria-label={social.name}
                    >
                      {typeof social.icon === 'string' ? (
                        <span className="text-xl">{social.icon}</span>
                      ) : (
                        <social.icon className="w-6 h-6" />
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>



        {/* Bottom Bar */}
        <div className={`border-t border-neutral-800 pt-8 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-neutral-400 text-sm font-body">
                © 2025 Career Brunch by GenZHR. All rights reserved.
              </p>
              <p className="text-neutral-500 text-xs mt-1 font-body">
                Empowering Africa's young professionals through meaningful connections and career development.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdoHnRILNznU2yqI7C4_uSv2GNjWFzHdtB6lP-NO4NOUHrorA/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-all duration-300 transform hover:scale-105 shadow-soft font-body"
              >
                <span>Join Waitlist</span>
                <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="h-1 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500"></div>
    </footer>
  );
};

export default Footer;