import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../products/ProductCard"; // Verifique o caminho correto
import { Produto } from "../products/Produto";

export function Carrinho() {
  const [produtos, setProdutos] = useState([]);
  const [items, setItems] = useState([]);
  const [quantidades, setQuantidades] = useState({});
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await axios.get("http://localhost:8080/produtos");
        setProdutos(response.data);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    };

    fetchProdutos();
  }, []);

  const addToCart = (produto) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === produto.id);
      if (existingItem) {
        setQuantidades((prevQuantidades) => ({
          ...prevQuantidades,
          [produto.id]: prevQuantidades[produto.id] + 1,
        }));
      } else {
        setQuantidades((prevQuantidades) => ({
          ...prevQuantidades,
          [produto.id]: 1,
        }));
      }
      return existingItem ? prevItems : [...prevItems, produto];
    });
    setTotal((prevTotal) => prevTotal + produto.precoUnitario);
  };

  const aumentarQuantidade = (id) => {
    setQuantidades((prevQuantidades) => ({
      ...prevQuantidades,
      [id]: prevQuantidades[id] + 1,
    }));
    const produto = items.find((item) => item.id === id);
    setTotal((prevTotal) => prevTotal + produto.precoUnitario);
  };

  const diminuirQuantidade = (id) => {
    setQuantidades((prevQuantidades) => {
      if (prevQuantidades[id] > 1) {
        return { ...prevQuantidades, [id]: prevQuantidades[id] - 1 };
      } else {
        const { [id]: _, ...rest } = prevQuantidades;
        return rest;
      }
    });
    const produto = items.find((item) => item.id === id);
    setTotal((prevTotal) => prevTotal - produto.precoUnitario);
  };

  const removerItem = (id) => {
    const produto = items.find((item) => item.id === id);
    setQuantidades((prevQuantidades) => {
      const { [id]: _, ...rest } = prevQuantidades;
      return rest;
    });
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    setTotal(
      (prevTotal) => prevTotal - produto.precoUnitario * quantidades[id]
    );
  };

  const removerTodosItens = () => {
    setQuantidades({});
    setItems([]);
    setTotal(0);
  };

  return (
    <div className="carrinho-container">
      <h1>Carrinho de Compras</h1>
      <div className="produtos-container">
        <p>
          <strong>Produtos escolhidos</strong>
        </p>
        <div className="carrinho">
          {items.map((produto) => (
            <ProductCard
              key={produto.id}
              imagem={produto.imagem}
              nome={produto.nome}
              tipo1={produto.tipoPrimario}
              tipo2={produto.tipoSecundario}
              quantidadeInicial={quantidades[produto.id] || 0}
              valor={produto.precoUnitario}
              produto={produto}
              click={() => removerItem(produto.id)}
            />
          ))}
        </div>
      </div>
      <div className="resumo-carrinho">
        <h2>Resumo do Carrinho</h2>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <span>{item.nome}</span>
              <div>
                <button onClick={() => diminuirQuantidade(item.id)}>-</button>
                <span>{quantidades[item.id]}</span>
                <button onClick={() => aumentarQuantidade(item.id)}>+</button>
              </div>
              <span>
                R$ {(item.precoUnitario * quantidades[item.id]).toFixed(2)}
              </span>
              <button onClick={() => removerItem(item.id)}>Excluir</button>
            </li>
          ))}
        </ul>
        <h3>Total: R$ {total.toFixed(2)}</h3>
        <button onClick={removerTodosItens}>Excluir Carrinho</button>
        <button>Finalizar Compra</button>
      </div>
    </div>
  );
}
