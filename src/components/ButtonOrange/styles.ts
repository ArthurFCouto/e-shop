
import styled from "styled-components";

export const ContainerButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 10px;
    cursor: pointer;

    width: ${(props)=> props.width};
    height: auto;
    min-height: 44px;
    margin: auto;

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
        transform: translateY(-2px) scale(1.01);
        box-shadow: 0px 3px 5px var(--color-black-50);
    }
`;
