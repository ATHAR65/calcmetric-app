# 🧠 Memory File — Blog + Calculator Merge Strategy

## 🎯 User's Request (translated)
- **"Mix ALL blogs with their calculators"** → Har blog page mein uska matching calculator embed karna hai
- **"Also have a separate page"** → Calculator page (tool-only) alag se bhi rehna chahiye
- **"But calculators should NOT have blogs with them (for ranking)"** → Calculator pages clean rahenge (sirf tool), blog content nahi dalna

## 📌 Strategic Decision
**Blog page mein Calculator component embed karna hai**, calculator page mein blog content nahi.

| Page | Kya Hoga |
|---|---|
| `/blog/amazon-seller-fee-calculator-2026/` | Blog content + **Calculator embed** (donon ek sath) |
| `/calculators/amazon-seller-fee-calculator-2026/` | Sirf tool (no change) |

Iss se:
- Blog pages richer hote hain (guide + calculator dono) → better user engagement
- Calculator pages clean rehte hain (tool-focused) → better ranking for tool queries
- Dono pages exist karte hain as separate entities → dual ranking opportunity

## 📊 Scope — Blog Posts with Matching Calculators

**Total blogs:** ~58
**Blogs with matching calculator:** 52
**Blogs without calculator (standalone):** ~6

### Matching Mapping (Blog Slug → Calculator Dir)

| # | Blog Slug | Calculator Dir |
|---|---|---|
| 1 | `capital-gains-tax-calculator-2026` | `capital-gains-tax-calculator` |
| 2 | `rental-property-roi-calculator-2026` | `rental-property-roi-calculator` |
| 3 | `amazon-fba-fee-calculator-2026` | `amazon-fba-fee-calculator` |
| 4 | `hourly-to-annual-salary-calculator-uk-2026` | `hourly-to-annual-salary-calculator-uk` |
| 5 | `us-import-tariff-calculator-2026` | `us-import-tariff-calculator` |
| 6 | `side-hustle-tax-calculator-2026` | `side-hustle-tax-calculator` |
| 7 | `irs-mileage-deduction-calculator-2026` | `irs-mileage-deduction-calculator` |
| 8 | `solo-401k-contribution-calculator-2026` | `solo-401k-contribution-calculator` |
| 9 | `paypal-fee-calculator-2026` | `paypal-fee-calculator` |
| 10 | `texas-paycheck-calculator-2026` | `texas-paycheck-calculator` |
| 11 | `airbnb-host-net-income-2026` | `airbnb-host-net-income` |
| 12 | `residential-solar-panel-roi-2026` | `residential-solar-panel-roi` |
| 13 | `ev-charging-vs-gas-savings-2026` | `ev-charging-vs-gas-savings` |
| 14 | `freelancer-platform-fee-comparison-2026` | `freelancer-platform-fee-comparison` |
| 15 | `california-1099-tax-calculator-2026` | `california-1099-tax-calculator` |
| 16 | `doordash-tax-estimator-2026` | `doordash-tax-estimator` |
| 17 | `stripe-fee-calculator-2026` | `stripe-fee-merchant-calculator` |
| 18 | `ebay-seller-fee-profit-2026` | `ebay-seller-fee-profit` |
| 19 | `ecommerce-profit-margin-calculator-2026` | `ecommerce-net-profit-margin` |
| 20 | `small-business-tax-deduction-calculator-2026` | `small-business-tax-deduction-calculator` |
| 21 | `gig-economy-net-income-calculator-2026` | `gig-economy-net-income-calculator` |
| 22 | `credit-card-payoff-calculator-2026` | `credit-card-payoff-calculator` |
| 23 | `student-loan-payoff-calculator-2026` | `student-loan-payoff-calculator` |
| 24 | `car-loan-affordability-calculator-2026` | `car-loan-affordability-calculator-2026` |
| 25 | `retirement-savings-calculator-2026` | `retirement-savings-calculator-2026` |
| 26 | `college-savings-calculator-2026` | `college-savings-calculator-2026` |
| 27 | `roth-vs-traditional-ira-calculator-2026` | `roth-vs-traditional-ira-calculator-2026` |
| 28 | `emergency-fund-calculator` | `emergency-fund-calculator` |
| 29 | `net-worth-calculator` | `net-worth-calculator` |
| 30 | `mortgage-refinance-calculator-2026` | `mortgage-refinance-calculator-2026` |
| 31 | `loan-comparison-calculator` | `loan-comparison-calculator` |
| 32 | `savings-goal-calculator` | `savings-goal-calculator` |
| 33 | `inflation-calculator` | `inflation-calculator` |
| 34 | `cost-of-living-calculator` | `cost-of-living-calculator` |
| 35 | `commission-calculator` | `commission-calculator` |
| 36 | `401k-retirement-calculator` | `401k-retirement-calculator` |
| 37 | `budget-calculator` | `budget-calculator` |
| 38 | `mortgage-calculator-us` | `mortgage-calculator-us` |
| 39 | `roth-ira-growth-calculator` | `roth-ira-growth-calculator` |
| 40 | `amortization-calculator` | `amortization-calculator` |
| 41 | `hourly-wage-calculator-us` | `hourly-wage-calculator-us` |
| 42 | `dti-ratio-calculator` | `dti-ratio-calculator` |
| 43 | `amazon-seller-fee-calculator-2026` | `amazon-seller-fee-calculator-2026` |
| 44 | `crypto-tax-calculator-2026` | `crypto-tax-calculator-2026` |
| 45 | `dividend-tax-calculator-2026` | `dividend-tax-calculator-2026` |
| 46 | `etsy-fee-calculator-2026` | `etsy-fee-calculator-2026` |
| 47 | `florida-paycheck-calculator-2026` | `florida-paycheck-calculator-2026` |
| 48 | `home-affordability-calculator-2026` | `home-affordability-calculator-2026` |
| 49 | `new-york-paycheck-calculator-2026` | `new-york-paycheck-calculator-2026` |
| 50 | `shopify-profit-calculator-2026` | `shopify-profit-calculator-2026` |
| 51 | `uber-tax-calculator-2026` | `uber-tax-calculator-2026` |
| 52 | `mortgage-calculator-uk-2026` | `mortgage-calculator-uk` |
| 53 | `national-insurance-calculator-uk-2026` | `national-insurance-calculator-uk` |
| 54 | `self-assessment-tax-calculator-uk-2026` | `self-assessment-tax-calculator-uk` |
| 55 | `income-tax-calculator-uk-2026` | `income-tax-calculator-uk` |
| 56 | `vat-calculator-uk-2026` | `vat-calculator-uk` |

