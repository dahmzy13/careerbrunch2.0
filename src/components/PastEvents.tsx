import React from 'react';
import { Play, Users, Award, Heart } from 'lucide-react';

const PastEvents = () => {
  const testimonials = [
    {
      name: "Adebayo Johnson",
      role: "Software Developer",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400",
      quote: "Career Brunch 1.0 was a game-changer for me. The connections I made and the insights I gained helped me land my dream job in tech."
    },
    {
      name: "Funmi Adeyemi",
      role: "Marketing Manager",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400",
      quote: "The mentorship opportunities were incredible. I'm still in touch with my mentor from the event, and it's been invaluable for my career growth."
    },
    {
      name: "Kemi Okafor",
      role: "Entrepreneur",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400",
      quote: "The practical workshops gave me tools I could implement immediately. My business has grown 300% since attending Career Brunch."
    }
  ];

  const stats = [
    { icon: Users, number: "200+", label: "Attendees" },
    { icon: Award, number: "15+", label: "Speakers" },
    { icon: Heart, number: "95%", label: "Satisfaction Rate" },
    { icon: Play, number: "8", label: "Hours of Content" }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            PAST EVENTS<span className="text-[#1060D3]">.</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Career Brunch 1.0 was just the beginning. See how we've already started transforming careers across Africa.
          </p>
        </div>

        {/* Event Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Career Brunch 1.0 - Main Event"
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-4 left-4 bg-[#1060D3] text-white px-4 py-2 rounded-full font-semibold">
                Career Brunch 1.0
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden shadow-md">
                <img
                  src="https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Networking Session"
                  className="w-full h-32 object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-md">
                <img
                  src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Workshop Session"
                  className="w-full h-32 object-cover"
                />
              </div>
            </div>
          </div>

          {/* Event Stats */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Career Brunch 1.0 Impact</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our inaugural event brought together ambitious young professionals from across Lagos for a day of 
                learning, networking, and career transformation. The success of Career Brunch 1.0 laid the foundation 
                for this even bigger and better second edition.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-xl shadow-md">
                  <div className="bg-[#1060D3]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-[#1060D3]" />
                  </div>
                  <div className="text-3xl font-bold text-[#1060D3] mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">What Attendees Said</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-[#1060D3] text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic leading-relaxed">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-[#1060D3] to-[#00FFBD] rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Join Career Brunch 2.0?</h3>
            <p className="text-xl mb-6 text-white/90">
              Don't miss out on the career transformation experience that's already changing lives across Africa.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdoHnRILNznU2yqI7C4_uSv2GNjWFzHdtB6lP-NO4NOUHrorA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FF7878] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#FF6B6B] transition-all duration-300 transform hover:scale-105 inline-block"
            >
              Join the Waitlist Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PastEvents;