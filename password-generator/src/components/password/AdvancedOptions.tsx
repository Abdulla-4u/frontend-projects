
import { FiChevronDown, FiSliders } from "react-icons/fi";
import OptionToggle from "./OptionToggle";

interface AdvancedOptionsProps {
  excludeSimilar: boolean;
  excludeAmbiguous: boolean;
  startWithLetter: boolean;

  setExcludeSimilar: (value: boolean) => void;
  setExcludeAmbiguous: (value: boolean) => void;
  setStartWithLetter: (value: boolean) => void;
}

const AdvancedOptions = ({
  excludeSimilar,
  excludeAmbiguous,
  startWithLetter,
  setExcludeSimilar,
  setExcludeAmbiguous,
  setStartWithLetter,
}: AdvancedOptionsProps) => {
  return (
    <details className="group rounded-xl border border-white/[0.07] bg-white/[0.02]">
      <summary className="flex cursor-pointer items-center justify-between gap-3 rounded-xl px-4 py-4 transition-colors hover:bg-white/[0.035]">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.06] text-slate-300">
            <FiSliders size={17} />
          </span>

          <span>
            <span className="block text-sm font-semibold text-slate-200">
              Advanced options
            </span>
            <span className="mt-1 block text-xs text-slate-500">
              Fine-tune your password
            </span>
          </span>
        </div>

        <FiChevronDown
          className="shrink-0 text-slate-500 transition-transform duration-200 group-open:rotate-180"
          size={18}
        />
      </summary>

      <div className="space-y-2 border-t border-white/[0.06] p-3">
        <OptionToggle
          label="Exclude similar characters"
          description="Avoid confusing characters like O, 0, I, l and 1."
          checked={excludeSimilar}
          onChange={setExcludeSimilar}
        />

        <OptionToggle
          label="Exclude ambiguous symbols"
          description="Avoid punctuation characters that can be difficult to distinguish."
          checked={excludeAmbiguous}
          onChange={setExcludeAmbiguous}
        />

        <OptionToggle
          label="Start with a letter"
          description="Make the first character an uppercase or lowercase letter."
          checked={startWithLetter}
          onChange={setStartWithLetter}
        />
      </div>
    </details>
  );
};

export default AdvancedOptions;
