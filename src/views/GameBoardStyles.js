import styled from "@emotion/styled";

const Board = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 100vw;
    min-height: 100%;
    height: auto;
    background: rgba(20, 20, 70, 1);
    .banner {
        display: flex;
        flex-align: column;
        justify-content: center;
        align-items: center;
        color: rgba(233, 233, 233, .7);
        width: 100vw;
        height: 10rem;
        background: rgba(63, 150, 33, .9);
        .number {
            font-size: 2.7rem;
            font-weight: bold;
        }
    }
  `;

export { Board };