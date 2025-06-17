import React, { useEffect, useState } from 'react';
import idea from '../assets/idea1.jpg';
import knowledge from '../assets/knowledge1.jpg';
import networking from '../assets/networking.jpg';
import { Link } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    id: 1,
    img: knowledge,
    heading: "Every Idea Matters. What's Yours?",
    desc: "Whether it's a small spark or a bold vision, share your ideas and let others be inspired by your thoughts."
  },
  {
    id: 2,
    img: idea,
    heading: "A Place to Read, Reflect, and Rise",
    desc: "Discover ideas, perspectives, and insights from students around the world — all in one inspiring space."
  },
  {
    id: 3,
    img: networking,
    heading: "Grow With a Community That Think Like You",
    desc: "Connect with fellow learners, share experiences, and build friendships that empower your academic journey."
  }
];

const Banner = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const button = (
    <Link to='/all-articles'>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        href="#_"
        className="relative inline-flex items-center justify-center p-4 px-8 py-3 overflow-hidden font-medium text-indigo-600 rounded-sm shadow-sm shadow-gray-600 group cursor-pointer"
      >
        <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-secondary rounded-full blur-md ease"></span>
        <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
          <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-secondary rounded-full blur-md"></span>
          <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-info rounded-full blur-md"></span>
        </span>
        <span className="relative text-white">Explore Articles</span>
      </motion.button>
    </Link>
  );

  return (
    <div className="relative w-full h-[calc(100vh-61px)] overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={slides[index].id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9 }}
          className="absolute w-full h-full"
        >
          <img
            src={slides[index].img}
            alt="banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 backdrop-blur-xs backdrop-brightness-90 flex items-center justify-center text-center px-4">
            <div
              className="space-y-6 max-w-3xl"
            >
              <h2 className="text-primary sm:text-4xl text-2xl lg:text-5xl font-bold">
                {slides[index].heading}
              </h2>
              <p className="text-primary opacity-80 mt-3 md:text-xl font-semibold">
                {slides[index].desc}
              </p>
              {button}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Banner;
