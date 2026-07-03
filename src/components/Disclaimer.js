export default function Disclaimer() {
  return (
    <div className="mt-10 rounded-xl border border-[#7c3aed]/20 bg-[#f3efff] p-5">
      <p className="text-sm text-[#6d28d9] leading-relaxed transition-colors duration-300" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>
        <strong style={{ fontWeight: 600 }}>Disclaimer:</strong> This tool is for estimation purposes only.
        We are not certified financial advisors, CPAs, or legal experts. Please
        consult a professional before making financial decisions.
      </p>
    </div>
  );
}
