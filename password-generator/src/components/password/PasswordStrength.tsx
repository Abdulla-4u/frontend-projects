
import type { PasswordStrength as PasswordStrengthType } from "../../types/password";

interface PasswordStrengthProps {
  strength: PasswordStrengthType;
}

const PasswordStrength = ({
  strength,
}: PasswordStrengthProps) => {
  const getStrengthColor = () => {
    if (strength.score < 20) return "#F87171";
    if (strength.score < 40) return "#FB923C";
    if (strength.score < 60) return "#FACC15";
    if (strength.score < 80) return "#60A5FA";
    return "#8DE2C5";
  };

  const color = getStrengthColor();

  return (
    <div className="mt-5">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-sm font-medium text-slate-300">
          Password strength
        </span>

        <span
          className="text-sm font-semibold"
          style={{ color }}
        >
          {strength.label}
        </span>
      </div>

      <div
        className="h-1.5 overflow-hidden rounded-full bg-white/[0.07]"
        role="progressbar"
        aria-label="Password strength"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={strength.score}
      >
        <div
          className="h-full rounded-full transition-[width] duration-500 ease-out"
          style={{
            width: `${strength.score}%`,
            backgroundColor: color,
          }}
        />
      </div>

      <p className="mt-2 text-xs text-slate-500">
        Strength is based on the generated password.
      </p>
    </div>
  );
};

export default PasswordStrength;
