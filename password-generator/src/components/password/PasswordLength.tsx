
interface PasswordLengthProps {
    length: number;
    onChange: (length: number) => void;
  }
  
  const PasswordLength = ({
    length,
    onChange,
  }: PasswordLengthProps) => {
    const progress = ((length - 4) / (50 - 4)) * 100;
  
    return (
      <section>
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h3 className="text-sm font-semibold text-slate-200">
              Password length
            </h3>
            <p className="mt-1 text-xs text-slate-500">
              Choose between 4 and 50 characters
            </p>
          </div>
  
          <span className="rounded-lg border border-[#8DE2C5]/20 bg-[#8DE2C5]/[0.08] px-3 py-1.5 font-mono text-sm font-semibold text-[#8DE2C5]">
            {length}
          </span>
        </div>
  
        <input
          type="range"
          min={4}
          max={50}
          step={1}
          value={length}
          onChange={(event) => onChange(Number(event.target.value))}
          aria-label="Password length"
          className="slider w-full"
          style={{
            background: `linear-gradient(to right, #8DE2C5 ${progress}%, rgba(255,255,255,0.1) ${progress}%)`,
          }}
        />
  
        <div className="mt-2 flex justify-between text-xs text-slate-600">
          <span>4 characters</span>
          <span>50 characters</span>
        </div>
      </section>
    );
  };
  
  export default PasswordLength;
  