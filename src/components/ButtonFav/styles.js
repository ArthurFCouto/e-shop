import styled from "styled-components";

export const Fav = styled.button`
    max-width: 100%;
    max-height: 100%;

    border-radius: 50%;
    padding: 0;
    border: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    background-color: rgb(0 0 0 / 0%);
    transition: all .25s;

    .animation {
        pointer-events: none;
    }
`;