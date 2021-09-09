import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { NavHeader, Button, Nav, NavLeft } from "./styles";
import { InputText } from "../commom"
import menu from "../../iconsSvg/menu.svg";
import cart from "../../iconsSvg/cesta.svg";
import filter from '../../iconsSvg/filter.svg';

export default function Header(props) {
    const [valueInput, setValueInput] = useState("");
    const { name, clear, search, showCart } = props;
    
    return (
        <NavHeader>
            <Nav>
                <NavLeft>
                    <Link
                    href="/register"
                    passHref>
                        <Image
                        src={menu}
                        height={30}
                        width={30}
                        alt="Menu"
                        />
                    </Link>
                    <h1>Welcome, {name}</h1>
                </NavLeft>
                <Button
                title="Shopping Cart"
                onClick={() => showCart(true)}>
                    <Image
                    src={cart}
                    height={30}
                    width={30}
                    alt="Cart"
                    />
                </Button>
            </Nav>
            <Nav>
                <form onSubmit={(evento) => {
                    evento.preventDefault();
                    const data = new FormData(evento.target);
                    const text = data.get('search');
                    search(text);
                }}>
                    <InputText
                    placeholder="Search for fruit salad combos"
                    type="search"
                    name="search"
                    autoComplete="false"
                    value={valueInput}
                    onChange={(evento) => setValueInput(evento.target.value)}
                    />
                </form>
                <Button
                    title="Filter / Clear"
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
            </Nav>
        </NavHeader>
    )
}