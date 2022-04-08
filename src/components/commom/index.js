import styled from "styled-components";

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

export const InputCustomer = styled.input`
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

export const ViewButtom = styled.section`
    width: 100%;
    display: block;
    margin: auto;
    padding: 10px 5px;
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

export function LineOrange(props) {
    const HrOrange = styled.div`
        content: '';
        background-color: var(--color-bg-primary);
        margin: 5px 0;
        height: 2px;
    `;

    return (
        <HrOrange
            style={{ ...props }}
        />
    )
}