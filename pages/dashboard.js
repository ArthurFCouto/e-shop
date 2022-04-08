import { useEffect, useState } from "react";
import { Container, LineOrange, MainGrid, MainLinear } from "../src/components/commom";
import Card from "../src/components/Card";
import Header from "../src/components/Header";
import Modal from "../src/components/Modal";
import NavSugestion from "../src/components/NavSugestion";
import NavMenuBottom from "../src/components/NavMenuBottom";
import ModalDetails from "../src/components/ModalDetails";
import Cart from "../src/components/Cart";
import Config from "../src/config";
import { productContext } from "../src/context/ProductContext";
import styles from '../styles/Home.module.css';

export default function Dashboard() {
  const { productList, buttonSugestions } = Config;
  const { add } = productContext();
  const [name, setName] = useState("");
  const [dataCard, setDataCard] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [itemModal, setItemModal] = useState({});
  const [showCart, setShowCart] = useState(false);

  function Inicialize() {
    if (localStorage)
      setName(localStorage.getItem('name') === null ? 'Visitante' : localStorage.getItem('name'));
    ClearArray();
  }

  function Search(data) {
    if ((data != undefined) && (data.trim().length > 0)) {
      const newList = productList.filter((item) => (
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
  }

  function SetDataCardArray(data) {
    data = data === undefined ? productList : data;
    return (
      data.map((item) => (
        <div key={item.id}>
          <Card
            item={item}
            image={item.image}
            title={item.title}
            price={item.price}
            onShow={(obj) => ModalIsShow(obj)}
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
    add(obj);
  }

  useEffect(()=> {
    Inicialize();
  }, []);

  return (
    <Container>
      <Header
        name={name}
        search={(text) => Search(text)}
        clear={() => ClearArray()}
        showCart={() => setShowCart(true)}
      />
      <NavSugestion
        sugestions={buttonSugestions}
        search={(text) => Search(text)}
      />
      <main className={styles.viewMain}>
        <section>
          <span className={styles.titleMain}>Combos recomendados</span>
          <LineOrange width="20%" />
          <div className={styles.gridColumn}>
            {
              dataCard.length === 0
              ? <span className={styles.titleMain}>Sem combos para exibir.</span>
              : dataCard
            }
          </div>
        </section>
        <NavMenuBottom />
        <section>
          <div className={styles.flexRow}>
              {
                dataCard.length === 0
                ? <span className={styles.titleMain}>Sem combos para exibir.</span>
                : dataCard
              }
          </div>
        </section>
      </main>
      <Modal
        onClose={() => setShowModal(false)}
        show={showModal}>
        <ModalDetails
          item={itemModal}
          onClose={() => setShowModal(false)}
        />
      </Modal>
      <Cart
        onClose={() => setShowCart(false)}
        show={showCart}
      />
    </Container>
  )
}