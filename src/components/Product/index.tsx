import { useCartContext } from "../../contexts/CartContext";
import Incrementor from "../Incrementor";
import { Wrapper, Info, Column, Text, WrapperIncrementor } from "./styles";

export type ProductProps = {
  id: number;
  name: string;
  price: number;
  picture: string;
  quantity: number;
};

const Product = ({ id, name, price, picture, quantity }: ProductProps) => {
  const context = useCartContext();
  let quantidadeAtual = 0

  const indiceExistente = context.itensDeVenda.findIndex(item => item.produto.id === id);
  if (indiceExistente > -1){
    quantidadeAtual = context.itensDeVenda[indiceExistente].quantidade;
  }
    return (
      <Wrapper>
        <img src={picture} alt={`Imagem de referência ${name}`} />

        <Info>
          <Column>
            <Text>{name}</Text>
            <Text>{price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</Text>
          </Column>

          <WrapperIncrementor>
            <Incrementor id={id} quantidadeItensCarrinho={quantidadeAtual} quantidadeEstoque={quantity} />
          </WrapperIncrementor>
        </Info>
      </Wrapper>
    )
};

export default Product;
