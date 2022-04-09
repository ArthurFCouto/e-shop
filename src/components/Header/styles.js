import styled from "styled-components";

export const ContainerHeader = styled.header`
    display: block;
    height: 135px;
    width: 100%;
`;

export const Line = styled.nav`
    height: 50%;
    padding: 0 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--color-white);

    .itemLeft {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: row;
        max-width: 60%;
        column-gap: 1rem;

        h2 {
            color: var(--color-text-secondary);
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }

    form {
        width: 80%;
    }

`;

export const Button = styled.button`
    cursor: pointer;
    overflow: hidden;

    width: 48px;
    max-width: 48px;
    height: 48px;
    max-width: 48px;

    border-radius: 50%;
    border: 0;
    background-color: var(--color-white);
    box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.05), 0px 0px 1px rgba(0, 0, 0, 0.25);
    transition: box-shadow 0.25s;

    :hover {
        box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.25), 0px 0px 1px rgba(0, 0, 0, 0.5);
    }
`;