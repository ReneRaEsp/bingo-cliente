import styled from "@emotion/styled";

const Board = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 100vw;
    min-height: 100%;
    height: auto;
    background: rgba(20, 20, 70, 1);
    padding-bottom: 7rem;
    padding-top: 7rem;
    .banner {
        display: flex;
        position: fixed;
        flex-align: column;
        justify-content: space-evenly;
        flex-wrap: wrap;
        align-items: center;
        color: rgba(233, 233, 233, .7);
        width: 90%;
        height: auto;
        background: rgba(63, 150, 33, 1);
        z-index: 2;
        transform: translateY(-7rem);
        .number {
            font-size: 2.3rem;
            font-weight: bold;
        }
        .btn {
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            color: rgba(233, 244, 233, .9);
            font-weight: bold;
            font-size: 20px;
            width: 13rem;
            height: 3rem;
            border-radius: 4px;
            border: none;
            cursor: pointer;
            background: rgba(23, 121, 222, .9);
            transition: 1.2s;
            margin-top: 1rem;
            margin-bottom: 1rem;
            &:hover {
                transform: scale(1.5);
            }
        }
    }
    .fixedFooter {
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        width: 25rem;
        height: 5rem;
        bottom: 0px;
        background: rgba(255, 255, 255, .8);
        border-radius: 10px 10px 0 0;
        .btn {
            width: 50%;
            height: 50%;
            background: rgba(23, 121, 222, .9);
            color: rgba(233, 244, 233, .9);
            border-radius: 4px;
            border: none;
            font-weight: bold;
            font-size: 20px;
            transition: 1.2s;
            cursor: pointer;
            &:hover {
                transform: scale(1.5);
            }
        }
    }
  `;

export { Board };