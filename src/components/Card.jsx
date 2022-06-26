import styled from "@emotion/styled";

const Card = () => {
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
  return (
    <CardDesign>
      <div className="header">
        <div className="letter">B</div>
        <div className="letter">I</div>
        <div className="letter">N</div>
        <div className="letter">G</div>
        <div className="letter">O</div>
      </div>
      <div className="body">
        <div className="column">
            <div className="row">1</div>
            <div className="row">3</div>
            <div className="row">4</div>
            <div className="row">5</div>
            <div className="row">7</div>
        </div>
        <div className="column">
            <div className="row">16</div>
            <div className="row">17</div>
            <div className="row">20</div>
            <div className="row">21</div>
            <div className="row">24</div>
        </div>
        <div className="column">
            <div className="row">32</div>
            <div className="row">33</div>
            <div className="row">0</div>
            <div className="row">31</div>
            <div className="row">38</div>
        </div>
        <div className="column">
            <div className="row">47</div>
            <div className="row">57</div>
            <div className="row">55</div>
            <div className="row">59</div>
            <div className="row">46</div>
        </div>
        <div className="column">
            <div className="row">67</div>
            <div className="row">66</div>
            <div className="row">65</div>
            <div className="row">68</div>
            <div className="row">61</div>
        </div>
      </div>
    </CardDesign>
  );
};

export default Card;
