
// export default Works;
import React, { useContext } from "react";
import "./Works.css";
import ReactPlayer from "react-player";
import { themeContext } from "../../Context";

const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="works" id="works">
      {/* Card con video de YouTube */}
      <div className="video-card">
        <div className="video-card-content">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=BYCK62MF4MU&t=48s&ab_channel=DigiPartyLeague"
            controls={true}
            width="100%"
            height="300px" // Puedes ajustar el tamaño del video
          />
          <div className="video-description">
            <p style={{ color: darkMode ? "white" : "black" }}>
            La clave del éxito de los Bootcamps de Digibootcamp reside en que, al finalizar,
            estarás preparado para desarrollar una solución completa de software realizada 100% por ti mismo,
            100% practico, pudiendo especializarte en la parte que más te guste.
            </p>
            
          </div>
        </div>
      </div>

      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          <span style={{ color: darkMode ? "white" : "" }}>
           
          </span>
          <span></span>
          <spane>
         
          </spane>
        
          <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
        </div>
      </div>
    </div>
  );
};

export default Works;
