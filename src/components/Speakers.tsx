import React, { useState, useEffect } from 'react';
import { User, Award, Star, Calendar, Clock, MapPin, ExternalLink, ArrowRight } from 'lucide-react';

const Speakers = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('speakers');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const speakerCategories = [
    {
      id: 'all',
      label: 'All Speakers',
      count: 10
    },
    {
      id: 'host',
      label: 'Hosts',
      count: 1
    },
    {
      id: 'moderator',
      label: 'Moderators',
      count: 2
    },
    {
      id: 'keynote speaker',
      label: 'Keynote Speaker',
      count: 1
    },
    {
      id: 'speaker',
      label: 'Speakers',
      count: 3
    },
    {
      id: 'mentor',
      label: 'Mentors',
      count: 3
    }
  ];

  const speakers = [
    {
      id: 'host-1',
      name: "TBA",
      title: "Event Host",
      organization: "To Be Announced",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "host",
      expertise: ["Event Management", "Public Speaking", "Networking"],
      bio: "Professional event host with experience in career development and professional networking events.",
      social: { linkedin: "#", twitter: "#" }
    },
    {
      id: 'host-2',
      name: "TBA",
      title: "Fireside Chat Moderator",
      organization: "To Be Announced",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "moderator",
      expertise: ["Facilitation", "Panel Discussions", "Career Coaching"],
      bio: "Expert moderator specializing in career development discussions and professional growth conversations.",
      social: { linkedin: "#", twitter: "#" }
    },
    {
      id: 'host-3',
      name: "TBA",
      title: "Panel Moderator",
      organization: "To Be Announced",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "moderator",
      expertise: ["Panel Facilitation", "Industry Insights", "Professional Development"],
      bio: "Seasoned panel moderator with deep understanding of career advancement and industry trends.",
      social: { linkedin: "#", twitter: "#" }
    },
    {
      id: 'keynote-1',
      name: "TBA",
      title: "Keynote Speaker",
      organization: "To Be Announced",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "keynote speaker",
      expertise: ["Leadership", "Career Strategy", "Personal Branding"],
      bio: "Inspiring keynote speaker who will deliver an unforgettable message about ambition and opportunity.",
      social: { linkedin: "#", twitter: "#" }
    },
    {
      id: 'speaker-1',
      name: "TBA",
      title: "Finance Professional",
      organization: "Financial Services",
      image: "https://images.pexels.com/photos/3184340/pexels-photo-3184340.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "speaker",
      expertise: ["Financial Planning", "Investment Strategy", "Wealth Building"],
      bio: "Expert in personal finance and investment strategies for young professionals.",
      social: { linkedin: "#", twitter: "#" }
    },
    {
      id: 'speaker-2',
      name: "TBA",
      title: "Brand Strategist",
      organization: "Creative Agency",
      image: "https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "speaker",
      expertise: ["Digital Marketing", "Brand Strategy", "Growth Hacking"],
      bio: "Marketing expert helping professionals build their personal and professional brands.",
      social: { linkedin: "#", twitter: "#" }
    },
    {
      id: 'speaker-3',
      name: "TBA",
      title: "Startup Founder",
      organization: "Tech Startup",
      image: "https://images.pexels.com/photos/3184341/pexels-photo-3184341.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "speaker",
      expertise: ["Entrepreneurship", "Innovation", "Startup Growth"],
      bio: "Successful startup founder sharing insights on building and scaling innovative businesses.",
      social: { linkedin: "#", twitter: "#" }
    },
    {
      id: 'mentor-1',
      name: "TBA",
      title: "Senior Manager",
      organization: "Fortune 500 Company",
      image: "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "mentor",
      expertise: ["Leadership", "Management", "Corporate Strategy"],
      bio: "Senior manager with extensive experience in corporate leadership and team management.",
      social: { linkedin: "#", twitter: "#" }
    },
    {
      id: 'mentor-2',
      name: "TBA",
      title: "HR Director",
      organization: "Global Corporation",
      image: "https://images.pexels.com/photos/3184297/pexels-photo-3184297.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "mentor",
      expertise: ["Human Resources", "Talent Development", "Organizational Growth"],
      bio: "HR director specializing in talent development and organizational growth strategies.",
      social: { linkedin: "#", twitter: "#" }
    },
    {
      id: 'mentor-3',
      name: "TBA",
      title: "Tech Executive",
      organization: "Leading Tech Company",
      image: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "mentor",
      expertise: ["Technology Leadership", "Industry Innovation", "Executive Strategy"],
      bio: "Tech executive with deep insights into industry innovation and executive leadership.",
      social: { linkedin: "#", twitter: "#" }
    }
  ];

  const filteredSpeakers = selectedCategory === 'all' 
    ? speakers 
    : speakers.filter(speaker => speaker.category === selectedCategory);

  return (
    <section id="speakers" className="py-24 bg-white relative overflow-hidden">
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
            Expert Lineup
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6 font-display">
            SPEAKERS<span className="text-primary-600">.</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-neutral-600 max-w-4xl mx-auto leading-relaxed font-body">
            Learn from industry leaders, successful entrepreneurs, and career experts who will share their insights and experiences.
          </p>
        </div>

        {/* Category Filter */}
        <div className={`mb-16 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex flex-wrap justify-center gap-4">
            {speakerCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium font-body transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-primary-600 text-white shadow-medium'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {category.label} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Speakers Grid */}
        <div className={`mb-20 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSpeakers.map((speaker, index) => (
              <div 
                key={speaker.id} 
                className="group bg-white rounded-3xl shadow-soft hover:shadow-large transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-neutral-100"
              >
                {/* Image Section */}
                <div className="relative overflow-hidden">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-primary-600 uppercase tracking-wider">
                    {speaker.category}
                  </div>
                  
                  {/* Social Links */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-2">
                      <a href={speaker.social.linkedin} className="w-8 h-8 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors duration-300">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="p-6">
                  <div className="text-center mb-4">
                    <h4 className="text-xl font-bold text-neutral-900 mb-2 uppercase tracking-wide font-body">
                      {speaker.name}
                    </h4>
                    <p className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-1">
                      {speaker.title}
                    </p>
                    <p className="text-neutral-500 text-sm">{speaker.organization}</p>
                  </div>
                  
                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-2 mb-4 justify-center">
                    {speaker.expertise.slice(0, 2).map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-3 py-1 bg-neutral-100 text-neutral-700 text-xs rounded-full font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  {/* Bio Preview */}
                  <p className="text-neutral-600 text-sm leading-relaxed text-center mb-4 line-clamp-3">
                    {speaker.bio}
                  </p>
                  
                  {/* View Profile Button */}
                  <button className="w-full bg-neutral-100 text-neutral-700 py-3 rounded-xl font-medium hover:bg-primary-600 hover:text-white transition-all duration-300 group-hover:bg-primary-600 group-hover:text-white">
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speakers;