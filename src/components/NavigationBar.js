import { Container, Nav, Navbar } from "react-bootstrap";

const NavigationBar = () => {
    return ( 
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand>FILMS-REACTJS</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link>TRENDING</Nav.Link>
                    <Nav.Link>SUPERHERO</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
     );
}
 
export default NavigationBar;