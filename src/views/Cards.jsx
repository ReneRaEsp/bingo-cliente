import { useEffect } from "react";
//router
import { Link } from "react-router-dom";
//redux
import { fetchAllCards } from "../store/slices/cards";
import { useDispatch, useSelector } from "react-redux";
//hooks
import useCards from "./../hooks/useCards";
//components
import Card from "./../components/Card";
//styles
import { ListCards } from "./CardsStyles";

const Cards = () => {
  const { cards } = useSelector(state => state.cards);
  const dispatch = useDispatch();
  const { addCardToPlay, resetGame } = useCards();

  const isSelect = true;

  useEffect(() => {
    dispatch(fetchAllCards());
    resetGame();
  }, [dispatch]);

  return (
    <ListCards>
      {cards?.map((card) => {
        return (
          <Card
            addCardToPlay={addCardToPlay}
            isSelect={isSelect}
            key={card.id}
            card={card}
          />
        );
      })}
      <div className="ready">
        <Link to="/board" className="text"> Ready to play! </Link>
      </div>
    </ListCards>
  );
};

export default Cards;
