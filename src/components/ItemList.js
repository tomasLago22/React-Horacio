import Item from "./Item"


const ItemList = ({productos}) =>{
    return(
        <div className="flex -flex-wrapp justify-center">
            {productos.map(prod => <Item key= {prod.id} {...prod} />)}
        </div>
    )
}

export default ItemList