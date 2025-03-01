import React, { useState } from "react";
import Logo from "../Assets/Logo.png";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
// Comentado: 
// import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
// import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { Link } from "react-router-dom"; 

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
      link: "#home",  // Adiciona um link para a seção
    },
    {
      text: "Sobre",
      icon: <InfoIcon />,
      link: "#about",  // Adiciona um link para a seção
    },
    // Comentado:
    // {
    //   text: "Depoimentos",
    //   icon: <CommentRoundedIcon />,
    //   link: "#testimonials",  // Adiciona um link para a seção
    // },
    // {
    //   text: "Contato",
    //   icon: <PhoneRoundedIcon />,
    //   link: "#contact",  // Adiciona um link para a seção
    // },
    {
      text: "Carrinho",
      icon: <ShoppingCartRoundedIcon />,
      link: "#cart",  // Adiciona um link para a seção
    },
  ];

  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-links-container">
        <a href="#home">Home</a>
        <a href="#about">Sobre</a>
        {/* Comentado:
        <a href="#testimonials">Depoimentos</a>
        <a href="#contact">Contato</a>
        */}
        <a href="#cart">
          <BsCart2 className="navbar-cart-icon" />
        </a>
        <Link to="/menu">
          <button className="primary-button">Cardápio</button>
        </Link>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
