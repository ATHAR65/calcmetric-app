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
  max,
  helpText,
  className = "",
}) {
  return (
    <div className="space-y-1.5">
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-semibold text-[#111827] dark:text-[#F9FAFB] transition-colors duration-300"
        >
          {label}
        </label>
      )}
      <div className="relative">
        {prefix && (
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm text-[#9CA3AF] font-medium pointer-events-none">
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
          max={max}
          className={`w-full rounded-xl border border-[#E5E7EB] bg-white px-4 py-3.5 text-base text-[#111827] placeholder:text-[#9CA3AF] hover:border-[#D1D5DB] focus:border-[#6366F1] focus:ring-2 focus:ring-[#6366F1]/10 transition-all shadow-sm dark:bg-[#1E293B] dark:border-[#334155] dark:text-[#F9FAFB] dark:placeholder:text-[#6B7280] dark:hover:border-[#6B7280] ${
            prefix ? "pl-9" : ""
          } ${suffix ? "pr-16" : ""} ${className}`}
        />
        {suffix && (
          <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-sm text-[#9CA3AF] font-medium pointer-events-none dark:text-[#6B7280]">
            {suffix}
          </span>
        )}
      </div>
      {helpText && (
        <p className="text-xs text-[#9CA3AF] dark:text-[#6B7280]">{helpText}</p>
      )}
    </div>
  );
}
