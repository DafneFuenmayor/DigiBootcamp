import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/sidebar.jpeg";
import Ecommerce from "../../img/ecommerce.jpg";
import MusicApp from "../../img/musicapp.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>CONOCE NUESTRO</span>
      <span>MODELO DE ENSEÑANZA</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
           <SwiperSlide>
          <img src={Sidebar} alt="Sidebar" />
          <div className="slide-text-container">
            <p className="slide-text">DIRIGIDO A</p>
            <p className="colored-text">Programadores, ingenieros y cualquier profesional o entusiasta, que le interese conocer los conceptos de las tecnologías 4.0</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="Ecommerce" />
          <div className="slide-text-container">
            <p className="slide-text">PRE-REQUISITOS</p>
            <p className="colored-text">Conocimientos del S.O. Windows e Internet. Mente abierta para aprender los conceptos básicos y claves sobre tecnologías 4.0 aplicadas a las empresas</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="MusicApp" />
          <div className="slide-text-container">
            <p className="slide-text">METODOLOGÍA</p>
            <p className="colored-text">Nuestros Bootcamps serán orientados 100% virtuales y 80% practicos</p>
          </div>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default Portfolio;
