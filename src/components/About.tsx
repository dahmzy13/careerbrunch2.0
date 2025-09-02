import { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, Star } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about-us');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);



  const highlights = [
    "Real transformation, not just inspiration",
    "Mentors you can actually connect with",
    "Opportunities you can act on immediately",
    "Tools and frameworks you can implement",
    "Networking that leads to real relationships"
  ];

  return (
    <section id="about-us" className="py-24 bg-gradient-to-br from-neutral-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-accent-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center bg-primary-50 text-primary-700 px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wider mb-6 border border-primary-100">
            About GenZHR
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6 font-display">
            ABOUT US<span className="text-primary-600">.</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-neutral-600 max-w-4xl mx-auto leading-relaxed font-body">
            Career Brunch is a flagship initiative designed to bridge the gap between ambition and opportunity for Africa's young professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-neutral-700 leading-relaxed font-body">
                Unlike typical conferences, <strong className="text-neutral-900">Career Brunch prioritizes real transformation</strong>: 
                tools you can apply, mentors you can connect with, and opportunities you can act on.
              </p>
              
              <p className="text-lg md:text-xl text-neutral-700 leading-relaxed font-body">
                In this second edition, we're raising the bar: <strong className="text-neutral-900">more sessions, more mentors, 
                more hands-on opportunities</strong>, and a curated experience that brings together the best of career development, 
                technology, lifestyle, and networking.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-neutral-900 font-body">What Makes Us Different:</h3>
              <div className="space-y-3">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent-500 flex-shrink-0" />
                    <span className="text-neutral-700 font-medium">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="pt-6">
              <a
                href="https://linktr.ee/careerbrunch2025"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center bg-primary-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 shadow-soft hover:shadow-medium"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Enhanced Visual Section */}
          <div className={`space-y-8 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-large">
              <img
                src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Career professionals networking at event"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-primary-600/40 to-transparent"></div>
              
              {/* Floating Stats */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-medium">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-neutral-900">250+</div>
                    <div className="text-sm text-neutral-600">Professionals</div>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default About;