import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from './firebase'; // Importa la instancia de Firebase

import ItemList from "./ItemList";
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const { categoriaId } = useParams();

  useEffect(() => {
    // Define la colección de Firebase que deseas consultar
    const productosCollection = collection(db, 'productos');

    // Crea una consulta en función de si hay una categoría seleccionada o no
    const q = categoriaId ? query(productosCollection, where('categoria', '==', categoriaId)) : productosCollection;

    // Ejecuta la consulta y obtiene los documentos
    getDocs(q)
      .then((querySnapshot) => {
        const productsData = [];
        querySnapshot.forEach((doc) => {
          // Agrega cada documento a la matriz de datos
          productsData.push({ id: doc.id, ...doc.data() });
        });
        setProductos(productsData);
      })
      .catch(error => {
        console.error(error);
      });
  }, [categoriaId]);

  return (
    <>
      <h1>{greeting}</h1>
      <ItemList productos={productos} />
    </>
  );
}

export default ItemListContainer;