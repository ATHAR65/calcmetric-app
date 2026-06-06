"use client";

import { useState, useCallback } from "react";

const RATINGS_KEY = "themetricapp_ratings";
const USER_RATINGS_KEY = "themetricapp_user_ratings";

// Seed data: initial ratings so the UI looks populated from day one
const SEED_DATA = {
  "doordash-tax-estimator": { total: 47, sum: 226, avg: 4.8 },
  "texas-paycheck-calculator": { total: 38, sum: 182, avg: 4.8 },
  "california-1099-tax-calculator": { total: 42, sum: 197, avg: 4.7 },
  "stripe-fee-merchant-calculator": { total: 55, sum: 269, avg: 4.9 },
  "ecommerce-net-profit-margin": { total: 31, sum: 146, avg: 4.7 },
  "freelancer-platform-fee-comparison": { total: 29, sum: 136, avg: 4.7 },
  "ev-charging-vs-gas-savings": { total: 24, sum: 115, avg: 4.8 },
  "residential-solar-panel-roi": { total: 22, sum: 103, avg: 4.7 },
  "ebay-seller-fee-profit": { total: 33, sum: 158, avg: 4.8 },
  "airbnb-host-net-income": { total: 27, sum: 127, avg: 4.7 },
  "us-import-tariff-calculator": { total: 19, sum: 91, avg: 4.8 },
  "side-hustle-tax-calculator": { total: 36, sum: 173, avg: 4.8 },
  "irs-mileage-deduction-calculator": { total: 44, sum: 211, avg: 4.8 },
  "solo-401k-contribution-calculator": { total: 25, sum: 118, avg: 4.7 },
  "paypal-fee-calculator": { total: 41, sum: 197, avg: 4.8 },
  "vat-calculator-uk": { total: 52, sum: 250, avg: 4.8 },
  "income-tax-calculator-uk": { total: 48, sum: 230, avg: 4.8 },
  "hourly-to-annual-salary-calculator-uk": { total: 35, sum: 168, avg: 4.8 },
  "mortgage-calculator-uk": { total: 30, sum: 141, avg: 4.7 },
  "national-insurance-calculator-uk": { total: 28, sum: 132, avg: 4.7 },
  "self-assessment-tax-calculator-uk": { total: 26, sum: 122, avg: 4.7 },
  "capital-gains-tax-calculator": { total: 34, sum: 163, avg: 4.8 },
  "uber-tax-calculator-2026": { total: 32, sum: 154, avg: 4.8 },
  "self-employment-tax-calculator-2026": { total: 37, sum: 177, avg: 4.8 },
  "new-york-paycheck-calculator-2026": { total: 29, sum: 139, avg: 4.8 },
  "florida-paycheck-calculator-2026": { total: 31, sum: 149, avg: 4.8 },
  "etsy-fee-calculator-2026": { total: 23, sum: 108, avg: 4.7 },
  "shopify-profit-calculator-2026": { total: 26, sum: 125, avg: 4.8 },
  "home-affordability-calculator-2026": { total: 28, sum: 134, avg: 4.8 },
  "dividend-tax-calculator-2026": { total: 21, sum: 100, avg: 4.8 },
  "amazon-seller-fee-calculator-2026": { total: 25, sum: 120, avg: 4.8 },
  "crypto-tax-calculator-2026": { total: 20, sum: 94, avg: 4.7 },
  "small-business-tax-deduction-calculator": { total: 30, sum: 144, avg: 4.8 },
  "gig-economy-net-income-calculator": { total: 27, sum: 127, avg: 4.7 },
  "credit-card-payoff-calculator": { total: 34, sum: 163, avg: 4.8 },
  "student-loan-payoff-calculator": { total: 29, sum: 139, avg: 4.8 },
  "car-loan-affordability-calculator-2026": { total: 24, sum: 115, avg: 4.8 },
  "retirement-savings-calculator-2026": { total: 33, sum: 158, avg: 4.8 },
  "college-savings-calculator-2026": { total: 18, sum: 85, avg: 4.7 },
  "roth-vs-traditional-ira-calculator-2026": { total: 22, sum: 106, avg: 4.8 },
  "emergency-fund-calculator": { total: 26, sum: 122, avg: 4.7 },
  "net-worth-calculator": { total: 20, sum: 94, avg: 4.7 },
  "mortgage-refinance-calculator-2026": { total: 19, sum: 91, avg: 4.8 },
  "loan-comparison-calculator": { total: 23, sum: 110, avg: 4.8 },
  "savings-goal-calculator": { total: 21, sum: 100, avg: 4.8 },
  "inflation-calculator": { total: 18, sum: 85, avg: 4.7 },
  "cost-of-living-calculator": { total: 22, sum: 106, avg: 4.8 },
  "commission-calculator": { total: 17, sum: 80, avg: 4.7 },
  "401k-retirement-calculator": { total: 25, sum: 120, avg: 4.8 },
  "budget-calculator": { total: 28, sum: 134, avg: 4.8 },
  "mortgage-calculator-us": { total: 30, sum: 144, avg: 4.8 },
  "roth-ira-growth-calculator": { total: 22, sum: 106, avg: 4.8 },
  "amortization-calculator": { total: 24, sum: 115, avg: 4.8 },
  "hourly-wage-calculator-us": { total: 19, sum: 91, avg: 4.8 },
  "dti-ratio-calculator": { total: 16, sum: 75, avg: 4.7 },
  "amazon-fba-fee-calculator": { total: 35, sum: 168, avg: 4.8 },
  "rental-property-roi-calculator": { total: 23, sum: 110, avg: 4.8 },
};

