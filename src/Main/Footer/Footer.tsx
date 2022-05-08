import React, { ReactElement } from "react";
import {
  BehanceIcon,
  BrowserIcon,
  InstaIcon,
  TelegramIcon,
} from "../../resources/icons";
import "./Footer.scss";
type Props = {};

const Footer = (props: Props): ReactElement => {
  return (
    <div className="footer">
      <div className="footer_tags">
        <span>UX/UI</span>
        <span>Illustrations</span>
        <span>About</span>
      </div>
      <div className="footer_icons">
        <BehanceIcon onClick={() => console.log("Open instagram")} />
        <BrowserIcon onClick={() => console.log("Open instagram")} />
        <InstaIcon onClick={() => console.log("Open instagram")} />
        <TelegramIcon onClick={() => console.log("Open instagram")} />
      </div>
      <img
        className="footer_img"
        src={require("../../resources/images/Footer.png")}
        alt="Elena"
      />
    </div>
  );
};

export default Footer;
