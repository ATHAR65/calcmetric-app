export default function ResultCard({ label, value, highlight = false, sub }) {
  return (
    <div
      className={`rounded-[16px] p-5 text-center transition-all ${
        highlight
          ? "bg-[#1A1410] shadow-md"
          : "bg-white border border-[#E8E3DA] shadow-[0_1px_4px_rgba(26,20,16,0.04)]"
      }`}
    >
      <p
        className={`text-xs font-semibold uppercase tracking-wider mb-1.5 ${
          highlight ? "text-[#8A7F72]" : "text-[#C4BAB0]"
        }`}
        style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
      >
        {label}
      </p>
      <p
        className={`text-[42px] font-bold tracking-tight leading-tight ${
          highlight ? "text-white" : "text-[#1A1410]"
        }`}
        style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800 }}
      >
        <span style={{ color: highlight ? "#E8521A" : undefined }}>{value}</span>
      </p>
      {sub && (
        <p
          className={`text-xs mt-1.5 ${
            highlight ? "text-[#8A7F72]" : "text-[#C4BAB0]"
          }`}
          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
        >
          {sub}
        </p>
      )}
    </div>
  );
}
