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
          className="block text-sm text-[#5d5a78] transition-colors duration-300"
          style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
        >
          {label}
        </label>
      )}
      <div className="relative">
        {prefix && (
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm text-[#928fab] font-medium pointer-events-none">
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
          className={`w-full rounded-[10px] border border-[#e7e5f3] bg-[#f6f5fc] px-4 py-3.5 text-base text-[#1d1a33] placeholder:text-[#928fab] focus:border-[#1d1a33] focus:shadow-[0_0_0_3px_rgba(29,26,51,0.06)] transition-all ${
            prefix ? "pl-9" : ""
          } ${suffix ? "pr-16" : ""} ${className}`}
          style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
        />
        {suffix && (
          <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-sm text-[#928fab] font-medium pointer-events-none">
            {suffix}
          </span>
        )}
      </div>
      {helpText && (
        <p className="text-xs text-[#928fab]" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>{helpText}</p>
      )}
    </div>
  );
}
