import React from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetallesContainer from './components/ItemDetallesContainer';
import ItemListContainer from './components/ItemListContainer';
import MiCustomProvider from './components/MiContexto';
import firebase from './components/firebase';
import Carrito from './components/Carrito';
import Checkout from './components/Checkout'; // Importa el componente Checkout

function App() {
  return (
    <BrowserRouter>
      <MiCustomProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="" />} />
          <Route path="categoria/:categoriaId" element={<ItemListContainer greeting="" />} />
          <Route path="item/:itemId" element={<ItemDetallesContainer />} />
          <Route path="carrito" element={<Carrito />} />
          <Route path="checkout" element={<Checkout />} /> {/* Agrega esta ruta para Checkout */}
        </Routes>
        <Footer />
      </MiCustomProvider>
    </BrowserRouter>
  );
}

export default App;