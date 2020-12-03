import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Ricon from "./images/referrals-icon-15.jpg";
import Zicon from "./images/zero investment image icon.png";
import Sicon from "./images/small investment icon.svg";
import Micon from "./images/large investment icon.png";



function Home(){

  return (<div>
    <Header/>
    <div className="nav-below">
      <div className="nav-blw-content">
        <p> <span className="nav-span">Earn money with your potential</span></p>
        <ul>
          <li>
            <div className="icon-img">
              < img src = {
    Ricon
  }
  alt = "refferal icon" / >
            </div>
            <span><a href="#">Refferal Program</a></span>
          </li>
          <li>
            <div className="icon-img">
              <img src={Zicon} alt="zero investment icon"/>
            </div>
            <span><a href="#">Zero Investment</a></span>
          </li>
          <li>
            <div className="icon-img">
              <img src={Sicon} alt="small investment icon"/>
            </div>
            <span><a href="#">Small Investment</a></span>
          </li>
          <li>
            <div className="icon-img">
              <img src={Micon} alt="large investment icon"/>
            </div>
            <span><a href="#">Medium Investment</a></span>
          </li>
        </ul>
      </div>
    </div>


    <Footer/>
    </div>
  );

}
export default Home;
