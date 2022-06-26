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
      border: 4px solid black;
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
      }
    }
  `;

export { CardDesign };