import styled from "styled-components";

export const Container = styled.section`
    position: relative;
    width: 145px;
    height: 190px;
    padding: 5px;
    margin: auto;
  
    background: var(--color-white);
    box-shadow: 0px 30px 60px rgba(32, 32, 32, 0.05);
    border-radius: 8px;
    transition: all .25s;

    :hover {
        background-color: var(--color-bg-clear);
    }
`;

export const Button = styled.div`
    position: absolute;
    top: ${(props) => props.top || "0px"};
    right: ${(props) => props.rigth || "0px"};
    width: 18px;
    height: 18px;
    z-index: 5;
`;

export const ImageContainer = styled.div`
    height: 60%;
    width: 100%;
    z-index: 1;
`;

export const Bottom = styled.main`
    height: 40%;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;

    h2 {
        width: 100%;
        margin: 5px 0;
        overflow: hidden;

        text-overflow: ellipsis;
        text-align: center;
        white-space: nowrap;
    
        transition: all .25s;
        cursor: pointer;
        color: var(--color-text-primary)!important;

        :hover {
            text-shadow: 0px 2px 1px rgb(0 0 0 / 15%), 0px 0px 1px rgb(0 0 0 / 35%);
        }
    }
`;

export const Price = styled.div`
    width: 100%;
    margin: 5px 0;
    position: relative;
      
    align-items: center;
    justify-content: space-between;
    color: var(--color-text-tertiary)!important;

    .button {
        position: absolute;
        right: 8px;
        width: 18px;
        height: 18px;
        z-index: 5;
    }
`;

