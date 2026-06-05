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
        className="block text-sm text-[#8A7F72] transition-colors duration-300"
        style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
      >
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          value={value}
          onChange={onChange}
          className="w-full rounded-[10px] border border-[#E8E3DA] bg-[#FAF8F4] px-4 py-3.5 text-base text-[#1A1410] focus:border-[#1A1410] focus:shadow-[0_0_0_3px_rgba(26,20,16,0.06)] transition-all appearance-none cursor-pointer"
          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <svg
          className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C4BAB0] pointer-events-none"
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
        <p className="text-xs text-[#C4BAB0]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>{helpText}</p>
      )}
    </div>
  );
}
