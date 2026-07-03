import Link from "next/link";

/**
 * AuthorBar — E-E-A-T signal component showing author, reviewer, last updated,
 * and cited sources. Mirrors Omni Calculator's trust bar pattern.
 * Supports optional authorSlug for linking to author profile page.
 */
export default function AuthorBar({ updated, author, authorSlug, reviewer, sources }) {
  return (
    <div className="not-prose mb-6 rounded-lg border border-[#e7e5f3] bg-[#f6f5fc] px-4 py-3 text-sm">
      <div className="flex flex-wrap gap-x-6 gap-y-1.5 text-[#5d5a78]">
        {updated && (
          <span className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-[#7c3aed] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 9v7.5" />
            </svg>
            <strong className="font-medium text-[#1d1a33]">Last Updated:</strong> {updated}
          </span>
        )}
        {author && (
          <span className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-[#7c3aed] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
            <strong className="font-medium text-[#1d1a33]">Written by:</strong>{" "}
            {authorSlug ? (
              <Link href={`/authors/${authorSlug}/`} className="text-[#7c3aed] hover:underline font-medium">
                {author}
              </Link>
            ) : (
              <span className="text-[#7c3aed]">{author}</span>
            )}
          </span>
        )}
        {reviewer && (
          <span className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-[#7c3aed] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <strong className="font-medium text-[#1d1a33]">Reviewed by:</strong> {reviewer}
          </span>
        )}
        {sources && sources.length > 0 && (
          <span className="flex items-center gap-1.5 flex-wrap">
            <svg className="w-3.5 h-3.5 text-[#7c3aed] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
            </svg>
            <strong className="font-medium text-[#1d1a33]">Sources:</strong>
            {sources.map((src, i) => (
              <span key={i}>
                <a
                  href={src.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#7c3aed] hover:underline"
                >
                  {src.name}
                </a>
                {i < sources.length - 1 && <span className="mx-1 text-[#928fab]">·</span>}
              </span>
            ))}
          </span>
        )}
      </div>
    </div>
  );
}
