import { createContext, useContext, useState } from "react";

interface Context {
  list: Array<any>;
  add: (item) => void;
  remove: (list) => void;
}

interface Props {
  children: React.ReactChildren;
}

const ProductContext = createContext<Partial<Context>>({});

export function productContext() {
  return useContext(ProductContext);
}

export function ProductProvider({ children }: Props) {
  const [list, setList] = useState([]);
  const add = (item) => {
    const contains = list.find((product) => product.id === item.id);
    if (contains)
      setList(
        list.map((product) => {
          if (product.id === item.id)
            product.count = product.count + item.count;
          return product;
        })
      );
    else setList([...list, item]);
  };

  const remove = (id) => {
    setList(list.filter((product) => product.id != id));
  };

  const value = {
    list,
    add,
    remove,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
}
