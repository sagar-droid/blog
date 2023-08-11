import React from "react";
import CardData from "./CardData";
import "./Cards.css";

const CardList = () => {
  return (
    <div className="card-container">
      <h2>All Articles</h2>
      <div className="card-list">
        {CardData.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.imageUrl} alt={card.title} />
            <p>{card.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardList;
