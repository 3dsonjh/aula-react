import { useState } from "react";

export default function Contador(prop)
{
    //Cria variável de estado
    // Começando com zero
    //const [valor, setValor] = useState(0);
    // Começando com valor setado no index
    const [valor, setValor] = useState(prop.valor);

    function add()
    {
        setValor(valor+1)
        console.log(valor);
    }

    function del()
    {
        setValor(valor-1)
        console.log(valor);
    }

    return(
       
        <div>
            <button onClick={del}>- Menos</button>            
            &nbsp;
            <span>{ valor }</span>
            &nbsp;
            <button onClick={add}>+ Mais</button>
        </div>
    );
}