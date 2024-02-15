import React from 'react'
import { Container } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { Navbar } from 'react-bootstrap'
import Link from 'next/link'



export default function MainNav() {
   return(

    <>
    <Navbar expand="lg" className="bg-dark">
      <Container>
        <Navbar.Brand style={{ color: 'white' }}>Harsh Patel</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-dark" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="top-fixed">
          <Link href="/" passHref legacyBehavior><Nav.Link style={{ color: 'white' }}>Listings</Nav.Link></Link>
          <Link href="/About" passHref legacyBehavior><Nav.Link style={{ color: 'white' }}>About</Nav.Link></Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  
   )
  }