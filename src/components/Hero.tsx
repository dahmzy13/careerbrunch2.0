import { useState, useEffect } from 'react';
import { Calendar, MapPin, ArrowRight, Play, Users, Star } from 'lucide-react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
    
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % 3);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    { number: "250+", label: "Attendees", icon: Users },
    { number: "15+", label: "Speakers", icon: Star },
    { number: "8", label: "Hours", icon: Calendar },
  ];

  return (
    <section className="relative min-h-[80vh] md:min-h-screen flex items-start justify-center overflow-hidden pt-20 md:pt-24 pb-12 md:pb-16">
      {/* Enhanced Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900"></div>
      
      {/* Professional Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-4 md:top-20 md:left-10 w-16 h-16 md:w-32 md:h-32 bg-accent-400/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-20 right-6 md:top-40 md:right-20 w-12 h-12 md:w-24 md:h-24 bg-purple-400/10 rounded-full blur-xl animate-float delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 md:w-40 md:h-40 bg-yellow-400/10 rounded-full blur-xl animate-float delay-2000"></div>
        <div className="hidden md:block absolute bottom-20 right-1/3 w-28 h-28 bg-red-400/10 rounded-full blur-xl animate-float delay-3000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 md:pt-16">
        {/* Main Heading with Enhanced Typography */}
        <div className={`mb-10 md:mb-16 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold font-display text-white mb-6 md:mb-8 leading-tight tracking-tight">
            Career Brunch
            <span className="block text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-accent-400 font-medium mt-1 md:mt-2">
              2.0
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 font-medium font-body max-w-4xl mx-auto px-4 sm:px-0 leading-relaxed">
            Where <span className="text-accent-400 font-semibold">Ambition</span> Meets <span className="text-accent-400 font-semibold">Opportunity</span>
          </p>
        </div>

        {/* Enhanced Event Details */}
        <div className={`mb-10 md:mb-16 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-4 md:space-x-8 space-y-3 sm:space-y-0 text-white px-4 sm:px-0">
            <div className="w-full sm:w-auto flex items-center justify-center space-x-2 sm:space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 border border-white/20">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-accent-400 flex-shrink-0" />
              <span className="text-sm sm:text-base font-semibold font-body whitespace-nowrap">November 8th, 2025</span>
            </div>
            <div className="w-full sm:w-auto flex items-center justify-center space-x-2 sm:space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 border border-white/20">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 flex-shrink-0" />
              <span className="text-sm sm:text-base font-semibold font-body whitespace-nowrap">Zone Tech Park, Gbagada</span>
            </div>
          </div>
        </div>

        {/* Enhanced Description */}
        <div className={`mb-10 md:mb-16 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-5xl mx-auto px-4 sm:px-6 leading-relaxed font-body">
            Join <span className="font-semibold text-accent-400">250+ emerging professionals</span>, <span className="font-semibold text-accent-400">creators</span>, and <span className="font-semibold text-accent-400">innovators</span> for a one-day immersive experience 
            at the foremost event for young ambitious people across Africa.
          </p>
        </div>

        {/* Live Stats Counter */}
        <div className={`mb-10 md:mb-16 transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 px-4 sm:px-0">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className={`text-center transition-all duration-500 ${
                  currentStat === index ? 'scale-105 sm:scale-110' : 'scale-100'
                }`}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-3 sm:p-4 border border-white/20 w-28 sm:w-32 md:w-36">
                  <div className="flex items-center justify-center mb-1 sm:mb-2">
                    <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent-400" />
                  </div>
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white">{stat.number}</div>
                  <div className="text-xs sm:text-sm text-white/80 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced CTA Buttons */}
        <div className={`flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-6 transition-all duration-1000 delay-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} w-full px-4 sm:px-0`}>
          <a
            href="https://selar.com/careerbrunch2025"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-accent-500 hover:bg-accent-600 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-all duration-300 transform active:scale-95 hover:scale-105 flex items-center justify-center space-x-2 group"
          >
            <span className="text-sm sm:text-base">Buy Tickets</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          <a
            href="https://www.instagram.com/reel/DNsV8MzUEBo/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 sm:space-x-3 text-white/90 hover:text-white transition-colors duration-300 group w-full sm:w-auto justify-center"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300 flex-shrink-0">
              <Play className="w-4 h-4 sm:w-5 sm:h-5 text-white ml-0.5 sm:ml-1" />
            </div>
            <span className="text-sm sm:text-base font-medium">Watch 2024 Recap</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;