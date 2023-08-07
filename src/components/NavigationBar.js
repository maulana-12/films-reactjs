import React from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";

const NavigationBar = () => {
    return ( 
        <div>
            <Navbar expand="lg" bg="transparent" variant='dark'>
                <Container>
                    <Navbar.Brand>FILMS-REACTJS</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link>TRENDING</Nav.Link>
                        <Nav.Link>SUPERHERO</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
     );
}
 
export default NavigationBar;