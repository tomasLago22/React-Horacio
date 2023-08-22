import { useState, useEffect } from 'react'
import { getProducts, getProductsByCategory } from './Productos'
import ItemList from    "./ItemList"
import { useParams } from 'react-router-dom'


const ItemListContainer = ({greeting}) =>{
    const [productos, setProductos] = useState([])

    const {categoriaId} = useParams


useEffect(() => {
    const asyncFunc = categoriaId ? getProductsByCategory : getProducts
    asyncFunc(categoriaId)
    .then(response =>{
        setProductos(response)
    })
    .catch(error =>{
        console.error(error)
    })
}, [categoriaId])

return (
    <>
    <h1>{greeting}</h1>
    <ItemList productos={productos} />
    </>
)

}
export default ItemListContainer