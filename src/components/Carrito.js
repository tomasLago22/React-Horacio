import React from 'react';
import { useMiContexto } from "./MiContexto";
import '../carrito.css'; 

const Carrito = () => {
  const { carrito, eliminarDelCarrito, cantidadTotal, montoTotal } = useMiContexto();

if(cantidadTotal === 0){
  return  <p className='carritoTitulo'>No se encontraron productos en el carrito</p>
  
}


  return (
    <div className="carritoContenedor">
      <h2 className='carritoTitulo'>Carrito de Compras</h2>
      <ul className="listaCarrito">
        {carrito.map((producto) => (
          <li key={producto.id} className="carritoItem">
            <img src={producto.img} alt={producto.nombre} className="carritoImg" />
            <div className="carritoInfo">
              <p className='carritoNombre'>{producto.nombre}</p>
              <p className='carritoCantidad'>Cantidad: {producto.cantidad}</p>
              <p className='carritoPrecio'>Precio: ${producto.precio}</p>
              <button onClick={() => eliminarDelCarrito(producto.id)} className='botonEliminar'>Eliminar</button>
            </div>
          </li>
          
        ))}
      </ul>
      <h3 className='montoTotal'>Total: {montoTotal}</h3>
    </div>
  );
};

export default Carrito;