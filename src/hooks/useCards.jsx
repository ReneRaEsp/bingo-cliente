import { useState } from "react";
import axios from "axios";
//redux
import { setPlayerCards, addPlayerCard } from "./../store/slices/cards";
import { useDispatch, useSelector } from "react-redux";


export default function useCards() {
 
  const URL_BASE = window.env.URL_BASE;
  const dispatch = useDispatch();
  
  const { cards, playerCards } = useSelector((state) => state.cards);

  const [number, setNumber] = useState(0);

  const addCardToPlay = (card) => {
    dispatch(addPlayerCard(card));
  };

  const callOutNumber = () => {
    axios
      .post(`${URL_BASE}number`)
      .then((res) => {
        setNumber(res.data);
      })
      .catch(console.log);
  };

  const markSquare = (id, number) => {
    let newCards = [];
    let i = 0;

    axios
      .put(`${URL_BASE}card/mark/${id}`, {
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
      .delete(`${URL_BASE}number/1`)
      .then(console.log)
      .catch(console.log);
    axios
      .get(`${URL_BASE}cards/reset`)
      .then(console.log)
      .catch(console.log);
    dispatch(setPlayerCards([]));
  };

  const checkBingoCall = (card) => {
    axios
      .get(`${URL_BASE}card/check/${card.id}`)
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
