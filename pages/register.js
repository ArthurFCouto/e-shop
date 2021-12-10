import Image from "next/image";
import { useRouter } from 'next/router'
import Link from "next/link";
import { ButtonLarge } from "../src/components/ButtonLarge";
import { Container, ViewButtom } from "../src/components/commom";
import styles from '../styles/Home.module.css';
import logo from "../src/iconsSvg/fruit.svg";

export default function Register() {

  const router = useRouter();

  function SubmitName(props) {
    if (localStorage)
      localStorage.setItem('name', props);
  }

  return (
    <Container>
      <div className={styles.containerTop}>
        <Link
          href="/"
          passHref>
          <Image
            src={logo}
            alt="Carregando imagem..."
          />
        </Link>
      </div>
      <div className={styles.containerBottom}>
        <span className={styles.title}>Primeiramente, qual seu nome?</span>
        <input className={styles.inputData}
          placeholder="Chris"
          onChange={(evento) => (SubmitName(evento.target.value))}
        />
        <ViewButtom>
          <ButtonLarge
            type="Submit"
            actionClick={() => router.push('/dashboard')}>
            Iniciar pedidos
          </ButtonLarge>
        </ViewButtom>
      </div>
    </Container>
  )
}