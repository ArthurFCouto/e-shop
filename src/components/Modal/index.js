import React, { useEffect, useRef, useState } from "react";
import ButtonIcon from "../ButtonIcon";
import { ModalContainer, Body } from "./styles";

export default function Modal(props) {
    const { show, onClose, children } = props;
    const id = useRef(null);
    const [modal, setModal] = useState(<></>)

    function Inicialize() {
        if (show) {
            setModal(
                <ModalContainer>
                    <div className="top" onClick={() => Close()} />
                    <Body ref={id}>
                        <div className="header">
                            <div className="buttonExit" onClick={() => Close()} >
                                <ButtonIcon icon="back" />
                                Fechar
                            </div>
                        </div>
                        <div className="children">
                            {children}
                        </div>
                    </Body>
                </ModalContainer>
            );
        } else setModal(<></>);
    }

    function Close() {
        id.current.setAttribute("style", "top: 100%;");
        setTimeout(() => onClose(), 200);
    }

    useEffect(() => {
        Inicialize();
    }, [show]);

    return modal;
}