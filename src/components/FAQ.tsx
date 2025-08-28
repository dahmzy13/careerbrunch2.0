import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Who is this event for?",
      answer: "Career Brunch 2.0 is designed for Gen Z professionals, students, freelancers, creators, and founders who want to accelerate their careers, build meaningful connections, and access real opportunities. Whether you're just starting out or already climbing the career ladder, this event has something valuable for you."
    },
    {
      question: "Do I need prior experience?",
      answer: "No prior experience is required! Whether you're starting your career, building a side hustle, or already climbing the ladder, Career Brunch 2.0 has sessions tailored for every stage of your professional journey. Our content is designed to be accessible and valuable for all experience levels."
    },
    {
      question: "What makes Career Brunch different?",
      answer: "Unlike traditional conferences, Career Brunch integrates learning with action. You'll leave with refined CVs, professional headshots, new mentors, and real opportunities - not just notes. We focus on practical outcomes and immediate impact rather than just theoretical knowledge."
    },
    {
      question: "Where and when is the event happening?",
      answer: "Career Brunch 2.0 will take place on November 8th, 2025, at Zone Tech Park, Gbagada, Lagos. The event runs from 9:00am to 4:00pm, giving you a full day of career transformation activities."
    },
    {
      question: "How do I join the waitlist?",
      answer: "Simply click on any 'Join Waitlist' button on this website, which will take you to our registration form. By joining the waitlist, you'll be the first to know when tickets become available and receive early updates about speakers, sessions, and special offers."
    },
    {
      question: "How can I partner or sponsor the event?",
      answer: "We'd love to partner with you! Email hello@genzhr.org to explore sponsorship and partnership opportunities. We have packages for corporate sponsors, vendors, community networks, and talent programs. Let's work together to empower Africa's young professionals."
    },
    {
      question: "What should I expect at the event?",
      answer: "Expect a full day of transformation! You'll attend speaking sessions, panel discussions, a keynote presentation, fireside chats, interactive workshops, and networking opportunities. Plus, enjoy food and drinks while connecting with like-minded professionals and industry leaders."
    },
    {
      question: "Will there be networking opportunities?",
      answer: "Absolutely! Networking is a core part of Career Brunch 2.0. We have dedicated networking sessions, interactive zones, a mentorship corner, and plenty of informal opportunities to connect with fellow attendees, speakers, and mentors throughout the day."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            FAQ<span className="text-[#1060D3]">.</span>
          </h2>
          <p className="text-xl text-gray-600">
            Got questions? We've got answers. Find everything you need to know about Career Brunch 2.0.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-2xl overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left bg-white hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-[#1060D3] flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-8 pb-6 bg-gray-50">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#1060D3]/10 to-[#00FFBD]/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Still have questions?</h3>
            <p className="text-gray-600 mb-6">
              We're here to help! Reach out to us for any additional information about Career Brunch 2.0.
            </p>
            <a
              href="mailto:hello@genzhr.org"
              className="bg-[#1060D3] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#0E4FB8] transition-all duration-300 transform hover:scale-105 inline-block"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;