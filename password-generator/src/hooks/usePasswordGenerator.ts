
import { useEffect, useRef, useState } from "react";

import { useStore } from "../store/store";

import { calculateEstimatedStrength } from "../utils/passwordUtils";

export const usePasswordGenerator = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [copied, setCopied] = useState(false);

  const copiedTimeout = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );

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
    passwordStrength,
    generatePassword,
  } = useStore();

  const currentOptions = {
    length,
    upperCase,
    lowerCase,
    numbers,
    symbols,
    excludeSimilar,
    excludeAmbiguous,
    startWithLetter,
  };

  const currentStrength = generatedPassword
    ? passwordStrength
    : calculateEstimatedStrength(currentOptions);

  const handleGeneratePassword = () => {
    const hasSelectedCharacterType =
      upperCase || lowerCase || numbers || symbols;

    if (!hasSelectedCharacterType) {
      alert(
        "Please select at least one character type to generate a password."
      );
      return;
    }

    if (startWithLetter && !upperCase && !lowerCase) {
      alert(
        "Select uppercase or lowercase letters to use the Start with Letter option."
      );
      return;
    }

    generatePassword();
  };

  const handleCopyPassword = async () => {
    if (!generatedPassword) {
      alert("No password to copy. Please generate a password first.");
      return;
    }

    try {
      await navigator.clipboard.writeText(generatedPassword);

      setCopied(true);

      if (copiedTimeout.current) {
        clearTimeout(copiedTimeout.current);
      }

      copiedTimeout.current = setTimeout(() => {
        setCopied(false);
        copiedTimeout.current = null;
      }, 2000);
    } catch {
      alert(
        "Unable to copy the password. Please check your browser permissions."
      );
    }
  };

  useEffect(() => {
    return () => {
      if (copiedTimeout.current) {
        clearTimeout(copiedTimeout.current);
      }
    };
  }, []);

  return {
    showPassword,
    setShowPassword,
    copied,

    currentStrength,

    handleGeneratePassword,
    handleCopyPassword,
  };
};
