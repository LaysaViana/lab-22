import { Plus as PlusIcon } from "@styled-icons/boxicons-regular/Plus";
import { Subtract as SubtractIcon } from "@styled-icons/remix-fill/Subtract";
import { useCartContext } from "../../contexts/CartContext";

import { Wrapper, IconWrapper, Quantity } from "./styles";

type IncrementorProps = {
  id: number;
  quantidadeItensCarrinho: number;
  quantidadeEstoque: number;
};

const Incrementor = ({ id, quantidadeItensCarrinho, quantidadeEstoque }: IncrementorProps) => {
  const context = useCartContext()

  const validarQuantidade = (tipoDaOperacao: string) => {
    let novaQuantidade = quantidadeItensCarrinho;
    if (tipoDaOperacao === "subtrair") {
      if (quantidadeItensCarrinho > 0) {
        novaQuantidade = quantidadeItensCarrinho - 1;
      }
    }
    else if (tipoDaOperacao === "adicionar") {
      if (quantidadeEstoque > quantidadeItensCarrinho) {
        novaQuantidade = quantidadeItensCarrinho + 1;
      }
    }
    context.atualizarCarrinho(id, novaQuantidade);

  };

  return (
    <Wrapper>
      <IconWrapper onClick={() => validarQuantidade("subtrair")}>
        <SubtractIcon aria-label="Subtract item" />
      </IconWrapper>

      <Quantity>{quantidadeItensCarrinho}</Quantity>

      <IconWrapper onClick={() => validarQuantidade("adicionar")}>
        <PlusIcon aria-label="Add item" />
      </IconWrapper>
    </Wrapper>
  );
};

export default Incrementor;
