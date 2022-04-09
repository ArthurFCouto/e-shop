
import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    margin: auto;
    padding: 10px 5px;
`;

export const Button = styled.button<HTMLButtonElement>`
    width: ${(props) => props.width};
    height: auto;
    min-height: 44px;
    margin: auto;
    cursor: pointer;

    background: var(--color-bg-primary);
    border: 0;
    border-radius: 10px;
    box-shadow: 0px 2px 5px var(--color-black-50);

    font-size: 1rem;
    line-height: 1.2rem;
    font-weight: 500;
    color: var(--color-white);
    text-overflow: ellipsis;
    white-space: nowrap;

    transition: all .2s ease-in-out;

    :hover {
        transform: translateY(-0.5px) scale(1.01);
        box-shadow: 0px 3px 5px var(--color-black-50);
    }
`;
