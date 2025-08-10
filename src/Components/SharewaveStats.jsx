import React from 'react';
import { FaUsers, FaBookOpen, FaComments, FaUserPlus, FaCalendarAlt, FaEnvelopeOpenText } from 'react-icons/fa';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const SharewaveStats = () => {
    const [ref, inView] = useInView({ triggerOnce: false });

    const stats = [
         { icon: <FaBookOpen className="text-info text-4xl mb-4 mx-auto" />, end: 150, label: 'Articles Shared' },
        { icon: <FaUsers className="text-info text-4xl mb-4 mx-auto" />, end: 80, label: 'Active Contributors' },
        { icon: <FaComments className="text-info text-4xl mb-4 mx-auto" />, end: 110, label: 'Discussions Happened' },
        { icon: <FaEnvelopeOpenText className="text-info text-4xl mb-4 mx-auto" />, end: 1200, label: 'Newsletter Subscribers' },
        { icon: <FaCalendarAlt className="text-info text-4xl mb-4 mx-auto" />, end: 45, label: 'Events Hosted' },
        { icon: <FaUserPlus className="text-info text-4xl mb-4 mx-auto" />, end: 350, label: 'Members Joined' },
    ];
    return (
        <div className="py-16 bg-base-200" ref={ref}>
            <h2 className="text-3xl font-bold text-accent mb-6 text-center">ShareWave in Numbers</h2>
            <p className="text-accent opacity-80 mb-10 text-center">A quick look at our community's impact</p>
            <div ref={ref} className="grid lg:grid-cols-6 sm:grid-cols-3 gap-5 text-center">
                {stats.map((item, i) => (
                    <div  key={i} className="bg-base-100 rounded-xl shadow-md p-6 hover:shadow-xl duration-300 transition-all">
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
