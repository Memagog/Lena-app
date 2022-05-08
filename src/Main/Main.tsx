import React, { ReactElement } from "react";

import Header from "./Header";
import Illustrations from "./Portfolio/Illustrations";
import SubHeader from "./SubHeader";
import UI from "./Portfolio/UI";
import Footer from "./Footer";

interface IMainProps {}

const Main = (props: IMainProps): ReactElement => {
  return (
    <div>
      <Header />
      <SubHeader />
      <UI />
      <Illustrations />
      <Footer />
    </div>
  );
};

export default Main;
