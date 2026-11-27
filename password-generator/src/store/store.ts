
import { create } from "zustand";

import type {
  PasswordOptions,
  PasswordStrength,
} from "../types/password";

import {
  calculatePasswordStrength,
  generateSecurePassword,
} from "../utils/passwordUtils";

interface PasswordGeneratorState extends PasswordOptions {
  generatedPassword: string;
  passwordStrength: PasswordStrength;

  setLength: (length: number) => void;
  setUpperCase: (value: boolean) => void;
  setLowerCase: (value: boolean) => void;
  setNumbers: (value: boolean) => void;
  setSymbols: (value: boolean) => void;
  setExcludeSimilar: (value: boolean) => void;
  setExcludeAmbiguous: (value: boolean) => void;
  setStartWithLetter: (value: boolean) => void;

  generatePassword: () => void;
}

// Initial settings
const initialOptions: PasswordOptions = {
  length: 12,
  upperCase: true,
  lowerCase: true,
  numbers: true,
  symbols: true,
  excludeSimilar: false,
  excludeAmbiguous: false,
  startWithLetter: false,
};

// Generate the initial password
const initialResult = generateSecurePassword(initialOptions);

const initialPassword = initialResult.success
  ? initialResult.password
  : "";

export const useStore = create<PasswordGeneratorState>((set, get) => ({
  ...initialOptions,

  generatedPassword: initialPassword,

  passwordStrength: initialPassword
    ? calculatePasswordStrength(initialPassword)
    : {
        score: 0,
        label: "Very Weak",
        color: "text-red-400",
      },

  // Settings actions
  setLength: (length) => set({ length }),

  setUpperCase: (upperCase) => set({ upperCase }),

  setLowerCase: (lowerCase) => set({ lowerCase }),

  setNumbers: (numbers) => set({ numbers }),

  setSymbols: (symbols) => set({ symbols }),

  setExcludeSimilar: (excludeSimilar) =>
    set({ excludeSimilar }),

  setExcludeAmbiguous: (excludeAmbiguous) =>
    set({ excludeAmbiguous }),

  setStartWithLetter: (startWithLetter) =>
    set({ startWithLetter }),

  // Password generation action
  generatePassword: () => {
    const state = get();

    const result = generateSecurePassword({
      length: state.length,
      upperCase: state.upperCase,
      lowerCase: state.lowerCase,
      numbers: state.numbers,
      symbols: state.symbols,
      excludeSimilar: state.excludeSimilar,
      excludeAmbiguous: state.excludeAmbiguous,
      startWithLetter: state.startWithLetter,
    });

    if (!result.success) {
      return;
    }

    set({
      generatedPassword: result.password,
      passwordStrength: calculatePasswordStrength(result.password),
    });
  },
}));
