import React from "react";
import { Button, Container } from "./styles";
import styles from "../../../styles/Home.module.css";

interface ButtonProps {
  children: React.ReactChildren;
  actionClick?: Function;
  width?: string;
}
export default function ButtonOrange({
  children,
  actionClick = () => null,
  width = "90%",
}: ButtonProps):React.ReactElement {
  return (
    <Container>
      <Button className={`${styles.flex} ${styles.JCenterACenter} ${styles.p10}`} width={width} onClick={()=> actionClick()}>
        {children}
      </Button>
    </Container>
  );
}
