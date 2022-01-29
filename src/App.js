import {NavBar} from './components/NavBar/NavBar'
import MainContent from './components/MainContent/MainContent' //importacion por defecto
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss';

function App() {
  return (
    <>
      <NavBar/>
      <MainContent titulo="Un titulo" texto="Saludo"/>
      <ItemListContainer greeting="Bienvenidos"/>
    </>
  );
}

export default App;
