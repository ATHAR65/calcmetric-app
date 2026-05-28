"use client";

export default function InputField({
  id,
  label,
  value,
  onChange,
  type = "number",
  placeholder = "0",
  prefix,
  suffix,
  step,
  min,
  helpText,
}) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block text-sm font-semibold text-[#0F172A] dark:text-[#F1F5F9] transition-colors duration-300">
        {label}
      </label>
      <div className="relative">
        {prefix && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-[#94A3B8] font-medium pointer-events-none">
            {prefix}
          </span>
        )}
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          step={step}
          min={min}
          className={`w-full rounded-lg border border-[#E2E8F0] bg-white px-4 py-3 text-sm text-[#0F172A] placeholder:text-[#94A3B8] hover:border-[#94A3B8] focus:border-[#0D9488] focus:ring-2 focus:ring-[#0D9488]/10 transition-all dark:bg-[#1E293B] dark:border-[#334155] dark:text-[#F1F5F9] dark:placeholder:text-[#64748B] dark:hover:border-[#64748B] ${
            prefix ? "pl-8" : ""
          } ${suffix ? "pr-16" : ""}`}
        />
        {suffix && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#94A3B8] font-medium pointer-events-none">
            {suffix}
          </span>
        )}
      </div>
      {helpText && (
        <p className="text-xs text-[#94A3B8] dark:text-[#64748B]">{helpText}</p>
      )}
    </div>
  );
}
