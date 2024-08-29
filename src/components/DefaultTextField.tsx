import IconButton from "./IconButton.tsx";
import ErrorMessage from "./ErrorMessage.tsx";
import React, { useState } from "react";

interface IDefaultTextFieldProps {
  iconPath: string;
  iconAlt: string;
  onIconClick: React.MouseEventHandler<HTMLButtonElement>;
  placeholder: string;
  value: string;
  errorMessage: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  isError: boolean;
  id: string;
}

const DefaultTextField = ({
  iconPath,
  iconAlt,
  onIconClick,
  value,
  placeholder,
  errorMessage,
  onChange,
  isError,
  id,
}: IDefaultTextFieldProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const borderColor = isFocused
    ? "border-secondary"
    : !value
      ? "border-mono300"
      : "border-primary";

  return (
    <div className="text-field">
      <div
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`text-primary border-b ${borderColor}`}
      >
        <input
          id={id}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="outline-none"
        />
        {!!value && (
          <IconButton onClick={onIconClick} iconPath={iconPath} alt={iconAlt} />
        )}
      </div>
      {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
};

export default DefaultTextField;
