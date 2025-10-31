import React from "react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "SILVER",
    tagline: "Simple Needs APP (SNAPP)",
    price: "$10/month or $97/year",
    desc: "A private way to chat with your data and get quick insights.",
    color: "from-gray-700 to-gray-900 border-gray-500",
    button: "Current Plan",
    features: [
      "Pick 1 area: Business or Personal",
      "30-min setup call & quick wins",
      "‘Meet Maria’ story alignment",
    ],
    isCurrent: true,
  },
  {
    name: "GOLD",
    tagline: "APP-rentice",
    price: "$979 start-up + $97/mo",
    desc: "Streamline your workflows into one smart app.",
    color: "from-yellow-600 to-amber-800 border-yellow-500",
    button: "Upgrade to Gold",
    features: [
      "Unified dashboard for 3 projects",
      "3 ‘Meet Maria’ stories to align goals",
      "3 hrs ROI coaching",
      "ROI dashboards unlocked",
    ],
  },
  {
    name: "PLATINUM",
    tagline: "Con-TextMiner",
    price: "$9,797 start-up + $497/mo",
    desc: "Turn messy docs & emails into a searchable brain.",
    color: "from-purple-700 to-indigo-900 border-purple-500",
    button: "Upgrade to Platinum",
    features: [
      "Dashboard for 6 projects",
      "Knowledge mining features",
      "100 hrs ROI & implementation support",
      "1 Con-TextMiner app",
    ],
  },
  {
    name: "DIAMOND",
    tagline: "Pro-FitMiner",
    price: "$49,797 start-up + $979/mo",
    desc: "Model your operations, simulate fixes & scale profitably.",
    color: "from-blue-700 to-cyan-900 border-blue-500",
    button: "Upgrade to Diamond",
    features: [
      "Portfolio for 9 projects",
      "Custom ROI calls & strategy sessions",
      "1 Pro-FitMiner digital twin app",
      "Full data visualization tools",
    ],
  },
];

const SubscriptionPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 px-6">
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h1 className="text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#e7d3a4] to-[#cdb383]">
          Upgrade Your Experience
        </h1>
        <p className="text-gray-400 text-lg">
          Choose the plan that best fits your journey — unlock AI-powered tools,
          insights, and automation designed to accelerate your success.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className={`relative p-[2px] rounded-3xl bg-gradient-to-br ${plan.color} border-2 shadow-[0_0_30px_-10px_rgba(0,0,0,0.7)] transition-transform`}
          >
            <div className="bg-black/80 backdrop-blur-xl rounded-3xl p-8 flex flex-col h-full">
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-1">{plan.name}</h2>
                <p className="text-amber-400 font-medium mb-4">{plan.tagline}</p>
                <p className="text-2xl font-semibold mb-2">{plan.price}</p>
                <p className="text-gray-400 mb-6">{plan.desc}</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-8">
                  {plan.features.map((f, index) => (
                    <li key={index}>{f}</li>
                  ))}
                </ul>
              </div>

              <button
                disabled={plan.isCurrent}
                className={`py-3 rounded-xl text-lg font-semibold transition-all ${
                  plan.isCurrent
                    ? "bg-gray-700 text-gray-300 cursor-not-allowed"
                    : "bg-gradient-to-r from-amber-400 to-[#cdb383] hover:from-[#cdb383] hover:to-amber-400 shadow-lg shadow-cyan-500/20 cursor-pointer"
                }`}
              >
                {plan.button}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionPage;
