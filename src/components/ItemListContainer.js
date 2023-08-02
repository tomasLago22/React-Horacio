const ItemListContainer = ({ mensaje }) => {
    const agregarAlCarrito = () => {
      console.log('Producto agregado al carrito');
    };
  
    return (
      <div className="container">
        <h2 className="text-center">{mensaje}</h2>
        <button className="btn btn-primary" onClick={agregarAlCarrito}>
          Agregar al carrito
        </button>
      </div>
    );
  };
  
  export default ItemListContainer;