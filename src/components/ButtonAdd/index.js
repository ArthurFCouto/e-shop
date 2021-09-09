import Image from "next/image";
import add from "../../iconsSvg/add.svg";
import { Add } from "./styles";

export default function ButtonAdd(props) {
    return(
        <Add
        {...props}>
            <Image
            src={add}
            height={30}
            width={30}
            alt="Add"
            />
        </Add>
    )
}