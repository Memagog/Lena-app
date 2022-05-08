import React, { ReactElement } from "react";
import "./PortfolioContainer.scss";
type Props = {};

const PortfolioContainer = (props: Props): ReactElement => {
  return (
    <div className="ux_portfolio_grid">
      <div className="odd">
        <div className="title_block">
          <h1 className="title">
            Great app
            <br /> for great people
          </h1>
        </div>
        <div className="telefons">
          <img
            className="tel1"
            src={require("../../../../resources/images/Telefon1.png")}
            alt="tel1"
          />
          <img
            className="tel2"
            src={require("../../../../resources/images/Telefon2.png")}
            alt="tel2"
          />
        </div>
      </div>
      <div className="even"></div>
      <div className="odd2"></div>
      <div className="even2"></div>
      <div className="odd3">
        <div className="MacBookPro_container">
          <img
            className="MacBookPro"
            src={require("../../../../resources/images/MacBookPro.png")}
            alt="tel1"
          />
        </div>
      </div>
      <div className="even3"></div>
    </div>
  );
};

export default PortfolioContainer;
