import { useState, useEffect } from 'react';
import { getProductsById } from './Productos';
import DetallesCard from './DetallesCard';
import { useParams } from 'react-router-dom';

const ItemDetallesContainer = () => {
    const [producto, setProducto] = useState(null);

    const {itemId} = useParams()


    useEffect(() => {
        getProductsById(itemId)
            .then(response => {
                setProducto(response);
            })
            .catch(error => {
                console.error(error);
            });
    }, [itemId]);

    return (
        <div className='itemDetallesContainer'>
            <DetallesCard {...producto} />
        </div>
    );
};

export default ItemDetallesContainer;