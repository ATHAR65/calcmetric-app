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
        className="block text-sm font-semibold text-[#111827] dark:text-[#F9FAFB] transition-colors duration-300"
      >
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          value={value}
          onChange={onChange}
          className="w-full rounded-xl border border-[#E5E7EB] bg-white px-4 py-3.5 text-base text-[#111827] hover:border-[#D1D5DB] focus:border-[#6366F1] focus:ring-2 focus:ring-[#6366F1]/10 transition-all appearance-none cursor-pointer shadow-sm dark:bg-[#1E293B] dark:border-[#334155] dark:text-[#F9FAFB] dark:hover:border-[#6B7280]"
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <svg
          className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9CA3AF] pointer-events-none"
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
        <p className="text-xs text-[#9CA3AF] dark:text-[#6B7280]">{helpText}</p>
      )}
    </div>
  );
}
