import { useState } from "react";
import axios from "axios";
//redux
import { setPlayerCards, addPlayerCard } from "./../store/slices/cards";
import { useDispatch, useSelector } from "react-redux";

export default function useCards() {
  const dispatch = useDispatch();
  const { cards, playerCards } = useSelector((state) => state.cards);

  const [number, setNumber] = useState(0);

  const addCardToPlay = (card) => {
    dispatch(addPlayerCard(card));
  };

  const callOutNumber = () => {
    axios
      .post("http://127.0.0.1:8000/api/number")
      .then((res) => {
        setNumber(res.data);
      })
      .catch(console.log);
  };

  const markSquare = (id, number) => {
    let newCards = [];
    let i = 0;

    axios
      .put(`http://127.0.0.1:8000/api/card/mark/${id}`, {
        number,
      })
      .then((res) => {
        playerCards.map((card) => {
          if (card.id === id && res.data !== "Number not called") {
            newCards[i] = res.data;
          } else {
            newCards[i] = card;
          }
          i++;
        });
        dispatch(setPlayerCards(newCards));
      })
      .catch(console.log);
  };

  const resetGame = () => {
    axios
      .delete("http://127.0.0.1:8000/api/number/1")
      .then(console.log)
      .catch(console.log);
    axios
      .get("http://127.0.0.1:8000/api/cards/reset")
      .then(console.log)
      .catch(console.log);
    dispatch(setPlayerCards([]));
  };

  const checkBingoCall = (card) => {
    axios
      .get(`http://127.0.0.1:8000/api/card/check/${card.id}`)
      .then(res => {
        alert(res.data);
      })
      .catch();
  };

  return {
    number,
    addCardToPlay,
    callOutNumber,
    markSquare,
    resetGame,
    checkBingoCall
  };
}
