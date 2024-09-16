import { useContext, useState, useEffect } from "react";
import { themeContext } from "./Context";

import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonial from "./components/Testimonials/Testimonial";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Asegúrate de importar FontAwesome

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [showScroll]);

  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Intro />
      <Services />
      <Works />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
     

      {/* Flecha de scroll hacia arriba */}
      <div className={`scrollTop ${showScroll ? "show" : ""}`} onClick={scrollTop}>
        <i className="fas fa-arrow-up"></i> {/* Icono de FontAwesome */}
      </div>
    </div>
  );
}

export default App;
