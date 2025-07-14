import React from "react";

const SingleItem = ({ id, image, name, idpath, artist }) => {
  return (
    <>
      <a href={`${idpath}/${id}`} className="single-item">
        <img src={image} alt="Imagem nao carregada" />
        <a href="">{name}</a>
        <div className="single-item__sub">
          <p>{artist ? `${artist}` : "Artist"}</p>
        </div>
      </a>
    </>
  );
};

export default SingleItem;
