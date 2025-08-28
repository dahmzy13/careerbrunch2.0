import React from 'react';

const Partners = () => {
  const partnerCategories = [
    {
      title: "Sponsors",
      partners: [
        {
          name: "Sponsor 1",
          logo: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
          name: "Sponsor 2", 
          logo: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
          name: "Sponsor 3",
          logo: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400"
        }
      ]
    },
    {
      title: "Talent Partners",
      partners: [
        {
          name: "Talent Partner 1",
          logo: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
          name: "Talent Partner 2",
          logo: "https://images.pexels.com/photos/3184340/pexels-photo-3184340.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
          name: "Talent Partner 3",
          logo: "https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg?auto=compress&cs=tinysrgb&w=400"
        }
      ]
    },
    {
      title: "Community Partners",
      partners: [
        {
          name: "Community Partner 1",
          logo: "https://res.cloudinary.com/dh6ljzabj/image/upload/v1750978602/JPEG_image-4632-9101-DE-0_awnxes.jpg"
        },
        {
          name: "Community Partner 2",
          logo: "https://images.pexels.com/photos/3184294/pexels-photo-3184294.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
          name: "Community Partner 3",
          logo: "https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=400"
        }
      ]
    },
    {
      title: "Media Partners",
      partners: [
        {
          name: "Media Partner 1",
          logo: "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
          name: "Media Partner 2",
          logo: "https://images.pexels.com/photos/3184297/pexels-photo-3184297.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
          name: "Media Partner 3",
          logo: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=400"
        }
      ]
    }
  ];

  return (
    <section id="partners" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            SPONSORS & PARTNERS<span className="text-[#1060D3]">.</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're building partnerships with leading organizations who share our vision of empowering Africa's young professionals.
          </p>
        </div>

        {/* Partner Categories */}
        <div className="space-y-16">
          {partnerCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-left">
                {category.title}<span className="text-[#1060D3]">.</span>
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {category.partners.map((partner, partnerIndex) => (
                  <div key={partnerIndex} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 flex items-center justify-center min-h-[120px]">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gray-200 rounded-lg mx-auto mb-3 flex items-center justify-center">
                        <span className="text-gray-500 text-xs font-semibold">LOGO</span>
                      </div>
                      <p className="text-sm font-semibold text-gray-700">{partner.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Partnership CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#1060D3] to-[#0E4FB8] rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Become a Partner</h3>
            <p className="text-white/90 mb-6 text-lg max-w-2xl mx-auto">
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