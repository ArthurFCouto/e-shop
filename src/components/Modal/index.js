import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ButtonIcon from "../ButtonIcon";
import ButtonOrange from "../ButtonOrange";
import ButtonLottie from "../ButtonLottie";
import { Container, ContainerDetail, DetailBottom, DetailTop, Divider, Tags } from "./styles";
import { productContext } from "../../context/ProductContext";
import styles from '../../../styles/Home.module.css';

export default function Modal(props) {
    const { show, onClose, item } = props;
    const { tags, image, price, title, details } = props.item;
    const { add } = productContext();
    const [valueInput, setValueInput] = useState(0);
    const [priceValue, setPriceValue] = useState(0);
    const id = useRef(null);
    const [display, setDisplay] = useState(false);

    function Count(count) {
        let data = valueInput + count;
        if (data >= 1 && data <= 10) {
            setValueInput(valueInput + count);
            setPriceValue(price * data);
        }
    }

    function AddItemCart() {
        add({ ...item, count: valueInput });
        alert("Item adicionado!");
        Close();
    }

    function Close() {
        id.current.setAttribute("style", "top: 100%;");
        setTimeout(() => onClose(), 200);
    }

    useEffect(() => {
        setDisplay(show);
        setValueInput(1);
        setPriceValue(price);
    }, [show]);

    return display
        ? (
            <Container>
                <div className="viewTop" onClick={() => Close()} />
                <section ref={id} className="viewBottom">
                    <div className="header">
                        <div className={styles.btnExit} onClick={() => Close()} >
                            <ButtonIcon icon="back" />
                            Fechar
                        </div>
                    </div>
                    <div className="body">
                        <ContainerDetail>
                            <header className={`${styles.flex} ${styles.JCenterACenter}`} style={{ height: "35%" }}>
                                <Image
                                    src={image}
                                    height={100}
                                    width={100}
                                    alt="Imagem produto"
                                />
                            </header>
                            <div className="section">
                                <DetailTop>
                                    <span>{title}</span>
                                    <ul>
                                        <li className="count">
                                            <ButtonIcon
                                                icon="sub"
                                                actionClick={() => Count(-1)} />
                                            <input className={`${styles.inputCustomer}`}
                                                value={valueInput}
                                                readOnly />
                                            <ButtonIcon
                                                icon="add"
                                                actionClick={() => Count(1)} />
                                        </li>
                                        <li>
                                            R$ {priceValue.toFixed(2)}
                                        </li>
                                    </ul>
                                </DetailTop>
                                <Divider />
                                <DetailBottom>
                                    <h2>This combo contains:</h2>
                                    <div className={`${styles.lineOrange}`} style={{ width: "25%" }} />
                                    <Tags>
                                        <ul>
                                            {
                                                tags.map((item, index) => (
                                                    <li key={index}>
                                                        {item}
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </Tags>
                                    <Divider />
                                    <div className="details">
                                        {details}
                                    </div>
                                    <section className="footer">
                                        <div className={`${styles.flex} ${styles.JCenterACenter}`} style={{ width: "50%" }}>
                                            <ButtonLottie width={50} height={50} />
                                        </div>
                                        <ButtonOrange
                                            actionClick={() => AddItemCart()}
                                            width="100%">
                                            Adicionar
                                        </ButtonOrange>
                                    </section>
                                </DetailBottom>
                            </div>
                        </ContainerDetail>
                    </div>
                </section>
            </Container>
        )
        : (<></>)
        ;
}