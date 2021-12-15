import { ContainerButton } from "./styles";

interface ButtonProps {
  children: React.ReactChildren;
  actionClick?: Function;
  width?: string;
}

const ButtonOrange = ({
    children,
    actionClick = () => null,
    width = "90%"
}: ButtonProps) => {
  function Action() {
    actionClick();
  }

  return (
    <ContainerButton
    width={width}
        onClick={() => Action()}>{children}
    </ContainerButton>
  )
};

export default ButtonOrange;
