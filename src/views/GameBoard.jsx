import styled from "@emotion/styled";

import useCards from "../hooks/useCards";

import Card from "../components/Card";

const GameBoard = () => {
  const { playerCards } = useCards();
  const Board = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 40rem;
    background: white;
  `;
  const isSelect = false;

  return (
    <Board>
      {playerCards?.map((card) => {
        <Card isSelect={isSelect} card={card} key={card.id} />;
      })}
    </Board>
  );
};

export default GameBoard;
