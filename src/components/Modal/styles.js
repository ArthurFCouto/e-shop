import styled from "styled-components";

export const ModalBack = styled.main`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: rgba(0, 0, 0, 50%);
    animation: openModal .5s ;
`;

export const ModalSup = styled.section`
    background-color: transparent;
    width: 100%;
    height: 25%;
`;

export const ModalContainer = styled.section`
    background: #FFA451;
    width: 100%;
    height: 75%;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    overflow-y: auto;
`;

export const ModalHeader = styled.div`
    width: 100%;
    height: 50px;
    padding: 10px;
    display: flex;
    justify-content: flex-end;
`;

export const ModalBody = styled.div`

`;