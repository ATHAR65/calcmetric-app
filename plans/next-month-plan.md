# 📅 Agle Month Ka Plan — Remaining 8 Calculators

## Progress So Far ✅

| Phase | Calculators | Status |
|-------|------------|--------|
| Phase 1 | 15 original calculators | ✅ Complete |
| Phase 2 | 10+ mid-tier calculators + UK calculators | ✅ Complete |
| Phase 3 | Car Loan Affordability + Retirement Savings | ✅ Complete |
| Phase 4 | College Savings + Roth vs IRA | ✅ Complete |

**Total So Far: ~35+ calculators**

---

## Baqi 8 Calculators — Hafta 1

### Day 1: Emergency Fund + Net Worth Calculator
| Calculator | Slug | Tag | Icon |
|-----------|------|-----|------|
| **Emergency Fund Calculator** | `emergency-fund-calculator` | Personal Finance | 🆘 |
| **Net Worth Calculator** | `net-worth-calculator` | Personal Finance | 📊 |

### Day 2: Mortgage Refinance + Loan Comparison
| Calculator | Slug | Tag | Icon |
|-----------|------|-----|------|
| **Mortgage Refinance Calculator** | `mortgage-refinance-calculator-2026` | Real Estate | 🏠 |
| **Loan Comparison Calculator** | `loan-comparison-calculator` | Loans | 💰 |

### Day 3: Savings Goal + Inflation Calculator
| Calculator | Slug | Tag | Icon |
|-----------|------|-----|------|
| **Savings Goal Calculator** | `savings-goal-calculator` | Savings | 🎯 |
| **Inflation Calculator** | `inflation-calculator` | Financial Tools | 📈 |

### Day 4: Cost of Living + Commission Calculator
| Calculator | Slug | Tag | Icon |
|-----------|------|-----|------|
| **Cost of Living Calculator** | `cost-of-living-calculator` | Financial Tools | 🏙️ |
| **Commission Calculator** | `commission-calculator` | Business | 💼 |

### Day 5: Catch-up + Final Push
- Sitemap update check
- Build test
- Bug fixes
- Final push to GitHub

---

## Per Calculator Execution Steps

### Step 1: Calculator Files
```bash
mkdir -p "src/app/calculators/{slug}"
# Create: Calculator.js, layout.js, page.js
```

### Step 2: Blog Post
```bash
mkdir -p "src/app/blog/{slug}"
# Create page.js
```

### Step 3: Registration
Edit these files:
- `src/lib/siteConfig.js` — Add to `calculators[]` + `blogPosts[]` + `footerColumns`
- `src/app/page.js` — Add to homepage `calculators[]`
- `src/components/RelatedCalculators.js` — Add entry + cross-links

### Step 4: Build + Review
```bash
npm run build 2>&1 | tail -40
```

---

## Prompt Usage

Har naye calculator ke liye yeh prompts use karo:

1. **Calculator banane ke liye:** `plans/calculator-prompt.md`
2. **Blog article ke liye:** `plans/blog-prompt.md`
3. **SEO/metadata ke liye:** `plans/seo-prompt.md`

Bas bolo: *"Phase 5 shuru karein — Day 1: Emergency Fund Calculator aur Net Worth Calculator banayein"*
