import React from "react";
import {
  useLayoutEffect,
  useState
} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Abt_d_img from "./images/about us main image.jpg";
import Abt_m_img from "./images/about us main image mobile.jpg";
import Mission from "./images/our mission image.jpg";
import Vision from "./images/our vision image.jpg";
import Opportunities from "./images/opportunites image.jpg";

function About() {
  var ismobile = true;
  if (window.innerWidth <= 640) {
    ismobile = false;
  }


  return ( < div >
    <
    Header / >
    <
    img src = {
      ismobile ? Abt_d_img : Abt_m_img
    }
    className = "Main-img"
    alt = "about us image" / >
    <
    div className = "About-content"
    style = {
      {
        backgroundColor: 'white'
      }
    } >
    <
    p className = "About-head" > A Word About Earnopedia < /p> <
    div className = "cnt-div" >
    <
    span className = "cnt-spn" > Our Mission < /span> <
    img src = {
      Mission
    }
    className = "content-img1"
    alt = "mission image" / >
    <
    p className = "cnt-par" > Guiding and increase enthusiasm of every person to work from home and small bussiness. < /p> <
    /div> <
    div className = "cnt-div" >
    <
    span className = "cnt-spn" > Our Vision < /span> <
    img src = {
      Vision
    }
    className = "content-img2"
    alt = "Vision image" / >
    <
    p className = "cnt-par" > To reduce the unemployment and everyone should be able to earn as much as they spent. < /p> <
    /div> <
    div className = "cnt-div" >
    <
    span className = "cnt-spn" > Working Opportunities < /span> <
    img src = {
      Opportunities
    }
    className = "content-img3"
    alt = "Opportunities image" / >
    <
    p className = "cnt-par" > We suggests working and earning from home opportunities to the our visitors. < /p> <
    p className = "cnt-par" > At this platform, We suggests some small bussiness idea also. < /p> <
    /div> <
    div className = "cnt-div" >
    <
    span className = "cnt-spn" > Who Are We ? < /span>

    <
    p className = "cnt-par" > Earnopedia started in Shubham Vora’ s Hostel living room in 2020 to help the people and reduce the unemployment. < /p> <
    /div> <
    /div> <
    Footer / >
    <
    /div>
  );
}

export default About;
