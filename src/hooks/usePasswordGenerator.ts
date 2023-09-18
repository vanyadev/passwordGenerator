import { useState } from "react";
import {
  lowerChars,
  numberChars,
  symbolChars,
  upperChars,
} from "../data/chars";
import { CheckboxStates, PasswordGeneratorHook } from "../entities/generator";

const usePasswordGenerator = (): PasswordGeneratorHook => {
  const [passwordLength, setPasswordLength] = useState<number>(10);

  const [checkboxes, setCheckboxes] = useState<CheckboxStates>({
    includeLowercase: true,
    includeUppercase: false,
    includeNumbers: false,
    includeSymbols: false,
  });

  const countTrueCheckboxes = (obj: CheckboxStates): number => {
    return Object.values(obj).filter(Boolean).length;
  };

  const handleCheckboxChange = (key: string, value: boolean): void => {
    if (!value && countTrueCheckboxes(checkboxes) === 1 && checkboxes[key]) {
      return; // Don't allow the last true checkbox to be set to false
    }
    setCheckboxes((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const generatePassword = () => {
    let chars = "";
    if (checkboxes.includeLowercase) chars += lowerChars;
    if (checkboxes.includeUppercase) chars += upperChars;
    if (checkboxes.includeNumbers) chars += numberChars;
    if (checkboxes.includeSymbols) chars += symbolChars;

    let password = "";
    for (let i = 0; i < passwordLength; i++) {
      password += chars[Math.floor(Math.random() * chars.length)];
    }

    return password;
  };

  return {
    passwordLength,
    setPasswordLength,
    checkboxes,
    handleCheckboxChange,
    generatePassword,
  };
};

export default usePasswordGenerator;
