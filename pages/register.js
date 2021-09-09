import Image from "next/image";
import Link from "next/link";
import { ButtonLarge, Container, InputText, ViewTop,
  ViewBottom, ViewButtom} from "../src/components/commom";
import logo from "../src/iconsSvg/fruit.svg";

export default function Register() {
 
  function SubmitName(props) {
    if(localStorage)
      localStorage.setItem('name', props);
  }

  return (
    <Container>
      <ViewTop>
        <Image
        src={logo}
        alt="Carregando imagem..."
        />
      </ViewTop>
      <ViewBottom>
        <h3>What is your firstname?</h3>
        <InputText
        placeholder="Chris"
        onChange={(evento) => (SubmitName(evento.target.value))}
        />
      </ViewBottom>
      <ViewButtom>
        <ButtonLarge
        type="Submit">
          <Link
          href="dashboard"
          passHref>
            Start Ordering
          </Link>
        </ButtonLarge>
      </ViewButtom>
    </Container>
  )
}