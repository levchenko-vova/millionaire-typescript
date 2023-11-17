import { Link } from "react-router-dom";
import welcomeImage from "./../images/welcomeImage.svg";

interface GameOverProps {
  totalScore: number;
}

export default function GameOver({ totalScore }: GameOverProps) {
  return (
    <div className="l-welcomePage">
      <div className="b-startGame">
        <div className="b-startGame-column">
          <img src={welcomeImage} className="b-startGame-image" alt="logo" />
        </div>
        <div className="b-startGame-column">
          <h4>Total score:</h4>
          <h1>{totalScore} earned</h1>
          <div className="b-startGame-actions">
            <Link to="/" className="b-startGame-startButton b-button">
              Try Again
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
