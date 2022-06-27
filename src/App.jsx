// router
import { BrowserRouter, Routes, Route } from "react-router-dom";
// redux
import { Provider } from "react-redux";
import store from "./store";

import "./App.css";

import Menu from "./views/Menu";
import Cards from "./views/Cards";
import GameBoard from "./views/GameBoard";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Menu />} />
            <Route path="cards" element={<Cards />} />
            <Route path="board" element={<GameBoard />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
};

export default App;
