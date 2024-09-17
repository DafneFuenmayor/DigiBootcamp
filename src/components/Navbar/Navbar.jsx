import React, { useState } from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
import Digibootcamp from "../../img/Digibootcamp.png";
import { FaBars, FaTimes } from "react-icons/fa"; // Importa íconos
import { IoMdArrowBack } from "react-icons/io"; // Importa ícono de flecha

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const closeNav = () => {
    setNavOpen(false);
  };

  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="logo">
        <img src={Digibootcamp} alt="Digibootcamp Logo" />
      </div>
      <div className="n-left">
        <div className="n-name">Digibootcamp</div>
        <Toggle />
      </div>
      {/* right */}
      <div className="n-right">
        <div className={`n-list ${navOpen ? 'active' : ''}`}>
          <ul>
            <li onClick={closeNav}>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Inicio
              </Link>
            </li>
            <li onClick={closeNav}>
              <Link to="services" spy={true} smooth={true}>
                Campamento
              </Link>
            </li>
            <li onClick={closeNav}>
              <Link to="works" spy={true} smooth={true}>
                Bootcamps
              </Link>
            </li>
            <li onClick={closeNav}>
              <Link to="contact" spy={true} smooth={true}>
                Boletín
              </Link>
            </li>
          </ul>
          <div className="n-close-icon" onClick={closeNav}>
            <IoMdArrowBack size={30} />
          </div>
        </div>
        <div className="n-buttons">
          <Link to="contact" spy={true} smooth={true}>
            <button className="button n-button">iniciar secion</button>
          </Link>
        </div>
        <div className="n-menu-icon" onClick={toggleNav}>
          {navOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
