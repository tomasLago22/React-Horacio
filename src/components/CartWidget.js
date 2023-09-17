import React from 'react';
import { Link } from 'react-router-dom'; 
import { useMiContexto } from './MiContexto';

function CartWidget() {

    const { cantidadTotal } = useMiContexto();


    return (
        <div className="flex items-center ml-10">
            <Link to="/carrito" className="text-white hover:text-gray-300">
                <i className="material-icons text-white hover:text-gray-300">shopping_cart</i>
            </Link>
            <span className="text-white hover:text-gray-300">{cantidadTotal }</span>
        </div>
    );
}

export default CartWidget;