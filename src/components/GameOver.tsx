import { Link } from "react-router-dom";
import welcomeImage from "./../images/welcomeImage.svg";

interface GameOverProps {
  totalScore: number;
}

export default function GameOver({ totalScore }: GameOverProps) {
  return (
    <div className="l-welcomePage">
      <div className="b-gameOver">
        <div className="b-gameOver-column m-image">
          <img src={welcomeImage} className="b-gameOver-image" alt="logo" />
        </div>
        <div className="b-gameOver-column m-text">
          <div className="b-gameOver-text">
            <h4>Total score:</h4>
            <h1>{totalScore} earned</h1>
          </div>
          <div className="b-gameOver-actions">
            <Link to="/" className="b-gameOver-startButton b-button m-sm-100">
              Try Again
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
