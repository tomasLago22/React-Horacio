import { useState, useEffect } from 'react';
import { getProductsById } from './Productos';
import DetallesCard from './DetallesCard';
import { useParams } from 'react-router-dom';
import { getDocs, collection } from "firebase/firestore";
import { db } from "../components/firebase"

const ItemDetallesContainer = () => {
    const [producto, setProducto] = useState(null);

    const { itemId } = useParams();

    useEffect(() => {
        const productosCollection = collection(db, 'productos');
        const laConsulta = getDocs(productosCollection);

        laConsulta
            .then((resultado) => {
                console.log(resultado.docs);
            })
            .catch((error) => {
                console.log(error);
            });

        getProductsById(itemId)
            .then((response) => {
                setProducto(response);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [itemId]);

    return (
        <div className="itemDetallesContainer">
            <DetallesCard {...producto} />
        </div>
    );
};

export default ItemDetallesContainer;