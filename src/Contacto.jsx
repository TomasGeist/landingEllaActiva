import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import useScreenSize from './hooks/useScreenSize';
import pilatesBanner from './assets/pilatesBanner.jpg'
import img1 from './assets/img1.jpg'
import img2 from './assets/img2.jpg'
import img3 from './assets/img3.jpg'
import img4 from './assets/img4.jpg'
import izquierdaBarras from './assets/izquierdaBarras.png'
import derechaBarras from './assets/derechaBarras.png'

export default function Contacto() {
  const { width, height } = useScreenSize();
  let seccion;
  let imagen;
  let seccionFinal;


  return (
    <>
      <Row id='contacto' className='seccionContain' style={{ margin: '0px' }}>
          <Col lg='7' md='6' className={'seccionIzq imagen1'} style={{height:'60vh'}}></Col>
        
          <Col lg='5' md='6' className={'seccionDer '} style={{position:'relative', height:'70vh'}}>
            <div className='divContainIntSectionDer' style={{width:'75%'}}>
            <img className='imagenOculta' style={{position:'absolute', top:'-30px', left:'-2px', opacity:'0.1'}} src={izquierdaBarras}></img>
              <h2 style={{ position: 'relative' }}><span className='imagenOculta' style={{ fontSize: '8rem', position: 'absolute', left: '-10px', top: '-100px', color: '#21252930', fontWeight: 'bold', margin: '0px', padding: '0px' }}>05</span>Contacto</h2>
              <Form netlify>
              <Row>
                <Col>
      <Form.Group className="mb-3" controlId="formBasicNombre">
        <Form.Label>Nombre</Form.Label>
        <Form.Control autoComplete="off" type="text" placeholder="Escriba su nombre" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicTelefono">
        <Form.Label>Telefono</Form.Label>
        <Form.Control autoComplete="off" type="number" placeholder="Escriba su telefono" />
      </Form.Group>
        <Button style={{ color: 'white', width: 'auto', backgroundColor: '#f4770f', borderColor: '#21252930', borderRadius: '90px', width:'8em'}}>Enviar</Button>
            </Col>
             
                
                
                <Col>
                  
                  <Form.Group className="mb-3" controlId="formBasicApellido">
                <Form.Label>Apellido</Form.Label>
                <Form.Control autoComplete="off" type="text" placeholder="Escriba su apellido" />
                  </Form.Group>
                  
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control autoComplete="off" type="email" placeholder="Escriba su email" />
                  </Form.Group>
                  
                  
              </Col>
          </Row>
    </Form>
            
              </div>
          </Col>
      </Row>
      </>
  )
}
