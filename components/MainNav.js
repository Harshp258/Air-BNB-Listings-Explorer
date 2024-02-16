import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Link from 'next/link';

export default function MainNav() {
  const navStyle = {
    color: "white",
    fontFamily: "Playfair Display, serif",
    textDecoration: "none",
  };

  return (
    <>
      <Navbar className="bg-dark">
        <Container>
          <Navbar.Brand style={{ color: "white" }}>
            <Link href="/" passHref legacyBehavior>
              <Nav.Link style={navStyle}>Harsh Premium Listings</Nav.Link>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-dark" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="top-fixed">
              <Link href="/" passHref legacyBehavior>
                <Nav.Link style={navStyle} className="d-md-block">Listings</Nav.Link>
              </Link>
              <Link href="/About" passHref legacyBehavior>
                <Nav.Link style={navStyle} className="d-md-block">About</Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>

        </Container>
      </Navbar>
    </>
  );
}
