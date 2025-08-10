import React from 'react';

const faqs = [
  {
    question: "What is ShareWave?",
    answer:
      "ShareWave is a community platform where users can share articles, ideas, and stories on various topics.",
  },
  {
    question: "How do I post an article?",
    answer:
      "You need to be logged in. After logging in, navigate to the 'Post Article' page from the navbar and fill in your article details.",
  },
  {
    question: "Can I edit or delete my articles?",
    answer:
      "Yes, go to 'My Articles' page, select the article you want to update or delete, and follow the available options.",
  },
  {
    question: "Do we have a mobile app?",
    answer:
      "Currently, ShareWave is only available as a web platform, but we are planning to release mobile apps in the future.",
  },
  {
    question: "If I subscribe to the newsletter, what will happen?",
    answer:
      "By subscribing to the newsletter, you'll receive regular updates, featured articles, and important announcements directly to your inbox.",
  },
];

const FAQ = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h1>

      {faqs.map(({ question, answer }, idx) => (
        <div
          key={idx}
          tabIndex={0}
          className="collapse collapse-plus border border-neutral bg-base-200 rounded-box mb-4"
        >
          <input type="checkbox" />
          <div className="collapse-title text-lg font-medium">{question}</div>
          <div className="collapse-content">
            <p>{answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
