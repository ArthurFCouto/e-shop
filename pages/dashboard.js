import { useEffect, useState } from "react";
import { Container, LineOrange, MainGrid, MainLinear,
   SectionCards, TitleMain, ViewMain } from "../src/components/commom";
import Card from "../src/components/Card";
import Header from "../src/components/Header";
import Modal from "../src/components/Modal";
import NavSugestion from "../src/components/NavSugestion";
import NavMenuBottom from "../src/components/NavMenuBottom";
import ModalDetails from "../src/components/ModalDetails";
import ModalCart from "../src/components/ModalCart";

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
    setName("Visitor");
    if (localStorage)
      setName(localStorage.getItem('name'));
    ClearArray();
  }

  function Search(data) {
    fetch(`/api/dblist`, {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
        'Accept' : 'application/json'
      },
      body: JSON.stringify({data})
    })
    .then((res) => res.json())
    .then((response)=> (setDataCard(SetDataCardArray(response.data))))
  }

  function ClearArray() {
    fetch(`/api/dblist`)
    .then((res)=> res.json())
    .then((response)=> {
      setDataCard(SetDataCardArray(response.data));
      setLinksExample(response.sugestions);
    })
  }

  function SetDataCardArray(data) {
    return(
    data.map((item)=> (
      <div key={item.id}>
        <Card
          item={item}
          onShow={(obj)=> ModalIsShow(obj)}
          addCart={(obj)=> CreateItemCart(obj)}
        />
      </div>
    ))
  )}

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
      search={(text)=> Search(text)}
      clear={()=> ClearArray()}
      showCart={()=> setShowCart(true)}
      />
      <NavSugestion
      data={linksExample}
      search={(text)=> Search(text)}
      />
      <ViewMain>
        <SectionCards>
          <TitleMain>Recommended Combo</TitleMain>
          <LineOrange
          width="20%"
          />
          <MainGrid>
            { dataCard }
            { dataCard.length == 0 && (
              <TitleMain>No data to see.</TitleMain>
            )}
          </MainGrid>
        </SectionCards>
        <NavMenuBottom />
        <SectionCards>
          <MainLinear>
          { dataCard }
          { dataCard.length == 0 && (
              <TitleMain>No data to see.</TitleMain>
            )}
          </MainLinear>
        </SectionCards>
      </ViewMain>
      
      <Modal
      onClose={()=> setShowModal(false)}
      show={showModal}>
        <ModalDetails
        item={itemModal}
        addCart={(obj)=> CreateItemCart(obj)}
        onClose={()=> setShowModal(false)}
        />
      </Modal>

      <ModalCart
      onClose={()=> setShowCart(false)}
      show={showCart}
      item={itemCart}
      removeItemCart={(obj)=> RemoveItemCart(obj)}
      />

    </Container>
  )
}