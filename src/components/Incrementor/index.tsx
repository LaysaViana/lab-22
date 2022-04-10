import { Plus as PlusIcon } from "@styled-icons/boxicons-regular/Plus";
import { Subtract as SubtractIcon } from "@styled-icons/remix-fill/Subtract";
import { useState } from "react";
import { useCartContext } from "../../contexts/CartContext";

import { Wrapper, IconWrapper, Quantity } from "./styles";

type IncrementorProps = {
  id: number;
  quantity: number;
  quantidadeEstoque: number;
};

const Incrementor = ({ id, quantity, quantidadeEstoque }: IncrementorProps) => {
  const context = useCartContext()
  const [quantidade, setQuantidade] = useState(quantity);

  const validarQuantidade = (tipoDaOperacao: string) => {
    let novaQuantidade = quantidade;
    if (tipoDaOperacao === "subtrair") {
      if (quantidade > 0) {
        novaQuantidade = quantidade - 1;
      }
    }
    else if (tipoDaOperacao === "adicionar") {
      if (quantidadeEstoque > quantidade) {
        novaQuantidade = quantidade + 1;
      }
    }
    setQuantidade(novaQuantidade);

    context.atualizarCarrinho(id, novaQuantidade);

    // const produtos = context.produtos;
    // const produto = produtos.filter(item => item.id === id)[0]
    // produto.quantity = novaQuantidade;
    // context.setProdutos(produtos)
  };

  return (
    <Wrapper>
      <IconWrapper onClick={() => validarQuantidade("subtrair")}>
        <SubtractIcon aria-label="Subtract item" />
      </IconWrapper>

      <Quantity>{quantidade}</Quantity>

      <IconWrapper onClick={() => validarQuantidade("adicionar")}>
        <PlusIcon aria-label="Add item" />
      </IconWrapper>
    </Wrapper>
  );
};

export default Incrementor;
