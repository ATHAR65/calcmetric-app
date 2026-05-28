export default function ResultCard({ label, value, highlight = false, sub }) {
  return (
    <div
      className={`rounded-xl p-4 text-center transition-all ${
        highlight
          ? "bg-[#0D9488] text-white shadow-lg shadow-[#0D9488]/20"
          : "bg-white border border-[#E2E8F0] shadow-sm dark:bg-[#0F172A] dark:border-[#1E293B]"
      }`}
    >
      <p
        className={`text-xs font-medium uppercase tracking-wider mb-1 ${
          highlight ? "text-[#99F6E4]" : "text-[#64748B] dark:text-[#94A3B8]"
        }`}
      >
        {label}
      </p>
      <p
        className={`text-2xl font-extrabold tracking-tight ${
          highlight ? "text-white" : "text-[#0F172A] dark:text-[#F1F5F9]"
        }`}
      >
        {value}
      </p>
      {sub && (
        <p
          className={`text-xs mt-1 ${
            highlight ? "text-[#5EEAD4]" : "text-[#94A3B8] dark:text-[#64748B]"
          }`}
        >
          {sub}
        </p>
      )}
    </div>
  );
}
