import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import env from "react-dotenv";



export const cardSlice = createSlice({
  name: "cards",
  initialState: {
    cards: [],
    playerCards: [],
  },
  reducers: {
    setCardList: (state, action) => {
      state.cards = action.payload;
    },
    setPlayerCards: (state, action) => {
      state.playerCards = action.payload;
    },
    addPlayerCard: (state, action) => {
      state.playerCards.push(action.payload);
    }
  },
});

export const { setCardList, setPlayerCards, addPlayerCard } = cardSlice.actions;

export default cardSlice.reducer;

export const fetchAllCards = () => (dispatch) => {
  const URL_BASE = env.URL_BASE;
  console.log(URL_BASE);
  axios
    .get(`${URL_BASE}card`)
    .then((res) => {
      dispatch(setCardList(res.data));
    })
    .catch(console.log);
};

export const selectPlayerCards = () => (dispatch, cards) => {
  dispatch(selectPlayerCards(cards));
};

