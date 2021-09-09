import styled from "styled-components";
import Image from "next/image";

export const Container = styled.main`
    min-width: 375px;
    
    @media(max-width: 860px) {
        position: relative;
        height: 100vh;
        display: block;
        background-color: #FFA451;
    }
    @media(min-width: 860px) {
        display: none;
    }
`;

export const ViewTop = styled.section`
    position: relative;
    width: 100%;
    height: 60%;
    padding: 0;
    margin: 0;
    background-color: #FFA451;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ViewBottom = styled.section`
    width: 100%;
    height: 20%;
    margin: 0;
    padding: 15px;
    background-color: #FFFFFF;
`;

export const ViewButtom = styled.section`
    width: 100%;
    height: 20%;
    margin: 0;
    padding: 15px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #FFFFFF;
`;

export const ViewMain = styled.main`
    height: 100%;
    display: block;
    padding: 15px;
    background-color: #FFFFFF;
`;

export const SectionCards = styled.section`
    
`;

const HrOrange = styled.div`
    content: '';
    background-color: #FFA451;
    margin: 5px 0;
    height: 2px;
`;

const ButtonLargeOrange = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 15px 10px;
    cursor: pointer;

    width: 90%;
    height: auto;
    margin: auto;

    background: #FFA451;
    border: 0;
    border-radius: 10px;
    box-shadow: 0px 5px 5px #E4E4E4;

    font-weight: 500;
    font-size: 1rem;
    line-height: 1.5rem;

    color: #FFFFFF;
`;



export const ButtonPerson = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0;
    overflow: hidden;

    width: 48px;
    max-width: 48px;
    height: 48px;
    max-width: 48px;

    border-radius: 50%;
    border: 0;
    background: #FFFFFF;
    box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.05), 0px 0px 1px rgba(0, 0, 0, 0.25);
`;

export const InputText = styled.input`
    width: 100%;
    margin: auto;
    text-align: left;
    padding: 15px 10px;

    letter-spacing: -0.01em;
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.5rem;

    background: #F7F5F5;
    border-radius: 10px;
    border: 0;

    ::placeholder {
        color: #C2BDBD;
    }
`;

export const TitleMain = styled.span`
    font-style: normal;
    font-weight: normal;
    font-size: 1.1rem;
    line-height: 1.9rem;

    color: #27214D; 
`;

export const MainGrid = styled.main`
    width: 100%;
    min-height: 314px;
    padding: 5px;

    margin-left: auto;
    margin-right: auto;

    display: grid;
    grid-gap: 10px;
    grid-template-columns: 1fr 1fr; //Ao utilizar 1fr estou utilizando uma fração do que tem disponível
`;

export const MainLinear = styled.main`
    width: 100%;
    padding: 5px;
    overflow-x: auto;

    display: inline-flex;
`;

export function ButtonLarge(props) {
    return (
        <ButtonLargeOrange {...props} />
    )
}

export function ImageButton(props) {
    return (
        <Image
        src={props.source} 
        height={30}
        width={30}
        alt="Carregando imagem..." />
    )
}

export function LineOrange(props) {
    return (
        <HrOrange
        style={{ ...props }}
        />
    )
}