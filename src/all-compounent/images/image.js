import IMag from "../images/logo.eddd60beeb7a227cf959.png";
import "./image.css";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscAccount } from "react-icons/vsc";

import Stack from 'react-bootstrap/Stack';

function HorizontalVerticalRulesExample() {
  return (
    <Stack direction="horizontal" gap={3}>
      <div className=""><img className="imge-one" src={IMag}/> </div>
      <div className="ms-auto button"><button>become a host</button></div>
      <div className="" />
      <div className="">
        <div className="image-icon">
        <GiHamburgerMenu />
        
        <VscAccount className="icon"/>


        </div>
      </div>
    </Stack>
  );
}

export default HorizontalVerticalRulesExample;

