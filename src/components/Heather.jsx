import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Heather = () => {
  return (
    <>
      <nav className="heather">
        <a href="" className="heather__logo--text">
          SpidOn
        </a>
        <ul className="heather__links">
          <li>
            <a href="">Favorite tracks</a>
          </li>
          <li>
            <a href="">New Releases</a>
          </li>
          <li>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <input
              type="text"
              className="heather__links--search"
              placeholder="What do you want, bro?"
            />
          </li>
        </ul>
      </nav>
      <nav className="heather-vertical">
        <p>Browse Music</p>
        <ul className="heather-vertical__links">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Artists</a>
          </li>
          <li>
            <a href="">Albums</a>
          </li>
          <li>
            <Link to="/tracks">Tracks</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Heather;
