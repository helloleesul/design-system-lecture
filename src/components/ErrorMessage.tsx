import React from "react";

interface IErrorMessageProps {
  children: React.ReactNode;
}

const ErrorMessage = ({ children }: IErrorMessageProps) => {
  return <p className="text-xs text-error">{children}</p>;
};

export default ErrorMessage;
