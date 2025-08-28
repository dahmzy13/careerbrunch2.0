import React from 'react';

const Speakers = () => {
  const speakerCategories = [
    {
      category: "Hosts",
      speakers: [
        {
          name: "TBA",
          title: "Event Host",
          organization: "To Be Announced",
          image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
          name: "TBA",
          title: "Session Moderator",
          organization: "To Be Announced",
          image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
          name: "TBA",
          title: "Panel Moderator",
          organization: "To Be Announced",
          image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400"
        }
      ]
    },
    {
      category: "Speakers",
      speakers: [
        {
          name: "TBA",
          title: "Keynote Speaker",
          organization: "To Be Announced",
          image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
          name: "Finance Expert",
          title: "Investment Strategist",
          organization: "Financial Services",
          image: "https://images.pexels.com/photos/3184340/pexels-photo-3184340.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
          name: "Storytelling Coach",
          title: "Brand Narrative Specialist",
          organization: "Creative Agency",
          image: "https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
          name: "Innovation Leader",
          title: "Startup Founder",
          organization: "Tech Startup",
          image: "https://images.pexels.com/photos/3184341/pexels-photo-3184341.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
          name: "AI Expert",
          title: "Technology Strategist",
          organization: "Tech Company",
          image: "https://images.pexels.com/photos/3184294/pexels-photo-3184294.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
          name: "Career Coach",
          title: "Professional Development",
          organization: "Consulting Firm",
          image: "https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=400"
        }
      ]
    },
    {
      category: "Mentors",
      speakers: [
        {
          name: "Career Mentor 1",
          title: "Senior Manager",
          organization: "Fortune 500 Company",
          image: "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
          name: "Career Mentor 2",
          title: "HR Director",
          organization: "Global Corporation",
          image: "https://images.pexels.com/photos/3184297/pexels-photo-3184297.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
          name: "Industry Mentor",
          title: "Tech Executive",
          organization: "Leading Tech Company",
          image: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=400"
        }
      ]
    }
  ];

  return (
    <section id="speakers" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            SPEAKERS<span className="text-[#1060D3]">.</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Learn from industry leaders, successful entrepreneurs, and career experts who will share their insights and experiences.
          </p>
        </div>

        {/* Speaker Categories */}
        <div className="space-y-16">
          {speakerCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-left">
                {category.category}<span className="text-[#1060D3]">.</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.speakers.map((speaker, speakerIndex) => (
                  <div key={speakerIndex} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                    <div className="relative overflow-hidden">
                      <img
                        src={speaker.image}
                        alt={speaker.name}
                        className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6 text-center">
                      <h4 className="text-xl font-bold text-gray-900 mb-2 uppercase tracking-wide">{speaker.name}</h4>
                      <p className="text-gray-600 font-medium text-sm uppercase tracking-wider">{speaker.title}</p>
                      <p className="text-gray-500 text-sm mt-1">{speaker.organization}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Note about TBA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">More Speakers Coming Soon!</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're finalizing our incredible lineup of industry leaders, successful entrepreneurs, and career experts. 
              Stay tuned for announcements of our confirmed speakers who will share game-changing insights at Career Brunch 2.0.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speakers;