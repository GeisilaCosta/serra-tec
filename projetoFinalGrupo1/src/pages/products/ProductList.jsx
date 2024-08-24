import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const [produto, setProduto] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduto = async () => {
      try {
        const response = await axios.get("http://localhost:8080/produtos");
        setProduto(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduto();
  }, []);

  const handleAddToCart = (produto) => {
    console.log(`Produto ${produto.nome} adicionado ao carrinho!`);
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div style={styles.container}>
      {produto.map((produto) => (
        <ProductCard
          key={produto.id}
          produto={produto}
          addToCart={() => handleAddToCart(produto)}
        />
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
};

export default ProductList;
