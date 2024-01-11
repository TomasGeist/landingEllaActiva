import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import pilatesBanner from './assets/pilatesBanner.jpg'
import useScreenSize from './hooks/useScreenSize';
  
export default function Banner() {
  const { width, height } = useScreenSize();


  return (
    <>
      
        <Row className='banner w-100 m-0' style={{height:'100vh', position:'relative'}}>
          <Col lg={6} md={7} sm={12} style={{display:'flex', flexDirection:'column'}} ></Col>
          <Col lg={3} md={0} sm={0} style={{backgroundColor:'#ff52006b', height:'100vh', position:'absolute', top:'0', left:'250px', margin:'0px', padding:'0px', width:'20%' , display:(width < 850) ? 'none' : null, animation:'fade-down 0.5s'}}></Col>
          <Col lg={6} md={5} sm={12} style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
          
            
            <h1 style={{ fontWeight: 'bold', color: 'black', textAlign: (width < 737) ? 'center' : 'start', wordWrap: 'break-word', fontSize: (width < 1243 && width > 993) ? '2.3rem' : '2.8rem'  }} className='mt-5'><span style={{ backgroundColor: '#ff52006b', paddingLeft: '2px', padding: '0px 6px', animation:'fade-down 0.5s'}}>Pilates</span> para Equilibrio Interior</h1>
              <Button  style={{ color: 'black', width: 'auto', backgroundColor: 'transparent', borderColor: 'black', borderRadius: '90px', width:'8em'}} className='mbLandscape mt-5' >Leer más</Button>
              
          
          
          </Col>
        </Row>


    </>
  )
}
