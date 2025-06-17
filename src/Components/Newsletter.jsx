import React from 'react';

const Newsletter = () => {
    return (
            <div className="max-w-3xl mx-auto text-center py-10 ">
                <h2 className="text-3xl font-bold text-accent mb-4">
                    Stay in the Loop!
                </h2>
                <p className="text-base text-accent opacity-80 mb-6">
                    Subscribe to our newsletter and get the latest knowledge drops, articles, and tips delivered to your inbox.
                </p>
                <form className="flex flex-col sm:flex-row items-center gap-3 justify-center">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="input input-bordered w-full sm:w-80 focus:outline-none focus:ring-2 focus:ring-info"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-info py-2 rounded-sm cursor-pointer text-base-100 px-6"
                    >
                        Subscribe
                    </button>
                </form>
                <p className="text-xs text-accent mt-3 opacity-70">
                    We respect your privacy. No spam, ever.
                </p>
            </div>
    );
};

export default Newsletter;
