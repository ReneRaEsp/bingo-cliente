import styled from "@emotion/styled";

const CardDesign = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    background: rgba(10, 140, 40, 1);
    width: 25rem;
    height: 27rem;
    border-radius: 12px;
    margin-top: 1.5rem;
    cursor: pointer;
    .header {
      display: flex;
      background: none;
      width: 90%;
      height: 15%;
      .letter {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20%;
        height: 100%;
        background: rgba(200, 200, 200, 0);
        font-weight: 800;
        font-size: 4rem;
        color: rgba(10, 40, 129, 0.9);
      }
    }
    .body {
      display: flex;
      background: white;
      width: 90%;
      height: 77%;
      border: 4px solid rgba(27, 24, 57, .87);
      .column {
        width: 20%;
        height: 100%;
        background: white;
        .row {
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 800;
            font-size: 2rem;
            border: 2px solid black;
            height: 18.88%;
        }
        .selected {
          background: rgba(40, 200, 240);
        }
      }
    }
    .number {
      position: relative;
      top: 4%;
      right: 6%;
      transform: translateX(100%);
      font-size: 1.2rem;
      font-weight: bold;
    }
    .select {
      position: relative;
      bottom: 10px;
      .selectBtn {
        width: 5rem;
        height: 1.4rem;
        background: rgba(23, 70, 163, .8);
        border: none;
        color: white;
        font-size: 1rem;
        font-weight: bold;
        border-radius: 4px;
        cursor: pointer;
        transform: scale(1.5);
        transition: 1s;
        &:hover {
          transform: scale(2);
        }
      }
      .selectBtn {
        width: 5rem;
        height: 1.4rem;
        background: rgba(23, 70, 163, .8);
        border: none;
        color: white;
        font-size: 1rem;
        font-weight: bold;
        border-radius: 4px;
        cursor: pointer;
        transform: scale(1.5);
        transition: 1s;
        &:hover {
          transform: scale(2);
        }
      }
    }
  `;

export { CardDesign };