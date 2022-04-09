import { useState, useEffect } from "react";
import Image from "next/image";
import { Container, Body, Footer } from "./styles";
import ButtonOrange from "../ButtonOrange";
import ButtonIcon from "../ButtonIcon";
import { productContext } from "../../context/ProductContext";
import styles from '../../../styles/Home.module.css';

export default function ModalCart(props) {
    const { onClose, show } = props;
    const { list, remove } = productContext();
    const [priceTotal, setPriceTotal] = useState(0);
    const [listProducts, setListProducts] = useState([]);
    const [showBody, setShowBody] = useState(<></>);
    const body = (
        <Container >
            <div className="header">
                <div className={styles.btnExit} onClick={() => onClose()}>
                    <ButtonIcon icon="back" />
                    Fechar
                </div>
                <span>Carrinho</span>
            </div>
            <Body>
                <ul>
                    {
                        listProducts.map((product, index) => (
                            <li key={index}>
                                <div className={`${styles.flex} ${styles.JCenterACenter} ${styles.bgClear}`} style={{ borderRadius: "16px" }}>
                                    <Image
                                        src={product.image}
                                        alt="Carregando imagem..."
                                        height={50}
                                        width={50}
                                    />
                                </div>
                                <div className="details">
                                    <span>{product.title}&nbsp;</span>
                                    <span>{product.count}&nbsp;unidades</span>
                                    <span>R$ {product.price.toFixed(2)}</span>
                                </div>
                                <div className={`${styles.flex} ${styles.JCenterACenter}`}>
                                    <ButtonIcon
                                        icon="sub"
                                        actionClick={() => Exclude(product.id)} />
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </Body>
            <Footer>
                <div className="title">
                    <h1>Total</h1>
                    <h3>R$ {priceTotal.toFixed(2)}</h3>
                </div>
                <ButtonOrange
                    actionClick={() => Redirect()}>
                    Checkout
                </ButtonOrange>
            </Footer>
        </Container>
    );

    function Exclude(id) {
        const newListProducts = listProducts.filter((obj) => (obj.id != id));
        const newPriceTotal = newListProducts.reduce((total, obj) => total += obj.price * obj.count, 0);
        setPriceTotal(newPriceTotal);
        setListProducts(newListProducts);
        remove(id);
    }

    function Redirect() {
        const text = listProducts.reduce((total, obj) => `${total}[${obj.id}] ${obj.title} - ${obj.count} unid. \n`, "");
        const urlEncode = window.encodeURIComponent(`*Resumo do pedido:*\n${text}\nValor total: *R$ ${priceTotal.toFixed(2)}*`);
        window.open("https://api.whatsapp.com/send?phone=5538999414205&text=" + urlEncode);
        onClose();
    }

    useEffect(() => {
        setPriceTotal(list.reduce((total, obj) => total += obj.price * obj.count, 0));
        setListProducts(list);
        if (show) setShowBody(body);
        else setShowBody(<></>);
    }, [show, list]);

    return showBody;
}