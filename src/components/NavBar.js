import CartWidget from "./CartWidget"
import { Link, NavLink} from "react-router-dom";

function NavBar (){
    return(
        
        <nav className="bg-gray-800 p-2 flex justify-center items-center">
            <div className="space-x-4 justify-center items-center">
                <Link to={`/`} className="text-white hover:text-gray-300 mr-10">Inicio</Link>
                <NavLink to={`categoria/ConAlcohol`} className="text-white hover:text-gray-300">Bebidas Con alcohol</NavLink>
                <NavLink to={`categoria/SinAlcohol`} className="text-white hover:text-gray-300">Bebidas Sin Alcohol</NavLink>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar