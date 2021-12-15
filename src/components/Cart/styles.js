import styled from "styled-components";

export const CartMain = styled.main`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #FFFFFF;
    z-index: 10;
    animation: openCart .5s;
`;

export const CartHeader = styled.header`
    height: 10%;
    padding: 15px;

    font-weight: 500;
    font-size: 1.2rem;
    line-height: 2rem;

    display: flex;
    align-items: center;
    text-align: center;
    justify-content: space-between;
    letter-spacing: -0.01em;

    color: #FFFFFF;
    background: #FFA451;
`;

export const CartBody = styled.section`
    height: 75%;
    overflow-y: auto;
`;

export const CartList = styled.ul`
    padding: 5px;
    width: 100%;

    .listItem {
        display: grid;
        grid-gap: 5px;
        grid-template-columns: 20% 55% 20%;
        margin: 8px 0;
    }

    .detailsImagem {
        display: flex;
        align-items: center;
        justify-content: center;

        background-color: #F1EFF6;
        border-radius: 16px;
    }

    .detailsItem {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        padding-left: 5px;

        font-weight: 500;
        font-size: 1rem;
        line-height: 1.5rem;
        letter-spacing: -0.01em;

        color: #333333;
    }

    .itemCount {
        font-weight: 300;
        font-size: 0.8rem;
        line-height: 1.1rem;

        color: #000000;
    }

    .itemPrice {
        font-weight: 500;
        font-size: 1rem;
        line-height: 1.2rem;

        color: #27214D;
    }

    .detailsButton {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export const CartFooter = styled.footer`
    height: 15%;
    padding: 15px;

    display: grid;
    grid-gap: 10px;
    grid-template-columns: 1fr 1fr;

    .footer {
        font-style: normal;
        font-weight: 300;
        font-size: 0.9rem;
        line-height: 1rem;

        color: #333333;

        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }

    .footerPrice {
        font-weight: 500;
        font-size: 1.5rem;
        line-height: 2rem;

        color: #27214D;
    }
`;