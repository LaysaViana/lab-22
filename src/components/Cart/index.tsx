import { Dispatch, SetStateAction } from "react";
import { CloseOutline } from "@styled-icons/evaicons-outline";

import Button from "../Button";
import Typography from "../Typography";

import { Wrapper, Subtotal, Header } from "./styles";
import { useCartContext } from "../../contexts/CartContext";
import { Container } from "../Container";
import Product from "../Product";

export type MenuPaymentProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

/**
 * Adicionar itens ao carrinho, design ao seu critério mas deve conter:
 * - Nome do produto
 * - Imagem
 * - Preço
 * - Incrementador
 */

const MenuPayment = ({ isOpen, setIsOpen }: MenuPaymentProps) => {
  const context = useCartContext();
  //            <Text>{price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</Text>
  const subTotal = context.calcularTotal().toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })


  return (
    <Wrapper isOpen={isOpen}>
      <Header>
        <Typography level={5} size="large" fontWeight={600}>
          Produtos no carrinho
        </Typography>
        <CloseOutline onClick={() => setIsOpen(false)} />
      </Header>
      <Container>
        {
          context.itensDeVenda.map((item) => (<Product {...item.produto} key={item.produto.id} />))
        }
        {/* <Cart isOpen={isOpen} setIsOpen={setIsOpen} /> */}
      </Container>
      <Subtotal>
        <Typography level={5} size="large" fontWeight={600}>
          Total
        </Typography>
        <Typography>{subTotal}</Typography>
      </Subtotal>


      <Button fullWidth>Finalizar compra</Button>
    </Wrapper>
  )
};

export default MenuPayment;


