import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    height: 36px;
    margin: 10px 0;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

`;

export const Button = styled.button`
    margin: 5px;
    height: 36px;
    cursor: pointer;

    color: var(--color-text-primary);
    background-color: var(--color-white);
    border: 0;
`;

export const Line = styled.div`
    content: '';
    width: ${(props)=> props.width};
    background-color: var(--color-bg-primary);
    margin: 5px 0;
    height: 2px;
`;