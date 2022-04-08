import { createContext, useContext, useState } from "react";

/*{
    id: 4,
    image: p5,
    title: "Salada de Frutas Tropical",
    price: 13.99,
    details: "Uma salada que combina com você a qualquer hora. A salada de frutas tropicais é perfeita.",
    tags: [
        "Kiwi",
        "Abacaxi",
        "Laranja",
        "Manga",
        "Morango",
        "Menta refrescante"
    ]
}*/

interface Context {
    itemCart: Array<any>;
    add: (item) => void;
    remove: (list) => void;
};

interface Props {
    children: React.ReactChildren;
};

const ProductContext = createContext<Partial<Context>>({});

export function productContext() {
    return useContext(ProductContext);
}

export function ProductProvider({ children }: Props) {
    const [itemCart, setItemCart] = useState([]);
    const add = (item) => {
        setItemCart([...itemCart, item]);
    };

    const remove = (item) => {
        const list = itemCart.filter((product)=> product.id != item.id);
        setItemCart(list);
    };

    const value = {
        itemCart,
        add,
        remove,
    };

    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    );
}