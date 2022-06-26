import { Fragment, useState } from "react";


import Card from "./../components/Card";

const Cards = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      column_b: "9,11,13,3,8",
      column_i: "24,16,23,25,28",
      column_n: "32,33,0,31,38",
      column_g: "47,57,55,59,46",
      column_o: "67,66,65,68,61",
      created_at: "2022-06-25T19:22:00.000000Z",
      updated_at: "2022-06-25T19:22:00.000000Z",
    },
    {
      id: 2,
      column_b: "1,2,5,7,4",
      column_i: "23,18,22,30,17",
      column_n: "43,34,0,43,31",
      column_g: "60,55,56,50,51",
      column_o: "61,70,63,65,74",
      created_at: "2022-06-25T19:22:01.000000Z",
      updated_at: "2022-06-25T19:22:01.000000Z",
    },
    {
      id: 3,
      column_b: "5,9,7,2,11",
      column_i: "23,29,28,20,16",
      column_n: "32,40,0,44,38",
      column_g: "58,60,59,53,56",
      column_o: "70,64,61,69,73",
      created_at: "2022-06-25T19:22:01.000000Z",
      updated_at: "2022-06-25T19:22:01.000000Z",
    },
  ]);
  return (
    <Fragment>
      {cards.map((card) => {
        return <Card key={card.id} card={card} />;
      })}
    </Fragment>
  );
};

export default Cards;
