import styled from "styled-components";

export const Nav = styled.nav`
    margin: 0;
    padding: 5px;
    display: flex;
    align-items: center;
    overflow-x: auto;
    background-color: #FAFAFA;
`;

export const NavButton = styled.button`
    padding: 5px 15px;
    margin: 10px 5px;

    background-color: #fff;
    border: 0;

    color: #333333;
    font-size: 14px;
    line-height: 16px;
    border-radius: 10px;
    white-space: nowrap;

    transition: 0.25s;

    :hover{
        cursor: pointer;
        box-shadow: 0px 4px 2px rgb(0 0 0 / 25%), 0px 0px 1px rgb(0 0 0 / 25%);
    }
`;