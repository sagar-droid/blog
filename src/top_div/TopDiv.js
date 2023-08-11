import React from "react";
import "./TopDiv.css";
import Img1 from "../assets/image 2.jpg";
import CardList from "../cards/Cards";

const TopDiv = () => {
  return (
    <div className="top-container">
      <div className="top-div-image">
        <img src={Img1} alt="" />
      </div>
      <p className="para1">
        A few words about this blog platform, Ghost, and how this site was made
      </p>
      <p className="para2">
        Why Ghost (& Figma) instead of Medium,
        <br />
        WordPress or other options?
      </p>
      <div className="line"></div>
      <CardList />
    </div>
  );
};

export default TopDiv;
