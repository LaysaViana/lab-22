import { useState, useEffect } from "react";
import axios from "axios";
import Cart from "../components/Cart";
import { Container } from "../components/Container";
import Header from "../components/Header";
import Product, { ProductProps } from "../components/Product";
import { ProductionDimensions } from "@styled-icons/fluentui-system-filled/Production";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [produtos, setProdutos] = useState<ProductProps[]>([]);

  const obterProdutos = async () => {
    const response = await axios.get(" http://localhost:3001/products");
    setProdutos(response.data);
  }

  useEffect(() => {
    obterProdutos()
  }, [])

  return (
    <>
      <Header setIsOpen={setIsOpen} />
      <Container>
        {
          produtos.map((produto) => (<Product {...produto} />))
        }
        <Cart isOpen={isOpen} setIsOpen={setIsOpen} />
      </Container>
    </>
  );
};

export default Home;
