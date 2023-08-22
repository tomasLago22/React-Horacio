const productos = [
    {
    id: "1",
    nombre: "Coca Cola",
    categoria: "SinAlcohol",
    img: "https://d1on8qs0xdu5jz.cloudfront.net/webapp/images/fotos/b/0000000000/2175_1.jpg",
    precio: 900,
    descripcion: "Sin contenido alcoholico"
},
{
    id: "2",
    nombre: "Fernet",
    categoria: "ConAlcohol",
    img: "https://www.drinkshopstore.com/3882-large_default/fernet-branca-1l-390-vol.jpg",
    precio: 3900,
    descripcion: "Prohibida su venta para menores de 18 años"
},
{
    id: "3",
    nombre: "Seven up",
    categoria: "SinAlcohol",
    img: "https://masonlineprod.vtexassets.com/arquivos/ids/189598-800-auto?v=637841667082400000&width=800&height=auto&aspect=true",
    precio: 765,
    descripcion: "Sin contenido alcoholico"
}

]

export const getProducts = () => {
    return new Promise ((resolve) =>{
        setTimeout(()=>{
            resolve(productos)
        },500)
    })
}

export const getProductsById = (productoId) =>{
    return new Promise ((resolve) =>{
        setTimeout(()=>{
            resolve(productos.find(prod => prod.id === productoId))
        },500)
    })
}

export const getProductsByCategory = (categoria) => {
    const filteredProducts = productos.filter(prod => prod.categoria === categoria);
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(filteredProducts);
        }, 500);
    });
};