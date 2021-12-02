import Image from "next/image";
import Link from "next/link";
import { ButtonLarge } from "../src/components/ButtonLarge";
import {
  Container, ViewButtom
} from "../src/components/commom";
import styles from '../styles/Home.module.css';
import logo from "../src/iconsSvg/fruit2.svg";

export default function Home() {

  return (
    <Container>
      <div className={styles.containerTop}>
        <Image
          src={logo}
          alt="Carregando imagem..."
        />
      </div>
      <div className={styles.containerBottom}>
        <span className={styles.title}>Confira os melhores combo de salada de frutas!</span>
        <span className={styles.subTitle}>Oferecemos a melhor combinação de saladas de frutas frescas da cidade. Peça já seu combo!!!</span>
        <ViewButtom>
          <ButtonLarge
            type="Submit">
            <Link
              href="/register"
              passHref>
              Continuar
            </Link>
          </ButtonLarge>
        </ViewButtom>
      </div>
    </Container>
  )
}
