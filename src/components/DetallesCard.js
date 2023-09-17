import React from 'react';
import ItemContador from './ItemContador';
import { useMiContexto } from "./MiContexto";

const DetallesCard = ({ id, nombre, img, precio, descripcion, categoria }) => {
    const { agregarAlCarrito } = useMiContexto();

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
                    <ItemContador
                        id={id}
                        nombre={nombre}
                        precio={precio}
                        onAdd={(cantidad) => {
                            agregarAlCarrito({
                                id,
                                nombre,
                                img,
                                precio,
                                descripcion,
                                categoria,
                                cantidad
                            });
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default DetallesCard;