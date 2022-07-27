import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";

const filterLugar = ["Montaña", "Playa", "Ciudad"];

const ExperienceNavbar = ({ setFilterLugar }) => (
  <div className="ExperienceNavbar">
    <Navbar bg="light" expand="lg">
      <Container className="justify-content-center">
        <NavDropdown title="Ubicación" id="basic-nav-dropdown">
          <NavDropdown.Item>Montaña</NavDropdown.Item>
          <NavDropdown.Item>Playa</NavDropdown.Item>
          <NavDropdown.Item>Ciudad</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Transporte" id="basic-nav-dropdown">
          <NavDropdown.Item>Bicicleta</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Barco</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">A pie</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Duración" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">
            Excursión larga
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">
            Excursión corta
          </NavDropdown.Item>
        </NavDropdown>
      </Container>
    </Navbar>
  </div>
);

export default ExperienceNavbar;
