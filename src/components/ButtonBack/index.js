import Image from "next/image";
import back from "../../iconsSvg/back.svg";
import { Back } from "./styles";

export default function ButtonBack(props) {
    return(
        <Back
        {...props}>
            <Image
            src={back}
            height={20}
            width={20}
            alt="Back"
            />
            Go Back
        </Back>
    )
}