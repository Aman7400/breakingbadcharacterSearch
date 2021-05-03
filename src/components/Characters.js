import React from "react";
import CharacterCard from "./CharacterCard";
import "./Characters.css";
import Loading from "./Loading";

const Characters = ({ items, loading }) => {
  return loading ? (
    <Loading />
  ) : (
    <div className="Cards">
      {items.map((item, index) => {
        return <CharacterCard key={index} item={item} />;
      })}
    </div>
  );
};

export default Characters;
