export default function ResultCard({ label, value, highlight = false, sub }) {
  return (
    <div
      className={`rounded-[16px] p-5 text-center transition-all ${highlight ? "shadow-md" : "border"}`}
      style={
        highlight
          ? { background: "linear-gradient(135deg, #1e3a8a 0%, #4c1d95 100%)", containerType: "inline-size" }
          : { background: "var(--color-bg-secondary)", borderColor: "var(--color-border)", boxShadow: "var(--shadow-sm)", containerType: "inline-size" }
      }
    >
      <p
        className="text-xs font-semibold uppercase tracking-wider mb-1.5"
        style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: highlight ? "rgba(255,255,255,0.65)" : "var(--color-text-muted)" }}
      >
        {label}
      </p>
      <p
        className="font-bold tracking-tight leading-tight whitespace-nowrap"
        style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "clamp(18px, 12.5cqw, 34px)", color: highlight ? "#fff" : "var(--color-text-primary)" }}
      >
        <span style={{ color: highlight ? "#c4b5fd" : undefined }}>{value}</span>
      </p>
      {sub && (
        <p
          className="text-xs mt-1.5"
          style={{ fontFamily: "var(--font-body)", fontWeight: 300, color: highlight ? "rgba(255,255,255,0.65)" : "var(--color-text-muted)" }}
        >
          {sub}
        </p>
      )}
    </div>
  );
}
