const categoryStyles = {
  "Tax Tips": { gradient: "from-amber-500/20 to-amber-500/5", emoji: "💰", color: "#B45309", bg: "rgba(180,83,9,0.18)" },
  "Investment Tax": { gradient: "from-emerald-500/20 to-emerald-500/5", emoji: "📈", color: "#059669", bg: "rgba(5,150,105,0.18)" },
  "Gig Economy": { gradient: "from-orange-500/20 to-orange-500/5", emoji: "🚗", color: "#E8521A", bg: "rgba(232,82,26,0.18)" },
  "E-Commerce": { gradient: "from-blue-500/20 to-blue-500/5", emoji: "📦", color: "#2563EB", bg: "rgba(37,99,235,0.18)" },
  "Merchant Fees": { gradient: "from-indigo-500/20 to-indigo-500/5", emoji: "💳", color: "#4F46E5", bg: "rgba(79,70,229,0.18)" },
  "Real Estate": { gradient: "from-green-500/20 to-green-500/5", emoji: "🏡", color: "#059669", bg: "rgba(5,150,105,0.18)" },
  "Real Estate Investing": { gradient: "from-teal-500/20 to-teal-500/5", emoji: "📊", color: "#0D9488", bg: "rgba(13,148,136,0.18)" },
  "Retirement Planning": { gradient: "from-purple-500/20 to-purple-500/5", emoji: "🏦", color: "#7C3AED", bg: "rgba(124,58,237,0.18)" },
  "Personal Finance": { gradient: "from-pink-500/20 to-pink-500/5", emoji: "💼", color: "#EC4899", bg: "rgba(236,72,153,0.18)" },
  "Savings & Planning": { gradient: "from-cyan-500/20 to-cyan-500/5", emoji: "🎯", color: "#0891B2", bg: "rgba(8,145,178,0.18)" },
  "Savings & Education": { gradient: "from-violet-500/20 to-violet-500/5", emoji: "🎓", color: "#7C3AED", bg: "rgba(124,58,237,0.18)" },
  "Debt Payoff": { gradient: "from-red-500/20 to-red-500/5", emoji: "💳", color: "#DC2626", bg: "rgba(220,38,38,0.18)" },
  "Salary & Payroll": { gradient: "from-sky-500/20 to-sky-500/5", emoji: "💵", color: "#0284C7", bg: "rgba(2,132,199,0.18)" },
  "Paycheck": { gradient: "from-sky-500/20 to-sky-500/5", emoji: "💵", color: "#0284C7", bg: "rgba(2,132,199,0.18)" },
  "Paycheck & Salary": { gradient: "from-sky-500/20 to-sky-500/5", emoji: "💵", color: "#0284C7", bg: "rgba(2,132,199,0.18)" },
  "Payroll": { gradient: "from-sky-500/20 to-sky-500/5", emoji: "💵", color: "#0284C7", bg: "rgba(2,132,199,0.18)" },
  "Import & Trade": { gradient: "from-yellow-500/20 to-yellow-500/5", emoji: "🛃", color: "#CA8A04", bg: "rgba(202,138,4,0.18)" },
  "Energy Savings": { gradient: "from-lime-500/20 to-lime-500/5", emoji: "🌞", color: "#65A30D", bg: "rgba(101,163,13,0.18)" },
  "Automotive": { gradient: "from-slate-500/20 to-slate-500/5", emoji: "⚡", color: "#475569", bg: "rgba(71,85,105,0.18)" },
  "Freelancing": { gradient: "from-rose-500/20 to-rose-500/5", emoji: "💼", color: "#DC2626", bg: "rgba(220,38,38,0.18)" },
  "Tax Deductions": { gradient: "from-amber-600/20 to-amber-600/5", emoji: "📋", color: "#B45309", bg: "rgba(180,83,9,0.18)" },
  "Marketplace Selling": { gradient: "from-blue-600/20 to-blue-600/5", emoji: "🏷️", color: "#2563EB", bg: "rgba(37,99,235,0.18)" },
  "Payment Processing": { gradient: "from-indigo-500/20 to-indigo-500/5", emoji: "💳", color: "#4F46E5", bg: "rgba(79,70,229,0.18)" },
  "Property": { gradient: "from-green-500/20 to-green-500/5", emoji: "🏡", color: "#059669", bg: "rgba(5,150,105,0.18)" },
  "Tax Tools": { gradient: "from-amber-500/20 to-amber-500/5", emoji: "🧮", color: "#B45309", bg: "rgba(180,83,9,0.18)" },
  "Cryptocurrency": { gradient: "from-yellow-500/20 to-yellow-500/5", emoji: "₿", color: "#CA8A04", bg: "rgba(202,138,4,0.18)" },
  "Investing": { gradient: "from-emerald-500/20 to-emerald-500/5", emoji: "📈", color: "#059669", bg: "rgba(5,150,105,0.18)" },
  "Loans": { gradient: "from-orange-400/20 to-orange-400/5", emoji: "💰", color: "#E8521A", bg: "rgba(232,82,26,0.18)" },
  "Loans & Credit": { gradient: "from-orange-400/20 to-orange-400/5", emoji: "💰", color: "#E8521A", bg: "rgba(232,82,26,0.18)" },
  "Auto & Loans": { gradient: "from-slate-500/20 to-slate-500/5", emoji: "🚘", color: "#475569", bg: "rgba(71,85,105,0.18)" },
};

const defaultStyle = { gradient: "from-[#E8521A]/20 to-[#E8521A]/5", emoji: "📊", color: "#E8521A", bg: "rgba(232,82,26,0.18)" };

export function getCategoryStyle(category) {
  return categoryStyles[category] || defaultStyle;
}
