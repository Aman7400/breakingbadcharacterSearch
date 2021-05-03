import React from "react";
import "./CharacterCard.css";

const CharacterCard = ({ item }) => {
  return (
    <div className="Card">
      <div className="Card-Inner">
        <div className="Card-Front">
          <img src={item.img} alt="" />
        </div>
        <div className="Card-Back center">
          <h1>{item.name}</h1>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
