// Server-safe ratings seed data (no "use client").
// Intentionally EMPTY: this previously held fabricated rating counts that were
// shown on-page and emitted as AggregateRating schema, violating Google's
// review-snippet policy. Ratings now start from real user input only (stored in
// localStorage). Populate this from a genuine ratings backend if/when one exists.
export const RATINGS_SEED_DATA = {};

// IMPORTANT: returns null unless real, on-page user ratings exist for the slug.
// Emitting AggregateRating from seeded/fabricated counts violates Google's
// review-snippet policy and risks a "Spammy structured markup" manual action.
// Wire this up to a real ratings store before returning an AggregateRating object.
export function getAggregateRatingSchema(/* slug */) {
  return null;
}
