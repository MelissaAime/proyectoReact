import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss';
import { BrowserRouter, Routes, Route , Navigate } from 'react-router-dom';
import { NavBar } from './components/NavBar/NavBar';
import { MainContent } from './components/MainContent/MainContent';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { Contact } from './components/Contact/Contact';
import { CartProvider } from './context/CartContext';
import { Cart } from './components/Cart/Cart';
import { Footer } from './components/Footer/Footer';
import { Checkout } from './components/Checkout/Checkout';

function App() {

  return (

    <CartProvider>

      <BrowserRouter> 

          <NavBar/>

          <Routes>
              <Route path='/' element={<MainContent/>} />
              <Route path='/productos' element={ <ItemListContainer/> } />
              <Route path='/productos/:categId' element={ <ItemListContainer/> } />
              <Route path='/detalles/:itemId' element={ <ItemDetailContainer/> } />
              <Route path='/contacto' element= { <Contact/> } />

              <Route path='/carrito' element= { <Cart/> } />
              <Route path='/checkout' element= { <Checkout/> } />
              <Route path='*' element={ <Navigate to='/' /> } />
          </Routes>

          <Footer/>
      </BrowserRouter>

    </CartProvider>

  );
}

export default App;
