import React from 'react';
import { FaUsers, FaBookOpen, FaComments } from 'react-icons/fa';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const SharewaveStats = () => {
    const [ref, inView] = useInView({ triggerOnce: false });

    const stats = [
        { icon: <FaBookOpen className="text-info text-4xl mb-4 mx-auto" />, end: 150, label: 'Articles Shared' },
        { icon: <FaUsers className="text-info text-4xl mb-4 mx-auto" />, end: 80, label: 'Active Contributors' },
        { icon: <FaComments className="text-info text-4xl mb-4 mx-auto" />, end: 110, label: 'Discussions Happened' },
    ];

    return (
        <div className="py-16 bg-base-200" ref={ref}>
            <h2 className="text-3xl font-bold text-accent mb-6 text-center">ShareWave in Numbers</h2>
            <p className="text-accent opacity-80 mb-10 text-center">A quick look at our community's impact</p>
            <div ref={ref} className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center max-w-6xl mx-auto">
                {stats.map((item, i) => (
                    <div  key={i} className="bg-base-100 rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300">
                        {item.icon}
                        <h3 className="text-3xl font-bold text-accent">
                            {inView ? <CountUp end={item.end} duration={8} /> : 0}+
                        </h3>
                        <p className="text-accent opacity-70 mt-1">{item.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SharewaveStats;
