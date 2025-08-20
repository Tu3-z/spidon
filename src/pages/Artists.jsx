import React from "react";
import miko from "../assets/images/miko.png";
import artist from "../assets/images/artistTittle.png";
import ItemList from "../components/ItemList";
import Heather from "../components/Heather";
import PlacaSuspensa from "../components/PlacaSuspensa";

const Artists = () => {
  return (
    <>
      <PlacaSuspensa></PlacaSuspensa>

      <Heather />
      <div className="tracks">
        <div className="tracks-tittle">
          <img src={miko} alt="" className="tracks-tittle__img" />
          <img src={artist} alt="" className="tracks-tittle__img--minor" />
        </div>
        <div className="tracks-container">
          <ItemList
            tittle="Artists"
            columns={8}
            items={20}
            path="/artists"
            idpath="artist"
            type="artist"
          />
        </div>
      </div>
    </>
  );
};

export default Artists;
