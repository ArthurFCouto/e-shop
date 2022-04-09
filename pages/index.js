import Image from "next/image";
import { useRouter } from 'next/router'
import ButtonOrange from "../src/components/ButtonOrange";
import styles from '../styles/Home.module.css';
import logo from "../src/iconsSvg/fruit2.svg";

export default function Home() {
  const router = useRouter();

  function action() {
    return router.push('/register');
  }

  return (
    <div className={styles.container}>
      <div className={`${styles.containerBody} ${styles.JCenterACenter}`} style={{height: "60%"}}>
        <Image
          src={logo}
          alt="Logo e-shop"
        />
      </div>
      <div className={`${styles.containerBody} ${styles.p10} ${styles.column} ${styles.bgWhite}`} style={{height: "40%"}}>
        <h3 className={styles.title}>Bem vindo e-shop Saladas!</h3>
        <h2 className={styles.subTitle}>Confira aqui as melhores saladas de frutas da sua região!!!</h2>
        <ButtonOrange
          actionClick={() => action()}>
          Continuar
        </ButtonOrange>
      </div>
    </div>
  )
}