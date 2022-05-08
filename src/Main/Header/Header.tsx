import React, { ReactElement } from "react";
import "./Header.scss";
type Props = {};

const Header = (props: Props): ReactElement => {
  return (
    <div className="header">
      <div className="header_content">
        <div className="header__text_block">
          <h2 className="header__name">HELEN SAUER</h2>
          <h1 className="header__title">UX/UI designer based in Minsk</h1>
        </div>
        <div className="header__text">
          <div className="header__text_ui">
            <p><a href="#ui" >UI/UX</a></p>
          </div>
          <div className="header__text_illustration">
            <p><a href="#illustrations">Illustration</a></p>
          </div>
          <div className="header__text_about">
            <p><a href="#about">About</a></p>
          </div>
        </div>
        <img
          className="header_image"
          src={require("../../resources/images/Header.jpg")}
          alt="Elena"
        />
      </div>
      <img
        className="header_border"
        src={require("../../resources/images/HeaderBorder.png")}
        alt="Elena"
      />
    </div>
  );
};

export default Header;
