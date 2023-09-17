import React, { createContext, useContext, useState } from 'react';

const MiCustomContext = createContext();

export const useMiContexto = () => {
  return useContext(MiCustomContext);
};

const MiCustomProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [montoTotal, setMontoTotal] = useState(0);
  const [cantidadTotal, setCantidadTotal] = useState(0);

  const agregarAlCarrito = (producto) => {
    
    const productoExistente = carrito.find((item) => item.id === producto.id);

    if (productoExistente) {
      
      const nuevoCarrito = carrito.map((item) =>
        item.id === producto.id
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      );
      setCarrito(nuevoCarrito);
    } else {
      
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }

    
    const nuevoMontoTotal = montoTotal + producto.precio;
    const nuevaCantidadTotal = cantidadTotal + 1;


   
    setMontoTotal(nuevoMontoTotal);
    setCantidadTotal(nuevaCantidadTotal);
  };

  const eliminarDelCarrito = (productoId) => {
    
    const nuevoCarrito = carrito.filter((item) => item.id !== productoId);

    
    const nuevoMontoTotal = nuevoCarrito.reduce(
      (total, item) => total + item.precio * item.cantidad,
      0
    );
    const nuevaCantidadTotal = nuevoCarrito.reduce(
      (total, item) => total + item.cantidad,
      0
    );

    
    setCarrito(nuevoCarrito);
    setMontoTotal(nuevoMontoTotal);
    setCantidadTotal(nuevaCantidadTotal);
  };

  const valorDelContexto = {
    carrito,
    montoTotal,
    cantidadTotal,
    agregarAlCarrito,
    eliminarDelCarrito,
  };

  return (
    <MiCustomContext.Provider value={valorDelContexto}>
      {children}
    </MiCustomContext.Provider>
  );
};

export default MiCustomProvider;