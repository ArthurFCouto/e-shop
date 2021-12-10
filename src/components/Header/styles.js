import styled from "styled-components";

export const Button = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0;
    overflow: hidden;

    width: 48px;
    max-width: 48px;
    height: 48px;
    max-width: 48px;
    cursor: pointer;

    border-radius: 50%;
    border: 0;
    background: #FFFFFF;
    box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.05), 0px 0px 1px rgba(0, 0, 0, 0.25);
    transition: 0.25s;

    :hover {
        box-shadow: 0px 2px 1px rgb(0 0 0 / 25%), 0px 0px 1px rgb(0 0 0 / 50%)
    }
`;

export const Nav = styled.nav`
    height: 50%;
    margin: 0;
    padding: 0 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #FFFFFF;

    form {
        width: 80%;
        margin: 0;
        padding: 0;
    }

    input {
        width: 100%;
        margin-left: 0;

        text-align: left;
        padding: 15px 10px;

        letter-spacing: -0.01em;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        background: #F7F5F5;
        border-radius: 10px;
        border: 0;
        ::placeholder {
            color: #C2BDBD;
        }
    }
`;

export const NavLeft = styled.div`
    display: flex;
    align-items: center;

    h1 {
        margin-left: 1rem;
        white-space: nowrap;
    }
`;

export const ContainerHeader = styled.header`
    display: block;
    width: 100%;
    height: 175px;
    padding: 0;
    margin: 0;
    background-color: #EEA451;
`;
