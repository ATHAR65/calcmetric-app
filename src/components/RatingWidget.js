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
    <div className="rounded-[18px] border border-[#E8E3DA] bg-white p-6 shadow-[0_1px_4px_rgba(26,20,16,0.04)] transition-colors duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center gap-6">
        {/* Display: Average Rating */}
        <div className="text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
            <span
              className="text-[32px] font-bold text-[#1A1410] leading-none"
              style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800 }}
            >
              {ratings.avg > 0 ? ratings.avg.toFixed(1) : "—"}
            </span>
            <div>
              <StarRating rating={ratings.avg} size="md" />
              <p
                className="text-xs text-[#C4BAB0] mt-0.5"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
              >
                {ratings.total.toLocaleString()} rating{ratings.total !== 1 ? "s" : ""}
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden sm:block w-px h-12 bg-[#E8E3DA]" />

        {/* Interactive: Rate this calculator */}
        <div className="flex-1">
          <p
            className="text-sm font-semibold text-[#1A1410] mb-2"
            style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600 }}
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
                className="px-4 py-1.5 text-xs font-semibold text-white bg-[#E8521A] rounded-full hover:bg-[#D04A16] disabled:opacity-40 disabled:cursor-not-allowed transition-colors duration-200"
                style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600 }}
              >
                {justRated ? "✓ Thanks!" : "Submit"}
              </button>
            )}
          </div>

          {justRated && (
            <p
              className="text-xs text-[#059669] mt-2 font-medium"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Your rating has been recorded. Thank you for your feedback!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
