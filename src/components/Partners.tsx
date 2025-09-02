import { useState, useEffect } from 'react';
import { Building2, Users, Globe, Newspaper, Star, Award, Mail, ExternalLink } from 'lucide-react';

const Partners = () => {
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

    const element = document.getElementById('partners');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const partnerCategories = [
    {
      id: 'all',
      label: 'All Partners',
      count: 12,
      icon: Building2
    },
    {
      id: 'sponsors',
      label: 'Sponsors',
      count: 4,
      icon: Star
    },
    {
      id: 'talent',
      label: 'Talent Partners',
      count: 3,
      icon: Users
    },
    {
      id: 'community',
      label: 'Community Partners',
      count: 3,
      icon: Globe
    },
    {
      id: 'media',
      label: 'Media Partners',
      count: 2,
      icon: Newspaper
    }
  ];

  const partners = [
    {
      id: 'sponsor-1',
      name: "TBA",
      logo: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "sponsors",
      description: "Leading corporate sponsor supporting career development initiatives",
      tier: "Headline",
      website: "#"
    },
    {
      id: 'sponsor-2',
      name: "TBA", 
      logo: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "sponsors",
      description: "Innovative company empowering young professionals",
      tier: "Gold",
      website: "#"
    },
    {
      id: 'sponsor-3',
      name: "TBA",
      logo: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "sponsors",
      description: "Technology leader in professional development",
      tier: "Silver",
      website: "#"
    },
    {
      id: 'sponsor-4',
      name: "TBA",
      logo: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "sponsors",
      description: "Financial services company supporting career growth",
      tier: "Ruby",
      website: "#"
    },
    {
      id: 'sponsor-5',
      name: "TBA",
      logo: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "sponsors",
      description: "Financial services company supporting career growth",
      tier: "Bronze",
      website: "#"
    },
    {
      id: 'talent-1',
      name: "TBA",
      logo: "https://images.pexels.com/photos/3184340/pexels-photo-3184340.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "talent",
      description: "Recruitment agency connecting talent with opportunities",
      website: "#"
    },
    {
      id: 'talent-2',
      name: "TBA",
      logo: "https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "talent",
      description: "Professional development platform for career advancement",
      website: "#"
    },
    {
      id: 'talent-3',
      name: "TBA",
      logo: "https://images.pexels.com/photos/3184341/pexels-photo-3184341.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "talent",
      description: "Skills training organization for emerging professionals",
      website: "#"
    },
    {
      id: 'community-1',
      name: "TBA",
      logo: "https://res.cloudinary.com/dh6ljzabj/image/upload/v1750978602/JPEG_image-4632-9101-DE-0_awnxes.jpg?auto=compress&cs=tinysrgb&w=400",
      category: "community",
      description: "Professional network supporting career development",
      website: "#"
    },
    {
      id: 'community-2',
      name: "TBA",
      logo: "https://images.pexels.com/photos/3184294/pexels-photo-3184294.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "community",
      description: "Industry association promoting professional growth",
      website: "#"
    },
    {
      id: 'community-3',
      name: "TBA",
      logo: "https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "community",
      description: "Local business network fostering connections",
      website: "#"
    },
    {
      id: 'media-1',
      name: "TBA",
      logo: "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "media",
      description: "Leading media outlet covering career development",
      website: "#"
    },
    {
      id: 'media-2',
      name: "TBA",
      logo: "https://images.pexels.com/photos/3184297/pexels-photo-3184297.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "media",
      description: "Digital platform for professional content",
      website: "#"
    }
  ];

  const filteredPartners = selectedCategory === 'all' 
    ? partners 
    : partners.filter(partner => partner.category === selectedCategory);

  const sponsorshipTiers = [
    {
      name: "Headline",
      amount: "$15,000+",
      benefits: ["Premium branding", "Speaking opportunity", "VIP access", "Exclusive networking"],
      color: "from-green-400 to-green-600"
    },
    {
      name: "Gold",
      amount: "$5,000+",
      benefits: ["Major branding", "Exhibition space", "Networking access", "Recognition"],
      color: "from-yellow-400 to-yellow-600"
    },
    {
      name: "Silver",
      amount: "$2,500+",
      benefits: ["Standard branding", "Exhibition space", "Event access", "Mention"],
      color: "from-neutral-300 to-neutral-500"
    },
    {
      name: "Ruby",
      amount: "$1,500+",
      benefits: ["Enhanced branding", "Event access", "Recognition", "Support"],
      color: "from-red-400 to-red-600"
    },
    {
      name: "Bronze",
      amount: "$1,000+",
      benefits: ["Basic branding", "Event access", "Recognition", "Support"],
      color: "from-orange-400 to-orange-600"
    }
  ];

  return (
    <section id="partners" className="py-24 bg-gradient-to-br from-neutral-50 to-white relative overflow-hidden">
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
            Strategic Partnerships
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6 font-display">
            SPONSORS & PARTNERS<span className="text-primary-600">.</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-neutral-600 max-w-4xl mx-auto leading-relaxed font-body">
            We're building partnerships with leading organizations who share our vision of empowering Africa's young professionals.
          </p>
        </div>

        {/* Category Filter */}
        <div className={`mb-16 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex flex-wrap justify-center gap-4">
            {partnerCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium font-body transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-primary-600 text-white shadow-medium'
                    : 'bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-200'
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span>{category.label} ({category.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Partners Grid */}
        <div className={`mb-20 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPartners.map((partner, _index) => (
              <div 
                key={partner.id} 
                className="group bg-white rounded-3xl shadow-soft hover:shadow-large transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-neutral-100"
              >
                {/* Logo Section */}
                <div className={`relative p-8 bg-gradient-to-br ${
                  partner.tier === 'Headline' ? 'from-green-50 to-green-100' :
                  partner.tier === 'Gold' ? 'from-yellow-50 to-yellow-100' :
                  partner.tier === 'Silver' ? 'from-neutral-50 to-neutral-100' :
                  partner.tier === 'Ruby' ? 'from-red-50 to-red-100' :
                  partner.tier === 'Bronze' ? 'from-orange-50 to-orange-100' :
                  partner.category === 'talent' ? 'from-blue-50 to-blue-100' :
                  partner.category === 'media' ? 'from-purple-50 to-purple-100' :
                  partner.category === 'community' ? 'from-teal-50 to-teal-100' :
                  'from-neutral-50 to-neutral-100'
                }`}>
                  <div className="w-full h-32 flex items-center justify-center">
                    <div className="w-24 h-24 bg-white rounded-2xl shadow-soft flex items-center justify-center">
                      <span className="text-neutral-400 text-xs font-semibold uppercase tracking-wider">
                        {partner.category === 'sponsors' ? 'LOGO' : 'PARTNER'}
                      </span>
                    </div>
                  </div>
                  
                  {/* Partner Badge */}
                  <div className={`absolute top-4 right-4 text-white px-3 py-1 rounded-full text-xs font-semibold ${
                    partner.tier === 'Headline' ? 'bg-gradient-to-r from-green-400 to-green-600' :
                    partner.tier === 'Gold' ? 'bg-gradient-to-r from-yellow-400 to-yellow-600' :
                    partner.tier === 'Silver' ? 'bg-gradient-to-r from-neutral-300 to-neutral-500' :
                    partner.tier === 'Ruby' ? 'bg-gradient-to-r from-red-400 to-red-600' :
                    partner.tier === 'Bronze' ? 'bg-gradient-to-r from-orange-400 to-orange-600' :
                    partner.category === 'talent' ? 'bg-gradient-to-r from-blue-500 to-blue-700' :
                    partner.category === 'media' ? 'bg-gradient-to-r from-purple-500 to-purple-700' :
                    partner.category === 'community' ? 'bg-gradient-to-r from-teal-500 to-teal-700' :
                    'bg-gradient-to-r from-primary-500 to-primary-600'
                  }`}>
                    {partner.tier || 
                      (partner.category === 'talent' ? 'Talent Partner' :
                       partner.category === 'media' ? 'Media Partner' :
                       partner.category === 'community' ? 'Community Partner' : 'Partner')}
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="p-6">
                  <h4 className="text-lg font-bold text-neutral-900 mb-2 text-center font-body">
                    {partner.name}
                  </h4>
                  
                  <p className="text-neutral-600 text-sm text-center leading-relaxed mb-4">
                    {partner.description}
                  </p>
                  
                  <div className="flex justify-center space-x-3">
                    <a
                      href={partner.website}
                      className="flex-1 bg-neutral-100 text-neutral-700 py-3 rounded-xl font-medium hover:bg-primary-600 hover:text-white transition-all duration-300 text-center text-sm"
                    >
                      Visit Website
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sponsorship Tiers */}
        <div className={`mb-16 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4 font-display">
              Sponsorship Opportunities
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Join us as a sponsor and connect with top tech talent and industry leaders.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {sponsorshipTiers.map((tier, index) => {
              const gradient = tier.color.split(' ');
              return (
                <div 
                  key={index} 
                  className="group relative bg-white rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-2 border border-neutral-100 overflow-hidden"
                >
                  {/* Decorative accent */}
                  <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${tier.color}`}></div>
                  
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 relative z-10`}>
                    <div className={`absolute inset-0 bg-gradient-to-r ${tier.color} rounded-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                    <Award className={`w-8 h-8 ${gradient[1].replace('from-', 'text-')}`} />
                  </div>
                  
                  <h4 className="text-xl font-bold text-neutral-900 text-center mb-1">{tier.name}</h4>
                  <p className="text-2xl font-bold text-primary-600 text-center mb-6">{tier.amount}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {tier.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start text-sm text-neutral-600">
                        <div className={`w-1.5 h-1.5 rounded-full mt-2 mr-3 flex-shrink-0 ${gradient[1].replace('from-', 'bg-')}`}></div>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a 
                    href="mailto:thegenzhr@gmail.com" 
                    className="block w-full mt-auto py-2.5 px-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-medium rounded-lg text-sm transition-all duration-300 transform hover:-translate-y-0.5 text-center"
                  >
                    Get Started
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        {/* Partnership CTA */}
        <div className={`text-center transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 right-10 w-32 h-32 bg-white rounded-full"></div>
              <div className="absolute bottom-10 left-10 w-24 h-24 bg-white rounded-full"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 font-display">Become a Partner</h3>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                Join us in empowering the next generation of African professionals. We have exciting partnership 
                opportunities for corporate sponsors, vendors, community networks, and talent programs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:thegenzhr@gmail.com"
                  className="group inline-flex items-center bg-accent-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-accent-600 transition-all duration-300 transform hover:scale-105 shadow-glow"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  <span>Partner With Us</span>
                </a>
                
                <a
                  href="https://linktr.ee/careerbrunch2025"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-primary-600 transition-all duration-300 transform hover:scale-105"
                >
                  <span>Learn More</span>
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

export default Partners;