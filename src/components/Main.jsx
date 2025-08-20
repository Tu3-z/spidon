import React from "react";
import Heather from "./Heather";
import MusicDetail from "./MusicDetail";
import bannerFeatured from "../assets/Banners/bannerHyperpop.png";
import ItemList from "./ItemList";
import VerticalHeather from "./VerticalHeather";

const Main = ({ artist }) => {
  return (
    <>
      <Heather />
      <VerticalHeather />
      <MusicDetail />
      <div className="banner">
        <a href="#">
          <img src={bannerFeatured} alt="" />
        </a>
      </div>
      <div className="main"></div>
      <ItemList
        tittle="Artists"
        items={5}
        path="/artists"
        idpath="artist"
        type="artist"
      />
      <ItemList
        tittle="Tracks"
        items={10}
        path="/tracks"
        idpath="track"
        type={artist}
      />
    </>
  );
};

export default Main;
