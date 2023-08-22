import React from 'react';
import { Link} from "react-router-dom";

const Item = ({ id, nombre, img, precio, categoria }) => {
  return (
    <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden m-4 mt-10">
      <img className="w-full object-cover" src={img} alt={nombre} />
      <div className="p-4">
        <h2 className="text-gray-900 font-semibold">{nombre}</h2>
        <p className="text-gray-600 mb-3">${precio}</p>
        <Link to ={`/item/${id}`} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
          Ver detalles
        </Link>
      </div>
    </div>
  );
};

export default Item;
