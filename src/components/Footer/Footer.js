import { BsInstagram, BsFacebook, BsPhone } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <footer className="style-footer text-center">
            <div className="container my-4">
                
                <table  size="md" className="style-footer-table">
                    <thead>
                        <tr>
                            <th>Links</th>
                            <th colSpan={3}>Redes</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><Link to="/productos/carteras" className="my-link">Carteras</Link></td>
                            
                            <td><a href='https://www.facebook.com/' target="_blank" className="my-link"> <BsFacebook/> </a></td> 
                            <td><a href='https://www.instagram.com/' target="_blank" className="my-link"> <BsInstagram/> </a></td> 
                            <td><a href='https://www.whatsapp.com/' target="_blank" className="my-link"> <BsPhone/> </a></td>
                        </tr>
                        <tr>
                            <td><Link to="/productos/mochilas" className="my-link">Mochilas</Link></td>
                        </tr>
                        <tr>
                            <td><Link to="/productos/billeteras" className="my-link">Billeteras</Link></td>
                        </tr>
                        <tr>
                            <td><Link to="/productos" className="my-link">Todos los productos</Link></td> 
                        </tr>
                    </tbody>

                </table>

                <p className='style-footer-p'>©  Todos los derechos reservados</p>
                
            </div>

        </footer>
    )
}