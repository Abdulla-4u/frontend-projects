import { create } from "zustand";

interface PasswordStrength {
  score: number; 
  label: string; // "Very Weak", "Weak", "Fair", "Good", "Strong"
  color: string; 
}

interface GeneratedPasswordState {
  generatedPassword: string;
  length: number;
  upperCase: boolean;
  lowerCase: boolean;
  numbers: boolean;
  symbols: boolean;
  excludeSimilar: boolean;
  excludeAmbiguous: boolean;
  startWithLetter: boolean;
  passwordStrength: PasswordStrength;
  setLength: (length: number) => void;
  setUpperCase: (upperCase: boolean) => void;
  setLowerCase: (lowerCase: boolean) => void;
  setNumbers: (numbers: boolean) => void;
  setSymbols: (symbols: boolean) => void;
  setExcludeSimilar: (exclude: boolean) => void;
  setExcludeAmbiguous: (exclude: boolean) => void;
  setStartWithLetter: (start: boolean) => void;
  generatePassword: () => void;
  calculatePasswordStrength: (password: string) => PasswordStrength;
}

export const useStore = create<GeneratedPasswordState>((set, get) => ({
  generatedPassword: "",
  length: 12,
  upperCase: true,
  lowerCase: true,
  numbers: true,
  symbols: true,
  excludeSimilar: false,
  excludeAmbiguous: false,
  startWithLetter: false,
  passwordStrength: { score: 0, label: "Very Weak", color: "text-red-400" },

  setLength: (length) => set({ length }),
  setUpperCase: (upperCase) => set({ upperCase }),
  setLowerCase: (lowerCase) => set({ lowerCase }),
  setNumbers: (numbers) => set({ numbers }),
  setSymbols: (symbols) => set({ symbols }),
  setExcludeSimilar: (excludeSimilar) => set({ excludeSimilar }),
  setExcludeAmbiguous: (excludeAmbiguous) => set({ excludeAmbiguous }),
  setStartWithLetter: (startWithLetter) => set({ startWithLetter }),

  calculatePasswordStrength: (password: string): PasswordStrength => {
    if (!password) {
      return { score: 0, label: "Very Weak", color: "text-red-400" };
    }

    let score = 0;
    const length = password.length;

    // Length scoring (0-25 points)
    if (length >= 4) score += 5;
    if (length >= 8) score += 10;
    if (length >= 12) score += 5;
    if (length >= 16) score += 5;

    // Character variety scoring (0-50 points)
    if (/[a-z]/.test(password)) score += 10; // lowercase
    if (/[A-Z]/.test(password)) score += 10; // uppercase
    if (/[0-9]/.test(password)) score += 10; // numbers
    if (/[^a-zA-Z0-9]/.test(password)) score += 20; // symbols

    // Complexity bonus (0-25 points)
    const uniqueChars = new Set(password).size;
    const varietyRatio = uniqueChars / length;
    score += Math.min(25, varietyRatio * 25);

    // Determine strength level
    let label: string;
    let color: string;

    if (score < 20) {
      label = "Very Weak";
      color = "text-red-400";
    } else if (score < 40) {
      label = "Weak";
      color = "text-orange-400";
    } else if (score < 60) {
      label = "Fair";
      color = "text-yellow-400";
    } else if (score < 80) {
      label = "Good";
      color = "text-blue-400";
    } else {
      label = "Strong";
      color = "text-green-400";
    }

    return { score: Math.min(100, score), label, color };
  },

  generatePassword: () =>
    set((state) => {
      let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let lowercase = "abcdefghijklmnopqrstuvwxyz";
      let numbers = "0123456789";
      let symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

      // Apply exclusions
      if (state.excludeSimilar) {
        uppercase = uppercase.replace(/[O0IL1]/g, "");
        lowercase = lowercase.replace(/[l1]/g, "");
        numbers = numbers.replace(/[01]/g, "");
      }

      if (state.excludeAmbiguous) {
        symbols = symbols.replace(/[{}[\]()/\\'"`~,;.<>]/g, "");
      }

      // Build character set
      let characters = "";
      const selectedSets: string[] = [];

      if (state.upperCase && uppercase) {
        characters += uppercase;
        selectedSets.push(uppercase);
      }
      if (state.lowerCase && lowercase) {
        characters += lowercase;
        selectedSets.push(lowercase);
      }
      if (state.numbers && numbers) {
        characters += numbers;
        selectedSets.push(numbers);
      }
      if (state.symbols && symbols) {
        characters += symbols;
        selectedSets.push(symbols);
      }

      // Handle case when no character sets are selected
      if (!characters.length) {
        return {
          generatedPassword: "",
          passwordStrength: {
            score: 0,
            label: "Very Weak",
            color: "text-red-400",
          },
        };
      }

      let password = "";

      // Ensure at least one character from each selected set
      if (selectedSets.length > 0) {
        for (const charSet of selectedSets) {
          password += charSet[Math.floor(Math.random() * charSet.length)];
        }
      }

      // Fill remaining length with random characters
      for (let i = password.length; i < state.length; i++) {
        password += characters[Math.floor(Math.random() * characters.length)];
      }

      // Shuffle the password to avoid predictable patterns
      password = password
        .split("")
        .sort(() => Math.random() - 0.5)
        .join("");

      // Ensure it starts with a letter if required
      if (state.startWithLetter && password.length > 0) {
        const letters = (uppercase + lowercase).replace(/[O0IL1]/g, "");
        if (letters && !/[a-zA-Z]/.test(password[0])) {
          const firstLetter =
            letters[Math.floor(Math.random() * letters.length)];
          password = firstLetter + password.slice(1);
        }
      }

      // Calculate strength
      const strength = get().calculatePasswordStrength(password);

      return {
        generatedPassword: password,
        passwordStrength: strength,
      };
    }),
}));
