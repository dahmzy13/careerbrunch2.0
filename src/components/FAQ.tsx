import { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';

const FAQ = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('faq');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const faqs = [
    {
      question: "Who is this event for?",
      answer: "Career Brunch 2.0 is designed for Gen Z professionals, students, freelancers, creators, and founders who want to accelerate their careers, build meaningful connections, and access real opportunities. Whether you're just starting out or already climbing the career ladder, this event has something valuable for you.",
      category: "General",
      tags: ["audience", "eligibility", "target"]
    },
    {
      question: "Do I need prior experience?",
      answer: "No prior experience is required! Whether you're starting your career, building a side hustle, or already climbing the ladder, Career Brunch 2.0 has sessions tailored for every stage of your professional journey. Our content is designed to be accessible and valuable for all experience levels.",
      category: "General",
      tags: ["experience", "beginners", "requirements"]
    },
    {
      question: "What makes Career Brunch different?",
      answer: "Unlike traditional conferences, Career Brunch integrates learning with action. You'll leave with refined CVs, professional headshots, new mentors, and real opportunities - not just notes. We focus on practical outcomes and immediate impact rather than just theoretical knowledge.",
      category: "Event Details",
      tags: ["unique", "difference", "value"]
    },
    {
      question: "Where and when is the event happening?",
      answer: "Career Brunch 2.0 will take place on November 8th, 2025, at Zone Tech Park, Gbagada, Lagos. The event runs from 9:00am to 4:00pm, giving you a full day of career transformation activities.",
      category: "Event Details",
      tags: ["location", "date", "time", "schedule"]
    },
    {
      question: "How do I join the waitlist?",
      answer: "Simply click on any 'Join Waitlist' button on this website, which will take you to our registration form. By joining the waitlist, you'll be the first to know when tickets become available and receive early updates about speakers, sessions, and special offers.",
      category: "Registration",
      tags: ["waitlist", "registration", "tickets"]
    },
    {
      question: "How can I partner or sponsor the event?",
      answer: "We'd love to partner with you! Email thegenzhr@gmail.com to explore sponsorship and partnership opportunities. We have packages for corporate sponsors, vendors, community networks, and talent programs. Let's work together to empower Africa's young professionals.",
      category: "Partnerships",
      tags: ["sponsorship", "partnership", "corporate"]
    },
    {
      question: "What should I expect at the event?",
      answer: "Expect a full day of transformation! You'll attend speaking sessions, panel discussions, a keynote presentation, fireside chats, interactive workshops, and networking opportunities. Plus, enjoy food and drinks while connecting with like-minded professionals and industry leaders.",
      category: "Event Details",
      tags: ["schedule", "activities", "experience"]
    },
    {
      question: "Will there be networking opportunities?",
      answer: "Absolutely! Networking is a core part of Career Brunch 2.0. We have dedicated networking sessions, interactive zones, a mentorship corner, and plenty of informal opportunities to connect with fellow attendees, speakers, and mentors throughout the day.",
      category: "Event Details",
      tags: ["networking", "connections", "mentorship"]
    },
    {
      question: "What should I bring to the event?",
      answer: "Bring your business cards, a notebook, and an open mind! We'll provide all materials for workshops and sessions. Dress professionally but comfortably - you'll be moving around and networking throughout the day.",
      category: "Preparation",
      tags: ["what to bring", "materials", "dress code"]
    },
    {
      question: "Is there a dress code?",
      answer: "We recommend business casual attire. You want to look professional for networking opportunities while staying comfortable for a full day of activities. Think smart casual - you'll be meeting potential employers and mentors!",
      category: "Preparation",
      tags: ["dress code", "attire", "professional"]
    },
    {
      question: "Can I get a refund if I can't attend?",
      answer: "We understand that plans can change. Please refer to our refund policy in your registration confirmation email, or contact us directly at thegenzhr@gmail.com to discuss your specific situation.",
      category: "Registration",
      tags: ["refund", "cancellation", "policy"]
    },
    {
      question: "Will the event be recorded?",
      answer: "Some sessions may be recorded for promotional purposes, but we encourage in-person attendance for the full experience. The real value comes from live interactions, networking, and hands-on activities that can't be replicated virtually.",
      category: "Event Details",
      tags: ["recording", "virtual", "attendance"]
    }
  ];

  const categories = ['All', 'General', 'Event Details', 'Registration', 'Partnerships', 'Preparation'];

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    if (searchTerm === '') return true;
    return matchesSearch;
  });

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-accent-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center bg-primary-50 text-primary-700 px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wider mb-6 border border-primary-100">
            Got Questions?
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6 font-display">
            FAQ<span className="text-primary-600">.</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto leading-relaxed font-body">
            Find everything you need to know about Career Brunch 2.0. Can't find your answer? Contact us directly.
          </p>
        </div>

        {/* Search and Filter */}
        <div className={`mb-12 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Search Bar */}
          <div className="relative mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
              <input
                type="text"
                placeholder="Search questions or topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-neutral-50 border border-neutral-200 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 font-body"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSearchTerm(category === 'All' ? '' : category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  (searchTerm === '' && category === 'All') || searchTerm === category
                    ? 'bg-primary-600 text-white shadow-medium'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Items */}
        <div className={`mb-16 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <div key={index} className="bg-white border border-neutral-200 rounded-3xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left bg-white hover:bg-neutral-50 transition-all duration-300 flex items-center justify-between group"
                >
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-neutral-900 pr-4 font-body group-hover:text-primary-600 transition-colors duration-300">
                      {faq.question}
                    </h3>
                    <div className="flex items-center space-x-3 mt-2">
                      <span className="text-xs font-medium bg-primary-100 text-primary-700 px-2 py-1 rounded-full">
                        {faq.category}
                      </span>
                      <div className="flex space-x-1">
                        {faq.tags.slice(0, 2).map((tag, tagIndex) => (
                          <span key={tagIndex} className="text-xs text-neutral-500">#{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="ml-4 flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="w-6 h-6 text-primary-600 transition-transform duration-300" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-neutral-400 group-hover:text-primary-600 transition-all duration-300" />
                    )}
                  </div>
                </button>
                
                {openIndex === index && (
                  <div className="px-8 py-6 bg-gradient-to-r from-neutral-50 to-primary-50 border-t border-neutral-100">
                    <p className="text-neutral-700 leading-relaxed font-body my-2">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* No Results Message */}
          {filteredFaqs.length === 0 && searchTerm !== '' && (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-10 h-10 text-neutral-400" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">No questions found</h3>
              <p className="text-neutral-600 mb-4">Try adjusting your search terms or browse all questions.</p>
              <button
                onClick={() => setSearchTerm('')}
                className="bg-primary-600 text-white px-6 py-3 rounded-full font-medium hover:bg-primary-700 transition-all duration-300"
              >
                View All Questions
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQ;