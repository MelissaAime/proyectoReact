import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartWidget } from '../CartWidget/CartWidget';
import logo from '../../images/logo.png';
import { nombreDia} from '../Oferta/Oferta';

export const NavBar = () => {

    
    return(
        <>
            <p className='bar-desc'>Todos los {nombreDia} 15% de descuento en toda la web</p>

            <header className="header">
                
                <Navbar collapseOnSelect expand="lg" variant="dark">
                    <Container>
                        <Link to='/'>
                            <img
                                src={logo}
                                width="60"
                                height="60"
                                className="d-inline-block align-top imagen"
                                alt="logo"
                            />
                        </Link>
                        <Link to='/' className='navbar-brand mx-3'>TRAPAO</Link>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Link to='/' role='button' className='nav-link mx-3'>Inicio</Link>
                                <NavDropdown title="Productos" id="collasible-nav-dropdown" className='mx-3'>
                                    <Link to='/productos/carteras' className='dropdown-item' role='button'>Carteras</Link>
                                    <Link to='/productos/mochilas' className='dropdown-item' role='button'>Mochilas</Link>
                                    <Link to='/productos/billeteras' className='dropdown-item' role='button'>Billeteras</Link>
                                    <NavDropdown.Divider />
                                    <Link to='/productos' className='dropdown-item' role='button'>Todos los productos</Link>
                                </NavDropdown>
                            </Nav>
                            <Nav>
                                <Link to='/contacto' role='button' className='nav-link mx-3'>Contacto</Link> 
                            </Nav>

                            <CartWidget/>
                            
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </>
    );
}