
import { motion } from "framer-motion";
import { FiCheck, FiCopy, FiRefreshCw } from "react-icons/fi";

interface PasswordDisplayProps {
  password: string;
  copied: boolean;
  onGenerate: () => void;
  onCopy: () => void;
}

const PasswordDisplay = ({
  password,
  copied,
  onGenerate,
  onCopy,
}: PasswordDisplayProps) => {
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <label className="text-sm font-semibold text-slate-200">
          Generated password
        </label>

        <span className="flex items-center gap-1.5 text-xs text-[#8DE2C5]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#8DE2C5]" />
          Ready to use
        </span>
      </div>

      <div className="rounded-2xl border border-white/[0.08] bg-[#080F1D] p-4 sm:p-5">
        <div className="flex min-h-[48px] items-center justify-between gap-3">
          <p
            aria-live="polite"
            className="min-w-0 break-all font-mono text-base font-medium leading-relaxed tracking-wide text-slate-100 sm:text-lg"
          >
            {password}
          </p>

          <div className="flex shrink-0 items-center gap-1">
            {/* Regenerate password */}
            <motion.button
              type="button"
              onClick={onGenerate}
              whileTap={{ scale: 0.85, rotate: -90 }}
              aria-label="Generate a new password"
              title="Generate new password"
              className="rounded-lg p-2.5 text-slate-500 transition-colors hover:bg-white/[0.06] hover:text-[#8DE2C5] focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-[#8DE2C5]"
            >
              <FiRefreshCw size={17} />
            </motion.button>

            {/* Copy password */}
            <button
              type="button"
              onClick={onCopy}
              disabled={!password}
              aria-label="Copy password"
              title="Copy password"
              className="rounded-lg p-2.5 text-slate-500 transition-colors hover:bg-white/[0.06] hover:text-[#8DE2C5] disabled:cursor-not-allowed disabled:opacity-40"
            >
              {copied ? (
                <FiCheck size={17} className="text-[#8DE2C5]" />
              ) : (
                <FiCopy size={17} />
              )}
            </button>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-white/[0.06] pt-3">
          <span className="text-xs text-slate-500">
            {password.length} characters
          </span>

          <span className="text-xs text-slate-500">
            {copied ? "Copied to clipboard" : "Click the copy icon to copy"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PasswordDisplay;
