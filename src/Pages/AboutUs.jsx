import React from 'react';
import { Link } from 'react-router';

const AboutUs = () => {
  const cards = [
    {
      icon: "🌍",
      title: "Our Mission",
      description: "To democratize knowledge by creating an open, welcoming space for learners and experts alike to contribute and grow."
    },
    {
      icon: "🤝",
      title: "Our Community",
      description: "Built on collaboration and curiosity, Sharewave thrives on contributions from diverse voices across the world."
    },
    {
      icon: "🚀",
      title: "Our Vision",
      description: "To become the go-to hub for insightful content, deep learning, and meaningful digital conversations."
    }
  ];

  const borderColor = "border-accent/10";
  const iconBgColor = "bg-accent/10";

  return (
    <div className="bg-gradient-to-b from-base-100 to-base-200 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-6 relative inline-block">
            About Sharewave
            <span className="absolute bottom-0 left-0 w-full h-1 bg-primary origin-bottom-right scale-x-0 animate-[underline_1.5s_ease-out_forwards]"></span>
          </h2>
          <p className="text-lg text-accent/80 max-w-3xl mx-auto leading-relaxed">
            Sharewave is a dynamic knowledge-sharing platform where thinkers, learners, and creators come together to explore ideas and share valuable insights. Whether you're here to read, contribute, or engage in discussions — you're part of a growing wave of knowledge.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`group bg-base-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-l-4 ${borderColor}`}
            >
              <div className={`w-14 h-14 ${iconBgColor} rounded-full flex items-center justify-center mb-6 mx-auto group-hover:rotate-12 transition-transform`}>
                <span className="text-3xl">{card.icon}</span>
              </div>
              <h3 className="text-2xl font-bold text-accent mb-4">{card.title}</h3>
              <p className="text-accent/75 leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-16 text-center">
          <Link to="/login">
            <button className="py-2 rounded-full bg-info text-base-100 cursor-pointer duration-300 font-semibold shadow-md hover:scale-103 sm:text-base px-6 will-change-transform">
              Join Our Community
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;
