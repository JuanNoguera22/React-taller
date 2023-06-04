import React, { useState } from "react";

function Contador() {

    const[valor, setvalor] = useState(0);
    const aumentar = () =>{
        setvalor(valor+1);
    }
    const bajar = () =>{
        setvalor(valor-1);
    }

    return(
        <div>
            <h1>{valor}</h1>
            <button
            onClick={aumentar}>aumentar</button>
            <button
            onClick={bajar}>bajar</button>
        </div>
    );
}

export default Contador;