import React from "react";
import "../styles/Footer.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <div className="footer">
      <div className="icons">
        <div className="icon">
          <LinkedInIcon />
        </div>
        <div className="icon">
          <InstagramIcon />
        </div>
        <div className="icon">
          <FacebookIcon />
        </div>
        <div className="icon">
          <TwitterIcon />
        </div>
      </div>
      <p>&copy; 2023 Kingsuk Dhar</p>
    </div>
  );
};

export default Footer;
