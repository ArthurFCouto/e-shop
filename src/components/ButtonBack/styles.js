import styled from "styled-components";

export const Back = styled.button`
    display: flex;
    align-items: center;

    background-color: #fff;
    border: 0;

    width: 75px;
    height: 30px;
    padding: 5px 10px;;
    border-radius: 100px;
    white-space: nowrap;

    font-style: normal;
    font-weight: normal;
    font-size: 0.75rem;
    line-height: 1rem;
    color: #27214D;

    transition: 0.25s;

    :hover{
        cursor: pointer;
        box-shadow: 0px 4px 2px rgb(0 0 0 / 25%), 0px 0px 1px rgb(0 0 0 / 25%);
    }
`;