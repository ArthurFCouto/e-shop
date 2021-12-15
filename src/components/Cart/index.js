import { useState, useEffect } from "react";
import { DivExit } from "../commom";
import Image from "next/image";
import { CartBody, CartFooter, CartHeader, CartList, CartMain } from "./styles";
import ButtonOrange from "../ButtonOrange";
import ButtonIcon from "../ButtonIcon";

export default function ModalCart(props) {
    const { onClose, show, item, removeItemCart } = props;
    const [priceTotal, setPriceTotal] = useState(0);
    const [itemShow, setItemShow] = useState([]);

    useEffect(function () {
        Inicialize();
    }, [item]);

    function Inicialize() {
        let total = item.reduce((total, obj) => total += obj.price, 0);
        setPriceTotal(total);
        setItemShow(item);
    }

    function Sub(id) {
        const newItem = itemShow.filter((obj) => (obj.id != id));
        let total = newItem.reduce((total, obj) => total += obj.price, 0);
        setItemShow(newItem);
        setPriceTotal(total);
        removeItemCart(newItem);
    }

    function Redirect() {
        const text = itemShow.reduce((total, obj) => total += obj.title + " - " + obj.count + "unid. \n", "");
        const urlEncode = window.encodeURIComponent("Resumo do pedido:\n" + text + "\n R$ " + priceTotal.toFixed(2));
        window.open("https://api.whatsapp.com/send?phone=5538999414205&text=" + urlEncode);
        onClose();
    }

    return (
        <>
            {show && (
                <CartMain>
                    <CartHeader>
                        <DivExit onClick={() => onClose()}>
                            <ButtonIcon icon="back" />
                            Fechar
                        </DivExit>
                        Carrinho
                    </CartHeader>
                    <CartBody>
                        <CartList>
                            {itemShow.map((data) => (
                                <li
                                    className="listItem"
                                    key={data.id}>
                                    <div className="detailsImagem">
                                        <Image
                                            src={data.image}
                                            alt="Carregando imagem..."
                                            height={50}
                                            width={50}
                                        />
                                    </div>
                                    <div className="detailsItem">
                                        {data.title}
                                        <span className="itemCount">{data.count}packs</span>
                                        <span className="itemPrice">R$ {data.price.toFixed(2)}</span>
                                    </div>
                                    <div className="detailsButton">
                                        <ButtonIcon icon="sub" onClick={() => Sub(data.id)} />
                                    </div>
                                </li>
                            ))}
                        </CartList>
                    </CartBody>
                    <CartFooter>
                        <div className="footer">
                            Total
                            <span className="footerPrice">R$ {priceTotal.toFixed(2)}</span>
                        </div>
                        <div>
                            <ButtonOrange
                            actionClick={() => Redirect()}>
                                Checkout
                            </ButtonOrange>
                        </div>
                    </CartFooter>
                </CartMain>
            )}
        </>
    )
}