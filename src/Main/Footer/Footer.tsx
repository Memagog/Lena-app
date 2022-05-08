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
        <span><a href="#ui">UI/UX</a></span>
        <span><a href="#illustrations">Illustration</a></span>
        <span><a href="#about">About</a></span>
      </div>
      <div className="footer_icons" id="about">
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
