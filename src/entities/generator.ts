export type CheckboxStates = {
  [key: string]: boolean;
};

export type PasswordGeneratorHook = {
  passwordLength: number;
  setPasswordLength: React.Dispatch<React.SetStateAction<number>>;
  checkboxes: CheckboxStates;
  handleCheckboxChange: (key: string, value: boolean) => void;
  generatePassword: () => string;
};
