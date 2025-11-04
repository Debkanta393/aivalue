import React from "react";

const plans = [
  {
    name: "SILVER",
    tagline: "Simple Needs APP (SNAPP)",
    price: "$12/month or $97/year",
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
    price: "$979 start-up + $116.40/mo or $97/mo (yearly)",
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
    price: "$9,797 start-up + $596.40/mo or $497/mo (yearly)",
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
    price: "$49,797 start-up + $1,174.80/mo or $979/mo (yearly)",
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

const RecommendedPlan = () => {
  // Pick the recommended plan (for example: PLATINUM)
  const recommended = plans.find((p) => p.name === "PLATINUM");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-black text-white flex flex-col items-center justify-center px-6 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold mb-4">
          Recommended Plan for You
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Based on your growth goals, we recommend our {recommended.name} plan —
          the perfect balance of scalability and smart automation.
        </p>
      </div>

      <div
        className={`relative rounded-3xl border ${recommended.color} bg-gradient-to-br p-[1px] max-w-lg w-full shadow-2xl`}
      >
        <div className="rounded-3xl bg-gray-950 p-8">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-indigo-600 text-xs uppercase px-3 py-1 rounded-full font-semibold tracking-wider">
            Recommended
          </div>

          <h2 className="text-3xl font-bold mb-2">{recommended.name}</h2>
          <p className="text-sm text-gray-400 mb-4">{recommended.tagline}</p>

          <p className="text-2xl font-semibold mb-3">{recommended.price}</p>
          <p className="text-gray-400 mb-6">{recommended.desc}</p>

          <ul className="space-y-3 text-left mb-8">
            {recommended.features.map((feature, index) => (
              <li key={index} className="flex items-start space-x-2">
                <span className="text-green-400 mt-1">✔</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <button className="w-full py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-indigo-500 to-purple-600 hover:opacity-90 transition">
            {recommended.button}
          </button>
        </div>
      </div>

      <p className="text-gray-500 text-sm mt-8">
        Want to explore others?{" "}
        <a
          href="/compareplans"
          className="text-indigo-400 hover:underline transition-colors"
        >
          Compare all plans
        </a>
      </p>
    </div>
  );
};

export default RecommendedPlan;
