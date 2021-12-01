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
        <h3>Confira os melhores combo de salada de frutas!</h3>
        <h2>Oferecemos a melhor combinação de saladas de frutas frescas da cidade. Peça já seu combo!!!</h2>
      </ViewBottom>
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
    </Container>
  )
}
