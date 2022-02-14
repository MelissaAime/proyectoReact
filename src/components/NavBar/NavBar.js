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
                    <Link to='/' className='navbar-brand'>TRAPAO</Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link to='/' role='button' className='nav-link'>Inicio</Link>
                            <NavDropdown title="Productos" id="collasible-nav-dropdown">
                                <Link to='/productos/carteras' className='dropdown-item' role='button'>Carteras</Link>
                                <Link to='/productos/mochilas' className='dropdown-item' role='button'>Mochilas</Link>
                                <Link to='/productos/billeteras' className='dropdown-item' role='button'>Billeteras</Link>
                                <NavDropdown.Divider />
                                <Link to='/productos' className='dropdown-item' role='button'>Todos los productos</Link>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Link to='/contacto' role='button' className='nav-link'>Contacto</Link> 
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}