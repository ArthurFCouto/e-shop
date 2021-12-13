import styled from "styled-components";

export const ContainerModalDetail = styled.main`
    position: relative;
    display: block;
    width: 100%;
    height: 100%;

    .img {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 35%;
    }

    .section {
        background-color: var(--color-white);
        padding: 8px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;

        font-style: normal;
        font-weight: 500;
        font-size: 1.5rem;
        line-height: 2rem;
        color: var(--color-text-primary);

        display: flex;
        flex-direction: column;
    }
`;

export const HeaderSection = styled.div`
    display: flex;
    flex-direction: column;

    text-align: center;
    letter-spacing: -0.01em;

    ul {
        width: 100%;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        line-height: 1.8rem;

        li {
            list-style: none;
        }

        .count {
            display: flex;
            flex-direction: row;
            align-items: center;
            width: 40%;

            input {
                width: 30%;
                text-overflow: ellipsis;
                text-align: center;
            }
        }
    }
`;

export const Divider = styled.div`
    margin: 10px 0;
    height: 1px;
    width: 100%;
    background-color: var(--color-divider);
`;

export const BodySection = styled.section`
    font-style: normal;
    font-weight: normal;
    
    color: var(--color-text-primary);
    display: block;

    .text {
        width: 100%;
        height: auto;

        text-align: left;
        font-size: 1.1rem;
        line-height: 1.9rem;
    }

    .details {
        width: 100%;
        height: auto;

        margin-top: 2px;
        margin-bottom: 10px;

        font-weight: 300;
        font-size: 0.9rem;
        line-height: 1.5rem;
        letter-spacing: -0.01em;
        text-align: left;
    }
`;

export const Tags = styled.div`
    font-size: 0.75rem;
    line-height: 1rem;

    ul {
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-wrap: wrap;

        background: var(--color-bg-clear);
        border-radius: 8px;

        li {
            list-style: none;
            background-color: var(--color-white);
            margin: 5px;
            padding: 5px 8px;
            cursor: pointer;
            border-radius: 8px;
        }
    }
`;

export const Footer = styled.footer`
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