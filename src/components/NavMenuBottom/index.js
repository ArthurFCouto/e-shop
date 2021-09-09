import { LineOrange } from "../commom";
import { ButtonBlock, Section } from "./styles";

export default function NavMenuBottom() {
    return(
        <Section >
            <ButtonBlock>
                Hottest
                <LineOrange
                width="50%"
                margin="0"/>
            </ButtonBlock>
            <ButtonBlock>
                Popular
                <LineOrange
                width="0"
                margin="0"/>
            </ButtonBlock>
            <ButtonBlock>
                New Combo
                <LineOrange
                width="0" 
                margin="0"/>
            </ButtonBlock>
        </Section>
    )
}