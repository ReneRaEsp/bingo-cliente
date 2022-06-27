import { useState } from "react";
//redux
import { selectPlayerCards, addPlayerCard } from "./../store/slices/cards";
import { useDispatch, useSelector } from "react-redux";

export default function useCards() {
  const dispatch = useDispatch();

  const addCardToPlay = (card) => {
    dispatch(addPlayerCard(card));
  };

  return {
    addCardToPlay
  };
}
