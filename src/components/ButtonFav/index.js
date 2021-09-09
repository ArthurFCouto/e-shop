import Image from "next/image";
import fav from "../../iconsSvg/favorite.svg";
import { Fav } from "./styles";

export default function ButtonFav(props) {
    return(
        <Fav
        {...props}>
            <Image
            src={fav}
            height={30}
            width={30}
            alt="Favorite"
            />
        </Fav>
    )
}