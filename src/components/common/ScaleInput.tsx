import { FC, InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const ScaleInput: FC<Props> = ({ label, ...rest }: Props) => {
  return (
    <div className="scale">
      <label className="scale__input">{label}</label>
      <input type="range" {...rest} />
    </div>
  );
};

export default ScaleInput;
