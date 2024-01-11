import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function SeccionLarga({frase,boton}) {
  return (
    <Row  style={{ backgroundColor: 'black', width:'100%', margin:'0px', animation:'fade-up 0.5s'}}>
      <Col  >
      <h2 style={{ color: 'white', marginBottom:'4.5rem', marginTop:'4rem'}}>{frase}</h2>
      </Col>
      <Col style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <Link to={'/contacto'}><Button style={{backgroundColor:'orangered', border:'none'}}>{boton}</Button></Link>
        </Col>
    </Row>
  )
}
