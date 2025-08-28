import React from 'react';
import { 
  Mic, 
  Users, 
  Star, 
  MessageCircle, 
  Gamepad2, 
  Coffee,
  ExternalLink,
  Clock,
  MapPin
} from 'lucide-react';

const EventStructure = () => {
  const sessions = [
    {
      icon: Mic,
      title: "Speaking Sessions",
      count: "3 Sessions",
      description: "Deep dives into career and life skills with industry leaders",
      topics: ["Finance & Investment", "Storytelling for Growth", "Idea-to-Impact Building"],
      color: "from-gray-800 to-gray-900"
    },
    {
      icon: Users,
      title: "Panel Session",
      count: "1 Panel",
      description: "Staying Relevant in an AI-Driven World: Threat or Opportunity?",
      topics: ["Corporate Professionals", "Freelancers", "Creators", "Startup Employees"],
      color: "from-gray-700 to-gray-800"
    },
    {
      icon: Star,
      title: "Keynote",
      count: "1 Session",
      description: "A showstopper keynote delivering an unforgettable message",
      topics: ["Where Ambition Meets Opportunity"],
      color: "from-gray-800 to-gray-900"
    },
    {
      icon: MessageCircle,
      title: "Fireside Chat",
      count: "1 Chat",
      description: "Climbing the Career Ladder: Lessons from Entry-Level to Manager",
      topics: ["Leadership Growth", "Career Progression", "Management Skills"],
      color: "from-gray-700 to-gray-800"
    },
    {
      icon: Gamepad2,
      title: "Interactive Zones",
      count: "6+ Zones",
      description: "Hands-on engagement and networking opportunities",
      topics: ["Talent Lounge", "LinkedIn Photo Booth", "Live Wish Wall", "Lifestyle Lounge"],
      color: "from-gray-800 to-gray-900"
    },
    {
      icon: Coffee,
      title: "Brunch & Networking",
      count: "All Day",
      description: "Food & drink booths, vendor stands, and community networking",
      topics: ["Food Booths", "Vendor Stands", "Sponsor Engagement", "Networking Games"],
      color: "from-gray-700 to-gray-800"
    }
  ];

  return (
    <section id="event-structure" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            EVENT STRUCTURE<span className="text-[#1060D3]">.</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A carefully curated day of learning, networking, and transformation designed to accelerate your career journey.
          </p>
          <div className="flex items-center justify-center space-x-6 mt-8 text-gray-700">
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-[#1060D3]" />
              <span className="font-medium">9:00am - 4:00pm</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-[#E473FF]" />
              <span className="font-medium">Zone Tech Park, Gbagada</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {sessions.map((session, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className={`bg-gradient-to-r ${session.color} p-6 text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <session.icon className="w-8 h-8" />
                  <span className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full">
                    {session.count}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{session.title}</h3>
                <p className="text-white/90 text-sm">{session.description}</p>
              </div>
              <div className="p-6">
                <ul className="space-y-2">
                  {session.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-[#1060D3] rounded-full mr-3"></div>
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://dent-peak-c3c.notion.site/Career-Brunch-2-0-Programs-Outline-25a4704bb4918109a17acfc39216f719?source=copy_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-[#1060D3] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#0E4FB8] transition-all duration-300 transform hover:scale-105 space-x-2"
          >
            <span>View Full Program Outline</span>
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default EventStructure;