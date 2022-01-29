import Image from "next/image";
import { useRouter } from 'next/router';
import ButtonOrange from "../src/components/ButtonOrange";
import { Container, InputPerson, ViewButtom } from "../src/components/commom";
import styles from '../styles/Home.module.css';
import logo from "../src/iconsSvg/fruit.svg";

export default function Register() {
  const router = useRouter();

  function SubmitName(name) {
    if (localStorage)
      localStorage.setItem('name', name);
  }

  return (
    <Container>
      <div className={styles.containerTop}>
        <Image
          src={logo}
          alt="Carregando imagem..."
          onClick={() => router.push('/')}
        />
      </div>
      <div className={styles.containerBottom}>
        <span className={styles.title}>Primeiramente, qual seu nome?</span>
        <InputPerson
          placeholder="Matheus"
          onChange={(evento) => SubmitName(evento.target.value)}
        />
        <ViewButtom>
          <ButtonOrange
            actionClick={() => router.push('/dashboard')}>
            Iniciar pedidos
          </ButtonOrange>
        </ViewButtom>
      </div>
    </Container>
  )
}