import Image from "next/image";
import { useRouter } from 'next/router'
import ButtonOrange from "../src/components/ButtonOrange";
import { Container } from "../src/components/commom";
import styles from '../styles/Home.module.css';
import logo from "../src/iconsSvg/fruit2.svg";

export default function Home() {
  const router = useRouter();

  function action() {
    return router.push('/register');
  }

  return (
    <Container>
      <div className={styles.containerTop}>
        <Image
          src={logo}
          alt="Logo e-shop"
        />
      </div>
      <div className={styles.containerBottom}>
        <span className={styles.title}>Bem vindo e-shop Saladas!</span>
        <span className={styles.subTitle}>Confira aqui as melhores saladas de frutas da sua região!!!</span>
        <ButtonOrange
          actionClick={() => action()}>
          Continuar
        </ButtonOrange>
      </div>
    </Container>
  )
}