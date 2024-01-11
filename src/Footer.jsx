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
import fimg1 from './assets/ellaactiva/1.jpg'
import fimg2 from './assets/ellaactiva/2.jpg'
import fimg3 from './assets/ellaactiva/3.jpg'
import fimg4 from './assets/ellaactiva/4.jpg'
import fimg5 from './assets/ellaactiva/5.jpg'
import fimg6 from './assets/ellaactiva/6.jpg'
import fimg7 from './assets/ellaactiva/7.jpg'
import fimg8 from './assets/ellaactiva/8.jpg'
import fimg9 from './assets/ellaactiva/9.jpg'



export default function Footer() {
  const { width, height } = useScreenSize();
  let seccion;
  let imagen;
  let seccionFinal;

  return (
    <>
    <Row className='seccionContain bg-black ' style={{margin:'0px', color:'white', width:'100%'}}>
        <Col lg='4' md='2' className='footerInfo mb-3 mt-3'>
          <div className='footerInfoint'>
          <p>EllaActiva</p>
          <p><b>Direccion: </b> Luis Tilo Bartolome 657</p>
          <p><b>Telefono: </b>+54 9 343 404-8193</p>
            <p><b>Email: paolaheit@gmail.com</b></p>
            </div>
        </Col>
        <Col lg='4' md='8' sm='12' className='galeriaFooter mb-3 mt-3'>
          <h3>Galeria de Imagenes</h3>
          <Row className="justify-content-lg-center justify-content-md-center justify-content-sm-center">
            <Col lg='3' md='2' sm='2'>
              <img src={fimg1} />
              <img src={fimg2} />
              <img src={fimg4} />
            </Col>
            <Col lg='3' md='2' sm='2'>
              <img src={fimg9} />
              <img src={fimg5} />
              <img src={fimg6} />
            </Col>

            <Col lg='3' md='2' sm='2'>
              <img src={fimg3} />
              <img src={fimg7} />
              <img src={fimg8} />
            </Col>
          </Row>
        </Col>
        <Col className='mb-3 mt-3' lg='4' md='2' style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
          <h3>Suscribite a nuestra información</h3>

          <Form style={{ gap:'5px', display: 'flex', padding: '0px', margin:'0px'}}>
      <Form.Group style={{ alignSelf:'center'}}  className="mb-3" controlId="formBasicEmail">
        
              <Form.Control  type="email" placeholder="Ingresa email" />
      </Form.Group>
      <Button style={{height:'2.4rem'}} variant="primary" type="submit">
        Enviar
              </Button>
                
          </Form>
          
          <p>*No vamos a difundir tu informacion. Presionar el boton suscribirse indica aceptar la politica de privacidad.</p>
        </Col>
      </Row>
      <Row className='bg-black' style={{color:'white', width:'100%', margin:'0px'}}> <p>Derechos reservados 2024 - Geisetech</p></Row>
    </>
  )
}
