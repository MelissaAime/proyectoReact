import { BsInstagram, BsFacebook } from 'react-icons/bs';

export const Footer = () => {
    return (
        <footer className="style-footer text-center">
            <div className="container my-4">
                
                <table size="lg" className="style-footer-table">
                    <thead>
                        <tr>
                            <th>Links</th>
                            <th colSpan={3}>Redes</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Carteras</td>
                            <td><BsFacebook/></td> 
                            <td><BsInstagram/></td> 
                            <td><BsFacebook/></td>
                        </tr>
                        <tr>
                            <td>Mochilas</td>
                        </tr>
                        <tr>
                            <td>Billeteras</td>
                        </tr>
                        <tr>
                            <td>Todos los productos</td> 
                        </tr>
                    </tbody>

                </table>

                <p className='style-footer-p'>©  Todos los derechos reservados</p>
                
            </div>

        </footer>
    )
}