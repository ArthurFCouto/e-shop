import { useState, useEffect } from "react";
import { DivExit } from "../commom";
import Image from "next/image";
import { ContainerCart, CartBody, CartFooter } from "./styles";
import ButtonOrange from "../ButtonOrange";
import ButtonIcon from "../ButtonIcon";
import { productContext } from "../../context/ProductContext";

export default function ModalCart(props) {
    const { onClose, show } = props;
    const { itemCart:item, remove } = productContext();
    const [priceTotal, setPriceTotal] = useState(0);
    const [itemShow, setItemShow] = useState([]);
    const [showBody, setShowBody] = useState(<div />);
    const body = (
        <ContainerCart >
            <header>
                <DivExit onClick={() => onClose()}>
                    <ButtonIcon icon="back" />
                    Fechar
                </DivExit>
                <span>Carrinho</span>
            </header>
            <CartBody>
                <ul>
                    {
                        itemShow.map((data) => (
                            <li className="item" key={data.id}>
                                <div className="img">
                                    <Image
                                        src={data.image}
                                        alt="Carregando imagem..."
                                        height={50}
                                        width={50}
                                    />
                                </div>
                                <div className="details">
                                    <span className="itemName">{data.title}&nbsp;</span>
                                    <span className="itemCount">{data.count}&nbsp;unidades</span>
                                    <span className="itemPrice">R$ {data.price.toFixed(2)}</span>
                                </div>
                                <div className="button">
                                    <ButtonIcon
                                        icon="sub"
                                        actionClick={() => Remove(data.id)} />
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </CartBody>
            <CartFooter>
                <div className="footer">
                    Total
                    <span>R$ {priceTotal.toFixed(2)}</span>
                </div>
                <ButtonOrange
                    actionClick={() => Redirect()}>
                    Checkout
                </ButtonOrange>
            </CartFooter>
        </ContainerCart>
    );

    useEffect(function () {
        let total = item.reduce((total, obj) => total += obj.price, 0);
        setPriceTotal(total);
        setItemShow(item);
        if (show) {
            setShowBody(body);
        } else setShowBody(<div />)
    }, [show, item]);

    function Remove(id) {
        const newItem = itemShow.filter((obj) => (obj.id != id));
        let total = newItem.reduce((total, obj) => total += obj.price, 0);
        setPriceTotal(total);
        setItemShow(newItem);
        remove(newItem);
    }

    function Redirect() {
        const text = itemShow.reduce((total, obj) => `${total}[${obj.id}] ${obj.title} - ${obj.count} unid. \n`, "");
        const urlEncode = window.encodeURIComponent(`*Resumo do pedido:*\n${text}\nValor total: *R$ ${priceTotal.toFixed(2)}*`);
        window.open("https://api.whatsapp.com/send?phone=5538999414205&text=" + urlEncode);
        onClose();
    }

    return (
        showBody
    )
}