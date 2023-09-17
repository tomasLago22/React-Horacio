import React, { useState, useEffect } from 'react';
import CheckoutForm from './CheckoutForm';
import { useMiContexto } from './MiContexto';

const Checkout = () => {
  const { carrito, montoTotal } = useMiContexto();
  const [mensaje, setMensaje] = useState(null);

  const generarIdAleatoria = () => {
    return Math.random().toString(36).substring(7);
  };

  const createOrder = async ({ name, phone, mail }) => {
    const orderData = {
      name,
      phone,
      mail,
      items: carrito,
      total: montoTotal,
      date: new Date(),
    };

    setMensaje('Cargando...');

    setTimeout(() => {
      setMensaje(`¡Orden creada! ID de orden: ${generarIdAleatoria()}`);
    }, 2000);

  };

  useEffect(() => {
    if (mensaje) {
      setTimeout(() => {
        setMensaje(null);
      }, 5000);
    }
  }, [mensaje]);

  return (
    <div>
      {mensaje ? (
        <p className="text-2xl font-bold text-center">{mensaje}</p>
      ) : (
        <div>
          <h1 className="text-2xl font-bold text-center mb-4">Checkout</h1>
          <CheckoutForm createOrder={createOrder} />
        </div>
      )}
    </div>
  );
};

export default Checkout;