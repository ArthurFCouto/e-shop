import Image from "next/image";
import { useState } from "react";
import { ContainerModalDetail, BodySection, Divider, Footer, HeaderSection, Tags } from "./styles";
import ButtonIcon from "../ButtonIcon";
import ButtonOrange from "../ButtonOrange";
import ButtonLottie from "../ButtonLottie";
import { productContext } from "../../context/ProductContext";

export default function ModalDetails(props) {
    const { add:addCart } = productContext();
    const { onClose } = props;
    const { tags, image, price, title, details } = props.item;
    const [valueInput, setValueInput] = useState(1);
    const [priceValue, setPriceValue] = useState(price);

    function Count(count) {
        let data = valueInput + count;
        if (data <= 10 && data >= 1) {
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
                                actionClick={() => Count(-1)} />
                            <InputPerson
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
                        <ButtonOrange
                            actionClick={() => AddItemCart()}
                            width="55%">
                            Adicionar
                        </ButtonOrange>
                    </Footer>
                </BodySection>
            </section>
        </ContainerModalDetail>
    )
}