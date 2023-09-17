import React, { useState } from 'react';

const ItemContador = ({ id, nombre, precio, onAdd }) => {
    const [cantidad, setCantidad] = useState(1);

    const incremento = () => {
        if (cantidad) {
            setCantidad(cantidad + 1);
        }
    }

    const decremento = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    }

    return (
        <div className="contador text-center">
            <div className="controladores flex items-center justify-center  p-2 rounded-md">
                <button className="mr-2 bg-blue-500 text-white px-2 py-1 rounded-md" onClick={decremento}>-</button>
                <h4 className="mx-2">{cantidad}</h4>
                <button className="ml-2 bg-blue-500 text-white px-2 py-1 rounded-md" onClick={incremento}>+</button>
            </div>
            <div>
                <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => onAdd(cantidad)}>Agregar al carrito</button>
            </div>
        </div>
    );
}

export default ItemContador;