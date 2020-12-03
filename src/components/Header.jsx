import React from "react";
import {ReactNavbar} from "react-responsive-animate-navbar";
import Logo from "./images/website logo.png";



function Header(){

  return( <div><div className="navbar"></div><ReactNavbar
        color="#3b6978"
        logo={Logo}
        menu={[
          { name: "HOME", to: "/" },
          { name: "Free Earnings", to: "/" },
          { name: "Invest & Earn", to: "/" },

        ]}
        social={[
          {
            name: "Linkedin",
            url: "https://www.linkedin.com/in/nazeh-taha/",
            icon: ["fab", "linkedin-in"],
          },
          {
            name: "Facebook",
            url: "https://www.facebook.com/nazeh200/",
            icon: ["fab", "facebook-f"],
          },
          {
            name: "Instagram",
            url: "https://www.instagram.com/nazeh_taha/",
            icon: ["fab", "instagram"],
          },
          {
            name: "Twitter",
            url: "http://nazehtaha.herokuapp.com/",
            icon: ["fab", "twitter"],
          },
        ]}
      /></div>);
}

export default Header;
