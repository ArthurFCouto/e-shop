import Image from "next/image";
import sub from "../../iconsSvg/sub.svg";
import { Sub } from "./styles";

export default function ButtonSub(props) {
    return(
        <Sub
        {...props}>
            <Image
            src={sub}
            height={30}
            width={30}
            alt="Sub"
            />
        </Sub>
    )
}