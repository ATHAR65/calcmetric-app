"use client";

import { useState } from "react";

export default function StarRating({
  rating = 0,
  total = 5,
  size = "md",
  interactive = false,
  onRate,
  userRating = 0,
}) {
  const [hovered, setHovered] = useState(0);

  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  const starSize = sizeClasses[size] || sizeClasses.md;

  return (
    <div
      className="inline-flex items-center gap-0.5"
      onMouseLeave={() => interactive && setHovered(0)}
    >
      {Array.from({ length: total }, (_, i) => {
        const starNum = i + 1;
        const displayRating = interactive && hovered > 0 ? hovered : rating;
        const filled = starNum <= Math.round(displayRating);

        return (
          <button
            key={i}
            type="button"
            disabled={!interactive}
            onClick={() => interactive && onRate && onRate(starNum)}
            onMouseEnter={() => interactive && setHovered(starNum)}
            className={`${interactive ? "cursor-pointer hover:scale-110" : "cursor-default"} transition-transform duration-150 p-0 border-0 bg-transparent`}
            aria-label={`${starNum} star${starNum !== 1 ? "s" : ""}`}
          >
            <svg
              className={`${starSize} transition-colors duration-150`}
              viewBox="0 0 20 20"
              fill={filled ? "#E8521A" : "none"}
              stroke={filled ? "#E8521A" : "#C4BAB0"}
              strokeWidth={1.5}
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </button>
        );
      })}
    </div>
  );
}
