import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assests/menu.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="headerContainer">
        <div className="row">
          <div className="banner">
            <img src={BannerImage} alt="" />
          </div>

          <div>
            <h1 style={{ fontWeight: "bold",color:"green" }}> Real Food</h1>
            <p>Ethiopian Food At Click</p>
            <Link to="/menu">
              <button> ORDER NOW </button>
            </Link>
          </div>
         
        </div>
        
      </div>
    </div>
  );
}

export default Home;
