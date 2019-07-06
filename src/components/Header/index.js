import React from "react";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Header = props => (
  <div className="jumbotron-fluid">
    <div className="container-fluid">
      <div className="title">{props.children}</div>
      <div className="scores">
        Score: {props.score} Highscore: {props.highscore}
      </div>
    </div>
  </div>
);

export default Header;
