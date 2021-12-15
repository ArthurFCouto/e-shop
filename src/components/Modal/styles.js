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

    .children {
        height: calc(100% - 50px);
        width: 100%;
        position: relative;
        overflow-y: auto;
    }
`;