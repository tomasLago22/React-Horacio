import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from './firebase'; 

import ItemList from "./ItemList";
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const { categoriaId } = useParams();

  useEffect(() => {
    
    const productosCollection = collection(db, 'productos');

    
    const q = categoriaId ? query(productosCollection, where('categoria', '==', categoriaId)) : productosCollection;


    getDocs(q)
      .then((querySnapshot) => {
        const productsData = [];
        querySnapshot.forEach((doc) => {
      
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