import { calculators } from "./siteConfig";

// Topical adjacency. When a calculator's own category has too few siblings to
// fill the "Related Calculators" block, top up from these neighbouring
// categories so every page links out to genuinely related tools (internal
// linking that spreads link equity and reinforces topical clusters for SEO).
const relatedTags = {
  "New": ["Self-Employment", "Gig Economy", "E-Commerce", "Tax Tools"],
  "Tax Tools": ["Self-Employment", "Tax Deductions", "Paycheck", "Gig Economy"],
  "Self-Employment": ["Tax Tools", "Gig Economy", "Tax Deductions", "Freelancing"],
  "Gig Economy": ["Self-Employment", "Tax Tools", "Freelancing", "Paycheck"],
  "Paycheck": ["Tax Tools", "Self-Employment", "Personal Finance"],
  "Merchant Fees": ["E-Commerce", "Marketplace", "Freelancing"],
  "E-Commerce": ["Marketplace", "Merchant Fees", "Freelancing"],
  "Marketplace": ["E-Commerce", "Merchant Fees", "Gig Economy"],
  "Real Estate": ["Loans", "Personal Finance", "Retirement"],
  "Retirement": ["Personal Finance", "Savings & Planning", "Savings & Education"],
  "Savings & Planning": ["Retirement", "Personal Finance", "Savings & Education"],
  "Savings & Education": ["Retirement", "Savings & Planning", "Personal Finance"],
  "Loans": ["Debt Payoff", "Real Estate", "Auto & Loans"],
  "Auto & Loans": ["Loans", "Automotive", "Debt Payoff"],
  "Debt Payoff": ["Loans", "Personal Finance", "Savings & Planning"],
  "Personal Finance": ["Savings & Planning", "Retirement", "Debt Payoff"],
  "Tax Deductions": ["Tax Tools", "Self-Employment", "Gig Economy"],
  "Import & Trade": ["E-Commerce", "Marketplace", "Merchant Fees"],
  "Freelancing": ["Gig Economy", "Self-Employment", "Merchant Fees"],
  "Automotive": ["Energy", "Auto & Loans", "Personal Finance"],
  "Energy": ["Automotive", "Personal Finance", "Real Estate"],
};

// Returns up to `limit` calculators related to the given slug. Deterministic
// (follows the source array order) so server and client render identically.
export function getRelatedCalculators(slug, limit = 4) {
  const currentHref = `/calculators/${slug}`;
  const current = calculators.find((c) => c.href === currentHref);
  if (!current) return [];

  const seen = new Set([currentHref]);
  const result = [];

  const pushFrom = (predicate) => {
    for (const calc of calculators) {
      if (result.length >= limit) break;
      if (seen.has(calc.href)) continue;
      if (predicate(calc)) {
        result.push(calc);
        seen.add(calc.href);
      }
    }
  };

  // 1. Same category.
  pushFrom((c) => c.tag === current.tag);
  // 2. Neighbouring categories, in priority order.
  for (const tag of relatedTags[current.tag] || []) {
    if (result.length >= limit) break;
    pushFrom((c) => c.tag === tag);
  }
  // 3. Last resort: any remaining calculator.
  pushFrom(() => true);

  return result.slice(0, limit);
}
