import React from "react";
import CardData from "./CardData";
import "./Cards.css";
import { Link } from "react-router-dom";

const CardList = () => {
  return (
    <div className="card-container">
      <h2>All Articles</h2>
      <div className="card-list">
        {CardData.map((card, index) => (
          <Link to={`/card/${index}`} key={index} className="card-link">
            <div className="card">
              <img src={card.imageUrl} alt={card.title} />
              <p>{card.content}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CardList;
