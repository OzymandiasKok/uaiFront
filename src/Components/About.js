import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div id="about" className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">Sobre</p>
        <h1 className="primary-heading">
          O Sanduíche Perfeito, Delicioso e Acessível
        </h1>
        <p className="primary-text">
          Quem não ama um sanduíche gostoso e barato? Aqui, preparamos o melhor para você, com ingredientes frescos e aquele toque especial que vai deixar você querendo mais!
        </p>
        <p className="primary-text">
          Nosso segredo? Combinação perfeita de sabor, qualidade e um preço que cabe no seu bolso. Venha experimentar e descubra o verdadeiro sabor de um sanduíche irresistível!
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Peça o Seu</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Veja o Processo
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;

