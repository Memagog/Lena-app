import React, { ReactElement } from "react";
import './Illustrations.scss'
import IllustrationsContainer from "./IllustrationsContainer";
type Props = {};

const Illustrations = (props: Props): ReactElement => {
  return (
    <div className="ux_portfolio">
      <div className="ux_portfolio_title">
        <p>Illustrations</p>
      </div>
      <IllustrationsContainer />
    </div>
   
  );
};

export default Illustrations;
