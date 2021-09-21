import React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default function AppNavbar() {
    return (
        <Navbar bg="primary" className="navbar-dark" expand="lg">
        <Navbar.Brand href="#home">Daryl G.</Navbar.Brand>
            <Nav className="ml-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#contacts">Contacts</Nav.Link>
            </Nav>
        </Navbar>
    )
}