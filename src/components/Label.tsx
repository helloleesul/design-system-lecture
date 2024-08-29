import React from "react";

interface ILabelProps {
  htmlFor: string;
  children: React.ReactNode;
}

const Label = ({ htmlFor, children }: ILabelProps) => {
  return (
    <label htmlFor={htmlFor} className="text-sm text-primary">
      {children}
    </label>
  );
};

export default Label;
