import styled from "styled-components";

export const ContainerHeader = styled.header`
    display: block;
    width: 100%;
    height: 150px;
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

        h2 {
            margin-left: 1rem;
            text-overflow: ellipse;
            white-space: nowrap;
        }
    }

    form {
        width: 80%;
    }

`;

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    width: 48px;
    max-width: 48px;
    height: 48px;
    max-width: 48px;
    cursor: pointer;

    border-radius: 50%;
    border: 0;
    background: var(--color-white);
    box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.05), 0px 0px 1px rgba(0, 0, 0, 0.25);
    transition: 0.25s;

    :hover {
        box-shadow: 0px 2px 1px rgb(0 0 0 / 25%), 0px 0px 1px rgb(0 0 0 / 50%)
    }
`;