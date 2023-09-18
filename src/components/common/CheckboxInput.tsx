import { FC, InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const CheckboxInput: FC<Props> = ({ label, ...rest }: Props) => {
  const inputId = `${label}-input`;

  return (
    <div className="checkbox">
      <input id={inputId} type="checkbox" {...rest} />
      <label htmlFor={inputId}>{label}</label>
    </div>
  );
};

export default CheckboxInput;
