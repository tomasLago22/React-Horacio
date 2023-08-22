import React from 'react';
import NavBar from "./components/NavBar";
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import ItemDetallesContainer from './components/ItemDetallesContainer';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="" />} />
        <Route path="categoria/:categoriaId" element={<ItemListContainer greeting="" />} />
        <Route path="item/:itemId" element={<ItemDetallesContainer />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;