import { Plus as PlusIcon } from "@styled-icons/boxicons-regular/Plus";
import { Subtract as SubtractIcon } from "@styled-icons/remix-fill/Subtract";
import { useState } from "react";

import { Wrapper, IconWrapper, Quantity } from "./styles";

type IncrementorProps = {
  id: number;
  quantity: number;
  quantidadeEstoque: number;
};

const Incrementor = ({ id, quantity, quantidadeEstoque }: IncrementorProps) => {
  const [quantidade, setQuantidade] = useState(1);

  const validarQuantidade = (tipoDaOperacao: string) => {

    if (tipoDaOperacao === "subtrair") {
      if (quantidade > 0) {
        setQuantidade(quantidade - 1);
      }
    }
    else if (tipoDaOperacao === "adicionar") {
      if (quantidadeEstoque >= quantidade) {
        setQuantidade(quantidade + 1);
      }
    }
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
