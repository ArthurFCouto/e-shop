import { LineOrange } from "../commom";
import { ButtonBlock, Section } from "./styles";

export default function NavMenuBottom() {
    return(
        <Section >
            <ButtonBlock>
                Populares
                <LineOrange
                width="50%"
                margin="0"/>
            </ButtonBlock>
            <ButtonBlock>
                Mais Pedidos
                <LineOrange
                width="0"
                margin="0"/>
            </ButtonBlock>
            <ButtonBlock>
                Novos Combos
                <LineOrange
                width="0" 
                margin="0"/>
            </ButtonBlock>
        </Section>
    )
}