import React from "react";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
              Clicky Game!
          </li>
          <li className="nav-item">
              You guessed correctly!
          </li>
          <li className="nav-item">
              Score: 0 | Top Score: 12
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
