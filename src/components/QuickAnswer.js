/**
 * QuickAnswer — A highlighted box that gives a direct, one-sentence answer
 * to the main question on the page. Helps with AI Overviews and featured snippets.
 */
export default function QuickAnswer({ text }) {
  if (!text) return null;
  return (
    <div className="not-prose my-6 flex items-start gap-3 rounded-xl border border-[#E8521A]/20 bg-[#FFF5F0] px-5 py-4">
      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E8521A] text-white text-[10px] font-bold">
        ✓
      </span>
      <p className="text-sm leading-relaxed text-[#1A1410]">
        <strong className="font-semibold">Quick Answer: </strong>
        {text}
      </p>
    </div>
  );
}
