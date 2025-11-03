const plans = [
  {
    id: "silver",
    name: "SILVER",
    tagline: "Simple Needs APP (SNAPP)",
    price: "$10/month or $97/year",
    desc: "A private, secure way to chat with your data and get quick insights.",
    color: "from-gray-700 to-gray-900 border-gray-500",
    button: "Current Plan",
    features: [
      "Pick 1 area: Business or Personal",
      "30-min setup call & quick wins",
      "‘Meet Maria’ story alignment",
    ],
    details: {
      overview:
        "The Silver Plan (SNAPP) is built for individuals or small business owners who want quick, AI-powered insights without complex integrations. It’s your lightweight companion for everyday productivity, whether you’re managing personal goals or tracking small business tasks.",
      whoFor:
        "Perfect for freelancers, early-stage founders, and individuals who want to experiment with AI productivity tools in one focused area — without the heavy lift.",
      benefits: [
        "Chat directly with your data — securely and privately.",
        "Set up in under 30 minutes with our onboarding call.",
        "Stay aligned with a personalized ‘Meet Maria’ story session.",
        "Affordable entry point with flexible monthly or annual options.",
      ],
      includes: [
        "1 project area (choose Business or Personal).",
        "Secure cloud-based AI workspace.",
        "Email & chat support.",
        "Access to member-only community events.",
      ],
    },
    isCurrent: true,
  },
  {
    id: "gold",
    name: "GOLD",
    tagline: "APP-rentice",
    price: "$979 start-up + $97/month",
    desc: "Streamline your workflows into one intelligent, unified app.",
    color: "from-yellow-900 to-amber-900 border-yellow-500",
    button: "Upgrade to Gold",
    features: [
      "Unified dashboard for 3 projects",
      "3 ‘Meet Maria’ stories to align goals",
      "3 hrs ROI coaching",
      "ROI dashboards unlocked",
    ],
    details: {
      overview:
        "The Gold Plan is for professionals ready to automate repetitive tasks and unify multiple workflows. It’s your personal apprentice — helping you streamline, organize, and optimize your day-to-day operations.",
      whoFor:
        "Ideal for consultants, small business teams, and creators who want to reduce manual work and get AI-assisted workflow insights.",
      benefits: [
        "Centralized dashboard for tracking multiple goals or projects.",
        "ROI coaching to ensure measurable outcomes from your systems.",
        "Custom ‘Meet Maria’ stories to keep your strategy aligned.",
        "Unlock visual dashboards to measure impact and growth.",
      ],
      includes: [
        "3 connected project spaces.",
        "ROI-driven coaching (3 hrs included).",
        "Personalized onboarding support.",
        "Ongoing app performance tracking.",
      ],
    },
  },
  {
    id: "platinum",
    name: "PLATINUM",
    tagline: "Con-TextMiner",
    price: "$9,797 start-up + $497/month",
    desc: "Turn messy documents, notes, and emails into structured knowledge.",
    color: "from-indigo-900 to-purple-900 border-purple-500",
    button: "Upgrade to Platinum",
    features: [
      "Dashboard for 6 projects",
      "Knowledge mining features",
      "100 hrs ROI & implementation support",
      "1 Con-TextMiner app",
    ],
    details: {
      overview:
        "The Platinum Plan gives you a powerful AI knowledge engine — converting unstructured data (documents, chats, emails) into searchable, insightful knowledge. It’s like having an intelligent research assistant that never forgets.",
      whoFor:
        "Built for mid-sized organizations, research teams, or content-heavy businesses that need fast access to insights across large datasets or archives.",
      benefits: [
        "Instantly find insights hidden in documents, messages, and files.",
        "Visualize patterns across projects and teams.",
        "Accelerate decision-making with smart knowledge graphs.",
        "100 hours of hands-on ROI and implementation support included.",
      ],
      includes: [
        "6 active project dashboards.",
        "Custom Con-TextMiner app setup.",
        "Team onboarding and training sessions.",
        "Dedicated ROI strategist support.",
      ],
    },
  },
  {
    id: "diamond",
    name: "DIAMOND",
    tagline: "Pro-FitMiner",
    price: "$49,797 start-up + $979/month",
    desc: "Model your operations, simulate outcomes, and scale profitably.",
    color: "from-blue-900 to-cyan-900 border-blue-500",
    button: "Upgrade to Diamond",
    features: [
      "Portfolio for 9 projects",
      "Custom ROI calls & strategy sessions",
      "1 Pro-FitMiner digital twin app",
      "Full data visualization tools",
    ],
    details: {
      overview:
        "The Diamond Plan is the ultimate system for high-performing businesses. It builds a real-time, digital twin of your operations — letting you simulate decisions, optimize performance, and scale sustainably with precision data modeling.",
      whoFor:
        "Best for established enterprises, investors, or scaling teams who need predictive analytics, real-time dashboards, and multi-project ROI optimization.",
      benefits: [
        "Run ‘what-if’ simulations to test decisions before implementing.",
        "Track and forecast ROI across multiple divisions or teams.",
        "Integrate deep analytics and visualization across all systems.",
        "Personalized strategy sessions with data experts.",
      ],
      includes: [
        "9-project portfolio dashboard.",
        "Pro-FitMiner digital twin setup.",
        "Full suite of visual analytics tools.",
        "Ongoing enterprise support & dedicated success manager.",
      ],
    },
  },
];

export default plans;
