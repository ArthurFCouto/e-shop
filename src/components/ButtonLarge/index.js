import { ButtonContainer } from "./styles";

export function ButtonLarge(props) {
    const { actionClick, children } = props;

    function Action() {
        if (actionClick != undefined)
            actionClick();
    }

    return (
        <ButtonContainer
            onClick={()=> Action()}
        >
            {children}
        </ButtonContainer>
    )
}