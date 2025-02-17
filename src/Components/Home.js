import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div id="home" className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            O Seu Sanduíche Favorito, Entregue Quentinho e Delicioso
          </h1>
          <p className="primary-text">
            Nossos chefs fazem todo o trabalho duro: cortam, temperam e preparam tudo para que você possa saborear um lanche fresco e delicioso.
          </p>
          <button className="secondary-button">
            Peça Já <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
