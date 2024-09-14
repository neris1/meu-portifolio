import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header(){
    return (
        <Navbar bg="dark" data-bs-theme='dark' expand="lg" className="bg-body-tertiary">
          <Container fluid>
            <Navbar.Brand href="#">João Victor Neris</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll>
                <Nav.Link href="/"> Home </Nav.Link>
                <Nav.Link href="/SobreMim"> Sobre Mim </Nav.Link>
                <Nav.Link href="/Contato"> Contato </Nav.Link>
              </Nav>
             
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }

export default Header;