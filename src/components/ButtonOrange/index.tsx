import { ContainerButton } from "./styles";

interface OrangeProps {
  children: React.ReactChildren;
  actionClick?: Function;
  width?: string;
}

const ButtonOrange = ({
  children,
  actionClick = () => null,
  width = "90%",
}: OrangeProps) => {
  return (
    <ContainerButton width={width} onClick={() => actionClick()}>
      {children}
    </ContainerButton>
  );
};

export default ButtonOrange;
