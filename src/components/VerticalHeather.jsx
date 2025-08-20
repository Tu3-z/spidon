import React from "react";
import { Link } from "react-router-dom";

function VerticalHeather() {
  return (
    <nav className="heather-vertical">
      <p>Browse Music</p>
      <ul className="heather-vertical__links">
        <li>
          <Link to="/artists">Artists</Link>
        </li>
        <li>
          <Link to="/tracks">Tracks</Link>
        </li>
      </ul>
    </nav>
  );
}

export default VerticalHeather;
