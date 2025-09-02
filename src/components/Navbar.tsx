import { useState, useEffect } from 'react';
import { Menu, X, Coffee, ExternalLink } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  // Handle scroll and active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['about-us', 'event-structure', 'speakers', 'partners', 'faq'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(current || '');
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navItems = [
    { id: 'about-us', label: 'About Us', href: '#about-us' },
    { id: 'event-structure', label: 'Event Structure', href: '#event-structure' },
    { id: 'speakers', label: 'Speakers', href: '#speakers' },
    { id: 'partners', label: 'Partners', href: '#partners' },
    { id: 'faq', label: 'FAQ', href: '#faq' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-medium border-b border-neutral-200' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Enhanced Logo */}
          <a href="#" className="flex items-center space-x-2 group" onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setIsOpen(false);
          }}>
            <div className="relative">
              <Coffee className={`w-8 h-8 md:w-10 md:h-10 transition-all duration-300 ${
                scrolled || isOpen ? 'text-primary-600 group-hover:text-primary-700' : 'text-white group-hover:text-accent-400'
              }`} />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 md:w-3 md:h-3 bg-accent-500 rounded-full animate-pulse"></div>
            </div>
            <span className={`font-bold text-xl md:text-2xl font-display transition-colors duration-300 ${
              scrolled || isOpen ? 'text-neutral-900' : 'text-white'
            }`}>
              Career Brunch 2.0
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-6 py-3 rounded-full font-medium font-body transition-all duration-300 ${
                  scrolled 
                    ? 'text-neutral-700 hover:text-primary-600 hover:bg-neutral-100' 
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                } ${
                  activeSection === item.id 
                    ? scrolled 
                      ? 'bg-primary-50 text-primary-600' 
                      : 'bg-white/20 text-white'
                    : ''
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full ${
                    scrolled ? 'bg-primary-600' : 'bg-accent-400'
                  }`}></div>
                )}
              </button>
            ))}
            
            <div className="ml-6">
              <a
                href="https://selar.com/careerbrunch2025"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-accent-500 text-white px-6 py-3 rounded-full font-semibold font-body hover:bg-accent-600 transition-all duration-300 shadow-soft hover:shadow-medium transform hover:scale-105 flex items-center space-x-2"
              >
                <span>Buy Tickets</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden z-50">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-3 -mr-2 rounded-lg transition-all duration-300 ${
                scrolled || isOpen
                  ? 'text-neutral-700 hover:bg-neutral-100' 
                  : 'text-white hover:bg-white/10'
              }`}
              aria-expanded={isOpen}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        <div 
          className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ease-in-out ${
            isOpen 
              ? 'opacity-100 visible' 
              : 'opacity-0 invisible'
          }`}
          style={{
            paddingTop: '5rem',
            backgroundColor: isOpen ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0)',
            backdropFilter: 'blur(4px)',
            WebkitBackdropFilter: 'blur(4px)'
          }}
        >
          <div 
            className="bg-white rounded-t-3xl shadow-2xl h-[85vh] overflow-y-auto transition-transform duration-300 ease-in-out transform-gpu"
            style={{
              transform: isOpen ? 'translateY(0)' : 'translateY(100%)',
            }}
          >
            <div className="p-6 space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 px-2">Menu</h2>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left py-4 px-6 rounded-xl transition-all duration-200 text-lg ${
                    activeSection === item.id
                      ? 'bg-primary-50 text-primary-700 font-semibold border-l-4 border-primary-500'
                      : 'text-gray-800 hover:bg-gray-50 active:bg-gray-100 font-medium'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <a
                  href="https://selar.com/careerbrunch2025"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-accent-600 text-white px-6 py-4 rounded-xl font-semibold hover:bg-accent-700 active:bg-accent-800 active:scale-[0.98] transition-all duration-200 text-center flex items-center justify-center space-x-2 shadow-md hover:shadow-lg"
                >
                  <span>Buy Ticket</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;