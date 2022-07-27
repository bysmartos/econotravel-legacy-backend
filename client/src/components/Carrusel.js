import React from "react";
import { Carousel } from "react-bootstrap";
import foto1 from "../assets/fotos-carrusel/CostaBrava.jpg";
import foto2 from "../assets/fotos-carrusel/Playabcn.jpg";
import foto3 from "../assets/fotos-carrusel/Montserrat.jpg";
import { Link } from "react-router-dom";

function Carrusel() {
  return (
    <div id="carrusel">
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={foto1} alt="First slide" />
          <Carousel.Caption>
            <Link className="link-carrusel" to="/experiences">
              Elige a donde quieres ir
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={foto2} alt="Second slide" />

          <Carousel.Caption>
            <Link className="link-carrusel" to="/experiences">
              Filtra por actividad
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={foto3} alt="Third slide" />

          <Carousel.Caption>
            <Link className="link-carrusel" to="/experiences">
              Reserva y comienza tu aventura
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carrusel;
