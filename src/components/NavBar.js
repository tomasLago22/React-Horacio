import CartWidget from "./CartWidget"


function NavBar (){
    return(
        <nav className="bg-gray-800 p-2 flex justify-center items-center">
            <div className="space-x-4 justify-center items-center">
                <a href="#" className="text-white hover:text-gray-300">Inicio</a>
                <a href="#" className="text-white hover:text-gray-300">Productos</a>
                <a href="#" className="text-white hover:text-gray-300">Contacto</a>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar