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
      <label htmlFor={id} className="block text-sm font-semibold text-[#0F172A] dark:text-[#F1F5F9] transition-colors duration-300">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={onChange}
        className="w-full rounded-lg border border-[#E2E8F0] bg-white px-4 py-3 text-sm text-[#0F172A] hover:border-[#94A3B8] focus:border-[#0D9488] focus:ring-2 focus:ring-[#0D9488]/10 transition-all appearance-none cursor-pointer dark:bg-[#1E293B] dark:border-[#334155] dark:text-[#F1F5F9] dark:hover:border-[#64748B]"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {helpText && (
        <p className="text-xs text-[#94A3B8] dark:text-[#64748B]">{helpText}</p>
      )}
    </div>
  );
}
