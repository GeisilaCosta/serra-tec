import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../../assets/img/logo.jpeg";
import "primeicons/primeicons.css";
import { Google } from "../CadastroUsuarioGoogle";
import "./NavBar.css";

export function NavBar() {
  return (
    <nav className="nav">
      <div className="container">
        <div className="logo">
          <img src={logoImg} alt="Logo" />
        </div>

        <div className="main_list" id="mainListDiv">
          <ul>
            <li>
              <Link to="/">
                <i className="pi pi-home"></i> Home
              </Link>
            </li>
            <li>
              <Link to="/produto">
                <i className="pi pi-tag"></i> Produtos
              </Link>
            </li>
            <li>
              <Link to="/sobre">
                <i className="pi pi-info-circle"></i> Sobre
              </Link>
            </li>
            <li>
              <Link to="/login">
                <i className="pi pi-user"></i> Login
              </Link>
            </li>
            <li>
              <Link to="/cadastro">
                <i className="pi pi-user-plus"></i> Cadastro
              </Link>
            </li>
            <li>
              <Link to="/carrinho">
                <i className="pi pi-shopping-cart"></i> Carrinho
              </Link>
            </li>
            <li>
              <Google />
            </li>
          </ul>
        </div>

        <div className="media_button">
          <button className="main_media_button" id="mediaButton">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
}