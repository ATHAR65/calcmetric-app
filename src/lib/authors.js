// Author personas for E-E-A-T signals
// Fictional but consistent — modeled after Omni Calculator's approach

export const authors = {
  "sarah-chen": {
    slug: "sarah-chen",
    name: "Sarah Chen, CPA",
    shortName: "Sarah Chen",
    credentials: "CPA",
    title: "Senior Tax Analyst",
    avatar: "/authors/sarah-chen.jpg",
    expertise: [
      "US federal and state tax preparation",
      "Self-employment and gig economy taxes",
      "IRS Schedule C, SE, and Form 1040",
      "Capital gains and investment taxation",
      "Tax deduction optimization",
    ],
    bio: "Sarah Chen is a Certified Public Accountant with over 8 years of experience in tax preparation and financial analysis. She specializes in self-employment tax, gig economy taxation, and investment tax strategies. Before joining TheMetricApp, Sarah worked at a top-20 accounting firm preparing tax returns for small businesses and high-net-worth individuals. She is passionate about making complex tax concepts accessible to freelancers and independent workers.",
    linkedin: "https://www.linkedin.com/in/sarah-chen-cpa",
    calculators: [], // populated dynamically
    blogs: [], // populated dynamically
  },
  "michael-torres": {
    slug: "michael-torres",
    name: "Michael Torres, CFP®",
    shortName: "Michael Torres",
    credentials: "CFP®",
    title: "Financial Planning Specialist",
    avatar: "/authors/michael-torres.jpg",
    expertise: [
      "Retirement planning (401k, IRA, Roth IRA)",
      "Personal budgeting and debt management",
      "Real estate and mortgage analysis",
      "Investment planning and portfolio strategy",
      "Emergency fund and savings planning",
    ],
    bio: "Michael Torres is a Certified Financial Planner® professional with 10 years of experience in personal financial planning. He has helped hundreds of clients develop comprehensive financial plans covering retirement, mortgage planning, debt payoff, and investment strategy. Michael believes that everyone deserves access to quality financial tools and education, regardless of their net worth.",
    linkedin: "https://www.linkedin.com/in/michael-torres-cfp",
    calculators: [],
    blogs: [],
  },
  "james-wilson": {
    slug: "james-wilson",
    name: "James Wilson, MBA",
    shortName: "James Wilson",
    credentials: "MBA",
    title: "E-Commerce & Business Analyst",
    avatar: "/authors/james-wilson.jpg",
    expertise: [
      "E-commerce marketplace operations (Amazon, eBay, Etsy, Shopify)",
      "Payment processing fee analysis (Stripe, PayPal)",
      "Profit margin and ROAS optimization",
      "Import tariff and international trade",
      "Small business financial planning",
    ],
    bio: "James Wilson holds an MBA from the University of Chicago Booth School of Business and has spent 12 years in e-commerce operations and financial analysis. He has managed multi-channel marketplace strategies for brands selling on Amazon, eBay, and Shopify. James specializes in helping online sellers understand the true cost of doing business across platforms and optimize their pricing for maximum profitability.",
    linkedin: "https://www.linkedin.com/in/james-wilson-mba",
    calculators: [],
    blogs: [],
  },
  "priya-patel": {
    slug: "priya-patel",
    name: "Priya Patel",
    shortName: "Priya Patel",
    credentials: "",
    title: "Gig Economy & Freelance Finance Expert",
    avatar: "/authors/priya-patel.jpg",
    expertise: [
      "Gig economy platform taxation (Uber, DoorDash, Lyft)",
      "Freelancer income and expense tracking",
      "Mileage deduction optimization",
      "Freelance platform fee comparison (Upwork, Fiverr)",
      "1099 worker quarterly tax planning",
    ],
    bio: "Priya Patel is a freelance finance expert who has personally navigated the gig economy as a full-time rideshare driver, delivery worker, and freelance consultant. She combines real-world experience with deep research into gig economy taxation, mileage deductions, and platform fee structures. Priya is dedicated to helping gig workers maximize their earnings by minimizing their tax burden through legitimate deductions and strategic planning.",
    linkedin: "https://www.linkedin.com/in/priya-patel-gig",
    calculators: [],
    blogs: [],
  },
};

// Map calculator tags to author slugs
export const calculatorAuthorMap = {
  // Tax category → Sarah Chen (CPA)
  "Tax Tools": "sarah-chen",
  "Self-Employment": "sarah-chen",
  "Tax Deductions": "sarah-chen",
  "Import & Trade": "sarah-chen",

  // Personal Finance → Michael Torres (CFP)
  "Personal Finance": "michael-torres",
  "Retirement": "michael-torres",
  "Savings & Education": "michael-torres",
  "Loans": "michael-torres",
  "Debt Payoff": "michael-torres",
  "Real Estate": "michael-torres",
  "Auto & Loans": "michael-torres",
  "Savings & Planning": "michael-torres",

  // E-Commerce → James Wilson (MBA)
  "E-Commerce": "james-wilson",
  "Merchant Fees": "james-wilson",
  "Marketplace": "james-wilson",

  // Gig Economy → Priya Patel
  "Gig Economy": "priya-patel",
  "Freelancing": "priya-patel",

  // Other → Michael Torres (default)
  "Paycheck": "michael-torres",
  "Automotive": "michael-torres",
  "Energy": "michael-torres",
};

// Map blog categories to author slugs
export const blogAuthorMap = {
  "Tax Tips": "sarah-chen",
  "Investment Tax": "sarah-chen",
  "Cryptocurrency": "sarah-chen",
  "Tax Deductions": "sarah-chen",
  "Import & Trade": "sarah-chen",

  "Retirement Planning": "michael-torres",
  "Personal Finance": "michael-torres",
  "Real Estate": "michael-torres",
  "Debt Payoff": "michael-torres",
  "Loans": "michael-torres",
  "Loans & Credit": "michael-torres",
  "Paycheck": "michael-torres",
  "Payroll": "michael-torres",
  "Paycheck & Salary": "michael-torres",
  "Real Estate Investing": "michael-torres",
  "Auto & Loans": "michael-torres",
  "Savings & Education": "michael-torres",
  "Savings & Planning": "michael-torres",
  "Property": "michael-torres",

  "E-Commerce": "james-wilson",
  "Marketplace Selling": "james-wilson",
  "Merchant Fees": "james-wilson",
  "Payment Processing": "james-wilson",
  "Investing": "james-wilson",

  "Gig Economy": "priya-patel",
  "Freelancing": "priya-patel",

  "Energy Savings": "michael-torres",
  "Automotive": "michael-torres",
  "Salary & Payroll": "michael-torres",
};

export function getAuthorForTag(tag) {
  const slug = calculatorAuthorMap[tag];
  return slug ? authors[slug] : authors["michael-torres"];
}

export function getAuthorForBlogCategory(category) {
  const slug = blogAuthorMap[category];
  return slug ? authors[slug] : authors["michael-torres"];
}
