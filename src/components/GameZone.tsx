import { useState, useEffect } from "react";
import { IQuestionsData } from "../models";

interface QuestionsDataProps {
  item: IQuestionsData;
  setActiveQuestionID: any;
  setStopGame: any;
  setOpenModal: any;
}

export default function GameZone({
  item,
  setActiveQuestionID,
  setStopGame,
  setOpenModal,
}: QuestionsDataProps) {
  const [correctAnswersChosen, setCorrectAnswersChosen]: any = useState([]);
  const [selectedAnswers, setSelectedAnswers]: any = useState({});
  const [isAnswering, setIsAnswering] = useState(false);

  const checkAnswer = (time: number, callback: any) => {
    setTimeout(() => {
      callback();
    }, time);
  };

  const handleClickButton = (answer: any) => {
    if (isAnswering) {
      return;
    }

    setIsAnswering(true);

    setSelectedAnswers(answer);

    checkAnswer(100, () => {
      const updatedSelectedAnswers = {
        ...selectedAnswers,
        [answer.id]: "b-customSnippet m-selected",
      };
      setSelectedAnswers(updatedSelectedAnswers);
    });
    checkAnswer(500, () => {
      const updatedSelectedClasses = {
        ...selectedAnswers,
        [answer.id]: answer.isCorrect
          ? "b-customSnippet m-correct"
          : "b-customSnippet m-wrong",
      };
      setSelectedAnswers(updatedSelectedClasses);
    });
    checkAnswer(1000, () => {
      const isCorrectAnswer = item.correctAnswers.includes(answer.id);
      if (isCorrectAnswer) {
        setCorrectAnswersChosen((prevAnswers: any) => [
          ...prevAnswers,
          answer.id,
        ]);
      } else {
        setStopGame(true);
      }

      setIsAnswering(false);
    });
  };
  useEffect(() => {
    const allCorrectAnswersChosen = item.correctAnswers.every((index: number) =>
      correctAnswersChosen.includes(index)
    );
    if (allCorrectAnswersChosen) {
      setActiveQuestionID((previous: number) => previous + 1);
      setSelectedAnswers({});
      setCorrectAnswersChosen([]);
    }
  }, [correctAnswersChosen, item.correctAnswers, setActiveQuestionID]);
  return (
    <div className="b-quizBlock">
      <div className="b-quizBlock-mobileHeader">
        <button onClick={() => setOpenModal(true)}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6C4 5.44772 4.44772 5 5 5H19C19.5523 5 20 5.44772 20 6C20 6.55228 19.5523 7 19 7H5C4.44772 7 4 6.55228 4 6Z"
              fill="#1C1C21"
            />
            <path
              d="M4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12Z"
              fill="#1C1C21"
            />
            <path
              d="M5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19H19C19.5523 19 20 18.5523 20 18C20 17.4477 19.5523 17 19 17H5Z"
              fill="#1C1C21"
            />
          </svg>
        </button>
      </div>
      <div className="b-quizBlock-question">
        <h2>{item.question}</h2>
      </div>
      <div className="b-quizBlock-answers">
        {item.answers.map((variant) => (
          <div className="b-quizBlock-answer" key={variant.id}>
            <div
              className={selectedAnswers[variant.id] || "b-customSnippet"}
              onClick={() => handleClickButton(variant)}
            >
              <div className="b-customSnippet-container">
                <div className="b-customSnippet-text">
                  <span className="b-customSnippet-textNumber">
                    {variant.version}
                  </span>
                  <span className="b-customSnippet-textTitle">
                    {variant.answer}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
