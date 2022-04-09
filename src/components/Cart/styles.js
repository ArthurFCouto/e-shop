import styled from "styled-components";

export const Container = styled.main`
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

    .header {
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

export const Body = styled.section`
    height: 75%;
    overflow-y: auto;
    
    ul {
        padding: 5px;
        width: 100%;

        li{
            display: grid;
            grid-gap: 5px;
            grid-template-columns: 20% 1fr 20%;
            margin: 8px 0;
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
            
            span:nth-child(1) {
                overflow: hidden;
                text-overflow: ellipsis;
                //display: -webkit-box;
                //-webkit-line-clamp: 1; /* number of lines to show */
                //-webkit-box-orient: vertical;
            }

            span:nth-child(2) {
                font-weight: 300;
                font-size: 0.8rem;
                line-height: 1.1rem;
            }

            span:nth-child(3) {
                color: var(--color-text-primary);
                line-height: 1.2rem;
            }
        }
    }
`;

export const Footer = styled.footer`
    height: 15%;
    padding: 15px;

    display: grid;
    grid-gap: 10px;
    grid-template-columns: 1fr 1fr;

    .title {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;

        h1 {
        font-weight: 300!important;
        line-height: 1rem!important;
        color: var(--color-text)!important;
        }

        h3 {
            font-weight: 500!important;
            font-size: 1.5rem!important;
            line-height: 2rem!important;
            color: var(--color-text-primary)!important;
        }
    }
`;