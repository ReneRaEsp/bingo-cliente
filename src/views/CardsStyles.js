import styled from "@emotion/styled";

const ListCards = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    width: 100vw;
    min-height: 100%;
    height: auto;
    background: rgba(20, 20, 70, 1);
    .ready {
        padding-top: 2rem;
        position: fixed;
        width: 9rem;
        height: 6rem;
        top: 50%;
        left: 0;
        transform: translate(0%, -50%);
        background: rgba(20, 120, 220, .9);
        border-radius: 0 20px 20px 0;
        .text{
            color: white;
            font-weight: bold;
            font-size: 1.5rem;
            transform: rotate(3200deg);
            transition: 2s;
            cursor: pointer;
            width: 100%;
            height: 100%;
            text-decoration: none;
            &:hover {
                transform: rotate(288deg);
            }
        }
    }
`;

export { ListCards };