import React, { useEffect, useRef, useState } from "react";
import { DivExit } from "../commom";
import ButtonIcon from "../ButtonIcon";
import { ModalContainer, Body } from "./styles";

export default function Modal(props) {
    const { show, onClose, children } = props;
    const id = useRef(null);
    const [modal, setModal] = useState(<div />)

    function Inicialize() {
        if (show) {
            setModal(
                <ModalContainer>
                    <section className="top"
                        onClick={() => Close()} />
                    <Body ref={id}>
                        <div className="header">
                            <DivExit onClick={() => Close()} >
                                <ButtonIcon icon="back" />
                                Fechar
                            </DivExit>
                        </div>
                        <div className="children">
                            {children}
                        </div>
                    </Body>
                </ModalContainer>
            );
        } else setModal(<div />);
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