import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiCopy,
  FiRefreshCw,
  FiEye,
  FiEyeOff,
  FiShield,
  FiLock,
  FiCheck,
} from "react-icons/fi";
import { useStore } from "../store/store";

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
    passwordStrength,
    generatePassword,
    setLength,
    setLowerCase,
    setUpperCase,
    setNumbers,
    setSymbols,
    setExcludeSimilar,
    setExcludeAmbiguous,
    setStartWithLetter,
  } = useStore();

  const [showPassword, setShowPassword] = useState(true);
  const [copied, setCopied] = useState(false);

  const handleGeneratePassword = () => {
    // Validate that at least one character type is selected
    if (!upperCase && !lowerCase && !numbers && !symbols) {
      alert(
        "Please select at least one character type to generate a password."
      );
      return;
    }
    generatePassword();
  };

  const handleCopyPassword = () => {
    if (!generatedPassword) {
      alert("No password to copy. Please generate a password first.");
      return;
    }
    navigator.clipboard.writeText(generatedPassword);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Calculate strength for current settings (preview)
  const getCurrentStrength = () => {
    if (!upperCase && !lowerCase && !numbers && !symbols) {
      return { score: 0, label: "Very Weak", color: "text-red-400" };
    }

    let estimatedScore = 0;
    if (length >= 4) estimatedScore += 5;
    if (length >= 8) estimatedScore += 10;
    if (length >= 12) estimatedScore += 5;
    if (length >= 16) estimatedScore += 5;

    if (upperCase) estimatedScore += 10;
    if (lowerCase) estimatedScore += 10;
    if (numbers) estimatedScore += 10;
    if (symbols) estimatedScore += 20;

    // Estimate variety bonus
    const selectedTypes = [upperCase, lowerCase, numbers, symbols].filter(
      Boolean
    ).length;
    estimatedScore += Math.min(25, (selectedTypes / 4) * 25);

    let label: string;
    let color: string;

    if (estimatedScore < 20) {
      label = "Very Weak";
      color = "text-red-400";
    } else if (estimatedScore < 40) {
      label = "Weak";
      color = "text-orange-400";
    } else if (estimatedScore < 60) {
      label = "Fair";
      color = "text-yellow-400";
    } else if (estimatedScore < 80) {
      label = "Good";
      color = "text-blue-400";
    } else {
      label = "Strong";
      color = "text-green-400";
    }

    return { score: Math.min(100, estimatedScore), label, color };
  };

  const currentStrength = generatedPassword
    ? passwordStrength
    : getCurrentStrength();

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 p-8"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4"
          >
            <FiShield className="w-8 h-8 text-white" />
          </motion.div>
          <h1 className="text-2xl font-bold text-white mb-2">
            Password Generator
          </h1>
          <p className="text-gray-400 text-sm">
            Create strong and secure passwords
          </p>
        </div>

        {/* Password Display */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Generated Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              readOnly
              value={generatedPassword}
              placeholder="Your password will appear here..."
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-20"
            />
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex space-x-1">
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="p-2 text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                {showPassword ? (
                  <FiEyeOff className="w-4 h-4" />
                ) : (
                  <FiEye className="w-4 h-4" />
                )}
              </button>
              <button
                onClick={handleCopyPassword}
                className="p-2 cursor-pointer text-gray-400 hover:text-white transition-colors"
              >
                {copied ? (
                  <FiCheck className="w-4 h-4 text-green-400" />
                ) : (
                  <FiCopy className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Password Length */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <label className="text-sm font-medium text-gray-300">
              Password Length
            </label>
            <span className="text-sm text-blue-400 font-mono bg-gray-700 px-2 py-1 rounded">
              {length}
            </span>
          </div>
          <div className="relative">
            <input
              type="range"
              min="4"
              max="50"
              defaultValue={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>4</span>
              <span>50</span>
            </div>
          </div>
        </div>

        {/* Character Options */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-300 mb-3">
            Include Characters
          </label>
          <div className="space-y-3">
            {/* Uppercase Letters */}
            <motion.label
              className="flex items-center cursor-pointer group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative">
                <input
                  type="checkbox"
                  checked={upperCase}
                  onChange={() => setUpperCase(!upperCase)}
                  className="sr-only"
                />
                <motion.div
                  className={`w-5 h-5 rounded-md border-2 transition-all duration-200 flex items-center justify-center ${
                    upperCase
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 border-transparent shadow-lg shadow-blue-500/25"
                      : "bg-gray-700 border-gray-500 group-hover:border-blue-400 group-hover:bg-gray-600"
                  }`}
                  animate={{
                    scale: upperCase ? 1.1 : 1,
                    rotate: upperCase ? 360 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {upperCase && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.1 }}
                    >
                      <FiCheck className="w-3 h-3 text-white font-bold" />
                    </motion.div>
                  )}
                </motion.div>
              </div>
              <span className="ml-3 text-sm text-gray-300 group-hover:text-white transition-colors duration-200">
                Uppercase Letters (A-Z)
              </span>
            </motion.label>

            {/* Lowercase Letters */}
            <motion.label
              className="flex items-center cursor-pointer group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative">
                <input
                  type="checkbox"
                  checked={lowerCase}
                  onChange={() => setLowerCase(!lowerCase)}
                  className="sr-only"
                />
                <motion.div
                  className={`w-5 h-5 rounded-md border-2 transition-all duration-200 flex items-center justify-center ${
                    lowerCase
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 border-transparent shadow-lg shadow-blue-500/25"
                      : "bg-gray-700 border-gray-500 group-hover:border-blue-400 group-hover:bg-gray-600"
                  }`}
                  animate={{
                    scale: lowerCase ? 1.1 : 1,
                    rotate: lowerCase ? 360 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {lowerCase && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.1 }}
                    >
                      <FiCheck className="w-3 h-3 text-white font-bold" />
                    </motion.div>
                  )}
                </motion.div>
              </div>
              <span className="ml-3 text-sm text-gray-300 group-hover:text-white transition-colors duration-200">
                Lowercase Letters (a-z)
              </span>
            </motion.label>

            {/* Numbers */}
            <motion.label
              className="flex items-center cursor-pointer group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative">
                <input
                  type="checkbox"
                  checked={numbers}
                  onChange={() => setNumbers(!numbers)}
                  className="sr-only"
                />
                <motion.div
                  className={`w-5 h-5 rounded-md border-2 transition-all duration-200 flex items-center justify-center ${
                    numbers
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 border-transparent shadow-lg shadow-blue-500/25"
                      : "bg-gray-700 border-gray-500 group-hover:border-blue-400 group-hover:bg-gray-600"
                  }`}
                  animate={{
                    scale: numbers ? 1.1 : 1,
                    rotate: numbers ? 360 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {numbers && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.1 }}
                    >
                      <FiCheck className="w-3 h-3 text-white font-bold" />
                    </motion.div>
                  )}
                </motion.div>
              </div>
              <span className="ml-3 text-sm text-gray-300 group-hover:text-white transition-colors duration-200">
                Numbers (0-9)
              </span>
            </motion.label>

            {/* Symbols */}
            <motion.label
              className="flex items-center cursor-pointer group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative">
                <input
                  type="checkbox"
                  checked={symbols}
                  onChange={() => setSymbols(!symbols)}
                  className="sr-only"
                />
                <motion.div
                  className={`w-5 h-5 rounded-md border-2 transition-all duration-200 flex items-center justify-center ${
                    symbols
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 border-transparent shadow-lg shadow-blue-500/25"
                      : "bg-gray-700 border-gray-500 group-hover:border-blue-400 group-hover:bg-gray-600"
                  }`}
                  animate={{
                    scale: symbols ? 1.1 : 1,
                    rotate: symbols ? 360 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {symbols && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.1 }}
                    >
                      <FiCheck className="w-3 h-3 text-white font-bold" />
                    </motion.div>
                  )}
                </motion.div>
              </div>
              <span className="ml-3 text-sm text-gray-300 group-hover:text-white transition-colors duration-200">
                Symbols (!@#$%^&*)
              </span>
            </motion.label>
          </div>
        </div>

        {/* Advanced Options */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-300 mb-3">
            Advanced Options
          </label>
          <div className="space-y-3">
            {/* Exclude Similar Characters */}
            <motion.label
              className="flex items-center cursor-pointer group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative">
                <input
                  type="checkbox"
                  checked={excludeSimilar}
                  onChange={() => setExcludeSimilar(!excludeSimilar)}
                  className="sr-only"
                />
                <motion.div
                  className={`w-5 h-5 rounded-md border-2 transition-all duration-200 flex items-center justify-center ${
                    excludeSimilar
                      ? "bg-gradient-to-r from-emerald-500 to-teal-600 border-transparent shadow-lg shadow-emerald-500/25"
                      : "bg-gray-700 border-gray-500 group-hover:border-emerald-400 group-hover:bg-gray-600"
                  }`}
                  animate={{
                    scale: excludeSimilar ? 1.1 : 1,
                    rotate: excludeSimilar ? 360 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {excludeSimilar && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.1 }}
                    >
                      <FiCheck className="w-3 h-3 text-white font-bold" />
                    </motion.div>
                  )}
                </motion.div>
              </div>
              <span className="ml-3 text-sm text-gray-300 group-hover:text-white transition-colors duration-200">
                Exclude Similar Characters (0, O, l, 1)
              </span>
            </motion.label>

            {/* Exclude Ambiguous Characters */}
            <motion.label
              className="flex items-center cursor-pointer group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative">
                <input
                  type="checkbox"
                  checked={excludeAmbiguous}
                  onChange={() => setExcludeAmbiguous(!excludeAmbiguous)}
                  className="sr-only"
                />
                <motion.div
                  className={`w-5 h-5 rounded-md border-2 transition-all duration-200 flex items-center justify-center ${
                    excludeAmbiguous
                      ? "bg-gradient-to-r from-emerald-500 to-teal-600 border-transparent shadow-lg shadow-emerald-500/25"
                      : "bg-gray-700 border-gray-500 group-hover:border-emerald-400 group-hover:bg-gray-600"
                  }`}
                  animate={{
                    scale: excludeAmbiguous ? 1.1 : 1,
                    rotate: excludeAmbiguous ? 360 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {excludeAmbiguous && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.1 }}
                    >
                      <FiCheck className="w-3 h-3 text-white font-bold" />
                    </motion.div>
                  )}
                </motion.div>
              </div>
              <span className="ml-3 text-sm text-gray-300 group-hover:text-white transition-colors duration-200">
                Exclude Ambiguous Characters (&#123;&#125; [ ] ( ) / \ ' " ` ~ ,
                ; . &lt;&gt;)
              </span>
            </motion.label>

            {/* Start with Letter */}
            <motion.label
              className="flex items-center cursor-pointer group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative">
                <input
                  type="checkbox"
                  checked={startWithLetter}
                  onChange={() => setStartWithLetter(!startWithLetter)}
                  className="sr-only"
                />
                <motion.div
                  className={`w-5 h-5 rounded-md border-2 transition-all duration-200 flex items-center justify-center ${
                    startWithLetter
                      ? "bg-gradient-to-r from-emerald-500 to-teal-600 border-transparent shadow-lg shadow-emerald-500/25"
                      : "bg-gray-700 border-gray-500 group-hover:border-emerald-400 group-hover:bg-gray-600"
                  }`}
                  animate={{
                    scale: startWithLetter ? 1.1 : 1,
                    rotate: startWithLetter ? 360 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {startWithLetter && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.1 }}
                    >
                      <FiCheck className="w-3 h-3 text-white font-bold" />
                    </motion.div>
                  )}
                </motion.div>
              </div>
              <span className="ml-3 text-sm text-gray-300 group-hover:text-white transition-colors duration-200">
                Start with Letter
              </span>
            </motion.label>
          </div>
        </div>

        {/* Password Strength Indicator */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-300">
              Password Strength
            </span>
            <span className={`text-sm font-medium ${currentStrength.color}`}>
              {currentStrength.label}
            </span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${currentStrength.score}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className={`h-2 rounded-full ${
                currentStrength.score < 20
                  ? "bg-red-500"
                  : currentStrength.score < 40
                  ? "bg-orange-500"
                  : currentStrength.score < 60
                  ? "bg-yellow-500"
                  : currentStrength.score < 80
                  ? "bg-blue-500"
                  : "bg-green-500"
              }`}
            ></motion.div>
          </div>
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>0</span>
            <span>25</span>
            <span>50</span>
            <span>75</span>
            <span>100</span>
          </div>
        </div>

        {/* Generate Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleGeneratePassword}
          disabled={!upperCase && !lowerCase && !numbers && !symbols}
          className={`w-full font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg ${
            !upperCase && !lowerCase && !numbers && !symbols
              ? "bg-gray-600 text-gray-400 cursor-not-allowed"
              : "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 cursor-pointer"
          }`}
        >
          <FiRefreshCw className="w-5 h-5" />
          <span>Generate Password</span>
        </motion.button>

        {/* Additional Actions */}
        <div className="mt-4 flex space-x-2">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 bg-gray-700 text-gray-300 font-medium py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors duration-200 flex items-center justify-center space-x-2"
          >
            <FiLock className="w-4 h-4" />
            <span>Save</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleCopyPassword}
            disabled={copied}
            className={`flex-1 bg-gray-700 font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 ${
              copied
                ? "bg-green-600 text-white shadow-green-400"
                : "text-gray-300 cursor-pointer hover:bg-gray-600"
            }`}
          >
            {copied ? (
              <span className="flex items-center justify-center space-x-2 w-full">
                <FiCheck className="w-4 h-4 text-white" />
                <span>Copied!</span>
              </span>
            ) : (
              <>
                <FiCopy className="w-4 h-4" />
                <span>Copy</span>
              </>
            )}
          </motion.button>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">
            Generated passwords are created locally and never sent to servers
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default PasswordGenerator;
