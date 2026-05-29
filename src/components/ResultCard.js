export default function ResultCard({ label, value, highlight = false, sub }) {
  return (
    <div
      className={`rounded-xl p-5 text-center transition-all ${
        highlight
          ? "bg-[#6366F1] text-white shadow-md shadow-[#6366F1]/20"
          : "bg-white border border-[#E5E7EB] shadow-sm dark:bg-[#111827] dark:border-[#1E293B]"
      }`}
    >
      <p
        className={`text-xs font-semibold uppercase tracking-wider mb-1.5 ${
          highlight ? "text-[#C7D2FE]" : "text-[#6B7280] dark:text-[#9CA3AF]"
        }`}
      >
        {label}
      </p>
      <p
        className={`font-display text-2xl font-bold tracking-tight ${
          highlight
            ? "text-white"
            : "text-[#111827] dark:text-[#F9FAFB]"
        }`}
      >
        {value}
      </p>
      {sub && (
        <p
          className={`text-xs mt-1.5 ${
            highlight ? "text-[#A5B4FC]" : "text-[#9CA3AF] dark:text-[#6B7280]"
          }`}
        >
          {sub}
        </p>
      )}
    </div>
  );
}
