import axios from "axios";
import { useState } from "react";

export default function useCards() {
  const [cards, setCards] = useState([]);
  const [ playerCards, setPlayerCards ] = useState([]);

  const listCards = () => {
    axios
      .get("http://127.0.0.1:8000/api/card")
      .then((res) => {
        setCards(res.data);
      })
      .catch(console.log);
  };

  const addCardToPlay = (card) => {
    setPlayerCards([
      ...playerCards,
      card
    ]);
    console.log(playerCards);
  };

  return {
    cards,
    listCards,
    addCardToPlay
  };
}
