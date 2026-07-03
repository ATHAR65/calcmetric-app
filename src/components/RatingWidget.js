"use client";

import { useState, useEffect, useRef } from "react";
import StarRating from "./StarRating";
import { useRatings } from "@/lib/ratings";

export default function RatingWidget({ slug }) {
  const { ratings, userRating, hasRated, submitRating } = useRatings(slug);
  const [justRated, setJustRated] = useState(false);
  const [selectedRating, setSelectedRating] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleRate = (rating) => {
    setSelectedRating(rating);
  };

  const handleSubmit = () => {
    if (selectedRating === 0) return;
    submitRating(selectedRating);
    setJustRated(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setJustRated(false), 3000);
  };

  return (
    <div className="rounded-[18px] border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-6 shadow-[0_1px_4px_rgba(29,26,51,0.04)] transition-colors duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center gap-6">
        {/* Display: Average Rating — only shown once genuine ratings exist */}
        {ratings.total > 0 && (
          <>
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                <span
                  className="text-[32px] font-bold text-[#1d1a33] leading-none"
                  style={{ fontFamily: "var(--font-heading)", fontWeight: 800 }}
                >
                  {ratings.avg.toFixed(1)}
                </span>
                <div>
                  <StarRating rating={ratings.avg} size="md" />
                  <p
                    className="text-xs text-[#928fab] mt-0.5"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                  >
                    {ratings.total.toLocaleString()} rating{ratings.total !== 1 ? "s" : ""}
                  </p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-12 bg-[#e7e5f3]" />
          </>
        )}

        {/* Interactive: Rate this calculator */}
        <div className="flex-1">
          <p
            className="text-sm font-semibold text-[#1d1a33] mb-2"
            style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
          >
            {hasRated ? "Update your rating" : "Rate this calculator"}
          </p>

          <div className="flex items-center gap-3">
            <StarRating
              rating={userRating || selectedRating}
              size="lg"
              interactive={true}
              onRate={handleRate}
              userRating={userRating}
            />

            {(selectedRating > 0 || hasRated) && (
              <button
                onClick={handleSubmit}
                disabled={selectedRating === 0 && !hasRated}
                className="px-4 py-1.5 text-xs font-semibold text-white bg-[#7c3aed] rounded-full hover:bg-[#6d28d9] disabled:opacity-40 disabled:cursor-not-allowed transition-colors duration-200"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
              >
                {justRated ? "✓ Thanks!" : "Submit"}
              </button>
            )}
          </div>

          {justRated && (
            <p
              className="text-xs text-[#059669] mt-2 font-medium"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Your rating has been recorded. Thank you for your feedback!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
