import { configureStore } from "@reduxjs/toolkit";

import cards from "./slices/cards";

export default configureStore({
  reducer: {
    cards
  },
});
