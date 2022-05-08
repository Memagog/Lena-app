import React, { FC, ReactElement } from "react";
import "./icons.scss";
export const InstaIcon: FC<{ onClick?: () => void; className?: string }> = ({
  ...rest
}): ReactElement => (
  <svg
    width="36"
    height="37"
    viewBox="0 0 36 37"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ margin: "10px" }}
    {...rest}
  >
    <path
      d="M18.0106 3.24331C22.8227 3.24331 23.3926 3.26441 25.2851 3.34884C27.044 3.42623 27.9937 3.72171 28.6269 3.96795C29.4641 4.29158 30.0692 4.68556 30.6953 5.31171C31.3285 5.94489 31.7155 6.5429 32.0391 7.38011C32.2853 8.01329 32.5808 8.9701 32.6582 10.7219C32.7426 12.6215 32.7637 13.1913 32.7637 17.9965C32.7637 22.8087 32.7426 23.3785 32.6582 25.2711C32.5808 27.0299 32.2853 27.9797 32.0391 28.6129C31.7155 29.4501 31.3215 30.0551 30.6953 30.6813C30.0621 31.3144 29.4641 31.7014 28.6269 32.025C27.9937 32.2713 27.0369 32.5667 25.2851 32.6441C23.3856 32.7285 22.8157 32.7497 18.0106 32.7497C13.1984 32.7497 12.6285 32.7285 10.736 32.6441C8.97714 32.5667 8.02736 32.2713 7.39418 32.025C6.55697 31.7014 5.95192 31.3074 5.32578 30.6813C4.69259 30.0481 4.30565 29.4501 3.98202 28.6129C3.73578 27.9797 3.4403 27.0229 3.36291 25.2711C3.27848 23.3715 3.25738 22.8016 3.25738 17.9965C3.25738 13.1843 3.27848 12.6144 3.36291 10.7219C3.4403 8.96306 3.73578 8.01329 3.98202 7.38011C4.30565 6.5429 4.69963 5.93785 5.32578 5.31171C5.95896 4.67852 6.55697 4.29158 7.39418 3.96795C8.02736 3.72171 8.98417 3.42623 10.736 3.34884C12.6285 3.26441 13.1984 3.24331 18.0106 3.24331ZM18.0106 0C13.121 0 12.5089 0.0211061 10.5882 0.105531C8.67461 0.189955 7.359 0.499511 6.21927 0.94274C5.03029 1.40707 4.02423 2.01915 3.02521 3.02521C2.01915 4.02423 1.40707 5.03029 0.94274 6.21223C0.499511 7.359 0.189955 8.66758 0.105531 10.5812C0.0211061 12.5089 0 13.121 0 18.0106C0 22.9001 0.0211061 23.5122 0.105531 25.4329C0.189955 27.3465 0.499511 28.6621 0.94274 29.8018C1.40707 30.9908 2.01915 31.9969 3.02521 32.9959C4.02423 33.9949 5.03029 34.614 6.21223 35.0713C7.359 35.5146 8.66758 35.8241 10.5812 35.9085C12.5019 35.993 13.1139 36.0141 18.0035 36.0141C22.8931 36.0141 23.5052 35.993 25.4258 35.9085C27.3395 35.8241 28.6551 35.5146 29.7948 35.0713C30.9767 34.614 31.9828 33.9949 32.9818 32.9959C33.9808 31.9969 34.6 30.9908 35.0573 29.8089C35.5005 28.6621 35.81 27.3535 35.8945 25.4399C35.9789 23.5193 36 22.9072 36 18.0176C36 13.128 35.9789 12.5159 35.8945 10.5953C35.81 8.68165 35.5005 7.36603 35.0573 6.2263C34.614 5.03029 34.002 4.02423 32.9959 3.02521C31.9969 2.02619 30.9908 1.40707 29.8089 0.949775C28.6621 0.506547 27.3535 0.19699 25.4399 0.112566C23.5122 0.0211061 22.9001 0 18.0106 0Z"
      fill="#1F8A70"
    />
    <path
      d="M18.0105 8.75903C12.9029 8.75903 8.75903 12.9029 8.75903 18.0105C8.75903 23.1182 12.9029 27.2621 18.0105 27.2621C23.1182 27.2621 27.2621 23.1182 27.2621 18.0105C27.2621 12.9029 23.1182 8.75903 18.0105 8.75903ZM18.0105 24.0117C14.6969 24.0117 12.0094 21.3242 12.0094 18.0105C12.0094 14.6969 14.6969 12.0094 18.0105 12.0094C21.3242 12.0094 24.0117 14.6969 24.0117 18.0105C24.0117 21.3242 21.3242 24.0117 18.0105 24.0117Z"
      fill="#1F8A70"
    />
    <path
      d="M29.7878 8.39302C29.7878 9.58903 28.8169 10.5529 27.6279 10.5529C26.4319 10.5529 25.468 9.582 25.468 8.39302C25.468 7.197 26.4389 6.23315 27.6279 6.23315C28.8169 6.23315 29.7878 7.20404 29.7878 8.39302Z"
      fill="#1F8A70"
    />
  </svg>
);