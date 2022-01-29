import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';

export const NavBar = () => {
    return(
        <header className="header">
            
            <Navbar collapseOnSelect expand="lg" variant="dark">
                <Container>
                    <img
                        src="https://via.placeholder.com/200"
                        width="60"
                        height="60"
                        className="d-inline-block align-top"
                        alt="logo"
                    />
                    <Navbar.Brand href="#">Nombre</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        <Nav.Link href="#">Art 1</Nav.Link>
                        <NavDropdown title="Art 2" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#">Item 1</NavDropdown.Item>
                            <NavDropdown.Item href="#">Item 2</NavDropdown.Item>
                            <NavDropdown.Item href="#">Item 3</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#">All</NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                        <Nav>
                        <Nav.Link href="#">Art 3</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}