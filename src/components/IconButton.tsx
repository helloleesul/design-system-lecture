import React from "react";

interface IIconButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  iconPath: string;
  alt: string;
}

const IconButton = ({ onClick, iconPath, alt }: IIconButtonProps) => {
  return (
    <button onClick={onClick}>
      <img src={iconPath} alt={alt} />
    </button>
  );
};

export default IconButton;