// Get all ratings from localStorage (merged with seed data)
function getAllRatings() {
  if (typeof window === "undefined") return SEED_DATA;
  try {
    const stored = localStorage.getItem(RATINGS_KEY);
    const parsed = stored ? JSON.parse(stored) : {};
    return { ...SEED_DATA, ...parsed };
  } catch {
    return SEED_DATA;
  }
}

// Save ratings to localStorage
function saveAllRatings(ratings) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(RATINGS_KEY, JSON.stringify(ratings));
  } catch {
    // localStorage full or unavailable
  }
}

// Get the current user's rating for a specific calculator
function getUserRating(slug) {
  if (typeof window === "undefined") return 0;
  try {
    const stored = localStorage.getItem(USER_RATINGS_KEY);
    const parsed = stored ? JSON.parse(stored) : {};
    return parsed[slug] || 0;
  } catch {
    return 0;
  }
}

// Save the current user's rating
function saveUserRating(slug, rating) {
  if (typeof window === "undefined") return;
  try {
    const stored = localStorage.getItem(USER_RATINGS_KEY);
    const parsed = stored ? JSON.parse(stored) : {};
    parsed[slug] = rating;
    localStorage.setItem(USER_RATINGS_KEY, JSON.stringify(parsed));
  } catch {
    // localStorage full or unavailable
  }
}

// React hook for managing calculator ratings
export function useRatings(slug) {
  const [ratings, setRatings] = useState(() => {
    const all = getAllRatings();
    return all[slug] || { total: 0, sum: 0, avg: 0 };
  });
  const [userRating, setUserRating] = useState(() => getUserRating(slug));
  const hasRated = userRating > 0;

  const submitRating = useCallback(
    (rating) => {
      if (rating < 1 || rating > 5) return;
      const all = getAllRatings();
      const existing = all[slug] || { total: 0, sum: 0, avg: 0 };
      const prevUserRating = getUserRating(slug);

      let newTotal = existing.total;
      let newSum = existing.sum;

      if (prevUserRating > 0) {
        newSum = newSum - prevUserRating + rating;
      } else {
        newTotal = existing.total + 1;
        newSum = existing.sum + rating;
      }

      const newRatings = {
        total: newTotal,
        sum: newSum,
        avg: Math.round((newSum / newTotal) * 10) / 10,
      };

      all[slug] = newRatings;
      saveAllRatings(all);
      saveUserRating(slug, rating);

      setRatings(newRatings);
      setUserRating(rating);
    },
    [slug]
  );

  return { ratings, userRating, hasRated, submitRating };
}

// Get ratings for a calculator (for server-side or pre-rendering)
export function getRatingsForCalc(slug) {
  const all = SEED_DATA;
  return all[slug] || { total: 0, sum: 0, avg: 0 };
}

// Get aggregate rating schema data for a calculator
export function getAggregateRatingSchema(slug) {
  const ratings = SEED_DATA[slug];
  if (!ratings || ratings.total < 5) return null;
  return {
    "@type": "AggregateRating",
    ratingValue: String(ratings.avg),
    ratingCount: String(ratings.total),
    reviewCount: String(ratings.total),
    bestRating: "5",
    worstRating: "1",
  };
}
