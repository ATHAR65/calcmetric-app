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
          className="block text-sm text-[#8A7F72] transition-colors duration-300"
          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
        >
          {label}
        </label>
      )}
      <div className="relative">
        {prefix && (
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm text-[#C4BAB0] font-medium pointer-events-none">
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
          className={`w-full rounded-[10px] border border-[#E8E3DA] bg-[#FAF8F4] px-4 py-3.5 text-base text-[#1A1410] placeholder:text-[#C4BAB0] focus:border-[#1A1410] focus:shadow-[0_0_0_3px_rgba(26,20,16,0.06)] transition-all ${
            prefix ? "pl-9" : ""
          } ${suffix ? "pr-16" : ""} ${className}`}
          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
        />
        {suffix && (
          <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-sm text-[#C4BAB0] font-medium pointer-events-none">
            {suffix}
          </span>
        )}
      </div>
      {helpText && (
        <p className="text-xs text-[#C4BAB0]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>{helpText}</p>
      )}
    </div>
  );
}
