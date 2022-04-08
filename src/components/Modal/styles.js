import styled from "styled-components";

export const ModalContainer = styled.main`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    background-color: var(--color-black-50);
    z-index: 10;

    .top {
        content: ' ';
        background-color: transparent;
        width: 100%;
        height: 25%;
    }
`;

export const Body = styled.section`
    background: var(--color-bg-primary);
    width: 100%;
    height: 75%;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    position: absolute;
    top: 25%;
    transition: all .2s;
    animation: slideBodyModalIn .2s;

    .header {
        width: 100%;
        height: 50px;
        padding: 10px;
        display: flex;
        justify-content: flex-end;
    }

    .buttonExit {
        display: flex;
        align-items: center;
        background-color: var(--color-white);

        width: 75px;
        height: 30px;
        padding: 5px 10px;;
        border-radius: 100px;

        white-space: nowrap;
        font-style: normal;
        font-weight: normal;
        font-size: 0.75rem;
        line-height: 1rem;
        color: var(--color-text-primary);

        transition: 0.25s;

        :hover{
            cursor: pointer;
            box-shadow: 0px 4px 2px rgb(0 0 0 / 25%), 0px 0px 1px rgb(0 0 0 / 25%);
        }
    }

    .children {
        height: calc(100% - 50px);
        width: 100%;
        position: relative;
        overflow-y: auto;
    }
`;