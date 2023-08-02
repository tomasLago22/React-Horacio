import { useState } from "react" //Se importa el HOOK 


function Contador (){
    

    //Valores
let [contador,setContador] = useState (0) //Variable de estado, esto te asegura que tenes una variable Reactiva.

    //Acciones
const handleClick = () => {
    setContador(contador + 1)
   
}

    //Vista
return(
    <main className="p-2 grow">
        <p> Contador : {contador}</p>
        
        <button onClick={handleClick}> click</button>
    </main>
)

}

export default Contador ;