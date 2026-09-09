import React from "react";
import { ChevronDown } from "lucide-react";

export const inputBase =
  "w-full h-11 rounded-xl border border-slate-200 bg-slate-50 px-3.5 text-sm text-slate-800 placeholder:text-slate-400 focus:bg-white focus:border-crimson-400 focus:ring-4 focus:ring-crimson-500/10 focus:outline-none transition";

export const textareaBase =
  "w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:bg-white focus:border-crimson-400 focus:ring-4 focus:ring-crimson-500/10 focus:outline-none transition";

export function Label({ children, hint, required }) {
  return (
    <span className="mb-1.5 flex items-center gap-1 text-xs font-semibold text-slate-700">
      {children}
      {required && <span className="text-crimson-600">*</span>}
      {hint && <span className="font-normal text-slate-400">{hint}</span>}
    </span>
  );
}

export function GroupTitle({ children }) {
  return (
    <p className="mb-3 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400">
      <span className="h-px w-4 bg-slate-300" />
      {children}
    </p>
  );
}

export function SelectField({ label, required, value, onChange, children }) {
  return (
    <label className="block min-w-0">
      <Label required={required}>{label}</Label>
      <div className="relative">
        <select
          value={value}
          onChange={onChange}
          className={`${inputBase} appearance-none pr-10 cursor-pointer`}
        >
          {children}
        </select>
        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
      </div>
    </label>
  );
}

export function TextField({
  label,
  hint,
  required,
  type = "text",
  value,
  onChange,
  placeholder,
  inputRef,
}) {
  return (
    <label className="block min-w-0">
      <Label required={required} hint={hint}>
        {label}
      </Label>
      <input
        ref={inputRef}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={type === "date" ? `${inputBase} cursor-pointer` : inputBase}
      />
    </label>
  );
}
