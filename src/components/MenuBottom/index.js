import { useReducer } from "react";
import { Button, Container } from "./styles";
import styles from "../../../styles/Home.module.css";

export default function NavMenuBottom() {
    const [active, dispatchActive] = useReducer(Alter, {
        widthBtn1: "50%",
        widthBtn2: "0%",
        widthBtn3: "0%",
    });

    function Alter(state, action) {
        switch (action.select) {
            case 1:
                return {
                    widthBtn1: "50%",
                    widthBtn2: "0%",
                    widthBtn3: "0%",
                };
            case 2:
                return {
                    widthBtn1: "0%",
                    widthBtn2: "50%",
                    widthBtn3: "0%",
                };
            case 3:
                return {
                    widthBtn1: "0%",
                    widthBtn2: "0%",
                    widthBtn3: "50%",
                };
            default:
                throw new Error();
        }
    }
    return (
        <Container>
            <Button onClick={() => dispatchActive({ select: 1 })}>
                <h2>Populares</h2>
                <div className={`${styles.lineOrange}`} style={{ width: active.widthBtn1 }} />
            </Button>
            <Button onClick={() => dispatchActive({ select: 2 })}>
                <h2>Mais Pedidos</h2>
                <div className={`${styles.lineOrange}`} style={{ width: active.widthBtn2 }} />
            </Button>
            <Button onClick={() => dispatchActive({ select: 3 })}>
                <h2>Novos Combos</h2>
                <div className={`${styles.lineOrange}`} style={{ width: active.widthBtn3 }} />
            </Button>
        </Container>
    )
}