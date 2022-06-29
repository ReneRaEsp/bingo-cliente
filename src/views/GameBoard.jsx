import { Link } from "react-router-dom";
//redux
import { useSelector } from "react-redux";
import useCards from "../hooks/useCards";
//components
import Card from "../components/Card";
//styles
import { Board } from "./GameBoardStyles";

const GameBoard = () => {
  const { playerCards } = useSelector((state) => state.cards);
  const { number, callOutNumber, checkBingoCall } = useCards();

  const isSelect = false;

  if (playerCards === []) {
    return(
      <Board>
        <Link className="btn" to="/cards" >
          {" "}
          Go back/Reset{" "}
        </Link>
        <h2 className="number"> You have to choise your <i class="fa fa-calendar-minus-o" aria-hidden="true"></i> </h2>
      </Board>
    );
  }

  const callBingo = () => {
    checkBingoCall();
  };

  return (
    <Board>
      <header className="banner">
        <Link className="btn" to="/cards" >
          {" "}
          Go back/Reset{" "}
        </Link>
        <h2 className="number">Number Called: {number.random_number} </h2>
        <button onClick={() => callOutNumber()} className="btn">
          {" "}
          Call out number{" "}
        </button>
      </header>
      {playerCards?.map((card) => {
        return <Card isSelect={isSelect} card={card} key={card.id} />;
      })}
    </Board>
  );
};

export default GameBoard;
