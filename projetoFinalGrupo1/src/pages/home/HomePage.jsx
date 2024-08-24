import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import "./HomePage.css";
import { Link } from "react-router-dom";

import img1 from "../../assets/Carrosel/@Notebook.png";
import img2 from "../../assets/Carrosel/@I7.png";
import img3 from "../../assets/Carrosel/@Alexa.png";
import img4 from "../../assets/Carrosel/@iphone15.png";
import img5 from "../../assets/placaMae/placa-mae-duex-dx-h610zg-pro-chipset-h610-intel-lga-1700-matx-ddr4_195799.jpg";
import img6 from "../../assets/perifericos/controle-gamer-redragon-harrow-sem-fio-usb-24gz-pcps3-preto-g808_186822.webp";
import img7 from "../../assets/fonte/fonte-xpg-kyber-superframe-750w-80-plus-gold-com-conector-pcie-50-pfc-ativo_181749.jpg";
import img8 from "../../assets/perifericos/teclado-mecanico-gamer-ninja-leap-switch-blue-rainbow-abnt2-black_161087.jpg";
import img9 from "../../assets/perifericos/mouse-gamer-akko-naruto-smart-1-sasuke-wireless-1200-dpi-3-botoes_185446.jpg";
import img10 from "../../assets/perifericos/webcam-pcyes-raza-full-hd-1080p-usb-fhd-02_144730.jpg";

const Slideshow = ({ slideshowImages, currentImageIndex }) => (
  <AnimatePresence>
    <motion.img
      key={slideshowImages[currentImageIndex].id}
      src={slideshowImages[currentImageIndex].src}
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      transition={{ duration: 1.0 }}
      className="imagem-destaque"
      alt="Slideshow Image"
    />
  </AnimatePresence>
);

const melhoresOfertas = [
  {
    id: 5,
    src: img5,
    alt: "Placa Mãe Gigabyte H610M",
    title: "Placa Mãe Gigabyte H610M",
    price: "R$ 499,99",
    link: "/produto",
  },
  {
    id: 6,
    src: img6,
    alt: "Controle Gamer Redragon Harrow",
    title: "Controle Gamer Redragon Harrow",
    price: "R$ 699,00",
    link: "/produto",
  },
  {
    id: 7,
    src: img7,
    alt: "Fonte XPG Kyber Superframe 750W",
    title: "Fonte XPG Kyber Superframe 750W",
    price: "R$ 599,00",
    link: "/produto",
  },
  {
    id: 8,
    src: img8,
    alt: "Teclado Mecânico Gamer Ninja Leap",
    title: "Teclado Mecânico Gamer Ninja Leap",
    price: "R$ 399,00",
    link: "/produto",
  },
  {
    id: 9,
    src: img9,
    alt: "Mouse Gamer Akko Naruto Smart",
    title: "Mouse Gamer Akko Naruto Smart",
    price: "R$ 199,00",
    link: "/produto",
  },
  {
    id: 10,
    src: img10,
    alt: "Webcam PCYes Raza Full HD 1080p",
    title: "Webcam PCYes Raza Full HD 1080p",
    price: "R$ 299,00",
    link: "/produto",
  },
];

export function HomePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOfertas, setFilteredOfertas] = useState(melhoresOfertas);

  const slideshowImages = [
    { id: 1, src: img1 },
    { id: 2, src: img2 },
    { id: 3, src: img3 },
    { id: 4, src: img4 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === slideshowImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [slideshowImages.length]);

  useEffect(() => {
    const results = melhoresOfertas.filter((produto) =>
      produto.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredOfertas(results);
  }, [searchTerm]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="pagina-inicial">
      <div className="imagem-secao">
        <Slideshow
          slideshowImages={slideshowImages}
          currentImageIndex={currentImageIndex}
        />
      </div>

      <div className="componente-pesquisa">
        <input
          type="text"
          placeholder="Pesquisar por celulares e acessórios"
          className="input-pesquisa"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <Button variant="contained" className="botao-pesquisa">
          Pesquisar
        </Button>
      </div>

      <div className="categorias-populares">
        <h2 className="titulo">Categorias Populares</h2>
        <div className="grupo-chip">
          <Link to="/categoria/smartphones">
            <Button variant="outlined" className="item-chip">
              Smartphones
            </Button>
          </Link>
          <Link to="/categoria/acessorios">
            <Button variant="outlined" className="item-chip">
              Acessórios
            </Button>
          </Link>
          <Link to="/categoria/tablets">
            <Button variant="outlined" className="item-chip">
              Tablets
            </Button>
          </Link>
          <Link to="/categoria/computadores">
            <Button variant="outlined" className="item-chip">
              Computadores
            </Button>
          </Link>
          <Link to="/categoria/perifericos">
            <Button variant="outlined" className="item-chip">
              Periféricos
            </Button>
          </Link>
        </div>
      </div>

      <div className="melhores-ofertas">
        <div className="galeria-rolavel">
          {filteredOfertas.map((produto) => (
            <Link to={produto.link} key={produto.id}>
              <div className="item-galeria">
                <img
                  src={produto.src}
                  alt={produto.alt}
                  className="imagem-galeria"
                />
                <h3>{produto.title}</h3>
                <p>{produto.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
