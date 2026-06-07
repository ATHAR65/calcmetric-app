"use client";

import { useState, useCallback } from "react";

const RATINGS_KEY = "themetricapp_ratings";
const USER_RATINGS_KEY = "themetricapp_user_ratings";

import { RATINGS_SEED_DATA } from "./ratings-data";

const SEED_DATA = RATINGS_SEED_DATA;

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

export { getAggregateRatingSchema } from "./ratings-data";
