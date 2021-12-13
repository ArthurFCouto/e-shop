import styled from "styled-components";

export const LottieContainer = styled.button`
    max-width: 100%;
    max-height: 100%;

    border-radius: 50%;
    border: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    background-color: rgb(0 0 0 / 0%);

    .animation {
        pointer-events: none;
    }
`;