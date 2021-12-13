import Image from "next/image";
import { CardPainel, Button, ImageContainer,
    Bottom, Title, Price } from "./styles";
import ButtonLottie from "../ButtonLottie";
import ButtonIcon from "../ButtonIcon";

export default function Card(props) {
    const { addCart, onShow, item, image, title, price } = props;

    function AddItemCart() {
        const date = new Date();
        let idFull = " " + date.getHours() + date.getMinutes() + date.getSeconds() + date.getMilliseconds();
        let data = {
            id: idFull,
            image: image,
            title: title,
            price: price,
            count: 1
        }
        addCart(data);
        alert("Item adicionado!");
    }

    return (
        <CardPainel>
            <Button
            top="8px"
            rigth="8px">
                <ButtonLottie
                anim="heart"
                width={50}
                height={50} />
            </Button>
            <ImageContainer>
                <Image
                onClick={() => onShow(item)}
                src={image}
                alt="Carregando imagem..."
                height={85}
                width={85}
                />
            </ImageContainer>
            <Bottom>
                <Title
                onClick={() => onShow(item)}>
                    {title}
                </Title>
                <Price>
                    R$ {price.toFixed(2)}
                    <div className="button">
                        <ButtonIcon icon="add" onClick={() => AddItemCart()}/>
                    </div>
                </Price>
            </Bottom>
        </CardPainel>
    )
}