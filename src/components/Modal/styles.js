import styled from "styled-components";

export const Container = styled.main`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    background-color: var(--color-black-50);
    z-index: 10;

    .viewTop {
        content: ' ';
        background-color: transparent;
        width: 100%;
        height: 25%;
    }
    
    .viewBottom {
        background: var(--color-bg-primary);
        width: 100%;
        height: 75%;
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
        //Esta propriedade se faz necessária devido a animação
        position: absolute;
        top: 25%;
        transition: all .2s;
        animation: slideBodyModalIn .2s;
    }

    .header {
        width: 100%;
        height: 50px;
        padding: 10px;
        display: flex;
        justify-content: flex-end;
    }

    .body {
        height: calc(100% - 50px);
        width: 100%;
        position: relative;
        overflow-y: auto;
    }
`;

export const ContainerDetail = styled.main`
    position: relative;
    display: block;
    width: 100%;
    height: 100%;

    .section {
        min-height: 75%;

        background-color: var(--color-white);
        padding: 8px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;

        font-weight: 500;
        font-size: 1.5rem;
        line-height: 2rem;
        color: var(--color-text-primary);

        display: flex;
        flex-direction: column;
    }
`;

export const DetailTop = styled.section`
    display: flex;
    flex-direction: column;
    text-align: center;

    ul {
        width: 100%;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

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

export const DetailBottom = styled.section`
    font-style: normal;
    font-weight: normal;
    
    color: var(--color-text-primary);
    display: block;

    h2 {
        width: 100%;
        height: auto;
        text-align: left;
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

    .footer {
        width: 100%;
        display: flex;
        justify-content: space-around;
    }
`;

export const Tags = styled.div`
    font-size: 0.75rem;
    line-height: 1rem;

    padding: 5px 0;

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
            border-radius: 8px;
            cursor: pointer;
        }
    }
`;