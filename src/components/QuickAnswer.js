/**
 * QuickAnswer — A highlighted box that gives a direct, one-sentence answer
 * to the main question on the page. Helps with AI Overviews and featured snippets.
 */
export default function QuickAnswer({ text }) {
  if (!text) return null;
  return (
    <div className="not-prose my-6 flex items-start gap-3 rounded-xl border border-[#6366F1]/20 bg-[#EEF2FF] px-5 py-4 dark:bg-[#6366F1]/10 dark:border-[#6366F1]/30">
      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#6366F1] text-white text-[10px] font-bold">
        ✓
      </span>
      <p className="text-sm leading-relaxed text-[#1E1B4B] dark:text-[#C7D2FE]">
        <strong className="font-semibold">Quick Answer: </strong>
        {text}
      </p>
    </div>
  );
}
