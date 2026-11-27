
import type {
    PasswordOptions,
    PasswordStrength,
    PasswordGenerationResult,
  } from "../types/password";
  
  const CHARACTER_SETS = {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols: "!@#$%^&*()_+~`|}{[]:;?><,./-=",
  };
  
  const SIMILAR_CHARACTERS = "O0Il1";
  
  const AMBIGUOUS_SYMBOLS = "{}[]()/\\'\"`~,;.< >".replace(" ", "");
  
  /**
   * Returns a cryptographically secure random integer.
   * Rejection sampling avoids modulo bias.
   */
  const secureRandomInt = (max: number): number => {
    if (!Number.isInteger(max) || max <= 0 || max > 2 ** 32) {
      throw new Error("Invalid random integer range.");
    }
  
    const randomValues = new Uint32Array(1);
    const range = 2 ** 32;
    const limit = Math.floor(range / max) * max;
  
    let randomValue: number;
  
    do {
      crypto.getRandomValues(randomValues);
      randomValue = randomValues[0];
    } while (randomValue >= limit);
  
    return randomValue % max;
  };
  
  /**
   * Selects one random character from a string.
   */
  const getRandomCharacter = (characters: string): string => {
    if (!characters.length) {
      throw new Error("Character set cannot be empty.");
    }
  
    return characters[secureRandomInt(characters.length)];
  };
  
  /**
   * Shuffles an array using the Fisher-Yates algorithm.
   */
  const secureShuffle = (characters: string[]): string[] => {
    const shuffled = [...characters];
  
    for (let i = shuffled.length - 1; i > 0; i--) {
      const randomIndex = secureRandomInt(i + 1);
  
      [shuffled[i], shuffled[randomIndex]] = [
        shuffled[randomIndex],
        shuffled[i],
      ];
    }
  
    return shuffled;
  };
  
  /**
   * Calculates the strength of an actual generated password.
   * Preserves the scoring rules from the original application.
   */
  export const calculatePasswordStrength = (
    password: string
  ): PasswordStrength => {
    if (!password) {
      return {
        score: 0,
        label: "Very Weak",
        color: "text-red-400",
      };
    }
  
    let score = 0;
    const length = password.length;
  
    // Length scoring (0-25 points)
    if (length >= 4) score += 5;
    if (length >= 8) score += 10;
    if (length >= 12) score += 5;
    if (length >= 16) score += 5;
  
    // Character variety scoring (0-50 points)
    if (/[a-z]/.test(password)) score += 10;
    if (/[A-Z]/.test(password)) score += 10;
    if (/[0-9]/.test(password)) score += 10;
    if (/[^a-zA-Z0-9]/.test(password)) score += 20;
  
    // Complexity bonus (0-25 points)
    const uniqueCharacters = new Set(password).size;
    const varietyRatio = uniqueCharacters / length;
  
    score += Math.min(25, varietyRatio * 25);
  
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
  
    return {
      score: Math.min(100, score),
      label,
      color,
    };
  };
  
  /**
   * Estimates password strength from the current settings.
   * Used before a password has been generated.
   */
  export const calculateEstimatedStrength = (
    options: PasswordOptions
  ): PasswordStrength => {
    const {
      length,
      upperCase,
      lowerCase,
      numbers,
      symbols,
    } = options;
  
    const hasSelectedCharacterType =
      upperCase || lowerCase || numbers || symbols;
  
    if (!hasSelectedCharacterType) {
      return {
        score: 0,
        label: "Very Weak",
        color: "text-red-400",
      };
    }
  
    let score = 0;
  
    // Length scoring
    if (length >= 4) score += 5;
    if (length >= 8) score += 10;
    if (length >= 12) score += 5;
    if (length >= 16) score += 5;
  
    // Selected character types
    if (upperCase) score += 10;
    if (lowerCase) score += 10;
    if (numbers) score += 10;
    if (symbols) score += 20;
  
    // Variety bonus
    const selectedTypes = [
      upperCase,
      lowerCase,
      numbers,
      symbols,
    ].filter(Boolean).length;
  
    score += Math.min(25, (selectedTypes / 4) * 25);
  
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
  
    return {
      score: Math.min(100, score),
      label,
      color,
    };
  };
  
  /**
   * Generates a secure password from the selected options.
   */
  export const generateSecurePassword = (
    options: PasswordOptions
  ): PasswordGenerationResult => {
    const {
      length,
      upperCase,
      lowerCase,
      numbers,
      symbols,
      excludeSimilar,
      excludeAmbiguous,
      startWithLetter,
    } = options;
  
    if (!Number.isInteger(length) || length < 4 || length > 50) {
      return {
        success: false,
        error: "Password length must be between 4 and 50 characters.",
      };
    }
  
    const selectedSets: string[] = [];
  
    let uppercaseCharacters = CHARACTER_SETS.uppercase;
    let lowercaseCharacters = CHARACTER_SETS.lowercase;
    let numberCharacters = CHARACTER_SETS.numbers;
    let symbolCharacters = CHARACTER_SETS.symbols;
  
    // Exclude similar characters
    if (excludeSimilar) {
      uppercaseCharacters = uppercaseCharacters.replace(/[OI]/g, "");
      lowercaseCharacters = lowercaseCharacters.replace(/[l]/g, "");
      numberCharacters = numberCharacters.replace(/[01]/g, "");
    }
  
    // Exclude ambiguous symbols
    if (excludeAmbiguous) {
      symbolCharacters = [...symbolCharacters]
        .filter((character) => !AMBIGUOUS_SYMBOLS.includes(character))
        .join("");
    }
  
    // Build the selected character sets
    if (upperCase && uppercaseCharacters) {
      selectedSets.push(uppercaseCharacters);
    }
  
    if (lowerCase && lowercaseCharacters) {
      selectedSets.push(lowercaseCharacters);
    }
  
    if (numbers && numberCharacters) {
      selectedSets.push(numberCharacters);
    }
  
    if (symbols && symbolCharacters) {
      selectedSets.push(symbolCharacters);
    }
  
    if (!selectedSets.length) {
      return {
        success: false,
        error: "Please select at least one character type.",
      };
    }
  
    if (startWithLetter && !upperCase && !lowerCase) {
      return {
        success: false,
        error: "Select uppercase or lowercase letters to start with a letter.",
      };
    }
  
    if (selectedSets.length > length) {
      return {
        success: false,
        error: "Password length is too short for the selected character types.",
      };
    }
  
    // Ensure at least one character from every selected set
    const passwordCharacters = selectedSets.map(getRandomCharacter);
  
    // Combine selected character sets
    const allCharacters = selectedSets.join("");
  
    // Fill the remaining password length
    while (passwordCharacters.length < length) {
      passwordCharacters.push(getRandomCharacter(allCharacters));
    }
  
    // Securely shuffle all characters
    const shuffledPassword = secureShuffle(passwordCharacters);
  
    // Ensure the first character is a letter when requested
    if (startWithLetter) {
      const letterCharacters = [
        ...(upperCase ? [uppercaseCharacters] : []),
        ...(lowerCase ? [lowercaseCharacters] : []),
      ].join("");
  
      const firstLetterIndex = shuffledPassword.findIndex((character) =>
        letterCharacters.includes(character)
      );
  
      if (firstLetterIndex === -1) {
        return {
          success: false,
          error: "Unable to generate a password starting with a letter.",
        };
      }
  
      [shuffledPassword[0], shuffledPassword[firstLetterIndex]] = [
        shuffledPassword[firstLetterIndex],
        shuffledPassword[0],
      ];
    }
  
    return {
      success: true,
      password: shuffledPassword.join(""),
    };
  };
  