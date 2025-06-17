import React from 'react';

const AboutUs = () => {
    return (
        <div className="bg-base-200 py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-accent text-center mb-6">About Sharewave</h2>
                <p className="text-center text-accent opacity-80 max-w-2xl mx-auto mb-10">
                    Sharewave is a dynamic knowledge-sharing platform where thinkers, learners, and creators come together to explore ideas and share valuable insights. Whether you're here to read, contribute, or engage in discussions — you're part of a growing wave of knowledge.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="bg-base-100 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
                        <h3 className="text-xl font-semibold text-accent mb-2">🌍 Our Mission</h3>
                        <p className="text-accent opacity-75">
                            To democratize knowledge by creating an open, welcoming space for learners and experts alike to contribute and grow.
                        </p>
                    </div>
                    <div className="bg-base-100 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
                        <h3 className="text-xl font-semibold text-accent mb-2">🤝 Our Community</h3>
                        <p className="text-accent opacity-75">
                            Built on collaboration and curiosity, Sharewave thrives on contributions from diverse voices across the world.
                        </p>
                    </div>
                    <div className="bg-base-100 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
                        <h3 className="text-xl font-semibold text-accent mb-2">🚀 Our Vision</h3>
                        <p className="text-accent opacity-75">
                            To become the go-to hub for insightful content, deep learning, and meaningful digital conversations.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
