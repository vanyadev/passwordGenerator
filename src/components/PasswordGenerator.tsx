import { useState } from "react";
import usePasswordGenerator from "../hooks/usePasswordGenerator";
import CheckboxInput from "./common/CheckboxInput";
import CopyElement from "./common/CopyElement";
import ScaleInput from "./common/ScaleInput";

const PasswordGenerator = () => {
  const {
    passwordLength,
    setPasswordLength,
    checkboxes,
    handleCheckboxChange,
    generatePassword,
  } = usePasswordGenerator();

  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPassword(generatePassword());
  };

  const options = [
    {
      key: "includeLowercase",
      label: "Include Lowercase",
      checked: checkboxes.includeLowercase,
    },
    {
      key: "includeUppercase",
      label: "Include Uppercase",
      checked: checkboxes.includeUppercase,
    },
    {
      key: "includeNumbers",
      label: "Include Numbers",
      checked: checkboxes.includeNumbers,
    },
    {
      key: "includeSymbols",
      label: "Include Symbols",
      checked: checkboxes.includeSymbols,
    },
  ];

  return (
    <form className="password-generator" onSubmit={handleSubmit}>
      <CopyElement textToCopy={password} className="mb-1" />

      <ScaleInput
        label={`Password Length ${passwordLength}:`}
        value={passwordLength}
        max="50"
        min="0"
        onChange={(e) => setPasswordLength(Number(e.target.value))}
        className="mb-1"
      />

      {options.map((option, index) => (
        <CheckboxInput
          key={index}
          label={option.label}
          checked={option.checked}
          onChange={(e) => handleCheckboxChange(option.key, e.target.checked)}
        />
      ))}

      <button type="submit" className="btn btn--green">
        Generate Password
      </button>
    </form>
  );
};

export default PasswordGenerator;
