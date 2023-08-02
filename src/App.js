
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from "./components/NavBar"

import Footer from './components/Footer';

import Main from './components/Main';

import ItemListContainer from './components/ItemListContainer';


function App() {

  //Vista
  return (
    <> 
    
      <NavBar/>
      <Main/>
      <Footer/>
      <ItemListContainer/>
    </>
  );
}

export default App