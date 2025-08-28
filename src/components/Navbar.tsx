import React, { useState, useEffect } from 'react';
import { Menu, X, Coffee } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/98 backdrop-blur-md shadow-lg border-b border-gray-100' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Coffee className={`w-8 h-8 ${scrolled ? 'text-[#1060D3]' : 'text-white'}`} />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent-500 rounded-full"></div>
            </div>
            <span className={`font-bold text-xl font-heading ${scrolled ? 'text-gray-900' : 'text-white'}`}>
              Career Brunch 2.0
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {['About Us', 'Event Structure', 'Speakers', 'Partners', 'FAQ'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                className={`font-medium font-body transition-colors hover:text-accent-500 ${
                  scrolled ? 'text-gray-700 hover:text-[#1060D3]' : 'text-white/90'
                }`}
              >
                {item}
              </button>
            ))}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdoHnRILNznU2yqI7C4_uSv2GNjWFzHdtB6lP-NO4NOUHrorA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent-500 text-white px-6 py-3 rounded-full font-semibold font-body hover:bg-accent-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Join Waitlist
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 transition-colors ${scrolled ? 'text-gray-700' : 'text-white'}`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white/98 backdrop-blur-md rounded-lg mt-2 p-4 shadow-xl border border-gray-100">
            {['About Us', 'Event Structure', 'Speakers', 'Partners', 'FAQ'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                className="block w-full text-left py-3 text-gray-700 hover:text-accent-500 transition-colors font-body"
              >
                {item}
              </button>
            ))}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdoHnRILNznU2yqI7C4_uSv2GNjWFzHdtB6lP-NO4NOUHrorA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors text-center mt-4 font-body"
            >
              Join Waitlist
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;