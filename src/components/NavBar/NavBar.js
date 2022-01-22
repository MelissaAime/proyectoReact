import './NavBar.css'

export const NavBar = () => {
    return(
        <header className="header">
            <h1>IMAGEN</h1>

            <nav className="header-navbar">
                <p className="header-item">Item 1</p>
                <p className="header-item">Item 2</p>
                <p className="header-item">Item 3</p>
            </nav>
        </header>
    );
}