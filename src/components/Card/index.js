import Image from "next/image";
import {
    CardPainel, Button, Img,
    Bottom, Title, Price
} from "./styles";
import ButtonAdd from "../ButtonAdd";
import ButtonFav from "../ButtonFav";

export default function Card(props) {
    const { addCart, onShow, item, image, title, price } = props;

    function add() {
        var date = new Date();
        var idFull = " " + date.getHours() + date.getMinutes() + date.getSeconds() + date.getMilliseconds();
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
            <Button>
                <ButtonFav />
            </Button>
            <Img>
                <Image
                    onClick={() => onShow(item)}
                    src={image}
                    alt="Carregando imagem..."
                    height="85px"
                    width="85px"
                />
            </Img>
            <Bottom>
                <Title
                    onClick={() => onShow(item)}>
                    {title}
                </Title>
                <Price>
                    R$ {price}
                    <div>
                        <ButtonAdd
                            onClick={() => add()} />
                    </div>
                </Price>
            </Bottom>
        </CardPainel>
    )
}