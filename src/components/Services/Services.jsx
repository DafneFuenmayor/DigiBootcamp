import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";


const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>Campamentos</span>
        <span>INICIA HOY <br/>TU PREPARACIÓN<br/>
         CAMPAMENTO<br/> INTERACTIVO<br/> INMERSIVO</span>
        <spane>
    
        </spane>
      
          <button className="button s-button">Registrate</button>
        
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "15rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"ÚNETE A ESTA REVOLUCIÓN"}
            detail={"Acompáñanos en esta gran aventura de conocimiento y sumérgete en las tecnologías 4.0"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"CAMPAMENTOS INTERACTIVOS"}
            detail={"Recibe capacitación para desarrollar una solución completa de software."}
          />
        </motion.div>
          {/* 3rd */}
          <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"BOOTCAMPS PRESENCIALES"}
            detail={
              "Nuestras Experiencias Presenciales"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
       
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
