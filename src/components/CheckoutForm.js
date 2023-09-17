import React, { useState } from 'react';
import '../checkout.css'; 

const CheckoutForm = ({ createOrder }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [mail, setMail] = useState('');

  const handleGenerarOrden = () => {
    

    
    createOrder({ name, phone, mail });
  };

  return (
    <div className="checkout-form-container">
      <h2 className='checkout-nombre'>Checkout Formulario</h2>
      <div className="form-group">
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Teléfono:</label>
        <input
          type="text"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="mail">Correo electrónico:</label>
        <input
          type="email"
          id="mail"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
        />
      </div>
      <button className="generate-order-button" onClick={handleGenerarOrden}>
        Generar Orden
      </button>
    </div>
  );
};

export default CheckoutForm;