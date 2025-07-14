import React from "react";
import SingleItem from "./SingleItem";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";

const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const ItemList = ({ tittle, items, path, idpath, type }) => {
  const sourceArray = type === "artist" ? artistArray : songsArray;

  const shuffledArray = shuffleArray(sourceArray);

  return (
    <div className="main">
      <div className="main__texts">
        <p>Featured {tittle}</p>
        <a href={path} className="main__links">
          Show all
        </a>
      </div>
      <div className="item-list__container">
        {shuffledArray.slice(0, items).map((currentObj, index) => (
          <SingleItem
            idpath={idpath}
            {...currentObj}
            key={`${tittle}-${index}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
