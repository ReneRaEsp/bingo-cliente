
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';

import Menu from "./views/Menu";
import Cards from "./views/Cards";
import GameBoard from "./views/GameBoard";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Menu /> } />
          <Route path="cards" element={ <Cards /> } />
          <Route path="board" element={ <GameBoard /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
