import './CartWidget'
import { CartWidget } from './CartWidget';

export const NavBar = () => {
    return(
        <header className="header">
            <CartWidget/>
            <h1>Nombre</h1>
            
            <nav className="header-navbar">
                <p className="header-navbar-item">Item 1</p>
                <p className="header-navbar-item">Item 2</p>
                <p className="header-navbar-item">Item 3</p>
            </nav>
        </header>
    );
}