import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiLock,
  FiRefreshCw,
  FiShield,
  FiZap,
} from "react-icons/fi";

import { useStore } from "../../store/store";
import { usePasswordGenerator } from "../../hooks/usePasswordGenerator";

import PasswordDisplay from "../password/PasswordDisplay";
import PasswordStrength from "../password/PasswordStrength";
import PasswordLength from "../password/PasswordLength";
import CharacterOptions from "../password/CharacterOptions";
import GenerateButton from "../password/GenerateButton";
import AdvancedOptions from "../password/AdvancedOptions";
import DeveloperCredit from "../DeveloperCredit";
import AmbientBackground from "../password/AmbientBackground";
import PWAInstallButton from "../PWAInstallButton";

const PasswordGenerator = () => {
  const {
    length,
    upperCase,
    lowerCase,
    numbers,
    symbols,
    excludeSimilar,
    excludeAmbiguous,
    startWithLetter,
    generatedPassword,
    setLength,
    setUpperCase,
    setLowerCase,
    setNumbers,
    setSymbols,
    setExcludeSimilar,
    setExcludeAmbiguous,
    setStartWithLetter,
  } = useStore();

  const {
    copied,
    handleGeneratePassword,
    handleCopyPassword,
    currentStrength,
  } = usePasswordGenerator();

  const hasCharacterType = upperCase || lowerCase || numbers || symbols;

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080D18] px-4 py-6 sm:px-6 sm:py-10 lg:py-10">
      {/* Ambient background */}
      <AmbientBackground />
      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Navbar */}
        <header className="flex items-center justify-between gap-3">
          {/* Logo */}
          <a
            href="#home"
            className="flex shrink-0 items-center gap-2.5"
            aria-label="Securely home"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#8DE2C5]/20 bg-[#8DE2C5]/[0.09] text-[#8DE2C5]">
              <FiShield size={21} />
            </span>

            <span className="text-lg font-bold tracking-tight text-white">
              Securely<span className="text-[#8DE2C5]">.</span>
            </span>
          </a>

          {/* Navbar actions */}
          <div className="flex shrink-0 items-center gap-2">
            <PWAInstallButton />

            {/* Tool badge */}
            <div className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.035] px-3 py-2">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#8DE2C5]" />

              <span className="hidden text-[10px] font-semibold tracking-[0.12em] text-slate-400 sm:inline sm:text-xs">
                FREE PASSWORD TOOL
              </span>
            </div>
          </div>
        </header>

        {/* Hero */}
        <motion.section
          id="home"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mx-auto mb-10 mt-16 max-w-3xl text-center sm:mb-12 sm:mt-20"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#8DE2C5]/15 bg-[#8DE2C5]/[0.06] px-3 py-1.5">
            <FiZap size={13} className="text-[#8DE2C5]" />
            <span className="text-[10px] font-semibold tracking-[0.16em] text-[#8DE2C5]">
              SIMPLE. SECURE. INSTANT.
            </span>
          </div>

          <h1 className="text-3xl font-bold leading-tight tracking-[-0.03em] text-white sm:text-4xl md:text-5xl lg:text-[3.5rem]">
            Free Random Password
            <span className="mt-1 block text-[#8DE2C5]">Generator</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Generate strong, secure passwords in seconds.
          </p>
        </motion.section>

        {/* Generator card */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="overflow-hidden rounded-2xl border border-white/[0.09] bg-[#101827]/90 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:rounded-3xl"
        >
          <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
            {/* Left panel */}
            <div className="border-b border-white/[0.07] p-5 sm:p-8 lg:border-b-0 lg:border-r lg:p-9">
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8DE2C5]">
                    Password workspace
                  </p>

                  <h2 className="mt-2 text-xl font-bold tracking-tight text-white">
                    Your password
                  </h2>
                </div>

                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.035] text-[#8DE2C5]">
                  <FiLock size={19} />
                </span>
              </div>

              <PasswordDisplay
                password={generatedPassword}
                copied={copied}
                onGenerate={handleGeneratePassword}
                onCopy={handleCopyPassword}
              />

              <PasswordStrength strength={currentStrength} />

              <div className="mt-8 rounded-xl border border-white/[0.06] bg-white/[0.025] p-4">
                <div className="flex items-start gap-3">
                  <FiShield
                    size={17}
                    className="mt-0.5 shrink-0 text-[#8DE2C5]"
                  />

                  <div>
                    <p className="text-xs font-semibold text-slate-200">
                      Privacy comes first
                    </p>

                    <p className="mt-1 text-xs leading-relaxed text-slate-500">
                      Password generation happens in your browser. Never share
                      your generated password with anyone.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right panel */}
            <div className="p-5 sm:p-8 lg:p-9">
              <div className="mb-8">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8DE2C5]">
                  Customize
                </p>

                <h2 className="mt-2 text-xl font-bold tracking-tight text-white">
                  Password settings
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                  Adjust the settings to create your ideal password.
                </p>
              </div>

              <div className="space-y-8">
                <PasswordLength length={length} onChange={setLength} />

                <CharacterOptions
                  upperCase={upperCase}
                  lowerCase={lowerCase}
                  numbers={numbers}
                  symbols={symbols}
                  setUpperCase={setUpperCase}
                  setLowerCase={setLowerCase}
                  setNumbers={setNumbers}
                  setSymbols={setSymbols}
                />

                <AdvancedOptions
                  excludeSimilar={excludeSimilar}
                  excludeAmbiguous={excludeAmbiguous}
                  startWithLetter={startWithLetter}
                  setExcludeSimilar={setExcludeSimilar}
                  setExcludeAmbiguous={setExcludeAmbiguous}
                  setStartWithLetter={setStartWithLetter}
                />

                <GenerateButton
                  onClick={handleGeneratePassword}
                  disabled={!hasCharacterType}
                />

                {!hasCharacterType && (
                  <p className="-mt-5 text-center text-xs text-red-400">
                    Select at least one character type.
                  </p>
                )}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="mt-8 flex flex-col items-center justify-between gap-3 pb-4 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Securely. Simple security for everyone.
          </p>

          <div className="flex items-center gap-2 text-xs text-slate-500">
            <FiLock size={12} />
            Generated locally in your browser
          </div>
        </footer>
      </div>
      <DeveloperCredit />
    </main>
  );
};

export default PasswordGenerator;
