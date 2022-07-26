import { Row, Col, Card } from 'react-bootstrap';
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useSearchParams, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import Footer from '../components/Footer.js'

import ExperienceNavbar from '../components/ExperienceNavbar.js';
import Header from '../components/Header'
const ExperienceGridCard = () =>  {
  const [searchParams, setSearchParams]= useSearchParams ()
  const search= searchParams.get('search') || ''
  const [card, setCard] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3001/experiencias')
      .then((response) => {
        console.log(response)
        const filterArray=response.data.filter(element=>{
          if (search!='')
                   return element.nombre.toLowerCase().includes(search.toLocaleLowerCase())
         return element })
        setCard(filterArray)
      })
      .catch((error) => {
        console.log(error);
      });
  }, [search]);
  return (
    <div className="ExperienceHome">
    <Header />
    <div><h1 className="ExperienceTitle">Experiencias en el área de Barcelona</h1></div>
    <ExperienceNavbar />
    <Container>
      <Row xs={1} md={2} lg={3} className="g-4" >
    {card.map(item =>(
      <Col key={item.id}>
        <Link to={`/paginasexperiences/${item.experiencia_id}`}>
        <Card style={{cursor : 'pointer'}}>
          <Card.Img className='cardImageExper' variant="top" src={item.imagen} />
          <Card.Body>
          <Card.ImgOverlay>
            <Card.Title>{item.nombre}</Card.Title>
          </Card.ImgOverlay>
            <Row>
              <Col><div className='tagCard' ><Card.Text >{item.ubicacion}</Card.Text></div></Col>
              <Col><div className='tagCard'><Card.Text>{item.transporte}</Card.Text></div></Col>
              <Col><div className='tagCard'><Card.Text>{item.duracionHoras}</Card.Text></div></Col>
            </Row>
                <Card.Text>{item.duracion}</Card.Text>
              <Row>
              <Col>
                <Card.Text>{item.precio}</Card.Text>
              </Col>
              <Col>
                <button className="buttonExp">Reservar</button> 
              </Col>
              </Row>
          </Card.Body>
        </Card>
        </Link>
      </Col>
  ))}
      </Row>
    </Container>
   
    <Footer />
    </div>
  )
}
export default ExperienceGridCard;