import React from "react";
import { useEffect, useMemo, useState } from "react";
import PrizeBlock from "./../components/PrizeBlock";
import GameZone from "./../components/GameZone";
import GameOver from "../components/GameOver";
import { IPrizeAmountData, IQuestionsData } from "./../models";
import GameData from "../data/gameData.json";

export default function GamePage() {
  const [activeQuestionID, setActiveQuestionID]: any = useState(0);
  const [stopGame, setStopGame]: any = useState(false);
  const [totalScore, setTotalScore]: any = useState("$ 0");
  const [openModal, setOpenModal]: any = useState(false);

  const questionsData: IQuestionsData[] = GameData.questionsData;

  const prizeAmountData: IPrizeAmountData[] = useMemo<any>(
    () => GameData.prizeAmountData,
    []
  );

  useEffect(() => {
    activeQuestionID > 1 &&
      setTotalScore(
        prizeAmountData.find((prize) => prize.id === activeQuestionID)?.amount
      );
  }, [prizeAmountData, activeQuestionID]);
  return (
    <div className="l-page-content">
      {stopGame || activeQuestionID === questionsData.length ? (
        <GameOver totalScore={totalScore} />
      ) : (
        <>
          <div className="l-gameZone">
            <div className="l-gameZone-leftSide">
              <GameZone
                item={questionsData[activeQuestionID]}
                setActiveQuestionID={setActiveQuestionID}
                setStopGame={setStopGame}
                setOpenModal={setOpenModal}
              />
            </div>
            <div
              className={
                openModal
                  ? "l-gameZone-rightSide m-open"
                  : "l-gameZone-rightSide"
              }
            >
              <div className="b-quizBlock-mobileActionsClose">
                <button onClick={() => setOpenModal(false)}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.364 7.05025C18.7545 6.65972 18.7545 6.02656 18.364 5.63603C17.9734 5.24551 17.3403 5.24551 16.9497 5.63603L12 10.5858L7.05026 5.63606C6.65974 5.24554 6.02657 5.24554 5.63605 5.63606C5.24553 6.02659 5.24553 6.65975 5.63605 7.05028L10.5858 12L5.63603 16.9497C5.24551 17.3403 5.24551 17.9734 5.63603 18.364C6.02656 18.7545 6.65972 18.7545 7.05025 18.364L12 13.4142L16.9498 18.364C17.3403 18.7545 17.9734 18.7545 18.364 18.364C18.7545 17.9735 18.7545 17.3403 18.364 16.9498L13.4142 12L18.364 7.05025Z"
                      fill="#1C1C21"
                    />
                  </svg>
                </button>
              </div>
              {prizeAmountData
                .slice()
                .reverse()
                .map((item) => (
                  <PrizeBlock
                    item={item}
                    key={item.id}
                    activeQuestionID={activeQuestionID}
                  />
                ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
