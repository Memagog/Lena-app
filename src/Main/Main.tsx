import React, { ReactElement } from "react";
import PortfolioContainer from "./Portfolio/PortfolioPage";
import Header from "./Header";
import Illustrations from "./Portfolio/Illustrations/Illustrations";

interface IMainProps {}

const Main = (props: IMainProps): ReactElement => {
  return (
    <div>
      <Header />
      <PortfolioContainer />
      <Illustrations />
    </div>
  );
};

export default Main;
