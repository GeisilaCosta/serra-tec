import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Carrossel.css";

import image1 from "../../assets/Carrosel/xiaomi 14 pro .png";
import image2 from "../../assets/Carrosel/S23 Samsung.png";
import image3 from "../../assets/Carrosel/iphone 15 pro .png";

const images = [image1, image2, image3]; 

export function Carrossel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextImage = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
  };

  const prevImage = () => {
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        nextImage();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [currentImageIndex, isHovered]);

  return (
    <div
      className="carrossel-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence initial={false} custom={currentImageIndex}>
        <motion.div
         
        >
          <img src={images[currentImageIndex]} alt={`Imagem ${currentImageIndex + 1}`} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
