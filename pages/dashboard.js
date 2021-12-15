import { useEffect, useState } from "react";
import {
  Container, LineOrange, MainGrid, MainLinear,
  SectionCards, TitleMain, ViewMain
} from "../src/components/commom";
import Card from "../src/components/Card";
import Header from "../src/components/Header";
import Modal from "../src/components/Modal";
import NavSugestion from "../src/components/NavSugestion";
import NavMenuBottom from "../src/components/NavMenuBottom";
import ModalDetails from "../src/components/ModalDetails";
import Cart from "../src/components/Cart";
import { productList, buttonSugestions } from "./api/dblist";

export default function Dashboard() {

  const [name, setName] = useState("");
  const [dataCard, setDataCard] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [itemModal, setItemModal] = useState({});
  const [showCart, setShowCart] = useState(false);
  const [itemCart, setItemCart] = useState([]);
  const [linksExample, setLinksExample] = useState([]);

  useEffect(function () {
    Inicialize();
  }, [itemCart]);

  function Inicialize() {
    if (localStorage)
      setName(localStorage.getItem('name') === null ? "Visitante" : localStorage.getItem('name'));
    ClearArray();
  }

  function Search(data) {
    if((data != undefined) && (data.trim().length>0)) {
      const newList = productList.filter((item)=> (
        item.title.toUpperCase().includes(data.toUpperCase())
      ))
      setDataCard(
        SetDataCardArray(newList)
      );
    }
  }

  function ClearArray() {
    setDataCard(
      SetDataCardArray()
    );
    setLinksExample(buttonSugestions);
  }

  function SetDataCardArray(data) {
    data = data == undefined ? productList : data;
    return (
      data.map((item) => (
        <div key={item.id}>
          <Card
            item={item}
            image={item.image}
            title={item.title}
            price={item.price}
            onShow={(obj) => ModalIsShow(obj)}
            addCart={(obj) => CreateItemCart(obj)}
          />
        </div>
      ))
    )
  }

  function ModalIsShow(obj) {
    setItemModal(obj);
    setShowModal(true);
  }

  function CreateItemCart(obj) {
    setItemCart([...itemCart, obj]);
  }

  function RemoveItemCart(obj) {
    setItemCart(obj);
  }

  return (
    <Container>
      <Header
        name={name}
        search={(text) => Search(text)}
        clear={() => ClearArray()}
        showCart={() => setShowCart(true)}
      />
      <NavSugestion
        data={linksExample}
        search={(text) => Search(text)}
      />
      <ViewMain>
        <SectionCards>
          <TitleMain>Combos recomendados</TitleMain>
          <LineOrange
            width="20%"
          />
          <MainGrid>
            {dataCard}
            {dataCard.length == 0 && (
              <TitleMain>Sem combos para exibir.</TitleMain>
            )}
          </MainGrid>
        </SectionCards>
        <NavMenuBottom />
        <SectionCards>
          <MainLinear>
            {dataCard}
            {dataCard.length == 0 && (
              <TitleMain>Sem combos para exibir.</TitleMain>
            )}
          </MainLinear>
        </SectionCards>
      </ViewMain>
      <Modal
        onClose={() => setShowModal(false)}
        show={showModal}>
        <ModalDetails
          item={itemModal}
          addCart={(obj) => CreateItemCart(obj)}
          onClose={() => setShowModal(false)}
        />
      </Modal>
      <Cart
        onClose={() => setShowCart(false)}
        show={showCart}
        item={itemCart}
        removeItemCart={(obj) => RemoveItemCart(obj)}
      />
    </Container>
  )
}