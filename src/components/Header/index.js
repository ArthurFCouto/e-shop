import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button, ContainerHeader, Line } from "./styles";
import menu from "../../iconsSvg/menu.svg";
import cart from "../../iconsSvg/cesta.svg";
import filter from "../../iconsSvg/filter.svg";
import styles from "../../../styles/Home.module.css";

export default function Header(props) {
    const [valueInput, setValueInput] = useState("");
    const { name, clear, search, showCart } = props;

    return (
        <ContainerHeader>
            <Line>
                <div className="itemLeft">
                    <Link
                        href="/register"
                        passHref>
                        <Image
                            src={menu}
                            height={30}
                            width={30}
                            alt="Voltar"
                        />
                    </Link>
                    <h2>Olá, {name}</h2>
                </div>
                <Button
                    className={styles.JCenterACenter}
                    title="Meu carrinho"
                    onClick={() => showCart()}>
                    <Image
                        src={cart}
                        height={30}
                        width={30}
                        alt="Cart"
                    />
                </Button>
            </Line>
            <Line>
                <form
                    onSubmit={(event) => {
                        event.preventDefault();
                        search(valueInput);
                    }}>
                    <input
                        className={styles.inputCustomer}
                        placeholder="Pesquisar..."
                        type="search"
                        autoComplete="false"
                        value={valueInput}
                        onChange={(event) => setValueInput(event.target.value)}
                    />
                </form>
                <Button
                    title="Filtrar / Limpar"
                    onClick={() => clear()}>
                    <Image
                        src={filter}
                        height={30}
                        width={30}
                        alt="clear"
                    />
                </Button>
            </Line>
        </ContainerHeader>
    )
}