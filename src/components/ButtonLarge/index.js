import { ButtonContainer } from "./styles";

export function ButtonLarge(props) {
    const { children, type } = props;
    return (
        <ButtonContainer
            type={type == undefined ? "button" : type}
        >
            {children}
        </ButtonContainer>
    )
}