import Image from "next/image";
import { useEffect, useState } from "react";
import add from "../../iconsSvg/add.svg";
import back from "../../iconsSvg/back.svg";
import sub from "../../iconsSvg/sub.svg";
import { Container } from "./styles";
import styles from "../../../styles/Home.module.css";

interface IconProps {
  icon: "add" | "back" | "sub";
  actionClick?: Function;
}

export default function ButtonIcon({
  icon,
  actionClick = () => null,
}: IconProps):React.ReactElement {
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

  return (
    <Container
      className={`${styles.flex} ${styles.JCenterACenter}`}
      onClick={() => actionClick()}
    >
      <Image src={img} height={30} width={30} alt="Button" />
    </Container>
  );
}
