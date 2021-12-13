import Image from "next/image";
import { useEffect, useState } from "react";
import add from "../../iconsSvg/add.svg";
import back from "../../iconsSvg/back.svg";
import sub from "../../iconsSvg/sub.svg";
import { ContainerButton } from "./styles";

export default function ButtonIcon(props) {
    const { icon } = props;
    const [img, setImg] = useState(back);
    useEffect(function () {
        switch (icon) {
            case "add":
                setImg(add);
                break;
            case "sub":
                setImg(sub);
                break;
        }
    }, []);
    return(
        <ContainerButton
        {...props}>
            <Image
            src={img}
            height={30}
            width={30}
            alt="Button"
            />
        </ContainerButton>
    )
}