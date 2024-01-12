import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import useScreenSize from './hooks/useScreenSize';
import pilatesBanner from './assets/pilatesBanner.jpg'
import img1 from './assets/img1.jpg'
import img2 from './assets/img2.jpg'
import img3 from './assets/img3.jpg'
import img4 from './assets/img4.jpg'
import izquierdaBarras from './assets/izquierdaBarras.png'
import derechaBarras from './assets/derechaBarras.png'


export default function Secciones({ dir , titulo , texto , btn, numero }) {  
  const { width, height } = useScreenSize();
  let seccion;
  let imagen;
  let seccionFinal;


  if (numero == '01') {
    imagen = 'imagen1'
  } else if (numero == '02') {
    imagen = 'imagen2'
  } else if (numero == '03') {
    imagen = 'imagen3'
  } else {
    imagen = 'imagen4'
  }
  
  (width < 769) ? seccion = (
    seccion =
   (
    <>
        <Row className='seccionContain' style={{margin:'0px'}}>
          <Col lg='7' md='6' className={'seccionIzq ' + imagen}></Col>
          <Col lg='5' md='6' style={{position:'relative'}} className='seccionDer'>
            <img className={(width<895)?'imagenOculta':null} style={{position:'absolute', top:'-30px', right:'0', opacity:'0.1'}} src={derechaBarras}></img>
            <div className='divContainIntSectionDer' style={{ width: '75%' }}>
            <h2 style={{position:'relative'}}><span className={(width<895)?'imagenOculta':null} style={{ fontSize: '8rem', position: 'absolute', left: '-10px', top: '-100px', color: '#21252930', fontWeight: 'bold', margin: '0px', padding: '0px' }}>{numero}</span>{titulo}</h2>
              <p>{texto}</p>
              <Button href='#contacto' style={{ color: 'white', width: 'auto', backgroundColor: '#f4770f', borderColor: '#21252930', borderRadius: '90px', width:'8em', zIndex:'2'}}><a href='#contacto'>Saber Más</a></Button>
              </div>
          </Col>
        </Row>
    </>
   )
    
    
    ) :
  

  (dir == 'izq') ?
    seccion =
   (
        <>
           
          <Row id={'section' + numero} className='seccionContain' style={{margin:'0px'}}>
           
			   
            <Col lg='7' md='6' className={'seccionIzq ' + imagen}></Col>
                     
      
            <Col lg='5' md='6' className='seccionDer'>
            <div className='divContainIntSectionDer' style={{width:'75%'}}>
  
                <h2 style={{ position: 'relative' }}><span className={(width<895)?'imagenOculta':null} style={{ fontSize: '8rem', position: 'absolute', left: '-10px', top: '-100px', color: '#21252930', fontWeight: 'bold', margin: '0px', padding: '0px' }}>{numero}</span>{titulo}</h2>
                <p>{texto}</p>
              <Button href='#contacto' style={{ color: 'white', width: 'auto', backgroundColor: '#f4770f', borderColor: '#21252930', borderRadius: '90px', width:'8em', zIndex:'2'}}><a href='#contacto'>Saber Más</a></Button>
                    </div>
                    
          </Col>
              </Row>
       
    </>
   )
    
    : seccion = (
        <>
   
       <Row className='seccionContain' style={{margin:'0px'}}>
          <Col lg='7' md='6' className={'seccionDer '} style={{position:'relative'}}>
            <div className='divContainIntSectionDer' style={{width:'75%'}}>
            <img className={(width<895)?'imagenOculta':null} style={{position:'absolute', top:'-30px', left:'-2px', opacity:'0.1'}} src={izquierdaBarras}></img>
              <h2 style={{ position: 'relative' }}><span className={(width<895)?'imagenOculta':null} style={{ fontSize: '8rem', position: 'absolute', left: '-10px', top: '-100px', color: '#21252930', fontWeight: 'bold', margin: '0px', padding: '0px' }}>{numero}</span>{titulo}</h2>
              <p>{texto}</p>
              <Button style={{ color: 'white', width: 'auto', backgroundColor: '#f4770f', borderColor: '#21252930', borderRadius: '90px', width:'8em', zIndex:'2'}}><a href='#contacto'>Saber Más</a></Button>
              </div>
          </Col>
          <Col lg='5' md='6' className={'seccionIzq ' + imagen}></Col>
              </Row>
   
    </>
    )
  
  return seccion
  
  }
