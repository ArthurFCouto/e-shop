import styled from "styled-components";

export const CardPainel = styled.div`
    position: relative;
    width: 145px;
    height: 180px;
    padding: 5px;
    margin: auto;
  
    background: #FFFFFF;
    box-shadow: 0px 30px 60px rgba(32, 32, 32, 0.05);
    border-radius: 1rem;

    transition: .25s;

    :hover {
        background: #FEF4F4;
    }
`;
  
export const Bottom = styled.div`
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
  
export const Img = styled.div`
    height: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
  
export const Title = styled.div`
    width: 100%;
    margin: 5px 0;
    overflow: hidden;
  
    font-style: normal;
    font-weight: 500;
    font-size: 0.8rem;
    line-height: 1.1rem;
  
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: -0.01em;
  
    text-overflow: ellipsis;
    white-space: nowrap;
  
    transition: all .25s;
    cursor: pointer;
    color: #27214D;

    :hover {
        text-shadow: 0px 2px 1px rgb(0 0 0 / 15%), 0px 0px 1px rgb(0 0 0 / 35%);
    }
`;
  
export const Price = styled.div`
    width: 100%;
    margin: 5px 0;

    font-style: normal;
    font-weight: 500;
    font-size: 0.9rem;
    line-height: 1.1rem;
  
    display: flex;
    align-items: center;
    justify-content: space-between;
    letter-spacing: -0.01em;
    color: #F08626;

    div {
        width: 18px;
        height: 18px;
    }
`;

export const Button = styled.div`
    position: absolute;
    top: 8px;
    right: 8px;
    width: 18px;
    height: 18px;
`;