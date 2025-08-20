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

const ItemList = ({ tittle, items, path, idpath, type, columns = 5 }) => {
  const sourceArray = type === "artist" ? artistArray : songsArray;

  const shuffledArray = shuffleArray(sourceArray);

  const containerClass = `item-list__container ${
    columns === 8 ? "item-list__container eight-grid" : "item-list__container"
  }`;

  return (
    <div className="main">
      <div className="main__texts">
        <p>Featured {tittle}</p>
        <a href={path} className="main__links">
          Show all
        </a>
      </div>
      <div className={containerClass}>
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
