import React, { useState } from 'react';

function Centigrados(){
    const [CentigradosFarenheit, setCentigrados] = useState();
    const [FarenheitCentigrados, setfarenheit] = useState();
    var faren = (CentigradosFarenheit*1.8)+32;
    var celcius = (FarenheitCentigrados-32)/1.8;
    
    return(
        <div>
            <h1>centigrados a farenheit y viceversa</h1>
            <p>celcius a farenheit</p><input
            type='number'
            placeholder='ingrese gadros centigrados'
            value={CentigradosFarenheit}
            onChange={e =>{
                setCentigrados(e.target.value)
            }}
            ></input><p>grados farenheit value {faren}</p>
            
            <p>farenheit a celcius</p><input
            type='number'
            placeholder='ingrese gadros farenheit'
            value={FarenheitCentigrados}
            onChange={e =>{
                setfarenheit(e.target.value)
            }}></input><p>grados celcius {celcius}</p>
        </div>
    );
}

export default Centigrados;