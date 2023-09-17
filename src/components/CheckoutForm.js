import React, { useState } from 'react';

const CheckoutForm = ({ createOrder }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [mail, setMail] = useState('');

  const handleGenerarOrden = () => {
    // Validar datos y realizar acciones necesarias antes de generar la orden

    // Luego, llamar a la función proporcionada por el componente Checkout
    createOrder({ name, phone, mail });
  };

  return (
    <div>
      <h2>Checkout Formulario</h2>
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Teléfono:</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div>
        <label>Correo electrónico:</label>
        <input
          type="email"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
        />
      </div>
      <button onClick={handleGenerarOrden}>Generar Orden</button>
    </div>
  );
};

export default CheckoutForm;