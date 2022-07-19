import Header from "../components/Header";
import { Form, Row, Col } from "react-bootstrap";
import axios from "axios";

function Login() {
  // handleLogin (){
  //   axios.post()

  // }

  return (
    <div>
      <Header />
      <div className="LoginForm">
        <h1>Login</h1>
        <p>into yout account</p>
      </div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Username" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember me" />
          <p className="forgotPass">He olvidado la contraseña</p>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Col sm="10">
            <Form.Control type="input" placeholder="Dirección*" />
          </Col>
        </Form.Group>
        <button> Login</button>
      </Form>
    </div>
  );
}

export default Login;
