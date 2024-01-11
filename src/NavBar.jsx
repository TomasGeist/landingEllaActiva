import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import useScreenSize from './hooks/useScreenSize';

export default function NavBar() {
  const { width, height } = useScreenSize();
  return (
    <>
       <>
      {['false'].map((expand) => (
        <Navbar fixed="top" style={{backgroundColor: '#ff520000', animation:'fade-down 0.5s'}} key={expand} expand={expand} className="mb-3 navbarControl">
          <Container fluid>
            <Navbar.Brand href="/"><p>Ellaactiva</p></Navbar.Brand>
            <Navbar.Toggle  aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas style={{backgroundColor: '#f5f5f5'}}
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Ella Activa
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#contacto" >Contacto</Nav.Link>
                  <Nav.Link href="#footer" >FAQ</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
    </>
  )
}
