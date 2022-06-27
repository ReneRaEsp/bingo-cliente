import { useState } from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
import useCards from "../hooks/useCards";
//components
import Card from "../components/Card";
//styles
import { Board } from "./GameBoardStyles"; 

const GameBoard = () => {
  const { playerCards } = useSelector(state => state.cards);
  const { addCardToPlay } = useCards();
  const [number, setNumber] = useState(0);

  const isSelect = false;

  return (
    <Board>
      <header className="banner">
        <h2 className="number">Number Called: { number } </h2>
      </header>
      {playerCards?.map((card) => {
        return (<Card isSelect={isSelect} card={card} key={card.id} addCardToPlay={addCardToPlay} />)
      })}
    </Board>
  );
};

export default GameBoard;
