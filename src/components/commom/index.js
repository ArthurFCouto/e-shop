import styled from "styled-components";
import Image from "next/image";

export const Container = styled.main`
    min-width: 375px;
    display: none;
    
    @media(max-width: 860px) {
        position: relative;
        height: 100%;
        min-height: 100%;
        display: block;
        background-color: var(--color-bg-primary);
    }
`;

export const DivExit = styled.div`
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
    background-color: var(--color-white);
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
    background: var(--color-white);
    box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.05), 0px 0px 1px rgba(0, 0, 0, 0.25);
`;

export const InputPerson = styled.input`
    width: 100%;
    margin: 0 auto;
    padding: 15px 10px;

    text-align: left;
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.5rem;
    letter-spacing: 0.1rem;

    background: var(--color-bg-clear);
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
    color: var(--color-text-primary); 
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
    column-gap: 10px;
`;

const HrOrange = styled.div`
    content: '';
    background-color: var(--color-bg-primary);
    margin: 5px 0;
    height: 2px;
`;

export function LineOrange(props) {
    return (
        <HrOrange
            style={{ ...props }}
        />
    )
}