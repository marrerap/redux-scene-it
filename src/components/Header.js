import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";


const linkStyle = {
  color: "rgba(255,255,255,.55)", 
  textDecoration: "none",
  
};

function Header() {
  return (
    <div>
      <Navbar bg="dark" variant='dark' expand="xlg">
        <Container>
          <Navbar.Brand href="/">Scene It</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>              
              <Link className='' style={linkStyle} to='/favorites'>Favorites</Link>
              
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
