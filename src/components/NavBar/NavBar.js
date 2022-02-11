import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
                    <Link to='/'><Navbar.Brand>Nombre</Navbar.Brand></Link> 
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        <Nav.Link><Link to='/'> Inicio </Link></Nav.Link>
                        <NavDropdown title="Productos" id="collasible-nav-dropdown">
                            <NavDropdown.Item><Link to='/productos/uno'> Producto 1 </Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to='/productos/dos'> Producto 2 </Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to='/productos/tres'> Producto 3 </Link></NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item><Link to='/productos'> Todos los productos </Link></NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                        <Nav>
                        <Nav.Link> <Link to='/contacto'> Contacto </Link> </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}