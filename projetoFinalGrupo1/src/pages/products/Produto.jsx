import { NavBar } from "../../components/layout/NavBar";
import ProductCard from "./ProductCard";
import "./Produto.css";

export function Produto() {
  return (
    <>
      <NavBar />
      <h1>Produtos</h1>
      <ProductCard />
      <footer />
    </>
  );
}
