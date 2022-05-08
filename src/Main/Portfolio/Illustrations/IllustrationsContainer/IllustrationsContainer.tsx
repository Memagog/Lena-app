import React, { ReactElement } from "react";
import "./IllustrationsContainer.scss";
type Props = {};

const PortfolioContainer = (props: Props): ReactElement => {
  return (
    <div className="ux_portfolio_grid">
      <div className="illustrtion_odd">
        <div className="title_block">
          <h1 className="title">
            Starship
          </h1>
        </div>
        <div className="illustrations">
          <img
            className="illustration"
            src={require("../../../../resources/images/illustration.png")}
            alt="illustration"
          />
        </div>
      </div>
      <div className="illustrtion_even"></div>
      <div className="illustrtion_odd2"></div>
      <div className="illustrtion_even2"></div>
      <div className="illustrtion_odd3">
        <div className="MacBookPro_container">
          <img
            className="MacBookPro"
            src={require("../../../../resources/images/MacBookPro.png")}
            alt="tel1"
          />
        </div>
      </div>
      <div className="illustrtion_even3"></div>
    </div>
  );
};

export default PortfolioContainer;
