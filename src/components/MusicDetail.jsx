import React from "react";
import teste from "../assets/banners/teste2.jfif";
import teste2 from "../assets/banners/musicControls.png";

function MusicDetail() {
  return (
    <>
      <div className="music-detail__container">
        <p>Timeless(feat Playboi Carti)</p>
        <img src={teste} alt="" />
        <a href="">
          <p>Timeless(feat Playboi Carti)</p>
        </a>
        <img src={teste2} alt="" />
      </div>
    </>
  );
}

export default MusicDetail;
