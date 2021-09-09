import { useState, useEffect } from "react";
import Image from "next/image";
import { CartBody, CartFooter, CartHeader,
     CartList, CartMain } from "./styles";
import { ButtonLarge } from "../commom";
import ButtonSub from "../ButtonSub";
import ButtonBack from "../ButtonBack";

export default function ModalCart(props) {
    const { onClose, show, item, removeItemCart } = props;
    const [priceTotal, setPriceTotal] = useState(0);
    const [itemShow, setItemShow] = useState([]);

    useEffect(function () {
        Inicialize();
      }, [item]);

    function Inicialize() {
        let total = item.reduce((total, obj)=>total+=obj.price, 0);
        setPriceTotal(total);
        setItemShow(item);
    }

    function Sub(id) {
        const newItem = itemShow.filter((obj) => (obj.id != id) );
        let total = newItem.reduce((total, obj)=>total+=obj.price, 0);
        setItemShow(newItem);
        setPriceTotal(total);
        removeItemCart(newItem);
    }

    function Redirect() {
        let text = itemShow.reduce((total, obj)=>total+=obj.title+" - "+obj.count+"unid. \n", "");
        var urlEncode = window.encodeURIComponent("Resumo do pedido:\n"+text+"\n R$ "+priceTotal.toFixed(2));
        window.open("https://api.whatsapp.com/send?phone=5538999414205&text="+urlEncode);
        onClose();
    }

    return(
        <>
        {show && (
            <CartMain>
            <CartHeader>
                <ButtonBack 
                onClick={()=> onClose()}/>
                My Basket
            </CartHeader>
            <CartBody>
                <CartList>
                    { itemShow.map((data) => (
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
                                <ButtonSub 
                                onClick={()=>Sub(data.id)}/>
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
                    <ButtonLarge
                    onClick={()=>Redirect()}>
                        Checkout
                    </ButtonLarge>
                </div>
            </CartFooter>
        </CartMain>
        )}
        </>
    )
}