import React from 'react';

const Partners = () => {
  const partnerCategories = [
    {
      title: "Sponsors",
      description: "Supporting our mission to bridge the gap between ambition and opportunity",
      partners: []
    },
    {
      title: "Talent Partners",
      description: "Connecting attendees with career opportunities and growth paths",
      partners: []
    },
    {
      title: "Community Partners",
      description: "Building stronger networks and fostering collaboration",
      partners: []
    },
    {
      title: "Media Partners",
      description: "Amplifying our message and extending our reach across Africa",
      partners: []
    }
  ];

  return (
    <section id="partners" className="py-20 bg-gradient-to-br from-[#1060D3] to-[#1053A2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            SPONSORS & PARTNERS<span className="text-[#00FFBD]">.</span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            We're building partnerships with leading organizations who share our vision of empowering Africa's young professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {partnerCategories.map((category, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">{category.title}</h3>
              <p className="text-white/80 mb-6">{category.description}</p>
              
              {category.partners.length > 0 ? (
                <div className="grid grid-cols-2 gap-4">
                  {category.partners.map((partner, partnerIndex) => (
                    <div key={partnerIndex} className="bg-white rounded-lg p-4 flex items-center justify-center">
                      <span className="text-gray-800 font-semibold">{partner}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-white/20 rounded-lg p-8 border-2 border-dashed border-white/30">
                  <p className="text-white/70 font-semibold">Coming Soon</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Partnership CTA */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">Become a Partner</h3>
            <p className="text-white/90 mb-6 text-lg">
              Join us in empowering the next generation of African professionals. We have exciting partnership 
              opportunities for corporate sponsors, vendors, community networks, and talent programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hello@genzhr.org"
                className="bg-[#FF7878] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#FF6B6B] transition-all duration-300 transform hover:scale-105"
              >
                Partner With Us
              </a>
              <a
                href="https://linktr.ee/careerbrunch2025"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#1060D3] transition-all duration-300 transform hover:scale-105"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;