import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import useScreenSize from './hooks/useScreenSize';
import pilatesBanner from './assets/pilatesBanner.jpg'
import img1 from './assets/img1.jpg'
import img2 from './assets/img2.jpg'
import img3 from './assets/img3.jpg'
import img4 from './assets/img4.jpg'
import paola from './assets/paola.jpg'
import izquierdaBarras from './assets/izquierdaBarras.png'
import derechaBarras from './assets/derechaBarras.png'
import emailjs from '@emailjs/browser';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer'

export default function Contacto() {
  const { width, height } = useScreenSize();
  let seccion;
  let imagen;
  let seccionFinal;
  const serviceReal = 'service_5tuiuj4'
  const [show, setShow] = useState(false);

 const sendEmail = (event) => {
    event.preventDefault();
    emailjs.sendForm('service_5tuiuj','template_9xu2upk', event.target, 'zot4j_xCuY9vH6J7r').then(setEnviado('enviado')).catch(err=>console.log(err))
  }

  return (
    <>
      <Row id='contacto' className='seccionContain' style={{ margin: '0px' }}>
          <Col lg='7' md='6' className={'seccionIzq imagen1'} style={{height:'60vh'}}></Col>
        
          <Col lg='5' md='6' className={'seccionDer '} style={{position:'relative', height:'70vh'}}>
            <div className='divContainIntSectionDer' style={{width:'75%'}}>
            <img className={(width<895)?'imagenOculta':null} style={{position:'absolute', top:'-30px', left:'-2px', opacity:'0.1'}} src={izquierdaBarras}></img>
              <h2 style={{ position: 'relative' }}><span className={(width<895)?'imagenOculta':null} style={{ fontSize: '8rem', position: 'absolute', left: '-10px', top: '-100px', color: '#21252930', fontWeight: 'bold', margin: '0px', padding: '0px' }}>05</span>Contacto</h2>
              <Form onSubmit={sendEmail} style={{zIndex:'2'}}>
              <Row>
                <Col>
      <Form.Group className="mb-3" controlId="formBasicNombre">
        <Form.Label>Nombre</Form.Label>
        <Form.Control name='name' autoComplete="off" type="text" placeholder="Escriba su nombre" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicTelefono">
        <Form.Label>Telefono</Form.Label>
        <Form.Control name='telefono' autoComplete="off" type="number" placeholder="Escriba su telefono" />
                  </Form.Group>
         
                  
                  <Button onClick={() => {
                    setShow(true)
                    setTimeout(()=>window.location.href = window.location.href,2800)
                    
                  }
                
                  
                  
                  } type="submit" style={{ color: 'white', width: 'auto', backgroundColor: '#f4770f', borderColor: '#21252930', borderRadius: '90px', width: '8em' }}>Enviar</Button>
            </Col>
             
                
                
                <Col>
                  
                  <Form.Group className="mb-3" controlId="formBasicApellido">
                <Form.Label>Apellido</Form.Label>
                <Form.Control name='apellido' autoComplete="off" type="text" placeholder="Escriba su apellido" />
                  </Form.Group>
                  
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control name='email' autoComplete="off" type="email" placeholder="Escriba su email" />
                  </Form.Group>
                  
                  
                </Col>
                
              </Row>
              
    </Form>
            
          </div>
          {/* TOAST */}     
          <ToastContainer position='bottom-end'>
    <Col xs={6}>
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Header >
            <img
              src={paola}
              className="rounded me-2 "
                    alt=""
                    style={{width:'25%'}}
            />
            <strong className="me-auto">¡Gracias!</strong>
            <small>Paola</small>
          </Toast.Header>
          <Toast.Body>Mensaje enviado con exito</Toast.Body>
        </Toast>
            </Col>
            </ToastContainer>
                  {/* TOAST */} 
        </Col>
        
      </Row>
      
      </>
  )
}
