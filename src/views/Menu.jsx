import styled from "@emotion/styled";
import { Link } from "react-router-dom";

import bg from "./../assets/img/bg.jpg";

const Menu = () => {
  const Container = styled.div`
    width: 100%;
    height: 100%;
    background: url(${bg});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  `;
  const Pannel = styled.nav`
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%);
    width: 60vw;
    height: 35vh;
    background: rgba(210, 210, 230, 0);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .opc {
      margin: 2rem auto;
      font-weight: bold;
      color: white;
      text-decoration: none;
      background: rgba(20, 140, 200, 0.96);
      width: 10rem;
      height: 6rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 5px;
      transition: 1s;
      &:hover {
        font-size: 2rem;
        width: 20rem;
        height: 10rem;
      }
    }
  `;

  return (
    <Container>
      <Pannel>
        <Link to="/cards" className="opc">
          {" "}
          Nuevo Juego{" "}
        </Link>
      </Pannel>
    </Container>
  );
};

export default Menu;
