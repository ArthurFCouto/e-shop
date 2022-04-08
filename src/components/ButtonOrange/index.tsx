import { ContainerButton, ViewButtom } from "./styles";

interface OrangeProps {
  children: React.ReactChildren;
  actionClick?: Function;
  width?: string;
}
export default function ButtonOrange({
  children,
  actionClick = () => null,
  width = "90%",
}: OrangeProps) {
  return (
    <ViewButtom>
      <ContainerButton width={width} onClick={()=> actionClick()}>
        {children}
      </ContainerButton>
    </ViewButtom>
  );
}
