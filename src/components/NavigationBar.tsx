import IconButton from "./IconButton.tsx";
import React from "react";

interface INavigationBarProps {
  showBackButton: boolean;
  showCloseButton: boolean;
  showTitle: boolean;
  title?: string;
  onBackButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
  onCloseButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const NavigationBar = ({
  showBackButton,
  showCloseButton,
  showTitle,
  title = "",
  onBackButtonClick = () => {},
  onCloseButtonClick = () => {},
}: INavigationBarProps) => {
  return (
    <div>
      {/* 뒤로가기 버튼 */}
      {showBackButton && (
        <IconButton
          onClick={onBackButtonClick}
          alt="back-arrow"
          iconPath={`https://kr.object.ncloudstorage.com/icons/ic-back-arrow.svg`}
        />
      )}
      {/* 페이지 이름 */}
      {showTitle && <h1>{title}</h1>}
      {/* 닫기 버튼 */}
      {showCloseButton && (
        <IconButton
          onClick={onCloseButtonClick}
          alt="close"
          iconPath={`https://kr.object.ncloudstorage.com/icons/ic-close.svg`}
        />
      )}
    </div>
  );
};

export default NavigationBar;
