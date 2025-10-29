import React from 'react'
import Typewriter from "typewriter-effect";
import PlatformOverview from '../components/PlatformOverview';
import { motion } from "framer-motion";

export default function Home() {

    const processes = [
        {
            image: "/images/imagine.jpg",
            heading: "Imagine",
            subHeading: "Imagine your business being AI empowered"
        },
        {
            image: "/images/map.jpg",
            heading: "Map",
            subHeading: "Map your experiences (problems, frustrations, or incidents) to solutions"
        },
        {
            image: "/images/mime.jpg",
            heading: "Mine",
            subHeading: "Find value by using your free Simple Needs APP (SNAPP)"
        },
        {
            image: "/images/deliver.jpg",
            heading: "Deliver",
            subHeading: "Deliver Avaluei with actions, automation and predictions"
        }
    ]

    const benefits = [
        {
            image: "/images/ai_logo.png",
            title: "Context-Driven AI",
            heading: "Turn your data, processes and experiences into actionable AI solutions."
        },
        {
            image: "/images/SMBs.png",
            title: "Built for SMBs",
            heading: "Scaled and priced for small & medium enterprises, not just the Fortune 500."
        },
        {
            image: "/images/reports.png",
            title: "Real Outcomes, Not Reports",
            heading: "We don’t hand you a white-paper — we deliver a Profit Pathfinding Plan (P³) that drives execution."
        },
        {
            image: "/images/insight.png",
            title: "Deep & Transparent Insight",
            heading: "Using process mining, knowledge mining and workflow automation to uncover hidden opportunities."
        }
    ]

    const typeText = [
        "AI Architecture",
        "SAP Integration",
        "Process Mining",
        "ERP Modernization",
        "Intelligent Automation",
        "Shared Services Design",

    ]
    return (
        <div className="w-full">
            <div className="w-full bg-gradient-to-br from-[#fcf8eb] to-[#f8f3e0] py-20 px-10">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">

                    {/* Left side — Text Section */}
                    <div className="flex flex-col gap-2 text-center md:text-left max-w-2xl">
                        <h1 className="text-5xl md:text-6xl font-extrabold text-[#2e2e2e] leading-tight">
                            AI Value <span className="text-[#cdb383]">Prospector</span>
                        </h1>

                        <h2 className="text-2xl md:text-3xl font-semibold text-[#4a4a4a]">
                            Find the Hidden Value in Your Business.
                        </h2>

                        <h2 className="text-2xl md:text-3xl font-semibold text-[#cdb383]">
                            We call it <span className="italic font-bold text-[#b89b5c]">AvalueI.</span>
                        </h2>

                        <h2 className="text-2xl md:text-3xl font-semibold text-[#2e2e2e] mt-4">
                            <Typewriter
                                options={{
                                    strings: [
                                        "AI Architecture",
                                        "SAP Integration",
                                        "Process Mining",
                                        "ERP Modernization",
                                        "Intelligent Automation",
                                        "Shared Services Design",
                                    ],
                                    autoStart: true,
                                    loop: true,
                                    deleteSpeed: 50,
                                    delay: 75,
                                }}
                            />
                        </h2>

                        {/* Paragraph */}
                        <p className="text-lg md:text-xl text-gray-700 mt-4 leading-relaxed">
                            Transform your organization with intelligent systems that uncover hidden efficiencies,
                            automate workflows, and scale smarter.
                        </p>

                        {/* Stats section */}
                        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center border border-gray-400 rounded-lg shadow-xl mx-auto w-full max-w-4xl p-4 ">
                            {/* Stat 1 */}
                            <div className="w-full sm:w-1/3 border-b sm:border-b-0 sm:border-r border-gray-300 py-5 text-center">
                                <h3 className="text-[#cdb383] text-3xl font-bold">50k+</h3>
                                <p className="mt-2 font-semibold text-gray-800">Businesses Using AI Insights</p>
                            </div>

                            {/* Stat 2 */}
                            <div className="w-full sm:w-1/3 border-b sm:border-b-0 sm:border-r border-gray-300 py-5 text-center">
                                <h3 className="text-[#cdb383] text-3xl font-bold">120+</h3>
                                <p className="mt-2 font-semibold text-gray-800">Enterprise Clients Worldwide</p>
                            </div>

                            {/* Stat 3 */}
                            <div className="w-full sm:w-1/3 py-5 text-center">
                                <h3 className="text-[#cdb383] text-3xl font-bold">200+</h3>
                                <p className="mt-2 font-semibold text-gray-800">AI Models Built</p>
                            </div>
                        </div>


                        {/* Buttons area */}
                        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6 mt-10">
                            <button className="py-3 px-10 rounded-xl bg-gradient-to-r from-[#e7d3a4] to-[#cdb383] text-[#3b3b3b] font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
                                Meet Maria
                            </button>

                            <button className="py-3 px-10 rounded-xl border-2 border-[#cdb383] text-[#cdb383] font-bold hover:bg-[#cdb383] hover:text-white transition-all duration-300">
                                Start Prospecting
                            </button>
                        </div>


                    </div>

                    {/* Right side — Video Section */}
                    <div className="relative w-full md:w-[50%] h-[350px] md:h-[600px] rounded-3xl overflow-hidden mt-10 md:mt-0">
                        <video
                            src="/AI.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-700"
                        ></video>
                        {/* <div className="absolute inset-0 bg-gradient-to-t from-[#fcf8eb]/40 via-transparent to-transparent"></div> */}
                        <img src="/bg.png" alt="bg image" className="absolute inset-0 via-transparent to-transparent h-full left-0 w-80" />
                    </div>

                </div>
            </div>

            {/* About us */}
            <section className="relative w-full bg-[#fefbf5] py-20 overflow-hidden">
                {/* Subtle background gradient + light orb */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#fffaf5] via-[#fcf8eb] to-[#f8f3e0] opacity-90 -z-10" />
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#cdb383]/25 blur-[180px] rounded-full -z-10" />

                <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-16">

                    {/* ---------- Section Header ---------- */}
                    <div className="text-center">
                        <h2 className="text-5xl md:text-6xl font-extrabold text-[#2e2e2e] mb-4">
                            About <span className="text-[#cdb383]">Us</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#cdb383] via-[#f3826f] to-[#2d3561] mx-auto rounded-full mb-6"></div>
                        <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                            Empowering SMBs to uncover hidden business value through
                            <span className="font-semibold text-[#cdb383]"> AI-driven transformation</span>.
                            We combine strategy, architecture, and intelligence for real outcomes.
                        </p>
                    </div>

                    {/* ---------- Mission Section ---------- */}
                    <div className="flex flex-col md:flex-row items-center gap-12 bg-white/60 backdrop-blur-md border border-[#cdb383]/20 rounded-3xl p-10 md:p-14 shadow-lg hover:shadow-2xl transition-all duration-500 group">
                        <div className="flex-1 space-y-5">
                            <h3 className="text-3xl font-bold text-[#2e2e2e]">Our Mission</h3>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                At <span className="font-semibold text-[#cdb383]">AI Value Prospector</span>,
                                we make AI accessible, practical, and results-focused for SMBs.
                                Every organization holds hidden potential — our goal is to help you
                                reveal it through intelligent automation and measurable impact.
                            </p>
                            <button className="mt-4 px-6 py-3 rounded-lg bg-gradient-to-r from-[#fefaf4] to-[#cdb383] text-[#3b3b3b] font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
                                Learn More
                            </button>
                        </div>
                        {/* <div className="flex-1 flex justify-center"> */}
                        <img
                            src="/images/mission.jpg"
                            alt="Our Mission"
                            className="w-[300px] h-[300px] transform transition-transform duration-500 group-hover:scale-110 rounded"
                        />
                        {/* </div> */}
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-6 md:px-12">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#2e2e2e] tracking-wide">
                        Our <span className="text-[#cdb383]">AIVP</span> Process
                    </h2>
                    <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
                        A simple, transparent, and outcome-driven path to uncover your hidden business value.
                    </p>
                </div>

                {/* Process Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {processes.map((item, index) => (
                        <div
                            key={index}
                            className="
          relative p-[2px] rounded-2xl bg-gradient-to-br from-[#cdb383] via-[#f3826f] to-[#2d3561] 
          hover:scale-105 transition-transform duration-300
        "
                        >
                            <div className="flex flex-col justify-between items-center bg-white rounded-2xl h-full py-10 px-6 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                                <div className="flex flex-col items-center text-center">
                                    {/* <div className=" flex items-center justify-center bg-[#fcf8eb] shadow-inner mb-4"> */}
                                    <img src={item.image} alt={item.heading} className="w-20 h-20 object-contain rounded-full" />
                                    {/* </div> */}

                                    <p className="text-2xl font-semibold text-[#cdb383] mb-2">
                                        {item.heading}
                                    </p>
                                    <p className="text-gray-700 text-lg">{item.subHeading}</p>
                                </div>

                                {/* Step Indicator */}
                                <span className="absolute -top-4 -right-4 bg-[#cdb383] text-white w-10 h-10 flex items-center justify-center rounded-full font-bold shadow-md">
                                    {index + 1}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Benefits */}
            <div className='max-w-6xl mx-auto px-6 md:px-12 mt-20'>
                <h2 className='text-center text-4xl uppercase font-bold'>Benefits</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-10'>
                    {benefits.map((item, index) =>
                        <div
                            className="border border-gray-300 flex flex-col justify-between items-center p-4 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:border-[#cdb383]"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-12 h-12"
                            />
                            <p className="text-[#cdb383] text-lg font-semibold mt-2 text-center">
                                {item.title}
                            </p>
                            <p className="text-center mt-2">{item.heading}</p>
                        </div>

                    )}
                </div>
            </div>

            {/* Platform overview */}
            <PlatformOverview />

            <section className="relative w-full bg-[#fefbf5] overflow-hidden">
                {/* ---------- Team Section ---------- */}
                <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-24">
                    <div className="flex flex-col md:flex-row-reverse items-center gap-12 bg-gradient-to-br from-[#fffaf0] via-[#f8ecd0] to-[#f3e7d0] rounded-3xl p-10 md:p-14 shadow-lg hover:shadow-2xl transition-all duration-500">
                        <div className="flex-1 flex justify-center">
                            <img
                                src="/images/armando.jpg"
                                alt="Armando Villarroel"
                                className="w-48 h-48 object-cover rounded-full border-4 border-[#cdb383] shadow-lg hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="flex-1 text-center md:text-left space-y-4">
                            <h3 className="text-3xl font-bold text-[#2e2e2e]">Our Team</h3>
                            <p className="text-2xl font-semibold text-[#cdb383]">
                                Armando Villarroel
                            </p>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                Founder — Strategic transformation consultant architecting AI-led modernization
                                across operations. Passionate about process intelligence, enterprise AI,
                                and unlocking business value through data-driven insights.
                            </p>
                            <a
                                href="https://www.linkedin.com/in/armando-villarroel"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-[#0a66c2] font-semibold hover:underline mt-4"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    className="w-5 h-5"
                                >
                                    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.763 0 5-2.24 5-5v-14c0-2.76-2.237-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.29c-.967 0-1.75-.79-1.75-1.76s.783-1.75 1.75-1.75 1.75.79 1.75 1.75-.783 1.76-1.75 1.76zm13.5 11.29h-3v-5.4c0-1.29-.025-2.95-1.8-2.95-1.8 0-2.075 1.4-2.075 2.85v5.5h-3v-10h2.875v1.35h.041c.4-.75 1.375-1.55 2.825-1.55 3.025 0 3.575 1.99 3.575 4.58v5.62z" />
                                </svg>
                                LinkedIn
                            </a>
                        </div>
                    </div>

                    {/* ---------- Values Section ---------- */}
                    <motion.section
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative py-24 px-6 md:px-12 overflow-hidden bg-gradient-to-b from-white via-indigo-50/30 to-blue-50/20"
                    >
                        {/* --- Decorative Background Elements --- */}
                        <div className="absolute -top-24 -left-20 w-96 h-96 bg-indigo-200/40 blur-3xl rounded-full opacity-50"></div>
                        <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-blue-300/40 blur-3xl rounded-full opacity-40"></div>
                        <div className="absolute top-1/2 left-1/2 w-[40rem] h-[40rem] bg-gradient-to-tr from-indigo-100 via-white to-blue-100 rounded-full blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>

                        {/* --- Content --- */}
                        <div className="relative z-10 text-center max-w-5xl mx-auto">
                            <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
                                Our Approach & Values
                            </h3>
                            <p className="text-gray-600 text-lg mb-14 max-w-2xl mx-auto leading-relaxed">
                                How we think, build, and partner with businesses to achieve long-term AI success.
                            </p>

                            {/* --- Value Cards --- */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                                {[
                                    {
                                        title: "Business-first, not technology-first.",
                                        icon: "💼",
                                        gradient: "from-indigo-500/10 to-indigo-200/20",
                                    },
                                    {
                                        title: "Transparent, measurable outcomes.",
                                        icon: "📊",
                                        gradient: "from-blue-500/10 to-cyan-200/20",
                                    },
                                    {
                                        title: "Partnering over preaching.",
                                        icon: "🤝",
                                        gradient: "from-purple-500/10 to-pink-200/20",
                                    },
                                    {
                                        title: "Continuous improvement and adaptiveness.",
                                        icon: "⚙️",
                                        gradient: "from-amber-500/10 to-yellow-200/20",
                                    },
                                ].map((value, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ y: -6, scale: 1.05 }}
                                        transition={{ type: "spring", stiffness: 200 }}
                                        className={`relative p-8 rounded-3xl shadow-md hover:shadow-2xl border border-white/40 bg-gradient-to-br ${value.gradient} backdrop-blur-xl transition-all duration-300`}
                                    >
                                        {/* Accent circle */}
                                        <div className="absolute top-4 right-4 w-10 h-10 bg-white/30 rounded-full blur-lg"></div>

                                        <div className="text-4xl mb-4">{value.icon}</div>
                                        <p className="text-lg font-medium text-gray-800 leading-snug">
                                            {value.title}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.section>

                </div>
            </section>
        </div>

    )
}
