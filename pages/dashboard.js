import { useEffect, useMemo, useState } from "react";
import Card from "../src/components/Card";
import Cart from "../src/components/Cart";
import Config from "../src/config";
import Header from "../src/components/Header";
import MenuBottom from "../src/components/MenuBottom";
import Modal from "../src/components/Modal";
import Sugestions from "../src/components/Sugestions";
import styles from '../styles/Home.module.css';

export default function Dashboard() {
  const { productList, buttonSugestions } = Config;
  const [name, setName] = useState("");
  const [dataCard, setDataCard] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const displayModal = useMemo(()=>showModal, [showModal]);
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
    const list = data === undefined ? productList : data;
    return (
      list.map((item) => (
        <div key={item.id}>
          <Card
            item={item}
            image={item.image}
            title={item.title}
            price={item.price}
            openModal={() => OpenModal(item)}
          />
        </div>
      ))
    )
  }

  function OpenModal(item) {
    setItemModal(item);
    setShowModal(true);
  }

  useEffect(()=> {
    Inicialize();
  }, []);

  return (
    <div className={styles.container}>
      <Header
        name={name}
        search={(text) => Search(text)}
        clear={() => ClearArray()}
        showCart={() => setShowCart(true)}
      />
      <Sugestions
        sugestions={buttonSugestions}
        search={(text) => Search(text)}
      />
      <main className={`${styles.flex} ${styles.bgWhite} ${styles.column}`} style={{height: "100%"}}>
        <section>
          <h3 className={styles.titleMain}>Combos recomendados</h3>
          <div className={styles.grid}>
            {
              dataCard.length === 0
              ? <h2 className={styles.titleMain}>Sem combos para exibir.</h2>
              : dataCard
            }
          </div>
        </section>
        <MenuBottom />
        <section>
          <div className={`${styles.inlineFlex} ${styles.p5}`}>
              {
                dataCard.length === 0
                ? <h2 className={styles.titleMain}>Sem combos para exibir.</h2>
                : dataCard
              }
          </div>
        </section>
      </main>
      <Modal
        onClose={() => setShowModal(false)}
        show={displayModal}
        item={itemModal} />
      <Cart
        onClose={() => setShowCart(false)}
        show={showCart}
      />
    </div>
  )
}