import React, { FC, ReactElement } from "react";
import "./icons.scss";
export const TelegramIcon: FC<{ onClick?: () => void; className?: string }> = ({
  ...rest
}): ReactElement => (
  <svg
    className="telegram"
    width="38"
    height="38"
    viewBox="0 0 38 38"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ margin: "10px" }}
    {...rest}
  >
    <path
      d="M10.192 9.43365L24.5675 4.64182C31.0162 2.49222 34.5317 6.00771 32.3822 12.4565L27.5904 26.832C24.3659 36.5052 19.0926 36.4941 15.8794 26.832L14.9166 23.9212C14.6703 23.1822 13.853 22.3649 13.1141 22.1185L10.192 21.1445C0.529943 17.9312 0.529945 12.6469 10.192 9.43365Z"
      stroke="#1F8A70"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.3343 22.6894L20.38 16.6436"
      stroke="#1F8A70"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
