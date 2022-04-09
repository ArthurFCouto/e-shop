import Image from "next/image";
import { useRouter } from 'next/router';
import ButtonOrange from "../src/components/ButtonOrange";
import styles from '../styles/Home.module.css';
import logo from "../src/iconsSvg/fruit.svg";

export default function Register() {
  const router = useRouter();

  function SubmitName(name) {
    if (localStorage)
      localStorage.setItem('name', name);
  }

  return (
    <div className={styles.container}>
      <div className={`${styles.containerBody} ${styles.JCenterACenter}`} style={{height: "60%"}}>
        <Image
          src={logo}
          alt="logo e-shop"
          onClick={() => router.push('/')}
        />
      </div>
      <div className={`${styles.containerBody} ${styles.p10} ${styles.column} ${styles.bgWhite}`} style={{height: "40%"}}>
        <span className={styles.title}>Primeiramente, qual seu nome?</span>
        <input className={`${styles.inputCustomer}`}
          placeholder="Visitante"
          onChange={(event) => SubmitName(event.target.value)}
        />
        <ButtonOrange
          actionClick={() => router.push('/dashboard')}>
          Iniciar pedidos
        </ButtonOrange>
      </div>
    </div>
  )
}