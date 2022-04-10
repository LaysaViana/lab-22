import { useState, useEffect } from "react";
import axios from "axios";
import Cart from "../components/Cart";
import { Container } from "../components/Container";
import Header from "../components/Header";
import Product, { ProductProps } from "../components/Product";
import { useCartContext } from "../contexts/CartContext";

const Home = () => {
  const context = useCartContext();
  const [isOpen, setIsOpen] = useState(false);
  // const [produtos, setProdutos] = useState<ProductProps[]>([]);

  const obterProdutos = async () => {
    const response = await axios.get<ProductProps[]>(" http://localhost:3001/products");
    // setProdutos(response.data);
    context.setProdutos(response.data);
  }

  useEffect(() => {
    obterProdutos()
  }, [])

  return (
    <>
      <Header setIsOpen={setIsOpen} />
      <Container>
        {
         context.produtos.map((produto) => (<Product {...produto} key={produto.id} />))
        }
        <Cart isOpen={isOpen} setIsOpen={setIsOpen} />
      </Container>
    </>
  );
};

export default Home;
