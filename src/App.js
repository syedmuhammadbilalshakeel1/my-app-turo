import "./App.css";
import React from "react";
import FIRSTDIV from "./all-compounent/header/index";
import IMop from "./all-compounent/images/image";
import Banner_bg from "./all-compounent/images";

function App() {
  return (
    <div className="conatiner">
      <div className="firstback">
        <h5>
          <FIRSTDIV />
        </h5>
      </div>

      <div className="">
        <div className="image">
          <IMop />
        </div>


      </div>

      <div className="banner-bg">
        <div className="conatiner">
          <div className="row">
            <div className="col">

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
