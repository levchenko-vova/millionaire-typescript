import { IPrizeAmountData } from "../models";

interface PrizeAmountDataProps {
  item: IPrizeAmountData;
  activeQuestionID: number;
}

export default function PrizeBlock({
  item,
  activeQuestionID,
}: PrizeAmountDataProps) {
  return (
    <div className="b-prizeBlock">
      <div className="b-prizeBlock-prizes">
        <div
          className={
            activeQuestionID + 1 === item.id
              ? "b-customSnippetPrice m-active"
              : activeQuestionID + 1 > item.id
              ? "b-customSnippetPrice m-inactive"
              : "b-customSnippetPrice"
          }
          data-id={item.id}
        >
          <div className="b-customSnippetPrice-container">
            <div className="b-customSnippetPrice-text">
              <span className="b-customSnippetPrice-price">{item.amount}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
