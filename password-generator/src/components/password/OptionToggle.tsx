
interface OptionToggleProps {
    label: string;
    description?: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
  }
  
  const OptionToggle = ({
    label,
    description,
    checked,
    onChange,
  }: OptionToggleProps) => {
    return (
      <label className="group flex cursor-pointer items-center justify-between gap-4 rounded-xl border border-white/[0.06] bg-white/[0.025] px-4 py-3.5 transition-colors duration-200 hover:border-white/[0.12] hover:bg-white/[0.045]">
        <span className="min-w-0">
          <span className="block text-sm font-medium text-slate-200 transition-colors group-hover:text-white">
            {label}
          </span>
  
          {description && (
            <span className="mt-1 block text-xs leading-relaxed text-slate-500">
              {description}
            </span>
          )}
        </span>
  
        <span className="relative shrink-0">
          <input
            type="checkbox"
            checked={checked}
            onChange={(event) => onChange(event.target.checked)}
            className="peer sr-only"
          />
  
          <span className="block h-6 w-11 rounded-full bg-slate-700 transition-colors duration-200 peer-checked:bg-[#75DCC0] peer-focus-visible:outline peer-focus-visible:outline-offset-4 peer-focus-visible:outline-[#8DE2C5]" />
  
          <span className="pointer-events-none absolute left-[3px] top-[3px] h-[18px] w-[18px] rounded-full bg-white shadow-sm transition-transform duration-200 peer-checked:translate-x-5" />
        </span>
      </label>
    );
  };
  
  export default OptionToggle;
  