import React, { useState, useEffect } from 'react';
import { 
  Clock,
  MapPin,
  Calendar,
  Coffee,
  Users,
  Mic,
  Star,
  MessageCircle,
  Gamepad2,
  Award,
  ExternalLink,
  ArrowRight
} from 'lucide-react';

const EventTimeline = () => {
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

    const element = document.getElementById('event-timeline');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const timeline = [
    { 
      time: "9:00am - 10:00am", 
      event: "Registration & check in", 
      icon: Users,
      category: "Arrival",
      color: "from-blue-500 to-blue-600"
    },
    { 
      time: "10:00am - 10:30am", 
      event: "Bingo Activity", 
      icon: Gamepad2,
      category: "Ice Breaker",
      color: "from-purple-500 to-purple-600"
    },
    { 
      time: "10:30am - 10:50am", 
      event: "Munch It & Music", 
      icon: Coffee,
      category: "Refreshment",
      color: "from-green-500 to-green-600"
    },
    { 
      time: "10:50am - 11:00am", 
      event: "Welcome Remarks", 
      icon: Mic,
      category: "Opening",
      color: "from-primary-500 to-primary-600"
    },
    { 
      time: "11:00am - 11:05am", 
      event: "Ice Breaker/Talent Session", 
      icon: Star,
      category: "Ice Breaker",
      color: "from-yellow-500 to-yellow-600"
    },
    { 
      time: "11:05am - 11:10am", 
      event: "Ice Breaker/Speaker Video Intro", 
      icon: Star,
      category: "Ice Breaker",
      color: "from-yellow-500 to-yellow-600"
    },
    { 
      time: "11:10am - 11:30am", 
      event: "1st Speaking Session/Builder", 
      icon: Mic,
      category: "Speaking",
      color: "from-primary-500 to-primary-600"
    },
    { 
      time: "11:30am - 11:35am", 
      event: "Ice Breaker/Speaker Video Intro", 
      icon: Star,
      category: "Ice Breaker",
      color: "from-yellow-500 to-yellow-600"
    },
    { 
      time: "11:35am - 11:55am", 
      event: "2nd Speaking Session/Finance", 
      icon: Mic,
      category: "Speaking",
      color: "from-primary-500 to-primary-600"
    },
    { 
      time: "11:55am - 12:00pm", 
      event: "Ice Breaker/Sponsor Session", 
      icon: Award,
      category: "Sponsor",
      color: "from-orange-500 to-orange-600"
    },
    { 
      time: "12:00pm - 12:20pm", 
      event: "Panel Session", 
      icon: MessageCircle,
      category: "Discussion",
      color: "from-teal-500 to-teal-600"
    },
    { 
      time: "12:20pm - 12:30pm", 
      event: "Ice Breaker/Kahoot", 
      icon: Gamepad2,
      category: "Ice Breaker",
      color: "from-purple-500 to-purple-600"
    },
    { 
      time: "12:30pm - 1:00pm", 
      event: "Brunch & Networking", 
      icon: Coffee,
      category: "Networking",
      color: "from-green-500 to-green-600"
    },
    { 
      time: "1:00pm - 2:00pm", 
      event: "Interactive Zone Breakout", 
      icon: Gamepad2,
      category: "Interactive",
      color: "from-indigo-500 to-indigo-600"
    },
    { 
      time: "2:00pm - 2:05pm", 
      event: "Ice Breaker/Sponsor Session", 
      icon: Award,
      category: "Sponsor",
      color: "from-orange-500 to-orange-600"
    },
    { 
      time: "2:05pm - 2:10pm", 
      event: "Ice Breaker/Speaker Intro", 
      icon: Star,
      category: "Ice Breaker",
      color: "from-yellow-500 to-yellow-600"
    },
    { 
      time: "2:10pm - 2:30pm", 
      event: "3rd Speaking Session/Marketing", 
      icon: Mic,
      category: "Speaking",
      color: "from-primary-500 to-primary-600"
    },
    { 
      time: "2:30pm - 2:55pm", 
      event: "Fireside Chat", 
      icon: MessageCircle,
      category: "Discussion",
      color: "from-teal-500 to-teal-600"
    },
    { 
      time: "2:55pm - 3:00pm", 
      event: "Ice Breaker/Sponsor Session", 
      icon: Award,
      category: "Sponsor",
      color: "from-orange-500 to-orange-600"
    },
    { 
      time: "3:00pm - 3:25pm", 
      event: "Keynote Session", 
      icon: Star,
      category: "Keynote",
      color: "from-red-500 to-red-600"
    },
    { 
      time: "3:25pm - 3:30pm", 
      event: "Ice Breaker/Sponsor Session", 
      icon: Award,
      category: "Sponsor",
      color: "from-orange-500 to-orange-600"
    },
    { 
      time: "3:30pm - 3:50pm", 
      event: "Vision Board", 
      icon: Award,
      category: "Interactive",
      color: "from-indigo-500 to-indigo-600"
    },
    { 
      time: "3:50pm - 4:00pm", 
      event: "Closing Remarks", 
      icon: Mic,
      category: "Closing",
      color: "from-gray-500 to-gray-600"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Speaking': return 'from-primary-500 to-primary-600';
      case 'Ice Breaker': return 'from-yellow-500 to-yellow-600';
      case 'Sponsor': return 'from-orange-500 to-orange-600';
      case 'Discussion': return 'from-teal-500 to-teal-600';
      case 'Interactive': return 'from-indigo-500 to-indigo-600';
      case 'Keynote': return 'from-red-500 to-red-600';
      case 'Networking': return 'from-green-500 to-green-600';
      case 'Arrival': return 'from-blue-500 to-blue-600';
      case 'Refreshment': return 'from-green-500 to-green-600';
      case 'Opening': return 'from-primary-500 to-primary-600';
      case 'Closing': return 'from-gray-500 to-gray-600';
      default: return 'from-neutral-500 to-neutral-600';
    }
  };

  return (
    <section id="event-timeline" className="py-24 bg-gradient-to-br from-neutral-100 to-white relative overflow-hidden">
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
            Event Schedule
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6 font-display">
            EVENT TIMELINE<span className="text-primary-600">.</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-neutral-600 max-w-4xl mx-auto mb-8 leading-relaxed font-body">
            A comprehensive day of learning, networking, and transformation with carefully timed sessions and activities.
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

        {/* Timeline Section */}
        <div className={`mb-20 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-accent-500"></div>
            
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-1 border border-neutral-100">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className={`w-10 h-10 bg-gradient-to-r ${getCategoryColor(item.category)} rounded-full flex items-center justify-center`}>
                          <item.icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">
                          {item.time}
                        </span>
                      </div>
                      <h4 className="font-semibold text-neutral-900 mb-2">{item.event}</h4>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${getCategoryColor(item.category)} text-white`}>
                        {item.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="relative z-10 w-4 h-4 bg-white border-4 border-primary-500 rounded-full shadow-medium"></div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 right-10 w-32 h-32 bg-white rounded-full"></div>
              <div className="absolute bottom-10 left-10 w-24 h-24 bg-white rounded-full"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 font-display">
                Ready to Experience the Full Day?
              </h3>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                Join us for this comprehensive day of career development, networking, and transformation at Career Brunch 2.0.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdoHnRILNznU2yqI7C4_uSv2GNjWFzHdtB6lP-NO4NOUHrorA/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center bg-accent-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-accent-600 transition-all duration-300 transform hover:scale-105 shadow-glow"
                >
                  <span>Join the Waitlist</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
                
                <a
                  href="https://dent-peak-c3c.notion.site/Career-Brunch-2-0-Programs-Outline-25a4704bb4918109a17acfc39216f719?source=copy_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-primary-600 transition-all duration-300 transform hover:scale-105"
                >
                  <span>View Full Program</span>
                  <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-0.5 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventTimeline;
