import styled from "styled-components";

export const DetailMain = styled.main `
    position: relative;
    display: block;
    width: 100%;
`;

export const DetailHeader = styled.header `
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50%;
`;

export const DetailSection = styled.section `
    background-color: #FFFFFF;
    padding: 8px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;

    display: flex;
    flex-direction: column;
`;

export const HeaderSection = styled.header `
    display: flex;
    flex-direction: column;

    font-style: normal;
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 2rem;

    text-align: center;
    letter-spacing: -0.01em;

    color: #27214D;
`;

export const HeaderButtons = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;

    width: 100%;

    font-style: normal;
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 1.8rem;

    color: #27214D;

    .spaceButton {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 45%;
    }

    input {
        width: 30%;
        text-align: center;
    }
`;

export const Divisor = styled.div `
    margin: 10px 0;
    height: 1px;
    width: 100%;
    background-color: #F3F3F3;
`;

export const BodySection = styled.section `
    font-style: normal;
    font-weight: normal;
    font-size: 1.1rem;
    line-height: 1.9rem;

    color: #27214D;
    display: flex;
    flex-direction: column;
`;

export const BodyTags = styled.div `
    font-style: normal;
    font-weight: normal;
    font-size: 0.75;
    line-height: 1.rem;

    color: #403E3E;

    ul {
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-wrap: wrap;
        padding: 0;

        background: #FAFAFA;
        border-radius: 10px;

        overflow: hidden;
    }

    ul li {
        list-style: none;
        background-color: #FFFFFF;
        margin: 5px;
        padding: 5px 8px;
        cursor: pointer;
        border-radius: 10px;

    }
`;

export const BodyDetails = styled.div `
    height: auto;
    width: 100%;
    margin-top: 2px;
    margin-bottom: 10px;

    font-style: normal;
    font-weight: 300;
    font-size: 0.9rem;
    line-height: 1.5rem;

    display: flex;
    align-items: center;
    letter-spacing: -0.01em;

    color: #333333;
`;

export const BodyFooter = styled.footer`
    display: flex;
    width: 100%;
    justify-content: space-between;

    .buttonFav {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50%;
    }
`;