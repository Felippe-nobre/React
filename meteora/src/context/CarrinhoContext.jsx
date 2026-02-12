/*
Context Api: serve para compartilhar estados e funções entre diversos componentes sem a necessidade de passar props manualmente em cada nível da árvore de componentes.
*/
import { createContext, useEffect, useMemo, useReducer, useState } from "react";
import { carrinhoReducer } from "../reducers/carrinhoReducer";

export const CarrinhoContext = createContext();
CarrinhoContext.displayName =
  "Carrinho"; /* O displayName é uma propriedade que pode ser definida para um contexto criado com createContext. Ele é usado principalmente para fins de depuração e desenvolvimento, permitindo que os desenvolvedores identifiquem facilmente o contexto no React DevTools ou em mensagens de erro. */

const estadoInicial = [];

export const CarrinhoProvider = ({ children }) => {
  const [carrinho, dispatch] = useReducer(
    carrinhoReducer,
    estadoInicial,
  ); /* O useReducer é um hook do React que é usado para gerenciar estados complexos em componentes funcionais. Ele é uma alternativa ao useState e é especialmente útil quando o estado tem múltiplas sub-valores ou quando a lógica de atualização do estado é complexa. O useReducer recebe dois argumentos: uma função redutora (reducer) e um estado inicial. A função redutora é responsável por determinar como o estado deve ser atualizado com base em uma ação específica. O useReducer retorna um array com dois elementos: o estado atual e uma função dispatch que pode ser usada para enviar ações para o redutor. 
  O dispatch é uma função que é usada para enviar ações para o redutor. Ele é a maneira de atualizar o estado gerenciado pelo useReducer. Quando você chama dispatch com uma ação, o React irá executar a função redutora (reducer) associada ao useReducer, passando o estado atual e a ação como argumentos. O redutor então processa a ação e retorna um novo estado atualizado com base na lógica definida dentro do redutor. O dispatch é essencial para a comunicação entre os componentes e o gerenciamento do estado quando se utiliza o useReducer. 
  */
  const [quantidade, setQuantidade] = useState(0);
  const [valorTotal, setValorTotal] = useState(0);

  const { totalTemp, quantidadeTemp } = useMemo(
    () => {
      return carrinho.reduce(
        (acumulador, produto) => ({
          quantidadeTemp: acumulador.quantidadeTemp + produto.quantidade,
          totalTemp: acumulador.totalTemp + produto.preco * produto.quantidade,
        }),
        {
          quantidadeTemp: 0,
          totalTemp: 0,
        },
      );
    },
    [
      carrinho,
    ] /*O useMemo é usado para memorizar o resultado do cálculo do totalTemp e quantidadeTemp, evitando que esses cálculos sejam refeitos desnecessariamente a cada renderização. O array de dependências [carrinho] garante que o cálculo seja refeito apenas quando o carrinho for atualizado. */,
  );

  useEffect(
    () => {
      setQuantidade(quantidadeTemp);
      setValorTotal(totalTemp);
    },
    [
      carrinho,
    ] /*Nesse useEffect, o array de dependências [carrinho] garante que o efeito seja executado sempre que o carrinho for atualizado. Fazemos isso para atualizar os valores de quantidade e valor total sempre que o carrinho é modificado. */,
  );

  return (
    <CarrinhoContext.Provider
      value={{
        carrinho,
        dispatch,
        quantidade,
        valorTotal,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
};