### Standalone Blogs (No Matching Calculator)
- `self-employment-tax-tips-2026` — general tips, no tool
- `stripe-vs-paypal-fees-2026` — comparison article, no tool
- `is-solar-worth-it-2026` — editorial, related to solar-panel-roi calculator but different name

## 🛠️ Implementation Plan

### Phase 1: Batch Script
1. Create `scripts/embed-calculators-in-blogs.js` that:
   - Reads each blog page.js
   - Detects if matching calculator exists (querying a mapping)
   - Adds `import Calculator from "../../calculators/[path]/Calculator"` 
   - Replaces "Try the Calculator Now" CTA sections with actual `<Calculator />` embed
   - Wraps calculator in a clean `not-prose` container

### Phase 2: Manual Fixes
2. Handle edge cases (slug mismatches, import path differences)
3. Ensure "use client" wrapper if needed (Calculator components are client-side)

### Phase 3: Validation
4. Build & verify no errors
5. Code review
6. Test a few blog pages visually

### What NOT to do ❌
- DO NOT add blog content to calculator pages
- DO NOT delete blog pages
- DO NOT change calculator functionality

## ⚠️ Technical Considerations
- Calculator components use `"use client"` — blogs are server components. Need to create a wrapper Client Component to embed client components in server components.
- Import paths need careful handling (blog is at `src/app/blog/[slug]/` and calculator is at `src/app/calculators/[dir]/`)
- Each blog currently has "Try the Calculator Now" CTA sections that link to calculator page — replace these with actual embed
