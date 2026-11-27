export interface PasswordStrength {
  score: number;
  label: string;
  color: string;
}

export interface PasswordOptions {
  length: number;
  upperCase: boolean;
  lowerCase: boolean;
  numbers: boolean;
  symbols: boolean;
  excludeSimilar: boolean;
  excludeAmbiguous: boolean;
  startWithLetter: boolean;
}

export type PasswordGenerationResult =
  | {
      success: true;
      password: string;
    }
  | {
      success: false;
      error: string;
    };
