import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss';
import { BrowserRouter, Routes, Route , Navigate } from 'react-router-dom';
import {NavBar} from './components/NavBar/NavBar'
import MainContent from './components/MainContent/MainContent' //importacion por defecto
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { Contact } from './components/Contact/Contact';
import { Form } from './components/Form/Form';
import { CartProvider } from '../src/context/CartContext';
import { Cart } from './components/Cart/Cart';

function App() {

  return (

    <CartProvider>

      <BrowserRouter> 

          <NavBar/>

          <Routes>
              <Route path='/' element={<MainContent titulo="Bienvenidos" texto="Hola, bienvenidos a TRAPAO, aquí encontrarán carteras, mochilas y billeteras"/>}/>
              <Route path='/productos' element={ <ItemListContainer/> } />
              <Route path='/productos/:categId' element={ <ItemListContainer/> } />
              <Route path='/detalles/:itemId' element={ <ItemDetailContainer/> } />
              <Route path='/contacto' element= { <Contact/> } />
              <Route path='/contacto' element= { <Form/> } />
              <Route path='/carrito' element= { <Cart/> } />
              <Route path='*' element={ <Navigate to='/' /> } />
          </Routes>

          {/* <Footer/> */}
      </BrowserRouter>

    </CartProvider>

  );
}

export default App;
