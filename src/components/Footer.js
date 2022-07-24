import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from '@mui/icons-material/Telegram';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <TelegramIcon /> <InstagramIcon /> <TwitterIcon /> <FacebookIcon /> <LinkedInIcon />
      </div>
      <p> &copy; 2022 realFood.com</p>
    </div>
  );
}

export default Footer;
