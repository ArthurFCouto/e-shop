import Image from "next/image";
import { useState } from "react";
import ButtonFav from "../ButtonFav";
import ButtonAdd from "../ButtonAdd";
import ButtonSub from "../ButtonSub";
import { ButtonLarge, InputText, LineOrange } from "../commom";
import { DetailMain, DetailHeader, DetailSection, HeaderSection,
    HeaderButtons, Divisor, BodySection, BodyTags,
    BodyDetails, BodyFooter} from "./styles";

export default function ModalDetails(props) {
    const [valueInput, setValueInput] = useState(1);
    const { tags, image, price, title, details } = props.item;
    const { addCart, onClose } = props;
    const [priceValue, setPriceValue] = useState(price);

    function Add() {
        let data = valueInput+1;
        if(valueInput<10) {
            setValueInput(valueInput+1);
            setPriceValue(price*data);
        }
    }

    function Sub() {
        let data = valueInput-1;
        if(valueInput>1) {
            setValueInput(valueInput-1);
            setPriceValue(price*data);
        }
    }

    function AddItemCart() {
        var date = new Date();
        var idFull = " "+date.getHours()+date.getMinutes()+date.getSeconds()+date.getMilliseconds();
        let data = {
            id : idFull,
            image: image,
            title : title,
            price : priceValue,
            count : valueInput
        }
        addCart(data);
        onClose();
        alert("Item adicionado!");
    }

    return (
        <DetailMain>
            <DetailHeader>
                <Image
                src={image}
                height={100}
                width={100}
                alt="Imagem produto"
                />
            </DetailHeader>
            <DetailSection>
                <HeaderSection>
                    {title}
                    <HeaderButtons>
                        <div
                        className="spaceButton">
                            <ButtonSub
                            onClick={()=>Sub()}/>
                            <InputText
                            value={valueInput}
                            readOnly/>
                            <ButtonAdd 
                            onClick={()=>Add()}/>
                        </div>
                        R$ {priceValue.toFixed(2)}
                    </HeaderButtons>
                </HeaderSection>
                <Divisor />
                <BodySection>
                    This combo contains:
                    <LineOrange
                    width="20%"/>
                    <BodyTags>
                        <ul>
                            { tags.map((item) => (
                                <li key={item}>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </BodyTags>
                    <Divisor />
                    <BodyDetails>
                        {details}
                    </BodyDetails>
                    <BodyFooter>
                        <div
                        className="buttonFav">
                            <ButtonFav />
                        </div>
                        <ButtonLarge
                        onClick={()=> AddItemCart()}>
                            Add To Basket
                        </ButtonLarge>
                    </BodyFooter>
                </BodySection>
            </DetailSection>
        </DetailMain>
    )
}