import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ButtonBack from "../ButtonBack";
import { ModalBody, ModalHeader, ModalContainer,
    ModalBack, ModalSup} from "./styles";


export default function Modal(props) {
    const { show, onClose, children } = props;
    const [isBrowser, setIsBrowser] = useState(false);

    useEffect(() => {
        setIsBrowser(true);
    }, []);

    const modal = show ? (
        <ModalBack>
            <ModalSup 
            onClick={()=> onClose()}/>
            <ModalContainer>
                <ModalHeader>
                    <ButtonBack
                    onClick={()=> onClose()}/>
                </ModalHeader>
                <ModalBody>
                    {children}
                </ModalBody>
            </ModalContainer>
        </ModalBack>
    ) : null;

    if (isBrowser) {
        return ReactDOM.createPortal(
            modal,
            document.getElementById("modal-root")
        );
    } else {
        return null;
    }
}