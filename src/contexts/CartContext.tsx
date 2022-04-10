import React, { createContext, ReactNode, useState, Dispatch, SetStateAction, useContext } from "react";

// type ChildrenType<T = {}> = T & { children?: ReactNode };

type ProductType = {
  id: number;
  name: string;
  price: number;
  picture: string;
  quantity: number;
};
type ItemDeVenda = {
  produto: ProductType;
  quantidade: number;
}

export type PropsCartContext = {
  produtos: ProductType[];
  itensDeVenda: ItemDeVenda[];
  setProdutos: Dispatch<SetStateAction<ProductType[]>>;
  atualizarCarrinho: (id: number, quantidade: number) => void;
  calcularTotal: () => number


};

export const VALOR_DEFAULT = {
  produtos: [],
  itensDeVenda: [],
  setProdutos: () => { },
  atualizarCarrinho: (id: number, quantidade: number) => { },
  calcularTotal: () => 0

};

export const CartContext = createContext<PropsCartContext>(VALOR_DEFAULT);

export const useCartContext = () => {
  return useContext(CartContext);
}

export const CartContextProvider: React.FC = ({ children }) => {
  const [produtos, setProdutos] = useState<ProductType[]>(VALOR_DEFAULT.produtos);
  const [itensDeVenda, setItensDeVenda] = useState<ItemDeVenda[]>(VALOR_DEFAULT.itensDeVenda);

  const calcularTotal = () => {
    return itensDeVenda.reduce((acumulado, atual) => {
      return acumulado + (atual.produto.price * atual.quantidade)
    }, 0)
  };

  const atualizarCarrinho = (id: number, quantidade: number) => {
    const copia = [...itensDeVenda]
    const indiceExistente = copia.findIndex(item => item.produto.id === id);
    if (indiceExistente === -1) {
      const produto = produtos.filter(item => item.id === id)[0];
      const novoItem: ItemDeVenda = {
        produto: produto,
        quantidade: quantidade,
      };
      copia.push(novoItem);

    }
    else {
      const itemDeVenda = copia[indiceExistente];
      if (quantidade === 0) {
        copia.splice(indiceExistente, 1);

      }
      else {
        itemDeVenda.quantidade = quantidade;

      }
    }
    setItensDeVenda(copia);
  }

  return (
    <CartContext.Provider value={{ produtos, setProdutos, calcularTotal, itensDeVenda, atualizarCarrinho }}>
      {children}
    </CartContext.Provider>
  )
}
