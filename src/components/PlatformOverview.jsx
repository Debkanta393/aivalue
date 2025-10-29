import React from "react";
import { motion } from "framer-motion";
import { Brain, FileSearch, Workflow, Compass } from "lucide-react";

const PlatformOverview = () => {
    const features = [
        {
            icon: <Brain className="w-10 h-10 text-indigo-500" />,
            title: "SNAPP (Simple Needs and AI-Powered Profits)",
            desc: "Surface what matters most — streamline insights and decisions instantly.",
        },
        {
            icon: <Workflow className="w-10 h-10 text-indigo-500" />,
            title: "Process-Mining Engine",
            desc: "Capture real workflows and identify bottlenecks hidden in daily operations.",
        },
        {
            icon: <FileSearch className="w-10 h-10 text-indigo-500" />,
            title: "Document Intelligence",
            desc: "Scan contracts, invoices, and service records to uncover hidden value.",
        },
        {
            icon: <Compass className="w-10 h-10 text-indigo-500" />,
            title: "Profit Pathfinding Plan",
            desc: "Turn insights into action with a clear roadmap for measurable results.",
        },
    ];

    const useCases = [
        "SMBs moving from manual to intelligent operations.",
        "Firms wanting AI without large data science teams.",
        "Businesses with legacy systems or fragmented data.",
        "Any organisation seeking faster ROI from AI.",
    ];

    const benefits = [
        { title: "Rapid Deployment", desc: "Start quickly and achieve early wins with minimal setup." },
        { title: "Scalable Architecture", desc: "Grow confidently with a platform built for expansion." },
        { title: "Explainable Results", desc: "Get transparent metrics and business-facing insights." },
        { title: "Support & Guidance", desc: "We partner with you to ensure successful adoption and growth." },
    ];

    return (
        <section className="relative bg-gradient-to-br from-indigo-50 via-white to-indigo-100 overflow-hidden mt-20">
            {/* Decorative background gradient blobs */}
            <div className="absolute -top-32 -left-20 w-96 h-96 bg-indigo-200 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute top-1/3 -right-32 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-40"></div>

            <div className="relative max-w-7xl mx-auto text-center mb-20">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight"
                >
                    Solutions
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto"
                >
                    Our Platform:{" "}
                    <span className="font-bold bg-[#b89b5c] text-transparent bg-clip-text">
                        AvalueI
                    </span>
                </motion.p>
            </div>

            {/* Platform Features */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-10 py-16 px-6 rounded-3xl overflow-hidden
             text-white"
            >
                {/* background pattern grid */}
                <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_1px_1px,#4ade80_1px,transparent_0)] bg-[size:24px_24px]" />

                {/* light gradient blobs for energy */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-green-400/20 rounded-full blur-3xl opacity-50" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl opacity-50" />

                {features.map((f, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ scale: 1.06, y: -4 }}
                        className="relative z-10 group bg-white/5 border border-white/10 shadow-[0_0_25px_rgba(0,255,200,0.05)]
                 hover:shadow-[0_0_35px_rgba(34,211,238,0.3)] rounded-2xl p-8 transition duration-300 backdrop-blur-lg bg-gradient-to-br from-[#0a192f] via-[#0e2438] to-[#142d47] "
                    >
                        {/* icon bubble */}
                        <div className="mb-6 flex justify-center items-center">
                            <div className="bg-gradient-to-br from-green-400/30 to-cyan-400/30 p-4 rounded-full 
                        group-hover:from-green-400 group-hover:to-cyan-400 group-hover:text-white transition duration-300">
                                {f.icon}
                            </div>
                        </div>

                        <h3 className="font-semibold text-lg md:text-xl text-white mb-3 text-center group-hover:text-cyan-300 transition duration-300">
                            {f.title}
                        </h3>
                        <p className="text-gray-300 text-sm text-center leading-relaxed">
                            {f.desc}
                        </p>
                    </motion.div>
                ))}
            </motion.div>


            {/* === USE CASES SECTION === */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative py-20 px-6 md:px-12 rounded-3xl overflow-hidden bg-gradient-to-b from-white via-indigo-50 to-blue-50"
            >
                {/* subtle decorative gradient blobs */}
                <div className="absolute -top-20 -left-20 w-96 h-96 bg-indigo-200 rounded-full blur-3xl opacity-30"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-40"></div>

                {/* Heading */}
                <div className="relative z-10 text-center mb-14">
                    <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                        Use-Cases / Who It’s For
                    </h3>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Empowering businesses to transform operations and accelerate results with AI.
                    </p>
                </div>

                {/* Cards */}
                <ul className="relative z-10 max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
                    {useCases.map((u, i) => (
                        <motion.li
                            key={i}
                            whileHover={{ scale: 1.05, y: -4 }}
                            className="group bg-white shadow-lg hover:shadow-2xl rounded-2xl p-6 border border-transparent hover:border-indigo-200 transition duration-300"
                        >
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center text-white font-bold text-lg">
                                        {i + 1}
                                    </div>
                                </div>
                                <div>
                                    <p className="text-gray-800 font-medium group-hover:text-indigo-600 transition">
                                        {u}
                                    </p>
                                </div>
                            </div>
                        </motion.li>
                    ))}
                </ul>
            </motion.div>

            {/* === FEATURES & BENEFITS SECTION === */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative py-24 px-6 md:px-12 bg-gradient-to-tr from-indigo-100 via-white to-blue-100 rounded-3xl overflow-hidden"
            >
                {/* decorative accent rings */}
                <div className="absolute -right-40 top-10 w-[500px] h-[500px] border-[80px] border-indigo-200/40 rounded-full blur-2xl"></div>
                <div className="absolute -left-40 bottom-0 w-[500px] h-[500px] border-[80px] border-blue-200/30 rounded-full blur-2xl"></div>

                {/* Heading */}
                <div className="relative z-10 text-center mb-16">
                    <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                        Features & Benefits
                    </h3>
                    <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                        Designed for speed, scalability, and clarity — empowering teams to grow with confidence.
                    </p>
                </div>

                {/* Benefits Cards */}
                <div className="relative z-10 grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    {benefits.map((b, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.05 }}
                            className="group bg-white border border-indigo-100 shadow-md hover:shadow-2xl rounded-2xl p-6 transition duration-300 hover:-translate-y-1"
                        >
                            <div className="mb-3 w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center text-white font-bold text-lg">
                                {String.fromCharCode(65 + i)}
                            </div>
                            <h4 className="font-semibold text-lg text-gray-900 mb-2 group-hover:text-indigo-600 transition">
                                {b.title}
                            </h4>
                            <p className="text-gray-600 text-sm leading-relaxed">{b.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

        </section>
    );
};

export default PlatformOverview;
