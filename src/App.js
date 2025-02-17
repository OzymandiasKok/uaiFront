import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";  // Importando o Router

import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Menu from "./Components/Menu"; // Componente do Cardápio

function App() {
  return (
    <Router>  {/* Envolvendo a aplicação com o Router */}
      <div className="App">
        {/* Definindo as rotas para cada seção */}
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <About />
              {/*<Work />
              <Testimonial />
              <Contact />*/}
              <Footer />
            </>
          } />
          
          {/* Rota para a página do Menu */}
          <Route path="/menu" element={<Menu />} /> {/* Página do cardápio */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
