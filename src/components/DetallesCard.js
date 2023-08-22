import React, { useState } from 'react';  
import ItemContador from './ItemContador'; 

const DetallesCard = ({ nombre, img, precio, descripcion, categoria }) => {
    const [cantidad, setCantidad] = useState(1);

    return (
        <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden m-4">
            <img className="w-full object-cover" src={img} alt={nombre} />
            <div className="p-4">
                <h2 className="text-gray-900 font-semibold">{nombre}</h2>
                <p className="text-gray-600">${precio}</p>
                <p className={`text-sm mt-2 ${categoria === "ConAlcohol" ? "text-red-500 font-semibold" : "text-green-500 font-semibold"}`}>
                    {descripcion}
                </p>
                <div>
                    <ItemContador initial={1} onAdd={(cantidad) => console.log(`Agregaste ${cantidad} ${nombre} Al carrito`)} />
                </div>
            </div>
        </div>
    );
}

export default DetallesCard;