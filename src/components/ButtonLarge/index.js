import { ButtonContainer } from "./styles";

export function ButtonLarge(props) {
    const { actionClick, children, type } = props;

    function Action() {
        if (actionClick != undefined)
            actionClick();
    }

    return (
        <ButtonContainer
            type={type == undefined ? "button" : type}
            onClick={()=> Action()}
        >
            {children}
        </ButtonContainer>
    )
}