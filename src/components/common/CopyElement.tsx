import { FC } from "react";

interface Props {
  label?: string;
  textToCopy: string;
  className?: string;
}

const CopyElement: FC<Props> = ({ label, textToCopy, className }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(textToCopy);
    alert("Copied to clipboard!");
  };

  return (
    <div className={`copy ${className}`}>
      {label} <strong>{textToCopy}</strong>
      <button onClick={copyToClipboard}>Copy</button>
    </div>
  );
};

export default CopyElement;
