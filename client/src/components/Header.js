import {
  Navbar,
  Button,
  FormControl,
  Form,
  Nav,
  Container,
} from "react-bootstrap";
import logo from "../assets/fotos-header/logo-econo.png";
//import logoMono from '../assets/fotos-header/logoMono.png'
import { Outlet, useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import shoppingcart from "../assets/shoppingcart.svg";
import userprofile from "../assets/userprofile.svg";

function Header() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/experiences/?search=" + input);
    setInput("");
  };

  return (
    <div>
      <Navbar bg="light" expand="lg" className="d-flex justify-content-around">
        <Container>
          <Nav
            activeKey="/home"
            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
          >
            <Nav.Link>
              <Navbar.Brand href="#">
                <Link to="/">
                  <img
                    src={logo}
                    width="70"
                    height="50"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                  />
                </Link>
              </Navbar.Brand>{" "}
            </Nav.Link>
            <Form className="d-flex w-50" onSubmit={handleSubmit}>
              <FormControl
                type="search"
                placeholder="busca una actividad, un lugar..."
                className="me-2"
                aria-label="Search"
                onChange={handleChange}
                value={input}
              />
            </Form>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Navbar.Text>
                  <Nav.Link href="#">
                    <img
                      src={userprofile}
                      width="30"
                      height="30"
                      className="d-inline-block align-top"
                      alt="React Bootstrap logo"
                    />
                  </Nav.Link>
                </Navbar.Text>
                <Nav.Link href="#">
                  <img
                    src={shoppingcart}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                  />
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
}
export default Header;
