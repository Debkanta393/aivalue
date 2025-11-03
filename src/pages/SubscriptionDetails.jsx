import React from 'react'
import { useParams, Link } from "react-router-dom";
import plans from './subscriptionData';
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Star, Users, Zap } from "lucide-react";

export default function SubscriptionDetails() {

    const { id } = useParams();
    const plan = plans.find((p) => p.id === id);

    if (!plan) {
        return (
            <div className="text-center mt-20">
                <h2 className="text-2xl font-semibold mb-4">Plan not found</h2>
                <Link to="/dashboard/subscription" className="text-amber-400 underline">
                    Back to Subscriptions
                </Link>
            </div>
        );
    }
    return (
        <div className="min-h-screen py-10 px-4 md:px-6 max-w-7xl mx-auto">
            {/* --- Back Button --- */}
            <Link
                to="/dashboard/subscription"
                className="flex items-center text-gray-400 hover:text-white mb-8 transition-colors"
            >
                <ArrowLeft className="mr-2 w-5 h-5" />
                Back to Plans
            </Link>

            {/* --- Plan Card --- */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`relative bg-gradient-to-br ${plan.color} border border-white/10 rounded-3xl shadow-2xl p-8 md:p-10 backdrop-blur-lg`}
            >
                {/* Decorative Glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-white/5 to-transparent pointer-events-none" />

                {/* --- Header --- */}
                <div className="relative z-10 mb-8">
                    <h1 className="text-5xl font-extrabold tracking-tight mb-2">
                        {plan.name}
                    </h1>
                    <p className="text-amber-400 text-lg font-medium mb-4">
                        {plan.tagline}
                    </p>
                    <div className="flex items-center justify-between flex-wrap gap-2">
                        <p className="text-xl md:text-2xl font-semibold">{plan.price}</p>
                        <div className="flex items-center gap-2 text-sm text-gray-300">
                            <Star className="text-amber-400 w-4 h-4" />
                            <span>Premium Tier</span>
                        </div>
                    </div>
                </div>

                {/* --- Description --- */}
                <p className="text-gray-200 text-lg leading-relaxed mb-8">
                    {plan.desc}
                </p>

                {/* --- Overview Section --- */}
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-8"
                >
                    <div>
                        <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2">
                            Overview
                        </h2>
                        <p className="text-gray-300 leading-relaxed">
                            {plan.details.overview}
                        </p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold mb-3 flex items-center gap-2">
                            Who It's For
                        </h3>
                        <p className="text-gray-200 leading-relaxed">
                            {plan.details.whoFor}
                        </p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold mb-4 text-amber-300">
                            Key Benefits
                        </h3>
                        <ul className="grid sm:grid-cols-2 gap-3">
                            {plan.details.benefits.map((b, i) => (
                                <motion.li
                                    key={i}
                                    whileHover={{ scale: 1.02 }}
                                    className="flex items-start gap-3 bg-white/5 p-3 rounded-xl border border-white/10 hover:bg-white/10 transition"
                                >
                                    <CheckCircle2 className="text-green-400 w-5 h-5 mt-1" />
                                    <span className="text-gray-200">{b}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold mb-4 text-cyan-300">
                            What’s Included
                        </h3>
                        <ul className="grid sm:grid-cols-2 gap-3">
                            {plan.details.includes.map((item, idx) => (
                                <motion.li
                                    key={idx}
                                    whileHover={{ scale: 1.02 }}
                                    className="flex items-start gap-3 bg-white/5 p-3 rounded-xl border border-white/10 hover:bg-white/10 transition"
                                >
                                    <CheckCircle2 className="text-blue-400 w-5 h-5 mt-1" />
                                    <span className="text-gray-200">{item}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </motion.section>

                {/* --- CTA Button --- */}
                <motion.div
                    className="mt-10"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <button className="w-full bg-gradient-to-r from-amber-400 to-[#cdb383] hover:from-[#cdb383] hover:to-amber-400 cursor-pointer text-black font-bold text-lg py-4 rounded-2xl shadow-lg hover:shadow-amber-500/30 transition">
                        {plan.button}
                    </button>
                </motion.div>
            </motion.div>
        </div>
    )
}
