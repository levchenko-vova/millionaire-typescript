import React from "react";
import welcomeImage from "./../images/welcomeImage.svg";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="l-page-content">
      <div className="l-welcomePage">
        <div className="b-startGame">
          <div className="b-startGame-column m-image">
            <img src={welcomeImage} className="b-startGame-image" alt="logo" />
          </div>
          <div className="b-startGame-column m-text">
            <h1>Who wants to be a millionare?</h1>
            <div className="b-startGame-actions">
              <Link
                to="/game"
                className="b-startGame-startButton b-button m-sm-100"
              >
                Start
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
