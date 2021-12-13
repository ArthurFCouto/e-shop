import styled from "styled-components";
import Image from "next/image";

export const Container = styled.main`
    min-width: 375px;
    display: none;
    
    @media(max-width: 860px) {
        position: relative;
        min-height: 100%;
        display: block;
        background-color: #FFA451;
    }
`;

export const ViewButtom = styled.section`
    width: 100%;
    display: block;
    margin: auto;
    padding: 10px 5px;
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