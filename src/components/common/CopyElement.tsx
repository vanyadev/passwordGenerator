import { FC } from "react";
import toast from "react-hot-toast";

interface Props {
  label?: string;
  textToCopy: string;
  className?: string;
}

const CopyElement: FC<Props> = ({ label, textToCopy, className }) => {
  const copyToClipboard = (e: React.FormEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(textToCopy);
    toast.success("Copied to clipboard.");
  };

  return (
    <div className={`copy ${className}`}>
      {label} <strong className="copy__text">{textToCopy}</strong>
      <button onClick={copyToClipboard}>Copy</button>
    </div>
  );
};

export default CopyElement;
