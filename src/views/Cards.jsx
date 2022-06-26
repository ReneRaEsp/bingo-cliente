import { useEffect, useState } from "react";

import useCards from "./../hooks/useCards";

import Card from "./../components/Card";

import { ListCards } from "./CardsStyles";

const Cards = () => {
  const { cards, listCards, addCardToPlay } = useCards();
  
  const isSelect = true;

  useEffect(() => {
    listCards();
  }, []);
  return (
    <ListCards>
      {cards?.map((card) => {
        return <Card addCardToPlay={addCardToPlay} isSelect={isSelect} key={card.id} card={card} />;
      })}
    </ListCards>
  );
};

export default Cards;
