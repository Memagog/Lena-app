import React, { ReactElement } from "react";
import PortfolioContainer from "./PortfolioContainer";
import "./UI.scss";
type Props = {};



const UI = (props: Props): ReactElement => {
  return (
    <div className="ux_portfolio">
      <div className="ux_portfolio_title">
        <p>UX/UI Projects</p>
      </div>
      <PortfolioContainer />
    </div>
  );
};

export default UI;
