import Image from "next/image";
import { useState } from "react";
import ButtonIcon from "../ButtonIcon";
import { ButtonLarge } from "../ButtonLarge";
import { InputText, LineOrange } from "../commom";
import { ContainerModalDetail, BodySection, Divider, Footer, HeaderSection, Tags } from "./styles";
import ButtonLottie from "../ButtonLottie";

export default function ModalDetails(props) {
    const { addCart, onClose } = props;
    const { tags, image, price, title, details } = props.item;
    const [valueInput, setValueInput] = useState(1);
    const [priceValue, setPriceValue] = useState(price);

    function Count(count) {
        let data = valueInput + count;
        if (valueInput < 10) {
            setValueInput(valueInput + count);
            setPriceValue(price * data);
        }
    }

    function AddItemCart() {
        const date = new Date();
        let idFull = " " + date.getHours() + date.getMinutes() + date.getSeconds() + date.getMilliseconds();
        let data = {
            id: idFull,
            image: image,
            title: title,
            price: priceValue,
            count: valueInput
        }
        addCart(data);
        onClose();
        alert("Item adicionado!");
    }

    return (
        <ContainerModalDetail>
            <header className="img">
                <Image
                    src={image}
                    height={100}
                    width={100}
                    alt="Imagem produto"
                />
            </header>
            <section className="section">
                <HeaderSection>
                    {title}
                    <ul>
                        <li className="count">
                            <ButtonIcon
                                icon="sub"
                                onClick={() => Count(-1)} />
                            <InputText
                                value={valueInput}
                                readOnly />
                            <ButtonIcon
                                icon="add"
                                onClick={() => Count(1)} />
                        </li>
                        <li>
                            R$ {priceValue.toFixed(2)}
                        </li>
                    </ul>
                </HeaderSection>
                <Divider />
                <BodySection>
                    <div className="text">
                        This combo contains:
                    </div>
                    <LineOrange width="25%" />
                    <Tags>
                        <ul>
                            {
                                tags.map((item) => (
                                    <li key={item}>
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
                    <Footer>
                        <div className="buttonFav">
                            <ButtonLottie width={50} height={50} />
                        </div>
                        <ButtonLarge
                            actionClick={() => AddItemCart()}>
                            Adicionar ao Carrinho
                        </ButtonLarge>
                    </Footer>
                </BodySection>
            </section>
        </ContainerModalDetail>
    )
}