import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="contact-page-wrapper">
      <h1 className="primary-heading">Tem Alguma Pergunta?</h1>
      <h1 className="primary-heading">Deixe-nos Ajudar</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="seuemail@gmail.com" />
        <button className="secondary-button">Enviar</button>
      </div>
    </div>
  );
};

export default Contact;
