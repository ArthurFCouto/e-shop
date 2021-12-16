import styled from "styled-components";

export const ContainerCart = styled.main`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    background-color: var(--color-white);
    z-index: 10;
    transition: all .3s;
    animation: opacityOpenCart .3s;

    header {
        height: 10%;
        padding: 15px;

        font-weight: 500;
        font-size: 1.2rem;
        line-height: 2rem;

        display: flex;
        align-items: center;
        justify-content: space-between;

        color: var(--color-white);
        background: var(--color-bg-primary);
    }
`;



export const CartBody = styled.section`
    height: 75%;
    overflow-y: auto;
    
    ul {
        padding: 5px;
        width: 100%;

        .item {
            display: grid;
            grid-gap: 5px;
            grid-template-columns: 20% 55% 20%;
            margin: 8px 0;
        }

        .img {
            display: flex;
            align-items: center;
            justify-content: center;

            background-color: var(--color-bg-clear);
            border-radius: 16px;
        }

        .details {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            padding-left: 5px;

            font-weight: 500;
            font-size: 1rem;
            line-height: 1.5rem;
            color: var(--color-text);

            .itemCount {
                font-weight: 300;
                font-size: 0.8rem;
                line-height: 1.1rem;
            }

            .itemPrice {
                color: var(--color-text-primary);
                line-height: 1.2rem;
            }
        }

        .button {
            display: flex;
            align-items: center;
            justify-content: center;
        }
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
        color: var(--color-text);

        display: flex;
        flex-direction: column;
        justify-content: flex-start;

        span {
            font-weight: 500;
            font-size: 1.5rem;
            line-height: 2rem;

            color: var(--color-text-primary);
        }
    }
`;