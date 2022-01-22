import {NavBar} from './components/NavBar/NavBar'
import MainContent from './components/MainContent/MainContent' //importacion por defecto
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import './styles.css';

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting="Bienvenidos"/>
      <MainContent titulo="Un titulo" texto="Saludo"/>
    </>
  );
}

export default App;
