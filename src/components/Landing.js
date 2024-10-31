import React from "react";
import team from "../assets/team.jpg"; // Replace with your actual image path
import "./Landing.css"; // Separate CSS file for styling

function Landing() {
  return (
    <div className="background">
      <div className="overlay">
        <div className="content">
          <div className="image-sec">
            <img src={team} alt="The Team" className="image" />
            <p className="subtext">TEDxPESU Team, 2023</p>
          </div>
          <div className="side-text">
            <h1 className="title">
              <span className="ted">TED</span>
              <span className="tedx">x</span>
              <span className="pesu"> PESU</span>
            </h1>
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
