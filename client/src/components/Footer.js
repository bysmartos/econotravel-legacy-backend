import React from "react";
import qrstyle from "../assets/qrstyle.jpg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="div-footer">
      <ul className="infoFooter">
        <Link to="/conocenos">
          <li>Nosotros</li>
        </Link>

        <Link to="/comofuncionamos">
          <li>Cómo funciona</li>
        </Link>

        <Link to="/metodosdepago">
          <li>Medios de pago</li>
        </Link>
      </ul>
      <div className="qrside">
        <h4 className="app">Descargate la app</h4>
        <img src={qrstyle} className="qr" />
      </div>
    </footer>
  );
}

export default Footer;
