import React from "react";
import Logo from "../Assets/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Qualidade</span> {/* "Quality" em português */}
          <span>Ajuda</span> {/* "Help" em português */}
          <span>Compartilhar</span> {/* "Share" em português */}
          <span>Carreiras</span> {/* "Careers" em português */}
          {/* Comentado:
          <span>Depoimentos</span>  // "Testimonials" em português
          */}
          <span>Trabalho</span> {/* "Work" em português */}
        </div>
        <div className="footer-section-columns">
          <span>(38)3014-9494</span>
          <span>contato@uaitcheburger.com.br</span>
          <span>Termos & Condições</span> {/* "Terms & Conditions" em português */}
          <span>Política de Privacidade</span> {/* "Privacy Policy" em português */}
          {/* Comentado:
          <span>contact@food.com</span>  // "contact@food.com" em português
          */}
        </div>
        <div className="footer-section-columns">
          {/*<span>Termos & Condições</span> "Terms & Conditions" em português 
          
          <span>Política de Privacidade</span>  "Privacy Policy" em português */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
