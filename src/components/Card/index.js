import Image from "next/image";
import {
    Container, Button, ImageContainer,
    Bottom, Price,
} from "./styles";
import ButtonLottie from "../ButtonLottie";
import ButtonIcon from "../ButtonIcon";
import styles from "../../../styles/Home.module.css";
import { productContext } from "../../context/ProductContext";

export default function Card(props) {
    const { add } = productContext();
    const { item, image, title, price, openModal } = props;

    function AddItemCart() {
        add({ ...item, count: 1 });
        alert("Item adicionado!");
    }

    return (
        <Container>
            <Button
                top="8px"
                rigth="8px">
                <ButtonLottie
                    anim="heart"
                    width={50}
                    height={50} />
            </Button>
            <ImageContainer className={`${styles.flex} ${styles.JCenterACenter}`}>
                <Image
                    onClick={() => openModal()}
                    src={image}
                    alt="Carregando imagem..."
                    height={85}
                    width={85}
                />
            </ImageContainer>
            <Bottom>
                <h2 onClick={() => openModal()}>
                    {title}
                </h2>
                <Price className={`${styles.flex}`}>
                    <h1>
                        R$ {price.toFixed(2)}
                    </h1>
                    <span className="button">
                        <ButtonIcon icon="add" actionClick={() => AddItemCart()} />
                    </span>

                </Price>
            </Bottom>
        </Container>
    )
}