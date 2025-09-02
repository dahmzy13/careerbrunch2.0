import React, { useState, useEffect } from 'react';
import { 
  Mic, 
  Users, 
  Star, 
  MessageCircle, 
  Gamepad2, 
  Coffee,
  ExternalLink,
  Clock,
  MapPin,
  ArrowRight,
  Calendar,
  Award
} from 'lucide-react';

const EventStructure = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSession, setHoveredSession] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('event-structure');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const sessions = [
    {
      icon: Mic,
      title: "Speaking Sessions",
      count: "3 Sessions",
      description: "Deep dives into career and life skills with industry leaders",
      topics: ["Finance & Investment", "Storytelling for Growth", "Idea-to-Impact Building"],
      color: "from-primary-500 to-primary-600",
      duration: "45 min each",
      category: "Learning"
    },
    {
      icon: Users,
      title: "Panel Session",
      count: "1 Panel",
      description: "Staying Relevant in an AI-Driven World: Threat or Opportunity?",
      topics: ["Corporate Professionals", "Freelancers", "Creators", "Startup Employees"],
      color: "from-purple-500 to-purple-600",
      duration: "60 min",
      category: "Discussion"
    },
    {
      icon: Star,
      title: "Keynote Session",
      count: "1 Session",
      description: "A showstopper keynote delivering an unforgettable message",
      topics: ["Someone who has built ambition into opportunity"],
      color: "from-indigo-500 to-indigo-600",
      duration: "30 min",
      category: "Inspiration"
    },
    {
      icon: MessageCircle,
      title: "Fireside Chat",
      count: "1 Chat",
      description: "Climbing the Career Ladder: Lessons from Entry-Level to Manager",
      topics: ["Leadership Growth", "Career Progression", "Management Skills"],
      color: "from-teal-500 to-teal-600",
      duration: "45 min",
      category: "Leadership"
    },
    {
      icon: Gamepad2,
      title: "Interactive Zones",
      count: "6+ Zones",
      description: "Hands-on engagement and networking opportunities",
      topics: ["Talent Lounge", "Mentorship & Placement Corner", "Lifestyle & Gaming Lounge", "Linkedin Photo Booth"],
      color: "from-orange-500 to-orange-600",
      duration: "All Day",
      category: "Experience"
    },
    {
      icon: Coffee,
      title: "Brunch & Networking",
      count: "All Day",
      description: "Food & drink booths, vendor stands, and community networking",
      topics: ["Food Booths", "Vendor Stands", "Sponsor Booths", "Networking Games"],
      color: "from-green-500 to-green-600",
      duration: "Continuous",
      category: "Networking"
    }
  ];

  return (
    <section id="event-structure" className="py-24 bg-gradient-to-br from-neutral-100 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-accent-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center bg-primary-50 text-primary-700 px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wider mb-6 border border-primary-100">
            Event Overview
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6 font-display">
            EVENT STRUCTURE<span className="text-primary-600">.</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-neutral-600 max-w-4xl mx-auto mb-8 leading-relaxed font-body">
            A carefully curated day of learning, networking, and transformation designed to accelerate your career journey.
          </p>
          
          {/* Event Details */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-neutral-700">
            <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-neutral-200 shadow-soft">
              <Clock className="w-5 h-5 text-primary-600" />
              <span className="font-semibold font-body">9:00am - 4:00pm</span>
            </div>
            <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-neutral-200 shadow-soft">
              <MapPin className="w-5 h-5 text-purple-600" />
              <span className="font-semibold font-body">Zone Tech Park, Gbagada</span>
            </div>
            <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-neutral-200 shadow-soft">
              <Calendar className="w-5 h-5 text-accent-600" />
              <span className="font-semibold font-body">November 8th, 2025</span>
            </div>
          </div>
        </div>

        {/* Sessions Grid */}
        <div className={`mb-16 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="text-3xl font-bold text-neutral-900 text-center mb-12 font-display">
            Session Types
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sessions.map((session, index) => (
              <div 
                key={index} 
                className={`group bg-white rounded-3xl shadow-soft hover:shadow-large transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-neutral-100 ${
                  hoveredSession === index ? 'ring-2 ring-primary-200' : ''
                }`}
                onMouseEnter={() => setHoveredSession(index)}
                onMouseLeave={() => setHoveredSession(null)}
              >
                {/* Header */}
                <div className={`bg-gradient-to-r ${session.color} p-6 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                        <session.icon className="w-6 h-6" />
                      </div>
                      <span className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                        {session.count}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2">{session.title}</h3>
                    <p className="text-white/90 text-sm leading-relaxed">{session.description}</p>
                    
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-xs font-medium bg-white/20 px-2 py-1 rounded-full">
                        {session.category}
                      </span>
                      <span className="text-xs font-medium">{session.duration}</span>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <ul className="space-y-3">
                    {session.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-center text-sm text-neutral-600">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 flex-shrink-0"></div>
                        <span className="leading-relaxed">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventStructure;