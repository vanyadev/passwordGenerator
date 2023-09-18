import { FC } from "react";
import toast from "react-hot-toast";
import { BiCopy } from "react-icons/bi";

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
      <BiCopy onClick={copyToClipboard} cursor="pointer" />
    </div>
  );
};

export default CopyElement;
