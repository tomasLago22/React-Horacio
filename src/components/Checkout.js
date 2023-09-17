import React, { useState } from 'react';
import CheckoutForm from './CheckoutForm';
import { useMiContexto } from './MiContexto';

const Checkout = () => {
  const { carrito, montoTotal } = useMiContexto();

  const generarIdAleatoria = () => {
    return Math.random().toString(36).substring(7);
  };

  const createOrder = async ({ name, phone, mail }) => {
    // Simulación de lógica para crear una orden
    const orderData = {
      name,
      phone,
      mail,
      items: carrito,
      total: montoTotal,
      date: new Date(),
    };

    
    alert(`¡Orden creada! ID de orden: ${generarIdAleatoria()}`);
  };

  return (
    <div>
      <h1>Checkout</h1>
      <CheckoutForm createOrder={createOrder} />
    </div>
  );
};

export default Checkout;