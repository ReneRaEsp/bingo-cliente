import { useState, useEffect } from "react";

import useCards from "../hooks/useCards";

import { CardDesign } from "./CardStyles";

const Card = ({ card, isSelect, addCardToPlay }) => {
  const { markSquare, checkBingoCall } = useCards();
  const [column_b, setColumnB] = useState([]);
  const [column_i, setColumnI] = useState([]);
  const [column_n, setColumnN] = useState([]);
  const [column_g, setColumnG] = useState([]);
  const [column_o, setColumnO] = useState([]);

  useEffect(() => {
    setColumnB(card.column_b.split(","));
    setColumnI(card.column_i.split(","));
    setColumnN(card.column_n.split(","));
    setColumnG(card.column_g.split(","));
    setColumnO(card.column_o.split(","));
  }, [card]);

  const handleClick = () => {
    addCardToPlay(card);
  };

  const handleClickMark = (number) => {
    markSquare(card.id, number);
  };

  const handleCallBingo = (card) => {
    checkBingoCall(card);
  };

  return (
    <CardDesign>
      <div className="header">
        <div className="letter">B</div>
        <div className="letter">I</div>
        <div className="letter">N</div>
        <div className="letter">G</div>
        <div className="letter">O</div>
      </div>
      <div className="number">{card.id}</div>
      <div className="body">
        <div className="column">
          {column_b?.map(function (number, index) {
            return (
              <div
                onClick={() => {
                  handleClickMark(number);
                }}
                key={index}
                className={`row ${number < 0 ? "selected" : ""}`}
              >
                {Math.abs(number)}
              </div>
            );
          })}
        </div>
        <div className="column">
          {column_i?.map(function (number, index) {
            return (
              <div
                onClick={() => {
                  handleClickMark(number);
                }}
                key={index}
                className={`row ${number < 0 ? "selected" : ""}`}
              >
                {Math.abs(number)}
              </div>
            );
          })}
        </div>
        <div className="column">
          {column_n?.map(function (number, index) {
            return (
              <div
                onClick={() => {
                  handleClickMark(number);
                }}
                key={index}
                className={`row ${number <= 0 ? "selected" : ""}`}
              >
                {number === 0 ? "Free" : Math.abs(number)}
              </div>
            );
          })}
        </div>
        <div className="column">
          {column_g?.map(function (number, index) {
            return (
              <div
                onClick={() => {
                  handleClickMark(number);
                }}
                key={index}
                className={`row ${number < 0 ? "selected" : ""}`}
              >
                {Math.abs(number)}
              </div>
            );
          })}
        </div>
        <div className="column">
          {column_o?.map(function (number, index) {
            return (
              <div
                onClick={() => {
                  handleClickMark(number);
                }}
                key={index}
                className={`row ${number < 0 ? "selected" : ""}`}
              >
                {Math.abs(number)}
              </div>
            );
          })}
        </div>
      </div>
      {isSelect ? (
        <div className="select">
          <button onClick={handleClick} className="selectBtn">
            Select
          </button>
        </div>
      ) : (
        <div className="select">
          <button onClick={() => handleCallBingo(card)} className="selectBtn">
            ¡¡¡Bingo!!!
          </button>
        </div>
      )}
    </CardDesign>
  );
};

export default Card;
