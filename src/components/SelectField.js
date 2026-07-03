"use client";

export default function SelectField({
  id,
  label,
  value,
  onChange,
  options,
  helpText,
}) {
  return (
    <div className="space-y-1.5">
      <label
        htmlFor={id}
        className="block text-sm text-[#5d5a78] transition-colors duration-300"
        style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
      >
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          value={value}
          onChange={onChange}
          className="w-full rounded-[10px] border border-[#e7e5f3] bg-[#f6f5fc] px-4 py-3.5 text-base text-[#1d1a33] focus:border-[#1d1a33] focus:shadow-[0_0_0_3px_rgba(29,26,51,0.06)] transition-all appearance-none cursor-pointer"
          style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <svg
          className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#928fab] pointer-events-none"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
      {helpText && (
        <p className="text-xs text-[#928fab]" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>{helpText}</p>
      )}
    </div>
  );
}
