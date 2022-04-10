import React, { createContext, ReactNode, useState, Dispatch, SetStateAction } from "react";

type ChildrenType<T = {}> = T & { children?: ReactNode };

type ProductType = {
  id: number;
  name: string;
  price: number;
  picture: string;
  quantity: number;
};

type PropsCartContext = {
  state: ProductType,
  setState: Dispatch<SetStateAction<ProductType>>;
};

const VALOR_DEFAULT = {
  state: {
    id: 0,
    name: '',
    price: 0,
    picture: '',
    quantity: 0,
  },
  setState: () => { },
}

export const CartContext = createContext<PropsCartContext>(VALOR_DEFAULT);

export const useCartContext = () => {
  const [state, setState] = useState(VALOR_DEFAULT.state);
  return [state, setState];
}



// const CartContextProvider: React.FC = ({ children }: ChildrenType) => {
//   const [state, setState] = useState(VALOR_DEFAULT.state);
//   return (
//     <CartContext value= {{ state, setState }
// }> { children } < /CartContext>
//   )
// }

// type CartContextProps = {
//   // produto: ProductProps;
//   // setProduto: (newState: any) => void;
//   produtoId: number;
//   setProdutoId: (newState: any) => void;
// }


// const CartContext = createContext<CartContextProps>({
//   produtoId: 0,
//   setProdutoId: () => { }
// })


// const CartProvider = ({ children }: ChildrenType) => {
//   const [produtoId, setProdutoId] = useState(0);

//   return (
//     <CartContext.Provider>
//   { children }
//     <CartContext.Provider />
//   )
// }


// type CartContextProps = {
//   children: ReactNode
// }

// type CartContextType = {
//   id: number,
//   setQuantidade: (newState: number) => void;
// }

// // const valorInicial = {
// //   id: number,
// //   setQuantidade: () => { }
// // };

// export const CartContext = createContext<CartContextType[]>([]);


// export const CartContextProvider = ({ children }: CartContextProps) => {

//   const [produto, setProduto] = useState<CartContextType[]>([]);

//   return <CartContext.Provider value={ { produto, setProduto } }> { children } < /CartContext.Provider>
// };
// function CartProvider({ children }: CartContextProps) {
//   return (
//     <CartContext.Provider >
//     { children }
//     < /CartContext.Provider>
//   )
// }

//export default CartProvider;