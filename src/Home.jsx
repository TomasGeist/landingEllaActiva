import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import NavBar from './NavBar';
import { Col, Row } from 'react-bootstrap';
import Banner from './Banner';
import SeccionesDos from './SeccionesDos';
import Contacto from './Contacto';
import Footer from './Footer';

function Home() {
  const titulos = {
    uno: 'Pilates Transformador',
    dos: 'Clases Adaptativas',
    tres: 'Pilates Terapéutico',
    cuatro: 'Vida Equilibrada'
  }
  
  const textos = {
      uno: 'Descubre la magia del Pilates Transformador, una experiencia más allá de lo físico. Explora movimientos, fundamentos y bienestar en nuestras sesiones',
      dos: 'Únete a nuestras Clases Adaptativas para todos los niveles. Instructores certificados guían movimientos, proporcionando progresión personalizada.',
      tres: 'Embárcate en Pilates Terapéutico para recuperación y alivio del dolor. Programas personalizados abordan lesiones, mejoran postura y restauran funcionalidad.',
      cuatro: 'Explora nuestro espacio dedicado a la "Vida Equilibrada". Artículos desentrañan secretos del Pilates, proporcionando inspiración para un equilibrio perfecto.'
  }
  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <SeccionesDos dir='izq' titulo={titulos.uno} texto={textos.uno} btn='Ver más' numero='01' imgnum={'imagen1'}></SeccionesDos>
      <SeccionesDos dir='der' titulo={titulos.dos} texto={textos.dos} btn='Ver más' numero='02' imgnum={'imagen2'}></SeccionesDos>
      <SeccionesDos dir='izq' titulo={titulos.tres} texto={textos.tres} btn='Ver más' numero='03' imgnum={'imagen3'}></SeccionesDos>
      <SeccionesDos dir='der' titulo={titulos.cuatro} texto={textos.cuatro} btn='Ver más' numero='04' imgnum={'imagen4'}></SeccionesDos>
      <Contacto></Contacto>
      <Footer></Footer>
    </>
  )
}

export default Home