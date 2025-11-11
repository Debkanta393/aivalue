import React, {useState} from "react";
import SubscriptionForm from "../components/SubscriptionForm"

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
      "1 ‘Meet Maria’ story alignment",
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
      "3 hrs ROI coaching",
      "ROI dashboards unlocked",
      "3 ‘Meet Maria’ stories to align goals",
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
      "Portfolio dashboard for 6 projects",
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
      "Portfolio dashboard for 9 projects",
      "Custom ROI calls & strategy sessions",
      "1 Pro-FitMiner digital twin app",
      "Full data visualization tools",
      "1 story per project to align goals"
    ],
  },
];

const ComparePlans = () => {

  const [showForm, setShowForm] = useState(false);
  const [buttonType, setButtonType] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto text-center mb-14">
        <h1 className="text-4xl font-extrabold mb-4">Compare Plans</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Choose the plan that fits your growth — from personal insights to full business optimization.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative rounded-2xl border ${plan.color} bg-gradient-to-br p-[1px] hover:scale-105 transition-transform`}
          >
            <div className="h-full rounded-2xl bg-gray-950 p-6 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
                <p className="text-sm text-gray-400 mb-3">{plan.tagline}</p>
                <p className="text-xl font-semibold mb-2">{plan.price}</p>
                <p className="text-gray-400 text-sm mb-6">{plan.desc}</p>
                <ul className="space-y-2 text-left">
                  {plan.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start space-x-2 text-gray-300"
                    >
                      <span className="text-green-400 mt-1">✔</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className={`mt-8 w-full py-2.5 rounded-xl font-semibold text-sm transition-colors ${
                  plan.isCurrent
                    ? "bg-gray-700 cursor-default text-gray-300"
                    : "bg-gradient-to-r from-amber-400 to-[#cdb383] hover:from-[#cdb383] hover:to-amber-400 hover:opacity-90 cursor-pointer"
                }`}
                onClick={()=> {setButtonType(plan.name); setShowForm(true)}}
              >
                {plan.button}
              </button>
            </div>
          </div>
        ))}
      </div>
      <SubscriptionForm showForm={showForm} setShowForm={setShowForm} buttonType={buttonType}/>
    </div>
  );
};

export default ComparePlans;
