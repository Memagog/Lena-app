import React, { ReactElement } from "react";
import { BehanceIcon, TelegramIcon, InstaIcon, BrowserIcon } from '../../resources/icons';
import "./SubHeader.scss";
type Props = {};

const SubHeader = (props: Props): ReactElement => {
  return (
    <div className="sub_header">
      <p className="sub_header_title">
        I am enthusiastic and passionate about Design Thinking process. 
        I enjoy creating meaningful and delightful digital products that balance user
        needs and business goals.{" "}
      </p>
      <div className="sub_header_icons">
        <BehanceIcon onClick={() => console.log('Open instagram')} />
        <BrowserIcon onClick={() => console.log('Open instagram')} />
        <InstaIcon onClick={() => console.log('Open instagram')} />
        <TelegramIcon onClick={() => console.log('Open instagram')} />
      </div>
    </div>
  );
};

export default SubHeader;
