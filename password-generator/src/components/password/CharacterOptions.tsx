
import OptionToggle from "./OptionToggle";

interface CharacterOptionsProps {
  upperCase: boolean;
  lowerCase: boolean;
  numbers: boolean;
  symbols: boolean;

  setUpperCase: (value: boolean) => void;
  setLowerCase: (value: boolean) => void;
  setNumbers: (value: boolean) => void;
  setSymbols: (value: boolean) => void;
}

const CharacterOptions = ({
  upperCase,
  lowerCase,
  numbers,
  symbols,
  setUpperCase,
  setLowerCase,
  setNumbers,
  setSymbols,
}: CharacterOptionsProps) => {
  return (
    <section>
      <div className="mb-4">
        <h3 className="text-sm font-semibold text-slate-200">
          Character types
        </h3>

        <p className="mt-1 text-xs text-slate-500">
          Select the characters to include in your password.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        <OptionToggle
          label="Uppercase"
          description="A – Z"
          checked={upperCase}
          onChange={setUpperCase}
        />

        <OptionToggle
          label="Lowercase"
          description="a – z"
          checked={lowerCase}
          onChange={setLowerCase}
        />

        <OptionToggle
          label="Numbers"
          description="0 – 9"
          checked={numbers}
          onChange={setNumbers}
        />

        <OptionToggle
          label="Symbols"
          description="! @ # $ % &"
          checked={symbols}
          onChange={setSymbols}
        />
      </div>
    </section>
  );
};

export default CharacterOptions;
