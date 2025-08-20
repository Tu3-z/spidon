import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Heather = () => {
  return (
    <>
      <nav className="heather">
        <Link to="/" className="heather__logo--text">
          SpidOn
        </Link>
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
    </>
  );
};
export default Heather;
