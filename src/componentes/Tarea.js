import React, { useState } from 'react';

function Tarea(props){
  const[inputText, setInputText] = useState([]);
  return(
    <div className='input-contenedor'>
      <input
      type='text'
      className='input-caja'
      placeholder='ingrese su tarea'
      value={inputText}
      onChange={e =>{
        setInputText(e.target.value)
      }}/>
      <button className='boton-agregars'
      onClick={()=>{
      props.addList(inputText)
      setInputText("")}}>
        +
      </button>
      
    </div>
  );
}

export default Tarea;