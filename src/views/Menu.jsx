import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Menu = () => {

    const Pannel = styled.nav`
        position: absolute;
        top: 55%;
        left: 50%;
        transform: translate(-50%);
        width: 60vw;
        height: 35vh;
        background: rgba(210, 210, 230, 0);
        border-radius: 10px ;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .opc {
            margin: 2rem auto;
            font-weight: bold;
            color: white;
            text-decoration: none;
            background: rgba(20, 140, 200, .96);
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
    `

  return (
    <Pannel>
        <Link to="/cards" className="opc"> Nuevo Juego </Link>
    </Pannel>
  )
};

export default Menu;
