import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button, ContainerHeader, Line } from "./styles";
import { InputPerson } from "../commom"
import menu from "../../iconsSvg/menu.svg";
import cart from "../../iconsSvg/cesta.svg";
import filter from '../../iconsSvg/filter.svg';

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
                title="Meu carrinho"
                onClick={() => showCart(true)}>
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
                onSubmit={(evento) => {
                    evento.preventDefault();
                    const data = new FormData(evento.target);
                    const text = data.get('search');
                    search(text);
                }}>
                    <InputPerson
                    placeholder="Pesquisar..."
                    type="search"
                    name="search"
                    autoComplete="false"
                    value={valueInput}
                    onChange={(evento) => setValueInput(evento.target.value)}
                    />
                </form>
                <Button
                title="Filtrar / Limpar"
                onClick={() => {
                    setValueInput("");
                    clear();
                }}>
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