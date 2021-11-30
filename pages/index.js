import Image from "next/image";
import Link from "next/link";
import {
  ButtonLarge, Container, ViewTop,
  ViewBottom, ViewButtom
} from "../src/components/commom";
import logo from "../src/iconsSvg/fruit2.svg";

export default function Home() {

  return (
    <Container>
      <ViewTop>
        <Image
          src={logo}
          alt="Carregando imagem..."
        />
      </ViewTop>
      <ViewBottom>
        <h3>Get The Freshest Fruit Salad Combo</h3>
        <h2>We deliver the best and freshest fruit salad in town. Order for a combo today!!!</h2>
      </ViewBottom>
      <ViewButtom>
        <ButtonLarge
          type="Submit">
          <Link
            href="/register"
            passHref>
            Let’s Continue
          </Link>
        </ButtonLarge>
      </ViewButtom>
    </Container>
  )
}
